# piritramide

- **generic name:** piritramide
- **ATC codes:** `N02AC03`
- **DrugBank:** [DB12492](https://go.drugbank.com/drugs/DB12492)
- **groups:** approved, withdrawn

## About

**Description.** Piritramide is under investigation for the treatment of Colon Cancer and Minimal Residual Disease. Piritramide has been investigated for the supportive care of Pain, Postoperative and Postoperative Nausea and Vomiting.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 09:13 | 8:43 | 0/0/0 | 0/0/0 | 0/0/5 | 47,052/2,042 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 4/4 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Bartosova_2022](drugs/drug_piritramide/pgx_Bartosova_2022_ABCB1_Q100.md) | Bartosova O et al., Analgesic effects of piritramide in acu…, Biomedical papers of the Me… (2022) | [10.5507/bp.2020.053](https://doi.org/10.5507/bp.2020.053) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bartosova_2022](drugs/drug_piritramide/pgx_Bartosova_2022_OPRM1_Q100.md) | Bartosova O et al., Analgesic effects of piritramide in acu…, Biomedical papers of the Me… (2022) | [10.5507/bp.2020.053](https://doi.org/10.5507/bp.2020.053) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Bartošová_2015](drugs/drug_piritramide/pgx_Barto_ov_2015_ABCB1_Q100.md) | Bartošová O et al., OPRM1 and ABCB1 polymorphisms and their…, Physiological research (2015) | [10.33549/physiolres.933210](https://doi.org/10.33549/physiolres.933210) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bartošová_2015](drugs/drug_piritramide/pgx_Barto_ov_2015_OPRM1_Q100.md) | Bartošová O et al., OPRM1 and ABCB1 polymorphisms and their…, Physiological research (2015) | [10.33549/physiolres.933210](https://doi.org/10.33549/physiolres.933210) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **MDR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Matouskova_2013](drugs/drug_piritramide/pgx_Matouskova_2013_MDR1_Q100.md) | Matouskova O et al., Impact of MDR1 genetic polymorphisms on…, Bratislavske lekarske listy (2013) | [10.4149/bll_2013_029](https://doi.org/10.4149/bll_2013_029) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 34 matched, 32 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouillon_2003.pdf` | Bouillon T et al., Piritramide and alfentanil display simi…, Acta anaesthesiologica Scan… (2003) | pd | 5 | [10.1046/j.1399-6576.2003.00251.x](https://doi.org/10.1046/j.1399-6576.2003.00251.x) | [14616320](https://www.ncbi.nlm.nih.gov/pubmed/14616320) | metadata signals extractable PD data (PKPD) |

<sub>queue written 2026-08-28T09:10:46.030534+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Branson_2011 | irrelevant | 0 | 0 | The provided evidence contains only a file link and no actual text, data, or pharmacokinetic parameters for piritramide. |
| PD | Branson_2011 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | The provided evidence is only a conference session header with no pharmacokinetic data or text for piritramide. |
| PD | Chase_2012 | not_relevant | 0 | 0 | The provided text is a conference header and file link, containing no scientific content, data, or pharmacodynamic analysis for piritramide. |
| PD | Hinrichs_2017 | not_relevant | 2 | 1 | The text is a critical review summarizing general pharmacokinetic properties (e.g., volume of distribution) and clinical usage statistics, but it does not report specific numeric pharmacodynamic parameters (Emax, EC50) or an exposure-response relationship for piritramide. |
| popPK | Meijer_2020 | irrelevant | 0 | 0 | The study focuses on fentanyl dosing and postoperative pain, with piritramide used only as a rescue analgesic without any pharmacokinetic parameter reporting. |
| PD | Meijer_2020 | not_relevant | 0 | 0 | The paper is a clinical trial comparing dosing strategies for fentanyl and does not report any pharmacodynamic model, exposure-response relationship, or numeric PD parameters for piritramide. |
| PGx | Stamer_2013 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on oxycodone, not piritramide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_piritramide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
