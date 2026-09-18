<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;zastaprazan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zastaprazan_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_zastaprazan/Zastaprazan_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# zastaprazan

- **generic name:** zastaprazan
- **ATC codes:** `A02BC12`
- **DrugBank:** [DB21524](https://go.drugbank.com/drugs/DB21524)
- **groups:** investigational

## About

**Description.** Zastaprazan is a small molecule drug. The usage of the INN stem '-prazan' in the name indicates that Zastaprazan is a proton pump inhibitor, not dependent on acid activation. Zastaprazan is under investigation in clinical trial NCT05814809 (Clinical Trial to Evaluate the Safety and Pharmacokinetics of JP-1366 in Healthy Adult Volunteers). Zastaprazan has a monoisotopic molecular weight of 362.21 Da.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 09:06 | 3:59 | 0/1/0 | 0/0/0 | 0/0/0 | 92,870/7,241 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yang_2024_reference](drugs/drug_zastaprazan/Zastaprazan_Yang2024_reference.md) | Yang E et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13228](https://doi.org/10.1002/psp4.13228) |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hwang_2023.pdf` | Hwang I et al., Randomised clinical trial: Safety, tole…, Alimentary pharmacology & t… (2023) | pgx | 8 | [10.1111/apt.17406](https://doi.org/10.1111/apt.17406) | [36732884](https://www.ncbi.nlm.nih.gov/pubmed/36732884) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Denegri_2026.pdf` | Denegri A et al., Potassium-competitive acid blockers for…, Polish archives of internal… (2026) | pgx | 7 | [10.20452/pamw.17285](https://doi.org/10.20452/pamw.17285) | [42084149](https://www.ncbi.nlm.nih.gov/pubmed/42084149) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-09-18T09:03:00.715172+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cao_2026 | not_relevant | 0 | 0 | The paper investigates CYP3A-mediated metabolism and drug-drug interactions (DDIs) of zastaprazan, but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| PGx | Denegri_2026 | not_relevant | 0 | 0 | The paper is a narrative review of efficacy and general pharmacology, and does not report specific pharmacogenomic effects on PK or PD parameters for zastaprazan. |
| PGx | Hwang_2023 | not_relevant | 0 | 0 | The study explicitly states that pharmacogenomic analysis found no genetic variants associated with the exposure of zastaprazan. |
| PGx | Kim_2026 | not_relevant | 0 | 0 | The paper is a general review of zastaprazan's pharmacology and clinical efficacy, reporting no specific pharmacogenomic effects or genotype-based PK/PD variations. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper describes in vitro metabolism and transport characteristics of zastaprazan but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis focused exclusively on pharmacokinetic (PK) parameters (AUC, Cmax, etc.) and drug interactions, with no pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters reported. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food-drug interactions for P-CABs and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper explicitly states that CYP2C19 phenotypes had no significant effect on zastaprazan PK. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_zastaprazan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
