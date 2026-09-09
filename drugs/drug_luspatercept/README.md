# luspatercept

- **generic name:** luspatercept
- **ATC codes:** `B03XA06`
- **DrugBank:** [DB12281](https://go.drugbank.com/drugs/DB12281)
- **groups:** approved, investigational

## About

**Description.** Luspatercept is a recombinant fusion protein comprised of a modified extracellular domain of activin receptor type IIB fused to the FC domain of human IgG1.[A187829,L42455] It was first approved for use in the United States in November 2019 under the brand name Reblozyl® for the treatment of anemia in patients with beta thalassemia who require regular blood transfusions.[L42455] Luspatercept is novel in that it ameliorates anemia via action on late-stage erythropoiesis, in contrast to typical erythropoiesis-stimulating agents (ESAs), such as [darbepoetin alfa] and [epoetin alfa], which act only on early-stage erythropoiesis.[A187835] Luspatercept's novel mechanism of action, then, is uniquely suited for the treatment of conditions in which late-stage erythropoiesis is defective, such as beta thalassemia and other myelodysplastic diseases.[A187835,A187838]

**Indication.** Luspatercept is indicated for the treatment of:

- Anemia in adults with beta thalassemia who require regular red blood cell transfusions.[L42455]
- Anemia without previous erythropoiesis stimulating agent use (ESA-naïve) in adult patients with very low- to intermediate-risk myelodysplastic syndromes (MDS) who may require regular red blood cell (RBC) transfusions.[L47986]
- Anemia failing an erythropoiesis stimulating agent and requiring two or more RBC units over eight weeks in adult patients with very low- to intermediate-risk myelodysplastic syndromes with ring sideroblasts (MDS-RS) or with myelodysplastic/myeloproliferative neoplasm with ring sideroblasts and thrombocytosis (MDS/MPN-RS-T).[L47986]
- for the treatment of transfusion-dependent anaemia due to very low, low and intermediate-risk myelodysplastic syndromes (MDS).[L52760]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 19:50 | 7:09 | 1/1/0 | 0/0/1 | 0/0/0 | 129,718/11,928 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2021](drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md) | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Chen_2020](drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020](drugs/drug_luspatercept/pd_Chen_2020_Erythroid_response.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020](drugs/drug_luspatercept/pd_Chen_2020_RBC_transfusion_independence.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020](drugs/drug_luspatercept/pd_Chen_2020_Treatment_emergent_adverse_events.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bruzzese_2023.pdf` | Bruzzese A et al., Myelodysplastic syndromes with ring sid…, Hematological oncology (2023) | pgx | 5 | [10.1002/hon.3125](https://doi.org/10.1002/hon.3125) | [36794650](https://www.ncbi.nlm.nih.gov/pubmed/36794650) | metadata signals extractable PGX data (ABCB7) |

<sub>queue written 2026-09-08T19:44:32.310590+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention luspatercept or any pharmacogenomic effects. |
| PGx | Bruzzese_2023 | not_relevant | 0 | 0 | The text describes the mechanism of action of luspatercept and the biology of MDS-RS but does not report any pharmacogenomic study linking specific gene variants to changes in luspatercept's PK or PD parameters. |
| PGx | Diamantidis_2023 | not_relevant | 0 | 0 | The paper is a case report on a hemoglobinopathy and mentions a luspatercept trial only as background; it does not report pharmacogenomic effects on luspatercept PK/PD. |
| PGx | Mansour_2025 | not_relevant | 0 | 0 | The paper is a narrative review of iron homeostasis and therapeutic targets, mentioning luspatercept's mechanism and clinical efficacy, but it does not report any pharmacogenomic effects (gene variants) on luspatercept's PK or PD parameters. |
| popPK | Musallam_2026 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (PROs) and quality of life measures, not pharmacokinetic parameters. |
| PGx | Panzieri_2026 | not_relevant | 0 | 0 | The paper discusses clinical management and efficacy predictors (HbF) but does not report pharmacogenomic effects on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_luspatercept`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
