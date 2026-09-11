# perampanel

- **generic name:** perampanel
- **ATC codes:** `N03AX22`
- **DrugBank:** [DB08883](https://go.drugbank.com/drugs/DB08883)
- **groups:** approved, investigational

## About

**Description.** Perampanel is a noncompetitive AMPA glutamate receptor antagonist. It is marketed under the name Fycompa™ and is indicated as an adjunct in patients over 12 years old for the treatment of partial-onset seizures that may or may not occur with generalized seizures. The FDA label includes an important black-boxed warning of serious or life-threatening behavioral and psychiatric reactions in patients taking Fycompa™.

**Indication.** Perampanel is indicated for the treatment of partial-onset seizures with or without secondarily generalized seizures in epileptic patients four years of age and older. It is also indicated as an adjunct in the treatment of primary generalized tonic-clonic seizures in epileptic patients aged 12 years and older.[L40913]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 01:33 | 1:39 | 1/4/0 | 0/0/0 | 0/0/0 | 50,522/3,260 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Jing_2023](drugs/drug_perampanel/Perampanel_Jing2023_reference.md) | Jing S et al., A Single- and Multiple-Dose Pharmacokin…, Clinical drug investigation (2023) | [10.1007/s40261-022-01241-8](https://doi.org/10.1007/s40261-022-01241-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Li_2024](drugs/drug_perampanel/Perampanel_Li2024_reference.md) | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Silva_2023](drugs/drug_perampanel/Perampanel_Silva2023_reference.md) | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Takenaka_2018](drugs/drug_perampanel/Perampanel_Takenaka2018_reference.md) | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025](drugs/drug_perampanel/Perampanel_Yang2025_reference.md) | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) |

## Coverage

- **PubMed hits:** 17 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2024.pdf` | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | popPK | 10 | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) | [38572689](https://pubmed.ncbi.nlm.nih.gov/38572689) | The study reports quantitative population PK parameters (CL and V) for perampanel in children with epilepsy, and the numeric values are explicitly present in the abstract text. |
| `Silva_2023.pdf` | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | popPK | 10 | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) | [37376153](https://pubmed.ncbi.nlm.nih.gov/37376153) | The paper reports a population PK model for perampanel with explicit numeric values for clearance (0.419 L/h) and volume of distribution (29.50 L) in the text. |
| `Takenaka_2018.pdf` | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | popPK | 10 | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) | [29171002](https://pubmed.ncbi.nlm.nih.gov/29171002) | The paper reports a population PK model for perampanel with specific numeric values for apparent clearance (CL/F) provided in the text. |
| `Yang_2025.pdf` | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | popPK | 10 | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) | [39902756](https://pubmed.ncbi.nlm.nih.gov/39902756) | The paper reports a population pharmacokinetic model for perampanel with explicit numeric values for clearance (0.84 L/h) and volume of distribution (64.35 L) in the text. |

<sub>queue written 2026-09-10T01:32:13.148900+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_perampanel`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
