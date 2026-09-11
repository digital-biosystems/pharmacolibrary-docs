# papaverine

- **generic name:** papaverine
- **ATC codes:** `A03AD01`, `G04BE02`
- **DrugBank:** [DB01113](https://go.drugbank.com/drugs/DB01113)
- **groups:** approved, investigational

## About

**Description.** An alkaloid found in opium but not closely related to the other opium alkaloids in its structure or pharmacological actions. It is a direct-acting smooth muscle relaxant used in the treatment of impotence and as a vasodilator, especially for cerebral vasodilation. The mechanism of its pharmacological actions is not clear, but it apparently can inhibit phosphodiesterases and it may have direct actions on calcium channels.

**Indication.** For the treatment of impotence and vasospasms.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 23:28 | 8:30 | 0/1/0 | 2/0/0 | 0/0/0 | 120,589/9,019 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ritschel_1977](drugs/drug_papaverine/Papaverine_Ritschel1977_reference.md) | Ritschel WA et al., Pharmacokinetics of papaverine in man, International journal of cl… (1977) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rehman_2022](drugs/drug_papaverine/pd_Rehman_2022_unknown.md) | Rehman (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rehman_2022_2](drugs/drug_papaverine/pd_Rehman_2022_2_inhibition_of_carbachol_induced_contraction.md) | Rehman (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rehman_2022_2](drugs/drug_papaverine/pd_Rehman_2022_2_inhibition_of_high_K_induced_contraction.md) | Rehman (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rehman_2022_2](drugs/drug_papaverine/pd_Rehman_2022_2_percent_inhibition_of_diarrhea.md) | Rehman (2022) | — |

## Coverage

