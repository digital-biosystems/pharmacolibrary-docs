# ximelagatran

- **generic name:** ximelagatran
- **ATC codes:** `B01AE05`
- **DrugBank:** [DB04898](https://go.drugbank.com/drugs/DB04898)
- **groups:** approved, withdrawn

## About

**Description.** Ximelagatran is an anticoagulant intended to become a replacement for warfarin by overcoming the dietary restrictions, drug interaction, and monitoring issues associated with the former. In 2006, its manufacturer AstraZeneca announced that it would not attempt to market ximelagatran after reports of hepatotoxicity (liver damage) during trials, and to discontinue its distribution in countries where the drug had been approved.

**Indication.** For the treatment of acute deep vein thrombosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 02:24 | 5:03 | 0/2/0 | 0/0/0 | 0/0/0 | 27,467/1,853 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Cullberg_2005](drugs/drug_ximelagatran/Ximelagatran_Cullberg2005_reference.md) | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Eriksson_2003](drugs/drug_ximelagatran/Ximelagatran_Eriksson2003_reference.md) | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) |

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bååthe_2006.pdf` | Bååthe S et al., Population pharmacokinetics of melagatr…, Clinical pharmacokinetics (2006) | popPK | 10 | [10.2165/00003088-200645080-00004](https://doi.org/10.2165/00003088-200645080-00004) | [16884319](https://pubmed.ncbi.nlm.nih.gov/16884319) | The paper reports a population PK model for melagatran (active metabolite of ximelagatran) with qualitative descriptors (one-compartment, CV values), but specific numeric parameter estimates (CL, V, ka) are not present in the provided abstract text. |
| `Cullberg_2005.pdf` | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | popPK | 10 | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) | [15903126](https://pubmed.ncbi.nlm.nih.gov/15903126) | The paper reports a population PK analysis for ximelagatran (via its active metabolite melagatran) with explicit numeric values for clearance (27.3 L/h) and volume of distribution (176 L) present in the text. |
| `Eriksson_2003.pdf` | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | popPK | 10 | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) | [12844328](https://pubmed.ncbi.nlm.nih.gov/12844328) | The paper reports quantitative population pharmacokinetic parameters (clearance, volume of distribution, bioavailability) for melagatran, the active metabolite of ximelagatran, derived from oral ximelagatran administration. |
| `Bergqvist_2004.pdf` | Bergqvist D et al., Pharmacokinetics, preliminary efficacy…, Clinical drug investigation (2004) | popPK | 8 | [10.2165/00044011-200424030-00001](https://doi.org/10.2165/00044011-200424030-00001) | [17516699](https://pubmed.ncbi.nlm.nih.gov/17516699) | The study reports PK parameters for ximelagatran (specifically its active metabolite melagatran) including a one-compartment model and bioavailability, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| `Ufer_2005.pdf` | Ufer M, Comparative pharmacokinetics of vitamin…, Clinical pharmacokinetics (2005) | pgx | 8 | [10.2165/00003088-200544120-00003](https://doi.org/10.2165/00003088-200544120-00003) | [16372822](https://www.ncbi.nlm.nih.gov/pubmed/16372822) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Bredberg_2003.pdf` | Bredberg E et al., Ximelagatran, an oral direct thrombin i…, Clinical pharmacokinetics (2003) | pgx | 7 | [10.2165/00003088-200342080-00005](https://doi.org/10.2165/00003088-200342080-00005) | [12846597](https://www.ncbi.nlm.nih.gov/pubmed/12846597) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-06T07:26:17.295957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergqvist_2004 | relevant | 8 | 2 | The study reports PK parameters for ximelagatran (specifically its active metabolite melagatran) including a one-compartment model and bioavailability, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| PGx | Bredberg_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving CYP enzymes, not pharmacogenomic effects of gene variants on ximelagatran PK/PD. |
| PD | Busti_2004 | not_relevant | 1 | 0 | The text is a qualitative review of ximelagatran's clinical status and does not report any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Bååthe_2006 | relevant | 10 | 2 | The paper reports a population PK model for melagatran (active metabolite of ximelagatran) with qualitative descriptors (one-compartment, CV values), but specific numeric parameter estimates (CL, V, ka) are not present in the provided abstract text. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper describes in vitro biotransformation mechanisms and enzyme identification but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Daly_2010 | not_relevant | 0 | 0 | The paper discusses genetic associations with drug-induced liver injury (DILI) susceptibility, not pharmacokinetic or pharmacodynamic parameters. |
| PD | Dobesh_2004 | not_relevant | 1 | 0 | The text is a qualitative introduction/review of ximelagatran's advantages over warfarin and does not contain any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Fontana_2014 | not_relevant | 2 | 0 | The paper mentions an association between HLA polymorphisms and ximelagatran-induced liver injury (a safety/PD outcome) but does not report specific pharmacokinetic or pharmacodynamic parameter changes or quantitative effect sizes. |
| PGx | Fröhlich_2005 | not_relevant | 0 | 0 | The paper investigates the metabolism of a model substrate (benzamidoxime) and UGT enzyme activity, but does not report pharmacogenomic effects on the PK or PD parameters of ximelagatran itself. |
| PD | Gulseth_2005 | not_relevant | 1 | 0 | The text is a general review summarizing clinical trial outcomes and basic PK properties (half-life) but does not report specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves. |
| PD | Hamaad_2003 | not_relevant | 0 | 0 | The text is a qualitative summary of the METHRO trials discussing clinical efficacy and safety, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| PD | Helft_2006 | not_relevant | 0 | 0 | The text is a general review of thrombosis research in 2005 and mentions ximelagatran's clinical trials and safety issues, but it contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| PGx | Helft_2006 | not_relevant | 0 | 0 | The text is a general review of 2005 thrombosis research and mentions ximelagatran's clinical trials and hepatotoxicity, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Keisu_2010 | not_relevant | 2 | 5 | The paper reports an association between MHC alleles and liver injury (ALT elevation), which is a safety/toxicity outcome rather than a standard pharmacokinetic or pharmacodynamic parameter of the drug's intended effect. |
| PGx | Kindmark_2008 | not_relevant | 0 | 0 | The paper reports a pharmacogenetic association with an adverse event (elevated ALAT), not a change in a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The text is a general pharmacological rationale for ximelagatran and does not report any gene variants or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Russmann_2010 | not_relevant | 0 | 0 | The paper discusses HLA variants as risk factors for drug-induced liver injury (a safety/toxicity outcome) rather than changes in standard pharmacokinetic or pharmacodynamic parameters. |
| PD | Tribout_2007 | not_relevant | 1 | 0 | The paper is a qualitative review comparing clinical trial outcomes (efficacy/safety) based on administration timing, without reporting any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for ximelagatran. |
| PGx | Ufer_2005 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of vitamin K antagonists (warfarin, phenprocoumon, acenocoumarol) and only mentions ximelagatran as a context for novel oral anticoagulants without reporting any specific PK/PD data or genetic effects for it. |
| PD | Yoshida_2006 | not_relevant | 2 | 0 | The paper is a systematic review comparing clinical outcomes (VTE rates) between fixed doses of ximelagatran and warfarin; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ximelagatran`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
