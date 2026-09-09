# mitapivat

- **generic name:** mitapivat
- **ATC codes:** `B06AX04`
- **DrugBank:** [DB16236](https://go.drugbank.com/drugs/DB16236)
- **groups:** approved, investigational

## About

**Description.** Mitapivat is a novel, first-in-class pyruvate kinase activator. It works to increase the activity of erythrocyte pyruvate kinase, a key enzyme involved in the survival of red blood cells. Defects in the pyruvate kinase enzyme in various red blood cells disorders lead to the lack of energy production for red blood cells, leading to lifelong premature destruction of red blood cells or chronic hemolytic anemia.[A245478]

On February 17, 2022, the FDA approved mitapivat as the first disease-modifying treatment for hemolytic anemia in adults with pyruvate kinase (PK) deficiency, a rare, inherited disorder leading to lifelong hemolytic anemia.[L40533] Mitapivat has also been investigated in other hereditary red blood cell disorders associated with hemolytic anemia, such as sickle cell disease and alpha- and beta-thalassemia.[A245478] On January 5, 2026, the FDA also approved the use of in the treatment of anemia in adults with alpha- or beta-thalassemia, making it the first oral treatment for this condition.[L54953]

**Indication.** Mitapivat is indicated for the treatment of hemolytic anemia in adults with pyruvate kinase (PK) deficiency.[L40528] It is also used to treat anemia in adults with alpha- or beta-thalassemia.[L54968]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 05:06 | 17:24 | 0/0/0 | 3/0/0 | 0/0/1 | 265,593/9,230 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 2/21 | 23/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Flores_2025](drugs/drug_mitapivat/pd_Flores_2025_ATF4.md) | Flores BN et al., Investigational eIF2B activator DNL343…, Nature communications (2025) | [10.1038/s41467-025-63031-y](https://doi.org/10.1038/s41467-025-63031-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Flores_2025](drugs/drug_mitapivat/pd_Flores_2025_CHAC1.md) | Flores BN et al., Investigational eIF2B activator DNL343…, Nature communications (2025) | [10.1038/s41467-025-63031-y](https://doi.org/10.1038/s41467-025-63031-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huang_2026](drugs/drug_mitapivat/pd_Huang_2026_ATP_content.md) | Huang Q et al., SNH-119014, a novel pyruvate kinase act…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1719328](https://doi.org/10.3389/fphar.2026.1719328) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huang_2026](drugs/drug_mitapivat/pd_Huang_2026_GSH_GSSG_ratio.md) | Huang Q et al., SNH-119014, a novel pyruvate kinase act…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1719328](https://doi.org/10.3389/fphar.2026.1719328) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huang_2026](drugs/drug_mitapivat/pd_Huang_2026_PK_activity.md) | Huang Q et al., SNH-119014, a novel pyruvate kinase act…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1719328](https://doi.org/10.3389/fphar.2026.1719328) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huang_2026](drugs/drug_mitapivat/pd_Huang_2026_ROS_levels.md) | Huang Q et al., SNH-119014, a novel pyruvate kinase act…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1719328](https://doi.org/10.3389/fphar.2026.1719328) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nilsson_2025](drugs/drug_mitapivat/pd_Nilsson_2025_BRET_ratio.md) | Nilsson O et al., Potent Fluorescent Probe for Target-Eng…, Angewandte Chemie (Internat… (2025) | [10.1002/anie.202513969](https://doi.org/10.1002/anie.202513969) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nilsson_2025](drugs/drug_mitapivat/pd_Nilsson_2025_PKL_activity.md) | Nilsson O et al., Potent Fluorescent Probe for Target-Eng…, Angewandte Chemie (Internat… (2025) | [10.1002/anie.202513969](https://doi.org/10.1002/anie.202513969) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PKLR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Rab_2021](drugs/drug_mitapivat/pgx_Rab_2021_PKLR_Q100.md) | Rab MAE et al., AG-348 (Mitapivat), an allosteric activ…, Haematologica (2021) | [10.3324/haematol.2019.238865](https://doi.org/10.3324/haematol.2019.238865) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 46 matched, 39 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angel-Isaza_2026 | irrelevant | 0 | 0 | The paper is a study on essential oils and viral immunity in chickens and does not involve the drug mitapivat or pharmacokinetic parameters. |
| PD | Angel-Isaza_2026 | not_relevant | 0 | 0 | The paper studies the effects of essential oils on gene expression and viral load in chickens, not the pharmacodynamics of mitapivat. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper is a commentary on the pharmacokinetics of colistin sulfate, not mitapivat. |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper is a commentary on colistin sulfate PK/PD and does not contain any data, analysis, or parameters for mitapivat. |
| popPK | Darko_2021 | irrelevant | 0 | 0 | The paper is a computational study on Ebola virus protein VP35 inhibitors and does not involve the drug mitapivat or report any pharmacokinetic parameters for it. |
| PD | Darko_2021 | not_relevant | 0 | 0 | The paper is a computational study on novel anti-Ebola compounds and does not involve mitapivat or report any pharmacodynamic or exposure-response data. |
| PD | De_2024 | not_relevant | 2 | 1 | The text is a short perspective/review summarizing general properties and lacks specific numeric PD parameters or detailed exposure-response data. |
| popPK | Flores_2025 | irrelevant | 0 | 0 | The paper studies the drug DNL343 (an eIF2B activator) and does not mention mitapivat. |
| popPK | Gervasi_2024 | irrelevant | 0 | 0 | The paper is a review on oleuropein and hydroxytyrosol for cancer treatment and does not study mitapivat or report its pharmacokinetic parameters. |
| PD | Gervasi_2024 | not_relevant | 0 | 0 | The paper is a review on oleuropein and hydroxytyrosol for cancer prevention and does not mention mitapivat or report any pharmacodynamic parameters for it. |
| popPK | Gomeni_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of indomethacin, not mitapivat. |
| PD | Gomeni_2020 | not_relevant | 0 | 0 | The paper focuses on indomethacin, not mitapivat. |
| popPK | Gomeni_2020_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of indomethacin, not mitapivat. |
| PD | Gomeni_2020_2 | not_relevant | 0 | 0 | The paper focuses on indomethacin, not mitapivat. |
| popPK | Hayat_2024 | irrelevant | 0 | 0 | The paper is an in-silico study on Ebola virus protein inhibitors and does not involve the drug mitapivat or report any pharmacokinetic parameters. |
| PD | Hayat_2024 | not_relevant | 0 | 0 | The paper is an in silico study on Ebola virus inhibitors and does not involve mitapivat or report any pharmacodynamic or exposure-response data. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and mechanism of action of a novel compound (SNH-119014) with mitapivat as a comparator, reporting no pharmacokinetic parameters for mitapivat. |
| PGx | Idowu_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes in a general sickle cell disease population without analyzing specific gene variants or genotypes to determine pharmacokinetic or pharmacodynamic effects. |
| popPK | Iyer_2024 | relevant | 4 | 2 | The paper reports non-compartmental PK parameters (Cmax, AUC, tmax) for mitapivat but lacks the specific compartmental/population PK parameters (CL, V, Q, ka) required for the target extraction, and the numeric values are primarily located in Tables 2 and 3 which are not included in the evidence. |
| popPK | Lee_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for a cholesterol-conjugated aptamer against HCV NS5B, not for the drug mitapivat. |
| PD | Lee_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of a cholesterol-conjugated aptamer against HCV NS5B and does not report any pharmacodynamic or exposure-response relationship for mitapivat. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of PKM2 agonists for aortic dissection, using mitapivat only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new PKM2 agonist (D16) and only qualitatively compares its efficacy to mitapivat in a mouse model without providing any exposure-response or dose-response data for mitapivat. |
| popPK | Lickliter_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of trastuzumab (a biosimilar), not mitapivat. |
| PD | Lickliter_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic (PK) bioequivalence study for a trastuzumab biosimilar and does not contain any pharmacodynamic (PD) or exposure-response analysis for mitapivat or any other drug. |
| popPK | Matte_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study of mitapivat's effects on erythropoiesis and iron metabolism in a mouse model, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Mc_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for TLD-1 (a liposomal doxorubicin formulation), not for mitapivat. |
| PD | Mc_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of TLD-1 (liposomal doxorubicin) but does not contain any pharmacodynamic (PD) or exposure-response analysis, nor does it mention mitapivat. |
| PD | Musallam_2026 | not_relevant | 2 | 0 | The text is a narrative review summarizing clinical outcomes and biological rationale without providing specific numeric PD parameters, exposure-response curves, or detailed PK/PD modeling data. |
| popPK | Nilsson_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on a fluorescent probe for pyruvate kinase, and mitapivat is used only as a reference compound for binding affinity (KD), not as the subject of a pharmacokinetic study. |
| popPK | Pham_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifapentine, not mitapivat. |
| PD | Pham_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rifapentine, not mitapivat, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Saavedra-García_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on multiple myeloma cells and proteasome inhibition, and does not report pharmacokinetic parameters for mitapivat. |
| PD | Saavedra-García_2021 | not_relevant | 0 | 0 | The paper studies the effects of proteasome inhibitors (carfilzomib, bortezomib) and GCN2 inhibitors on myeloma cells, not mitapivat, and does not report any pharmacodynamic parameters for mitapivat. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | The paper is a review of hyaluronic acid, glucosamine, and chondroitin sulfate in osteoarthritis and does not mention mitapivat or report its pharmacokinetic parameters. |
| PD | Silva_2025 | not_relevant | 0 | 0 | The paper is a review of osteoarthritis treatments (glucosamine, chondroitin sulfate, hyaluronic acid) and does not mention mitapivat or report any pharmacodynamic parameters. |
| popPK | Soeung_2025 | irrelevant | 0 | 0 | The paper focuses on renal medullary carcinoma and immune checkpoint therapy, and the PK parameters mentioned are for a different compound (IACS-16898), not mitapivat. |
| PD | Soeung_2025 | not_relevant | 0 | 0 | The paper investigates nivolumab and ipilimumab in renal medullary carcinoma and does not contain any data, analysis, or mention of mitapivat. |
| popPK | Su_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for tigecycline, not mitapivat. |
| PD | Su_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PPK) of tigecycline, not mitapivat, and does not report any pharmacodynamic (PD) or exposure-response models with numeric PD parameters. |
| PGx | Taher_2025 | not_relevant | 0 | 0 | The paper reports the clinical efficacy and safety of mitapivat in a phase 3 trial but does not analyze how specific gene variants or genotypes affect the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not involve mitapivat or report any pharmacokinetic parameters. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for PONV and does not mention mitapivat or report any pharmacodynamic or exposure-response parameters. |
| popPK | Wills_2023 | irrelevant | 2 | 1 | The paper is a narrative review that mentions basic PK properties (half-life, bioavailability) but lacks the quantitative compartmental or population-PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Wills_2023 | not_relevant | 1 | 0 | The text is a narrative review that describes the mechanism of action and clinical trial outcomes but does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vancomycin, not mitapivat. |
| PD | Yu_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationship for mitapivat or any other drug. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a review on neurodevelopment and endoplasmic reticulum stress, with no mention of mitapivat or pharmacokinetic parameters. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a review on environmental adversity, ER stress, and neurogenesis, and does not mention mitapivat or report any pharmacodynamic or exposure-response data. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of polymyxin B, not mitapivat. |
| PD | Zhao_2023 | not_relevant | 0 | 0 | The paper discusses polymyxin B pharmacokinetics and therapeutic drug monitoring, not mitapivat, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | The paper is a collection of abstracts from a schizophrenia research congress and contains no pharmacokinetic data for mitapivat. |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is a header for a conference abstract collection and does not contain any specific data, analysis, or mention of mitapivat or pharmacodynamic parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or text regarding mitapivat. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of mitapivat pharmacodynamics. |
| PGx | van_2025 | not_relevant | 0 | 0 | The paper is a scoping review of metabolomics in sickle cell disease and does not report pharmacogenomic effects on the PK or PD of mitapivat. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mitapivat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
