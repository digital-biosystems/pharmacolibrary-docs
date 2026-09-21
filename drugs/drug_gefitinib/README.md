<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;gefitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gefitinib_Hill2017_reference&quot;,&quot;label&quot;:&quot;Hill_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gefitinib/Gefitinib_Hill2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# gefitinib

- **generic name:** gefitinib
- **ATC codes:** `L01EB01`, `L01XE02`
- **DrugBank:** [DB00317](https://go.drugbank.com/drugs/DB00317)
- **groups:** approved, investigational

## About

**Description.** Gefitinib (originally coded ZD1839) is a drug used in the treatment of certain types of cancer. Acting in a similar manner to erlotinib (marketed as Tarceva), gefitinib selectively targets the mutant proteins in malignant cells. It is marketed by AstraZeneca under the trade name Iressa.

**Indication.** For the continued treatment of patients with locally advanced or metastatic non-small cell lung cancer after failure of either platinum-based or docetaxel chemotherapies.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 26 | 2/0 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hill_2017_reference](drugs/drug_gefitinib/Gefitinib_Hill2017_reference.md) | Hill L et al., The usage of a three-compartment model…, Mathematical medicine and b… (2017) | [10.1093/imammb/dqv029](https://doi.org/10.1093/imammb/dqv029) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gefitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…nation is by metabolism (primarily CYP3A4) and excretion in feces. Excretion is predominan…”</sub> | prose |
| excretion | kidney | <sub>“…eces. Excretion is predominantly via the feces (86%), with renal elimination of drug and m…”</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (target).</sub>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haaland_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis reporting survival and response rates, containing no pharmacokinetic parameters for gefitinib. |
| popPK | Hotta_2021 | irrelevant | 1 | 0 | Gefitinib is a co-administered agent and the study reports PK parameters solely for edoxaban, with only trough concentrations provided for gefitinib. |
| popPK | Janssen_2022 | irrelevant | 1 | 0 | The study focuses on ctDNA biomarker modeling rather than gefitinib pharmacokinetics, explicitly noting that external PK models were used and no quantitative disposition parameters are reported. |
| popPK | Kawata_2019 | relevant | 10 | 2 | The study is a population PK analysis of gefitinib, but the actual numeric parameter estimates are referenced in Table 2 and supplementary materials that are not provided in the evidence. |
| popPK | Kramer_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the PET tracer 18F-FLT, not for gefitinib, which is only mentioned as background therapy. |
| popPK | Leighl_2020 | irrelevant | 0 | 0 | The paper focuses exclusively on patient-reported outcomes and quality of life in a clinical trial, with no pharmacokinetic data or modeling for gefitinib reported. |
| popPK | Li_2021 | irrelevant | 1 | 0 | The study explicitly states that no gefitinib plasma concentrations were collected, so no pharmacokinetic parameters for gefitinib are reported or extractable. |
| popPK | Nishino_2013 | irrelevant | 1 | 0 | This is a tumor growth/response study in gefitinib-treated NSCLC, not a PK study, and no gefitinib disposition parameters are reported. |
| popPK | Nishino_2016 | irrelevant | 0 | 0 | The paper is an oncology imaging study assessing tumor volume and survival, containing no pharmacokinetic data or disposition parameters for gefitinib. |
| popPK | Wanika_2024 | irrelevant | 2 | 9 | The numeric parameter estimates for gefitinib are directly provided in Table 2 of the main text, but the study is strictly an in vitro cell-line model rather than a human or animal disposition study. |
| popPK | Xiong_2022 | irrelevant | 0 | 0 | The study exclusively reports population pharmacokinetic parameters for tepotinib, with gefitinib only mentioned as a co-administered drug and no PK values provided for it. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_gefitinib`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
