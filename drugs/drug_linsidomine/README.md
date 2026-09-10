# linsidomine

- **generic name:** linsidomine
- **ATC codes:** `C01DX18`
- **DrugBank:** [DB13400](https://go.drugbank.com/drugs/DB13400)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 22:18 | 2:47 | 0/0/0 | 0/0/0 | 0/0/0 | 12,479/1,286 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Remadi_2002.pdf` | Remadi JP et al., Effect of linsidomine on the human radi…, Clinical science (London, E… (2002) | pd | 4 | [10.1042/cs1030001](https://doi.org/10.1042/cs1030001) | [12095397](https://www.ncbi.nlm.nih.gov/pubmed/12095397) | metadata signals extractable PD data (EC50) |
| `Segarra_1999.pdf` | Segarra G et al., Comparative effects of dilator drugs on…, Clinical science (London, E… (1999) | pd | 4 | not captured | [9857107](https://www.ncbi.nlm.nih.gov/pubmed/9857107) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T22:18:04.702881+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Booth_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vasodilation in rat aorta, not a pharmacokinetic study, and reports no disposition parameters for linsidomine. |
| popPK | Laferrière_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral analysis of topical analgesic combinations in rats, and linsidomine is used only as a co-administered NO donor without any reported pharmacokinetic parameters. |
| PD | Laferrière_2014 | not_relevant | 4 | 2 | The paper reports qualitative dose-dependent effects and dose-response curve shifts for linsidomine in an animal model, but the provided text does not contain specific numeric PD parameters (e.g., ED50, Emax) or data points to derive them. |
| popPK | Lea_1996 | irrelevant | 0 | 0 | The paper is a review of alprostadil, and linsidomine is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Lea_1996 | not_relevant | 0 | 0 | The paper is a review of alprostadil and only mentions linsidomine as a comparator agent without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for linsidomine. |
| popPK | Matthiesen_2021 | irrelevant | 0 | 0 | The study is an in-vitro microphysiological model (BBB-on-chip) investigating barrier integrity and antioxidant effects, not a pharmacokinetic study reporting quantitative disposition parameters for linsidomine. |
| PD | Matthiesen_2021 | not_relevant | 2 | 1 | The paper describes a microphysiological model and qualitative observations of barrier disruption by linsidomine, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Remadi_2002 | irrelevant | 0 | 0 | The paper title indicates a study on the effect of linsidomine on the human radial artery, which is a pharmacodynamic or mechanistic study, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Remadi_2002 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Rosenkranz_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for molsidomine, not linsidomine. |
| popPK | Segarra_1999 | irrelevant | 0 | 0 | The paper title indicates a study on dilator drugs in penile vasculature, which is unrelated to linsidomine pharmacokinetics. |
| PD | Segarra_1999 | not_relevant | 0 | 0 | The paper studies dilator drugs on penile vessels and does not mention linsidomine or report any exposure-response relationship for it. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The paper studies the effects of dilator drugs on penile vasculature and does not mention linsidomine or any pharmacogenomic analysis. |
| popPK | Van_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on antioxidant screening where linsidomine (SIN-1) is used only as a peroxynitrite generator, not as the subject of pharmacokinetic analysis. |
| PD | Van_1998 | not_relevant | 0 | 0 | The paper describes a chemical screening method for antioxidants using linsidomine (SIN-1) as a peroxynitrite generator, not a pharmacodynamic study of linsidomine itself; no exposure-response or dose-response parameters for linsidomine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_linsidomine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
