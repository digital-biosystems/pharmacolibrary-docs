# atogepant

- **generic name:** atogepant
- **ATC codes:** `N02CD07`
- **DrugBank:** [DB16098](https://go.drugbank.com/drugs/DB16098)
- **groups:** approved, investigational

## About

**Description.** Atogepant is an oral antagonist of calcitonin gene-related peptide (CGRP) receptors indicated for the prevention of episodic migraine headaches. It was developed by AbbVie and received FDA approval under the brand name Qulipta in September 2021.[L38814] While its approval was predated by two other members of the same drug family, namely [ubrogepant] and [rimegepant], these agents are indicated only for abortive migraine therapy - atogepant is novel in that it is the first and only oral CGRP antagonist approved for preventative use in migraine.[L38814] In December 2022, atogepant received Health Canada approval for the prevention of episodic migraine in adults.[L44642] It also received approval for preventive treatment of adult migraine by the EMA in August 2023.[L48016]

In patients requiring preventative migraine therapy, current practice guidelines recommend the use of certain anti-epileptic medications (e.g. [valproic acid] or [topiramate]) or beta-blockers (e.g. [propranolol]), all of which can be associated with significant adverse effects.[A239094] The "gepants" family of drugs, including atogepant, are comparatively well-tolerated[A189207,L38739] and may provide a desirable treatment option for patients struggling with adverse reactions to other preventative therapies.

**Indication.** Atogepant is indicated for the preventive treatment of migraine in adults by the FDA, EMA, and Health Canada.[L44647,L46033,L48001]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 20:44 | 9:44 | 0/0/0 | 0/0/0 | 0/0/0 | 121,328/15,973 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Schlachter_2026](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model.md) | Schlachter (2026) | — |
| <span class="pk-badge pk-badge--neutral">None</span> | [Schlachter_2026](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md) | Schlachter (2026) | — |
| <span class="pk-badge pk-badge--neutral">None</span> | [Schlachter_2026](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela.md) | Schlachter (2026) | — |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boinpally_2023.pdf` | Boinpally R et al., Effects of CYP3A4 inhibition/induction…, Pain management (2023) | pgx | 7 | [10.2217/pmt-2023-0056](https://doi.org/10.2217/pmt-2023-0056) | [37650778](https://www.ncbi.nlm.nih.gov/pubmed/37650778) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Boinpally_2024.pdf` | Boinpally R et al., Pharmacokinetics and Safety of Atogepan…, Clinical pharmacology in dr… (2024) | pgx | 7 | [10.1002/cpdd.1407](https://doi.org/10.1002/cpdd.1407) | [38702918](https://www.ncbi.nlm.nih.gov/pubmed/38702918) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-08-29T20:38:20.014789+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boinpally_2023 | irrelevant | 2 | 0 | The study reports only summary exposure metrics (AUC, Cmax, Tmax) for a drug interaction assessment, lacking the compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| popPK | Boinpally_2025_2 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for atogepant in lactating women, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for half-life are not explicitly listed in the provided text. |
| popPK | Boinpally_2026 | irrelevant | 2 | 1 | The study reports CSF/plasma concentration ratios and specific plasma/CSF concentrations at discrete time points, but does not provide compartmental PK parameters (CL, V, Q, ka) or a population PK model for atogepant. |
| popPK | Iannone_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing sleep quality and adverse events, not a pharmacokinetic study, and reports no quantitative disposition parameters for atogepant. |
| popPK | Iannone_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability study (real-world evaluation) that reports no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Schlachter_2026_2 | irrelevant | 2 | 0 | The paper is an exposure-response modeling study that uses predicted exposures from a separate population PK model rather than reporting original quantitative PK parameters (CL, V, etc.) for atogepant. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_atogepant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
