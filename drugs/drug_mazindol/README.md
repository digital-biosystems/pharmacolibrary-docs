<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;mazindol&quot;}]"></div>

# mazindol

- **generic name:** mazindol
- **ATC codes:** `A08AA05`
- **DrugBank:** [DB00579](https://go.drugbank.com/drugs/DB00579)
- **groups:** approved

## About

**Description.** Mazindol is a tricyclic anorexigenic agent that is unrelated to and less toxic than [amphetamine], but with some similar side effects. It inhibits uptake of catecholamines and blocks the binding of cocaine to the dopamine uptake transporter. Mazindol is only approved in the United States for the treatment of Duchenne muscular dystrophy, and is not marketed or available in the United States for use in the treatment of obesity.

**Indication.** Used in short-term (a few weeks) treatment of exogenous obesity in conjunction with a regimen of weight reduction based on caloric restriction, exercise, and behavior modification in patients with a body mass index of 30 kg of body weight per height in meters squared (kg/m<sup>2</sup>) or in patients with a body mass index of 27 kg/m<sup>2</sup> in the presence of risk factors such as hypertension, diabetes, or hyperlipidemia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 01:05 | 7:16 | 2/0/0 | 0/0/0 | 0/0/0 | 39,975/14,190 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Konofal_2014](drugs/drug_mazindol/Mazindol_Konofal2014_basic_model.md) | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Konofal_2014](drugs/drug_mazindol/Mazindol_Konofal2014_basic_model.md) | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Konofal_2014](drugs/drug_mazindol/Mazindol_Konofal2014_final.md) | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Konofal_2014](drugs/drug_mazindol/Mazindol_Konofal2014_final.md) | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Böhm_1995.pdf` | Böhm M et al., Evidence for reduction of norepinephrin…, Journal of the American Col… (1995) | pd | 4 | [10.1016/0735-1097(94)00353-r](https://doi.org/10.1016/0735-1097(94)00353-r) | [7798493](https://www.ncbi.nlm.nih.gov/pubmed/7798493) | metadata signals extractable PD data (EC50) |
| `Johnson_1992.pdf` | Johnson KM et al., Cocaine and dopamine differentially pro…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0922-4106(92)90159-s](https://doi.org/10.1016/0922-4106(92)90159-s) | [1446711](https://www.ncbi.nlm.nih.gov/pubmed/1446711) | metadata signals extractable PD data (EC50) |
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-12T01:00:20.484785+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Böhm_1995 | irrelevant | 0 | 0 | The paper title indicates a study on norepinephrine uptake sites in heart failure, with no evidence of pharmacokinetic parameter reporting for mazindol. |
| popPK | Janowsky_2016 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of DAT modulators where mazindol is used only as a radioligand for binding assays, not as the subject of a pharmacokinetic study. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor binding and alkylation, not a pharmacokinetic study reporting disposition parameters for mazindol. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated efflux in cell lines, not a pharmacokinetic study reporting disposition parameters for mazindol. |
| popPK | Richfield_1991 | irrelevant | 0 | 0 | The study is an in-vitro binding/autoradiography study where mazindol is used only as a non-specific binding blank, not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mazindol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
