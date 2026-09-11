# sucralfate

- **generic name:** sucralfate
- **ATC codes:** `A02BX02`
- **DrugBank:** [DB00364](https://go.drugbank.com/drugs/DB00364)
- **groups:** approved, investigational

## About

**Description.** Sucralfate is a medication that is widely used to prevent and treat a number of diseases in the gastrointestinal tract such as duodenal ulcers [FDA label], gastro-esophageal reflux disease (GERD), gastritis, peptic ulcer disease, stress ulcer, in addition to dyspepsia [A177655].  It is considered a _cytoprotective agent_, protecting cells in the gastrointestinal tract from damage caused by agents such as gastric acid, bile salts, alcohol, and acetylsalicylic acid (aspirin), among other substances [A177655, F4519].

Sucralfate has been shown to be a well-tolerated and safe drug. It is sold under many brands and is available in both tablet and suspension forms.  It was approved by the FDA  1982 in tablet form, and in 1994 for the suspension form [L6073, L6076].

**Indication.** The sucralfate suspension [FDA label] and tablet [F4534] are used for the treatment of active duodenal ulcer for up to 8 weeks.  The tablet form may be used at a lower dose for healed duodenal ulcers, for the purpose of maintaining healing and preventing recurrence [F4519, F4534]. 

Sucralfate is also used in the prevention and/or treatment of gastro-esophageal reflux disease (GERD), gastritis, peptic ulcer disease, stress ulcer, in addition to dyspepsia [A177655, F4519].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 20:48 | 14:33 | 0/0/0 | 0/1/0 | 0/0/0 | 149,356/5,650 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 8/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Douglas_2025](drugs/drug_sucralfate/pd_Douglas_2025_pain.md) | Douglas C et al., Mucositis Pain and Its Temporal Relatio…, Paediatric anaesthesia (2025) | [10.1111/pan.15063](https://doi.org/10.1111/pan.15063) |

## Coverage

- **PubMed hits:** 59 matched, 54 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Urzúa_2020.pdf` | Urzúa N et al., Pharmacokinetics of levofloxacin after…, Xenobiotica; the fate of fo… (2020) | pd | 5 | [10.1080/00498254.2020.1793031](https://doi.org/10.1080/00498254.2020.1793031) | [32628058](https://www.ncbi.nlm.nih.gov/pubmed/32628058) | metadata signals extractable PD data (PK-PD) |
| `Harada_1994.pdf` | Harada Y et al., Receptor binding profiles of KB-5492, a…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90558-4](https://doi.org/10.1016/0014-2999(94)90558-4) | [8045277](https://www.ncbi.nlm.nih.gov/pubmed/8045277) | metadata signals extractable PD data (IC50) |
| `Mishra_2013.pdf` | Mishra V et al., Anti-secretory and cyto-protective effe…, Phytomedicine : internation… (2013) | pd | 4 | [10.1016/j.phymed.2013.01.002](https://doi.org/10.1016/j.phymed.2013.01.002) | [23462212](https://www.ncbi.nlm.nih.gov/pubmed/23462212) | metadata signals extractable PD data (IC50) |
| `Singh_2013.pdf` | Singh VK et al., Anti-secretory and cyto-protective effe…, Phytomedicine : internation… (2013) | pd | 4 | [10.1016/j.phymed.2013.06.017](https://doi.org/10.1016/j.phymed.2013.06.017) | [23880327](https://www.ncbi.nlm.nih.gov/pubmed/23880327) | metadata signals extractable PD data (IC50) |
| `Turnheim_2004.pdf` | Turnheim K, [Drug interactions with antiepileptic a…, Wiener klinische Wochenschr… (2004) | pgx | 7 | [10.1007/BF03040747](https://doi.org/10.1007/BF03040747) | [15038401](https://www.ncbi.nlm.nih.gov/pubmed/15038401) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Aoyama_1999.pdf` | Aoyama N et al., Sufficient effect of 1-week omeprazole…, Journal of gastroenterology (1999) | pgx | 5 | not captured | [10616772](https://www.ncbi.nlm.nih.gov/pubmed/10616772) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T20:45:48.328805+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albengres_1998 | irrelevant | 0 | 0 | The paper is a review of antifungal drug interactions where sucralfate is mentioned only as a co-administered agent that reduces bioavailability, with no PK parameters reported for sucralfate itself. |
| PD | Albengres_1998 | not_relevant | 0 | 0 | The text is a review of drug interactions for systemic antifungals and mentions sucralfate only as a drug that reduces the bioavailability of ketoconazole/itraconazole; it contains no pharmacodynamic or exposure-response analysis for sucralfate. |
| PGx | Aoyama_1999 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of omeprazole (CYP2C19), not sucralfate, which is only used as an adjunctive therapy. |
| popPK | Athanassa_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for minocycline, not sucralfate, which is only mentioned as an excluded co-administered medication. |
| PD | Athanassa_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for minocycline, not sucralfate, and does not provide any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Brogden_1984 | irrelevant | 0 | 0 | The paper is a clinical review of therapeutic use and pharmacodynamics, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Brogden_1984 | not_relevant | 1 | 0 | The text is a qualitative review of therapeutic efficacy and side effects, lacking any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of NSAID interactions where sucralfate is mentioned only as a co-administered agent affecting NSAID absorption, with no PK parameters reported for sucralfate itself. |
| PD | Brouwers_1994 | not_relevant | 1 | 0 | The text is a general review of NSAID drug interactions that qualitatively mentions sucralfate affecting absorption but provides no numeric PD parameters or exposure-response data. |
| popPK | Campisi_1997 | irrelevant | 0 | 0 | The paper is a clinical review and pilot study on efficacy in oral medicine, containing no pharmacokinetic parameters or quantitative disposition data for sucralfate. |
| PD | Campisi_1997 | not_relevant | 1 | 0 | The paper is a review of clinical trials and a small pilot study reporting only qualitative efficacy percentages (symptom improvement rates) without any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Chin_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketoconazole, not sucralfate. |
| PD | Chin_1995 | not_relevant | 0 | 0 | The paper studies ketoconazole absorption and does not mention sucralfate or report any pharmacodynamic parameters. |
| PGx | Cole_2026 | not_relevant | 0 | 0 | The study investigates CYP2C19 effects on PPI dosing and outcomes, mentioning sucralfate only as a historical medication trialed without reporting any pharmacokinetic or pharmacodynamic parameters for it. |
| popPK | Douglas_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of pain relief in mucositis (morphine, ketamine, white cell count) and does not report pharmacokinetic parameters for sucralfate, which is only mentioned as a background intervention. |
| popPK | Garnett_1993 | irrelevant | 0 | 0 | The paper is a clinical review of GERD management that mentions sucralfate only as a therapeutic option without reporting any quantitative pharmacokinetic parameters. |
| PD | Garnett_1993 | not_relevant | 1 | 0 | The text is a general review of GERD management that mentions sucralfate only as a drug class without providing any specific pharmacodynamic data, exposure-response relationships, or numeric parameters. |
| PGx | Geus_2000 | not_relevant | 0 | 0 | The paper discusses clinical efficacy and drug interactions of acid-inhibiting drugs but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Gorget_1985 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic properties and explicitly states sucralfate is slightly absorbed without providing any quantitative pharmacokinetic parameters. |
| PD | Gorget_1985 | not_relevant | 1 | 0 | The text is a qualitative review of sucralfate's mechanism of action and general properties, containing no numeric PD parameters, dose-response curves, or exposure-response data. |
| popPK | Gorshkov_1994 | irrelevant | 0 | 0 | The paper is a clinical study on ulcer healing and pharmacodynamics, not a pharmacokinetic study, and contains no quantitative PK parameters for sucralfate. |
| PD | Gorshkov_1994 | not_relevant | 1 | 0 | The text provides only a qualitative summary of clinical outcomes (ulcer healing, acidity) without reporting any numeric concentration-effect or dose-response parameters for sucralfate. |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moxifloxacin, not sucralfate, which is only mentioned as a concomitant medication of interest. |
| PD | Greenberg_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of moxifloxacin in children and does not report any pharmacodynamic or exposure-response relationship for sucralfate. |
| popPK | Gregory_1991 | irrelevant | 0 | 0 | The paper is a morphometric study of mucosal cytology and contains no pharmacokinetic parameters for sucralfate. |
| PD | Gregory_1991 | not_relevant | 2 | 1 | The paper reports a qualitative difference in mucosal cytology (goblet cell count) between sucralfate and cimetidine groups but provides no concentration-effect data, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Harada_1994 | irrelevant | 0 | 0 | The paper focuses on receptor binding profiles of a different drug (KB-5492) and does not report pharmacokinetic parameters for sucralfate. |
| PD | Harada_1994 | not_relevant | 0 | 0 | The paper investigates the receptor binding profile of KB-5492, not sucralfate, and does not report any pharmacodynamic or exposure-response data for sucralfate. |
| popPK | Janknegt_1990 | irrelevant | 0 | 0 | The paper is a review of drug interactions with quinolones where sucralfate is only mentioned as an agent that reduces absorption, with no PK parameters reported for sucralfate itself. |
| PD | Janknegt_1990 | not_relevant | 1 | 0 | The text is a review that qualitatively mentions sucralfate reduces fluoroquinolone absorption but provides no numeric PD parameters, dose-response curves, or exposure-response data. |
| popPK | Jayaweera_2017 | irrelevant | 0 | 0 | The paper is a case report on chloroform poisoning where sucralfate is only mentioned as a supportive treatment, and no pharmacokinetic parameters for sucralfate are reported. |
| popPK | Jiao_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not sucralfate. |
| PD | Jiao_2009 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of sirolimus, not pharmacodynamics (PD) or exposure-response relationships for sucralfate. |
| popPK | Jørgensen_1991 | irrelevant | 0 | 0 | The study is a clinical trial assessing pharmacodynamic effects (pH and motility) rather than pharmacokinetic parameters, and no PK values are reported. |
| PD | Jørgensen_1991 | not_relevant | 2 | 0 | The paper reports qualitative changes in oesophageal pH and motility parameters (mean pH, emptying rate, spikes) but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for sucralfate. |
| popPK | Jørgensen_1991_2 | irrelevant | 0 | 0 | The paper is a clinical trial comparing efficacy and esophageal motor function, reporting no pharmacokinetic parameters for sucralfate. |
| PD | Jørgensen_1991_2 | not_relevant | 1 | 0 | The paper reports clinical outcomes (healing rates, symptom relief) and qualitative changes in pH/motility, but provides no numeric concentration-effect or dose-response parameters (e.g., Emax, EC50) for sucralfate. |
| popPK | Kleine_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of rebamipide (prostaglandin biosynthesis) and mentions sucralfate only as a comparator in the introduction, providing no pharmacokinetic parameters for sucralfate. |
| PD | Kleine_1993 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of rebamipide and only mentions sucralfate qualitatively in the introduction without providing any PK/PD data or numeric parameters for it. |
| popPK | KuKanich_2014 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of minocycline, with sucralfate serving only as a co-administered agent to test for drug interactions, and no PK parameters for sucralfate itself are reported. |
| PD | KuKanich_2014 | not_relevant | 3 | 2 | The study reports a qualitative drug-drug interaction (reduced absorption) and a dosing recommendation based on a PK index (AUC:MIC), but it does not report a concentration-effect or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for sucralfate. |
| popPK | Lakshmi_2010 | irrelevant | 0 | 0 | The study investigates the anti-ulcer mechanism of Xylocarpus granatum constituents, using sucralfate only as a standard comparator for efficacy, with no pharmacokinetic parameters reported. |
| PD | Lakshmi_2010 | not_relevant | 0 | 0 | The paper reports anti-ulcer activity and H+/K+-ATPase IC50 values for Xylocarpus granatum constituents, but provides no pharmacodynamic or exposure-response data for sucralfate. |
| popPK | Lauritsen_1990 | irrelevant | 1 | 0 | The paper is a review article that briefly discusses sucralfate as a site-protective drug but does not report original quantitative pharmacokinetic parameter values. |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is a general review introduction that mentions pharmacokinetic-pharmacodynamic relationships as a topic to be discussed, but it does not provide any specific numeric PD parameters or exposure-response data for sucralfate. |
| popPK | Miller_1990 | irrelevant | 0 | 0 | The paper is a review of smoking effects on various drugs and mentions sucralfate only qualitatively as a potentially useful treatment for ulcers in smokers, without reporting any pharmacokinetic parameters. |
| PD | Miller_1990 | not_relevant | 1 | 0 | The text is a general review of smoking effects on drug therapy and only qualitatively mentions sucralfate's utility in smokers without providing any numeric PD parameters or exposure-response data. |
| popPK | Mishra_2013 | irrelevant | 0 | 0 | The paper focuses on the anti-secretory and cyto-protective effects of chebulinic acid, not the pharmacokinetics of sucralfate. |
| PD | Mishra_2013 | not_relevant | 0 | 0 | The paper investigates the effects of chebulinic acid, not sucralfate. |
| popPK | Moore_1991 | irrelevant | 0 | 0 | The paper is a review of H2-receptor antagonists for stress ulceration and mentions sucralfate only as a comparator, providing no pharmacokinetic parameters for sucralfate. |
| PD | Moore_1991 | not_relevant | 1 | 0 | The text is a review discussing H2-receptor antagonists and mentions sucralfate only as a comparison for ease of administration, without providing any numeric PD parameters or exposure-response data for sucralfate. |
| popPK | Mulford_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of vonoprazan, not sucralfate, which is only mentioned as an excluded concomitant medication. |
| PD | Mulford_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of vonoprazan (not sucralfate) and only qualitatively assesses GERD symptoms without reporting any numeric pharmacodynamic parameters or exposure-response models. |
| popPK | Nysaeter_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sucralfate's protective effect on blood clots and does not report any pharmacokinetic parameters. |
| popPK | Olivero_1992 | irrelevant | 0 | 0 | The paper is a review of gastric adaptation mechanisms where sucralfate is mentioned only as a comparator that does not enhance adaptation, with no pharmacokinetic parameters reported. |
| PD | Olivero_1992 | not_relevant | 1 | 0 | The text mentions a qualitative dose-response effect for NSAIDs and states that sucralfate does not enhance adaptation, but it provides no numeric PD parameters, concentration-effect curves, or quantitative exposure-response data for sucralfate. |
| popPK | Payen_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, not sucralfate. |
| PD | Payen_2003 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of ciprofloxacin and does not contain any pharmacodynamic or exposure-response analysis for sucralfate or any other drug. |
| popPK | Perlstein_2012 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacogenetics and PK/PD modeling, not sucralfate. |
| PD | Perlstein_2012 | not_relevant | 0 | 0 | The paper focuses on warfarin pharmacogenetics and dosing algorithms, not sucralfate, and does not report specific numeric PD parameters for sucralfate. |
| PGx | Rainsford_1988 | not_relevant | 0 | 0 | The paper discusses NSAID side effects and mentions sucralfate only as a prophylactic agent, without reporting any pharmacogenomic effects on sucralfate's PK or PD. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy (pain and wound healing) for topical sucralfate and contains no pharmacokinetic parameters. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating efficacy (pain scores, wound healing) but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for sucralfate. |
| popPK | Shameer_2018 | irrelevant | 0 | 0 | The paper is a bioinformatics study on drug repositioning databases and does not report pharmacokinetic parameters for sucralfate. |
| PD | Shameer_2018 | not_relevant | 0 | 0 | The paper describes a database for drug repositioning and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sucralfate. |
| popPK | Singh_2013 | irrelevant | 0 | 0 | The paper focuses on the anti-secretory and cyto-protective effects of peganine hydrochloride, not the pharmacokinetics of sucralfate. |
| PD | Singh_2013 | not_relevant | 0 | 0 | The paper investigates peganine hydrochloride, not sucralfate, and does not report any pharmacodynamic or exposure-response data for sucralfate. |
| popPK | Slomiany_1986 | irrelevant | 0 | 0 | The study investigates the effect of sucralfate on gastric mucus viscosity and permeability (mechanistic/in-vitro) and does not report any pharmacokinetic parameters. |
| popPK | Smith_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pantoprazole, not sucralfate. |
| PD | Smith_2021 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters for pantoprazole and its metabolite in goats, with no pharmacodynamic or exposure-response data. |
| popPK | Szabo_1998 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on radiation-induced enterocolitis in animals and does not report any pharmacokinetic parameters for sucralfate. |
| PD | Szabo_1998 | not_relevant | 3 | 1 | The text describes a qualitative dose-dependent effect of sucralfate in an animal model but does not provide specific dose levels, numeric effect magnitudes, or a concentration-effect curve to derive PD parameters. |
| popPK | Turnheim_2004 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment regarding drug interactions with antiepileptic agents and lacks any pharmacokinetic data or quantitative parameters for sucralfate. |
| PD | Turnheim_2004 | not_relevant | 0 | 0 | The paper discusses drug interactions with antiepileptic agents and does not report any pharmacodynamic or exposure-response data for sucralfate. |
| PGx | Turnheim_2004 | not_relevant | 0 | 0 | The paper discusses drug interactions with antiepileptic agents and does not report pharmacogenomic effects on sucralfate. |
| popPK | Uehlinger_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fleroxacin, not sucralfate. |
| PD | Uehlinger_1996 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for fleroxacin in hemodialysis patients and does not mention sucralfate or any pharmacodynamic/exposure-response relationship. |
| popPK | Urzúa_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levofloxacin, with sucralfate serving only as an interacting agent rather than the subject drug. |
| PD | Urzúa_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of levofloxacin and its interaction with sucralfate, reporting PK parameters (AUC, Cmax, etc.) rather than a pharmacodynamic or exposure-response relationship for sucralfate itself. |
| popPK | Varley_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatments for equine gastric disease and does not report any pharmacokinetic parameters for sucralfate. |
| PD | Varley_2019 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two treatments and reports no pharmacokinetic data, concentration-effect relationships, or numeric PD parameters for sucralfate. |
| popPK | Verbeeck_1990 | irrelevant | 0 | 0 | The paper is a review of NSAID drug interactions where sucralfate is mentioned only as a co-administered agent affecting NSAID absorption, with no PK parameters reported for sucralfate itself. |
| PD | Verbeeck_1990 | not_relevant | 1 | 0 | The text is a general review of pharmacokinetic interactions involving NSAIDs and mentions sucralfate only qualitatively regarding absorption delay, without providing any numeric PD parameters or exposure-response data. |
| popPK | Wolfson_1991 | irrelevant | 0 | 0 | The paper is a review of quinolone pharmacokinetics where sucralfate is only mentioned as a co-administered agent affecting absorption, not as the subject drug. |
| PD | Wolfson_1991 | not_relevant | 0 | 0 | The paper is a review of quinolone pharmacokinetics and only qualitatively mentions that sucralfate reduces quinolone bioavailability, without providing any PD or exposure-response data for sucralfate itself. |
| popPK | Yata_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sildenafil in dogs, and sucralfate is only mentioned as an exclusion criterion for concurrent medication. |
| PD | Yata_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of sildenafil in dogs, not sucralfate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | unknown_1996 | irrelevant | 0 | 0 | The paper is a collection of pediatric intensive care abstracts with no mention of sucralfate or its pharmacokinetic parameters. |
| PD | unknown_1996 | not_relevant | 0 | 0 | The provided text is only the title and metadata for a conference abstract collection, containing no specific study data, results, or pharmacodynamic parameters for sucralfate. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or study details for sucralfate. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for a conference session and contains no data, analysis, or mention of sucralfate pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sucralfate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
