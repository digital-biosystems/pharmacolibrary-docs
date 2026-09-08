# 112_trichloroethane

- **generic name:** not captured
- **ATC codes:** not captured
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 10:32 | 2:00 | 0/0/0 | 0/1/0 | 0/0/0 | 1,518/358 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Yoshii_1987](drugs/toxin_112_trichloroethane/pd_Yoshii_1987_gACh.md) | Yoshii K et al., Equilibrium properties of mouse-Torpedo…, The Journal of general phys… (1987) | [10.1085/jgp.90.4.553](https://doi.org/10.1085/jgp.90.4.553) |

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gargas_1989.pdf` | Gargas ML et al., Determining kinetic constants of chlori…, Toxicology and applied phar… (1989) | popPK | 10 | [10.1016/0041-008x(89)90016-1](https://doi.org/10.1016/0041-008x(89)90016-1) | [2734795](https://pubmed.ncbi.nlm.nih.gov/2734795) | The paper reports quantitative metabolic kinetic constants (Vmax) for 1,1,2-trichloroethane (the target drug) derived from a PB-PK model, with specific numeric values provided in the text. |
| `Jakobson_1977.pdf` | Jakobson I et al., Variations in the blood concentration o…, Acta pharmacologica et toxi… (1977) | popPK | 9 | [10.1111/j.1600-0773.1977.tb02161.x](https://doi.org/10.1111/j.1600-0773.1977.tb02161.x) | [579560](https://pubmed.ncbi.nlm.nih.gov/579560) | The paper describes a pharmacokinetic study of 1,1,2-trichloroethane in guinea pigs with compartmental modeling, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-08T10:31:39.506738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-de-Linaje_2019 | irrelevant | 0 | 0 | The paper is a sorption study of chlorinated hydrocarbons by hydrotalcites, not a pharmacokinetic study, and reports no PK parameters for 1,1,2-trichloroethane. |
| popPK | Altman_1993 | irrelevant | 0 | 0 | The paper describes the production and folding of MHC class II proteins in E. coli and is unrelated to the pharmacokinetics of 112_trichloroethane. |
| PD | Altman_1993 | not_relevant | 0 | 0 | The paper describes the production and functional characterization of MHC class II proteins, not the pharmacodynamics of trichloroethane. |
| popPK | Baccala_2005 | irrelevant | 0 | 0 | The paper is an immunology study on T cell homeostasis and does not contain any pharmacokinetic data for 112_trichloroethane. |
| popPK | Blumberg_1995 | irrelevant | 0 | 0 | The paper discusses the structure and function of CD1 proteins and is unrelated to the pharmacokinetics of 112_trichloroethane. |
| popPK | Crebelli_1999 | irrelevant | 0 | 0 | The paper is a genotoxicity study (micronucleus test) and does not report any pharmacokinetic parameters for 1,1,2-trichloroethane. |
| PD | Crebelli_1999 | not_relevant | 0 | 0 | The paper reports a negative genotoxicity result (no significant increase in micronuclei) at fixed doses without providing concentration-effect data, PK parameters, or a dose-response curve analysis. |
| PGx | Doherty_1996 | not_relevant | 0 | 0 | The paper investigates the genotoxicity (micronucleus induction) of chlorinated hydrocarbons in cell lines, not the pharmacokinetic or pharmacodynamic parameters of 1,1,2-trichloroethane as a drug. |
| popPK | Elovaara_1979 | irrelevant | 0 | 0 | The paper is an embryotoxicity study reporting LD50 values and malformation rates, not a pharmacokinetic study with disposition parameters. |
| PGx | Goss_1993 | not_relevant | 0 | 0 | The paper investigates T-cell receptor usage in murine transplant immunology and does not involve the drug 112_trichloroethane or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Itohara_1993 | irrelevant | 0 | 0 | The paper is an immunology study on T cell receptor gene mutations in mice and contains no pharmacokinetic data for trichloroethane. |
| popPK | Jakobson_1977 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of 1,1,2-trichloroethane in guinea pigs with compartmental modeling, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Jockovich_2006 | irrelevant | 0 | 0 | The paper studies anecortave acetate and carboplatin for retinal tumors, not 112_trichloroethane, and contains no pharmacokinetic parameters. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | The paper is a risk assessment study that calculates exposure doses (SED) but does not report pharmacokinetic parameters (CL, V, etc.) for 1,1,2-trichloroethane. |
| PD | Kim_2019 | not_relevant | 0 | 0 | The paper is a risk assessment calculating exposure doses and margins of exposure, not a pharmacodynamic study reporting concentration-effect relationships or PD parameters. |
| popPK | Lacour_1990 | irrelevant | 0 | 0 | The paper is an immunology study on T cell lines and contains no pharmacokinetic data for 112_trichloroethane. |
| PD | Lacour_1990 | not_relevant | 0 | 0 | The paper describes T cell proliferation in response to collagen antigens, which is an immunological assay, not a pharmacodynamic exposure-response relationship for the chemical compound trichloroethane. |
| popPK | Lahti_1991 | irrelevant | 0 | 0 | The paper is an immunology study on chicken T-cell receptor gene segments and contains no pharmacokinetic data for trichloroethane. |
| popPK | Lundberg_1986 | irrelevant | 0 | 0 | The study reports toxicological endpoints (LD50, TD50) and liver enzyme activity, not pharmacokinetic parameters (CL, V, ka) for 1,1,1-trichloroethane. |
| PD | Lundberg_1986 | not_relevant | 3 | 2 | The paper reports LD50 and minimal toxic doses for 1,1,1-trichloroethane but explicitly states that even high doses did not raise SDH activity, meaning no numeric dose-response curve or PD parameters (like Emax/EC50) for the specific drug are provided. |
| popPK | Mancia_1994 | irrelevant | 0 | 0 | The paper is an immunology study on T-cell transfer in SCID mice and does not involve the drug 112_trichloroethane or pharmacokinetic parameters. |
| popPK | Parry_1996 | irrelevant | 0 | 0 | The paper is a review of aneugenic mechanisms and cytogenetic assays, mentioning 1,1,2-trichloroethane only in the context of metabolic activation, without reporting any pharmacokinetic parameters. |
| PD | Parry_1996 | not_relevant | 1 | 0 | The text is a review summary that mentions 1,1,2-trichloroethane only in the context of metabolic activation and general aneugenicity, without providing any specific numeric dose-response or exposure-response parameters for this compound. |
| popPK | Patterson_2016 | irrelevant | 0 | 0 | The paper describes environmental remediation and degradation kinetics of 1,1,2-trichloroethane in a column study, not pharmacokinetic parameters (CL, V, etc.) for a biological system. |
| PGx | Peeters_2003 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of thyroid hormones, not trichloroethane. |
| popPK | Peyret_2012 | irrelevant | 2 | 0 | The paper is a modeling study for 26 VOCs where 1,1,1-trichloroethane is only one of many chemicals, and specific numeric PK parameters for it are not explicitly listed in the provided text. |
| PD | Peyret_2012 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling (PBPK) and intrinsic clearance prediction, not pharmacodynamic (PD) or exposure-response relationships for biological effects. |
| popPK | Piña_2010 | irrelevant | 0 | 0 | The study focuses on 2-deoxy-D-glucose and carboplatin for retinoblastoma treatment and does not involve 112_trichloroethane or report any pharmacokinetic parameters. |
| PD | Piña_2010 | not_relevant | 0 | 0 | The paper studies 2-deoxy-D-glucose and carboplatin, not trichloroethane. |
| popPK | Piña_2011 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of rapamycin in a retinoblastoma model and does not mention or report pharmacokinetic parameters for 112_trichloroethane. |
| popPK | Sanders_1985 | irrelevant | 0 | 0 | The study focuses on immunological effects and toxicity, not pharmacokinetic parameters. |
| PD | Sanders_1985 | not_relevant | 2 | 1 | The study reports qualitative toxicological and immunological effects at specific dose levels but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax). |
| popPK | Sheng_1998 | irrelevant | 0 | 0 | The paper is an immunology study on T-cell tolerance in mice and does not contain any pharmacokinetic data for trichloroethane. |
| PD | Sheng_1998 | not_relevant | 0 | 0 | The paper discusses immunological tolerance induction in mice and is unrelated to the chemical compound trichloroethane. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | The paper describes a GC-MS analytical method for detecting chlorinated hydrocarbons in cosmetics, not a pharmacokinetic study. |
| popPK | Tomida_1994 | irrelevant | 0 | 0 | The paper is an immunology study on Listeria infection in rats and does not involve the drug 112_trichloroethane or any pharmacokinetic parameters. |
| PD | Tomida_1994 | not_relevant | 0 | 0 | The paper investigates the immunological role of ICAM-1 and LFA-1 in Listeria infection using monoclonal antibodies, and does not report any pharmacodynamic or exposure-response data for trichloroethane. |
| popPK | Tomlinson_1980 | irrelevant | 0 | 0 | The paper studies the partitioning and hydrolysis kinetics of amoxicillin and ampicillin, not 112_trichloroethane. |
| PGx | Trembath_1999 | not_relevant | 0 | 0 | The paper investigates genetic associations with neural tube defects and does not involve the drug 112_trichloroethane or its pharmacokinetics/pharmacodynamics. |
| popPK | Tyson_1983 | irrelevant | 0 | 0 | The study focuses on hepatotoxicity ranking (EC50/ED50) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for 1,1,2-trichloroethane. |
| popPK | Vainio_1990 | irrelevant | 0 | 0 | The paper is an immunology study on T cell receptors in chickens and contains no pharmacokinetic data for trichloroethane. |
| popPK | Vinter-Jensen_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 131I-labelled epidermal growth factor in pigs, not 112_trichloroethane. |
| popPK | Vroom_1991 | irrelevant | 0 | 0 | The paper is an immunology study on T-cell distribution and contains no pharmacokinetic data for trichloroethane. |
| popPK | White_1985 | irrelevant | 0 | 0 | The paper is a toxicology study reporting LD50 and dose levels, not a pharmacokinetic study with quantitative disposition parameters for 1,1,2-trichloroethane. |
| PD | White_1985 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent toxicity and LD50 values but does not provide a quantitative exposure-response model or specific numeric PD parameters (e.g., EC50, Emax) for the observed effects. |
| popPK | Yang_1997 | irrelevant | 0 | 0 | The paper is an immunology study on porcine CD8 lymphocyte subsets and contains no pharmacokinetic data for trichloroethane. |
| popPK | Yoshii_1987 | irrelevant | 0 | 0 | The paper studies acetylcholine receptor properties in Xenopus oocytes and does not involve the drug 112_trichloroethane or pharmacokinetic parameters. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper describes protein engineering of an enzyme (xylanase) and is unrelated to the pharmacogenomics of trichloroethane. |
| popPK | von_1999 | irrelevant | 0 | 0 | The paper investigates T-cell receptor interactions with sulfonamide derivatives and does not involve 112_trichloroethane or pharmacokinetic parameters. |
| PD | von_1999 | not_relevant | 0 | 0 | The paper investigates T-cell clone reactivity to sulfonamide derivatives (e.g., sulfamethoxazole) and does not contain any data or analysis for trichloroethane. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/toxins/toxin_112_trichloroethane`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
