<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glargine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinGlargine_Tham2017_reference&quot;,&quot;label&quot;:&quot;Tham_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_glargine/InsulinGlargine_Tham2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# insulin glargine

- **generic name:** insulin glargine
- **ATC codes:** `A10AE04`, `A10AE54`
- **DrugBank:** [DB00047](https://go.drugbank.com/drugs/DB00047)
- **groups:** approved, investigational

## About

**Description.** Insulin glargine is a long-acting form of insulin used for the treatment of hyperglycemia caused by Type 1 and Type 2 Diabetes. Insulin is typically prescribed for the management of diabetes mellitus to mimic the activity of endogenously produced human insulin, a peptide hormone produced by beta cells of the pancreas that promotes glucose metabolism. Insulin is released from the pancreas following a meal to promote the uptake of glucose from the blood into internal organs and tissues such as the liver, fat cells, and skeletal muscle. Absorption of glucose into cells allows for its transformation into glycogen or fat for storage. Insulin also inhibits hepatic glucose production, enhances protein synthesis, and inhibits lipolysis and proteolysis.

Insulin is an important treatment in the management of Type 1 Diabetes (T1D), which is caused by an autoimmune reaction that destroys the beta cells of the pancreas, resulting in the body not being able to produce or synthesize the insulin needed to manage circulating blood sugar levels. As a result, people with T1D rely primarily on exogenous forms of insulin, such as insulin glargine, to lower glucose levels in the blood. Insulin is also used in the treatment of Type 2 Diabetes (T2D), another form of diabetes mellitus that is a slowly progressing metabolic disorder caused by a combination of genetic and lifestyle factors that promote chronically elevated blood sugar levels. Without treatment or improvement in non-pharmacological measures such as diet and exercise to lower blood glucose, high blood sugar eventually causes cellular resistance to endogenous insulin, and in the long term, damage to pancreatic islet cells. Insulin is typically prescribed later in the course of T2D, after several oral medications such as [DB00331], [DB01120], or [DB01261] have been tried, when sufficient damage has been caused to pancreatic cells that the body is no longer able to produce insulin on its own. 

Available as the brand name pro

**Indication.** Insulin glargine is indicated to improve glycemic control in adults and pediatric patients with type 1 diabetes mellitus and in adults with type 2 diabetes mellitus.[L12474,L43532,L43587]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 04:42 | 8:43 | 0/1/0 | 0/1/0 | 0/0/0 | 102,515/9,790 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/1 | 5/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Tham_2017_reference](drugs/drug_insulin_glargine/InsulinGlargine_Tham2017_reference.md) | Tham LS et al., Modeling Pharmacokinetic Profiles of In…, Journal of clinical pharmac… (2017) | [10.1002/jcph.899](https://doi.org/10.1002/jcph.899) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Sommerfeld_2010](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_unknown.md) | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_glargine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IGF1R (activator), INS (modulator), INSR (target).</sub>

## Coverage

- **PubMed hits:** 20 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faggionato_2021.pdf` | Faggionato E et al., Modeling Between-Subject Variability in…, Annual International Confer… (2021) | popPK | 9 | [10.1109/EMBC46164.2021.9629554](https://doi.org/10.1109/EMBC46164.2021.9629554) | [34892156](https://pubmed.ncbi.nlm.nih.gov/34892156) | The paper describes a population PK model for insulin glargine, but the specific numeric parameter values are not present in the provided evidence. |
| `Schiavon_2020.pdf` | Schiavon M et al., Modeling Subcutaneous Absorption of Lon…, IEEE transactions on bio-me… (2020) | popPK | 9 | [10.1109/TBME.2019.2919250](https://doi.org/10.1109/TBME.2019.2919250) | [31150327](https://pubmed.ncbi.nlm.nih.gov/31150327) | The paper reports a compartmental PK model for insulin glargine with specific numeric values for dissolution and absorption rates, but lacks standard clearance/volume parameters and some values are obscured by formula placeholders. |
| `Chang_2025.pdf` | Chang YC et al., Comparing the Efficacy of Various Insul…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70010](https://doi.org/10.1002/jcph.70010) | [39982761](https://www.ncbi.nlm.nih.gov/pubmed/39982761) | metadata signals extractable PD data (PharmacodynamicModel) |

<sub>queue written 2026-09-14T14:40:13.625663+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araki_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing dulaglutide and insulin glargine, reporting HbA1c and safety outcomes rather than pharmacokinetic parameters. |
| popPK | Chang_2025 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameter values or model details for insulin_glargine. |
| popPK | Faggionato_2021 | relevant | 9 | 0 | The paper describes a population PK model for insulin glargine, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Fawcett_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular hormone metabolism and receptor binding in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Gupta_2018 | irrelevant | 0 | 0 | The paper is a retrospective observational study of clinical outcomes (HbA1c, hypoglycemia) and dosing patterns, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Heise_2023 | not_relevant | 0 | 0 | The paper reports PK/PD properties of a novel insulin fusion protein (insulin efsitora alfa) and compares it to insulin glargine, but it does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| PGx | Kohn_2007 | not_relevant | 0 | 0 | The paper describes the structural modification and in vivo testing of new insulin analogs, not the effect of human genetic variants on the PK/PD of insulin glargine. |
| PGx | Pillai_2018 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on insulin peglispro, not insulin glargine. |
| popPK | Rendell_2013 | irrelevant | 1 | 0 | The paper is a review of insulin degludec, with insulin glargine serving only as a comparator, and no quantitative PK parameters for glargine are provided. |
| PD | Rendell_2013 | not_relevant | 1 | 0 | The text is a qualitative review comparing insulin degludec and glargine, mentioning PK parameters (tmax, t1/2) but providing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Rhoads_2011 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of clinical outcomes (HbA1c, costs) and does not report any pharmacokinetic parameters for insulin glargine. |
| popPK | Schiavon_2020 | relevant | 9 | 4 | The paper reports a compartmental PK model for insulin glargine with specific numeric values for dissolution and absorption rates, but lacks standard clearance/volume parameters and some values are obscured by formula placeholders. |
| popPK | Sommerfeld_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of receptor binding and signaling, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | The paper is an immunogenicity study comparing a biosimilar to insulin glargine and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Tuttle_2023 | irrelevant | 0 | 0 | The study is a biomarker analysis comparing kidney fibrosis markers in patients treated with dulaglutide versus insulin glargine, and it does not report any pharmacokinetic parameters for insulin glargine. |
| popPK | Utzschneider_2025 | irrelevant | 0 | 0 | The study focuses on beta-cell function parameters (ISR, sensitivity) rather than pharmacokinetic disposition parameters (CL, V, ka) for insulin glargine. |
| popPK | Warnken_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of proliferative effects in lung fibroblasts and does not report pharmacokinetic disposition parameters for insulin glargine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_insulin_glargine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
