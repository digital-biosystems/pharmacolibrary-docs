<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;lomustine&quot;}]"></div>

# lomustine

- **generic name:** lomustine
- **ATC codes:** `L01AD02`
- **DrugBank:** [DB01206](https://go.drugbank.com/drugs/DB01206)
- **groups:** approved, investigational

## About

**Description.** An alkylating agent of value against both hematologic malignancies and solid tumors.

**Indication.** For the treatment of primary and metastatic brain tumors as a component of combination chemotherapy in addition to appropriate surgical and/or radiotherapeutic procedures. Also used in combination with other agents as secondary therapy for the treatment of refractory or relapsed Hodgkin's disease.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:26 | 5:28 | 1/0/0 | 0/0/0 | 0/0/0 | 68,604/4,931 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Rodón_2015](drugs/drug_lomustine/Lomustine_Rodn2015_reference.md) | Rodón J et al., Pharmacokinetic, pharmacodynamic and bi…, Investigational new drugs (2015) | [10.1007/s10637-014-0192-4](https://doi.org/10.1007/s10637-014-0192-4) |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2011.pdf` | Zhuang L et al., HPLC method validation for the quantifi…, European journal of drug me… (2011) | popPK | 9 | [10.1007/s13318-011-0030-4](https://doi.org/10.1007/s13318-011-0030-4) | [21380568](https://pubmed.ncbi.nlm.nih.gov/21380568) | The paper reports quantitative pharmacokinetic parameters (t1/2, AUC, Cmax) for lomustine in rats using a population PK model, with values clearly present in the text. |
| `Villikka_1999.pdf` | Villikka K et al., Cytochrome P450-inducing antiepileptics…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.103403001](https://doi.org/10.1053/cp.1999.v66.103403001) | [10613614](https://www.ncbi.nlm.nih.gov/pubmed/10613614) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T04:24:35.806017+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Buckner_2003 | not_relevant | 0 | 0 | The paper discusses irinotecan pharmacogenomics and mentions lomustine only as a background agent, reporting no pharmacogenomic effects on lomustine PK/PD. |
| popPK | El-Yazigi_1988 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for BCNU and CCNU, not lomustine. |
| PGx | Le_1993 | not_relevant | 2 | 10 | The paper reports in vitro enzyme inhibition (Ki) of CYP2D6 by lomustine, but does not report a pharmacogenomic effect (genotype-dependent change) on lomustine's PK or PD parameters in humans. |
| PGx | Prakash_2026 | not_relevant | 0 | 0 | The paper describes a computational framework for drug repurposing and does not report pharmacogenomic effects on the PK or PD of lomustine. |
| PGx | Radtke_2022 | not_relevant | 2 | 5 | The study reports that ABCB1 knockout did not alter the response to lomustine, indicating no pharmacogenomic effect on its PD parameters. |
| popPK | Rodón_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of galunisertib, with lomustine serving only as a co-administered comparator agent for which no quantitative PK parameters are reported. |
| PD | Rodón_2015 | not_relevant | 4 | 4 | The paper reports PD for galunisertib (pSMAD2 inhibition vs concentration), but does not provide numeric PD parameters or an extractable exposure-response relationship for lomustine. |
| PGx | Villikka_1999 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes in vincristine due to drug-drug interactions (CYP3A4 induction), not pharmacogenomic effects on lomustine. |
| popPK | Wick_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of neurotoxicity and cell death, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper investigates vinblastine metabolism and mentions lomustine only as a drug that inhibits vinblastine biotransformation, without reporting any pharmacogenomic effects on lomustine's PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lomustine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
