# daprodustat

- **generic name:** daprodustat
- **ATC codes:** `B03XA07`
- **DrugBank:** [DB11682](https://go.drugbank.com/drugs/DB11682)
- **groups:** approved, investigational

## About

**Description.** Daprodustat is a small-molecule hypoxia-inducible factor (HIF) prolyl hydroxylase (PHD) inhibitor that was developed by GSK.[A254167,A254162] Patients with CKD cannot induce erythropoietin (EPO) production in response to hypoxia or anemia. As a potent inhibitor of PHD1, PHD2 and PHD3 (≥ 1000-fold selectivity), daprodustat stabilizes cellular HIF1α and HIF2α and the induces erythropoiesis.[A254157] A phase 3 clinical trial (NCT02879305) found that in patients with CKD undergoing dialysis, daprodustat was non-inferior to erythropoiesis-stimulating agents regarding the change in the hemoglobin level from baseline and cardiovascular outcomes.[A254172]

In June 2020, daprodustat was first approved in Japan for the treatment of renal anemia.[A254157] On October 2022, the FDA Cardiovascular and Renal Drugs Advisory Committee (CRDAC) supported that the benefit of treatment with daprodustat outweighs the risks for adult dialysis patients with anemia of CKD but not for non-dialysis patients with anemia of CKD.[L43857] On February 1, 2023, daprodustat was fully approved by the FDA as the first oral treatment for anemia caused by chronic kidney disease in patients on dialysis.[L44963] The drug is currently under EMA review.

**Indication.** Daprodustat is a hypoxia-inducible factor prolyl hydroxylase (HIF PH) inhibitor indicated for the treatment of anemia due to chronic kidney disease in adults who have been receiving dialysis for at least four months.[L44958]

The US prescribing information for daprodustat indicates that the drug was not shown to improve quality of life, fatigue, or patient well-being. It is not advised to be used as a substitute for transfusion in patients requiring immediate correction
of anemia. It is also not indicated in patients not on dialysis.[L44958]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 13:32 | 1:25 | 0/1/0 | 1/0/0 | 0/0/0 | 35,187/567 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/0 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Mahar_2024](drugs/drug_daprodustat/Daprodustat_Mahar2024_reference.md) | Mahar KM et al., Integrated Population Pharmacokinetics…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01417-9](https://doi.org/10.1007/s40262-024-01417-9) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bailey_2019](drugs/drug_daprodustat/pd_Bailey_2019_hemoglobin.md) | Bailey CK et al., A randomized, 29-day, dose-ranging, eff…, BMC nephrology (2019) | [10.1186/s12882-019-1547-z](https://doi.org/10.1186/s12882-019-1547-z) |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahar_2024.pdf` | Mahar KM et al., Integrated Population Pharmacokinetics…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-024-01417-9](https://doi.org/10.1007/s40262-024-01417-9) | [39259485](https://pubmed.ncbi.nlm.nih.gov/39259485) | The paper is a population pharmacokinetic study of daprodustat that explicitly reports quantitative parameters such as oral clearance (24.6 L/h) and volume of distribution (26.9 L) in the text. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-06T20:17:41.885524+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailey_2019 | irrelevant | 2 | 0 | The study is a dose-ranging efficacy trial that mentions PK summaries but does not report quantitative PK parameters (CL, V, t1/2) in the provided text, which focuses on hemoglobin response and dose conversion. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic assay for HIF heterodimerization and reports potency (EC50) data, not pharmacokinetic disposition parameters. |
| popPK | Mahar_2026 | irrelevant | 2 | 0 | The paper is a review/tutorial on model-informed drug development that discusses PopPK qualitatively but does not report specific quantitative PK parameter values (CL, V, Q, ka) for daprodustat in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_daprodustat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
