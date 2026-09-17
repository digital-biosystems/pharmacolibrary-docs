<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;bendamustine&quot;}]"></div>

# bendamustine

- **generic name:** bendamustine
- **ATC codes:** `L01AA09`
- **DrugBank:** [DB06769](https://go.drugbank.com/drugs/DB06769)
- **groups:** approved, investigational

## About

**Description.** Bendamustine is a nitrogen mustard drug which has been used in the treatment of chronic lymphocytic leukemia (CLL) and indolent B-cell non-Hodgkin lymphoma (NHL).  Bendamustine is a bifunctional mechlorethamine derivative capable of forming electrophilic alkyl groups that covalently bond to other molecules. Through this function as an alkylating agent, bendamustine causes intra- and inter-strand crosslinks between DNA bases resulting in cell death.  It is active against both active and quiescent cells, although the exact mechanism of action is unknown.

**Indication.** Bendamustine is indicated for use in the treatment of  indolent B-cell non-Hodgkin lymphoma (NHL) that has progressed during or within six months of treatment with [rituximab] or a rituximab-containing regimen.[L50632]

The indication for chronic lymphocytic leukemia (CLL) was removed from the US drug label in April 2024.[L50632]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 02:24 | 3:27 | 1/0/0 | 0/0/0 | 0/0/0 | 40,330/6,182 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Kim_2018](drugs/drug_bendamustine/Bendamustine_Kim2018_reference.md) | Kim T et al., Clinical response and pharmacokinetics…, BMC cancer (2018) | [10.1186/s12885-018-4632-y](https://doi.org/10.1186/s12885-018-4632-y) |

## Coverage

- **PubMed hits:** 15 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Darwish_2014.pdf` | Darwish M et al., Population pharmacokinetics and pharmac…, Current medical research an… (2014) | popPK | 10 | [10.1185/03007995.2014.941976](https://doi.org/10.1185/03007995.2014.941976) | [25105914](https://pubmed.ncbi.nlm.nih.gov/25105914) | The paper is a population PK study of bendamustine in pediatric patients and provides specific quantitative parameters including half-lives (t½α, t½β), Cmax, and AUC directly in the text. |
| `Owen_2010.pdf` | Owen JS et al., Bendamustine pharmacokinetic profile an…, Cancer chemotherapy and pha… (2010) | popPK | 9 | [10.1007/s00280-010-1254-8](https://doi.org/10.1007/s00280-010-1254-8) | [20140617](https://pubmed.ncbi.nlm.nih.gov/20140617) | The paper is a primary PK study for bendamustine, but the evidence only provides a half-life (40 min) and qualitative descriptions, lacking the specific numeric values for clearance, volume, or other compartmental parameters required for extraction. |
| `Purvis_2023.pdf` | Purvis KN et al., Pharmacokinetics and safety of bendamus…, Cancer chemotherapy and pha… (2023) | popPK | 9 | [10.1007/s00280-023-04540-9](https://doi.org/10.1007/s00280-023-04540-9) | [37199744](https://pubmed.ncbi.nlm.nih.gov/37199744) | The study is a population PK analysis of bendamustine, but the evidence only provides summary statistics (AUC, Cmax) and qualitative covariate effects, lacking specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-09-15T02:22:17.143652+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bagacean_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rituximab, not bendamustine, which is only mentioned as a co-administered chemotherapy agent. |
| popPK | Gibiansky_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of obinutuzumab, with bendamustine serving only as a co-administered agent in the treatment regimen. |
| popPK | Gisleskog_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibrutinib, with bendamustine serving only as a co-administered comparator agent in the background therapy. |
| PD | Gisleskog_2025 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for ibrutinib, not bendamustine, and does not provide numeric PD parameters for bendamustine. |
| popPK | Jamois_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of obinutuzumab, with bendamustine serving only as a chemotherapy comparator agent. |
| popPK | Lavezzi_2019 | irrelevant | 2 | 0 | The study focuses on rituximab PK modeling and only states that bendamustine exposure was comparable without providing quantitative PK parameters for bendamustine. |
| popPK | Liao_2024 | irrelevant | 0 | 0 | The paper focuses on the clinical pharmacology of polatuzumab vedotin, with bendamustine serving only as a co-administered comparator agent in the treatment regimen, and no PK parameters for bendamustine are reported. |
| popPK | Owen_2010 | relevant | 9 | 2 | The paper is a primary PK study for bendamustine, but the evidence only provides a half-life (40 min) and qualitative descriptions, lacking the specific numeric values for clearance, volume, or other compartmental parameters required for extraction. |
| PD | Owen_2010 | not_relevant | 3 | 1 | The study reports a significant correlation between Cmax and nausea probability but explicitly states no correlation was observed for efficacy or other safety measures due to limited exposure range, and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| popPK | Purvis_2023 | relevant | 9 | 4 | The study is a population PK analysis of bendamustine, but the evidence only provides summary statistics (AUC, Cmax) and qualitative covariate effects, lacking specific numeric values for clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bendamustine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
