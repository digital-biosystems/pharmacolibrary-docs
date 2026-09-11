# trospium

- **generic name:** trospium
- **ATC codes:** `A03DA06`, `G04BD09`
- **DrugBank:** [DB00209](https://go.drugbank.com/drugs/DB00209)
- **groups:** approved, investigational

## About

**Description.** Trospium is an antispasmodic agent used to treat the symptoms of overactive bladder, a condition that causes the bladder muscles to contract uncontrollably.[L6208] An overactive bladder leads to an increased urge to urinate, frequent urination, and sometimes, loss of control over urination.[L6208]  Trospium is manufactured by _Indevus Pharmaceutical Inc._ and was granted FDA approval in 2007.[L6211]

**Indication.** Trospium is indicated for the treatment of overactive bladder with symptoms of urge urinary incontinence, urgency, and urinary frequency.[L36823] It is also indicated in combination with [xanomeline] for the treatment of adult patients with schizophrenia.[L51629]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 01:10 | 20:29 | 2/0/0 | 0/0/0 | 0/0/0 | 183,114/17,694 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 2/11 | 18/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Doroshyenko_2005](drugs/drug_trospium/Trospium_Doroshyenko2005_reference.md) | Doroshyenko O et al., Clinical pharmacokinetics of trospium c…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544070-00003](https://doi.org/10.2165/00003088-200544070-00003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Oefelein_2013](drugs/drug_trospium/Trospium_Oefelein2013_reference.md) | Oefelein MG et al., Effect of concomitant administration of…, Clinical drug investigation (2013) | [10.1007/s40261-012-0049-6](https://doi.org/10.1007/s40261-012-0049-6) |

## Coverage

- **PubMed hits:** 127 matched, 84 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Harnett_2013.pdf` | Harnett MD et al., Study of the population pharmacokinetic…, Clinical drug investigation (2013) | popPK | 10 | [10.1007/s40261-012-0039-8](https://doi.org/10.1007/s40261-012-0039-8) | [23203138](https://pubmed.ncbi.nlm.nih.gov/23203138) | The paper describes a population PK study for trospium, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Abebe_2019.pdf` | Abebe BT et al., Effects of the P-Glycoprotein Inhibitor…, Journal of clinical pharmac… (2019) | popPK | 9 | [10.1002/jcph.1421](https://doi.org/10.1002/jcph.1421) | [30973998](https://pubmed.ncbi.nlm.nih.gov/30973998) | The study reports quantitative PK parameters (bioavailability, distribution volume changes, renal clearance ratios) for trospium, but specific absolute values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| `Abebe_2020.pdf` | Abebe BT et al., Pharmacokinetic Drug-Drug Interactions…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1523](https://doi.org/10.1002/jcph.1523) | [31542894](https://pubmed.ncbi.nlm.nih.gov/31542894) | The study is a PK/DDI study for trospium involving population modeling, but the evidence only provides renal clearance values and lacks the specific compartmental parameters (CL, V, Q, ka) or full population model estimates required for extraction. |
| `Doroshyenko_2005.pdf` | Doroshyenko O et al., Clinical pharmacokinetics of trospium c…, Clinical pharmacokinetics (2005) | popPK | 9 | [10.2165/00003088-200544070-00003](https://doi.org/10.2165/00003088-200544070-00003) | [15966754](https://pubmed.ncbi.nlm.nih.gov/15966754) | The text explicitly reports quantitative PK parameters for trospium, including volume of distribution (350-800 L), renal clearance (29 L/h), and half-life (10-20 hours). |
| `Schladitz-Keil_1986.pdf` | Schladitz-Keil G et al., Determination of the bioavailability of…, Arzneimittel-Forschung (1986) | popPK | 9 | not captured | [3741535](https://pubmed.ncbi.nlm.nih.gov/3741535) | The study reports quantitative PK parameters for trospium including a two-compartment model and half-lives, but specific clearance and volume values are not explicitly listed in the text. |
| `Zhang_2012.pdf` | Zhang R et al., Pharmacokinetic and bioequivalence stud…, Arzneimittel-Forschung (2012) | popPK | 8 | [10.1055/s-0032-1304649](https://doi.org/10.1055/s-0032-1304649) | [22382787](https://pubmed.ncbi.nlm.nih.gov/22382787) | The study reports quantitative PK parameters (t1/2, Cmax, AUC) for trospium, though it is a bioequivalence study rather than a population PK modeling study. |
| `Bexten_2015.pdf` | Bexten M et al., Expression of drug transporters and dru…, Molecular pharmaceutics (2015) | pd | 5 | [10.1021/mp500532x](https://doi.org/10.1021/mp500532x) | [25466967](https://www.ncbi.nlm.nih.gov/pubmed/25466967) | metadata signals extractable PD data (IC50) |
| `Dahlinger_2017.pdf` | Dahlinger D et al., Assessment of inhibitory effects on maj…, Therapeutic advances in uro… (2017) | pd | 5 | [10.1177/1756287217708951](https://doi.org/10.1177/1756287217708951) | [28747995](https://www.ncbi.nlm.nih.gov/pubmed/28747995) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T01:03:02.225381+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abebe_2019 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, distribution volume changes, renal clearance ratios) for trospium, but specific absolute values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| popPK | Abebe_2020 | relevant | 9 | 2 | The study is a PK/DDI study for trospium involving population modeling, but the evidence only provides renal clearance values and lacks the specific compartmental parameters (CL, V, Q, ka) or full population model estimates required for extraction. |
| popPK | Al-Hasani_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of dopaminergic effects on insulin secretion and mentions trospium only as a comparator drug in the discussion, containing no pharmacokinetic data for trospium. |
| PD | Al-Hasani_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of preclinical studies on dopamine and pancreatic beta-cells, and does not report any pharmacodynamic or exposure-response data for trospium. |
| PD | Beckmann-Knopp_1999 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) of CYP450 by trospium, which is a pharmacokinetic interaction mechanism, not a pharmacodynamic (exposure-response or dose-response) relationship for the drug's therapeutic effect. |
| PD | Bexten_2015 | not_relevant | 0 | 0 | The paper focuses on the expression of transporters/enzymes in bladder urothelium and in vitro binding affinities, not on pharmacodynamic exposure-response or dose-response relationships in humans. |
| PD | Biastre_2009 | not_relevant | 1 | 0 | The paper is a narrative review that summarizes clinical efficacy and PK properties but does not report specific numeric PD parameters (e.g., Emax, EC50) or an exposure-response model. |
| PD | Cetinel_2013 | not_relevant | 2 | 1 | The paper is a qualitative review discussing mechanisms and general properties; it does not report specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for trospium. |
| PD | Chapple_2008 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic/pharmacodynamic study, and does not report numeric PD parameters like Emax or EC50 for trospium. |
| popPK | Cvijić_2014 | irrelevant | 2 | 0 | The study focuses on mechanistic in silico absorption modeling and does not report quantitative population PK parameters (CL, V, Q, ka) for trospium. |
| PD | Dahlinger_2017 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP450 inhibition by spasmolytics, not on pharmacodynamic exposure-response or dose-response relationships for trospium in vivo. |
| PD | Fahmy_2016 | not_relevant | 1 | 0 | The paper reports clinical outcomes (incontinence episodes, bladder capacity) for a combination therapy but does not provide drug concentrations or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PD | Furukawa_2026 | not_relevant | 0 | 0 | The paper explicitly states that there were no eligible fixed-dosing studies for xanomeline/trospium, so no dose-response or PD analysis was performed for this drug. |
| PD | Ganguly_2023 | not_relevant | 1 | 0 | The text is a qualitative review discussing mechanisms and general concentration gradients for intravesical antimuscarinics, but it does not report specific numeric PD parameters (e.g., Emax, EC50) or an extractable exposure-response curve for trospium. |
| popPK | Harnett_2013 | relevant | 10 | 0 | The paper describes a population PK study for trospium, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Hegde_2006 | not_relevant | 2 | 0 | The text is a review article discussing the pharmacology of muscarinic receptors and qualitative PK-PD profiles of antimuscarinics, but it does not report specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves for trospium. |
| popPK | Heinen_2013 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of ion pairing and permeability, reporting no quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for trospium. |
| popPK | Heinen_2013_2 | irrelevant | 2 | 0 | The study focuses on the mechanism of absorption enhancement using carrageenan complexes and reports qualitative observations of plasma concentration variations rather than quantitative population pharmacokinetic parameters (CL, V, ka) for trospium. |
| PD | Kachru_2021 | not_relevant | 0 | 0 | The paper is a retrospective cohort study comparing clinical outcomes (falls/hospitalizations) between drug classes using hazard ratios; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for trospium. |
| PD | Kaul_2026 | not_relevant | 0 | 0 | The paper is a long-term safety and efficacy extension trial reporting clinical outcomes (PANSS, CGI-S) and adverse events, but it does not contain any pharmacokinetic data, exposure-response analysis, or numeric pharmacodynamic parameters for trospium. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on dementia risk associated with OAB medications and does not report any pharmacokinetic parameters for trospium. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper is an observational cohort study analyzing the association between OAB medication use and dementia risk using administrative data; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for trospium. |
| PD | Madersbacher_2006 | not_relevant | 1 | 0 | The text is a qualitative review comparing pharmacokinetic and pharmacodynamic profiles of anticholinergics without providing specific numeric PD parameters or exposure-response data for trospium. |
| PD | Malcher_2022 | not_relevant | 0 | 0 | The study is an epidemiological nested case-control analysis using administrative data (DDDs) to assess dementia risk, not a pharmacodynamic or exposure-response study with numeric PD parameters for trospium. |
| popPK | Meyer_2022 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic analysis of transporter kinetics (Km, Vmax) in cell lines, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for trospium in vivo. |
| PD | Michel_2006 | not_relevant | 1 | 0 | The text is a qualitative review discussing the role of metabolites in muscarinic antagonists and explicitly states that trospium does not form active metabolites, without providing any numeric PD parameters or exposure-response data. |
| PD | Miron_2025 | not_relevant | 1 | 0 | The text is a qualitative review of the drug mechanism and clinical trial outcomes, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| PD | Preskorn_2025 | not_relevant | 1 | 0 | The text is a qualitative review of combination products and does not provide specific numeric PD parameters or exposure-response data for trospium. |
| popPK | Radwan_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of disintegration and dissolution, not a pharmacokinetic study reporting quantitative disposition parameters for trospium. |
| PD | Rahman-Yildir_2022 | not_relevant | 0 | 0 | The paper focuses on in vitro dissolution modeling and drug release kinetics, not pharmacodynamics or exposure-response relationships. |
| popPK | Rovner_2004 | irrelevant | 1 | 0 | The text is a clinical review/overview that lacks quantitative pharmacokinetic parameters (CL, V, ka) and only provides qualitative descriptions of absorption timing and metabolism. |
| PD | Rovner_2004 | not_relevant | 1 | 0 | The text is a general review of trospium chloride's pharmacology and clinical efficacy, containing no quantitative exposure-response or dose-response data, curves, or PD parameters. |
| PD | Rönnpagel_2025 | not_relevant | 0 | 0 | The paper reports in vitro transporter kinetics (Km, Vmax, IC50 for inhibition of uptake) for trospium as a substrate, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug's clinical effect. |
| popPK | Sandage_2006 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug to assess a drug-drug interaction, with trospium acting as the perpetrator, and no quantitative PK parameters for trospium are reported in the evidence. |
| popPK | Schröder_2004 | relevant | 4 | 2 | The study reports absorption parameters (Cmax, AUC, Tmax) for trospium but lacks explicit clearance, volume, or compartmental model parameters required for population PK. |
| popPK | Siafis_2024 | irrelevant | 0 | 0 | The paper is a protocol for a systematic review of muscarinic agonists in animal models of psychosis, and trospium is mentioned only as a co-administered peripheral antagonist to xanomeline, with no PK parameters reported. |
| PD | Siafis_2024 | not_relevant | 0 | 0 | The paper is a protocol for a systematic review of muscarinic agonists in animal models and does not report any pharmacodynamic data or parameters for trospium. |
| popPK | Singh-Franco_2005 | irrelevant | 2 | 1 | This is a review article that summarizes efficacy and general pharmacokinetic properties (bioavailability, elimination) without reporting specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Song_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Salvianolic Acid B (Sal B) in rats, not trospium. |
| popPK | Tannenbaum_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for solifenacin, not trospium. |
| PD | Tannenbaum_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) modeling for solifenacin, not trospium, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Walter_1999 | irrelevant | 2 | 0 | The study reports only sparse plasma concentrations (ng/ml) without deriving quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Weiss_2023 | irrelevant | 2 | 0 | The paper is a methodological simulation study comparing model fits for AUC and MAT, and while it uses trospium data, it does not report the specific quantitative disposition parameters (CL, V, Q, ka) for trospium in the provided text. |
| PD | Wenge_2011 | not_relevant | 0 | 0 | The paper reports in vitro transporter kinetics (Km, Vmax, IC50 for OCT inhibition) rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PD | Yamada_2018 | not_relevant | 1 | 0 | The text is a general review of antimuscarinic agents that qualitatively mentions dose-dependent adverse events but does not provide specific numeric PD parameters or concentration-effect data for trospium. |
| popPK | Zaheer_2019 | irrelevant | 0 | 0 | The study is a formulation and dissolution/disintegration analysis using trospium as a model drug, not a pharmacokinetic study reporting disposition parameters. |
| PD | Zubiaur_1997 | not_relevant | 0 | 0 | The paper is a retrospective clinical study on oxybutynin and imipramine; trospium is only mentioned as a second-line drug with no response, and no PK/PD data or numeric parameters are provided. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no specific study data, parameters, or mention of trospium. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for trospium. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The paper contains abstracts on clinical pharmacy, nutrition, and ruxolitinib PK, but does not mention trospium or report any pharmacokinetic parameters for it. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The text consists of abstracts regarding geriatric prescribing patterns, polypharmacy, and malabsorption, with no mention of trospium or any pharmacodynamic modeling. |
| popPK | unknown_2021_2 | irrelevant | 0 | 0 | The provided evidence is only a header for conference poster abstracts and contains no specific study data, drug name, or pharmacokinetic parameters for trospium. |
| PD | unknown_2021_2 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster abstract section and contains no scientific content, data, or PD parameters for trospium. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The text is a title for a general review of drugs for BPH and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for trospium. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for overactive bladder and does not contain specific data, models, or numeric PD parameters for trospium. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_trospium`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
