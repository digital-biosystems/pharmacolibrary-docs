# moxifloxacin

- **generic name:** moxifloxacin
- **ATC codes:** `J01MA14`, `S01AE07`
- **DrugBank:** [DB00218](https://go.drugbank.com/drugs/DB00218)
- **groups:** approved, investigational

## About

**Description.** Moxifloxacin is a synthetic fluoroquinolone antibiotic agent. Bayer AG developed the drug (initially called BAY 12-8039) and it is marketed worldwide (as the hydrochloride) under the brand name Avelox (in some countries also Avalox) for oral treatment.

**Indication.** For the treatment of sinus and lung infections such as sinusitis, pneumonia, and secondary infections in chronic bronchitis. Also for the treatment of bacterial conjunctivitis (pinkeye).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/2/0 | 0/0/0 | 0/0/0 | not captured | not captured | 23 | 7/0 | 14/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Greenberg_2022](drugs/drug_moxifloxacin/Moxifloxacin_Greenberg2022_reference.md) | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Palmer_2025](drugs/drug_moxifloxacin/Moxifloxacin_Palmer2025_reference.md) | Palmer M et al., Population pharmacokinetics and dosing…, British journal of clinical… (2025) | [10.1111/bcp.70005](https://doi.org/10.1111/bcp.70005) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yun_2022](drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference.md) | Yun HY et al., Model-Based Efficacy and Toxicity Compa…, Open forum infectious disea… (2022) | [10.1093/ofid/ofab660](https://doi.org/10.1093/ofid/ofab660) |

## Coverage

- **PubMed hits:** 209 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Greenberg_2022.pdf` | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | popPK | 10 | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) | [35284983](https://pubmed.ncbi.nlm.nih.gov/35284983) | The abstract reports numeric population PK parameters for moxifloxacin (clearance and volume) directly in the text. |
| `Radtke_2022.pdf` | Radtke KK et al., Moxifloxacin Pharmacokinetics, Cardiac…, Clinical infectious disease… (2022) | popPK | 9 | [10.1093/cid/ciab641](https://doi.org/10.1093/cid/ciab641) | [34286843](https://pubmed.ncbi.nlm.nih.gov/34286843) | The paper reports a population PK model with a numeric apparent clearance, but detailed parameter values may be incomplete beyond the abstract and full model output. |

<sub>queue written 2026-07-18T22:42:37.658748+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bock_2023_2 | relevant | 7 | 4 | Moxifloxacin is a subject drug in a population PK analysis, but the actual numeric PK parameter values are only said to be in Supplementary Table 1 not shown here. |
| popPK | Lee_2025 | relevant | 8 | 3 | This is a moxifloxacin popPK external validation paper, but the readable evidence mainly gives model-performance results and only partial parameter snippets while full model values appear to be in tables/supplementary material not provided. |
| popPK | Nyangwa_2026 | irrelevant | 0 | 0 | The evidence is about pretomanid, not moxifloxacin; moxifloxacin is only a co-administered regimen component. |
| popPK | Olivares_2025 | irrelevant | 2 | 1 | Moxifloxacin is only mentioned as a simulated comparator, and the numeric PK parameters appear to be in supplementary tables/figures not provided here. |
| popPK | Radtke_2022 | relevant | 9 | 4 | The paper reports a population PK model with a numeric apparent clearance, but detailed parameter values may be incomplete beyond the abstract and full model output. |
| popPK | Xu_2024 | irrelevant | 2 | 0 | The paper is about pyrazinamide PK in regimens that include moxifloxacin, but no moxifloxacin disposition parameters are reported here. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_moxifloxacin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
