# codeine and paracetamol

- **generic name:** codeine and paracetamol
- **ATC codes:** `N02AJ06`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 14:32 | 11:43 | 0/0/0 | 0/0/0 | 0/0/1 | 101,179/5,892 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 5/2 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Poikola_2025](drugs/drug_codeine_and_paracetamol/pgx_Poikola_2025_CYP2D6_Q100.md) | Poikola S et al., Does cytochrome 2D6 genotype affect the…, Acta anaesthesiologica Scan… (2025) | [10.1111/aas.14549](https://doi.org/10.1111/aas.14549) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 38 matched, 36 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khan_2018.pdf` | Khan A et al., Prevalence of selected pharmaceuticals…, Environmental monitoring an… (2018) | pd | 4 | [10.1007/s10661-018-6683-6](https://doi.org/10.1007/s10661-018-6683-6) | [29728779](https://www.ncbi.nlm.nih.gov/pubmed/29728779) | metadata signals extractable PD data (EC50) |
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 | not captured | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Vevelstad_2009.pdf` | Vevelstad M et al., O-demethylation of codeine to morphine…, European journal of clinica… (2009) | pgx | 5 | [10.1007/s00228-009-0640-9](https://doi.org/10.1007/s00228-009-0640-9) | [19308365](https://www.ncbi.nlm.nih.gov/pubmed/19308365) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T14:29:49.675133+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lyngstad_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical efficacy trial measuring pain relief outcomes, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for codeine or paracetamol. |
| popPK | Lyngstad_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial assessing analgesic efficacy (pain scores) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for codeine or paracetamol. |
| PD | Lyngstad_2023 | not_relevant | 2 | 0 | The study is a fixed-dose clinical trial comparing different drug combinations; it reports aggregate clinical outcomes (SPI, SPID) but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | McQuay_1998 | irrelevant | 0 | 0 | The paper is a systematic review of analgesic efficacy and safety, not a pharmacokinetic study, and contains no quantitative PK parameters for codeine and paracetamol. |
| PD | McQuay_1998 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials for postoperative analgesia and does not report primary pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for codeine and paracetamol. |
| PGx | Pieczarka_2026 | not_relevant | 2 | 5 | The paper reports an association between CYP2D6 and codeine dose (a prescription proxy), but does not report a pharmacokinetic or pharmacodynamic parameter (e.g., AUC, Cmax, effect magnitude) for codeine_and_paracetamol. |
| popPK | Rodieux_2018 | irrelevant | 0 | 0 | The paper is a review focused on tramadol pharmacokinetics and safety in children, with codeine mentioned only as a comparator or context for regulatory changes, and no quantitative PK parameters for codeine_and_paracetamol are reported. |
| PD | Rodieux_2018 | not_relevant | 1 | 0 | The paper is a review of tramadol prescribing in children and discusses codeine only in the context of safety warnings and CYP2D6 metabolism; it does not report any numeric pharmacodynamic parameters or exposure-response relationships for codeine and paracetamol. |
| PGx | Rodieux_2018 | not_relevant | 0 | 0 | The paper focuses on tramadol pharmacogenetics and safety in children, not codeine_and_paracetamol. |
| popPK | Smith_2001 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis reporting NNT and pain relief percentages, not a pharmacokinetic study with disposition parameters. |
| popPK | Zhang_1996 | irrelevant | 0 | 0 | The paper is a meta-analysis of analgesic efficacy (pain relief scores) and does not report pharmacokinetic parameters such as clearance or volume. |
| PD | Zhang_1996 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials that explicitly states there was no significant dose-response relationship and does not provide pharmacokinetic data or numeric PD parameters (Emax, EC50) for codeine and paracetamol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_codeine_and_paracetamol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
