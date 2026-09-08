# nadroparin

- **generic name:** nadroparin
- **ATC codes:** `B01AB06`
- **DrugBank:** [DB08813](https://go.drugbank.com/drugs/DB08813)
- **groups:** approved, investigational

## About

**Description.** Nadroparin is a low molecular weight heparin (LMWH) which, when bound to antithrombin III (ATIII), accelerates the inactivation of factor II and factor Xa. Nadroparin halts the coagulation pathway by inhibiting the activation of thrombin (factor IIa) by factor Xa. The amplification of the fibrin clotting cascade is stopped once factors Xa and IIa are inactivated. It is derived from porcine sources and has a mean molecular size of 5000 daltons. Low molecular weight heparins are less effective at inactivating factor IIa due to their shorter length compared to unfractionated heparin.

**Indication.** Nadroparin is used for prophylaxis of thromboembolic disorders and general surgery in orthopedic surgery, treatment of deep vein thrombosis, prevention of clotting during hemodialysis and treatment of unstable angina and non-Q wave myocardial infarction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 20:29 | 8:34 | 3/3/0 | 1/0/0 | 0/0/0 | 98,703/19,325 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2024](drugs/drug_nadroparin/Nadroparin_Chen2024_reference.md) | Chen Y et al., Is the current therapeutic dosage of na…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1331673](https://doi.org/10.3389/fphar.2024.1331673) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Diepstraten_2015](drugs/drug_nadroparin/Nadroparin_Diepstraten2015_reference.md) | Diepstraten J et al., Population pharmacodynamic model for lo…, European journal of clinica… (2015) | [10.1007/s00228-014-1760-4](https://doi.org/10.1007/s00228-014-1760-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jaspers_2022](drugs/drug_nadroparin/Nadroparin_Jaspers2022_reference.md) | Jaspers TCC et al., Optimising the Nadroparin Dose for Thro…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01162-x](https://doi.org/10.1007/s40262-022-01162-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Laporte_1999](drugs/drug_nadroparin/Nadroparin_Laporte1999_reference.md) | Laporte S et al., Population pharmacokinetic of nadropari…, European journal of pharmac… (1999) | [10.1016/s0928-0987(98)00064-5](https://doi.org/10.1016/s0928-0987(98)00064-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Piwowarczyk_2023](drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_estimate_unit.md) | Piwowarczyk P et al., Population Pharmacokinetics and Probabi…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01244-4](https://doi.org/10.1007/s40262-023-01244-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Piwowarczyk_2023](drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_shrinkage.md) | Piwowarczyk P et al., Population Pharmacokinetics and Probabi…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01244-4](https://doi.org/10.1007/s40262-023-01244-4) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jaspers_2022](drugs/drug_nadroparin/pd_Jaspers_2022_anti_Xa.md) | Jaspers TCC et al., Optimising the Nadroparin Dose for Thro…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01162-x](https://doi.org/10.1007/s40262-022-01162-x) |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 3  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Laporte_1999.pdf` | Laporte S et al., Population pharmacokinetic of nadropari…, European journal of pharmac… (1999) | popPK | 10 | [10.1016/s0928-0987(98)00064-5](https://doi.org/10.1016/s0928-0987(98)00064-5) | [10210734](https://pubmed.ncbi.nlm.nih.gov/10210734) | The text explicitly provides the quantitative population PK model equations for apparent clearance and volume of distribution for nadroparin. |
| `Romano_2023.pdf` | Romano LGR et al., Population pharmacokinetics of nadropar…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15634](https://doi.org/10.1111/bcp.15634) | [36495312](https://pubmed.ncbi.nlm.nih.gov/36495312) | The paper is a population PK study of nadroparin, but the specific numeric parameter values (e.g., typical CL, V, ka) are not present in the provided abstract text. |
| `Diepstraten_2015.pdf` | Diepstraten J et al., Population pharmacodynamic model for lo…, European journal of clinica… (2015) | popPK | 9 | [10.1007/s00228-014-1760-4](https://doi.org/10.1007/s00228-014-1760-4) | [25304008](https://pubmed.ncbi.nlm.nih.gov/25304008) | The paper reports a population model for nadroparin with explicit numeric values for clearance (CL=23.0 mL/min) and central volume (V1=7.0 L) in the abstract. |

<sub>queue written 2026-09-05T20:20:53.458612+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Romano_2023 | relevant | 10 | 2 | The paper is a population PK study of nadroparin, but the specific numeric parameter values (e.g., typical CL, V, ka) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nadroparin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
