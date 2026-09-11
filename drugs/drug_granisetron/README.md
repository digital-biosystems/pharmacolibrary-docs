# granisetron

- **generic name:** granisetron
- **ATC codes:** `A04AA02`
- **DrugBank:** [DB00889](https://go.drugbank.com/drugs/DB00889)
- **groups:** approved, investigational

## About

**Description.** A serotonin receptor (5HT-3 selective) antagonist that has been used as an antiemetic and antinauseant for cancer chemotherapy patients.

**Indication.** For the prevention of nausea and vomiting associated with initial and repeat courses of emetogenic cancer therapy (including high dose cisplatin), postoperation, and radiation (including total body irradiation and daily fractionated abdominal radiation).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:53 | 2:28 | 0/3/0 | 0/0/0 | 0/0/0 | 28,451/4,054 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Addelman_1990](drugs/drug_granisetron/Granisetron_Addelman1990_reference.md) | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Howell_2009](drugs/drug_granisetron/Granisetron_Howell2009_reference.md) | Howell J et al., Pharmacokinetics of a granisetron trans…, Journal of oncology pharmac… (2009) | [10.1177/1078155209104063](https://doi.org/10.1177/1078155209104063) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Li_2023](drugs/drug_granisetron/Granisetron_Li2023_reference.md) | Li J et al., Population pharmacokinetic analysis of…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1154026](https://doi.org/10.3389/fphar.2023.1154026) |

## Coverage

- **PubMed hits:** 40 matched, 18 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Howell_2009.pdf` | Howell J et al., Pharmacokinetics of a granisetron trans…, Journal of oncology pharmac… (2009) | popPK | 10 | [10.1177/1078155209104063](https://doi.org/10.1177/1078155209104063) | [19304880](https://pubmed.ncbi.nlm.nih.gov/19304880) | The paper reports a population PK analysis for granisetron and provides specific quantitative values for Cmax, t1/2, AUC, and Cavg in the abstract. |
| `Addelman_1990.pdf` | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | popPK | 9 | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) | [2153767](https://pubmed.ncbi.nlm.nih.gov/2153767) | The paper reports quantitative pharmacokinetic parameters (AUC, total body clearance) and a two-compartment model description for granisetron in humans. |

<sub>queue written 2026-09-11T02:51:48.535933+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Artaiz_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of VA21B7 in animal models, using granisetron only as a comparator agent without reporting any pharmacokinetic parameters. |
| popPK | Jarvis_2016 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology and binding study of 5-HT3 receptor inhibitors, using granisetron only as a fluorescent ligand for competition assays, and reports no pharmacokinetic parameters for granisetron. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | Granisetron is used as a comparator antiemetic to assess gastrointestinal motility via FDG-PET, not as the subject drug for PK parameter estimation. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin, with granisetron serving only as a covariate/comparator for antiemetic effects, and no PK parameters for granisetron are reported. |
| PD | Thompson_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for cisplatin nephrotoxicity, not for granisetron; granisetron is only mentioned as a covariate (antiemetic type) affecting cisplatin PK parameters. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin (platinum), with granisetron serving only as a co-administered antiemetic comparator rather than the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_granisetron`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
