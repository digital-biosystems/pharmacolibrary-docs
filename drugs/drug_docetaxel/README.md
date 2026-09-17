<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;docetaxel&quot;}]"></div>

# docetaxel

- **generic name:** docetaxel
- **ATC codes:** `L01CD02`
- **DrugBank:** [DB01248](https://go.drugbank.com/drugs/DB01248)
- **groups:** approved, investigational

## About

**Description.** Docetaxel is a clinically well established anti-mitotic chemotherapy medication used for the treatment of different types of cancer, including breast, ovarian, and non-small cell lung cancer. Docetaxel is a complex diterpenoid molecule and a semisynthetic analogue of [paclitaxel].[A259676,L46466] Docetaxel reversibly binds to microtubulin with high affinity in a 1:1 stoichiometric ratio, allowing it to prevent cell division and promote to cell death.[A259676] Compared to paclitaxel, docetaxel is two times more potent as an inhibitor of microtubule depolymerization. Docetaxel binds to microtubules but does not interact with dimeric tubulin.[A259671]

The use of docetaxel may lead to udesired outcomes such as hepatic impairment, hematologic effects, enterocolitis and neutropenic colitis, hypersensitivity reactions, fluid retention, second primary malignancies, embryo-fetal toxicity, and tumor lysis syndrome.[L46466] Docetaxel was approved by the FDA in 1996 and is available in solution for injection for intravenous or parenteral administration.[A259676]

**Indication.** Docetaxel is indicated as a single agent for the treatment of locally advanced or metastatic breast cancer after chemotherapy failure; and with doxorubicin and cyclophosphamide as adjuvant treatment of operable node-positive BC. It is also indicated as a single agent for locally advanced or metastatic non-small cell lung cancer (NSCLC) after platinum therapy failure; and with cisplatin for unresectable, locally advanced or metastatic untreated NSCLC. For the treatment of metastatic castration-resistant prostate cancer, docetaxel is indicated with prednisone. Docetaxel is also indicated with cisplatin and fluorouracil for untreated, advanced gastric adenocarcinoma, including the gastroesophageal junction, and with cisplatin and fluorouracil for induction treatment of locally advanced squamous cell carcinoma of the head and neck (SCCHN).[L46466]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 09:17 | 4:28 | 0/0/1 | 0/0/0 | 0/0/0 | 35,982/11,019 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2024](drugs/drug_docetaxel/Docetaxel_Wang2024_reference.md) | Wang D et al., Oral docetaxel plus encequidar - A phar…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09913-y](https://doi.org/10.1007/s10928-024-09913-y) |

## Coverage

- **PubMed hits:** 139 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bruno_2001.pdf` | Bruno R et al., Population pharmacokinetics and pharmac…, Investigational new drugs (2001) | popPK | 10 | [10.1023/a:1010687017717](https://doi.org/10.1023/a:1010687017717) | [11392450](https://pubmed.ncbi.nlm.nih.gov/11392450) | The paper is a definitive population PK study for docetaxel, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text, only a relative change in clearance. |
| `Wei_2022.pdf` | Wei J et al., Docetaxel population pharmacokinetic mo…, Annals of translational med… (2022) | popPK | 10 | [10.21037/atm-22-2619](https://doi.org/10.21037/atm-22-2619) | [35845493](https://pubmed.ncbi.nlm.nih.gov/35845493) | The paper describes a population PK study for docetaxel, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Bruno_1993.pdf` | Bruno R et al., Pharmacokinetics and metabolism of Taxo…, Cancer surveys (1993) | popPK | 9 | not captured | [7907950](https://pubmed.ncbi.nlm.nih.gov/7907950) | The text explicitly reports quantitative disposition parameters for docetaxel in humans, including a terminal half-life of 12 hours and plasma clearance of 21 l/hr/m2. |
| `Clarke_1999.pdf` | Clarke SJ et al., Clinical pharmacokinetics of docetaxel, Clinical pharmacokinetics (1999) | popPK | 9 | [10.2165/00003088-199936020-00002](https://doi.org/10.2165/00003088-199936020-00002) | [10092957](https://pubmed.ncbi.nlm.nih.gov/10092957) | The text explicitly reports quantitative disposition parameters for docetaxel, including half-lives (4.5 min, 38.3 min, 12.2 h), volume of distribution (74 L/m2), and clearance (22 L/h/m2). |
| `Bruno_1997.pdf` | Bruno R et al., Pharmacokinetic and pharmacodynamic pro…, American journal of health-… (1997) | popPK | 8 | [10.1093/ajhp/54.suppl_2.S16](https://doi.org/10.1093/ajhp/54.suppl_2.S16) | [9435928](https://pubmed.ncbi.nlm.nih.gov/9435928) | The paper describes a population PK model for docetaxel but the provided evidence contains only qualitative descriptions and no specific numeric parameter values (e.g., CL, V, Q). |

<sub>queue written 2026-09-15T20:01:52.307701+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bruno_1997 | relevant | 8 | 0 | The paper describes a population PK model for docetaxel but the provided evidence contains only qualitative descriptions and no specific numeric parameter values (e.g., CL, V, Q). |
| popPK | Bruno_2001 | relevant | 10 | 2 | The paper is a definitive population PK study for docetaxel, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text, only a relative change in clearance. |
| popPK | Davies_2012 | irrelevant | 0 | 0 | The study focuses on the preclinical pharmacology of AZD5363, with docetaxel serving only as a comparator agent in combination studies without reporting its PK parameters. |
| PD | Davies_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of AZD5363 and only qualitatively mentions its enhancement of docetaxel activity without providing any exposure-response or dose-response data for docetaxel. |
| popPK | Friberg_2002 | irrelevant | 2 | 0 | The paper focuses on a pharmacodynamic model of myelosuppression and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for docetaxel. |
| popPK | Kenmotsu_2015 | irrelevant | 2 | 0 | The paper is a review discussing dose differences and qualitative PK relationships (e.g., clearance correlates) without reporting specific quantitative PK parameter values (CL, V, etc.) for docetaxel. |
| popPK | Petitcollin_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trastuzumab and bevacizumab, with docetaxel serving only as a co-administered chemotherapy agent without reported PK parameters. |
| PD | Petitcollin_2021 | not_relevant | 0 | 0 | The paper studies the PK/PD of trastuzumab and bevacizumab, not docetaxel, and explicitly states that no relationship between exposure and clinical response was found. |
| popPK | Strother_2008 | irrelevant | 2 | 0 | The paper is a review of docetaxel development and does not report original quantitative pharmacokinetic parameter values in the provided evidence. |
| popPK | Wei_2022 | relevant | 10 | 0 | The paper describes a population PK study for docetaxel, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_docetaxel`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
