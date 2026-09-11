# alosetron

- **generic name:** alosetron
- **ATC codes:** `A03AE01`
- **DrugBank:** [DB00969](https://go.drugbank.com/drugs/DB00969)
- **groups:** approved, withdrawn

## About

**Description.** Alosetron is a 5-HT3 antagonist used only for the management of severe diarrhoea-predominant irritable bowel syndrome (IBS) in women. Alosetron has an antagonist action on the 5-HT3 receptors and thus may modulate serotonin-sensitive gastrointestinal (GI) processes. Alosetron was voluntarily withdrawn from the US market in November 2000 by the manufacturer due to numerous reports of severe adverse effects including ischemic colitis, severely obstructed or ruptured bowel, and death. In June 2002, the FDA approved a supplemental new drug application allowing the remarketing of the drug under restricted conditions of use.

**Indication.** Only for the treatment of symptoms of severe diarrhea-predominant irritable bowel syndrome (IBS) in women with chronic symptoms (generally lasting greater than 6 months) who does not present with anatomic or biochemical GI abnormalities and have not responded to conventional therapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 22:06 | 6:49 | 0/0/0 | 0/0/0 | 0/0/0 | 22,807/2,339 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DSouza_2001.pdf` | D'Souza DL et al., Effect of alosetron on the pharmacokine…, Journal of clinical pharmac… (2001) | pgx | 7 | [10.1177/00912700122010168](https://doi.org/10.1177/00912700122010168) | [11304902](https://www.ncbi.nlm.nih.gov/pubmed/11304902) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Koch_2001.pdf` | Koch KM et al., Effect of alosetron on theophylline pha…, British journal of clinical… (2001) | pgx | 7 | [10.1046/j.0306-5251.2001.01477.x](https://doi.org/10.1046/j.0306-5251.2001.01477.x) | [11736869](https://www.ncbi.nlm.nih.gov/pubmed/11736869) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Koch_2004.pdf` | Koch KM et al., Alosetron repeat dose pharmacokinetics,…, Alimentary pharmacology & t… (2004) | pgx | 7 | [10.1111/j.1365-2036.2004.02031.x](https://doi.org/10.1111/j.1365-2036.2004.02031.x) | [15233703](https://www.ncbi.nlm.nih.gov/pubmed/15233703) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Somers_2007.pdf` | Somers GI et al., The metabolism of the 5HT3 antagonists…, Xenobiotica; the fate of fo… (2007) | pgx | 7 | [10.1080/00498250701485575](https://doi.org/10.1080/00498250701485575) | [17701832](https://www.ncbi.nlm.nih.gov/pubmed/17701832) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-10T22:05:19.479111+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Camilleri_2000 | irrelevant | 2 | 2 | The paper is a review that reports only summary values (bioavailability ~60%, half-life ~1.5 h) without the specific compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Camilleri_2000 | not_relevant | 2 | 1 | The text is a qualitative review that mentions dose-response studies and PK parameters but does not provide specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| PGx | Camilleri_2005 | not_relevant | 2 | 0 | The text is a review abstract that mentions the association between serotonin transporter polymorphisms and alosetron response but does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| PGx | Camilleri_2009 | not_relevant | 2 | 0 | The paper is a review that mentions a pharmacogenetic association between SLC6A4 and alosetron response but does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| popPK | Camilleri_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacogenomics in IBS and does not report quantitative pharmacokinetic parameters for alosetron. |
| PD | Camilleri_2019 | not_relevant | 0 | 0 | The text is a general review of pharmacogenomics in IBS and does not report any specific pharmacodynamic or exposure-response data for alosetron. |
| PGx | Camilleri_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenomics in IBS and does not report specific data or effects for alosetron. |
| popPK | Coldwell_2007 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper in rats where alosetron is used only as a receptor antagonist to probe 5-HT3 receptor involvement, with no pharmacokinetic parameters reported. |
| popPK | Cremonini_2012 | irrelevant | 0 | 0 | The paper is a narrative review focusing on rifaximin, and alosetron is only mentioned as a comparator/approved drug without any pharmacokinetic data. |
| PD | Cremonini_2012 | not_relevant | 0 | 0 | The paper is a narrative review focused on rifaximin and does not report any pharmacodynamic or exposure-response data for alosetron. |
| PGx | DSouza_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between alosetron and alprazolam, not a pharmacogenomic effect of a gene variant on alosetron's PK/PD. |
| PGx | DSouza_2001_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (alosetron affecting fluoxetine PK) in a general population, not a pharmacogenomic effect of a gene variant on alosetron. |
| popPK | Farkouh_2020 | irrelevant | 0 | 0 | The paper is a review that mentions alosetron only in the context of sex-related efficacy differences, without reporting any quantitative pharmacokinetic parameters. |
| PD | Farkouh_2020 | not_relevant | 1 | 0 | The text is a review that qualitatively mentions alosetron's sex-specific efficacy but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Gunput_1999 | irrelevant | 2 | 2 | The paper is a review article that only reports general bioavailability and half-life without providing the specific quantitative compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Gunput_1999 | not_relevant | 2 | 1 | The text is a review summary that qualitatively describes dose-dependent effects (skin flare, transit time) but does not provide specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Gupta_1995 | irrelevant | 2 | 0 | Alosetron is a co-administered agent used to assess its effect on haloperidol pharmacokinetics, and no quantitative PK parameters for alosetron are provided in the text. |
| popPK | Humphrey_1999 | irrelevant | 0 | 0 | The paper is a review article discussing the therapeutic potential of 5-HT3 antagonists and does not report original quantitative pharmacokinetic parameters for alosetron. |
| PD | Humphrey_1999 | not_relevant | 1 | 0 | The text is a review article that qualitatively discusses the mechanism and potential of alosetron but does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Itomi_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of a novel CRF1 antagonist in animal models where alosetron serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Itomi_2020 | not_relevant | 2 | 1 | The paper reports qualitative dose-dependent effects and specific efficacious doses for alosetron in animal models, but does not provide numeric PD parameters (e.g., ED50, Emax) or a concentration-effect curve for alosetron. |
| PGx | Koch_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (alosetron affecting theophylline PK) in a general population, not a pharmacogenomic effect of a gene variant on alosetron's PK/PD. |
| PGx | Koch_2004 | not_relevant | 0 | 0 | The study investigates demographic factors (sex, age, BMI) and enzyme activity, but does not report on specific gene variants or genotypes. |
| popPK | Koch_2004_2 | irrelevant | 1 | 0 | Alosetron is a co-administered agent in a study focused on the pharmacokinetics of oral contraceptives, and no quantitative PK parameters for alosetron are reported. |
| PD | Koch_2004_2 | not_relevant | 0 | 0 | The study reports no change in pharmacodynamic markers (LH, FSH, ovarian activity) or PK parameters, providing no numeric PD parameters or exposure-response relationship for alosetron. |
| popPK | Manning_2014 | irrelevant | 0 | 0 | The paper describes the discovery of new 5-HT3 receptor partial agonists and does not report pharmacokinetic parameters for alosetron. |
| PD | Manning_2014 | not_relevant | 0 | 0 | The paper describes the discovery of new 5-HT3 partial agonists and reports in vitro binding and functional data for these new compounds, but does not report any pharmacodynamic or exposure-response analysis for the specific drug alosetron. |
| popPK | Sanger_2008 | irrelevant | 0 | 0 | The paper is a review discussing drug development strategies for GI disorders and mentions alosetron only as a context/comparator without reporting any pharmacokinetic parameters. |
| PD | Sanger_2008 | not_relevant | 1 | 0 | The text is a review discussing drug development strategies and mentions alosetron only as a class example without providing any numeric PD parameters or exposure-response data. |
| PGx | Somers_2007 | not_relevant | 0 | 0 | The paper describes general in vitro and in vivo metabolism and CYP enzyme involvement but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Zhai_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper characterizing alosetron's mechanism of action as a 5-HT3 receptor antagonist, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_alosetron`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
