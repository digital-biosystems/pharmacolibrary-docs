# salsalate

- **generic name:** salsalate
- **ATC codes:** `N02BA06`
- **DrugBank:** [DB01399](https://go.drugbank.com/drugs/DB01399)
- **groups:** approved, investigational

## About

**Description.** Salsalate is a nonsteroidal anti-inflammatory agent for oral administration. Salsalate's mode of action as an anti-inflammatory and antirheumatic agent may be due to inhibition of synthesis and release of prostaglandins. The usefulness of salicylic acid, the active in vivo product of salsalate, in the treatment of arthritic disorders has been established. In contrast to aspirin, salsalate causes no greater fecal gastrointestinal blood loss than placebo. Salsalate is readily soluble in the small intestine where it is partially hydrolyzed to two molecules of salicylic acid. A significant portion of the parent compound is absorbed unchanged and undergoes rapid esterase hydrolysis in the body. The parent compound has an elimination half-life of about 1 hour. Salicylic acid (the active metabolite) biotransformation is saturated at anti-inflammatory doses of salsalate. Such capacity limited biotransformation results in an increase in the half-life of salicylic acid from 3.5 to 16 or more hours.

**Indication.** For relief of the signs and symptoms of rheumatoid arthritis, osteoarthritis and related rheumatic disorders.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 14:07 | 25:45 | 0/0/0 | 0/1/0 | 0/0/0 | 215,195/2,582 | ollama / qwen3.8:27b-q4_K_M | 9 | 4/4 | 7/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Cao_2011](drugs/drug_salsalate/pd_Cao_2011_blood_glucose.md) | Cao Y et al., Modeling diabetes disease progression a…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185686](https://doi.org/10.1124/jpet.111.185686) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Cao_2011](drugs/drug_salsalate/pd_Cao_2011_body_weight.md) | Cao Y et al., Modeling diabetes disease progression a…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185686](https://doi.org/10.1124/jpet.111.185686) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Cao_2011](drugs/drug_salsalate/pd_Cao_2011_food_intake.md) | Cao Y et al., Modeling diabetes disease progression a…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185686](https://doi.org/10.1124/jpet.111.185686) |

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2012.pdf` | Cao Y et al., Pharmacokinetics of salsalate and salic…, Biopharmaceutics & drug dis… (2012) | popPK | 9 | [10.1002/bdd.1797](https://doi.org/10.1002/bdd.1797) | [22782506](https://pubmed.ncbi.nlm.nih.gov/22782506) | The paper is a relevant animal PK study for salsalate, but the evidence text only contains qualitative descriptions and percentages without specific numeric values for clearance, volume, or half-life. |
| `Williams_1986.pdf` | Williams ME et al., Salsalate kinetics in patients with chr…, Clinical pharmacology and t… (1986) | popPK | 8 | [10.1038/clpt.1986.65](https://doi.org/10.1038/clpt.1986.65) | [3956057](https://pubmed.ncbi.nlm.nih.gov/3956057) | The study reports quantitative pharmacokinetic parameters (peak plasma levels, AUC, and half-life) for salsalate and its metabolite salicylic acid in a specific patient population. |
| `Xu_2022.pdf` | Xu JH et al., Application of Computational Simulation…, Protein and peptide letters (2022) | pd | 4 | [10.2174/0929866529666220805145244](https://doi.org/10.2174/0929866529666220805145244) | [35929627](https://www.ncbi.nlm.nih.gov/pubmed/35929627) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-08-28T13:56:40.105451+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_1987 | irrelevant | 1 | 0 | The paper is a case report on renal physiology and prostaglandin synthesis, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume for salsalate. |
| popPK | Aguilar_2016 | irrelevant | 0 | 0 | The paper is a solid-state chemistry study on the thermal decomposition and amorphous properties of salsalate, containing no pharmacokinetic data or disposition parameters. |
| popPK | Barzilay_2014 | irrelevant | 0 | 0 | The study measures advanced glycation end products (AGEs) and HbA1c levels, not pharmacokinetic parameters (CL, V, ka) for salsalate. |
| popPK | Bellucci_2017 | irrelevant | 0 | 0 | The paper is a review of NSAIDs in diabetes prevention and treatment, not a pharmacokinetic study reporting quantitative disposition parameters for salsalate. |
| popPK | Cao_2011 | irrelevant | 2 | 0 | The study focuses on disease progression and pharmacodynamics in rats, and while it mentions salicylate PK parameters in Table 1, the actual numeric values are not present in the provided evidence. |
| popPK | Cao_2012 | relevant | 9 | 2 | The paper is a relevant animal PK study for salsalate, but the evidence text only contains qualitative descriptions and percentages without specific numeric values for clearance, volume, or half-life. |
| popPK | Content_2024 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of microvascular function using salsalate as an NF-κB inhibitor, and it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for salsalate. |
| PD | Content_2024 | not_relevant | 2 | 1 | The study reports qualitative changes in microvascular function (CVC) after fixed-dose salsalate treatment but does not provide plasma concentration data or fit a concentration-effect model to derive numeric PD parameters like Emax or EC50. |
| popPK | Fleischman_2008 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of salsalate on glycemic and inflammatory parameters, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Goldfine_2008 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on metabolic outcomes (glucose, insulin resistance) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for salsalate. |
| popPK | Goldfine_2013 | irrelevant | 2 | 0 | The study is a clinical trial of salsalate's metabolic effects (glucose, insulin clearance) rather than a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka) for salsalate itself. |
| popPK | Kaushal_2025 | irrelevant | 0 | 0 | The paper is a review of phytotherapeutic insights into hyperuricemia and does not report original quantitative pharmacokinetic parameters for salsalate. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The study measures the pharmacodynamics of salsalate (effects on insulin clearance and glucose metabolism) but does not report pharmacokinetic parameters (CL, V, ka) for salsalate itself. |
| popPK | Krishnan_2015 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of salsalate as an IKKβ inhibitor on endothelial function and NO bioavailability, not its pharmacokinetic disposition parameters. |
| popPK | Meex_2011 | irrelevant | 1 | 0 | The study focuses on metabolic effects (energy expenditure, glucose disposal) and mitochondrial function rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Penesova_2015 | irrelevant | 0 | 0 | The study investigates the effect of salsalate on insulin clearance, not the pharmacokinetic parameters of salsalate itself. |
| popPK | Williams_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of microvascular endothelial function (vasodilation) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for salsalate. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study focuses on the enzymatic inhibition kinetics of tyrosinase by salsalate (IC50, Ki), not on the pharmacokinetic disposition parameters (CL, V, ka) of salsalate itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_salsalate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
