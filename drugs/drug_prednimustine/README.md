<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;prednimustine&quot;}]"></div>

# prednimustine

- **generic name:** prednimustine
- **ATC codes:** `L01AA08`
- **DrugBank:** [DB12832](https://go.drugbank.com/drugs/DB12832)
- **groups:** investigational

## About

**Description.** Prednimustine has been used in trials studying the treatment of Lymphoma.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 02:55 | 4:34 | 0/0/0 | 0/0/0 | 0/0/0 | 14,749/1,428 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 11 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gaver_1983.pdf` | Gaver RC et al., Disposition of orally administered 14C-…, Cancer chemotherapy and pha… (1983) | popPK | 8 | [10.1007/BF00254192](https://doi.org/10.1007/BF00254192) | [6640823](https://pubmed.ncbi.nlm.nih.gov/6640823) | The study reports qualitative PK characteristics and specific half-lives (8h, 10 days) for prednimustine metabolites, but lacks explicit numeric values for clearance (CL) or volume of distribution (V). |

<sub>queue written 2026-09-15T02:54:44.641963+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aapro_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy and toxicity study of a combination regimen, reporting no pharmacokinetic parameters for prednimustine. |
| PD | Aapro_1986 | not_relevant | 0 | 0 | The paper reports clinical response rates and toxicity for a fixed-dose combination regimen but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Barnadas_1997 | irrelevant | 0 | 0 | The paper is a Phase II clinical efficacy study reporting response rates and toxicity, with no pharmacokinetic parameters or quantitative disposition data for prednimustine. |
| PD | Barnadas_1997 | not_relevant | 0 | 0 | The paper is a Phase II clinical trial reporting efficacy and toxicity outcomes without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Braess_1996 | irrelevant | 0 | 0 | The paper is a case report on cytarabine ocfosfate where prednimustine is only mentioned as a prior failed therapy, with no PK parameters reported for it. |
| PD | Braess_1996 | not_relevant | 0 | 0 | The paper is a case report on cytarabine ocfosfate and only mentions prednimustine as a prior failed therapy without providing any pharmacodynamic or exposure-response data for it. |
| popPK | Catane_1977 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting tumor response and toxicity, with no quantitative pharmacokinetic parameters (CL, V, t1/2) for prednimustine. |
| PD | Catane_1977 | not_relevant | 0 | 0 | The text is a preliminary clinical study reporting only qualitative outcomes (no objective responses) and toxicity, with no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Gaver_1983 | relevant | 8 | 4 | The study reports qualitative PK characteristics and specific half-lives (8h, 10 days) for prednimustine metabolites, but lacks explicit numeric values for clearance (CL) or volume of distribution (V). |
| popPK | Hartley-Asp_1986 | irrelevant | 1 | 0 | The study is an in-vitro cytotoxicity and metabolism experiment in cell lines, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for prednimustine. |
| popPK | Hatschek_1993 | irrelevant | 0 | 0 | The paper is a clinical efficacy and toxicity study comparing dosing schedules, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hatschek_1993 | not_relevant | 1 | 0 | The paper is a clinical trial comparing two dosing schedules and reports clinical outcomes (response rate, survival) and toxicity, but it does not provide pharmacokinetic data or a quantitative exposure-response/dose-response model with numeric PD parameters. |
| popPK | Heinz_1997 | irrelevant | 0 | 0 | The paper is a clinical outcome study for non-Hodgkin lymphoma patients and does not report any pharmacokinetic parameters for prednimustine. |
| PD | Heinz_1997 | not_relevant | 0 | 0 | The paper is a clinical outcome study reporting survival and response rates for lymphoma patients; it does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for prednimustine. |
| popPK | Håkansson_1978 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting remission rates and adverse events, with no pharmacokinetic parameters or quantitative disposition data for prednimustine. |
| PD | Håkansson_1978 | not_relevant | 1 | 0 | The text reports clinical response rates (complete/partial remissions) and adverse events but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Newell_1983 | irrelevant | 2 | 0 | The study reports that no parent drug or metabolites were detected in plasma for prednimustine, providing no quantitative PK parameters (CL, V, t1/2) for the subject drug. |
| PD | Newell_1983 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (absorption, bioavailability, compartmental models) and qualitative conclusions about bioavailability and metabolite toxicity, with no concentration-effect or dose-response data for prednimustine. |
| popPK | Travis_1994 | irrelevant | 0 | 0 | The paper is an epidemiological study on leukemia risk and contains no pharmacokinetic parameters for prednimustine. |
| PD | Travis_1994 | not_relevant | 3 | 2 | The paper reports a clinical dose-response relationship (relative risk of leukemia vs. cumulative dose) for prednimustine, but it is an epidemiological study, not a pharmacodynamic (exposure-response) analysis with numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_prednimustine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
