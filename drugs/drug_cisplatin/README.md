# cisplatin

- **generic name:** cisplatin
- **ATC codes:** `L01XA01`
- **DrugBank:** [DB00515](https://go.drugbank.com/drugs/DB00515)
- **groups:** approved, investigational

## About

**Description.** Cisplatin, cisplatinum or cis-diamminedichloroplatinum(II) (CDDP) is a platinum-based chemotherapy drug used to treat various types of cancers, including sarcomas, some carcinomas (e.g. small cell lung cancer, and ovarian cancer), lymphomas and germ cell tumors. It was the first member of its class, which now also includes carboplatin and oxaliplatin.

**Indication.** For the treatment of metastatic testicular tumors, metastatic ovarian tumors and advanced bladder cancer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 13 | 18/0 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Urien_2004](drugs/drug_cisplatin/Cisplatin_Urien2004_reference.md) | Urien S et al., Population pharmacokinetics of total an…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02082.x](https://doi.org/10.1111/j.1365-2125.2004.02082.x) |

## Coverage

- **PubMed hits:** 274 matched, 60 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Imbs_2016.pdf` | Imbs DC et al., Pharmacokinetic interaction between paz…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-015-2953-y](https://doi.org/10.1007/s00280-015-2953-y) | [26779916](https://pubmed.ncbi.nlm.nih.gov/26779916) | The paper explicitly reports a NONMEM-based two-compartment population pharmacokinetic model and quantitative clearance values with interindividual variability for cisplatin in humans. |

<sub>queue written 2026-07-18T01:43:15.596933+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Curtis_2018 | irrelevant | not captured | not captured | The paper presents a mechanistic tumor simulation using adapted intracellular PK models calibrated to in vitro data, without reporting original systemic or population pharmacokinetic parameters for cisplatin. |
| popPK | Duffull_1997 | irrelevant | not captured | not captured | The paper exclusively reports pharmacokinetic parameters for carboplatin and only mentions cisplatin briefly as a clinical comparator without providing any quantitative PK data. |
| popPK | Henningsson_2001 | irrelevant | not captured | not captured | The paper exclusively models paclitaxel pharmacokinetics, mentioning cisplatin only as a concomitant medication with no reported PK parameters. |
| popPK | Le_2019 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for cetuximab, while cisplatin is only mentioned as a co-administered chemotherapy agent with no PK data provided. |
| popPK | Levêque_1996 | irrelevant | not captured | not captured | The paper focuses exclusively on vinorelbine pharmacokinetics, mentioning cisplatin only as a co-administered drug without providing any quantitative PK parameters for it. |
| popPK | Lévi_2000 | irrelevant | not captured | not captured | The paper focuses entirely on oxaliplatin pharmacokinetics and only mentions cisplatin as a comparative reference without providing quantitative PK parameters. |
| popPK | Terranova_2021 | irrelevant | not captured | not captured | The paper focuses on the population pharmacokinetics of berzosertib, with cisplatin only mentioned as a co-administered chemotherapy agent and no quantitative PK parameters reported for it. |
| popPK | Thompson_2024 | irrelevant | not captured | not captured | This is a review article that summarizes existing literature and models without reporting original quantitative pharmacokinetic parameters for cisplatin. |
| popPK | Toso_1995 | irrelevant | not captured | not captured | The paper is a review focused on vinorelbine pharmacokinetics, with cisplatin only mentioned as a co-administered combination partner and no quantitative PK parameters provided for it. |
| popPK | de_2022 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for pemetrexed, with cisplatin only serving as a co-administered drug and context for hyperhydration. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cisplatin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
