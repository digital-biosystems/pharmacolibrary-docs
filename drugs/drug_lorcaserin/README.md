<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;lorcaserin&quot;}]"></div>

# lorcaserin

- **generic name:** lorcaserin
- **ATC codes:** `A08AA11`
- **DrugBank:** [DB04871](https://go.drugbank.com/drugs/DB04871)
- **groups:** approved, withdrawn

## About

**Description.** Lorcaserin (previously APD-356), a highly selective 5HT2C receptor agonist, is used for the treatment of obesity. It has been shown to reduce body weight and food intake in animal models of obesity, and it is thought that targeting the 5HT2C receptor may alter body weight by regulating satiety. Lorcaserin is marketed as a salt form called Belviq, which is lorcaserin hydrochloride.

In February 2020, the FDA issued a Drug Safety Communication requesting the manufacturer of Belviq (lorcaserin hydrochloride tablets, 10 mg) and Belviq XR (lorcaserin hydrochloride extended-release tablets, 20 mg) to voluntarily withdraw these products from the U.S. market, and the company has submitted a request to voluntarily withdraw the drug. This decision was based on the results of a clinical trial assessing the risk of heart-related problems that found that patients treated with lorcaserin may have a higher risk of cancer.[L44042,L44047]

**Indication.** For the treatment of obesity, as an adjunct to a reduced-calorie diet and increased physical activity.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 01:27 | 11:01 | 0/0/0 | 1/1/0 | 0/0/0 | 93,269/3,718 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Han_2015](drugs/drug_lorcaserin/pd_Han_2015_BW.md) | Han S et al., Exposure-response model for sibutramine…, Drug design, development an… (2015) | [10.2147/dddt.s85435](https://doi.org/10.2147/dddt.s85435) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sharma_2018](drugs/drug_lorcaserin/pd_Sharma_2018_BW.md) | Sharma VD et al., Model-Based Approach to Predict Adheren…, Journal of clinical pharmac… (2018) | [10.1002/jcph.994](https://doi.org/10.1002/jcph.994) |

## Coverage

- **PubMed hits:** 44 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Christopher_2017.pdf` | Christopher RJ et al., Pharmacokinetics and Tolerability of Lo…, Clinical therapeutics (2017) | popPK | 8 | [10.1016/j.clinthera.2017.03.004](https://doi.org/10.1016/j.clinthera.2017.03.004) | [28365033](https://pubmed.ncbi.nlm.nih.gov/28365033) | The paper reports PK parameters (Cmax, AUC) for lorcaserin in special populations, but lacks compartmental parameters (CL, V, t1/2) and specific numeric values for the primary endpoints are mostly presented as ratios. |
| `Subramanian_2014.pdf` | Subramanian M et al., Role of hepatic blood flow and metaboli…, Xenobiotica; the fate of fo… (2014) | popPK | 8 | [10.3109/00498254.2014.932470](https://doi.org/10.3109/00498254.2014.932470) | [24947446](https://pubmed.ncbi.nlm.nih.gov/24947446) | The study reports quantitative PK parameters (clearance) for lorcaserin in rats, but specific numeric values are not provided in the text, only relative changes and a threshold. |
| `Kulkarni_2017.pdf` | Kulkarni P et al., Correlation of pharmacokinetics and bra…, Journal of pharmacological… (2017) | pd | 5 | [10.1016/j.vascn.2017.09.258](https://doi.org/10.1016/j.vascn.2017.09.258) | [28974368](https://www.ncbi.nlm.nih.gov/pubmed/28974368) | metadata signals extractable PD data (PK-PD) |
| `Usmani_2012.pdf` | Usmani KA et al., Identification of human cytochrome P450…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.111.043414](https://doi.org/10.1124/dmd.111.043414) | [22266842](https://www.ncbi.nlm.nih.gov/pubmed/22266842) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-12T01:25:24.539602+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cataldi_2019 | irrelevant | 0 | 0 | The paper is a review discussing gender-related pharmacology without reporting original quantitative pharmacokinetic parameters for lorcaserin. |
| PD | Cataldi_2019 | not_relevant | 1 | 0 | The text is a review discussing the theoretical need for gender-specific pharmacodynamic studies but does not report any specific numeric PD parameters or exposure-response data for lorcaserin. |
| popPK | Christopher_2016 | relevant | 4 | 2 | The study reports PK parameters (Cmax, Tmax, AUC) for lorcaserin, but lacks specific quantitative values for clearance, volume of distribution, or half-life required for population PK modeling. |
| popPK | Christopher_2017 | relevant | 8 | 2 | The paper reports PK parameters (Cmax, AUC) for lorcaserin in special populations, but lacks compartmental parameters (CL, V, t1/2) and specific numeric values for the primary endpoints are mostly presented as ratios. |
| PD | Christopher_2017 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC) and tolerability in special populations, with no pharmacodynamic or exposure-response analysis. |
| popPK | Collins_2016 | irrelevant | 2 | 0 | The study is a behavioral pharmacology experiment in rhesus monkeys that mentions plasma concentrations but does not report quantitative population pharmacokinetic parameters (CL, V, ka, etc.) for lorcaserin. |
| popPK | Dong_2017 | irrelevant | 0 | 0 | The paper is a pharmacodynamic efficacy study reporting weight loss outcomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Gannon_2018 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating the effects of lorcaserin on drug self-administration in rats, and it does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general introduction to a review article and does not report specific pharmacogenomic effects on PK/PD parameters for lorcaserin. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of sibutramine, not lorcaserin. |
| popPK | Hurren_2017 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics qualitatively but does not report specific quantitative disposition parameters (CL, V, ka, etc.) for lorcaserin in the provided evidence. |
| PD | Hurren_2017 | not_relevant | 1 | 0 | The text is a review summary that mentions pharmacodynamics qualitatively but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Hurren_2017 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics and pharmacodynamics of lorcaserin ER but does not report any specific pharmacogenomic effects or gene variant associations. |
| PGx | Hurt_2018 | not_relevant | 0 | 0 | The paper is a review that mentions pharmacogenomics in the abstract but the provided text only covers general pharmacokinetics and pharmacodynamics without reporting specific gene variant effects on PK/PD parameters. |
| popPK | Kaptein_2012 | irrelevant | 0 | 0 | The paper analyzes weight loss efficacy using an exponential model, not pharmacokinetic disposition parameters (CL, V, etc.) for lorcaserin. |
| PD | Kaptein_2012 | not_relevant | 2 | 1 | The paper fits a time-course exponential model to mean weight data to estimate maximum weight loss and duration, but does not report a concentration- or dose-response relationship with numeric PD parameters (e.g., EC50, Emax vs. dose/concentration) for lorcaserin. |
| popPK | Kohut_2018 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of lorcaserin's effects on heroin self-administration in monkeys and does not report any pharmacokinetic parameters. |
| popPK | Kulkarni_2017 | irrelevant | 0 | 0 | The provided evidence contains only the title of a study on zebrafish PK/brain penetration, with no mention of lorcaserin or any quantitative PK parameters. |
| PD | Kulkarni_2017 | not_relevant | 0 | 0 | The paper focuses on the correlation of pharmacokinetics and brain penetration in zebrafish and mammals, and does not report any pharmacodynamic or exposure-response data for lorcaserin. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper evaluates the mutagenicity and genotoxicity of nitrosamine impurities, not the pharmacokinetic or pharmacodynamic effects of lorcaserin itself. |
| popPK | Pirtle_2019 | irrelevant | 0 | 0 | The study is a behavioral/clinical trial assessing the subjective and cardiovascular effects of lorcaserin on cocaine use, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for lorcaserin. |
| PD | Pirtle_2019 | not_relevant | 0 | 0 | The study is a behavioral pharmacology trial assessing the effects of a fixed dose of lorcaserin on cocaine self-administration and subjective ratings, without reporting plasma concentrations or fitting a concentration-effect (PD) model. |
| popPK | Reddy_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study evaluating novel indole derivatives as 5-HT2C agonists, using lorcaserin only as a reference compound for potency (EC50) and does not report any pharmacokinetic parameters. |
| PD | Reddy_2021 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding EC50 values for novel compounds and compares them to lorcaserin, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for lorcaserin itself. |
| PGx | Sadeque_2012 | not_relevant | 0 | 0 | The paper identifies the UGT enzymes responsible for lorcaserin metabolism but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Sadeque_2016 | irrelevant | 1 | 0 | The paper focuses on in-vitro metabolic enzyme identification (SULTs) and mechanistic properties, not on quantitative population pharmacokinetic parameters (CL, V, ka) for lorcaserin. |
| popPK | Sandeep_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new 5-HT2CR modulator (compound 4i) and uses lorcaserin only as a comparator/reference drug, without reporting any quantitative pharmacokinetic parameters for lorcaserin. |
| PD | Sandeep_2022 | not_relevant | 2 | 1 | The paper focuses on the discovery of a new PAAM (compound 4i) and only provides a qualitative comparison of food intake effects to lorcaserin without reporting any numeric PD parameters or exposure-response data for lorcaserin. |
| popPK | Sarkar_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo evaluation of novel 5-HT2CR modulators, using lorcaserin only as a mechanistic comparator without reporting any pharmacokinetic parameters for it. |
| PD | Sarkar_2026 | not_relevant | 1 | 1 | The paper focuses on the synthesis and in vitro characterization of novel 5-HT2CR modulators, mentioning lorcaserin only as a mechanistic comparator without providing any exposure-response or dose-response data for it. |
| popPK | Sharma_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of Contrave (naltrexone/bupropion) and does not report pharmacokinetic parameters for lorcaserin. |
| popPK | Sharma_2020 | irrelevant | 2 | 0 | The paper is a review article that summarizes general information and does not report original quantitative pharmacokinetic parameter values for lorcaserin. |
| PD | Sharma_2020 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions pharmacodynamics and PK but does not provide any numeric PD parameters, concentration-effect curves, or model fits. |
| popPK | Shukla_2015 | irrelevant | 1 | 0 | The paper is a review article that discusses pharmacokinetic properties but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Shukla_2015 | not_relevant | 2 | 0 | The text is a review summary that qualitatively discusses pharmacodynamic properties and efficacy but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Singh_2019 | irrelevant | 0 | 0 | The paper is a pharmacological study on allosteric modulators of 5-HT receptors and uses lorcaserin only as a comparator agent, reporting no pharmacokinetic parameters. |
| PD | Singh_2019 | not_relevant | 1 | 1 | The paper reports in vitro receptor binding/modulation data (Emax/EC50 changes) and qualitative in vivo food intake comparisons, but does not provide an exposure-response or dose-response analysis for lorcaserin with extractable PD parameters. |
| PGx | Solas_2016 | not_relevant | 0 | 0 | The text is a general review introduction that mentions lorcaserin and pharmacogenetics but does not report specific gene-variant effects on lorcaserin PK/PD parameters. |
| popPK | Subramanian_2014 | relevant | 8 | 2 | The study reports quantitative PK parameters (clearance) for lorcaserin in rats, but specific numeric values are not provided in the text, only relative changes and a threshold. |
| popPK | Tchang_2020 | irrelevant | 2 | 0 | The paper is a review article discussing lorcaserin's properties and efficacy, but the provided evidence contains no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Tchang_2020 | not_relevant | 2 | 0 | The text is a review article abstract that qualitatively discusses pharmacodynamics and efficacy but does not report specific numeric PD parameters or exposure-response data. |
| popPK | Usmani_2012 | irrelevant | 0 | 0 | The paper focuses on in-vitro enzyme identification (CYP/FMO) for lorcaserin metabolism and does not report quantitative pharmacokinetic disposition parameters. |
| PD | Usmani_2012 | not_relevant | 0 | 0 | The paper focuses on the identification of metabolic enzymes (CYP450 and FMOs) for lorcaserin and does not report any pharmacodynamic or exposure-response data. |
| PGx | Usmani_2012 | not_relevant | 0 | 0 | The paper identifies metabolic enzymes (CYP/FMO) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Valenzuela-Vallejo_2022 | not_relevant | 0 | 0 | The paper investigates the effect of lorcaserin on GDF-15 levels, not the effect of a gene variant on lorcaserin's PK/PD. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The provided evidence consists only of a conference header with no study data, parameters, or text regarding lorcaserin. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference poster abstracts and contains no specific data, results, or PD parameters for lorcaserin. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence consists only of a conference header and contains no pharmacokinetic data, parameters, or text regarding lorcaserin. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a header for conference poster abstracts and does not contain the specific content, data, or analysis for lorcaserin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lorcaserin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
