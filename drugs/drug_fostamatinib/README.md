# fostamatinib

- **generic name:** fostamatinib
- **ATC codes:** `B02BX09`
- **DrugBank:** [DB12010](https://go.drugbank.com/drugs/DB12010)
- **groups:** approved, investigational

## About

**Description.** Fostamatinib has been investigated for the treatment and basic science of Rheumatoid Arthritis and Immune Thrombocytopenic Purpura (ITP). It was approved on April 17, 2018, under the trade name Tavalisse for use in ITP [L2644, L52150]. Fostamatinib has also been granted orphan drug status by the FDA [L2644].

Recently, fostamatinib has been identified as a potential therapeutic for controlling acute respiratory distress syndrome (ARDS) in patients with severe COVID-19 through its ability to modulate the SYK kinase.[A235008, A235013, A235018]

**Indication.** Fostamatinib is indicated for use in the treatment of chronic immune thrombocytopenia (ITP) in patients who have had insufficient response to previous therapy [L52150].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 12:24 | 3:29 | 0/1/0 | 0/0/0 | 0/0/0 | 35,440/1,056 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/0 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Boström_2014](drugs/drug_fostamatinib/Fostamatinib_Bostrm2014_reference.md) | Boström E et al., Exposure vs. response of blood pressure…, Journal of clinical pharmac… (2014) | [10.1002/jcph.341](https://doi.org/10.1002/jcph.341) |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boström_2014.pdf` | Boström E et al., Exposure vs. response of blood pressure…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.341](https://doi.org/10.1002/jcph.341) | [24895144](https://pubmed.ncbi.nlm.nih.gov/24895144) | The paper reports a population PK model for the active metabolite R406 with a specific CL/F value (18.7 L/h), but other parameters like volume and half-life are not explicitly listed in the provided text. |
| `Maringwa_2015.pdf` | Maringwa J et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2015) | pd | 5 | [10.1002/jcph.406](https://doi.org/10.1002/jcph.406) | [25280085](https://www.ncbi.nlm.nih.gov/pubmed/25280085) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Moore_2019.pdf` | Moore DC et al., Fostamatinib for the treatment of immun…, American journal of health-… (2019) | pgx | 7 | [10.1093/ajhp/zxz052](https://doi.org/10.1093/ajhp/zxz052) | [30951590](https://www.ncbi.nlm.nih.gov/pubmed/30951590) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-06T12:23:47.003309+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmadinia_2026 | not_relevant | 0 | 0 | The paper is a narrative review on the immunopathogenesis of autoimmune HIT and does not report pharmacogenomic effects on fostamatinib PK/PD parameters. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper is a review of autoimmune hemolytic anemia pathogenesis and therapies, mentioning fostamatinib only as a therapeutic agent without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Duran_2019 | not_relevant | 0 | 0 | The paper investigates the effect of R406 (fostamatinib metabolite) on P-glycoprotein-mediated drug resistance in cell lines, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Flinn_2016 | not_relevant | 0 | 0 | The paper reports clinical efficacy based on cell-of-origin subtypes (GCB/ABC) but does not report pharmacokinetic or pharmacodynamic parameters or specific gene variants affecting drug metabolism. |
| PGx | Gkouskou_2024 | not_relevant | 0 | 0 | The paper is a review on obesity genetics that only mentions fostamatinib as a potential repurposing target based on in silico predictions, without reporting any pharmacokinetic or pharmacodynamic data. |
| popPK | Maringwa_2015 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling of efficacy (ACR20) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for fostamatinib. |
| PGx | Martin_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibitors/inducers) rather than the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Moore_2019 | not_relevant | 0 | 0 | The paper is a general review of fostamatinib's pharmacology and clinical use, mentioning CYP3A4 metabolism but not reporting any specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Thoma_2015 | irrelevant | 0 | 0 | The paper describes a different Syk inhibitor (Compound 5) and does not report pharmacokinetic parameters for fostamatinib. |
| PD | Thoma_2015 | not_relevant | 0 | 0 | The text is an abstract that mentions activity in a rat PK/PD model but provides no numeric PD parameters, curves, or specific exposure-response data. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper identifies fostamatinib as a potential anti-aging drug via computational screening but does not report any pharmacogenomic effects on its PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fostamatinib`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
