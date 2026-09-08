# dihydrocodeine, combinations

- **generic name:** dihydrocodeine, combinations
- **ATC codes:** `N02AA58`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 20:17 | 6:05 | 0/0/0 | 0/0/0 | 0/0/2 | 604/5,079 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/0 | 8/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q3` · CLint | metabolism | [Kirkwood_1997](drugs/drug_dihydrocodeine_combinations/pgx_Kirkwood_1997_CYP2D6_Q3.md) | Kirkwood LC et al., Characterization of the human cytochrom…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.t01-1-00626.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00626.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q88` · AUC | formation | [Wilder-Smith_1998](drugs/drug_dihydrocodeine_combinations/pgx_Wilder_Smith_1998_CYP2D6_Q88.md) | Wilder-Smith CH et al., The visceral and somatic antinociceptiv…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00727.x](https://doi.org/10.1046/j.1365-2125.1998.00727.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 54 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fromm_1995.pdf` | Fromm MF et al., Dihydrocodeine: a new opioid substrate…, Clinical pharmacology and t… (1995) | pgx | 8 | [10.1016/0009-9236(95)90049-7](https://doi.org/10.1016/0009-9236(95)90049-7) | [7586928](https://www.ncbi.nlm.nih.gov/pubmed/7586928) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Leppert_2011.pdf` | Leppert W, CYP2D6 in the metabolism of opioids for…, Pharmacology (2011) | pgx | 8 | [10.1159/000326085](https://doi.org/10.1159/000326085) | [21494059](https://www.ncbi.nlm.nih.gov/pubmed/21494059) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Schmidt_2003.pdf` | Schmidt H et al., The role of active metabolites in dihyd…, International journal of cl… (2003) | pgx | 8 | [10.5414/cpp41095](https://doi.org/10.5414/cpp41095) | [12665158](https://www.ncbi.nlm.nih.gov/pubmed/12665158) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Shimizu_2018.pdf` | Shimizu M et al., Dihydrocodeine Overdoses in a Neonate a…, Therapeutic drug monitoring (2018) | pgx | 8 | [10.1097/FTD.0000000000000482](https://doi.org/10.1097/FTD.0000000000000482) | [29389842](https://www.ncbi.nlm.nih.gov/pubmed/29389842) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 | not captured | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hosseinnejad_2019.pdf` | Hosseinnejad K et al., Lack of Influence by CYP3A4 and CYP3A5…, The journal of applied labo… (2019) | pgx | 5 | [10.1373/jalm.2018.026070](https://doi.org/10.1373/jalm.2018.026070) | [31639687](https://www.ncbi.nlm.nih.gov/pubmed/31639687) | metadata signals extractable PGX data (CYP3A4) |
| `Schmidt_2002.pdf` | Schmidt H et al., Affinities of dihydrocodeine and its me…, Pharmacology & toxicology (2002) | pgx | 5 | [10.1034/j.1600-0773.2002.910203.x](https://doi.org/10.1034/j.1600-0773.2002.910203.x) | [12420793](https://www.ncbi.nlm.nih.gov/pubmed/12420793) | metadata signals extractable PGX data (CYP2D6) |
| `Susce_2006.pdf` | Susce MT et al., Response to hydrocodone, codeine and ox…, Progress in neuro-psychopha… (2006) | pgx | 5 | [10.1016/j.pnpbp.2006.03.018](https://doi.org/10.1016/j.pnpbp.2006.03.018) | [16631290](https://www.ncbi.nlm.nih.gov/pubmed/16631290) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T20:16:43.312885+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ammon_1999 | not_relevant | 0 | 0 | The study only includes CYP2D6 extensive metabolizers and assesses dose linearity, failing to compare different genotypes or report a pharmacogenomic effect. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype-phenotype classifications (e.g., poor/intermediate metabolizer) and prevalence in a cohort, but does not report measured changes in specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pain scores) for dihydrocodeine or its combinations. |
| PGx | Leppert_2016 | not_relevant | 2 | 0 | The paper is a general safety review that mentions CYP2D6 phenotypes qualitatively but does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| PGx | Sobczak_2020 | not_relevant | 2 | 0 | The paper is a review on drug misuse that qualitatively mentions CYP2D6 polymorphisms affecting codeine metabolism, but it does not report specific quantitative pharmacogenomic effect sizes or fitted parameters for dihydrocodeine combinations. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dihydrocodeine_combinations`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
