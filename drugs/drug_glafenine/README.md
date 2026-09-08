# glafenine

- **generic name:** glafenine
- **ATC codes:** `N02BG03`
- **DrugBank:** [DB08963](https://go.drugbank.com/drugs/DB08963)
- **groups:** approved, withdrawn

## About

**Description.** An anthranilic acid derivative with analgesic properties used for the relief of all types of pain. Glafenine is withdrawn from the American market.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 13:04 | 1:25 | 0/0/0 | 0/1/0 | 0/0/0 | 11,208/1,139 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Collier_1968](drugs/drug_glafenine/pd_Collier_1968_bronchoconstriction.md) | Collier HO et al., Antagonism by fenamates and like-acting…, British journal of pharmaco… (1968) | [10.1111/j.1476-5381.1968.tb07952.x](https://doi.org/10.1111/j.1476-5381.1968.tb07952.x) |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hu_2024.pdf` | Hu XM et al., Prediction of cytochrome P450-mediated…, Archives of toxicology (2024) | pd | 5 | [10.1007/s00204-024-03701-w](https://doi.org/10.1007/s00204-024-03701-w) | [38492097](https://www.ncbi.nlm.nih.gov/pubmed/38492097) | metadata signals extractable PD data (IC50) |
| `Chiu_2015.pdf` | Chiu AM et al., High Throughput Assay Identifies Glafen…, Investigative ophthalmology… (2015) | pd | 4 | [10.1167/iovs.15-17802](https://doi.org/10.1167/iovs.15-17802) | [26641551](https://www.ncbi.nlm.nih.gov/pubmed/26641551) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-08-28T13:04:05.915050+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brogden_1986 | irrelevant | 1 | 0 | The paper is a general review of NSAIDs that mentions glafenine only in a broad class comparison without providing specific quantitative pharmacokinetic parameters for it. |
| popPK | Cheung_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on MRP4 inhibitors and does not report pharmacokinetic parameters for glafenine. |
| popPK | Chiu_2015 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on protein folding correction, not a pharmacokinetic study, and reports no disposition parameters for glafenine. |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of anti-inflammatory drugs on bronchoconstriction and does not report any pharmacokinetic parameters for glafenine. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for treating SARS-CoV-2 and does not report pharmacogenomic effects on glafenine PK/PD. |
| popPK | Ennachachibi_1988 | irrelevant | 2 | 0 | The paper describes an analytical method for glafenine and mentions pharmacokinetic application, but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.). |
| popPK | Hu_2024 | irrelevant | 0 | 0 | The paper is a machine learning study on P450 bioactivation and does not report any pharmacokinetic parameters for glafenine. |
| PD | Hu_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning prediction of P450 bioactivation and does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for glafenine. |
| popPK | Mallein_1966 | irrelevant | 0 | 0 | The paper studies glycerylaminophenaquine, not glafenine. |
| PGx | Selver_2011 | not_relevant | 0 | 0 | The paper uses glafenine as a tool compound to inhibit ABCG2 transport in cell cultures, not to study pharmacogenomic effects on its own PK/PD parameters. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19 drug repurposing and does not mention glafenine or report any pharmacokinetic parameters for it. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | not captured |
| PGx | Wen_2011 | not_relevant | 0 | 0 | The paper describes the metabolic bioactivation pathways of glafenine using recombinant enzymes and human liver microsomes, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper identifies glafenine as an ABCG2 inhibitor but does not report any pharmacogenomic effects (gene variants) on glafenine's PK or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The provided evidence is only a title for a conference abstract collection and contains no specific study data, drug names, or pharmacokinetic parameters for glafenine. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for glafenine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_glafenine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
