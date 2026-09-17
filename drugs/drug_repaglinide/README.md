<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;repaglinide&quot;}]"></div>

# repaglinide

- **generic name:** repaglinide
- **ATC codes:** `A10BD14`, `A10BX02`
- **DrugBank:** [DB00912](https://go.drugbank.com/drugs/DB00912)
- **groups:** approved, investigational

## About

**Description.** Repaglinide is an oral antihyperglycemic agent used for the treatment of non-insulin-dependent diabetes mellitus (NIDDM). It belongs to the meglitinide class of short-acting insulin secretagogues, which act by binding to β cells of the pancreas to stimulate insulin release. Repaglinide induces an early insulin response to meals decreasing postprandial blood glucose levels. It should only be taken with meals and meal-time doses should be skipped with any skipped meal. Approximately one month of therapy is required before a decrease in fasting blood glucose is seen. Meglitnides may have a neutral effect on weight or cause a slight increase in weight. The average weight gain caused by meglitinides appears to be lower than that caused by sulfonylureas and insulin and appears to occur only in those naïve to oral antidiabetic agents. Due to their mechanism of action, meglitinides may cause hypoglycemia although the risk is thought to be lower than that of sulfonylureas since their action is dependent on the presence of glucose. In addition to reducing postprandial and fasting blood glucose, meglitnides have been shown to decrease glycosylated hemoglobin (HbA1c) levels, which are reflective of the last 8-10 weeks of glucose control. Meglitinides appear to be more effective at lowering postprandial blood glucose than metformin, sulfonylureas and thiazolidinediones. Repaglinide is extensively metabolized in the liver and excreted in bile. Repaglinide metabolites do not possess appreciable hypoglycemic activity. Approximately 90% of a single orally administered dose is eliminated in feces and 8% in urine.

**Indication.** As an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 23:58 | 14:30 | 0/0/0 | 0/0/0 | 0/0/0 | 64,283/3,717 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/3 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ruzilawati_2010](drugs/drug_repaglinide/Repaglinide_Ruzilawati2010_healthy_malaysian_volunteers.md) | Ruzilawati AB et al., Population pharmacokinetic modelling of…, Journal of clinical pharmac… (2010) | [10.1111/j.1365-2710.2009.01042.x](https://doi.org/10.1111/j.1365-2710.2009.01042.x) |

## Coverage

- **PubMed hits:** 292 matched, 58 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_22 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruzilawati_2010.pdf` | Ruzilawati AB et al., Population pharmacokinetic modelling of…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1111/j.1365-2710.2009.01042.x](https://doi.org/10.1111/j.1365-2710.2009.01042.x) | [20175819](https://pubmed.ncbi.nlm.nih.gov/20175819) | The paper reports quantitative population PK parameters (kel, Vd) for repaglinide in healthy volunteers with specific numeric values provided in the text. |
| `Gertz_2014.pdf` | Gertz M et al., Reduced physiologically-based pharmacok…, Pharmaceutical research (2014) | popPK | 9 | [10.1007/s11095-014-1333-3](https://doi.org/10.1007/s11095-014-1333-3) | [24623479](https://pubmed.ncbi.nlm.nih.gov/24623479) | The paper reports a PBPK model for repaglinide with specific numeric values for hepatic uptake clearance (CLuptake), but standard systemic PK parameters like total clearance, volume of distribution, and half-life are not explicitly provided in the text. |
| `Liu_2000.pdf` | Liu XD et al., A double-site absorption model fits to…, European journal of drug me… (2000) | popPK | 9 | [10.1007/BF03190077](https://doi.org/10.1007/BF03190077) | [11112092](https://pubmed.ncbi.nlm.nih.gov/11112092) | The paper reports a compartmental model for repaglinide with specific numeric parameters (Tmax, Cmax, T1-T3) present in the text, though standard CL/Vd values are not explicitly listed. |
| `Cao_2012.pdf` | Cao Y et al., Applications of minimal physiologically…, Journal of pharmacokinetics… (2012) | popPK | 8 | [10.1007/s10928-012-9280-2](https://doi.org/10.1007/s10928-012-9280-2) | [23179857](https://pubmed.ncbi.nlm.nih.gov/23179857) | The paper describes a PK modeling study including repaglinide, but the specific numeric parameter values are not present in the provided evidence. |
| `Haidar_2002.pdf` | Haidar SH et al., Modeling the pharmacokinetics and pharm…, Pharmaceutical research (2002) | popPK | 8 | [10.1023/a:1013611617787](https://doi.org/10.1023/a:1013611617787) | [11837705](https://pubmed.ncbi.nlm.nih.gov/11837705) | The paper describes a population PK/PD modeling study for repaglinide, but the evidence provided contains only qualitative descriptions of covariates and model performance metrics, with no specific numeric PK parameter values (CL, V, etc.) present. |
| `Li_2012.pdf` | Li C et al., Effects of efonidipine on the pharmacok…, Journal of pharmacokinetics… (2012) | pd | 5 | [10.1007/s10928-011-9234-0](https://doi.org/10.1007/s10928-011-9234-0) | [22210483](https://www.ncbi.nlm.nih.gov/pubmed/22210483) | metadata signals extractable PD data (indirectresponse) |
| `Lim_2004.pdf` | Lim JG et al., Taurine block of cloned ATP-sensitive K…, Biochemical pharmacology (2004) | pd | 4 | [10.1016/j.bcp.2004.05.050](https://doi.org/10.1016/j.bcp.2004.05.050) | [15294453](https://www.ncbi.nlm.nih.gov/pubmed/15294453) | metadata signals extractable PD data (IC50) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Pei_2018.pdf` | Pei Q et al., Repaglinide-irbesartan drug interaction…, European journal of clinica… (2018) | pgx | 8 | [10.1007/s00228-018-2477-6](https://doi.org/10.1007/s00228-018-2477-6) | [29748863](https://www.ncbi.nlm.nih.gov/pubmed/29748863) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Tomalik-Scharte_2011.pdf` | Tomalik-Scharte D et al., Effect of the CYP2C8 genotype on the ph…, Drug metabolism and disposi… (2011) | pgx | 8 | [10.1124/dmd.110.036921](https://doi.org/10.1124/dmd.110.036921) | [21270106](https://www.ncbi.nlm.nih.gov/pubmed/21270106) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Wang_2015.pdf` | Wang ZY et al., Pharmacokinetic drug interactions with…, Therapeutics and clinical r… (2015) | pgx | 8 | [10.2147/TCRM.S80437](https://doi.org/10.2147/TCRM.S80437) | [25848291](https://www.ncbi.nlm.nih.gov/pubmed/25848291) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Cheng_2025.pdf` | Cheng Y et al., Evaluating the drug-drug interactions o…, Expert opinion on drug meta… (2025) | pgx | 7 | [10.1080/17425255.2024.2428367](https://doi.org/10.1080/17425255.2024.2428367) | [39530130](https://www.ncbi.nlm.nih.gov/pubmed/39530130) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Dai_2021.pdf` | Dai X et al., Napabucasin Drug-Drug Interaction Poten…, Clinical pharmacology in dr… (2021) | pgx | 7 | [10.1002/cpdd.961](https://doi.org/10.1002/cpdd.961) | [34107166](https://www.ncbi.nlm.nih.gov/pubmed/34107166) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Fu_2023.pdf` | Fu M et al., Effect of SHR0302 on the pharmacokineti…, British journal of clinical… (2023) | pgx | 7 | [10.1111/bcp.15856](https://doi.org/10.1111/bcp.15856) | [37464978](https://www.ncbi.nlm.nih.gov/pubmed/37464978) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hartauer_2024.pdf` | Hartauer M et al., Hepatic OATP1B zonal distribution: Impl…, CPT: pharmacometrics & syst… (2024) | pgx | 7 | [10.1002/psp4.13188](https://doi.org/10.1002/psp4.13188) | [38898552](https://www.ncbi.nlm.nih.gov/pubmed/38898552) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Ishii_2018.pdf` | Ishii Y et al., Clinical Drug-Drug Interaction Potentia…, Clinical and translational… (2018) | pgx | 7 | [10.1111/cts.12557](https://doi.org/10.1111/cts.12557) | [29768713](https://www.ncbi.nlm.nih.gov/pubmed/29768713) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Jaiswal_2025.pdf` | Jaiswal S et al., Assessing Cytochrome P450 Drug Interact…, CPT: pharmacometrics & syst… (2025) | pgx | 7 | [10.1002/psp4.70093](https://doi.org/10.1002/psp4.70093) | [40758244](https://www.ncbi.nlm.nih.gov/pubmed/40758244) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mamidi_2017.pdf` | Mamidi RNVS et al., In vitro and physiologically-based phar…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13186](https://doi.org/10.1111/bcp.13186) | [27862160](https://www.ncbi.nlm.nih.gov/pubmed/27862160) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Melillo_2019.pdf` | Melillo N et al., Accounting for inter-correlation betwee…, Journal of pharmacokinetics… (2019) | pgx | 7 | [10.1007/s10928-019-09627-6](https://doi.org/10.1007/s10928-019-09627-6) | [30905037](https://www.ncbi.nlm.nih.gov/pubmed/30905037) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Varma_2013.pdf` | Varma MV et al., Mechanistic modeling to predict the tra…, Pharmaceutical research (2013) | pgx | 7 | [10.1007/s11095-012-0956-5](https://doi.org/10.1007/s11095-012-0956-5) | [23307347](https://www.ncbi.nlm.nih.gov/pubmed/23307347) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Xiao_2015.pdf` | Xiao Q et al., Physiologically based pharmacokinetics…, Biopharmaceutics & drug dis… (2015) | pgx | 7 | [10.1002/bdd.1987](https://doi.org/10.1002/bdd.1987) | [26296069](https://www.ncbi.nlm.nih.gov/pubmed/26296069) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Gan_2010.pdf` | Gan J et al., Repaglinide-gemfibrozil drug interactio…, British journal of clinical… (2010) | pgx | 5 | [10.1111/j.1365-2125.2010.03772.x](https://doi.org/10.1111/j.1365-2125.2010.03772.x) | [21175442](https://www.ncbi.nlm.nih.gov/pubmed/21175442) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-09-15T23:55:09.024665+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aurinsalo_2026 | not_relevant | 0 | 0 | The study investigates food-drug interactions (grapefruit juice/lingonberry) rather than pharmacogenomic effects of gene variants on repaglinide PK. |
| popPK | Cao_2012 | relevant | 8 | 0 | The paper describes a PK modeling study including repaglinide, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Chen_2015 | not_relevant | 5 | 2 | The text is a review abstract that discusses general pharmacogenomic associations for glinides but does not report specific quantitative PK/PD parameter changes for repaglinide. |
| PGx | Cheng_2025 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (SHR4640 on repaglinide) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (napabucasin affecting repaglinide PK) in healthy volunteers, not a pharmacogenomic effect (gene variant/genotype) on repaglinide. |
| PGx | Doki_2018 | not_relevant | 0 | 0 | The study investigates the impact of inter-correlation between CYP3A4 and CYP2C8 enzyme abundances on PK variability using PBPK modeling, but does not report effects of specific gene variants or genotypes on repaglinide PK/PD parameters. |
| PGx | Fu_2023 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (DDI) with SHR0302, not the effect of genetic variants on repaglinide pharmacokinetics. |
| popPK | Fuhlendorff_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study focusing on insulin secretion and binding affinity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Gan_2010 | not_relevant | 2 | 5 | The study investigates a drug-drug interaction (gemfibrozil inhibiting repaglinide metabolism) and mentions UGT1A1 genotyping to confirm enzyme involvement, but it does not report a pharmacogenomic effect (genotype-driven change in PK/PD) for repaglinide. |
| popPK | Gertz_2014 | relevant | 9 | 2 | The paper reports a PBPK model for repaglinide with specific numeric values for hepatic uptake clearance (CLuptake), but standard systemic PK parameters like total clearance, volume of distribution, and half-life are not explicitly provided in the text. |
| popPK | Haidar_2002 | relevant | 8 | 0 | The paper describes a population PK/PD modeling study for repaglinide, but the evidence provided contains only qualitative descriptions of covariates and model performance metrics, with no specific numeric PK parameter values (CL, V, etc.) present. |
| PGx | Hartauer_2024 | not_relevant | 0 | 0 | The paper focuses on a PBPK modeling study of rifampicin-mediated drug-drug interactions and zonal OATP1B distribution, not on the effect of a specific gene variant or genotype on repaglinide pharmacokinetics. |
| PGx | Hoosain_2016 | not_relevant | 2 | 0 | The paper reports allele frequencies in specific populations and mentions a known association with repaglinide plasma concentrations, but it does not present new data or fitted effect sizes for repaglinide PK/PD parameters. |
| popPK | Hu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulinotropic effects on rat islets and does not report pharmacokinetic disposition parameters for repaglinide. |
| PGx | Ishii_2018 | not_relevant | 0 | 0 | The paper reports drug-drug interactions of BFE1224, not pharmacogenomic effects of gene variants on repaglinide PK/PD. |
| PGx | Jaiswal_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) involving dordaviprone and CYP enzymes, not pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Kahma_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism-based inhibition of CYP enzymes by drug metabolites (including repaglinide glucuronide) in vitro, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Kajosaari_2005 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (inhibition by fibrates/rifampicin) and enzyme contributions, but does not report pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Lenuzza_2016 | not_relevant | 0 | 0 | The paper reports PK parameters for repaglinide as a probe in a cocktail study, but does not report any pharmacogenomic effect (gene variant/genotype) on repaglinide's PK or PD parameters. |
| popPK | Li_2012 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| popPK | Lim_2004 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Lim_2004 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of taurine on cloned ATP-sensitive K+ channels in Xenopus oocytes and does not involve repaglinide or any pharmacokinetic/pharmacodynamic modeling. |
| PGx | Mamidi_2017 | not_relevant | 0 | 0 | The paper assesses drug-drug interaction potential of canagliflozin using PBPK models and does not report pharmacogenomic effects on repaglinide PK/PD. |
| popPK | Mayer_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adipocyte differentiation where repaglinide is used only as a negative control/comparator, with no pharmacokinetic parameters reported. |
| PD | Mayer_2011 | not_relevant | 0 | 0 | The paper investigates glimepiride and glibenclamide, and explicitly states that repaglinide had no effect on adipogenesis, providing no PD parameters for repaglinide. |
| popPK | Mele_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscle atrophy and does not report pharmacokinetic parameters for repaglinide. |
| popPK | Melillo_2019 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PGx | Melillo_2019 | not_relevant | 0 | 0 | The paper is a simulation study on global sensitivity analysis in PBPK modeling and does not report pharmacogenomic effects on repaglinide. |
| popPK | Ménochet_2012 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic model of rat hepatocyte uptake and metabolism, not a population pharmacokinetic study reporting in-vivo disposition parameters like CL, V, or ka for repaglinide. |
| popPK | Ménochet_2012_2 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic modeling of hepatocyte uptake transporters, not a population pharmacokinetic study reporting in-vivo disposition parameters like CL, V, or ka for repaglinide. |
| PGx | Ogilvie_2006 | not_relevant | 0 | 0 | The paper investigates the mechanism of gemfibrozil's inhibition of CYP2C8 and its implications for drug-drug interactions with repaglinide, but it does not report any pharmacogenomic effects (gene variants) on repaglinide's PK or PD parameters. |
| PGx | Pakkir_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP enzymes and OATP1B1, not pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Sang_2025 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions of isavuconazole and does not report pharmacogenomic effects on repaglinide. |
| PGx | Stenglein_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study using repaglinide as a probe substrate for CYP2C8, but it does not report any pharmacogenomic effects (gene variants/genotypes) on repaglinide's PK or PD parameters. |
| PGx | Topletz-Erickson_2022 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (pharmacokinetic changes due to enzyme inhibitors/inducers) but does not report pharmacogenomic effects (gene variants) on repaglinide PK/PD. |
| PGx | Türk_2020 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for trimethoprim and its interactions, not on the pharmacogenomics of repaglinide itself. |
| PGx | Varma_2013 | not_relevant | 0 | 0 | The paper focuses on mechanistic modeling of drug-drug interactions (DDIs) involving inhibitors, not on pharmacogenomic effects of genetic variants on repaglinide PK/PD. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions involving clopidogrel and does not report pharmacogenomic effects on repaglinide PK/PD parameters. |
| popPK | Wängler_2004 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro binding/functional evaluation of a radiolabeled analog for PET imaging, not a pharmacokinetic study of repaglinide. |
| popPK | Wängler_2004_2 | irrelevant | 1 | 0 | The paper focuses on the synthesis and PET imaging properties of a radiolabeled derivative of repaglinide, reporting biodistribution percentages and binding affinity (Kd) rather than standard pharmacokinetic disposition parameters (CL, V, ka) for the parent drug. |
| PGx | Xiao_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (repaglinide inhibiting pioglitazone) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Yılmaz_2022 | not_relevant | 0 | 0 | The paper discusses the diagnosis of MODY using HbA1c and GCK variants, but does not mention repaglinide or any pharmacokinetic/pharmacodynamic parameters of the drug. |
| PGx | Zhang_2006 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on nateglinide, not repaglinide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_repaglinide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
