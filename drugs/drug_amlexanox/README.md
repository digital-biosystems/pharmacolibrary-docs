# amlexanox

- **generic name:** amlexanox
- **ATC codes:** `A01AD07`, `R03DX01`
- **DrugBank:** [DB01025](https://go.drugbank.com/drugs/DB01025)
- **groups:** approved, withdrawn

## About

**Description.** Amlexanox is an antiallergic drug, clinically effective for atopic diseases, especially allergic asthma and rhinitis. Amlexanox as a topical paste is a well tolerated treatment of recurrent aphthous ulcers. Recurrent aphthous ulcer (RAU) is the most prevalent oral mucosal disease in humans, estimated to affect between 5% and 50% of the general population.

**Indication.** Used as a paste in the mouth to treat aphthous ulcers (canker sores).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 04:26 | 5:28 | 0/0/0 | 1/0/0 | 0/0/0 | 48,848/1,863 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 4/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ishikawa_2021](drugs/drug_amlexanox/pd_Ishikawa_2021_COX_2.md) | Ishikawa S et al., T-Cell Activation-Inhibitory Assay to S…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b20-00889](https://doi.org/10.1248/bpb.b20-00889) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ishikawa_2021](drugs/drug_amlexanox/pd_Ishikawa_2021_IL_6.md) | Ishikawa S et al., T-Cell Activation-Inhibitory Assay to S…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b20-00889](https://doi.org/10.1248/bpb.b20-00889) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ishikawa_2021](drugs/drug_amlexanox/pd_Ishikawa_2021_TNF_alpha.md) | Ishikawa S et al., T-Cell Activation-Inhibitory Assay to S…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b20-00889](https://doi.org/10.1248/bpb.b20-00889) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ishikawa_2021](drugs/drug_amlexanox/pd_Ishikawa_2021_T_cell_activation.md) | Ishikawa S et al., T-Cell Activation-Inhibitory Assay to S…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b20-00889](https://doi.org/10.1248/bpb.b20-00889) |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2022.pdf` | Chen D et al., Development and validation of LC-MS/MS…, Biomedical chromatography :… (2022) | popPK | 9 | [10.1002/bmc.5288](https://doi.org/10.1002/bmc.5288) | [34842293](https://pubmed.ncbi.nlm.nih.gov/34842293) | The paper describes a preclinical pharmacokinetic study of amlexanox in rats, but the provided evidence contains only method validation details and lacks the actual numeric PK parameter values (e.g., CL, V, t1/2). |
| `Khandwala_1997.pdf` | Khandwala A et al., 5% amlexanox oral paste, a new treatmen…, Oral surgery, oral medicine… (1997) | popPK | 8 | [10.1016/s1079-2104(97)90010-x](https://doi.org/10.1016/s1079-2104(97)90010-x) | [9117755](https://pubmed.ncbi.nlm.nih.gov/9117755) | The paper reports quantitative PK parameters (Cmax, Tmax, t1/2) for amlexanox, though it lacks a full compartmental model or clearance/volume values. |
| `Makino_1987.pdf` | Makino H et al., Mechanism of action of an antiallergic…, International archives of a… (1987) | pd | 4 | [10.1159/000234292](https://doi.org/10.1159/000234292) | [2433225](https://www.ncbi.nlm.nih.gov/pubmed/2433225) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-10T04:26:00.129989+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beyett_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on kinase inhibitors where amlexanox serves only as a structural scaffold and comparator, with no pharmacokinetic data reported. |
| PD | Beyett_2018 | not_relevant | 2 | 1 | The paper reports IC50 values for kinase inhibition and qualitative biological effects (IL-6, weight loss) but does not provide an exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for amlexanox in a pharmacodynamic context. |
| popPK | Chen_2022 | relevant | 9 | 0 | The paper describes a preclinical pharmacokinetic study of amlexanox in rats, but the provided evidence contains only method validation details and lacks the actual numeric PK parameter values (e.g., CL, V, t1/2). |
| popPK | Gan_2019 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and in-vitro metabolic stability study, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Gan_2019 | not_relevant | 3 | 2 | The paper reports in vitro potency (IC50) and metabolic stability, which are pharmacological properties but do not constitute a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | Ishikawa_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on anti-inflammatory effects and drug repositioning, reporting no pharmacokinetic parameters for amlexanox. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on biomolecular condensates and small molecule partitioning, not a pharmacokinetic study, and amlexanox is only mentioned as a probe for subcellular localization without any PK parameters. |
| PD | Kilgore_2024 | not_relevant | 0 | 0 | The paper focuses on the physical chemistry of biomolecular condensates and small molecule partitioning, containing no pharmacodynamic or exposure-response data for amlexanox. |
| PGx | Lima_2023 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect of amlexanox on PAX6 protein levels in aniridia models, but does not report a pharmacokinetic or pharmacodynamic parameter of amlexanox itself (e.g., Cmax, AUC, clearance) or how a gene variant alters amlexanox's PK/PD. |
| popPK | Makino_1987 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action (histamine release/cAMP) rather than pharmacokinetic disposition parameters. |
| popPK | Matsunaga_2008 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of protein interactions using amlexanox as an inhibitor, not a pharmacokinetic study reporting disposition parameters for amlexanox. |
| PD | Matsunaga_2008 | not_relevant | 0 | 0 | The paper reports metal ion (Ca2+/Cu2+) concentration-response parameters for protein interaction, not pharmacodynamic parameters for the drug amlexanox. |
| popPK | Omidian_2023 | irrelevant | 0 | 0 | The paper is a review of curcumin delivery systems and does not contain any pharmacokinetic data for amlexanox. |
| PD | Omidian_2023 | not_relevant | 0 | 0 | The paper is a review on curcumin delivery systems and does not contain any pharmacodynamic or exposure-response data for amlexanox. |
| popPK | Rankov_1990 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and histamine concentrations, reporting only qualitative trends in drug concentration without providing quantitative PK parameters like clearance or volume. |
| PD | Rankov_1990 | not_relevant | 2 | 1 | The study reports qualitative differences in histamine levels and drug concentration trends but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect relationship. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper investigates the efficacy of amlexanox as an NMD inhibitor in animal models of Leber congenital amaurosis, not the pharmacokinetics or pharmacodynamics of amlexanox itself. |
| popPK | Watanabe_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of anaphylaxis inhibition where amlexanox serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Watanabe_1998 | not_relevant | 1 | 1 | The paper reports a single-point effect for amlexanox (85.6% inhibition at 10 mg/kg) but does not provide a dose-response curve, concentration-effect relationship, or numeric PD parameters (Emax, EC50) for this drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_amlexanox`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