- **PubMed hits:** 114 matched, 28 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kraus_1991.pdf` | Kraus C et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1991) | popPK | 10 | [10.1002/bdd.2510120707](https://doi.org/10.1002/bdd.2510120707) | [1932615](https://pubmed.ncbi.nlm.nih.gov/1932615) | The study is a direct PK investigation of papaverine in dogs, but the specific numeric disposition parameters (CL, V, t1/2) are not listed in the provided text, only bioavailability percentages. |
| `Shaaya_1992.pdf` | Shaaya AN et al., Pharmacokinetics and bioavailability of…, Methods and findings in exp… (1992) | popPK | 10 | not captured | [1513193](https://pubmed.ncbi.nlm.nih.gov/1513193) | The study is a PK study of papaverine in dogs, but the evidence only provides bioavailability percentages and model description, lacking specific numeric values for CL, V, or half-life. |
| `Juhran_1975.pdf` | Juhran VW et al., [The pharmacokinetics of papaverine and…, Arzneimittel-Forschung (1975) | popPK | 9 | not captured | [1242319](https://pubmed.ncbi.nlm.nih.gov/1242319) | The study reports quantitative PK parameters (half-life, volume, absorption rate) for papaverine in beagles, but the specific numeric values are not present in the provided evidence text. |
| `Ritschel_1977.pdf` | Ritschel WA et al., Pharmacokinetics of papaverine in man, International journal of cl… (1977) | popPK | 9 | not captured | [873666](https://pubmed.ncbi.nlm.nih.gov/873666) | The paper reports quantitative pharmacokinetic parameters for papaverine in humans, including half-life (1.5-2.2 hours) and volume of distribution (approx. 15% of body weight), derived from a two-compartment model. |
| `Ritschel_1991.pdf` | Ritschel WA et al., Pharmacokinetics of papaverine HCl upon…, Methods and findings in exp… (1991) | popPK | 9 | not captured | [1870358](https://pubmed.ncbi.nlm.nih.gov/1870358) | The paper describes an in vivo PK study of papaverine in dogs using a two-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| `Hiraga_2001.pdf` | Hiraga H et al., Nitric oxide donor FK409 and 8-bromogua…, Fundamental & clinical phar… (2001) | pd | 4 | [10.1046/j.1472-8206.2001.00012.x](https://doi.org/10.1046/j.1472-8206.2001.00012.x) | [11468022](https://www.ncbi.nlm.nih.gov/pubmed/11468022) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-10T23:24:07.141071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Dalpiaz_2018 | not_relevant | 0 | 0 | The paper discusses nose-to-brain delivery of antiviral drugs and mentions papaverine only as a general absorption enhancer, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Emami_2020 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of curcumin on smooth muscle, using papaverine only as a co-administered incubation agent to test for phosphodiesterase inhibition, and reports no pharmacokinetic parameters for papaverine. |
| PD | Emami_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of curcumin, not papaverine; papaverine is only used as a tool compound in the experimental protocol. |
| popPK | Fekri_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer effects and does not report any pharmacokinetic parameters for papaverine. |
| popPK | Hiraga_2001 | irrelevant | 0 | 0 | The paper focuses on cardiac contractility and nitric oxide donors, with no evidence of papaverine pharmacokinetic parameters. |
| PD | Hiraga_2001 | not_relevant | 0 | 0 | The paper focuses on nitric oxide donor FK409 and 8-bromo-cGMP, not papaverine, and does not report PD parameters for papaverine. |
| popPK | Horgan_1991 | irrelevant | 0 | 0 | Papaverine is used only as a pharmacological antagonist to inhibit vasoconstriction, not as the subject of a pharmacokinetic study. |
| PD | Horgan_1991 | not_relevant | 1 | 0 | The paper reports a dose-response curve for endothelin-1 (ET-1), not papaverine; papaverine is only mentioned as a qualitative inhibitor at a single concentration. |
| PGx | Iwase_2017 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of papaverine on CYP enzymes in vitro to predict drug interactions, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of papaverine. |
| PGx | Joshi_2001 | not_relevant | 0 | 0 | The study investigates the physiological effects of papaverine on cerebral blood flow in a small cohort without analyzing any genetic variants or pharmacogenomic factors. |
| popPK | Juhran_1975 | relevant | 9 | 0 | The study reports quantitative PK parameters (half-life, volume, absorption rate) for papaverine in beagles, but the specific numeric values are not present in the provided evidence text. |
| PGx | Jägestedt_2004 | not_relevant | 0 | 0 | The paper describes a case of serotonin syndrome and mentions CYP2D6 interactions but does not report any pharmacogenomic effect on PK or PD parameters of papaverine. |
| popPK | Khan_2015 | irrelevant | 0 | 0 | The study investigates the bronchodilator activity of Vitex negundo, using papaverine only as a comparator agent in in-vitro mechanistic assays, with no pharmacokinetic parameters reported. |
| PD | Khan_2015 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Vitex negundo, using papaverine only as a qualitative reference standard; it does not report PD parameters for papaverine. |
| popPK | Kraus_1991 | relevant | 10 | 2 | The study is a direct PK investigation of papaverine in dogs, but the specific numeric disposition parameters (CL, V, t1/2) are not listed in the provided text, only bioavailability percentages. |
| popPK | Rahimi_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation in isolated arteries, not a pharmacokinetic study, and reports no disposition parameters for papaverine. |
| popPK | Rehman_2022 | irrelevant | 0 | 0 | The study is an ex vivo pharmacodynamic and in silico investigation of fenchone, using papaverine only as a comparator agent without reporting any pharmacokinetic parameters for it. |
| popPK | Rehman_2022_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of a plant extract where papaverine is used only as a positive control, and no pharmacokinetic parameters are reported. |
| popPK | Ritschel_1991 | relevant | 9 | 0 | The paper describes an in vivo PK study of papaverine in dogs using a two-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Salminen_2015 | not_relevant | 0 | 0 | The paper investigates the inhibitory potential of papaverine on CYP2C19 in vitro, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of papaverine. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of papaverine on human penile vessels in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Shaaya_1992 | relevant | 10 | 2 | The study is a PK study of papaverine in dogs, but the evidence only provides bioavailability percentages and model description, lacking specific numeric values for CL, V, or half-life. |
| PGx | Shamloul_2005 | not_relevant | 0 | 0 | The paper compares the efficacy of two drugs for erectile dysfunction but does not investigate any gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sliwiński_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of galanin on rat gastric muscle where papaverine is used only as a non-competitive antagonist/co-administered agent, with no pharmacokinetic parameters reported. |
| PD | Sliwiński_1996 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for galanin and its analogues, but papaverine is only used as a non-competitive antagonist to characterize the mechanism of galanin, with no specific PD parameters reported for papaverine itself. |
| PGx | Tarhan_2006 | not_relevant | 0 | 0 | The paper compares the efficacy and side effects of two drug regimens for erectile dysfunction but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Wu_2006 | irrelevant | 0 | 0 | Papaverine is used only as an internal standard for the pharmacokinetic study of oxymatrine and matrine, not as the subject drug. |
| popPK | Wójcicki_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol, with papaverine acting only as a co-administered agent affecting paracetamol's absorption, not as the subject drug for PK parameter estimation. |
| popPK | dOelsnitz_2022 | irrelevant | 0 | 0 | The paper is a study on the directed evolution of biosensors for alkaloid detection and biosynthesis, not a pharmacokinetic study, and contains no disposition parameters for papaverine. |
| PD | dOelsnitz_2022 | not_relevant | 0 | 0 | The paper focuses on the evolution of biosensors for alkaloids and reports binding affinities (EC50) for the sensor proteins, not pharmacodynamic exposure-response relationships for the drug papaverine in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_papaverine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
