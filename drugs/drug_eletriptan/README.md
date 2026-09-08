# eletriptan

- **generic name:** eletriptan
- **ATC codes:** `N02CC06`
- **DrugBank:** [DB00216](https://go.drugbank.com/drugs/DB00216)
- **groups:** approved, investigational

## About

**Description.** Eletriptan is a second generation triptan drug developed by Pfizer Inc for the treatment of migraine headaches.

**Indication.** For the acute treatment of migraine with or without aura in adults.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 21:29 | 29:48 | 0/0/0 | 0/3/0 | 0/0/0 | 399,019/12,789 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 7/6 | 12/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Mandema_2005](drugs/drug_eletriptan/pd_Mandema_2005_unknown.md) | Mandema JW et al., Therapeutic benefit of eletriptan compa…, Cephalalgia : an internatio… (2005) | [10.1111/j.1468-2982.2004.00939.x](https://doi.org/10.1111/j.1468-2982.2004.00939.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tokuoka_2014](drugs/drug_eletriptan/pd_Tokuoka_2014_headache_relief.md) | Tokuoka K et al., Theory-based analysis of clinical effic…, The journal of headache and… (2014) | [10.1186/1129-2377-15-85](https://doi.org/10.1186/1129-2377-15-85) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tokuoka_2015](drugs/drug_eletriptan/pd_Tokuoka_2015_headache_recurrence_rate.md) | Tokuoka K et al., Theoretical analysis of headache recurr…, The journal of headache and… (2015) | [10.1186/s10194-015-0558-9](https://doi.org/10.1186/s10194-015-0558-9) |

## Coverage

- **PubMed hits:** 73 matched, 71 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Milton_2002.pdf` | Milton KA et al., Pharmacokinetics, pharmacodynamics, and…, Journal of clinical pharmac… (2002) | popPK | 8 | [10.1177/00912700222011580](https://doi.org/10.1177/00912700222011580) | [12017347](https://pubmed.ncbi.nlm.nih.gov/12017347) | The paper reports qualitative PK properties (half-life, bioavailability) for eletriptan but lacks specific numeric values for clearance, volume, or rate constants in the provided text. |
| `Shah_2001.pdf` | Shah AK et al., Pharmacokinetics and safety of oral ele…, Journal of clinical pharmac… (2001) | popPK | 8 | [10.1177/00912700122012922](https://doi.org/10.1177/00912700122012922) | [11762561](https://pubmed.ncbi.nlm.nih.gov/11762561) | The study reports quantitative PK parameters (Cmax, Tmax, AUC, kel, t1/2) for eletriptan in healthy volunteers, with values explicitly listed in the text. |
| `Shah_2002.pdf` | Shah AK et al., The pharmacokinetics and safety of sing…, Journal of clinical pharmac… (2002) | popPK | 8 | [10.1177/00912700222011571](https://doi.org/10.1177/00912700222011571) | [12017346](https://pubmed.ncbi.nlm.nih.gov/12017346) | The study reports quantitative PK parameters (tmax, t1/2) for eletriptan, but lacks specific values for clearance, volume, or absorption rate constants. |
| `Hou_2019.pdf` | Hou M et al., Efficacy of triptans for the treatment…, European journal of clinica… (2019) | pd | 4 | [10.1007/s00228-019-02748-4](https://doi.org/10.1007/s00228-019-02748-4) | [31446449](https://www.ncbi.nlm.nih.gov/pubmed/31446449) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Evans_2003.pdf` | Evans DC et al., Eletriptan metabolism by human hepatic…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.7.861](https://doi.org/10.1124/dmd.31.7.861) | [12814962](https://www.ncbi.nlm.nih.gov/pubmed/12814962) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Mathew_2003.pdf` | Mathew NT et al., Tolerability and safety of eletriptan i…, Headache (2003) | pgx | 7 | [10.1046/j.1526-4610.2003.03188.x](https://doi.org/10.1046/j.1526-4610.2003.03188.x) | [14511273](https://www.ncbi.nlm.nih.gov/pubmed/14511273) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-08-29T21:18:25.044121+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abo_2022 | irrelevant | 2 | 0 | The study focuses on nasal formulation development and brain targeting in mice, reporting only AUC and Cmax values without standard population PK parameters like clearance or volume of distribution. |
| popPK | Ahmed_2017 | irrelevant | 1 | 0 | The paper describes an analytical method for triptans and reports PK parameters only for zolmitriptan, not eletriptan. |
| popPK | Ashkenazi_2003 | irrelevant | 0 | 0 | The paper is a narrative review of migraine management that mentions eletriptan qualitatively but provides no quantitative pharmacokinetic parameters. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review of migraine treatment and triptan selection, mentioning pharmacodynamics qualitatively but providing no numeric PD parameters or exposure-response data for eletriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for eletriptan. |
| popPK | Boucher_2018 | irrelevant | 0 | 0 | The paper is a methodological tutorial on model-based meta-analysis using naproxen as the example drug, and does not contain any pharmacokinetic data for eletriptan. |
| PD | Boucher_2018 | not_relevant | 0 | 0 | The paper is a methodological tutorial on model-based meta-analysis using naproxen and WOMAC pain scores as an example; it does not report any pharmacodynamic or exposure-response data for eletriptan. |
| PGx | Capi_2016 | not_relevant | 0 | 0 | The paper is a review of eletriptan's clinical efficacy and pharmacokinetics, mentioning CYP3A4 metabolism but not reporting specific gene variants or genotypes affecting PK/PD parameters. |
| PD | Casida_2017 | not_relevant | 1 | 0 | The paper is a qualitative review of prodrugs and propesticides that mentions eletriptan as an example of a neuroactive prodrug but provides no numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Chowdhury_2010 | irrelevant | 0 | 0 | The paper is a clinical review of migraine management that mentions eletriptan only as a therapeutic option without reporting any pharmacokinetic parameters. |
| popPK | Cole_2001 | irrelevant | 0 | 0 | The text is a general review/overview of eletriptan's mechanism and clinical efficacy without reporting any quantitative pharmacokinetic parameter values. |
| popPK | Diener_2000 | irrelevant | 1 | 0 | The paper is a review of efficacy and general pharmacology that mentions qualitative PK properties (rapid absorption, good bioavailability) but provides no quantitative disposition parameters (CL, V, ka, etc.) for eletriptan. |
| popPK | EFPIA_2016 | irrelevant | 0 | 0 | The paper is a general white paper on Model-Informed Drug Discovery (MID3) practices and does not report specific pharmacokinetic parameters for eletriptan. |
| PD | EFPIA_2016 | not_relevant | 0 | 0 | The paper is a white paper on Model-Informed Drug Discovery (MID3) best practices and does not report specific pharmacodynamic data or parameters for eletriptan. |
| popPK | Edvinsson_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasoconstrictor potency (EC50) and receptor expression, not a pharmacokinetic study reporting disposition parameters like clearance or volume for eletriptan. |
| popPK | Esim_2017 | irrelevant | 0 | 0 | The paper describes the development of an analytical assay and nanoparticle formulation for eletriptan, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Evans_2003 | not_relevant | 2 | 5 | The paper reports in vitro enzyme phenotyping and in vivo transport in knockout mice, but does not report human pharmacogenomic effects (genotype-based) on PK/PD parameters. |
| popPK | Fox_2000 | irrelevant | 1 | 0 | The paper is a comparative tolerability review that does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for eletriptan. |
| PD | Fox_2000 | not_relevant | 2 | 1 | The paper discusses qualitative rank orders and correlations for adverse events but explicitly states that adverse event frequencies cannot be predicted from dose or exposure, and provides no numeric PD parameters (Emax, EC50, etc.) or derivable concentration-effect curves. |
| popPK | Färkkilä_2005 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and tolerability without reporting quantitative pharmacokinetic parameters for eletriptan. |
| popPK | Gawel_2001 | irrelevant | 1 | 0 | The text is a general overview of eletriptan's clinical efficacy and qualitative properties (bioavailability, lipophilicity) without reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | The paper is a review of herbal drug interactions where eletriptan is mentioned only as a co-administered drug in a single case report of serotonin syndrome, with no pharmacokinetic parameters reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports a drug-herb interaction (St John's wort and eletriptan) causing serotonin syndrome, not a pharmacogenomic effect of a gene variant on eletriptan PK/PD. |
| popPK | Kashif_2022 | relevant | 4 | 2 | The study reports in-vivo PK parameters (MRT, AUC) for eletriptan, but lacks standard disposition parameters like clearance (CL) or volume (V), and the values are limited to summary statistics in the abstract. |
| popPK | Kassem_2016 | irrelevant | 1 | 0 | The paper is a review of formulation approaches for triptans and does not report original quantitative pharmacokinetic parameters for eletriptan. |
| popPK | MaassenVanDenBrink_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of craniovascular selectivity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mandema_2005 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (pain relief/pain free) and dose-response modeling, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mathew_2003 | not_relevant | 0 | 0 | The paper is a general safety review that mentions CYP3A4 metabolism but does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Millson_2000 | irrelevant | 1 | 0 | The paper is a clinical review discussing general pharmacokinetic properties and drug interactions without reporting specific quantitative disposition parameters (e.g., CL, V, ka) for eletriptan. |
| popPK | Milton_2002 | relevant | 8 | 2 | The paper reports qualitative PK properties (half-life, bioavailability) for eletriptan but lacks specific numeric values for clearance, volume, or rate constants in the provided text. |
| PD | Milton_2002 | not_relevant | 4 | 2 | The text mentions a linear PK/PD model predicting diastolic blood pressure changes but does not provide specific numeric PD parameters (e.g., slope, intercept, Emax) or detailed concentration-effect data in the abstract. |
| popPK | Nagar_2024 | irrelevant | 0 | 0 | The paper is a methodological study on PBPK modeling frameworks and does not report specific pharmacokinetic parameters for eletriptan. |
| PD | Nagar_2024 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) modeling for clearance prediction and does not report any pharmacodynamic or exposure-response relationships for eletriptan. |
| popPK | Nallapeta_2026 | irrelevant | 2 | 0 | The study focuses on formulation and pharmacodynamics (behavioral effects) without reporting quantitative pharmacokinetic parameters (CL, V, ka) for eletriptan. |
| PGx | Nallapeta_2026 | not_relevant | 0 | 0 | The paper describes a novel drug delivery system (microneedles) for eletriptan but does not investigate the impact of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Ohk_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sumatriptan, not eletriptan. |
| PD | Ohk_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of sumatriptan and explicitly states that a PK/PD model was not established, providing no pharmacodynamic data or parameters. |
| popPK | Omote_2003 | relevant | 4 | 5 | The paper is a review that reports basic PK parameters (Tmax, T1/2, bioavailability) for eletriptan in the text, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for high-level extraction. |
| PGx | Patel_2019 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ketoconazole) in rats, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| PGx | Pichard-Garcia_2000 | not_relevant | 0 | 0 | The paper evaluates CYP3A4 induction by eletriptan in hepatocytes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Safhi_2023 | relevant | 4 | 2 | The study reports in vivo PK parameters (Cmax, AUC, t1/2) for eletriptan in rabbits, but the evidence provided only lists Cmax values and lacks specific numeric values for clearance, volume, or half-life. |
| popPK | Sakai_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters for eletriptan. |
| PD | Sakai_2004 | not_relevant | 3 | 2 | The paper reports dose-response trends for efficacy (headache response rates) and adverse events but does not provide a formal PK/PD model, concentration-effect analysis, or specific numeric PD parameters like Emax or EC50. |
| popPK | Sandrini_2006 | irrelevant | 1 | 0 | The paper is a review article that discusses eletriptan's profile qualitatively but does not provide original quantitative pharmacokinetic parameter values. |
| PD | Sandrini_2006 | not_relevant | 1 | 0 | The text is a general review summarizing clinical efficacy and safety without providing specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data. |
| popPK | Sandrini_2009 | irrelevant | 0 | 0 | The text is a general overview of eletriptan's clinical efficacy and safety without reporting any quantitative pharmacokinetic parameters. |
| popPK | Schoenen_1997 | irrelevant | 0 | 0 | The paper is a narrative review of acute migraine therapies that mentions eletriptan only in the context of clinical efficacy and general pharmacological properties, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Shah_2002 | relevant | 8 | 4 | The study reports quantitative PK parameters (tmax, t1/2) for eletriptan, but lacks specific values for clearance, volume, or absorption rate constants. |
| popPK | Shelke_2016 | irrelevant | 1 | 0 | The study is a formulation and in-vitro/ex-vivo characterization paper that reports permeability coefficients but lacks in-vivo pharmacokinetic parameters (CL, V, ka) for eletriptan. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for eletriptan. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and contains no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for eletriptan. |
| PGx | Sternieri_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects on eletriptan PK/PD. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | The paper is a preclinical safety pharmacology study focusing on in vitro target-ADR associations and does not report pharmacokinetic parameters for eletriptan. |
| PD | Sutherland_2023 | not_relevant | 0 | 0 | The paper is a database resource for in vitro secondary pharmacology and ADR prediction; it does not report in vivo PK/PD modeling or specific exposure-response parameters for eletriptan. |
| popPK | Takiya_2006 | irrelevant | 1 | 0 | The paper is a narrative review summarizing pharmacokinetic properties qualitatively without reporting specific quantitative parameter values. |
| PD | Takiya_2006 | not_relevant | 1 | 0 | The text is a narrative review summarizing general pharmacokinetic and clinical efficacy data without providing specific numeric PD parameters, concentration-effect curves, or dose-response models. |
| PGx | Tepper_2001 | not_relevant | 0 | 0 | The paper discusses general safety and drug-drug interactions (CYP3A4/P-gp) but does not report specific pharmacogenomic effects of gene variants on eletriptan PK/PD parameters. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 1 | 0 | The paper is a comparative review that discusses pharmacokinetics qualitatively (e.g., mentioning half-lives) but does not report quantitative disposition parameters (CL, V, Q, ka) or a compartmental model for eletriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 2 | 1 | The text is a comparative review that lists clinical efficacy outcomes (therapeutic gain percentages) for different doses but does not report a pharmacodynamic model, concentration-effect relationship, or numeric PD parameters like Emax or EC50. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and therapeutic delay, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for eletriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing time to maximum effect (Emax) with Tmax, but it does not provide numeric concentration-effect parameters (like EC50 or slope) or a quantitative PD model for eletriptan. |
| popPK | Tokuoka_2015 | irrelevant | 2 | 1 | The paper is a theoretical analysis of receptor occupancy and headache recurrence using PK data from other studies, rather than a primary PK study reporting quantitative disposition parameters like clearance or volume for eletriptan. |
| popPK | Valetti_2022 | irrelevant | 1 | 0 | The study focuses on in vitro and ex vivo transmucosal delivery and permeation mechanisms, not on quantitative pharmacokinetic disposition parameters (CL, V, ka) in a biological system. |
| popPK | unknown_2002 | irrelevant | 2 | 0 | The paper is a clinical efficacy trial that mentions PK evaluations but does not report quantitative disposition parameters (CL, V, ka, etc.) for eletriptan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_eletriptan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
