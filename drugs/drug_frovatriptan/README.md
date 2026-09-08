# frovatriptan

- **generic name:** frovatriptan
- **ATC codes:** `N02CC07`
- **DrugBank:** [DB00998](https://go.drugbank.com/drugs/DB00998)
- **groups:** approved

## About

**Description.** Frovatriptan is a triptan drug developed by Vernalis for the treatment of migraine headaches, in particular those associated with menstruation. Frovatriptan causes vasoconstriction of arteries and veins that supply blood to the head.

**Indication.** For the acute treatment of migraine attacks with or without aura in adults.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 22:37 | 13:16 | 0/0/0 | 0/0/0 | 0/0/0 | 94,843/7,766 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 3/6 | 9/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 48 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koishikawa_2025.pdf` | Koishikawa T et al., Bridging in vitro and clinical data: Ex…, Drug metabolism and disposi… (2025) | pd | 5 | [10.1016/j.dmd.2025.100087](https://doi.org/10.1016/j.dmd.2025.100087) | [40460516](https://www.ncbi.nlm.nih.gov/pubmed/40460516) | metadata signals extractable PD data (IC50) |
| `Buchan_2002.pdf` | Buchan P et al., Clinical pharmacokinetics of frovatript…, Headache (2002) | pgx | 7 | [10.1046/j.1526-4610.42.s2.3.x](https://doi.org/10.1046/j.1526-4610.42.s2.3.x) | [12028321](https://www.ncbi.nlm.nih.gov/pubmed/12028321) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-08-29T22:33:59.136444+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allais_2005 | irrelevant | 0 | 0 | The paper is a review of prophylaxis strategies for menstrual migraine and does not report original quantitative pharmacokinetic parameters for frovatriptan. |
| popPK | Allais_2013 | irrelevant | 1 | 1 | This is a clinical review of frovatriptan's efficacy in menstrual migraine, not a pharmacokinetic study, and it lacks quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Allais_2016 | irrelevant | 1 | 0 | The paper is a clinical efficacy review that mentions the half-life (~26 hours) but does not report quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| popPK | Ashkenazi_2003 | irrelevant | 0 | 0 | The paper is a narrative review of migraine management that mentions frovatriptan's half-life qualitatively but provides no quantitative pharmacokinetic parameters or original data. |
| popPK | Balbisi_2004 | irrelevant | 2 | 1 | The text is a review/overview that mentions a half-life of 25 h but lacks quantitative disposition parameters like clearance, volume, or compartmental model values. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a qualitative review discussing the general pharmacokinetic and pharmacodynamic properties of triptans without providing specific numeric PD parameters or exposure-response data for frovatriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for frovatriptan. |
| popPK | Buchan_2002 | irrelevant | 2 | 2 | The paper is a review of clinical pharmacokinetics that reports qualitative descriptors and ranges (e.g., half-life ~26h, bioavailability 22-30%) but lacks specific quantitative compartmental parameters (CL, V, Q, ka) or population-PK model estimates required for extraction. |
| PD | Buchan_2002 | not_relevant | 2 | 0 | The paper is a pharmacokinetic review that qualitatively mentions a "shallow dose-response curve" but provides no numeric PD parameters, concentration-effect data, or formal PK/PD modeling. |
| PGx | Buchan_2002 | not_relevant | 0 | 0 | The paper is a general review of frovatriptan pharmacokinetics and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Buchan_2002_2 | irrelevant | 2 | 0 | The paper is a review of drug-drug interactions that discusses qualitative PK changes (e.g., slight increases/decreases in AUC) without reporting specific quantitative disposition parameters (CL, V, t1/2) for frovatriptan. |
| PGx | Buchan_2002_2 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and environmental factors (smoking, alcohol) but does not report pharmacogenomic effects of gene variants on frovatriptan PK/PD. |
| popPK | Cady_2016 | irrelevant | 1 | 0 | The paper is a clinical review discussing patient profiles and treatment strategies, mentioning only the half-life of frovatriptan without reporting quantitative disposition parameters like clearance or volume. |
| popPK | Comer_2002 | irrelevant | 0 | 0 | The paper describes in vitro and in vivo pharmacological mechanisms (receptor binding, vascular effects) rather than quantitative pharmacokinetic disposition parameters. |
| PD | Comer_2002 | not_relevant | 3 | 1 | The paper describes qualitative pharmacological profiles (affinity, agonism, bell-shaped dose-response) but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect curves in the provided text. |
| popPK | Easthope_2001 | irrelevant | 2 | 1 | The text is a summary/review that mentions a half-life but lacks quantitative disposition parameters (CL, V, Q, ka) or a compartmental model. |
| popPK | Elkind_2008 | irrelevant | 1 | 0 | The text is a clinical review discussing efficacy and safety, mentioning only a qualitative half-life value without reporting quantitative disposition parameters (CL, V, Q, ka) or population-PK model estimates. |
| popPK | Goldstein_2002 | irrelevant | 1 | 0 | The paper is a clinical efficacy and dose-finding study that does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for frovatriptan. |
| PD | Goldstein_2002 | not_relevant | 3 | 2 | The paper is a clinical dose-finding study that reports qualitative dose-response trends (efficacy plateau, AE increase) but does not provide numeric PD parameters (Emax, EC50) or a formal PK/PD model fit. |
| popPK | Goldstein_2003 | irrelevant | 2 | 1 | The paper is a review that only mentions a terminal half-life of 26 h without providing other quantitative disposition parameters like clearance or volume, and lacks a compartmental or population-PK model. |
| popPK | Guidotti_2009 | irrelevant | 1 | 0 | The paper is a clinical and economic review that mentions the half-life (26 hours) but does not report quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| popPK | Géraud_2003 | irrelevant | 1 | 0 | This is a review/meta-analysis correlating clinical outcomes with pharmacokinetic properties, not an original study reporting quantitative disposition parameters (CL, V, etc.) for frovatriptan. |
| popPK | Hamzah_2024 | relevant | 8 | 2 | The paper is a formulation study that includes an in-vivo PK section for frovatriptan in rats, but the specific quantitative disposition parameters (CL, V, ka) are not present in the provided text, only AUC values and a cited half-life. |
| popPK | Jhee_2001 | irrelevant | 2 | 1 | This is a comparative review that mentions frovatriptan's half-life (25 hours) but lacks original quantitative disposition parameters like clearance, volume, or compartmental models. |
| PD | Jhee_2001 | not_relevant | 1 | 0 | The text is a qualitative comparative review of pharmacokinetic properties and general efficacy, lacking any specific numeric PD parameters or concentration-effect analysis for frovatriptan. |
| popPK | Kassem_2016 | irrelevant | 1 | 0 | The paper is a review of formulation approaches for triptans and does not report original quantitative pharmacokinetic parameters for frovatriptan. |
| PD | Koishikawa_2025 | not_relevant | 0 | 0 | The paper focuses on dolutegravir's inhibition of OCT2; frovatriptan is only mentioned as a substrate used to demonstrate variability in uptake kinetics, with no PD or exposure-response analysis performed for frovatriptan. |
| popPK | MacGregor_2014 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and safety for menstrual migraine, not a pharmacokinetic study, and it only mentions the half-life without providing quantitative disposition parameters like clearance or volume. |
| popPK | Macone_2017 | irrelevant | 0 | 0 | The paper is a narrative review of triptan development and clinical use, containing no original pharmacokinetic data or quantitative disposition parameters for frovatriptan. |
| popPK | Markus_2007 | irrelevant | 1 | 0 | The paper is a narrative review of frovatriptan's clinical use and pharmacology, lacking original quantitative population-pharmacokinetic parameter estimates (CL, V, Q, ka) or compartmental models. |
| popPK | Negro_2011 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetic aspects qualitatively and mentions a half-life value but does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental model. |
| PD | Negro_2011 | not_relevant | 2 | 1 | The text is a review summarizing general pharmacokinetic and pharmacodynamic properties (e.g., receptor potency, half-life) but does not report specific numeric PD parameters (Emax, EC50) or an exposure-response curve for frovatriptan. |
| popPK | Ohk_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sumatriptan, not frovatriptan, which is only mentioned as a comparator in the discussion. |
| PD | Ohk_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of sumatriptan and explicitly states that a PK/PD model was not established, offering no pharmacodynamic data or parameters. |
| popPK | Parsons_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contraction and does not report any pharmacokinetic parameters. |
| popPK | Rapoport_2001 | irrelevant | 2 | 1 | The text is a clinical review summarizing efficacy and general PK characteristics (half-life, bioavailability) without reporting quantitative compartmental parameters (CL, V, Q, ka) or population PK model estimates. |
| popPK | Rapoport_2002 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters for frovatriptan. |
| popPK | Sanford_2012 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and tolerability that mentions a half-life but does not report quantitative disposition parameters like clearance, volume, or compartmental model values. |
| popPK | Silberstein_2009 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for migraine prevention and does not report any pharmacokinetic parameters for frovatriptan. |
| PD | Silberstein_2009 | not_relevant | 3 | 2 | The paper reports a clinical dose-response (efficacy difference between 2.5 mg QD and BID) but does not provide pharmacokinetic data or numeric PD parameters (e.g., EC50, Emax) required for a pharmacodynamic model. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 2 | 1 | This is a comparative review that mentions frovatriptan's half-life (26-30h) but lacks quantitative disposition parameters like clearance, volume, or compartmental model values. |
| PD | Tfelt-Hansen_2000 | not_relevant | 1 | 0 | The text is a comparative review that lists clinical efficacy outcomes (therapeutic gain percentages) and PK parameters (half-life, bioavailability) but does not report any concentration-effect or dose-response curves, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 0 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and contains no quantitative PK parameters (CL, V, ka, etc.) for frovatriptan. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and time-to-effect, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for frovatriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing time to maximum effect (Emax) with Tmax, but it does not provide numeric concentration-effect parameters (like EC50 or slope) or a quantitative PD model for frovatriptan. |
| popPK | Tullo_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for migraine treatment and does not report quantitative pharmacokinetic parameters for frovatriptan. |
| PD | Tullo_2014 | not_relevant | 1 | 0 | The paper reports clinical efficacy outcomes (proportions of pain-free subjects) for fixed-dose combinations but does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for frovatriptan. |
| popPK | Verma_2014 | irrelevant | 1 | 0 | The paper is a formulation development study focusing on in vitro/ex vivo permeation and physicochemical properties, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for frovatriptan. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided evidence contains only a copyright take-down policy and download metadata, with no scientific content or pharmacokinetic data for frovatriptan. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a copyright/takedown policy notice and does not contain any pharmacodynamic data, models, or parameters for frovatriptan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_frovatriptan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
