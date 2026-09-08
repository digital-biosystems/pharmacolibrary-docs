# vorapaxar

- **generic name:** vorapaxar
- **ATC codes:** `B01AC26`
- **DrugBank:** [DB09030](https://go.drugbank.com/drugs/DB09030)
- **groups:** approved

## About

**Description.** Vorapaxar is a tricyclic himbacine-derived selective inhibitor of protease activated receptor (PAR-1) indicated for reducing the incidence of thrombotic cardiovascular events in patients with a history of myocardial infarction (MI) or with peripheral arterial disease (PAD). By inhibiting PAR-1, a thrombin receptor expressed on platelets, vorapaxar prevents thrombin-related platelet aggregation.

**Indication.** Vorapaxar is indicated for the reduction of thrombotic cardiovascular events in patients with a history of myocardial infarction (MI) or peripheral arterial disease (PAD). It is usually co-administered with acetylsalicylic acid (ASA) and/or clopidogrel, and should therefore be administered as an addition to these medications as it has not been studied alone.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 07:26 | 14:55 | 0/0/0 | 0/0/0 | 0/0/0 | 2,074/1,550 | ollama / qwen3.8:27b-q4_K_M | 10 | 2/8 | 9/1 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 48 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Komatsu_2023.pdf` | Komatsu H et al., Identification of SARS-CoV-2 main prote…, Journal of biomolecular str… (2023) | pd | 4 | [10.1080/07391102.2021.2024260](https://doi.org/10.1080/07391102.2021.2024260) | [34984963](https://www.ncbi.nlm.nih.gov/pubmed/34984963) | metadata signals extractable PD data (EC50) |
| `Kosoglou_2013.pdf` | Kosoglou T et al., The effect of multiple doses of ketocon…, Journal of clinical pharmac… (2013) | pgx | 7 | [10.1002/jcph.20](https://doi.org/10.1002/jcph.20) | [23426761](https://www.ncbi.nlm.nih.gov/pubmed/23426761) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-06T07:26:04.192222+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexopoulos_2018 | irrelevant | 0 | 0 | The paper is a clinical review of combination antiplatelet therapy and does not report any pharmacokinetic parameters for vorapaxar. |
| PD | Alexopoulos_2018 | not_relevant | 1 | 0 | The text is a qualitative review of combination antiplatelet therapy and mentions vorapaxar only in the context of bleeding risk and general efficacy, without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Alexopoulos_2018_2 | irrelevant | 0 | 0 | The paper is a review of platelet reactivity and anti-platelet therapy strategies, mentioning vorapaxar only as a clinical agent without reporting any pharmacokinetic parameters. |
| PD | Alexopoulos_2018_2 | not_relevant | 1 | 0 | The text is a qualitative introduction/review discussing the role of vorapaxar in PCI without reporting any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Chaudhary_2021 | irrelevant | 1 | 0 | The paper is a review article summarizing literature on vorapaxar, and the provided evidence contains no original quantitative pharmacokinetic parameter values. |
| PD | Chaudhary_2021 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacodynamics and clinical efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data for vorapaxar. |
| popPK | Cheng_2015 | irrelevant | 1 | 0 | The paper is a narrative review of clinical efficacy and safety without original quantitative pharmacokinetic parameter values. |
| PD | Cheng_2015 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical trial outcomes and safety profiles, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or detailed exposure-response data for vorapaxar. |
| PGx | Chew_2012 | not_relevant | 0 | 0 | The paper is a review of clinical trial data regarding bleeding and ischemic outcomes, not a pharmacogenomic study of vorapaxar PK/PD parameters. |
| PGx | Coccheri_2012 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy that mentions vorapaxar only in the context of overcoming resistance, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | DAmico_2026 | irrelevant | 0 | 0 | The paper is a pharmacoepidemiologic study on drug-drug interactions for bleeding risk in nursing home residents and does not report any pharmacokinetic parameters for vorapaxar, which is only mentioned as a therapeutic alternative to clopidogrel. |
| PD | DAmico_2026 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological study using claims data to screen for drug-drug interaction signals (rate ratios) and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for vorapaxar. |
| PGx | Dash_2015 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy that mentions vorapaxar's clinical trial outcomes (TRACER) but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Fan_2020 | irrelevant | 1 | 0 | The paper is a medicinal chemistry study on vorapaxar analogues that mentions PK profiles qualitatively but does not report quantitative PK parameters for vorapaxar itself. |
| PD | Fan_2020 | not_relevant | 3 | 2 | The paper reports IC50 values for vorapaxar and analogues in an in vitro assay, which is a potency metric, but does not provide an exposure-response or dose-response curve, Emax, or PK/PD model parameters for the drug in vivo or as a dynamic relationship. |
| popPK | Franchi_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vorapaxar's effect on platelet aggregation and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Franchi_2020 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (platelet aggregation) rather than pharmacokinetic parameters (CL, V, ka, etc.) for vorapaxar. |
| popPK | Ghosal_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 enzymes involved in vorapaxar metabolism and does not report quantitative pharmacokinetic disposition parameters (e.g., CL, V, ka). |
| PD | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolic identification of CYP enzymes and does not report any pharmacodynamic or exposure-response data for vorapaxar. |
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for vorapaxar metabolism but does not report any pharmacogenomic effects (e.g., genotype-based differences) on PK or PD parameters. |
| popPK | Hrubša_2026 | irrelevant | 0 | 0 | The study is an ex vivo platelet function assay investigating antiplatelet response, not a pharmacokinetic study reporting disposition parameters for vorapaxar. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of gestodene as a PAR1 modulator, using vorapaxar only as a pharmacological inhibitor for validation, and contains no pharmacokinetic data for vorapaxar. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of gestodene as a PAR1 PAM; vorapaxar is used only as a qualitative pharmacological inhibitor to confirm mechanism, with no exposure-response or dose-response analysis or numeric PD parameters reported for vorapaxar. |
| popPK | Knight_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study describing the synthesis and in-vitro biological potency (IC50) of vorapaxar analogues, containing no pharmacokinetic disposition parameters. |
| PD | Knight_2016 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values for analogues, which are potency metrics, but does not provide a pharmacodynamic exposure-response model, dose-effect curve, or PK/PD analysis for vorapaxar. |
| popPK | Komatsu_2023 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro study identifying SARS-CoV-2 protease inhibitors, reporting binding affinity (Kd) and antiviral activity (EC50) for vorapaxar, but contains no pharmacokinetic parameters. |
| popPK | Kosoglou_2012 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of warfarin (the subject drug) to assess drug-drug interactions, and does not report quantitative disposition parameters for vorapaxar. |
| PD | Kosoglou_2012 | not_relevant | 0 | 0 | The study assesses the effect of vorapaxar on warfarin PK/PD (drug interaction) rather than characterizing the exposure-response relationship of vorapaxar itself, and no numeric PD parameters for vorapaxar are reported. |
| PGx | Kosoglou_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study (vorapaxar and warfarin) in healthy subjects, not a pharmacogenomic study involving gene variants. |
| popPK | Kosoglou_2012_2 | irrelevant | 2 | 0 | The document is a clinical study protocol for SCH 530348 (vorapaxar) that outlines the study design and statistical methods but does not report any actual quantitative pharmacokinetic parameter values. |
| PD | Kosoglou_2012_2 | not_relevant | 0 | 0 | The text describes a Phase 1 PK study in renal impairment focusing on plasma concentration parameters (AUC, Cmax) and does not report any pharmacodynamic endpoints, exposure-response relationships, or numeric PD parameters. |
| popPK | Kosoglou_2012_3 | irrelevant | 2 | 0 | The abstract describes a PK/PD comparison study but contains no quantitative disposition parameters (CL, V, ka, etc.) for vorapaxar. |
| PD | Kosoglou_2012_3 | not_relevant | 3 | 1 | The abstract describes qualitative PD outcomes (complete inhibition) and dose comparisons but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Kosoglou_2012_4 | irrelevant | 2 | 0 | The provided evidence is an abstract that reports only pharmacodynamic outcomes (platelet inhibition) and lacks any quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PGx | Kosoglou_2013 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (ketoconazole/rifampin) rather than pharmacogenomic effects of gene variants on vorapaxar PK/PD. |
| popPK | Kosoglou_2013_2 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug, with vorapaxar serving only as a co-administered agent, and no quantitative PK parameters for vorapaxar are reported. |
| PD | Kosoglou_2013_2 | not_relevant | 0 | 0 | The study assesses the effect of vorapaxar on digoxin pharmacokinetics and digoxin pharmacodynamics (ECG), but does not report a pharmacodynamic or exposure-response relationship for vorapaxar itself. |
| popPK | Lee_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel PAR1 antagonists, using vorapaxar only as a comparator in functional assays, and reports no pharmacokinetic parameters. |
| PD | Lee_2013 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for novel compounds and qualitatively compares their platelet aggregation activity to vorapaxar, but it does not provide numeric PD parameters or an exposure-response curve for vorapaxar itself. |
| popPK | Moschonas_2015 | irrelevant | 1 | 0 | The paper is a review article that briefly describes properties but does not provide original quantitative PK parameter values for vorapaxar in the evidence. |
| PD | Moschonas_2015 | not_relevant | 2 | 1 | The text is a review article that qualitatively describes pharmacodynamic properties but does not provide specific numeric PD parameters or extractable concentration-effect curves for vorapaxar. |
| popPK | Moschonas_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on PAR-4 peptide analogues and does not report any pharmacokinetic parameters for vorapaxar. |
| PD | Moschonas_2017 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of PAR-4 activation by peptide analogues and does not report any pharmacodynamic or exposure-response data for vorapaxar. |
| popPK | Nilsen_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic biomarker study assessing endothelial markers (e.g., ICAM-1, VCAM-1) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for vorapaxar. |
| PD | Nilsen_2023 | not_relevant | 2 | 0 | The paper reports group-level differences in biomarker levels between vorapaxar and placebo groups but does not provide individual concentration data or fit a PK/PD model, so no numeric PD parameters (Emax, EC50, etc.) are extractable. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | The paper is an in silico drug repurposing study for Alzheimer's disease that does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of vorapaxar. |
| popPK | Packard_2012 | irrelevant | 0 | 0 | The paper is a narrative review of antiplatelet therapies and does not report any quantitative pharmacokinetic parameters for vorapaxar. |
| PD | Packard_2012 | not_relevant | 1 | 0 | The text is a qualitative review of emerging antiplatelet therapies and does not report any specific numeric pharmacodynamic parameters or exposure-response data for vorapaxar. |
| popPK | Paclíková_2025 | irrelevant | 0 | 0 | The study is an ex-vivo platelet aggregation assay assessing antiplatelet efficacy, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for vorapaxar. |
| popPK | Rafeedheen_2015 | irrelevant | 0 | 0 | The paper is a review of novel antiplatelet agents and does not report any quantitative pharmacokinetic parameters for vorapaxar. |
| PD | Rafeedheen_2015 | not_relevant | 1 | 0 | The text is a general review of antiplatelet agents that mentions vorapaxar's approval and mechanism but provides no specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Ranjan_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and anti-leishmanial activity study, not a pharmacokinetic study, and reports no PK parameters for vorapaxar. |
| popPK | Storey_2014 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (platelet aggregation, biomarkers) rather than pharmacokinetic disposition parameters. |
| PGx | Tricoci_2018 | not_relevant | 0 | 0 | The paper reports clinical outcomes (bleeding/ischemic events) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wichaiyo_2026 | irrelevant | 1 | 0 | The paper is a review that mentions vorapaxar only qualitatively (noting its long half-life) without providing any quantitative PK parameter values. |
| PD | Wichaiyo_2026 | not_relevant | 1 | 0 | The text is a general review that qualitatively describes vorapaxar's mechanism and pharmacokinetic properties (slow dissociation, long half-life) but does not provide any numeric PD parameters or exposure-response data. |
| PGx | Wichaiyo_2026 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet drugs and mentions vorapaxar's PK properties (half-life) but does not report any pharmacogenomic effects (gene variants) on vorapaxar. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on vorapaxar's role in ferroptosis and immunotherapy, containing no pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no specific study data, parameters, or mention of vorapaxar. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for vorapaxar. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or information regarding vorapaxar. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, analysis, or mention of vorapaxar pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vorapaxar`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
