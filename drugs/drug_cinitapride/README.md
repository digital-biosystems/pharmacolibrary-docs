# cinitapride

- **generic name:** cinitapride
- **ATC codes:** `A03FA08`
- **DrugBank:** [DB08810](https://go.drugbank.com/drugs/DB08810)
- **groups:** investigational

## About

**Description.** Cinitapride is a gastroprokinetic agent and antiulcer benzamide with agonist activity at 5-HT1 and 5-HT4 receptors and antagonist activity at 5-HT2 receptors. It is marketed in Spain and Mexico.

**Indication.** It is indicated to treat gastrointestinal disorders associated with motility disturbances like gastroesophageal reflux disease (GERD), non-ulcer dyspepsia and delayed gastric emptying.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 01:36 | 2:46 | 0/0/0 | 0/0/0 | 0/1/0 | 12,909/910 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | **CYP2C8** | `Q22` · CL | metabolism | [Campodónico_2022](drugs/drug_cinitapride/pgx_Campod_nico_2022_CYP2C8_Q22.md) | Campodónico DM et al., CYP2C8*3 and *4 define CYP2C8 phenotype…, Clinical and translational… (2022) | [10.1111/cts.13386](https://doi.org/10.1111/cts.13386) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 8 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2019.pdf` | Zhang X et al., Pharmacokinetics and tolerability of ci…, Xenobiotica; the fate of fo… (2019) | popPK | 10 | [10.1080/00498254.2018.1447710](https://doi.org/10.1080/00498254.2018.1447710) | [29502468](https://pubmed.ncbi.nlm.nih.gov/29502468) | The paper is a primary PK study for cinitapride, but the specific numeric parameter values (CL, V, t1/2, etc.) are not present in the provided abstract text. |
| `Robert_2007.pdf` | Robert M et al., The prokinetic cinitapride has no clini…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.010835](https://doi.org/10.1124/dmd.106.010835) | [17437965](https://www.ncbi.nlm.nih.gov/pubmed/17437965) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-11T01:36:01.569399+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hassan_2019 | not_relevant | 0 | 0 | The paper focuses on drug repositioning for Alzheimer's disease and does not report pharmacogenomic effects on the PK or PD parameters of cinitapride. |
| popPK | Marcelín-Jiménez_2017 | irrelevant | 2 | 0 | The paper describes a method development and an interaction trial conclusion without reporting specific quantitative PK parameters (CL, V, etc.) for cinitapride in the provided evidence. |
| popPK | Massingham_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cinitapride's mechanism of action on guinea-pig ileum, reporting potency (EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Rehman_2018 | irrelevant | 0 | 0 | The study focuses on the formulation and physico-chemical characterization of mouth-dissolving tablets, reporting no pharmacokinetic parameters or quantitative disposition data for cinitapride. |
| PGx | Robert_2007 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (ketoconazole) and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Saleem_2025 | irrelevant | 2 | 0 | The study reports in-silico PBPK simulation outputs (Cmax, AUC) for a formulation rather than quantitative population pharmacokinetic parameters (CL, V, Q, ka) for cinitapride. |
| popPK | Zhang_2019 | relevant | 10 | 0 | The paper is a primary PK study for cinitapride, but the specific numeric parameter values (CL, V, t1/2, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cinitapride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
