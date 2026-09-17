<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin icodec&quot;}]"></div>

# insulin icodec

- **generic name:** insulin icodec
- **ATC codes:** `A10AE07`
- **DrugBank:** [DB16693](https://go.drugbank.com/drugs/DB16693)
- **groups:** approved, investigational

## About

**Description.** Insulin icodec is an ultra long-acting basal insulin analogue. It is a re-engineered version of the ultra long-acting oral basal insulin OI338, with several modifications introduced to significantly extend the half-life.[A264093] These modifications - which cause increased serum albumin binding and attenuated insulin receptor affinity - result in a mean half-life of approximately 196 hours, allowing for once-weekly administration.[L50758,A263818]

Insulin icodec was approved by Health Canada in March 2024 for the treatment of adult patients with type 1 or 2 diabetes mellitus,[L50758] and was subsequently approved by the EMA in May 2024 for the same indication.[L50763] It has also been approved in Japan and Australia.[L51078] In July 2024, the US FDA rejected the approval of insulin icodec, citing concerns regarding hypoglycemia and the indication being sought for type 1 diabetes mellitus.[L51078]

**Indication.** Insulin icodec is indicated for the once-weekly treatment of adults with diabetes mellitus in order to improve glycemic control.[L50758,L50763]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 15:13 | 4:34 | 0/0/0 | 1/1/0 | 0/0/0 | 122,353/1,977 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eto_2025](drugs/drug_insulin_icodec/pd_Eto_2025_GIR.md) | Eto T et al., Pharmacological characteristics of once…, Journal of diabetes investi… (2025) | [10.1111/jdi.14384](https://doi.org/10.1111/jdi.14384) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lingvay_2025](drugs/drug_insulin_icodec/pd_Lingvay_2025_HbA1c.md) | Lingvay I et al., Pharmacokinetic/Pharmacodynamic Modelin…, Endocrine practice : offici… (2025) | [10.1016/j.eprac.2024.11.009](https://doi.org/10.1016/j.eprac.2024.11.009) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lingvay_2025](drugs/drug_insulin_icodec/pd_Lingvay_2025_SMBG.md) | Lingvay I et al., Pharmacokinetic/Pharmacodynamic Modelin…, Endocrine practice : offici… (2025) | [10.1016/j.eprac.2024.11.009](https://doi.org/10.1016/j.eprac.2024.11.009) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lingvay_2025](drugs/drug_insulin_icodec/pd_Lingvay_2025_resp.md) | Lingvay I et al., Pharmacokinetic/Pharmacodynamic Modelin…, Endocrine practice : offici… (2025) | [10.1016/j.eprac.2024.11.009](https://doi.org/10.1016/j.eprac.2024.11.009) |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hövelmann_2024.pdf` | Hövelmann U et al., Pharmacokinetic and pharmacodynamic pro…, Diabetes, obesity & metabol… (2024) | popPK | 10 | [10.1111/dom.15510](https://doi.org/10.1111/dom.15510) | [38379002](https://pubmed.ncbi.nlm.nih.gov/38379002) | The title confirms the study is about the PK of insulin icodec, but the provided evidence contains no numeric parameter values. |
| `Pieber_2023.pdf` | Pieber TR et al., Pharmacokinetic and pharmacodynamic pro…, Diabetes, obesity & metabol… (2023) | popPK | 10 | [10.1111/dom.15266](https://doi.org/10.1111/dom.15266) | [37694740](https://pubmed.ncbi.nlm.nih.gov/37694740) | The title confirms the study is about the PK/PD of insulin icodec, but the provided evidence contains no numeric parameter values. |

<sub>queue written 2026-09-14T15:12:24.885166+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eto_2025 | relevant | 8 | 2 | The study reports PK parameters for insulin icodec, but specific numeric values for clearance, volume, or half-life are located in supplementary tables (Table S5) and figures not provided in the evidence. |
| popPK | Hubálek_2024 | irrelevant | 4 | 2 | The paper is primarily a mechanistic study on disulphide bond stability and crystal structure, reporting only a terminal half-life (~50h) in minipigs without providing a compartmental model or quantitative clearance/volume parameters. |
| PD | Hubálek_2024 | not_relevant | 0 | 0 | The paper focuses on the structural stability and degradation mechanisms (thiol-disulphide exchange) of insulin icodec, not on pharmacodynamic modeling or exposure-response relationships. |
| popPK | Hövelmann_2024 | relevant | 10 | 0 | The title confirms the study is about the PK of insulin icodec, but the provided evidence contains no numeric parameter values. |
| popPK | Lingvay_2025 | irrelevant | 2 | 0 | The paper is a PK/PD modeling study focused on efficacy and hypoglycemia outcomes, and it does not report quantitative disposition parameters (CL, V, Q, ka) for insulin icodec in the provided text. |
| popPK | Nishimura_2021 | relevant | 9 | 2 | The paper is a primary source for insulin icodec PK/PD properties including a half-life of 196 hours, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided text and are likely in supplementary material or figures. |
| popPK | Pham_2025 | relevant | 4 | 3 | The paper is a review that reports some quantitative PK parameters (half-life 196 h, tmax 16 h, AUC ratios) for insulin icodec, but it lacks a full compartmental model (CL, V, Q, ka) and relies on summarized values from primary trials. |
| popPK | Pieber_2023 | relevant | 10 | 0 | The title confirms the study is about the PK/PD of insulin icodec, but the provided evidence contains no numeric parameter values. |
| PD | Pieber_2023 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Plum-Mörschel_2023 | relevant | 9 | 2 | The paper describes a compartmental PK model for insulin icodec, but the specific numeric parameter values (CL, V, Q, ka) are located in the Online Resource (Table S3) which is not included in the provided evidence. |
| popPK | Rosenstock_2022 | irrelevant | 0 | 0 | The paper is a review of investigational once-weekly insulins and does not report original quantitative pharmacokinetic parameters for insulin icodec. |
| PD | Rosenstock_2022 | not_relevant | 1 | 0 | The text is a narrative review discussing the molecular strategies and clinical development status of once-weekly insulins, without reporting specific pharmacodynamic models, exposure-response analyses, or numeric PD parameters. |
| PGx | Rosenstock_2022 | not_relevant | 0 | 0 | The paper is a review of once-weekly insulin development and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Rosenstock_2024 | irrelevant | 0 | 0 | The paper is a prescribing information document for insulin degludec (TRESIBA), not insulin icodec, and contains no PK parameters for the target drug. |
| PD | Rosenstock_2024 | not_relevant | 0 | 0 | The provided text is the prescribing information for insulin degludec (Tresiba), not insulin icodec, and contains no numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Tou_2026 | irrelevant | 2 | 1 | The study focuses on a novel insulin analog (LPJT-026) with insulin icodec serving only as a comparator, and no specific quantitative PK parameters (CL, V, ka) for insulin icodec are reported. |
| PD | Tou_2026 | not_relevant | 2 | 1 | The paper reports qualitative PK/PD profiles (duration of effect, mortality rates) and PK parameters (AUC, t1/2) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship for insulin icodec. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_insulin_icodec`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
