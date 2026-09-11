# itopride

- **generic name:** itopride
- **ATC codes:** `A03FA07`
- **DrugBank:** [DB04924](https://go.drugbank.com/drugs/DB04924)
- **groups:** investigational

## About

**Description.** Itopride is a dopamine D2 antagonist with acetylcholinesterase inhibitory actions.

**Indication.** Investigated for use/treatment in gastrointestinal diseases and disorders (miscellaneous).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:16 | 13:04 | 0/0/0 | 0/1/0 | 0/0/0 | 80,017/22,324 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/8 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lim_2008](drugs/drug_itopride/pd_Lim_2008_colonic_transit_time.md) | Lim HC et al., Effect of itopride hydrochloride on the…, Yonsei medical journal (2008) | [10.3349/ymj.2008.49.3.472](https://doi.org/10.3349/ymj.2008.49.3.472) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lim_2008](drugs/drug_itopride/pd_Lim_2008_propagation_velocity_of_peristaltic_contraction.md) | Lim HC et al., Effect of itopride hydrochloride on the…, Yonsei medical journal (2008) | [10.3349/ymj.2008.49.3.472](https://doi.org/10.3349/ymj.2008.49.3.472) |

## Coverage

- **PubMed hits:** 27 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nasiri_2019.pdf` | Nasiri MI et al., Comparative pharmacokinetic evaluation…, Drug development and indust… (2019) | popPK | 8 | [10.1080/03639045.2018.1546312](https://doi.org/10.1080/03639045.2018.1546312) | [30457018](https://pubmed.ncbi.nlm.nih.gov/30457018) | The study reports PK parameters for itopride, but the evidence only provides relative bioavailability ratios and qualitative statements about Cmax/AUC, lacking specific numeric values for clearance, volume, or half-life. |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-11T02:09:59.036670+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmed_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, bioavailability) and dissolution profiles, but contains no pharmacodynamic or exposure-response analysis. |
| popPK | Alaithan_2022 | relevant | 8 | 4 | The study reports non-compartmental PK parameters (AUC, tmax, relative bioavailability) for itopride in rabbits, but lacks compartmental parameters like clearance (CL) or volume (V) and relies on non-compartmental analysis. |
| PD | Alaithan_2022 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (AUC, half-life) of a gastro-retentive film, but does not report any pharmacodynamic or exposure-response relationship for itopride. |
| popPK | Butt_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of prokinetic effects on isolated rabbit duodenum and does not report any pharmacokinetic parameters for itopride. |
| popPK | Deolekar_2023 | irrelevant | 0 | 0 | The paper is a pharmacoeconomic analysis of drug prices and does not report any pharmacokinetic parameters for itopride. |
| PD | Deolekar_2023 | not_relevant | 0 | 0 | The paper is a pharmacoeconomic analysis of drug prices and contains no pharmacodynamic or exposure-response data. |
| popPK | Iwanaga_1994 | irrelevant | 0 | 0 | The paper describes in-vitro enzymatic inhibition (IC50) of acetylcholinesterase by itopride, not pharmacokinetic disposition parameters. |
| popPK | Kawachi_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of acotiamide with itopride serving only as a comparator, and no quantitative pharmacokinetic parameters for itopride are reported. |
| PD | Kawachi_2011 | not_relevant | 3 | 2 | The paper focuses on acotiamide; itopride is used only as a qualitative comparator in in vivo studies without reporting specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves for itopride. |
| popPK | Lim_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of gastrointestinal motility in guinea pigs and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for itopride. |
| popPK | Mohamed_2015 | irrelevant | 0 | 0 | The paper describes spectrophotometric analytical methods for drug quantification, not pharmacokinetic studies or disposition parameters. |
| PD | Mohamed_2015 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates enzyme involvement (FMO vs CYP3A4) and drug-drug interactions, but does not report any pharmacogenomic effects of specific gene variants on itopride PK/PD. |
| popPK | Naheed_2026 | irrelevant | 0 | 0 | The study is a pharmaceutical analysis using Raman spectroscopy and does not report any pharmacokinetic parameters for itopride. |
| PD | Naheed_2026 | not_relevant | 0 | 0 | The paper describes a Raman spectroscopy method for quantifying itopride in solid dosage forms and contains no pharmacodynamic, exposure-response, or dose-effect data. |
| popPK | Nasiri_2019 | relevant | 8 | 2 | The study reports PK parameters for itopride, but the evidence only provides relative bioavailability ratios and qualitative statements about Cmax/AUC, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Perumal_2014 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacokinetic data or disposition parameters for itopride. |
| PD | Perumal_2014 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Pillai_2008 | irrelevant | 0 | 0 | The paper describes analytical methods (UV/HPLC) for quantifying drug content in formulations, not pharmacokinetic disposition parameters. |
| PD | Pillai_2008 | not_relevant | 0 | 0 | The paper describes analytical methods (UV and HPLC) for quantifying drug concentrations in formulations, not pharmacodynamic or exposure-response relationships. |
| PGx | Reddy_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling to predict PK parameters for FMO substrates (including itopride) but does not report specific pharmacogenomic effects (gene variant/genotype) on these parameters. |
| PD | Safhi_2023 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, Cmax, t1/2) and in vitro release kinetics, with no analysis of drug effect or exposure-response relationship. |
| popPK | Suganthi_2008 | irrelevant | 0 | 0 | The paper describes an HPTLC analytical method for quantifying itopride in tablets, not a pharmacokinetic study. |
| PD | Suganthi_2008 | not_relevant | 0 | 0 | The paper describes a pharmaceutical analysis method (HPTLC) for quantifying drug content in tablets, not a pharmacodynamic or exposure-response study. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_itopride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
