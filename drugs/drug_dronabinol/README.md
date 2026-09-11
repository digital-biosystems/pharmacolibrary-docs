# dronabinol

- **generic name:** dronabinol
- **ATC codes:** `A04AD10`
- **DrugBank:** [DB00470](https://go.drugbank.com/drugs/DB00470)
- **groups:** approved, illicit, investigational

## About

**Description.** Dronabinol (marketed as Marinol) is a synthetic form of delta-9-tetrahydrocannabinol (Δ⁹-THC), the primary psychoactive component of cannabis (marijuana). THC demonstrates its effects through weak partial agonist activity at Cannabinoid-1 (CB1R) and Cannabinoid-2 (CB2R) receptors, which results in the well-known effects of smoking cannabis such as increased appetite, reduced pain, and changes in emotional and cognitive processes. Due to its evidence as an appetite stimulant and an anti-nauseant, Dronabinol is approved for use in anorexia associated with weight loss in patients with AIDS and for the treatment of nausea and vomiting associated with cancer chemotherapy in patients who have failed to respond adequately to conventional antiemetic treatments [FDA Label].

Tetrahydrocannabinol (THC) and cannabidiol (CBD) are the two most abundant cannabinoids found naturally in the resin of the marijuana plant, both of which are pharmacologically active due to their interaction with cannabinoid receptors that are found throughout the body [A32830]. While both CBD and THC are used for medicinal purposes, they have different receptor activity, function, and physiological effects. If not provided in their activated form (such as through synthetic forms like Dronabinol or [DB00486]), THC and CBD are obtained through conversion from their precursors, tetrahydrocannabinolic acid-A (THCA-A) and cannabidiolic acid (CBDA), through decarboxylation reactions. This can be achieved through heating, smoking, vaporization, or baking of dried unfertilized female cannabis flowers.

From a pharmacological perspective, Cannabis' diverse receptor profile explains its potential application for such a wide variety of medical conditions. Cannabis contains more than 400 different chemical compounds, of which 61 are considered cannabinoids, a class of compounds that act upon endogenous cannabinoid receptors of the body [A32584]. The endocannabinoid system is widely distributed throughout the c

**Indication.** Dronabinol is indicated for the treatment of anorexia associated with weight loss in patients with AIDS, and nausea and vomiting associated with cancer chemotherapy in patients who have failed to respond adequately to conventional antiemetic treatments.[L43438]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:51 | 9:08 | 0/0/0 | 0/0/0 | 0/0/0 | 62,275/2,808 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 32 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klumpers_2012.pdf` | Klumpers LE et al., Novel Δ(9) -tetrahydrocannabinol formul…, British journal of clinical… (2012) | popPK | 8 | [10.1111/j.1365-2125.2012.04164.x](https://doi.org/10.1111/j.1365-2125.2012.04164.x) | [22680341](https://pubmed.ncbi.nlm.nih.gov/22680341) | The study reports PK parameters for dronabinol (THC) including t1/2, tmax, and Cmax, but lacks explicit clearance (CL) or volume (V) values required for full compartmental/population PK extraction. |
| `Schoedel_2018.pdf` | Schoedel KA et al., Abuse potential assessment of cannabidi…, Epilepsy & behavior : E&B (2018) | pd | 5 | [10.1016/j.yebeh.2018.07.027](https://doi.org/10.1016/j.yebeh.2018.07.027) | [30286443](https://www.ncbi.nlm.nih.gov/pubmed/30286443) | metadata signals extractable PD data (Emax) |
| `Patar_2023.pdf` | Patar AK et al., Dronabinol as an answer to flavivirus i…, Journal of biomolecular str… (2023) | pd | 4 | [10.1080/07391102.2022.2160817](https://doi.org/10.1080/07391102.2022.2160817) | [36576139](https://www.ncbi.nlm.nih.gov/pubmed/36576139) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T02:50:22.286924+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amann_2026 | irrelevant | 2 | 0 | The paper is a review of therapeutic drug monitoring reference ranges (concentrations) rather than a study reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for dronabinol. |
| PD | Amann_2026 | not_relevant | 3 | 2 | The paper is a systematic review that summarizes therapeutic reference ranges and qualitative concentration-effect correlations from other studies, but it does not present a primary PD model or specific numeric PD parameters (like Emax or EC50) derived from its own analysis. |
| popPK | Badowski_2017 | irrelevant | 2 | 1 | The paper is a narrative review that discusses dronabinol's pharmacokinetics qualitatively and cites other studies for specific values, rather than reporting original quantitative disposition parameters (CL, V, ka) in the provided text. |
| PD | Badowski_2017 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD variability and efficacy but does not present original numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves for dronabinol. |
| popPK | Barrett_2026 | irrelevant | 0 | 0 | The study is a psychopharmacological investigation of subjective effects and blinding, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for dronabinol. |
| PD | Barrett_2026 | not_relevant | 2 | 1 | The study is a qualitative pilot comparison of subjective effects at fixed doses (25/50 mg) without PK data or quantitative dose-response modeling. |
| popPK | Brunette_2025 | irrelevant | 1 | 0 | The study is a clinical trial assessing cognitive and psychiatric outcomes, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, ka, etc.) for dronabinol. |
| PGx | Camilleri_2012 | not_relevant | 5 | 0 | The paper is a review that mentions pharmacogenetic responses to dronabinol based on CNR1 and FAAH variation, but it does not report specific quantitative PK/PD effect sizes or fitted parameters. |
| PGx | Curtis_2025 | not_relevant | 0 | 0 | The study is a feasibility trial for dronabinol in sickle cell disease and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Daoui_2023 | irrelevant | 0 | 0 | The paper is an in-silico computational study (molecular docking and ADME prediction) for drug discovery, not a pharmacokinetic study reporting quantitative disposition parameters for dronabinol. |
| PD | Daoui_2023 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking, MD simulations, ADME-Tox prediction) and does not report any experimental pharmacodynamic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for dronabinol. |
| popPK | De_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial investigating pain sensitivity and abuse potential, not a pharmacokinetic study reporting quantitative disposition parameters for dronabinol. |
| popPK | Formukong_1989 | irrelevant | 0 | 0 | The study investigates the inhibitory effects of cannabinoids on platelet aggregation (pharmacodynamics) and does not report any pharmacokinetic parameters for dronabinol. |
| popPK | Goodwin_2006 | irrelevant | 2 | 0 | The study reports only peak concentrations (Cmax) and detection times, lacking the specific quantitative disposition parameters (CL, V, ka, t1/2) required for population pharmacokinetic modeling. |
| PD | Goodwin_2006 | not_relevant | 1 | 0 | The study reports pharmacokinetic parameters (concentrations, detection times) and a correlation between BMI and Cmax, but does not report any pharmacodynamic effects or exposure-response/dose-response relationships with numeric PD parameters. |
| popPK | Huestis_2002 | irrelevant | 2 | 0 | The paper is a review of cannabis effects on performance and behavior, and the provided evidence contains no quantitative pharmacokinetic parameter values for dronabinol. |
| PD | Huestis_2002 | not_relevant | 1 | 0 | The text is a review abstract summarizing general effects and PK/PD concepts without providing specific numeric PD parameters or extractable concentration-effect data for dronabinol. |
| popPK | Issa_2014 | irrelevant | 0 | 0 | The study focuses on subjective psychoactive effects (ARCI scores) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Klumpers_2012 | relevant | 8 | 4 | The study reports PK parameters for dronabinol (THC) including t1/2, tmax, and Cmax, but lacks explicit clearance (CL) or volume (V) values required for full compartmental/population PK extraction. |
| PD | Klumpers_2012 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric pharmacodynamic parameters, curves, or exposure-response data. |
| popPK | Le_2015 | irrelevant | 0 | 0 | The text is an editorial introduction to a special issue and contains no original pharmacokinetic data or quantitative parameters for dronabinol. |
| PD | Le_2015 | not_relevant | 0 | 0 | The text is an editorial introduction to a special issue and contains no specific pharmacodynamic data, models, or numeric parameters for dronabinol. |
| popPK | McGilveray_2005 | irrelevant | 1 | 0 | The paper is a review that discusses dronabinol only briefly without providing specific quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for it. |
| PD | McGilveray_2005 | not_relevant | 2 | 0 | The text is a pharmacokinetic review that qualitatively mentions a PK/PD relationship (effect proportional to plasma profile) but provides no numeric PD parameters, curves, or specific dose-response data for dronabinol. |
| popPK | Odieka_2025 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro antioxidant study of cannabis essential oils, not a pharmacokinetic study, and contains no disposition parameters for dronabinol. |
| PD | Odieka_2025 | not_relevant | 0 | 0 | The paper reports the chemical composition and in vitro antioxidant activity of essential oils, not a pharmacodynamic or exposure-response relationship for the drug dronabinol. |
| popPK | Patar_2023 | irrelevant | 0 | 0 | The paper is an in-silico investigation of dronabinol against flavivirus infections, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Patar_2023 | not_relevant | 0 | 0 | The paper is an in-silico investigation of dronabinol against flaviviruses and does not report any pharmacodynamic or exposure-response data. |
| popPK | Rabinak_2026 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for PTSD treatment that does not report any pharmacokinetic parameters or quantitative disposition data for dronabinol. |
| popPK | Schoedel_2012 | irrelevant | 0 | 0 | The study focuses on the abuse potential and cognitive effects of taranabant, with dronabinol serving only as an active comparator and no pharmacokinetic parameters reported. |
| popPK | Schoedel_2018 | irrelevant | 0 | 0 | The study focuses on cannabidiol (CBD) and does not report pharmacokinetic parameters for dronabinol. |
| PD | Schoedel_2018 | not_relevant | 0 | 0 | The paper focuses on cannabidiol (CBD) and does not report pharmacodynamic or exposure-response data for dronabinol. |
| popPK | Wolkowicz_2024 | irrelevant | 0 | 0 | The study investigates attentional bias and pain effects, not pharmacokinetic parameters, and reports no quantitative disposition data for dronabinol. |
| popPK | Wong_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic and pharmacogenetic trial assessing gut transit, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for dronabinol. |
| PD | Wong_2012 | not_relevant | 2 | 1 | The study reports a lack of significant dose-response effect on gut transit and focuses on pharmacogenetics, providing no numeric PD parameters or concentration-effect curves. |
| popPK | de_2014 | irrelevant | 2 | 0 | The paper is a review focusing on mechanistic considerations and clinical efficacy in chronic pain, and the provided evidence contains no quantitative pharmacokinetic parameter values for dronabinol. |
| PD | de_2014 | not_relevant | 2 | 0 | The paper is a review discussing mechanistic considerations and clinical trials but does not present original data or specific numeric PD parameters (e.g., EC50, Emax) for dronabinol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dronabinol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
