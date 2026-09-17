<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;diphenoxylate&quot;}]"></div>

# diphenoxylate

- **generic name:** diphenoxylate
- **ATC codes:** `A07DA01`
- **DrugBank:** [DB01081](https://go.drugbank.com/drugs/DB01081)
- **groups:** approved, illicit

## About

**Description.** A meperidine congener used as an antidiarrheal, usually in combination with atropine. At high doses, it acts like morphine. Its unesterified metabolite difenoxin has similar properties and is used similarly. It has little or no analgesic activity. This medication is classified as a Schedule V under the Controlled Substances Act by the Food and Drug Administration (FDA) and the DEA in the United States when used in preparations. When diphenoxylate is used alone, it is classified as a Schedule II.

**Indication.** For as adjunctive therapy in the management of diarrhea

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 20:45 | 7:08 | 0/0/0 | 0/0/0 | 0/0/0 | 41,503/2,627 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/0 | 3/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 36 matched, 32 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karim_1972.pdf` | Karim A et al., Pharmacokinetics and metabolism of diph…, Clinical pharmacology and t… (1972) | popPK | 10 | [10.1002/cpt1972133407](https://doi.org/10.1002/cpt1972133407) | [5026379](https://pubmed.ncbi.nlm.nih.gov/5026379) | The title confirms a pharmacokinetic study of diphenoxylate in humans, but the provided evidence contains no numeric parameter values. |
| `Jackson_1987.pdf` | Jackson LS et al., The evaluation and application of a rad…, Journal of pharmacological… (1987) | popPK | 8 | [10.1016/0160-5402(87)90069-6](https://doi.org/10.1016/0160-5402(87)90069-6) | [3682841](https://pubmed.ncbi.nlm.nih.gov/3682841) | The study reports quantitative pharmacokinetic parameters (half-lives, Cmax, Tmax) for diphenoxylic acid, the major metabolite of diphenoxylate, in human plasma. |
| `Coupar_1994.pdf` | Coupar IM et al., Opiate and opiate antidiarrhoeal drug a…, Journal of autonomic pharma… (1994) | pd | 4 | [10.1111/j.1474-8673.1994.tb00591.x](https://doi.org/10.1111/j.1474-8673.1994.tb00591.x) | [8150811](https://www.ncbi.nlm.nih.gov/pubmed/8150811) | metadata signals extractable PD data (IC50) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Geng_2015.pdf` | Geng P et al., Effect of diphenoxylate on CYP450 isofo…, International journal of cl… (2015) | pgx | 7 | not captured | [26770498](https://www.ncbi.nlm.nih.gov/pubmed/26770498) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-11T20:43:55.785344+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armstrong_2009 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug-drug interactions (CYP3A4 inhibition/induction) and does not report pharmacogenomic effects of gene variants on diphenoxylate. |
| PGx | Baker_2007 | not_relevant | 0 | 0 | The paper reviews loperamide and does not report pharmacogenomic effects on diphenoxylate. |
| PD | Cascinu_1993 | not_relevant | 0 | 0 | The paper compares octreotide and loperamide for treating chemotherapy-induced diarrhea and does not report any pharmacodynamic or exposure-response data for diphenoxylate. |
| popPK | Cohen_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sirolimus, not diphenoxylate. |
| PD | Cohen_2012 | not_relevant | 0 | 0 | The paper studies sirolimus, not diphenoxylate. |
| PD | Coupar_1994 | not_relevant | 0 | 0 | The paper focuses on rat isolated intestine and does not report pharmacodynamic or exposure-response data for diphenoxylate. |
| popPK | Ehrenpreis_1992 | irrelevant | 0 | 0 | The study focuses on D-xylose malabsorption in HIV patients and mentions diphenoxylate only as a standard antidiarrheal therapy, providing no pharmacokinetic parameters. |
| popPK | Estoup_1994 | irrelevant | 0 | 0 | The paper is a review on medication delivery methods and mentions diphenoxylate only as an example of a drug affecting motility, without reporting any pharmacokinetic parameters. |
| PD | Estoup_1994 | not_relevant | 0 | 0 | The text is a general review of medication delivery via enteral tubes and mentions diphenoxylate only in the context of its effect on motility and administration method, without providing any numeric PD parameters or exposure-response data. |
| PD | Farmakides_1986 | not_relevant | 0 | 0 | The paper discusses the use of prostaglandins (PGE2 and PGF2 alpha) for pregnancy termination and does not mention diphenoxylate or report any pharmacodynamic parameters for it. |
| popPK | Geng_2015 | irrelevant | 0 | 0 | The study focuses on the effect of diphenoxylate on CYP450 isoform activity (mechanistic/in-vitro or enzyme inhibition) rather than reporting quantitative pharmacokinetic disposition parameters for diphenoxylate itself. |
| PD | Geng_2015 | not_relevant | 0 | 0 | The paper investigates the effect of diphenoxylate on CYP450 enzyme activity (pharmacodynamics of enzyme inhibition), but it does not report a concentration-effect or dose-response relationship with numeric PD parameters (e.g., IC50, Emax) for a clinical or physiological endpoint; it is a mechanistic enzyme assay study, not a PK/PD modeling study. |
| PGx | Geng_2015 | not_relevant | 0 | 0 | The paper investigates the effect of diphenoxylate on CYP450 activity in rats, not the effect of a gene variant on diphenoxylate's PK/PD. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper is a cost analysis of drugs for cancer-associated symptoms and contains no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Heel_1978 | not_relevant | 1 | 0 | The text is a qualitative review comparing loperamide and diphenoxylate without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Jameson_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etirinotecan pegol, not diphenoxylate. |
| PD | Jameson_2013 | not_relevant | 0 | 0 | The paper studies etirinotecan pegol, not diphenoxylate, and reports only PK and safety data without PD modeling. |
| popPK | Karim_1972 | relevant | 10 | 0 | The title confirms a pharmacokinetic study of diphenoxylate in humans, but the provided evidence contains no numeric parameter values. |
| PD | Khan_2019 | not_relevant | 0 | 0 | The paper is a clinical case report of toxicity and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters. |
| popPK | Lauritsen_1990 | irrelevant | 1 | 0 | The paper is a review article that discusses diphenoxylate only in the context of its clinical application, with specific pharmacokinetic details deferred to a separate Part II not included in the evidence. |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is an abstract for a review article that mentions pharmacokinetic-pharmacodynamic relationships will be discussed, but it does not provide any specific numeric PD parameters or data for diphenoxylate. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on bisacodyl, not diphenoxylate, and does not report pharmacokinetic parameters for the target drug. |
| PD | Mapa_1982 | not_relevant | 0 | 0 | The paper reports clinical outcomes for a prostaglandin, not diphenoxylate, and contains no pharmacodynamic or exposure-response analysis. |
| PD | Newton_1978 | not_relevant | 2 | 1 | The paper reports qualitative and statistical comparisons of ileostomy output changes for fixed doses of Lomotil (diphenoxylate/atropine) versus codeine and Isogel, but it does not provide plasma concentration data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for diphenoxylate. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review on radiomitigators for radiation injury and does not contain any pharmacokinetic data for diphenoxylate. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention diphenoxylate or report any pharmacodynamic parameters. |
| popPK | Ponzillo_1988 | irrelevant | 0 | 0 | The study focuses on the bioavailability of quinidine sulfate, with diphenoxylate serving only as a co-administered agent, and no PK parameters for diphenoxylate are reported. |
| PD | Reynolds_1984 | not_relevant | 3 | 2 | The paper focuses on loperamide's mechanism (calcium channel blockade) and provides in vitro Ki/IC50 values and tissue concentrations for loperamide, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50 for effect) for diphenoxylate. |
| popPK | Sanvordeker_1975 | irrelevant | 1 | 0 | The study focuses on in vitro adsorption and qualitative in vivo effects, lacking quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Uddin_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacological properties of Clerodendrum infortunatum extracts, and diphenoxylate is only mentioned as a standard antidiarrheal drug in the introduction without any PK parameter reporting. |
| PD | Uddin_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacological activity of Clerodendrum infortunatum extracts and does not report any pharmacodynamic or exposure-response data for diphenoxylate. |
| PD | Yin_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Cistanche deserticola extract (CTAE) in a diphenoxylate-induced constipation model, but does not report any exposure-response or dose-response relationship for diphenoxylate itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_diphenoxylate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
