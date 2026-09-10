# stannous fluoride

- **generic name:** stannous fluoride
- **ATC codes:** `A01AA04`
- **DrugBank:** [DB11092](https://go.drugbank.com/drugs/DB11092)
- **groups:** approved, investigational

## About

**Description.** Stannous Fluoride, or Tn(II) Fluoride, is a compound commonly used in toothpastes for the prevention of gingivitis, dental infections, cavities, and to relieve dental hypersensitivity. Although similar in function and activity to Sodium Fluoride (NaF), the conventionally added ingredient in toothpastes, stannous fluoride has been shown to be more effective at stopping and reversing dental lesions [A19581]. It manages and prevents dental caries and gingivitis by promoting enamel mineralization [A19580], reducing gingival inflammation and bleeding [A19582, A19583] through its potential broad-spectrum antibiotic effect and modulation of the microbial composition of the dental biofilm [A19581]. It is an FDA-approved over-the-counter product.

**Indication.** Indicated for use to relieve dental hypersensitivity, increase enamel production, prevent gingivitis and cavities, and control periodontal infections.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 11:26 | 10:30 | 0/0/0 | 1/0/0 | 0/0/0 | 84,740/2,952 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Xie_2024](drugs/drug_stannous_fluoride/pd_Xie_2024_unknown.md) | Xie S et al., Stannous fluoride protects gingival ker…, Frontiers in dental medicine (2024) | [10.3389/fdmed.2024.1492369](https://doi.org/10.3389/fdmed.2024.1492369) |

## Coverage

- **PubMed hits:** 18 matched, 32 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scott_2009.pdf` | Scott DC et al., Topical oral cavity pharmacokinetic mod…, Journal of pharmaceutical s… (2009) | popPK | 10 | [10.1002/jps.21691](https://doi.org/10.1002/jps.21691) | [19189400](https://pubmed.ncbi.nlm.nih.gov/19189400) | The paper describes a specific two-compartment pharmacokinetic model for stannous fluoride in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |

<sub>queue written 2026-09-10T11:26:07.401729+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biesbrock_2019 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical trials assessing the efficacy of stannous fluoride dentifrices on gingivitis, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Claydon_2002 | irrelevant | 0 | 0 | The study is a clinical trial assessing plaque inhibition efficacy, not a pharmacokinetic study, and contains no disposition parameters for stannous fluoride. |
| PD | Claydon_2002 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response pattern for chlorhexidine and compares stannous fluoride as a single-dose benchmark, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for stannous fluoride. |
| popPK | Clayer_1989 | irrelevant | 0 | 0 | The study uses stannous fluoride as a diagnostic radiotracer to assess splenic phagocytic function, not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper is a toxicological risk assessment of fluoride exposure and does not report pharmacokinetic parameters for stannous fluoride. |
| PD | EFSA_2025 | not_relevant | 1 | 0 | The paper is a consumer risk assessment establishing health-based guidance values (safe levels/ULs) based on epidemiological associations, not a pharmacodynamic study reporting numeric PD parameters like Emax or EC50 for stannous fluoride. |
| popPK | Faller_1995 | irrelevant | 0 | 0 | The paper is a review of in situ models for fluoride efficacy and does not report any pharmacokinetic parameters for stannous fluoride. |
| PD | Faller_1995 | not_relevant | 1 | 0 | The text is a review discussing the lack of clinical dose-response data for stannous fluoride and proposing in situ testing guidelines, without reporting any numeric PD parameters or concentration-effect curves. |
| popPK | Faller_1995_2 | irrelevant | 0 | 0 | The paper focuses on anticaries efficacy and fluoride uptake in enamel, not on pharmacokinetic disposition parameters (CL, V, etc.) for stannous fluoride. |
| popPK | Fernando_2024 | irrelevant | 0 | 0 | The study is an in situ clinical trial measuring ion bioavailability and remineralization efficacy, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Fiorillo_2020 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials regarding the dental efficacy (enamel loss, plaque, sensitivity) of stannous fluoride, containing no pharmacokinetic parameters or disposition data. |
| PD | Fiorillo_2020 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of clinical trials that reports statistical significance (p-values) and qualitative effects on enamel loss, but it does not provide numeric pharmacodynamic parameters (e.g., Emax, EC50) or a quantitative exposure-response curve for stannous fluoride. |
| popPK | Fisher_2003 | irrelevant | 0 | 0 | The paper evaluates anticaries efficacy and fluoride uptake in enamel, not pharmacokinetic disposition parameters (CL, V, etc.) for stannous fluoride. |
| popPK | Grusovin_2008 | irrelevant | 0 | 0 | The paper is a clinical review of dental implant maintenance interventions and does not report any pharmacokinetic parameters for stannous fluoride. |
| PD | Grusovin_2008 | not_relevant | 0 | 0 | The paper is a systematic review of clinical interventions for dental implants and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for stannous fluoride. |
| popPK | Gómez_2026 | irrelevant | 0 | 0 | The paper is a systematic review on dentin erosion and protease inhibition, not a pharmacokinetic study, and stannous fluoride is only mentioned as a topical inhibitor without any PK parameters. |
| PD | Gómez_2026 | not_relevant | 1 | 0 | The paper is a systematic review that qualitatively summarizes the efficacy of stannous fluoride as an inhibitor but does not report or derive specific numeric pharmacodynamic parameters (e.g., IC50, Emax) or exposure-response curves for the drug itself. |
| popPK | Haught_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of stannous fluoride's effect on Toll-like receptor activation and cytokine secretion, containing no pharmacokinetic parameters. |
| popPK | He_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on gingivitis outcomes and does not report any pharmacokinetic parameters for stannous fluoride. |
| popPK | He_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing gingivitis efficacy and biofilm uptake, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for stannous fluoride. |
| popPK | Hirsch_1989 | irrelevant | 1 | 0 | The study focuses on the preparation and evaluation of a radiolabeling kit for leukocytes, not on the pharmacokinetic disposition parameters of stannous fluoride itself. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study is an in-vitro investigation of dentinal fluid flow reduction and tubule occlusion, not a pharmacokinetic study, and reports no disposition parameters for stannous fluoride. |
| popPK | Kong_2011 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the radiotracer 99mTc-PQQ, not for stannous fluoride, which is used only as a reducing agent in the radiolabeling process. |
| popPK | Ledder_2010 | irrelevant | 0 | 0 | The study is a microbiological evaluation of oral hygiene actives in biofilm models and does not report any pharmacokinetic parameters for stannous fluoride. |
| PD | Ledder_2010 | not_relevant | 1 | 0 | The paper reports qualitative microbiological effects (viable counts, diversity) of stannous fluoride in biofilm models but does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or PK/PD modeling data. |
| popPK | Lippert_2009 | irrelevant | 0 | 0 | The study is an in-vitro assessment of anticaries potential (enamel fluoride uptake) and does not report pharmacokinetic parameters for stannous fluoride. |
| PD | Lippert_2009 | not_relevant | 3 | 1 | The study reports a qualitative dose-response trend for sodium fluoride and compares stannous fluoride to other agents using ANOVA, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for stannous fluoride. |
| popPK | Miller_1994 | irrelevant | 0 | 0 | The paper focuses on the antibacterial efficacy and mechanism of action (surface deposition/occlusion) of stannous fluoride, not on pharmacokinetic disposition parameters. |
| popPK | Scott_2009 | relevant | 10 | 0 | The paper describes a specific two-compartment pharmacokinetic model for stannous fluoride in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Shapiro_2002 | irrelevant | 0 | 0 | The study is an in vitro efficacy assessment of mouthrinses and does not report pharmacokinetic parameters for stannous fluoride. |
| popPK | Sim_2015 | irrelevant | 0 | 0 | The study is a clinical trial assessing caries progression and does not report any pharmacokinetic parameters for stannous fluoride. |
| popPK | Sim_2019 | irrelevant | 0 | 0 | The study is a clinical trial assessing anticariogenic efficacy and salivary fluoride concentrations, not a pharmacokinetic study reporting disposition parameters for stannous fluoride. |
| popPK | Stalteri_1996 | irrelevant | 0 | 0 | The paper describes a radiolabeling method for an antibody where stannous fluoride is used as a reagent, not as the subject drug for pharmacokinetic analysis. |
| popPK | Stephen_1994 | irrelevant | 0 | 0 | The paper is a review of fluoride dental products and caries prevention, containing no pharmacokinetic parameters or quantitative disposition data for stannous fluoride. |
| PD | Stephen_1994 | not_relevant | 1 | 0 | The text is a general review of fluoride products that qualitatively mentions dose-response relationships but provides no specific numeric PD parameters or extractable concentration-effect data for stannous fluoride. |
| popPK | Stephen_1995 | irrelevant | 0 | 0 | The paper is a review of dental caries prevention efficacy and does not report any pharmacokinetic parameters for stannous fluoride. |
| PD | Stephen_1995 | not_relevant | 1 | 0 | The text is a historical review that qualitatively mentions dose-response trends (e.g., &gt;1000 ppm) but does not report specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for stannous fluoride. |
| popPK | White_1995 | irrelevant | 0 | 0 | The paper describes a method for evaluating antimicrobial efficacy on dental plaque and does not report pharmacokinetic parameters for stannous fluoride. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the interaction of stannous fluoride with bacterial outer membrane vesicles and does not report any pharmacokinetic parameters. |
| popPK | Zero_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on dentifrices measuring enamel remineralization and fluoride uptake, not a pharmacokinetic study reporting disposition parameters for stannous fluoride. |
| PD | Zero_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (EFU) for different dentifrice formulations but does not provide pharmacokinetic data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The provided evidence contains only a conference acronym and no pharmacokinetic data or text regarding stannous fluoride. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference tag (EANM'17) and contains no scientific content, data, or mention of stannous fluoride pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_stannous_fluoride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
