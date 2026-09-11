# nabilone

- **generic name:** nabilone
- **ATC codes:** `A04AD11`
- **DrugBank:** [DB00486](https://go.drugbank.com/drugs/DB00486)
- **groups:** approved, investigational

## About

**Description.** Nabilone (marketed as Cesamet) is a synthetic form of delta-9-tetrahydrocannabinol (Δ⁹-THC), the primary psychoactive component of cannabis (marijuana). Although structurally distinct from THC, nabilone mimics THC's structure and pharmacological activity through weak partial agonist activity at Cannabinoid-1 (CB1R) and Cannabinoid-2 (CB2R) receptors, however it is considered to be twice as active as Δ⁹-THC. Nabilone is approved by the FDA for the treatment of nausea and vomiting associated with cancer chemotherapy in patients who have failed to respond adequately to conventional antiemetic treatments [FDA Label].

Tetrahydrocannabinol (THC) and cannabidiol (CBD) are the two most abundant cannabinoids found naturally in the resin of the marijuana plant, both of which are pharmacologically active due to their interaction with cannabinoid receptors that are found throughout the body [A32830]. While both CBD and THC are used for medicinal purposes, they have different receptor activity, function, and physiological effects. If not provided in their activated form (such as through synthetic forms like Nabilone or [DB00470]), THC and CBD are obtained through conversion from their precursors, tetrahydrocannabinolic acid-A (THCA-A) and cannabidiolic acid (CBDA), through decarboxylation reactions. This can be achieved through heating, smoking, vaporization, or baking of dried unfertilized female cannabis flowers.

From a pharmacological perspective, Cannabis' diverse receptor profile explains its potential application for such a wide variety of medical conditions. Cannabis contains more than 400 different chemical compounds, of which 61 are considered cannabinoids, a class of compounds that act upon endogenous cannabinoid receptors of the body [A32584]. The endocannabinoid system is widely distributed throughout the central and peripheral nervous system (via the Cannabinoid Receptors CB1 and CB2) and plays a role in many physiological processes such as inflammation, cardi

**Indication.** Nabilone is indicated for the treatment of the nausea and vomiting associated with cancer chemotherapy in patients who have failed to respond adequately to conventional antiemetic treatments. This restriction is required because a substantial proportion of any group of patients treated with Nabilone can be expected to experience disturbing psychotomimetic reactions not observed with other antiemetic agents.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:58 | 7:29 | 0/0/0 | 0/0/0 | 0/0/0 | 88,336/2,531 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 9/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 29 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luba_2024.pdf` | Luba R et al., Evaluating the Abuse Potential of Lenab…, The Journal of pharmacology… (2024) | pd | 5 | [10.1124/jpet.124.002129](https://doi.org/10.1124/jpet.124.002129) | [38936978](https://www.ncbi.nlm.nih.gov/pubmed/38936978) | metadata signals extractable PD data (Emax) |
| `Pertwee_1996.pdf` | Pertwee RG et al., Evidence for the presence of cannabinoi…, British journal of pharmaco… (1996) | pd | 4 | [10.1111/j.1476-5381.1996.tb15643.x](https://doi.org/10.1111/j.1476-5381.1996.tb15643.x) | [8864542](https://www.ncbi.nlm.nih.gov/pubmed/8864542) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-11T02:57:50.018935+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amann_2026 | irrelevant | 1 | 0 | The paper is a review of therapeutic drug monitoring reference ranges (concentrations) rather than a study reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for nabilone. |
| PD | Amann_2026 | not_relevant | 3 | 2 | The paper is a systematic review that identifies broad therapeutic reference ranges (e.g., 1-5 ng/mL for nabilone) rather than reporting a specific concentration-effect curve or deriving numeric PD parameters like Emax or EC50 for nabilone. |
| popPK | Badowski_2017 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics generally but does not report original quantitative disposition parameters (CL, V, Q, ka) for nabilone. |
| PD | Badowski_2017 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD variability and efficacy but does not present original numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves for nabilone. |
| popPK | Carroll_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroprotection in cell culture, not a pharmacokinetic study, and nabilone is only a comparator agent. |
| PD | Carroll_2012 | not_relevant | 0 | 0 | The paper focuses on the neuroprotective mechanism of Δ9-THC in cell culture and only qualitatively mentions nabilone as a negative control without providing any dose-response data or numeric PD parameters for it. |
| popPK | Christodoulou_2025 | irrelevant | 0 | 0 | The paper is a review on the antioxidant and anticancer properties of hemp oils and does not report any pharmacokinetic parameters for nabilone. |
| PD | Christodoulou_2025 | not_relevant | 0 | 0 | The paper is a review of hemp oils and cannabinoids (CBD/THC) in cancer prevention, containing no specific pharmacodynamic or exposure-response data for nabilone. |
| popPK | Feldman_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study analyzing predictors of response to nabilone for agitation in Alzheimer's disease and does not report any pharmacokinetic parameters. |
| popPK | Giardina_2024 | irrelevant | 0 | 0 | The paper is a clinical pilot study and systematic review on the efficacy of medical cannabis for fibromyalgia pain, containing no pharmacokinetic data or disposition parameters for nabilone. |
| PD | Giardina_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes (pain scores) for a fixed dose of medical cannabis but does not provide pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Herman_1977 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting antiemetic effects and side effects, with no pharmacokinetic parameters or quantitative disposition data for nabilone. |
| PD | Herman_1977 | not_relevant | 2 | 0 | The text mentions a qualitative dose-response effect but provides no numeric PD parameters, concentration-effect data, or specific dose-response curve details. |
| popPK | Issa_2014 | irrelevant | 0 | 0 | The study focuses on the subjective psychoactive effects of dronabinol, not the pharmacokinetics of nabilone, and contains no PK parameters. |
| PD | Issa_2014 | not_relevant | 3 | 2 | The paper studies dronabinol, not nabilone, and only provides qualitative comparisons of peak effects without deriving numeric PD parameters like Emax or EC50. |
| popPK | Klumpers_2012 | irrelevant | 0 | 0 | The study investigates a THC formulation (Namisol) and only mentions nabilone as a comparator in the conclusion without providing any quantitative PK parameters for nabilone. |
| PD | Klumpers_2012 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative/summary PD effects (mean changes in body sway, VAS, heart rate) but does not provide an exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve. |
| popPK | Luba_2024 | irrelevant | 0 | 0 | The paper focuses on the abuse potential of lenabasum, a different drug, and does not report pharmacokinetic parameters for nabilone. |
| PD | Luba_2024 | not_relevant | 0 | 0 | The paper evaluates the abuse potential of lenabasum, not nabilone, and does not report PD parameters for nabilone. |
| popPK | McGilveray_2005 | irrelevant | 2 | 1 | The paper is a review that provides only a qualitative description and a rough half-life estimate for nabilone without reporting quantitative compartmental parameters (CL, V, Q) or population PK model values. |
| PD | McGilveray_2005 | not_relevant | 2 | 0 | The text is a pharmacokinetic review that qualitatively mentions a PK/PD relationship for THC (proportional effect) and compares nabilone's side effects to THC, but it does not provide any numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect data for nabilone. |
| popPK | Molinelli_2008 | irrelevant | 0 | 0 | The paper is a legal and pharmacological review discussing regulatory issues and lacks any original quantitative pharmacokinetic data for nabilone. |
| PD | Molinelli_2008 | not_relevant | 0 | 0 | The text is a legal and pharmacological commentary on Italian regulations regarding off-label use of cannabinoids, explicitly stating the absence of sufficient pharmacokinetic and pharmacodynamic knowledge, and contains no numeric PD parameters or exposure-response data. |
| popPK | Nouh_2023 | irrelevant | 0 | 0 | The paper is a review of cannabinoids in multiple sclerosis and does not report quantitative pharmacokinetic parameters for nabilone. |
| PD | Nouh_2023 | not_relevant | 1 | 0 | The paper is a critical review of cannabinoids in MS and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for nabilone. |
| popPK | Pertwee_1996 | irrelevant | 0 | 0 | The paper is a mechanistic study on cannabinoid receptors in mouse bladder tissue and does not report pharmacokinetic parameters for nabilone. |
| PD | Pertwee_1996 | not_relevant | 0 | 0 | The paper investigates the presence of CB1 receptors in mouse bladder tissue and does not report any pharmacodynamic or exposure-response data for nabilone. |
| popPK | Ruthirakuhan_2019 | irrelevant | 0 | 0 | The paper is a study protocol for a clinical trial investigating the efficacy of nabilone for agitation in Alzheimer's disease, not a pharmacokinetic study, and it does not report quantitative disposition parameters. |
| PD | Ruthirakuhan_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial and does not report any results, data, or pharmacodynamic parameters. |
| popPK | Soliman_2021 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of antinociceptive efficacy in animal pain models, not a pharmacokinetic study, and does not report quantitative PK parameters for nabilone. |
| PD | Soliman_2021 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of animal studies reporting standardized mean differences (SMD) for antinociceptive effects, but it does not provide specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for nabilone. |
| popPK | Winkler_2025 | irrelevant | 0 | 0 | The study investigates the psychological effects of Cannabidiol (CBD) and does not report pharmacokinetic parameters for nabilone. |
| PD | Winkler_2025 | not_relevant | 0 | 0 | The paper is a clinical trial of Cannabidiol (CBD), not nabilone, and reports no pharmacokinetic or pharmacodynamic modeling. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | The provided evidence contains pharmacokinetic data for oxycodone, daridorexant, atorvastatin, and other drugs, but does not report quantitative disposition parameters for nabilone. |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text contains abstracts for oxycodone, esomeprazole, daridorexant, bile acids, and atorvastatin, but does not contain any information regarding nabilone. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The paper discusses Alzheimer's disease clinical trials and modeling but does not mention nabilone or report any pharmacokinetic parameters for it. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text contains abstracts for Alzheimer's disease imaging, biomarkers, and an anti-sortilin antibody (AL001), but does not contain any information regarding nabilone or its pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nabilone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
