<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin lispro&quot;}]"></div>

# insulin lispro

- **generic name:** insulin lispro
- **ATC codes:** `A10AB04`, `A10AB04;A10AD04`, `A10AC04`, `A10AD04`
- **DrugBank:** [DB00046](https://go.drugbank.com/drugs/DB00046)
- **groups:** approved, investigational

## About

**Description.** Insulin lispro is a rapid-acting form of insulin used for the treatment of hyperglycemia caused by Type 1 and Type 2 Diabetes. Insulin is prescribed for the management of diabetes mellitus to mimic the activity of endogenously produced human insulin, a peptide hormone produced by beta cells of the pancreas that promotes glucose metabolism. Insulin is released from the pancreas following a meal to promote the uptake of glucose from the blood into internal organs and tissues such as the liver, fat cells, and skeletal muscle. Absorption of glucose into cells allows for its transformation into glycogen or fat for storage. Insulin also inhibits hepatic glucose production, enhances protein synthesis, and inhibits lipolysis and proteolysis among many other functions.

Insulin is an important treatment in the management of Type 1 Diabetes (T1D) which is caused by an autoimmune reaction that destroys the beta cells of the pancreas, resulting in the body not being able to produce the insulin needed to manage circulating blood sugar levels. As a result, people with T1D rely primarily on exogenous forms of insulin, such as insulin lispro, to lower glucose levels in the blood. Insulin is also used in the treatment of Type 2 Diabetes (T2D), another form of diabetes mellitus that is a slowly progressing metabolic disorder caused by a combination of genetic and lifestyle factors that promote chronically elevated blood sugar levels. Without treatment or improvement in non-pharmacological measures such as diet and exercise to lower blood glucose, high blood sugar eventually cause cellular resistance to endogenous insulin, and in the long term, damage to pancreatic islet cells. Insulin is typically prescribed later in the course of T2D, after several oral medications such as [DB00331], [DB01120], or [DB01261] have been tried, and when sufficient damage has been caused to pancreatic cells that the body is no longer able to produce insulin on its own. 

Marketed as the brand name pr

**Indication.** Insulin lispro is indicated to improve glycemic control in adult and pediatric patients with diabetes mellitus.[L47616]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 15:17 | 2:50 | 0/0/0 | 0/0/0 | 0/0/0 | 16,946/846 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ruan_2014](drugs/drug_insulin_lispro/InsulinLispro_Ruan2014_adults_with_type_2_diabetes.md) | Ruan Y et al., Pharmacokinetics of insulin lispro in t…, Computer methods and progra… (2014) | [10.1016/j.cmpb.2014.07.004](https://doi.org/10.1016/j.cmpb.2014.07.004) |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruan_2014.pdf` | Ruan Y et al., Pharmacokinetics of insulin lispro in t…, Computer methods and progra… (2014) | popPK | 9 | [10.1016/j.cmpb.2014.07.004](https://doi.org/10.1016/j.cmpb.2014.07.004) | [25092225](https://pubmed.ncbi.nlm.nih.gov/25092225) | The study reports quantitative pharmacokinetic parameters (tmax and metabolic clearance rate) for insulin lispro in a compartmental model, with specific numeric values provided in the text. |
| `Tham_2017.pdf` | Tham LS et al., Modeling Pharmacokinetic Profiles of In…, Journal of clinical pharmac… (2017) | popPK | 9 | [10.1002/jcph.899](https://doi.org/10.1002/jcph.899) | [28394405](https://pubmed.ncbi.nlm.nih.gov/28394405) | The paper describes a population PK model for insulin lispro, but the specific numeric parameter values are not present in the provided evidence text. |
| `Shimoda_1997.pdf` | Shimoda S et al., Closed-loop subcutaneous insulin infusi…, Frontiers of medical and bi… (1997) | popPK | 8 | not captured | [9444512](https://pubmed.ncbi.nlm.nih.gov/9444512) | The study develops a three-compartment PK model for insulin lispro, but the specific numeric parameter values (CL, V, Q, ka) are not listed in the provided evidence, only clinical outcomes. |
| `Chang_2025.pdf` | Chang YC et al., Comparing the Efficacy of Various Insul…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70010](https://doi.org/10.1002/jcph.70010) | [39982761](https://www.ncbi.nlm.nih.gov/pubmed/39982761) | metadata signals extractable PD data (PharmacodynamicModel) |

<sub>queue written 2026-09-14T15:16:53.829107+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_2025 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameter values or model details for insulin_lispro. |
| popPK | Hovorka_2004 | irrelevant | 2 | 0 | The paper focuses on a control algorithm for glucose regulation and does not report quantitative pharmacokinetic parameters (CL, V, ka) for insulin lispro. |
| popPK | Ramanathan_2025 | irrelevant | 2 | 0 | The paper uses insulin lispro only as a secondary dataset to validate a diffusion model for antibodies and antipsychotics, and no specific numeric PK parameter values for insulin lispro are provided in the evidence. |
| PGx | Selivanova_2017 | not_relevant | 0 | 0 | The paper describes the biophysical mechanism of amyloid aggregation for insulin lispro and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Shimoda_1997 | relevant | 8 | 2 | The study develops a three-compartment PK model for insulin lispro, but the specific numeric parameter values (CL, V, Q, ka) are not listed in the provided evidence, only clinical outcomes. |
| popPK | Su_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing HbA1c outcomes of insulin lispro mixtures and does not report any pharmacokinetic parameters. |
| popPK | Tham_2017 | relevant | 9 | 0 | The paper describes a population PK model for insulin lispro, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Wilinska_2004 | irrelevant | 1 | 0 | The study focuses on interstitial glucose kinetics and the IG/PG ratio, not the pharmacokinetic disposition parameters (CL, V, ka) of insulin lispro itself. |
| popPK | Woodworth_2004 | irrelevant | 2 | 0 | The study focuses on glucodynamic modeling (blood glucose response) rather than pharmacokinetic disposition parameters (CL, V, ka) for insulin lispro. |
| popPK | de_2015 | relevant | 4 | 8 | The study reports non-compartmental PK parameters (AUC, Cmax, tmax) for insulin lispro, but lacks compartmental model parameters (CL, V, ka) required for population PK extraction. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_insulin_lispro`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
