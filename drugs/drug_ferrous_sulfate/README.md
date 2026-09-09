# ferrous sulfate

- **generic name:** ferrous sulfate
- **ATC codes:** `B03AA07`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 19:33 | 1:16 | 0/0/0 | 0/0/0 | 0/0/0 | 1,308/1,230 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 0/0 | 15/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 69 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aston_2010.pdf` | Aston JE et al., Effects of ferrous sulfate, inoculum hi…, Environmental toxicology an… (2010) | pd | 4 | [10.1002/etc.338](https://doi.org/10.1002/etc.338) | [20931606](https://www.ncbi.nlm.nih.gov/pubmed/20931606) | metadata signals extractable PD data (IC50) |
| `Fernandez_2017.pdf` | Fernandez ACAM et al., Antimicrobial and Antioxidant Activitie…, Current microbiology (2017) | pd | 4 | [10.1007/s00284-017-1340-9](https://doi.org/10.1007/s00284-017-1340-9) | [28840299](https://www.ncbi.nlm.nih.gov/pubmed/28840299) | metadata signals extractable PD data (IC50) |
| `Lo_1994.pdf` | Lo YC et al., Magnolol and honokiol isolated from Mag…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90187-2](https://doi.org/10.1016/0006-2952(94)90187-2) | [8117323](https://www.ncbi.nlm.nih.gov/pubmed/8117323) | metadata signals extractable PD data (IC50) |
| `Racay_1995.pdf` | Racay P et al., Rabbit brain endoplasmic reticulum memb…, Biochemistry and molecular… (1995) | pd | 4 | not captured | [7549956](https://www.ncbi.nlm.nih.gov/pubmed/7549956) | metadata signals extractable PD data (EC50) |
| `Silva_2022.pdf` | Silva AM et al., Valorization of Kiwiberry Leaves Recove…, Antioxidants (Basel, Switze… (2022) | pd | 4 | [10.3390/antiox11040763](https://doi.org/10.3390/antiox11040763) | [35453448](https://www.ncbi.nlm.nih.gov/pubmed/35453448) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-08T19:33:04.434200+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnieszka_2022 | irrelevant | 0 | 0 | The paper is a systematic review of drug-food interactions in Parkinson's disease where ferrous sulfate is mentioned only as a dietary supplement that negatively affects levodopa, not as the subject drug for PK parameter extraction. |
| PD | Agnieszka_2022 | not_relevant | 1 | 0 | The paper is a systematic review that qualitatively mentions ferrous sulfate negatively affecting levodopa pharmacokinetics, but it does not report any numeric PD parameters or exposure-response curves for ferrous sulfate. |
| popPK | Ahn_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carbamazepine, with ferrous sulfate (iron supplementation) acting only as a co-administered agent affecting carbamazepine absorption, not as the subject drug. |
| PD | Ahn_2018 | not_relevant | 0 | 0 | The study reports a pharmacokinetic interaction (reduced bioavailability of carbamazepine) but does not report a pharmacodynamic or exposure-response relationship for ferrous sulfate. |
| popPK | Allen_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ferric maltol, not ferrous sulfate, which is only mentioned as a comparator or background context. |
| popPK | Aston_2010 | irrelevant | 0 | 0 | The study investigates the toxicity of heavy metals to bacteria, not the pharmacokinetics of ferrous sulfate. |
| popPK | Audet_1997 | irrelevant | 0 | 0 | The paper describes a radiological dosimeter mechanism involving spin-lattice relaxation, not the pharmacokinetics of ferrous sulfate. |
| PD | Audet_1997 | not_relevant | 0 | 0 | The paper describes a physical radiation dosimetry model (Fricke-gelatin) relating radiation dose to MRI relaxation rates, not a pharmacodynamic drug-response relationship for ferrous sulfate. |
| popPK | Bellido_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid peroxidation where ferrous sulfate is used as a reagent to induce oxidative stress, not as a subject drug for pharmacokinetic analysis. |
| popPK | Dainty_2003 | irrelevant | 4 | 2 | The study models iron absorption using a single-compartment framework but reports fractional absorption percentages rather than standard PK parameters like clearance (CL) or volume (V) for ferrous sulfate. |
| popPK | Davidsson_2003 | irrelevant | 0 | 0 | The study measures iron absorption via erythrocyte incorporation of stable isotopes, not pharmacokinetic parameters (CL, V, ka) for ferrous sulfate. |
| PD | Davidsson_2003 | not_relevant | 2 | 1 | The study reports a qualitative effect of retinyl palmitate on iron absorption (erythrocyte incorporation) but does not provide a concentration-response or dose-response curve, nor does it report numeric PD parameters like Emax or EC50 for ferrous sulfate. |
| PGx | Davis_2024 | not_relevant | 0 | 0 | The paper reports a clinical case of ADHR where iron supplementation improved biochemical markers, but it does not report a pharmacogenomic effect on the PK or PD of ferrous sulfate itself. |
| popPK | Droy-Lefaix_1995 | irrelevant | 0 | 0 | The study investigates the antioxidant effects of Ginkgo biloba extract on the retina, using ferrous sulfate only as a reagent to induce oxidative stress, not as a subject drug for pharmacokinetic analysis. |
| PD | Droy-Lefaix_1995 | not_relevant | 1 | 0 | The paper mentions a qualitative dose-response effect of Ginkgo biloba extract but provides no numeric PD parameters, concentration-effect curves, or quantitative data for ferrous sulfate. |
| popPK | Fernandez_2017 | irrelevant | 0 | 0 | The paper studies the antimicrobial and antioxidant activities of a plant extract, where ferrous sulfate is used only as a reagent in the FRAP assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Fernandez_2017 | not_relevant | 0 | 0 | The paper evaluates the antimicrobial and antioxidant activities of plant extracts, not the pharmacodynamics of ferrous sulfate. |
| popPK | Fischer_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of labetalol, not ferrous sulfate. |
| PD | Fischer_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of labetalol and does not report any pharmacodynamic or exposure-response data for ferrous sulfate. |
| popPK | Fischer_2023 | irrelevant | 0 | 0 | The study is a clinical trial measuring ferritin concentrations and gut health outcomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume for ferrous sulfate. |
| popPK | Gaitán_2011 | irrelevant | 2 | 0 | The study measures fractional iron absorption using radioactive tracers rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Gaitán_2012 | irrelevant | 2 | 0 | The study investigates the interaction between heme and non-heme iron absorption using radioactive tracers, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Haynes_2026 | irrelevant | 0 | 0 | The study is a clinical trial analyzing iron biomarkers (ferritin, hepcidin, etc.) in response to dosing regimens, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for ferrous sulfate. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study focuses on the antioxidant properties of polydatin, using ferrous sulfate only as a reagent in the FRAP assay, and contains no pharmacokinetic data. |
| PD | Jin_2016 | not_relevant | 0 | 0 | The paper reports antioxidant activity (IC50) of polydatin, not a pharmacodynamic or exposure-response relationship for ferrous sulfate. |
| popPK | Kim_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of iron's effect on calcium channels, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Lo_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects where ferrous sulfate is used as a reagent to induce lipid peroxidation, not as the subject drug for pharmacokinetic analysis. |
| PD | Lo_1994 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, inhibition %) for magnolol and honokiol, not for ferrous sulfate, which is used only as an inducer of lipid peroxidation. |
| popPK | Maeyama_2017 | irrelevant | 0 | 0 | The paper is a review of Fricke gel dosimeters where ferrous sulfate is used as a chemical dosimeter for radiation measurement, not as a subject drug for pharmacokinetic analysis. |
| PD | Maeyama_2017 | not_relevant | 0 | 0 | The paper is a review of Fricke gel dosimeters for radiation therapy verification, focusing on chemical dosimetry (radiation-induced oxidation) rather than pharmacodynamic drug-response relationships. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents (ESAs) in critically ill patients and does not contain pharmacokinetic data for ferrous sulfate. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials regarding the harms of erythropoiesis-stimulating agents (ESAs) and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for ferrous sulfate. |
| popPK | Mohamed_2022 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo mechanistic investigation of Hibiscus sabdariffa's antioxidant effects, using ferrous sulfate only as an oxidative stress inducer rather than as the subject drug for pharmacokinetic analysis. |
| PD | Mohamed_2022 | not_relevant | 0 | 0 | The paper studies the antioxidant and antidiabetic effects of Hibiscus sabdariffa extracts, using ferrous sulfate only as an agent to induce oxidative injury, and does not report any pharmacodynamic or exposure-response relationship for ferrous sulfate itself. |
| popPK | Mzembe_2025 | irrelevant | 0 | 0 | The study is a clinical trial analyzing child growth outcomes, not a pharmacokinetic study, and reports no disposition parameters for ferrous sulfate. |
| popPK | Nooreen_2017 | irrelevant | 0 | 0 | The paper is a phytochemical and biological activity study of Zanthoxylum armatum, where ferrous sulfate is only used as a standard for antioxidant assays (FRAP), not as a subject drug for pharmacokinetic analysis. |
| PD | Nooreen_2017 | not_relevant | 0 | 0 | The paper reports pharmacological assays (IC50, MIC) for plant compounds, not a pharmacodynamic or exposure-response model for the drug ferrous sulfate. |
| popPK | Oehlsen_2022 | irrelevant | 0 | 0 | The paper is a review on the synthesis and applications of ferrofluids (magnetic nanoparticles) and does not contain pharmacokinetic data for ferrous sulfate. |
| PD | Oehlsen_2022 | not_relevant | 0 | 0 | The paper is a review on the synthesis and physical applications of ferrofluids (colloidal suspensions of iron oxide nanoparticles) and does not contain any pharmacokinetic or pharmacodynamic data for ferrous sulfate as a drug. |
| popPK | Paganini_2017 | irrelevant | 0 | 0 | The study measures fractional iron absorption (bioavailability) using stable isotopes, not pharmacokinetic disposition parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Pandey_2025 | irrelevant | 0 | 0 | The study is a mechanistic neuroprotection investigation where ferrous sulfate is used as an inducer of oxidative stress, not as the subject drug for pharmacokinetic analysis. |
| PD | Pandey_2025 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of Betulinic acid in a disease model, not the pharmacodynamics of ferrous sulfate, and does not report any exposure-response or dose-response parameters for ferrous sulfate. |
| popPK | Pizarro_2002 | irrelevant | 1 | 0 | The study focuses on the absorption pathway of iron bis-glycine chelate, using ferrous sulfate only as a comparator/reference agent, and does not report quantitative pharmacokinetic parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Pizarro_2003 | irrelevant | 2 | 0 | The study reports iron absorption amounts (mg absorbed) rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ferrous sulfate. |
| popPK | Qasem_2022 | irrelevant | 0 | 0 | The paper investigates the chemical composition and biological properties of chamomile essential oils and honey, and ferrous sulfate is only used as a reagent in the antioxidant assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Qasem_2022 | not_relevant | 0 | 0 | The paper investigates the biological properties of Matricaria chamomilla essential oils and honey, not the pharmacodynamics of ferrous sulfate. |
| popPK | Racay_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane damage and antioxidant protection, not a pharmacokinetic study of ferrous sulfate. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a soil chemistry study on bauxite residue neutralization, not a pharmacokinetic study of ferrous sulfate. |
| PD | Ren_2022 | not_relevant | 0 | 0 | The paper investigates the chemical neutralization of bauxite residue (soil/environmental science) using ferrous sulfate, not a pharmacodynamic or exposure-response relationship in a biological system. |
| popPK | Rohn_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of free radical damage to ATPases using ferrous sulfate as a reagent, not a pharmacokinetic study of the drug. |
| popPK | Rosen_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of ferrous sulfate for iron deficiency, reporting only serum ferritin levels and not any pharmacokinetic parameters. |
| PD | Rosen_2019 | not_relevant | 1 | 0 | The paper reports clinical efficacy (ferritin increase) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for ferrous sulfate. |
| popPK | Sena_2024 | irrelevant | 0 | 0 | The paper is a phytochemical and pharmacological study of Tetradenia riparia extracts, and ferrous sulfate is only mentioned as a reagent in the FRAP antioxidant assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Sena_2024 | not_relevant | 0 | 0 | The paper investigates the chemical composition and biological activities (antioxidant, antiviral, etc.) of plant extracts and essential oils, not the pharmacodynamics of ferrous sulfate. |
| popPK | Silva_2022 | irrelevant | 0 | 0 | The paper is about the extraction of antioxidants from kiwiberry leaves and uses ferrous sulfate only as a reagent in the FRAP assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Silva_2022 | not_relevant | 0 | 0 | The paper studies the extraction of kiwiberry leaves and reports antioxidant activity (IC50) and cell viability, but does not report a pharmacodynamic or exposure-response relationship for the drug ferrous sulfate. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | The paper is a phytochemical and antioxidant study of Humulus lupulus, where ferrous sulfate is used only as a reagent in the FRAP assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Silva_2025 | not_relevant | 0 | 0 | The paper analyzes the phytochemical profile and antioxidant capacity of hop extracts; it does not report a pharmacodynamic or exposure-response relationship for ferrous sulfate. |
| popPK | Stanoiu_2025 | irrelevant | 0 | 0 | The paper is a study on Inonotus obliquus delivery systems and does not report pharmacokinetic parameters for ferrous sulfate, which is only mentioned as a reagent in the FRAP assay. |
| PD | Stanoiu_2025 | not_relevant | 0 | 0 | The paper focuses on the characterization of Inonotus obliquus delivery systems and reports in vitro biological activities (antioxidant, antimicrobial, cytotoxic) but does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for ferrous sulfate or any other drug. |
| popPK | Steele_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing biological markers (telomere length, mtDNA) rather than pharmacokinetic parameters, and no PK data for ferrous sulfate are reported. |
| popPK | Taha_2022 | irrelevant | 0 | 0 | The study is a pharmacological/toxicology investigation of detrusor muscle contractility and metal accumulation, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.) for ferrous sulfate. |
| popPK | Valente_2016 | irrelevant | 0 | 0 | The paper is a radiation dosimetry study using ferrous sulfate as a chemical detector (Fricke gel), not a pharmacokinetic study of the drug. |
| PD | Valente_2016 | not_relevant | 0 | 0 | The paper describes a radiation dosimetry system (Fricke gel) where ferrous sulfate is a chemical component of the detector, not a drug being administered for pharmacodynamic effect. |
| popPK | Walczyk_2014 | irrelevant | 0 | 0 | The study measures iron absorption efficiency using stable isotopes rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Wolfson_1991 | irrelevant | 0 | 0 | The paper is a review of quinolone pharmacokinetics where ferrous sulfate is only mentioned as a co-administered agent that reduces quinolone bioavailability, not as the subject drug. |
| PD | Wolfson_1991 | not_relevant | 1 | 0 | The text is a review of quinolones that only qualitatively mentions ferrous sulfate as a substance that reduces bioavailability, without providing any pharmacodynamic or exposure-response data for ferrous sulfate itself. |
| popPK | Wong_2000 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, with ferrous sulfate serving only as a co-administered interactant rather than the subject drug. |
| PD | Wong_2000 | not_relevant | 3 | 1 | The study reports PK changes and qualitative changes in antimicrobial activity (assay dependency) but does not provide numeric PD parameters (e.g., MIC, Emax, EC50) or a quantitative concentration-effect curve for ferrous sulfate. |
| popPK | Yaeger_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tulathromycin, not ferrous sulfate. |
| PD | Yaeger_2021 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of tulathromycin, not ferrous sulfate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Zarif_2025 | irrelevant | 0 | 0 | The study focuses on atorvastatin delivery via nanocarriers and does not report pharmacokinetic parameters for ferrous sulfate. |
| PD | Zarif_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of atorvastatin nanocarriers, not on ferrous sulfate, and does not report any pharmacodynamic or exposure-response parameters for ferrous sulfate. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of iron supplementation on anemia and iron status, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhuo_2014 | irrelevant | 2 | 0 | The study focuses on ferrous glycinate as the subject drug with ferrous sulfate serving only as a comparator, and no specific numeric PK parameter values for ferrous sulfate are provided in the evidence. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper focuses on the formulation and in vitro characterization of a natural product (trans-dehydrocrotonin) in a nanoemulsion system and does not involve ferrous sulfate or report any pharmacokinetic parameters. |
| PD | de_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and physicochemical characterization of a SNEDDS delivery system for trans-dehydrocrotonin and reports in vitro antioxidant assays, but it does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for ferrous sulfate. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The paper contains no information regarding ferrous sulfate or its pharmacokinetic parameters. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts for G-CSF, Clofarabine/Mitoxantrone, DFMO, Gemcitabine/Nab-paclitaxel, and other topics, but does not mention ferrous sulfate or report any pharmacodynamic parameters for it. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence is only a title for an abstract book and contains no pharmacokinetic data or parameters for ferrous sulfate. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title/header for an abstract book and contains no data, analysis, or parameters regarding ferrous sulfate pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ferrous_sulfate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
