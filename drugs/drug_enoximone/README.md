# enoximone

- **generic name:** enoximone
- **ATC codes:** `C01CE03`
- **DrugBank:** [DB04880](https://go.drugbank.com/drugs/DB04880)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Enoximone is a selective phosphodiesterase inhibitor with vasodilating and positive inotropic activity that does not cause changes in myocardial oxygen consumption. It is used in patients with congestive heart failure. Trials were halted in the U.S., but the drug is used in various countries.

**Indication.** For the treatment of congestive heart failure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 19:15 | 11:05 | 0/0/0 | 0/0/0 | 0/0/0 | 64,483/4,900 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 52 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Booker_2000.pdf` | Booker PD et al., Enoximone pharmacokinetics in infants, British journal of anaesthe… (2000) | popPK | 10 | [10.1093/bja/85.2.205](https://doi.org/10.1093/bja/85.2.205) | [10992825](https://pubmed.ncbi.nlm.nih.gov/10992825) | The paper reports quantitative non-compartmental pharmacokinetic parameters (clearance, volume of distribution, half-life) for enoximone in infants with specific numeric values provided in the text. |
| `Smith_1991.pdf` | Smith NA et al., Clinical pharmacology of intravenous en…, American heart journal (1991) | popPK | 8 | [10.1016/0002-8703(91)90522-j](https://doi.org/10.1016/0002-8703(91)90522-j) | [1831585](https://pubmed.ncbi.nlm.nih.gov/1831585) | The study is a clinical PK/PD trial of enoximone, but the provided abstract lacks specific numeric PK parameter values (CL, V, t1/2), mentioning only qualitative observations of accumulation and half-life. |
| `Li_1994.pdf` | Li Q et al., Effects of the new phosphodiesterase-II…, Journal of cardiovascular p… (1994) | pd | 5 | [10.1097/00005344-199407000-00021](https://doi.org/10.1097/00005344-199407000-00021) | [7521478](https://www.ncbi.nlm.nih.gov/pubmed/7521478) | metadata signals extractable PD data (EC50) |
| `Parsons_1988.pdf` | Parsons WJ et al., The new cardiotonic agent sulmazole is…, Molecular pharmacology (1988) | pd | 5 | not captured | [3128727](https://www.ncbi.nlm.nih.gov/pubmed/3128727) | metadata signals extractable PD data (EC50) |
| `Buerke_1997.pdf` | Buerke M et al., Phosphodiesterase inhibitors piroximone…, Thrombosis research (1997) | pd | 4 | [10.1016/s0049-3848(97)00221-1](https://doi.org/10.1016/s0049-3848(97)00221-1) | [9361363](https://www.ncbi.nlm.nih.gov/pubmed/9361363) | metadata signals extractable PD data (IC50) |
| `Hall_1990.pdf` | Hall JA et al., Enoximone potentiates the positive inot…, Cardiology (1990) | pd | 4 | [10.1159/000174666](https://doi.org/10.1159/000174666) | [1979934](https://www.ncbi.nlm.nih.gov/pubmed/1979934) | metadata signals extractable PD data (Concentration-effect) |
| `Masuoka_1990.pdf` | Masuoka H et al., Effects of amrinone and enoximone on th…, Journal of cardiovascular p… (1990) | pd | 4 | [10.1097/00005344-199002000-00018](https://doi.org/10.1097/00005344-199002000-00018) | [1689427](https://www.ncbi.nlm.nih.gov/pubmed/1689427) | metadata signals extractable PD data (IC50) |
| `Rascón_2002.pdf` | Rascón A et al., Cloning and characterization of a cAMP-…, Proceedings of the National… (2002) | pd | 4 | [10.1073/pnas.002031599](https://doi.org/10.1073/pnas.002031599) | [11930017](https://www.ncbi.nlm.nih.gov/pubmed/11930017) | metadata signals extractable PD data (IC50) |
| `Schneider_1992.pdf` | Schneider J et al., Cardiac effects of R 79595 and its isom…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00169014](https://doi.org/10.1007/BF00169014) | [1470228](https://www.ncbi.nlm.nih.gov/pubmed/1470228) | metadata signals extractable PD data (EC50) |
| `Szilágyi_2005.pdf` | Szilágyi S et al., Two inotropes with different mechanisms…, Journal of cardiovascular p… (2005) | pd | 4 | [10.1097/01.fjc.0000175454.69116.9](https://doi.org/10.1097/01.fjc.0000175454.69116.9) | [16116344](https://www.ncbi.nlm.nih.gov/pubmed/16116344) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-09T19:14:32.628100+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belz_1988 | irrelevant | 2 | 0 | The abstract describes a PK/PD study but does not report any quantitative disposition parameters (CL, V, t1/2, etc.) for enoximone. |
| popPK | Bethke_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phosphodiesterase inhibition and contractile force, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Birnbaum_1990 | irrelevant | 2 | 0 | The study reports plasma concentrations and hemodynamic effects but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Birnbaum_1990 | not_relevant | 3 | 2 | The paper reports mean plasma concentrations and mean hemodynamic changes at specific time points but explicitly states the effect was not paralleled by concentration, providing no numeric PD parameters (Emax, EC50) or fitted concentration-effect curve. |
| popPK | Birnbaum_1991 | irrelevant | 2 | 0 | The study reports hemodynamic effects and plasma concentrations but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| PD | Birnbaum_1991 | not_relevant | 3 | 2 | The study reports mean hemodynamic changes and plasma concentrations at specific time points but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| popPK | Breithaupt_1990 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects and plasma concentrations but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental model for enoximone. |
| popPK | Breithaupt_1991 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects and plasma concentrations but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental model for enoximone. |
| popPK | Buerke_1997 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic effect (platelet aggregation) of enoximone, not pharmacokinetic disposition parameters. |
| popPK | Endoh_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of pimobendan and its metabolite, mentioning enoximone only as a comparator for cyclic AMP elevation without providing any pharmacokinetic parameters. |
| PD | Endoh_1991 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of pimobendan and its metabolite; enoximone is only mentioned as a comparator for cAMP elevation without providing any specific PD parameters or concentration-response data for it. |
| popPK | Erbel_1987 | irrelevant | 1 | 0 | The study reports hemodynamic dose-response data (cardiac index, pressure) but contains no pharmacokinetic parameters (CL, V, t1/2) for enoximone. |
| popPK | Gilbert_1987 | irrelevant | 0 | 0 | The study reports acute hemodynamic responses (cardiac index, pressures) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for enoximone. |
| PD | Gilbert_1987 | not_relevant | 3 | 2 | The study reports a dose-range analysis with mean hemodynamic changes but explicitly states that dose-response differences were not significant and provides no numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| popPK | Gilbert_1995 | irrelevant | 0 | 0 | The study focuses on pharmacologic and hemodynamic effects (in vitro and in vivo) rather than pharmacokinetic disposition parameters, and no PK values are reported. |
| popPK | Grossmann_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of venodilatory potency (ED50) and does not report any pharmacokinetic disposition parameters for enoximone. |
| popPK | Hall_1990 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study on human atrial myocardium and does not report pharmacokinetic parameters for enoximone. |
| popPK | Hsieh_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of inotropic effects and cyclic nucleotide levels in isolated tissue, reporting no pharmacokinetic parameters. |
| PD | Hsieh_1987 | not_relevant | 4 | 2 | The paper describes a dose-response relationship qualitatively (dose-dependent inotropy, less steep than IBMX) but does not provide numeric PD parameters (Emax, EC50) or a quantitative effect-vs-dose curve in the provided text. |
| popPK | Itoh_1991 | irrelevant | 0 | 0 | The study reports exercise tolerance and hemodynamic effects, not pharmacokinetic parameters. |
| popPK | Itoh_1993 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of vasorelaxation and phosphodiesterase inhibition, not a pharmacokinetic study, and reports no disposition parameters for enoximone. |
| popPK | Lehtonen_2004 | irrelevant | 0 | 0 | The paper is a review discussing the general pharmacology of inotropic agents without reporting original quantitative pharmacokinetic parameters for enoximone. |
| PD | Lehtonen_2004 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanisms and general pharmacokinetic properties of inotropic agents, including enoximone, but it does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Lellouche_1988 | irrelevant | 2 | 0 | The study reports acute hemodynamic dose-response data (cardiac index, pressure) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for enoximone. |
| popPK | Li_1994 | irrelevant | 0 | 0 | The paper studies a different drug (R80122) and focuses on pharmacodynamics (contractility/calcium current) rather than enoximone pharmacokinetics. |
| PD | Li_1994 | not_relevant | 0 | 0 | The paper investigates the effects of R80122, not enoximone. |
| popPK | Mangieri_1999 | irrelevant | 0 | 0 | The study is a clinical trial assessing myocardial viability using enoximone as a diagnostic agent, and it does not report any pharmacokinetic parameters. |
| PD | Mangieri_1999 | not_relevant | 2 | 1 | The study reports a fixed-dose clinical trial (0.75 mg/kg) and correlates wall motion scores with revascularization outcomes, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for enoximone. |
| popPK | Masuoka_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on phosphodiesterase subclasses, not a pharmacokinetic study reporting disposition parameters for enoximone. |
| PD | Masuoka_1990 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of action (PDE inhibition) in tissue homogenates, not a pharmacokinetic/pharmacodynamic exposure-response relationship in vivo or in a clinical setting. |
| popPK | Molter_1993 | irrelevant | 0 | 0 | The study focuses exclusively on pharmacodynamic effects (hemodynamics) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for enoximone. |
| PD | Molter_1993 | not_relevant | 2 | 1 | The study reports qualitative hemodynamic changes (percentages) after a single fixed dose of enoximone but does not provide plasma concentration data or fit a concentration-effect model, making numeric PD parameters like Emax or EC50 unextractable. |
| popPK | Parsons_1988 | irrelevant | 0 | 0 | The paper discusses sulmazole, not enoximone, and contains no pharmacokinetic data. |
| PD | Parsons_1988 | not_relevant | 0 | 0 | The text describes sulmazole, not enoximone, and contains no pharmacodynamic or exposure-response data. |
| popPK | Rascón_2002 | irrelevant | 0 | 0 | The paper describes the cloning of a phosphodiesterase enzyme from Trypanosoma brucei and does not contain any pharmacokinetic data for enoximone. |
| PD | Rascón_2002 | not_relevant | 0 | 0 | The paper focuses on the cloning and characterization of a phosphodiesterase enzyme from Trypanosoma brucei and does not contain any pharmacodynamic or exposure-response data for enoximone. |
| popPK | Rocci_1987 | irrelevant | 1 | 0 | The paper is a review that mentions enoximone only as a compound under investigation without providing any quantitative pharmacokinetic parameter values. |
| PD | Rocci_1987 | not_relevant | 1 | 0 | The text is a review abstract that qualitatively mentions enoximone is under investigation but provides no numeric PD parameters, concentration-effect data, or dose-response relationships. |
| popPK | Romano_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nadroparin, not enoximone, which is only mentioned as a vasopressor/inodilator used in the ICU setting. |
| PD | Romano_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for nadroparin, not enoximone, and does not provide a pharmacodynamic (PD) or exposure-response model with numeric PD parameters. |
| popPK | Salmenperä_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilatory effects on human artery rings, not a pharmacokinetic study reporting disposition parameters for enoximone. |
| popPK | Schneider_1992 | irrelevant | 0 | 0 | The paper studies phosphodiesterase III inhibitors (R 79595, etc.) and does not involve enoximone or report its pharmacokinetic parameters. |
| PD | Schneider_1992 | not_relevant | 0 | 0 | The paper investigates R 79595 and its isomers, not enoximone. |
| popPK | Smith_1991 | relevant | 8 | 2 | The study is a clinical PK/PD trial of enoximone, but the provided abstract lacks specific numeric PK parameter values (CL, V, t1/2), mentioning only qualitative observations of accumulation and half-life. |
| popPK | Szilágyi_2005 | irrelevant | 0 | 0 | The paper focuses on inotropic mechanisms (contractile, PDE-inhibitory, myofibrillar effects) rather than pharmacokinetic disposition parameters, and no numeric PK values are present. |
| PD | Szilágyi_2005 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Vernon_1991 | irrelevant | 0 | 0 | The paper is a review of pharmacological properties and therapeutic potential, not a primary pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Vernon_1991 | not_relevant | 1 | 0 | The text is a qualitative review summary that mentions pharmacodynamic properties and dosage tolerability but does not provide specific numeric PD parameters, concentration-effect curves, or detailed dose-response data. |
| popPK | Zausig_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac function in isolated guinea pig hearts and does not report pharmacokinetic parameters for enoximone. |
| popPK | Zipperle_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for congestive heart failure and does not report any pharmacokinetic parameters for enoximone. |
| popPK | de_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting enzyme inhibition (IC50) values, not pharmacokinetic disposition parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of enoximone. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The paper is a collection of abstracts where enoximone is mentioned only in the context of hemodynamic effects (blood pressure) in rats, with no pharmacokinetic parameters reported. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for enoximone. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or text regarding enoximone. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of enoximone pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_enoximone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
