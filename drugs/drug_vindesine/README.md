<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vindesine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vindesine_Nelson1979_patients_with_advanced_cancer&quot;,&quot;label&quot;:&quot;Nelson_1979_patients with advanced cancer&quot;,&quot;href&quot;:&quot;drugs/drug_vindesine/Vindesine_Nelson1979_patients_with_advanced_cancer.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vindesine_Owellen1977_humans&quot;,&quot;label&quot;:&quot;Owellen_1977_humans&quot;,&quot;href&quot;:&quot;drugs/drug_vindesine/Vindesine_Owellen1977_humans.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# vindesine

- **generic name:** vindesine
- **ATC codes:** `L01CA03`
- **DrugBank:** [DB00309](https://go.drugbank.com/drugs/DB00309)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Vinblastine derivative with antineoplastic activity against cancer. Major side effects are myelosuppression and neurotoxicity. Vindesine is used extensively in chemotherapy protocols (antineoplastic combined chemotherapy protocols).

**Indication.** For the treatment of acute leukaemia, malignant lymphoma, Hodgkin's disease, acute erythraemia and acute panmyelosis

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 23:05 | 3:00 | 0/0/0 | 0/0/0 | 0/0/0 | 12,826/1,170 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nelson_1979_patients with advanced cancer](drugs/drug_vindesine/Vindesine_Nelson1979_patients_with_advanced_cancer.md) | Nelson RL et al., Clinical pharmacokinetics of vindesine, Cancer chemotherapy and pha… (1979) | [10.1007/BF00257188](https://doi.org/10.1007/BF00257188) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Owellen_1977_humans](drugs/drug_vindesine/Vindesine_Owellen1977_humans.md) | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | — |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Owellen_1977.pdf` | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | popPK | 10 | not captured | [872088](https://pubmed.ncbi.nlm.nih.gov/872088) | The paper reports quantitative pharmacokinetic parameters (half-lives and volumes) for vindesine in humans, and all numeric values are explicitly present in the provided evidence. |
| `Sethi_1984.pdf` | Sethi VS et al., Pharmacokinetics of vincristine, vinbla…, Cancer chemotherapy and pha… (1984) | popPK | 10 | [10.1007/BF00255905](https://doi.org/10.1007/BF00255905) | [6690071](https://pubmed.ncbi.nlm.nih.gov/6690071) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for vindesine in rhesus monkeys, with all numeric values explicitly present in the text. |
| `Zhu_2014.pdf` | Zhu RH et al., Validated HILIC-MS/MS assay for determi…, Journal of pharmaceutical a… (2014) | popPK | 10 | [10.1016/j.jpba.2014.03.017](https://doi.org/10.1016/j.jpba.2014.03.017) | [24721203](https://pubmed.ncbi.nlm.nih.gov/24721203) | The paper describes a population pharmacokinetic study of vindesine, but the provided evidence contains only the abstract/methodology details and lacks the specific numeric PK parameter values (CL, V, etc.). |
| `Nelson_1979.pdf` | Nelson RL et al., Clinical pharmacokinetics of vindesine, Cancer chemotherapy and pha… (1979) | popPK | 9 | [10.1007/BF00257188](https://doi.org/10.1007/BF00257188) | [455583](https://pubmed.ncbi.nlm.nih.gov/455583) | The paper reports quantitative pharmacokinetic parameters (half-lives and qualitative volume descriptions) for vindesine in humans, but specific numeric values for clearance and volumes are not explicitly listed in the provided text. |

<sub>queue written 2026-09-15T23:05:07.733560+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ibrahim_2023 | not_relevant | 0 | 0 | The paper is an in-silico study on ABCB1 binding affinities and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Merighi_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug sensitization in cell lines and does not report pharmacokinetic parameters for vindesine. |
| PGx | Sertel_2011 | not_relevant | 0 | 0 | The paper discusses molecular docking and general cytotoxicity/resistance mechanisms of vinca alkaloids but does not report specific pharmacogenomic effects (gene variants) on PK or PD parameters for vindesine. |
| PGx | Sinha_2003 | not_relevant | 0 | 0 | The paper investigates proteomic changes in melanoma cell lines resistant to vindesine, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Takigawa_2008 | not_relevant | 0 | 0 | The text is a general introduction to vinca alkaloids and MDR1 polymorphisms, mentioning vincristine PK studies but providing no specific data or results for vindesine. |
| popPK | Toso_1995 | irrelevant | 0 | 0 | The paper is a review of vinorelbine, and vindesine is only mentioned as a comparator agent without any specific pharmacokinetic parameters reported for it. |
| PGx | Tsuruo_1981 | not_relevant | 0 | 0 | The study examines drug sensitivity differences between tumor cell lines and metastases, not the effect of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper investigates vinblastine metabolism and mentions vindesine only as a CYP3A inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Zhou_2018 | not_relevant | 3 | 2 | The paper reports a pharmacokinetic interaction (CYP3A5 genotype + CYP3A4 inhibition) causing toxicity, but it is a case report without quantitative PK parameter measurements or fitted effect sizes. |
| popPK | Zhu_2014 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of vindesine, but the provided evidence contains only the abstract/methodology details and lacks the specific numeric PK parameter values (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vindesine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
