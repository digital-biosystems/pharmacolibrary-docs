<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxegol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naloxegol_AlHuniti2016_healthy_subjects_and_patients_with_oi&quot;,&quot;label&quot;:&quot;Al-Huniti_2016_healthy subjects and patients with OIC&quot;,&quot;href&quot;:&quot;drugs/drug_naloxegol/Naloxegol_AlHuniti2016_healthy_subjects_and_patients_with_oi.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# naloxegol

- **generic name:** naloxegol
- **ATC codes:** `A06AH03`
- **DrugBank:** [DB09049](https://go.drugbank.com/drugs/DB09049)
- **groups:** approved, investigational

## About

**Description.** Naloxegol, for "PEGylated naloxol" is a peripherally-selective opioid antagonist developed by AstraZeneca. It was approved by the FDA in September 2014 and is indicated for the treatment of opioid-induced constipation (OIC) in adult patients with chronic non‑cancer pain. The advantage of naloxegol over the opioid antagonist naloxone is that its PEGylated structure allows for high selectivity for peripheral opioid receptors and lack of entry into the central nervous system through the blood-brain barrier.

**Indication.** Indicated for the treatment of opioid-induced constipation (OIC) in adult patients with chronic non-cancer pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 11:28 | 3:38 | 0/0/0 | 1/0/0 | 0/0/0 | 70,175/1,290 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Al-Huniti_2016_healthy subjects and patients with OIC](drugs/drug_naloxegol/Naloxegol_AlHuniti2016_healthy_subjects_and_patients_with_oi.md) | Al-Huniti (2016) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Huniti_2017](drugs/drug_naloxegol/pd_Al_Huniti_2017_SBM_response.md) | Al-Huniti N et al., Population Exposure-Response Modeling S…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12229](https://doi.org/10.1002/psp4.12229) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Huniti_2017](drugs/drug_naloxegol/pd_Al_Huniti_2017_dropout.md) | Al-Huniti N et al., Population Exposure-Response Modeling S…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12229](https://doi.org/10.1002/psp4.12229) |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Huniti_2016.pdf` | Al-Huniti N et al., Population pharmacokinetics of naloxego…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12756](https://doi.org/10.1111/bcp.12756) | [26317320](https://pubmed.ncbi.nlm.nih.gov/26317320) | The paper is a population PK study for naloxegol and explicitly reports numeric values for CL/F, Vc/F, ka1, and ktr in the text. |
| `Hruska_2024.pdf` | Hruska MW et al., Population Pharmacokinetics of Naloxego…, Clinical pharmacology in dr… (2024) | popPK | 10 | [10.1002/cpdd.1457](https://doi.org/10.1002/cpdd.1457) | [39110083](https://pubmed.ncbi.nlm.nih.gov/39110083) | The paper describes a population PK study for naloxegol, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Yu_2016.pdf` | Yu J et al., Key Findings from Preclinical and Clini…, Drug metabolism and disposi… (2016) | pgx | 8 | [10.1124/dmd.115.066720](https://doi.org/10.1124/dmd.115.066720) | [26424199](https://www.ncbi.nlm.nih.gov/pubmed/26424199) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Yu_2018.pdf` | Yu J et al., Risk of Clinically Relevant Pharmacokin…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.078691](https://doi.org/10.1124/dmd.117.078691) | [29572333](https://www.ncbi.nlm.nih.gov/pubmed/29572333) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-11T11:27:21.152760+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al-Huniti_2016 | not_relevant | 0 | 0 | The study analyzes demographic and clinical covariates (e.g., CYP3A4 inhibitors, race, gender) but does not report any pharmacogenomic effects based on specific gene variants or genotypes. |
| popPK | Al-Huniti_2016_2 | irrelevant | 2 | 0 | The paper is a population exposure-response (PD) study that uses PK parameters from a separate model (referenced as Supplementary Information) rather than reporting quantitative PK disposition parameters (CL, V, etc.) for naloxegol in the main text. |
| popPK | Al-Huniti_2017 | irrelevant | 0 | 0 | The paper is a population exposure-response (pharmacodynamic) modeling study for dose selection, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka, etc.) for naloxegol. |
| PGx | Bui_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with CYP3A modulators, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Coluzzi_2022 | not_relevant | 2 | 0 | The paper is a review discussing P-glycoprotein's role in opioid transport and mentions naloxegol as a substrate, but it does not report specific pharmacogenomic data (e.g., ABCB1 polymorphisms) affecting naloxegol's PK or PD parameters. |
| PGx | Gudin_2020 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic principles and drug interactions (CYP3A4, P-gp) for PAMORAs, but it does not report specific pharmacogenomic effects of gene variants on naloxegol PK/PD parameters. |
| popPK | Hruska_2024 | relevant | 10 | 0 | The paper describes a population PK study for naloxegol, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Lawson_2016 | irrelevant | 0 | 0 | The paper is a health utility/QoL analysis of naloxegol for opioid-induced constipation and does not report any pharmacokinetic parameters. |
| PGx | Leppert_2016 | not_relevant | 3 | 5 | The paper mentions a 30% increase in Cmax in Asian patients likely associated with CYP3A5 polymorphism, but it is a population PK covariate analysis rather than a specific pharmacogenomic study reporting a fitted effect size for a defined genotype. |
| PGx | Yu_2016 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (DDIs) and mentions naloxegol only as a CYP3A substrate, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) involving CYP3A and transporters, not pharmacogenomic effects of gene variants on naloxegol's PK/PD. |
| PGx | Zhou_2016 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) and PBPK modeling, not pharmacogenomic effects of gene variants on PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_naloxegol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
