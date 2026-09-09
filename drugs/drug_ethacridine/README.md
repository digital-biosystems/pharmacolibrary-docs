# Ethacridine

- **generic name:** Ethacridine
- **ATC codes:** `B05CA08`, `D08AA01`
- **DrugBank:** [DB13190](https://go.drugbank.com/drugs/DB13190)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 11:18 | 3:48 | 0/0/0 | 2/1/0 | 0/0/0 | 58,267/1,372 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 3/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020](drugs/drug_ethacridine/pd_Li_2020_Mpro_activity.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.10.28.359042](https://doi.org/10.1101/2020.10.28.359042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020](drugs/drug_ethacridine/pd_Li_2020_infection_ratio.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.10.28.359042](https://doi.org/10.1101/2020.10.28.359042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020](drugs/drug_ethacridine/pd_Li_2020_viral_titer.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.10.28.359042](https://doi.org/10.1101/2020.10.28.359042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_ethacridine/pd_Li_2021_Mpro_activity.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_ethacridine/pd_Li_2021_viral_RNA_copies.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_ethacridine/pd_Li_2021_viral_titer.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Akbar_2026](drugs/drug_ethacridine/pd_Akbar_2026_IC50.md) | Akbar N et al., Glucosamine functionalized multi-walled…, International microbiology… (2026) | [10.1007/s10123-026-00889-y](https://doi.org/10.1007/s10123-026-00889-y) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Akbar_2026](drugs/drug_ethacridine/pd_Akbar_2026_bacterial_inhibition.md) | Akbar N et al., Glucosamine functionalized multi-walled…, International microbiology… (2026) | [10.1007/s10123-026-00889-y](https://doi.org/10.1007/s10123-026-00889-y) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Akbar_2026](drugs/drug_ethacridine/pd_Akbar_2026_cytotoxicity.md) | Akbar N et al., Glucosamine functionalized multi-walled…, International microbiology… (2026) | [10.1007/s10123-026-00889-y](https://doi.org/10.1007/s10123-026-00889-y) |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akbar_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antibacterial efficacy of ethacridine-loaded nanocarriers, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic activity where ethacridine is only one of many screened compounds, and it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for ethacridine. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports EC50 values for flavonoids and other compounds, but does not contain any data or analysis for ethacridine. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on biomolecular condensates and small molecule partitioning, not a pharmacokinetic study, and ethacridine is only mentioned as a probe for subcellular localization without any PK parameters. |
| PD | Kilgore_2024 | not_relevant | 0 | 0 | The paper focuses on the physical chemistry of biomolecular condensates and small molecule partitioning (distribution), not on pharmacodynamic exposure-response or dose-effect relationships for ethacridine. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper is an in-vitro virology study investigating the antiviral mechanism of ethacridine against SARS-CoV-2, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral mechanism study reporting EC50/IC50 values, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | Rising_1978 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life ~15h, absorption &lt;0.1%) for ethacridine in dogs, but lacks explicit clearance or volume values. |
| popPK | Wachsman_1996 | irrelevant | 0 | 0 | The paper is a review on oxidative damage and apoptosis that mentions ethacridine only as a mechanistic inhibitor of poly ADP-ribose glycohydrolase, with no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ethacridine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
