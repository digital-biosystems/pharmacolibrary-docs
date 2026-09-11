# dicycloverine

- **generic name:** dicycloverine
- **ATC codes:** `A03AA07`
- **DrugBank:** [DB00804](https://go.drugbank.com/drugs/DB00804)
- **groups:** approved

## About

**Description.** Dicyclomine is a muscarinic M1, M3, and M2 receptor antagonist as well as a non-competitive inhibitor of histamine and bradykinin used to treat spasms of the intestines seen in functional bowel disorder and irritable bowel syndrome.[A6556,A182555,A234659,L7967] Though it is commonly prescribed, its recommendation may have been based on a small amount of evidence and so its prescription is becoming less favourable.[L7982]

Dicyclomine was granted FDA approval on 11 May 1950.[L7967]

**Indication.** Dicyclomine is indicated for the treatment of functional bowel disorder and irritable bowel syndrome.[L7967]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 22:28 | 5:31 | 0/0/0 | 2/0/0 | 0/0/0 | 67,292/2,920 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Althurwi_2025](drugs/drug_dicycloverine/pd_Althurwi_2025_intestinal_smooth_muscle_contraction.md) | Althurwi HN et al., Pharmacological basis for medicinal use…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1533511](https://doi.org/10.3389/fphar.2025.1533511) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Janbaz_2013](drugs/drug_dicycloverine/pd_Janbaz_2013_isolated_rabbit_aorta_contraction.md) | Janbaz KH et al., Pharmacological Effects of Lactuca serr…, Evidence-based complementar… (2013) | [10.1155/2013/304394](https://doi.org/10.1155/2013/304394) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Janbaz_2013](drugs/drug_dicycloverine/pd_Janbaz_2013_isolated_rabbit_jejunum_contraction.md) | Janbaz KH et al., Pharmacological Effects of Lactuca serr…, Evidence-based complementar… (2013) | [10.1155/2013/304394](https://doi.org/10.1155/2013/304394) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Janbaz_2013](drugs/drug_dicycloverine/pd_Janbaz_2013_isolated_rabbit_trachea_contraction.md) | Janbaz KH et al., Pharmacological Effects of Lactuca serr…, Evidence-based complementar… (2013) | [10.1155/2013/304394](https://doi.org/10.1155/2013/304394) |

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |
| `Eglen_1993.pdf` | Eglen RM et al., Muscarinic M3 receptors mediate total i…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0922-4106(93)90058-h](https://doi.org/10.1016/0922-4106(93)90058-h) | [8420791](https://www.ncbi.nlm.nih.gov/pubmed/8420791) | metadata signals extractable PD data (EC50) |
| `Gillard_1987.pdf` | Gillard M et al., Muscarinic receptor heterogeneity in ra…, Molecular pharmacology (1987) | pd | 4 | not captured | [3600611](https://www.ncbi.nlm.nih.gov/pubmed/3600611) | metadata signals extractable PD data (IC50) |
| `Hudkins_1991.pdf` | Hudkins RL et al., M1 muscarinic antagonists interact with…, Life sciences (1991) | pd | 4 | [10.1016/0024-3205(91)90135-x](https://doi.org/10.1016/0024-3205(91)90135-x) | [1658507](https://www.ncbi.nlm.nih.gov/pubmed/1658507) | metadata signals extractable PD data (IC50) |
| `Qi_2005.pdf` | Qi L et al., Quantitative determination of pharmaceu…, Journal of pharmaceutical a… (2005) | pd | 4 | [10.1016/j.jpba.2004.09.023](https://doi.org/10.1016/j.jpba.2004.09.023) | [15708661](https://www.ncbi.nlm.nih.gov/pubmed/15708661) | metadata signals extractable PD data (concentrationeffect) |
| `Raiteri_1990.pdf` | Raiteri M et al., Muscarinic receptors mediating inhibiti…, The Journal of pharmacology… (1990) | pd | 4 | not captured | [2384883](https://www.ncbi.nlm.nih.gov/pubmed/2384883) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T22:27:19.047949+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberts_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on muscarinic receptors in guinea pig bladder and does not report pharmacokinetic parameters for dicycloverine. |
| PD | Alberts_1995 | not_relevant | 0 | 0 | The paper investigates muscarinic receptor subtypes in guinea pig bladder tissue and does not mention dicycloverine or report any pharmacodynamic exposure-response data. |
| popPK | Ali_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of Rosa webbiana, using dicycloverine (dicyclomine) only as a comparator agent in in-vitro experiments without reporting any pharmacokinetic parameters. |
| PD | Ali_2023 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Rosa webbiana extract, not dicycloverine; dicycloverine is only mentioned as a comparative reference for the type of curve shift observed. |
| popPK | Althurwi_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of Cymbopogon proximus essential oil where dicycloverine (dicyclomine) is used only as a positive control, and no pharmacokinetic parameters are reported. |
| popPK | Brunner_1991 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization using dicycloverine (dicyclomine) as a probe antagonist, not a pharmacokinetic study reporting disposition parameters. |
| PD | Brunner_1991 | not_relevant | 0 | 0 | The paper characterizes muscarinic receptor subtypes in bovine coronary arteries using acetylcholine and antagonists; it does not report a pharmacodynamic or exposure-response relationship for the drug dicycloverine. |
| popPK | Eglen_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on muscarinic receptors in fibrosarcoma cells and does not report pharmacokinetic parameters for dicycloverine. |
| PD | Eglen_1993 | not_relevant | 0 | 0 | The paper investigates muscarinic M3 receptor signaling in fibrosarcoma cells and does not mention dicycloverine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Gillard_1987 | irrelevant | 0 | 0 | The paper is a mechanistic study on muscarinic receptor heterogeneity in rat CNS and does not report pharmacokinetic parameters for dicycloverine. |
| PD | Gillard_1987 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor binding characteristics in rat brain tissue and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Gower_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of yawning and analgesia in rats where dicyclomine is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Gower_1987 | not_relevant | 2 | 1 | The paper reports qualitative dose-response observations and antagonist inhibition for dicycloverine (dicyclomine) but does not provide numeric PD parameters (e.g., ED50, potency values) or a quantitative concentration-effect curve for this specific drug. |
| popPK | Hudkins_1991 | irrelevant | 0 | 0 | The provided evidence is only a title regarding muscarinic antagonists and sigma sites, containing no pharmacokinetic data or mention of dicycloverine. |
| PD | Hudkins_1991 | not_relevant | 0 | 0 | The paper discusses the interaction of M1 muscarinic antagonists with sigma sites and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Hussain_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of Berberis lycium, using dicycloverine (dicyclomine) only as a comparator agent, and reports no pharmacokinetic parameters for dicycloverine. |
| PD | Hussain_2023 | not_relevant | 0 | 0 | The paper studies the plant Berberis lycium and only uses dicycloverine (dicyclomine) as a qualitative reference standard for comparison; it does not report any pharmacodynamic or exposure-response data for dicycloverine itself. |
| PGx | Hussain_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Berberis lycium and compares them to dicyclomine, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of dicyclomine. |
| popPK | Janbaz_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a plant extract using dicycloverine (referred to as dicyclomine) only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Kay_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of darifenacin and dicyclomine (dicycloverine) focusing on cognitive and physiological effects, with no pharmacokinetic parameters reported. |
| PD | Kay_2005 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (cognitive, cardiac, visual) and statistical significance compared to placebo, but does not provide numeric PD parameters (Emax, EC50) or an exposure-response/dose-response curve analysis. |
| popPK | McKinney_1985 | irrelevant | 0 | 0 | The paper is an epidemiological case-control study investigating the association between antiemetic use and childhood cancer, not a pharmacokinetic study, and contains no PK parameters for dicycloverine. |
| PD | McKinney_1985 | not_relevant | 0 | 0 | The paper is an epidemiological study investigating the association between drug consumption and childhood cancer risk, not a pharmacodynamic or exposure-response analysis. |
| popPK | Qi_2005 | irrelevant | 0 | 0 | The paper describes an analytical method (nano-electrospray ionization mass spectrometry) and does not report pharmacokinetic parameters for dicycloverine. |
| PD | Qi_2005 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for quantifying pharmaceuticals and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Raiteri_1990 | irrelevant | 0 | 0 | The paper is a mechanistic study on muscarinic receptors and GABA release in rat striatum, not a pharmacokinetic study of dicycloverine. |
| PD | Raiteri_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacological characterization of muscarinic receptors in rat striatum and does not mention dicycloverine or report any exposure-response or dose-response data for it. |
| popPK | Sharif_1995 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and functional study where dicycloverine (dicyclomine) is used only as a pharmacological probe, not a subject of pharmacokinetic analysis. |
| PD | Sharif_1995 | not_relevant | 0 | 0 | The paper studies M3 muscarinic receptors in cell lines using agonists (carbachol, muscarine) and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Talebi_2018 | irrelevant | 0 | 0 | The study investigates the in-vitro enzymatic inhibition of lipase by dicyclomine (dicycloverine) and does not report any pharmacokinetic parameters. |
| popPK | Vilar_2013 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction prediction using fingerprints and does not report any quantitative pharmacokinetic parameters for dicycloverine. |
| PD | Vilar_2013 | not_relevant | 0 | 0 | The paper describes a computational method for predicting drug-drug interactions using fingerprint similarity and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dicycloverine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a plant extract (PEFM) using dicyclomine (a related antispasmodic) only as a positive control, and reports no pharmacokinetic parameters for dicycloverine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dicycloverine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
