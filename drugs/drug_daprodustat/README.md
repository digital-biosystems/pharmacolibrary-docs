<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;daprodustat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daprodustat_Mahar2024_reference&quot;,&quot;label&quot;:&quot;Mahar_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daprodustat/Daprodustat_Mahar2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-19 00:49 | 2:22 | 1/0/0 | 1/0/0 | 0/0/0 | 95,953/2,358 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Mahar_2024_reference](drugs/drug_daprodustat/Daprodustat_Mahar2024_reference.md) | Mahar KM et al., Integrated Population Pharmacokinetics…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01417-9](https://doi.org/10.1007/s40262-024-01417-9) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bailey_2019](drugs/drug_daprodustat/pd_Bailey_2019_hemoglobin.md) | Bailey CK et al., A randomized, 29-day, dose-ranging, eff…, BMC nephrology (2019) | [10.1186/s12882-019-1547-z](https://doi.org/10.1186/s12882-019-1547-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=daprodustat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor/substrate, `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…daprodustat, 74% of the radioactivity was recovered in the feces, and 21% of the radioacti…”</sub> | prose |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: EGLN1 (inhibitor), EGLN2 (inhibitor), EGLN3 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahar_2024.pdf` | Mahar KM et al., Integrated Population Pharmacokinetics…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-024-01417-9](https://doi.org/10.1007/s40262-024-01417-9) | [39259485](https://pubmed.ncbi.nlm.nih.gov/39259485) | The paper is a population pharmacokinetic study of daprodustat that explicitly reports quantitative parameters such as oral clearance (24.6 L/h) and volume of distribution (26.9 L) in the text. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-19T00:47:08.582465+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailey_2019 | relevant | 4 | 8 | The paper reports standard non-compartmental PK parameters (Cmax, AUC, t1/2) for daprodustat in Table S5, but lacks compartmental model parameters (CL, V, Q) required for population PK extraction. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic assay for HIF heterodimerization and reports potency (EC50) data, not pharmacokinetic disposition parameters. |
| popPK | Mahar_2026 | relevant | 8 | 2 | The paper describes a population PK model for daprodustat and reports specific covariate effects (e.g., 42% reduction in clearance with clopidogrel), but the primary numeric parameter estimates (CL, V, Q, ka) are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_daprodustat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
