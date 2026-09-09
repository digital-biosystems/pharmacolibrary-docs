# acetyldigitoxin

- **generic name:** acetyldigitoxin
- **ATC codes:** `C01AA01`
- **DrugBank:** [DB00511](https://go.drugbank.com/drugs/DB00511)
- **groups:** approved

## About

**Description.** Cardioactive derivative of lanatoside A or of digitoxin used for fast digitalization in congestive heart failure.

**Indication.** Used for fast digitalization in congestive heart failure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 03:43 | 3:34 | 0/0/0 | 1/0/0 | 0/0/0 | 32,887/1,400 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_Apoptosis.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_Bax_expression.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_Bcl_2_expression.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_Caspase_3_expression.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_Cyclin_D1_expression.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_EZH2_expression.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_G0_G1_phase_population.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_H3K27me3_levels.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2026](drugs/drug_acetyldigitoxin/pd_Ji_2026_cell_viability.md) | Ji X et al., Repurposing acetyldigitoxin as a potent…, Journal of computer-aided m… (2026) | [10.1007/s10822-026-00777-7](https://doi.org/10.1007/s10822-026-00777-7) |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bodem_1975.pdf` | Bodem G et al., [Studies on metabolism and pharmacokine…, Arzneimittel-Forschung (1975) | popPK | 8 | not captured | [1242671](https://pubmed.ncbi.nlm.nih.gov/1242671) | The study reports quantitative pharmacokinetic parameters (half-life, excretion percentages, protein binding) for acetyldigitoxin in humans, with values explicitly present in the text. |
| `González-García_1987.pdf` | González-García C et al., Characterization of the alpha +-like Na…, Molecular pharmacology (1987) | pd | 4 | not captured | [2826993](https://www.ncbi.nlm.nih.gov/pubmed/2826993) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T03:43:05.011245+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | González-García_1987 | irrelevant | 0 | 0 | The paper studies Na+,K+-ATPase and N-acetyltransferase in pinealocytes, not the pharmacokinetics of acetyldigitoxin. |
| PD | González-García_1987 | not_relevant | 0 | 0 | The paper studies ouabain inhibition of N-acetyltransferase in pinealocytes and does not report pharmacodynamic or exposure-response data for acetyldigitoxin. |
| popPK | Ji_2026 | irrelevant | 0 | 0 | The paper is a computational and in-vitro mechanistic study of acetyldigitoxin as an EZH2 inhibitor, reporting no pharmacokinetic parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of acetyldigitoxin. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for acetyldigitoxin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_acetyldigitoxin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
