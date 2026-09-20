<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;granisetron&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Granisetron_Addelman1990_reference&quot;,&quot;label&quot;:&quot;Addelman_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_granisetron/Granisetron_Addelman1990_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Granisetron_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_granisetron/Granisetron_Li2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-18 12:13 | 1:05 | 0/1/1 | 0/0/0 | 0/0/0 | 26,413/1,234 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Addelman_1990_reference](drugs/drug_granisetron/Granisetron_Addelman1990_reference.md) | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Li_2023_reference](drugs/drug_granisetron/Granisetron_Li2023_reference.md) | Li J et al., Population pharmacokinetic analysis of…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1154026](https://doi.org/10.3389/fphar.2023.1154026) |

## Coverage

- **PubMed hits:** 40 matched, 18 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Addelman_1990.pdf` | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | popPK | 9 | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) | [2153767](https://pubmed.ncbi.nlm.nih.gov/2153767) | The paper reports quantitative pharmacokinetic parameters (AUC, clearance) for granisetron in a human study, with values explicitly listed in the text. |
| `Howell_2009.pdf` | Howell J et al., Pharmacokinetics of a granisetron trans…, Journal of oncology pharmac… (2009) | popPK | 9 | [10.1177/1078155209104063](https://doi.org/10.1177/1078155209104063) | [19304880](https://pubmed.ncbi.nlm.nih.gov/19304880) | The paper reports a population PK study for granisetron with some numeric values (Cmax, t1/2, AUC) in the abstract, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-18T12:13:08.379485+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Artaiz_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of VA21B7 in animal models, using granisetron only as a comparator agent without reporting any pharmacokinetic parameters. |
| popPK | Howell_2009 | relevant | 9 | 4 | The paper reports a population PK study for granisetron with some numeric values (Cmax, t1/2, AUC) in the abstract, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided text. |
| popPK | Jarvis_2016 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology and binding study of 5-HT3 receptor inhibitors, using granisetron only as a fluorescent ligand for competition assays, and reports no pharmacokinetic parameters for granisetron. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | Granisetron is used as a comparator antiemetic to assess gastrointestinal motility via FDG-PET, not as the subject drug for PK parameter estimation. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin, with granisetron serving only as a co-administered antiemetic comparator rather than the subject drug. |
| PD | Thompson_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for cisplatin nephrotoxicity, not for granisetron; granisetron is only mentioned as a covariate (antiemetic type) affecting cisplatin PK parameters. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin (platinum), with granisetron serving only as a co-administered antiemetic comparator rather than the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_granisetron`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
