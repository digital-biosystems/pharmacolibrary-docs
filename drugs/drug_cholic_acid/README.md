<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;cholic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CholicAcid_Quarfordt1973_reference&quot;,&quot;label&quot;:&quot;Quarfordt_1973_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cholic_acid/CholicAcid_Quarfordt1973_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cholic acid

- **generic name:** cholic acid
- **ATC codes:** `A05AA03`
- **DrugBank:** [DB02659](https://go.drugbank.com/drugs/DB02659)
- **groups:** approved, investigational

## About

**Description.** A major primary bile acid produced in the liver and usually conjugated with glycine or taurine. It facilitates fat absorption and cholesterol excretion. [PubChem]
Cholic acid, formulated as Cholbam capsules, is approved by the United States Food and Drug Administration as a treatment for children and adults with bile acid synthesis disorders due to single enzyme defects, and for peroxisomal disorders (such as Zellweger syndrome).

**Indication.** Oral cholic acid is indicated for: treatment of bile acid synthesis disorders due to single enzyme defects; and as adjunctive treatment of peroxisomal disorders including Zellweger spectrum disorders in patients who exhibit manifestations of liver disease, steatorrhea or complications from decreased fat soluble vitamin absorption.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 13:36 | 0:42 | 0/1/0 | 0/0/0 | 0/0/0 | 26,426/591 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/1 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Quarfordt_1973_reference](drugs/drug_cholic_acid/CholicAcid_Quarfordt1973_reference.md) | Quarfordt SH et al., Estimation of cholesterol and bile acid…, The Journal of clinical inv… (1973) | [10.1172/JCI107378](https://doi.org/10.1172/JCI107378) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cholic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| absorption | ileum | `SLC10A2` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inducer | DrugBank actor |
| distribution | lung | `ABCC1` inducer | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CES1` inhibitor, `SLC10A1` inhibitor/substrate, `SLC22A7` inhibitor, `SLCO1B1` inducer/inhibitor/substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inducer, `ABCC4` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inducer/inhibitor/substrate, `ABCC2` inducer, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADH1C (unknown), COX4I1 (unknown), COX5A (unknown), COX5B (unknown), COX6A2 (unknown), COX6B1 (unknown), COX6C (unknown), COX7A1 (unknown), COX7B (unknown), COX7C (unknown), COX8A (unknown), ESRRG (unknown), FABP1 (unknown), FABP6 (unknown), FECH (inhibitor), GPBAR1 (unknown), MT-CO1 (unknown), MT-CO2 (unknown), MT-CO3 (unknown), NR1H4 (unknown), PLA2G1B (inhibitor).</sub>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hofmann_1983 | relevant | 10 | 2 | The paper describes a detailed compartmental PK model for cholic acid, but the specific numeric parameter values (transfer coefficients, clearances) are not present in the provided text, appearing only as fragments or references to figures/tables not included. |
| popPK | Molino_1986 | irrelevant | 2 | 0 | The study focuses on chenodeoxycholic acid (CDC) as the subject drug, with cholic acid mentioned only as a comparator for model parameters, and no quantitative PK values for cholic acid are provided in the evidence. |
| popPK | Strange_1979 | irrelevant | 2 | 0 | The study focuses on subcellular partitioning and distribution percentages in rat liver rather than standard pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Varma_2021 | irrelevant | 0 | 0 | The study is a metabolomic and pharmacoepidemiologic investigation of bile acid levels and dementia risk, not a pharmacokinetic study reporting disposition parameters for cholic acid. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The study measures fecal concentrations of cholic acid as a metabolite in a toxicology study, not pharmacokinetic disposition parameters (CL, V, ka) for cholic acid as a subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cholic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
