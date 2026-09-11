# pinaverium

- **generic name:** pinaverium
- **ATC codes:** `A03AX04`
- **DrugBank:** [DB09090](https://go.drugbank.com/drugs/DB09090)
- **groups:** approved, investigational

## About

**Description.** Pinaverium is a spasmolytic agent used for functional gastrointestinal disorders. It is a quaternary ammonium compound that acts as an atypical calcium antagonist to restore normal bowel function. It is shown to relieve GI spasm and pain, transit disturbances and other symptoms related to motility disorders [A19697] and may be considered as effective first-lline therapy for patients with irritable bowel syndrome (IBS) [A19702]. Pinaverium bromide is the common ingredient in formulations, mostly as oral tablets. Although it is not a currently approved drug by the FDA, pinaverium is available in over 60 countries including Canada.

**Indication.** Pinaverium is indicated for the symptomatic treatment of irritable bowel syndrome (IBS) and functional disorders of the biliary tract.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 00:14 | 5:11 | 0/0/0 | 0/0/0 | 0/0/0 | 19,107/1,396 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 12 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patiño-Rodríguez_2015.pdf` | Patiño-Rodríguez O et al., Determination of Pinaverium Bromide in…, Journal of chromatographic… (2015) | popPK | 10 | [10.1093/chromsci/bmv027](https://doi.org/10.1093/chromsci/bmv027) | [25862744](https://pubmed.ncbi.nlm.nih.gov/25862744) | The paper describes a PK study for pinaverium, but the provided evidence contains only the abstract/methods summary and lacks the specific numeric parameter values (CL, V, etc.). |
| `Ren_2011.pdf` | Ren JM et al., A sensitive and specific liquid chromat…, Biomedical chromatography :… (2011) | popPK | 10 | [10.1002/bmc.1611](https://doi.org/10.1002/bmc.1611) | [21308709](https://pubmed.ncbi.nlm.nih.gov/21308709) | The paper describes a PK study for pinaverium, but the provided evidence contains only analytical method validation details and lacks any quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| `Beech_1990.pdf` | Beech DJ et al., Effects of pinaverium on voltage-activa…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14711.x](https://doi.org/10.1111/j.1476-5381.1990.tb14711.x) | [1691676](https://www.ncbi.nlm.nih.gov/pubmed/1691676) | metadata signals extractable PD data (IC50) |
| `García-Alvarado_2019.pdf` | García-Alvarado F et al., Otilonium and pinaverium trigger mitoch…, Neurotoxicology (2019) | pd | 4 | [10.1016/j.neuro.2018.11.003](https://doi.org/10.1016/j.neuro.2018.11.003) | [30448301](https://www.ncbi.nlm.nih.gov/pubmed/30448301) | metadata signals extractable PD data (EC50) |
| `Malysz_1997.pdf` | Malysz J et al., Pinaverium acts as L-type calcium chann…, Canadian journal of physiol… (1997) | pd | 4 | [10.1139/cjpp-75-8-969](https://doi.org/10.1139/cjpp-75-8-969) | [9360010](https://www.ncbi.nlm.nih.gov/pubmed/9360010) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T00:14:08.000991+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arısoy_2022 | irrelevant | 2 | 0 | The study is a bioequivalence trial comparing regulatory approaches rather than a population PK study, and no quantitative disposition parameters (CL, V, etc.) are provided in the evidence. |
| popPK | Beech_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel currents in isolated cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bobo_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction and does not report any pharmacokinetic parameters for pinaverium. |
| popPK | Boyer_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle contraction and does not report any pharmacokinetic parameters for pinaverium. |
| popPK | Bretaudeau_1975 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of spasmolytic properties, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Bretaudeau_1975 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the abstract or body text required to verify the presence of numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Dai_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle contractility and calcium influx, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | García-Alvarado_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis and does not report pharmacokinetic parameters for pinaverium. |
| popPK | Malysz_1997 | irrelevant | 0 | 0 | The paper describes the mechanism of action (calcium channel blocking) and contains no pharmacokinetic parameters or quantitative disposition data for pinaverium. |
| PD | Malysz_1997 | not_relevant | 0 | 0 | The provided text is only a title stating the mechanism of action (L-type calcium channel blocker) and contains no data, numeric parameters, or exposure-response analysis. |
| popPK | Patiño-Rodríguez_2015 | relevant | 10 | 0 | The paper describes a PK study for pinaverium, but the provided evidence contains only the abstract/methods summary and lacks the specific numeric parameter values (CL, V, etc.). |
| popPK | Pengfei_2024 | irrelevant | 2 | 0 | The study focuses on the antimicrobial mechanism of pinaverium against bacteria, and while it mentions "relatively poor pharmacokinetics," it does not report quantitative PK parameters (CL, V, etc.) for the drug in the provided text. |
| popPK | Ren_2011 | relevant | 10 | 0 | The paper describes a PK study for pinaverium, but the provided evidence contains only analytical method validation details and lacks any quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| popPK | Shrivastava_2022 | irrelevant | 0 | 0 | The paper is a review of otilonium bromide, and pinaverium is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Shrivastava_2022 | not_relevant | 0 | 0 | The paper is a mini-review on analytical methods for otilonium bromide and only qualitatively mentions pinaverium as a comparator without providing any pharmacodynamic data or parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pinaverium`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
