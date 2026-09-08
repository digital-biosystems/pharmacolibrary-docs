# romiplostim

- **generic name:** romiplostim
- **ATC codes:** `B02BX04`
- **DrugBank:** [DB05332](https://go.drugbank.com/drugs/DB05332)
- **groups:** approved, investigational

## About

**Description.** Romiplostim is a thrombopoiesis stimulating dimer Fc-peptide fusion protein (peptibody) to increase platelet production through activation of the thrombopoietin receptor. The peptibody molecule has two identical single-chain subunits, each one is made up of 269 amino acid residues. Each subunit consists of an IgG1 Fc carrier domain that is covalently attached to a polypeptide sequence that contains two binding domains to interact with thrombopoietin receptor c-Mpl. Each domain consists of 14 amino acids. Interestingly, romiplostim's amino acid sequence is not similar to that of endogenous thrombopoietin. Romiplostim is produced by recombinant DNA technology in Escherichia coli. FDA approved on August 22, 2008.

**Indication.** Treatment of chronic immune thrombocytopenic purpura.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 20:30 | 2:41 | 0/0/0 | 0/3/0 | 0/0/0 | 1,222/226 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 1/3 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023](drugs/drug_romiplostim/pd_Fan_2023_hemoglobin.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023](drugs/drug_romiplostim/pd_Fan_2023_platelets.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023](drugs/drug_romiplostim/pd_Fan_2023_red_blood_cells.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023_2](drugs/drug_romiplostim/pd_Fan_2023_2_Hgb.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023_2](drugs/drug_romiplostim/pd_Fan_2023_2_PLT.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023_2](drugs/drug_romiplostim/pd_Fan_2023_2_RBCs.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2023_2](drugs/drug_romiplostim/pd_Fan_2023_2_RETs.md) | Fan (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Perez_2013](drugs/drug_romiplostim/pd_Perez_2013_PLT.md) | Perez Ruixo JJ et al., Romiplostim dose-response in patients w…, British journal of clinical… (2013) | [10.1111/bcp.12041](https://doi.org/10.1111/bcp.12041) |

## Coverage

- **PubMed hits:** 58 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Makarenko_2024.pdf` | Makarenko I et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacology in dr… (2024) | popPK | 10 | [10.1002/cpdd.1367](https://doi.org/10.1002/cpdd.1367) | [38168134](https://pubmed.ncbi.nlm.nih.gov/38168134) | The paper describes a population PK/PD modeling study for romiplostim, but the specific numeric parameter values are not present in the provided evidence text. |
| `Wang_2010.pdf` | Wang YM et al., Pharmacodynamics-mediated drug disposit…, The AAPS journal (2010) | popPK | 9 | [10.1208/s12248-010-9234-9](https://doi.org/10.1208/s12248-010-9234-9) | [20963535](https://pubmed.ncbi.nlm.nih.gov/20963535) | The paper describes a mechanistic PK-PD model for romiplostim but the evidence text only lists PD parameters (receptor kinetics, lifespans) and lacks the specific numeric PK disposition parameters (CL, V, Q, ka) required for extraction. |
| `Krzyzanski_2013.pdf` | Krzyzanski W et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2013) | popPK | 8 | [10.1007/s11095-012-0894-2](https://doi.org/10.1007/s11095-012-0894-2) | [23250851](https://pubmed.ncbi.nlm.nih.gov/23250851) | The paper is a relevant animal PK/PD modeling study for romiplostim, but the specific quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided evidence, which only reports potency parameters (RO, KD). |
| `Petrov_2025.pdf` | Petrov A et al., Optimization of Romiplostim Biosimilar…, Clinical pharmacology in dr… (2025) | popPK | 8 | [10.1002/cpdd.1494](https://doi.org/10.1002/cpdd.1494) | [39702972](https://pubmed.ncbi.nlm.nih.gov/39702972) | The paper describes a population PK/PD model for romiplostim, but the specific numeric parameter values are not present in the provided evidence. |
| `Fan_2022.pdf` | Fan X et al., Fate Determination Role of Erythropoiet…, The Journal of pharmacology… (2022) | pd | 5 | [10.1124/jpet.122.001130](https://doi.org/10.1124/jpet.122.001130) | [35489782](https://www.ncbi.nlm.nih.gov/pubmed/35489782) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Perez-Ruixo_2012.pdf` | Perez-Ruixo JJ et al., Romiplostim dose response in patients w…, Journal of clinical pharmac… (2012) | pd | 4 | [10.1177/0091270011420843](https://doi.org/10.1177/0091270011420843) | [22167563](https://www.ncbi.nlm.nih.gov/pubmed/22167563) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-09-06T20:29:25.438309+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abdela_2019 | not_relevant | 1 | 0 | The paper is a qualitative review article focusing on avatrombopag and general TPO-R agonists; it does not report any numeric PD parameters, concentration-effect curves, or dose-response models for romiplostim. |
| PGx | Aldapt_2026 | not_relevant | 0 | 0 | The paper is a case report on AML treatment outcomes and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of romiplostim. |
| PD | Bussel_2021 | not_relevant | 2 | 0 | The paper is a qualitative review of mechanism of action and clinical applicability, lacking specific numeric PD parameters or exposure-response curves. |
| PGx | Dai_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on cisplatin PK/PD, not romiplostim. |
| popPK | Dua_2015 | irrelevant | 2 | 0 | The paper is a theoretical tutorial on TMDD models that mentions romiplostim only as a case study for a dose correction, without reporting original quantitative PK parameter values. |
| PD | Dua_2015 | not_relevant | 1 | 0 | The paper is a theoretical tutorial on TMDD models and does not report specific numeric PD parameters or exposure-response data for romiplostim, only citing it as an example for model validation. |
| popPK | Fan_2023 | relevant | 8 | 2 | The paper describes a rat PK/PD study with a compartmental model for romiplostim, but the specific numeric parameter values (CL, V, ka) are not present in the provided text, likely residing in tables or supplementary material not included. |
| PD | González-Porras_2019 | not_relevant | 2 | 0 | The paper is a clinical review of switching strategies between TPO-RAs and discusses qualitative mechanisms of action, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or quantitative exposure-response/dose-response data for romiplostim. |
| PGx | Hernández-Sánchez_2020 | not_relevant | 0 | 0 | The paper analyzes transcriptomic changes in patients treated with eltrombopag, not the pharmacokinetics or pharmacodynamics of romiplostim, and does not report any pharmacogenomic effects. |
| popPK | Krzyzanski_2013 | relevant | 8 | 2 | The paper is a relevant animal PK/PD modeling study for romiplostim, but the specific quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided evidence, which only reports potency parameters (RO, KD). |
| popPK | Makarenko_2024 | relevant | 10 | 0 | The paper describes a population PK/PD modeling study for romiplostim, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Moulis_2014 | not_relevant | 0 | 0 | The paper is a pharmacovigilance disproportionality analysis comparing adverse drug reaction patterns, not a pharmacodynamic or exposure-response study. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data or parameters for romiplostim. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators and does not mention romiplostim or report any pharmacodynamic or exposure-response data. |
| popPK | Perez_2013 | irrelevant | 2 | 0 | The study is a pharmacodynamic (PD) analysis of platelet counts and does not report quantitative pharmacokinetic (PK) parameters like clearance or volume for romiplostim. |
| popPK | Petrov_2025 | relevant | 8 | 0 | The paper describes a population PK/PD model for romiplostim, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Tiu_2008 | not_relevant | 2 | 1 | The text is a review article summarizing the role of romiplostim and its general pharmacodynamics, but it does not present specific numeric PD parameters (such as Emax, EC50) or detailed exposure-response curves in the provided excerpt. |
| popPK | Wang_2010 | relevant | 9 | 4 | The paper describes a mechanistic PK-PD model for romiplostim but the evidence text only lists PD parameters (receptor kinetics, lifespans) and lacks the specific numeric PK disposition parameters (CL, V, Q, ka) required for extraction. |
| PD | Wu_2014 | not_relevant | 2 | 0 | The text is a review article describing general pharmacokinetic characteristics of peptide-Fc fusion proteins and mentions PK/PD modeling techniques in general terms, but it does not report specific numeric PD parameters or extractable exposure-response relationships for romiplostim. |
| popPK | Yan_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of epoetin alfa (a biosimilar), not romiplostim. |
| PD | Yan_2012 | not_relevant | 0 | 0 | The paper concerns Epoetin Alfa and its biosimilar HX575, not romiplostim. |
| PD | Yang_2016 | not_relevant | 2 | 0 | The text provides a qualitative description of the mechanism and variability but contains no numeric PD parameters, dose-response curves, or quantitative PK/PD model fits. |
| PD | Yassin_2023 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively describes the dose-dependent increase in platelet count and mentions a "biologically active dose" threshold, but it does not provide a formal PD model, numeric PD parameters (like Emax or EC50), or an extractable concentration-effect curve. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | The provided evidence is only a title of a conference abstract collection with no content, data, or mention of romiplostim pharmacokinetics. |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is a title of a conference abstract collection and contains no data, analysis, or mention of romiplostim or pharmacodynamics. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for romiplostim. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for romiplostim. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The paper is a collection of pediatric oncology abstracts (2016 ASPHO) and does not contain any pharmacokinetic data or studies for romiplostim. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts for G-CSF, clofarabine/mitoxantrone, DFMO, genomic profiling, gemcitabine/nab-paclitaxel, nanomedicine, and CVL management, but does not mention romiplostim or report any pharmacodynamic parameters for it. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of conference metadata and contains no pharmacokinetic data or study details for romiplostim. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of romiplostim pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or numeric parameters for romiplostim. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no data, results, or PD parameters. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence consists only of a conference title with no pharmacokinetic data, parameters, or mention of romiplostim. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_romiplostim`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
