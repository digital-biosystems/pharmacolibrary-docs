# rolapitant

- **generic name:** rolapitant
- **ATC codes:** `A04AD14`
- **DrugBank:** [DB09291](https://go.drugbank.com/drugs/DB09291)
- **groups:** approved, investigational

## About

**Description.** Rolapitant is a potent, highly selective, long-acting Neurokinin-1 (NK-1) receptor antagonist approved for the prevention of delayed chemotherapy-induced nausea and vomiting (CINV) in adults. Delayed-phase CINV typically occurs >24 hours after chemotherapy treatment and is principally mediated by Neurokinin-1 and its ligand Substance P, which is released in the gut following chemotherapy administration. Neurokinin-1 is also known as Tachykinin Receptor 1 (TACR1), Neurokinin 1 Receptor (NK1R), and Substance P Receptor (SPR). 
By blocking Substance P from interacting with NK-1 receptors in the gut and the central nervous system, rolapitant prevents late-phase CINV. Unlike other available NK-1 receptor antagonists, rolapitant is not an inhibitor of Cytochrome P450 enzyme CYP3A4 and has a long elimination half-life, allowing a single dose to prevent both acute and late-phase CINV during the first 120 hours post-chemotherapy.

**Indication.** This drug is indicated in adults in combination with other antiemetics for the prevention of delayed nausea and vomiting associated with emetogenic chemotherapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 03:38 | 5:16 | 0/5/0 | 0/0/0 | 0/0/0 | 48,204/3,847 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/1 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_rolapitant/Rolapitant_Li2026_fosrolapitant.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_rolapitant/Rolapitant_Li2026_healthy_control.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_rolapitant/Rolapitant_Li2026_moderate_hepatic_impairment.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_rolapitant/Rolapitant_Li2026_rolapitant.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019](drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md) | Wang (2019) | — |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 0  ·  needs_review 0  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2019.pdf` | Wang X et al., Population Pharmacokinetics of Rolapita…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.733](https://doi.org/10.1002/cpdd.733) | [31418538](https://pubmed.ncbi.nlm.nih.gov/31418538) | The paper is a population PK study of rolapitant and explicitly reports numeric values for clearance, volume of distribution, and intercompartmental clearance in the text. |
| `Yu_2017.pdf` | Yu J et al., What Can Be Learned from Recent New Dru…, Drug metabolism and disposi… (2017) | pgx | 8 | [10.1124/dmd.116.073411](https://doi.org/10.1124/dmd.116.073411) | [27821435](https://www.ncbi.nlm.nih.gov/pubmed/27821435) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-11T03:36:14.738545+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barbour_2017 | not_relevant | 0 | 0 | The paper analyzes safety outcomes (adverse events) in patients taking CYP2D6/BCRP substrates, but does not report pharmacokinetic or pharmacodynamic parameters of rolapitant itself, nor does it stratify by patient genotype. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The text is a general review of antiemetic therapies and mentions rolapitant's pharmacokinetic properties (half-life, CYP-3A4) but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Deb_2023 | irrelevant | 0 | 0 | The paper is an in silico simulation study focusing on drug-drug interactions and does not report original quantitative pharmacokinetic disposition parameters (CL, V, etc.) for rolapitant. |
| PD | Deb_2023 | not_relevant | 0 | 0 | The paper is an in silico simulation of drug-drug interactions (DDI) focusing on CYP enzyme kinetics (IC50, Ki) and PK parameters (AUC ratios), not pharmacodynamic (PD) exposure-response or dose-response relationships for rolapitant. |
| PGx | Deb_2023 | not_relevant | 0 | 0 | The paper reports in silico drug-drug interaction simulations, not pharmacogenomic effects of gene variants on rolapitant PK/PD. |
| PGx | Glass_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2D6 inhibition by rolapitant (drug-drug interaction) but does not report any pharmacogenomic effects (gene variants) on rolapitant's PK or PD parameters. |
| PGx | Heo_2017 | not_relevant | 0 | 0 | The paper is a clinical review of rolapitant's efficacy and safety, focusing on its lack of CYP3A4 interactions, but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Rapoport_2017 | not_relevant | 0 | 0 | The paper is a review of clinical efficacy and general pharmacokinetics in special populations (tumor types, age) but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Rapoport_2017_2 | not_relevant | 0 | 0 | The paper is a review of delayed chemotherapy-induced nausea and vomiting management and does not report pharmacogenomic effects on rolapitant PK/PD. |
| PGx | Rapoport_2017_3 | not_relevant | 0 | 0 | The paper is a clinical review of rolapitant's efficacy and safety, with no mention of genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Rapoport_2017_4 | not_relevant | 0 | 0 | The paper is a general review of NK-1 receptor antagonists and does not report any pharmacogenomic effects or gene variant associations for rolapitant. |
| PGx | Syed_2015 | not_relevant | 0 | 0 | The paper is a general drug approval summary and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The study evaluates the effect of rolapitant on the pharmacokinetics of probe drugs (drug-drug interaction) in healthy subjects, not the effect of a gene variant on rolapitant's pharmacokinetics or pharmacodynamics. |
| PGx | Wang_2019_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole, rifampin, midazolam) rather than pharmacogenomic effects based on genetic variants. |
| PGx | Wang_2019_3 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP inhibition) of rolapitant, not the effect of gene variants on rolapitant's PK/PD. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper is a systematic review of 2015 NDAs and mentions rolapitant only as a perpetrator of CYP2D6 inhibition, without reporting any pharmacogenomic effects on rolapitant's own PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_rolapitant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
