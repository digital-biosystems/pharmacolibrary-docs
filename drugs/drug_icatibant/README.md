# icatibant

- **generic name:** icatibant
- **ATC codes:** `B06AC02`
- **DrugBank:** [DB06196](https://go.drugbank.com/drugs/DB06196)
- **groups:** approved, investigational

## About

**Description.** Icatibant is a synthetic decapeptide with 5 nonproteinogenic amino acid antagonist targeting the B<sub>2</sub> receptors with a similar affinity to bradykinin. It is resistant to bradykinin-cleaving enzyme degradation and has a potency of 2-3 times higher than earlier B<sub>2</sub> receptors antagonists, thus representing a new class of medication.[A4017,A263041] It was investigated as a potential treatment of hereditary angioedema (HAE) as bradykinin was implicated in HAE swelling; specifically, mice lacking B<sub>2</sub> receptors showed reduced swelling, thus demonstrating bradykinin involvement in the disease pathophysiology.[A4017,A263046]

Icatibant was approved by the FDA on August 25, 2011, and by the EMA in 2008 as a treatment for hereditary angioedema.[L49776,L49781] The FDA approval was based on positive results obtained from 3 double-blind, randomized, controlled clinical trials known as FAST 1, 2, and 3, where a median time to almost complete symptom relief was observed to be 8 hours compared to 36 hours for the placebo treatment.[L49776]

**Indication.** Icatibant is indicated for the treatment of acute attacks of hereditary angioedema (HAE) in adults 18 years of age and older.[L49756]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 04:45 | 6:06 | 0/0/0 | 0/0/0 | 0/0/0 | 59,888/3,009 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Wang_2021](drugs/drug_icatibant/Icatibant_Wang2021_shrinkage.md) | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Wang_2021](drugs/drug_icatibant/Icatibant_Wang2021_typical_value.md) | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Wang_2021](drugs/drug_icatibant/Icatibant_Wang2021_typical_value_rse.md) | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellucci_2004.pdf` | Bellucci F et al., The N-terminal of icatibant and bradyki…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.03.031](https://doi.org/10.1016/j.ejphar.2004.03.031) | [15140628](https://www.ncbi.nlm.nih.gov/pubmed/15140628) | metadata signals extractable PD data (EC50) |
| `Meini_2007.pdf` | Meini S et al., Comparative antagonist pharmacology at…, British journal of pharmaco… (2007) | pd | 4 | [10.1038/sj.bjp.0706995](https://doi.org/10.1038/sj.bjp.0706995) | [17179941](https://www.ncbi.nlm.nih.gov/pubmed/17179941) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-09T04:43:15.712865+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellucci_2004 | irrelevant | 0 | 0 | The paper describes receptor binding interactions (mechanistic) and does not report pharmacokinetic parameters for icatibant. |
| PD | Bellucci_2004 | not_relevant | 0 | 0 | The paper focuses on structural interactions between icatibant, bradykinin, and the B2 receptor, reporting no pharmacodynamic or exposure-response data. |
| popPK | Bellucci_2007 | irrelevant | 0 | 0 | The study is an in-vitro receptor characterization and pharmacological binding study, not a pharmacokinetic study, and reports no disposition parameters for icatibant. |
| PD | Bellucci_2007 | not_relevant | 0 | 0 | The paper characterizes kinin receptors in cultured cells using radioligand binding and functional assays (PI accumulation, PGE2 release) for agonists (BK, [desArg9]-Lys-BK); icatibant is only used as a reference antagonist in binding inhibition studies, and no exposure-response or dose-response PD model for icatibant is reported. |
| popPK | Bellucci_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of bradykinin B2 receptor antagonism in synovial fibroblasts and does not report any pharmacokinetic parameters for icatibant. |
| popPK | Bentley_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bradykinin receptor function using icatibant as a competitive antagonist, not a pharmacokinetic study. |
| popPK | Brosnihan_1998 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology paper on Angiotensin-(1-7) vasodilation where icatibant is used only as a receptor antagonist tool, with no PK parameters reported. |
| PD | Brosnihan_1998 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of Angiotensin-(1-7); icatibant is only mentioned as a qualitative antagonist used to confirm the mechanism of action, with no dose-response or exposure-response data provided for icatibant itself. |
| popPK | Chrétien_1998 | irrelevant | 0 | 0 | The study is a mechanistic investigation of bradykinin receptor signaling in bovine cells where icatibant is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| popPK | Meini_2007 | irrelevant | 0 | 0 | The paper describes in-vitro radioligand binding and smooth muscle contractility studies, not pharmacokinetic disposition parameters for icatibant. |
| PD | Meini_2007 | not_relevant | 0 | 0 | The paper focuses on comparative antagonist pharmacology at the mouse bradykinin B2 receptor and does not mention icatibant or report any exposure-response or dose-response data for it. |
| PGx | Montinaro_2020 | not_relevant | 2 | 0 | The text mentions a potential ethnic predisposition to icatibant efficacy but does not report specific pharmacogenomic data (gene variants) or quantitative PK/PD parameters. |
| popPK | Ochodnický_2013 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study using icatibant as a B2 receptor antagonist to block bradykinin signaling, and it does not report any pharmacokinetic parameters for icatibant. |
| popPK | Wiernas_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bradykinin receptors in corneal cells, not a pharmacokinetic study, and icatibant is used only as a receptor antagonist probe. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_icatibant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
