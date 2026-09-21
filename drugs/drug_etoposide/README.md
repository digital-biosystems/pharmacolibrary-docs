<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;etoposide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean_with_covariables&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean_with_covariables&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean_with_covariables.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean_with_covariables&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean_with_covariables&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean_with_covariables.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# etoposide

- **generic name:** etoposide
- **ATC codes:** `L01CB01`
- **DrugBank:** [DB00773](https://go.drugbank.com/drugs/DB00773)
- **groups:** approved, investigational

## About

**Description.** A semisynthetic derivative of podophyllotoxin that exhibits antitumor activity. Etoposide inhibits DNA synthesis by forming a complex with topoisomerase II and DNA. This complex induces breaks in double stranded DNA and prevents repair by topoisomerase II binding. Accumulated breaks in DNA prevent entry into the mitotic phase of cell division, and lead to cell death. Etoposide acts primarily in the G2 and S phases of the cell cycle.

**Indication.** For use in combination with other chemotherapeutic agents in the treatment of refractory testicular tumors and as first line treatment in patients with small cell lung cancer. Also used to treat other malignancies such as lymphoma, non-lymphocytic leukemia, and glioblastoma multiforme.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 09:26 | 4:50 | 2/0/0 | 0/0/0 | 0/0/0 | 30,173/12,759 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Toffoli_2001_mean](drugs/drug_etoposide/Etoposide_Toffoli2001_mean.md) | Toffoli G et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01468.x](https://doi.org/10.1046/j.0306-5251.2001.01468.x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Toffoli_2001_mean](drugs/drug_etoposide/Etoposide_Toffoli2001_mean.md) | Toffoli G et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01468.x](https://doi.org/10.1046/j.0306-5251.2001.01468.x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Toffoli_2001_mean_with_covariables](drugs/drug_etoposide/Etoposide_Toffoli2001_mean_with_covariables.md) | Toffoli G et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01468.x](https://doi.org/10.1046/j.0306-5251.2001.01468.x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Toffoli_2001_mean_with_covariables](drugs/drug_etoposide/Etoposide_Toffoli2001_mean_with_covariables.md) | Toffoli G et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01468.x](https://doi.org/10.1046/j.0306-5251.2001.01468.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etoposide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | blood | `GSTT1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2E1` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `GSTP1` substrate, `GSTT1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…by both renal and nonrenal processes, i.e., metabolism and biliary excretion. Glucuronide…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), ABCC6 (inhibitor), ABCC6 (substrate), PTGS1 (substrate), PTGS2 (substrate), TOP2A (inhibitor), TOP2B (inhibitor).</sub>

## Coverage

- **PubMed hits:** 130 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nguyen_1998.pdf` | Nguyen L et al., Population pharmacokinetics of total an…, Cancer chemotherapy and pha… (1998) | popPK | 10 | [10.1007/s002800050718](https://doi.org/10.1007/s002800050718) | [9443625](https://pubmed.ncbi.nlm.nih.gov/9443625) | The text explicitly reports quantitative population PK parameters for etoposide, including clearance equations, volume of distribution correlations, and bioavailability. |
| `Reif_2002.pdf` | Reif S et al., Population pharmacokinetics of etoposide, International journal of cl… (2002) | popPK | 10 | [10.5414/cpp40578](https://doi.org/10.5414/cpp40578) | [12503821](https://pubmed.ncbi.nlm.nih.gov/12503821) | The title indicates a population pharmacokinetic study of etoposide, but no numeric parameter values are present in the provided evidence. |
| `Pigatto_2016.pdf` | Pigatto MC et al., Population Pharmacokinetic Modeling of…, Pharmaceutical research (2016) | popPK | 9 | [10.1007/s11095-016-1906-4](https://doi.org/10.1007/s11095-016-1906-4) | [27068281](https://pubmed.ncbi.nlm.nih.gov/27068281) | The paper describes a population pharmacokinetic study of etoposide in rats, but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence, only qualitative model descriptions and penetration percentages. |

<sub>queue written 2026-09-15T20:01:52.662835+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Canal_1998 | irrelevant | 1 | 0 | The paper is a review discussing general dose individualization strategies and mentions etoposide only in the context of dosage reduction for organ dysfunction, without reporting any quantitative pharmacokinetic parameter values. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trilaciclib, with etoposide serving only as a co-administered chemotherapy agent without reported PK parameters. |
| popPK | Friberg_2002 | irrelevant | 2 | 0 | The paper focuses on a pharmacodynamic model of myelosuppression rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for etoposide. |
| popPK | Kobayashi_1993 | irrelevant | 1 | 0 | The paper is a review discussing pharmacodynamic models and therapeutic drug monitoring strategies, and it does not report original quantitative pharmacokinetic parameter values for etoposide. |
| popPK | Kobayashi_1994 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics and toxicity (myelosuppression, leukemia risk) rather than pharmacokinetic disposition parameters. |
| PD | Kobayashi_1994 | not_relevant | 1 | 0 | The text is a qualitative review/abstract that mentions a modified Hill equation model for myelosuppression but does not provide any numeric PD parameters, dose-response curves, or specific exposure-response data. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trilaciclib, with etoposide mentioned only as part of the chemotherapy regimen context. |
| popPK | Pigatto_2016 | relevant | 9 | 2 | The paper describes a population pharmacokinetic study of etoposide in rats, but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence, only qualitative model descriptions and penetration percentages. |
| popPK | Reif_2002 | relevant | 10 | 0 | The title indicates a population pharmacokinetic study of etoposide, but no numeric parameter values are present in the provided evidence. |
| popPK | Toffoli_2004 | irrelevant | 2 | 0 | The text is a review discussing pharmacokinetic concepts and therapeutic thresholds (e.g., Cmax 3-5 mg/L) but does not report original quantitative disposition parameters (CL, V, Q, ka) or population PK model estimates for etoposide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_etoposide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
