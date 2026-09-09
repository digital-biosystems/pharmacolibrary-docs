# zavegepant

- **generic name:** zavegepant
- **ATC codes:** `N02CD08`
- **DrugBank:** [DB15688](https://go.drugbank.com/drugs/DB15688)
- **groups:** approved, investigational

## About

**Description.** Zavegepant (BHV-3500) is a calcitonin gene-related peptide (CGRP) receptor antagonist.[L45505] CGRP is released from sensory nerves and acts as a strong vasodilator, and thanks to these properties, it is involved in pain pathways. CGRP receptors are expressed in the central and peripheral nervous system; however, CGRP does not cross the blood-brain barrier, suggesting that it acts on peripheral nerves. In migraine, CGRP innervates pain-producing meningeal blood vessels and is released by trigeminal nerve stimulation. Since they inhibit these mechanisms and desensitize neuronal circuits, the use of CGRP receptor antagonists is beneficial in the treatment of migraine.[A258195] 

Small molecule CGRP antagonists are also known as "gepants", and this category includes other drugs such as [rimegepant] and [ubrogepant]. Zavegepant is a third-generation CGRP receptor antagonist that is small in size and highly soluble. Due to its pharmacological properties, it can be administered intranasally.[A258190,A258195] In March 2023, the FDA approved the use of zavegepant nasal spray for the acute treatment of migraine with or without aura in adults.[L45505,L45510] A clinical trial (NCT04804033) is currently investigating the efficacy and safety of oral zavegepant in migraine prevention, and another one (NCT04987944) is evaluating the safety and efficacy of oral zavegepant (150 mg bid) in subjects with mild allergic asthma.[A258200]

**Indication.** Zavegepant in a nasal spray form is indicated for the acute treatment of migraine with or without aura in adults. It is not indicated for the preventive treatment of migraine.[L45505]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 22:31 | 5:09 | 1/1/0 | 0/0/0 | 0/0/0 | 49,517/3,394 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Shahin_2025](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md) | Shahin MH et al., A Pharmacokinetic Study of Zavegepant N…, Clinical and translational… (2025) | [10.1111/cts.70199](https://doi.org/10.1111/cts.70199) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Comisar_2025](drugs/drug_zavegepant/Zavegepant_Comisar2025_reference.md) | Comisar CM et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257) |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Comisar_2025.pdf` | Comisar CM et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2025) | popPK | 10 | [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257) | [39492601](https://pubmed.ncbi.nlm.nih.gov/39492601) | The paper is a population PK study for zavegepant and provides specific numeric values for bioavailability and absorption rate constants, though central clearance and volume values are not explicitly listed in the provided text. |
| `Bhardwaj_2024.pdf` | Bhardwaj R et al., Deconvoluting zavegepant drug-drug inte…, Clinical and translational… (2024) | pgx | 7 | [10.1111/cts.70048](https://doi.org/10.1111/cts.70048) | [39602316](https://www.ncbi.nlm.nih.gov/pubmed/39602316) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-08-29T22:29:04.334595+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bhardwaj_2024 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters (AUC, Cmax) and safety data; it does not report any pharmacodynamic (PD) or exposure-response relationship. |
| PGx | Bhardwaj_2024_2 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (DDIs) with itraconazole and rifampin, not pharmacogenomic effects based on gene variants. |
| popPK | Hughes_2024 | irrelevant | 2 | 0 | The paper is a cardiac safety (QTc) analysis that mentions PK data but does not report quantitative disposition parameters (CL, V, ka, etc.) for zavegepant in the provided evidence. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a narrative review of clinical practice and efficacy/safety profiles, containing no pharmacogenomic data or genotype-specific PK/PD parameters. |
| PGx | Takizawa_2023 | not_relevant | 0 | 0 | The paper is a narrative review discussing drug-drug interactions (CYP3A4) and does not report pharmacogenomic effects on zavegepant PK/PD. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or brief mention of "Drugs for migraine" without providing any specific data, models, or numeric parameters for zavegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_zavegepant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
