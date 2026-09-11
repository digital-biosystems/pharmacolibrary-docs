# mebeverine

- **generic name:** mebeverine
- **ATC codes:** `A03AA04`
- **DrugBank:** [DB12554](https://go.drugbank.com/drugs/DB12554)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Mebeverine has been investigated for the treatment of Irritable Bowel Syndrome and Post-cholecystectomy Gastrointestinal Spasms.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 23:03 | 5:44 | 0/0/0 | 0/0/0 | 0/0/0 | 56,431/2,197 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 37 matched, 22 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hatami_2012.pdf` | Hatami M et al., Fiber-based liquid-phase micro-extracti…, Chirality (2012) | popPK | 9 | [10.1002/chir.22057](https://doi.org/10.1002/chir.22057) | [22700279](https://pubmed.ncbi.nlm.nih.gov/22700279) | The paper reports a pharmacokinetic study of mebeverine in rats with specific parameters (CL, Vd, t1/2), but the evidence text only describes the relative differences between enantiomers without providing the actual numeric values. |
| `Winsemius_2002.pdf` | Winsemius A et al., A pharmacokinetic comparison of the mod…, International journal of cl… (2002) | popPK | 9 | not captured | [12469979](https://pubmed.ncbi.nlm.nih.gov/12469979) | The paper is a direct PK study of mebeverine, but the provided evidence contains only qualitative descriptions (e.g., "lower Cmax", "longer half-life") without specific numeric parameter values. |
| `Dickinson_1991.pdf` | Dickinson RG et al., Facile hydrolysis of mebeverine in vitr…, Journal of pharmaceutical s… (1991) | popPK | 8 | [10.1002/jps.2600801010](https://doi.org/10.1002/jps.2600801010) | [1784004](https://pubmed.ncbi.nlm.nih.gov/1784004) | The study reports a half-life for mebeverine in rats, but lacks other quantitative disposition parameters like clearance or volume of distribution. |

<sub>queue written 2026-09-10T23:02:41.671050+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Raoof_2023 | irrelevant | 0 | 0 | The paper describes a potentiometric sensor for the analytical detection of mebeverine and does not report any pharmacokinetic parameters. |
| PD | Abdel-Raoof_2023 | not_relevant | 0 | 0 | The paper describes a potentiometric analytical method for quantifying mebeverine concentration, not a pharmacodynamic or exposure-response relationship. |
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper discusses mebeverine only as a potential inhibitor of acid sphingomyelinase in the context of SARS-CoV-2 entry via molecular docking, with no pharmacogenomic analysis of its PK/PD parameters. |
| popPK | Chapman_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for irritable bowel syndrome and does not report any pharmacokinetic parameters for mebeverine. |
| PD | Chapman_1990 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and acceptability of two treatment regimens; it reports no pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Dandagi_2009 | irrelevant | 0 | 0 | The study focuses on formulation development and in vitro release/efficacy, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for mebeverine. |
| popPK | El_2017 | relevant | 8 | 4 | The study reports in vivo PK parameters (AUC, Cmax, tmax, Kel) for mebeverine in beagle dogs, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only AUC and bioavailability percentages. |
| PD | El_2017 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (Cmax, tmax, AUC) and in vitro release profiles, but contains no pharmacodynamic data, exposure-response analysis, or dose-effect relationship. |
| popPK | Goudarzi_2025 | irrelevant | 0 | 0 | The study focuses on the fabrication and in-vitro release characterization of 3D-printed tablets, reporting no in-vivo pharmacokinetic parameters (CL, V, ka, etc.) for mebeverine. |
| PD | Goudarzi_2025 | not_relevant | 0 | 0 | The paper focuses on the fabrication and in vitro release characterization of 3D-printed tablets, containing no pharmacodynamic or exposure-response data. |
| popPK | Hatami_2012 | relevant | 9 | 2 | The paper reports a pharmacokinetic study of mebeverine in rats with specific parameters (CL, Vd, t1/2), but the evidence text only describes the relative differences between enantiomers without providing the actual numeric values. |
| popPK | Ho_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of intestinal propulsion and does not report any pharmacokinetic parameters for mebeverine. |
| popPK | Illangakoon_2014 | irrelevant | 0 | 0 | The study focuses on the physicochemical characterization and in vitro dissolution of mebeverine-loaded nanofibers, reporting no in vivo pharmacokinetic parameters. |
| PD | Illangakoon_2014 | not_relevant | 0 | 0 | The paper focuses on the physicochemical characterization and in vitro dissolution of mebeverine nanofibers, containing no pharmacodynamic or exposure-response data. |
| popPK | Langrick_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for dysmenorrhoea and does not report any pharmacokinetic parameters for mebeverine. |
| PD | Langrick_1989 | not_relevant | 0 | 0 | The paper is a clinical efficacy study comparing fixed doses of mebeverine and mefenamic acid against placebo, reporting only statistical differences in pain scores without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Milusheva_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/ex vivo biological activity of mebeverine precursors, not the pharmacokinetics of mebeverine itself, and contains no quantitative PK parameters for the drug. |
| PD | Milusheva_2023 | not_relevant | 2 | 1 | The paper reports single-dose ex vivo bioelectric activity and qualitative immunohistochemical changes for mebeverine precursors, but does not provide a concentration-effect curve, dose-response relationship, or numeric PD parameters (e.g., EC50, Emax) for mebeverine. |
| popPK | Navidpour_2024 | irrelevant | 0 | 0 | The study investigates the photocatalytic degradation kinetics of mebeverine in water, not its pharmacokinetic disposition parameters (CL, V, ka) in biological systems. |
| popPK | Radwan_2006 | irrelevant | 0 | 0 | The paper describes a chiral HPLC analytical method for mebeverine enantiomers and does not report any pharmacokinetic disposition parameters. |
| PD | Radwan_2006 | not_relevant | 0 | 0 | The paper describes a chiral HPLC analytical method for mebeverine enantiomers and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Shrivastava_2022 | irrelevant | 0 | 0 | The paper is a review of analytical methods for otilonium bromide, and mebeverine is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Shrivastava_2022 | not_relevant | 0 | 0 | The paper is a mini-review on analytical methods for otilonium bromide and only qualitatively mentions mebeverine as a comparator without providing any pharmacodynamic data or numeric parameters. |
| popPK | Sommers_1997 | irrelevant | 2 | 0 | The study reports that mebeverine concentrations were undetectable in plasma, so no quantitative PK parameters (CL, V, t1/2) for the parent drug are provided. |
| popPK | Vikman_2024 | irrelevant | 1 | 0 | The study is a method development paper for detecting mebeverine in hair and urine, and it does not report any quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Vikman_2024 | not_relevant | 0 | 0 | The paper describes a forensic analytical method for detecting mebeverine in hair and urine, containing no pharmacodynamic or exposure-response data. |
| popPK | Winsemius_2002 | relevant | 9 | 2 | The paper is a direct PK study of mebeverine, but the provided evidence contains only qualitative descriptions (e.g., "lower Cmax", "longer half-life") without specific numeric parameter values. |
| popPK | al_1997 | irrelevant | 0 | 0 | The study focuses on in vitro adsorption mechanisms and pharmacological effects, not pharmacokinetic disposition parameters. |
| PD | al_1997 | not_relevant | 1 | 0 | The paper focuses on in vitro adsorption isotherms and qualitative confirmation that kaolin does not significantly alter the drug's pharmacological effect, without providing numeric PD parameters or exposure-response curves. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mebeverine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
