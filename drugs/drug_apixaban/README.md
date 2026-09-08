# apixaban

- **generic name:** apixaban
- **ATC codes:** `B01AF02`
- **DrugBank:** [DB06605](https://go.drugbank.com/drugs/DB06605)
- **groups:** approved, investigational

## About

**Description.** Apixaban is an oral, direct, and highly selective factor Xa (FXa) inhibitor of both free and bound FXa, as well as prothrombinase, independent of antithrombin III for the prevention and treatment of thromboembolic diseases[Label,A6897]. It is marketed under the name Eliquis[Label,L6043]. Apixaban was approved by the FDA on December 28, 2012[L6043].

**Indication.** Apixaban is indicated for reducing the risk of stroke and systemic embolism in patients who have nonvalvular atrial fibrillation, prophylaxis of deep vein thrombosis(DVT) leading to pulmonary embolism(PE) in patients after a hip or knee replacement surgery, and treatment of DVT and PE to reduce the risk of recurrence[Label,A177565,A6897].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 17:23 | 1:35 | 3/0/0 | 0/0/0 | 0/0/0 | 32,975/3,236 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Byon_2019](drugs/drug_apixaban/Apixaban_Byon2019_reference.md) | Byon W et al., Apixaban: A Clinical Pharmacokinetic an…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00775-z](https://doi.org/10.1007/s40262-019-00775-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Konecki_2025](drugs/drug_apixaban/Apixaban_Konecki2025_reference.md) | Konecki C et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01476-6](https://doi.org/10.1007/s40262-025-01476-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Morath_2025](drugs/drug_apixaban/Apixaban_Morath2025_reference.md) | Morath B et al., Effect of Amiodarone on Apixaban Exposu…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01534-z](https://doi.org/10.1007/s40262-025-01534-z) |

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ajavon-Hartmann_2025.pdf` | Ajavon-Hartmann A et al., Characterization of Apixaban Pharmacoki…, Clinical pharmacology and t… (2025) | popPK | 10 | [10.1002/cpt.3689](https://doi.org/10.1002/cpt.3689) | [40551722](https://pubmed.ncbi.nlm.nih.gov/40551722) | The paper describes a population PK model for apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Gaspar_2023.pdf` | Gaspar F et al., Population pharmacokinetics of apixaban…, CPT: pharmacometrics & syst… (2023) | popPK | 10 | [10.1002/psp4.13032](https://doi.org/10.1002/psp4.13032) | [37723920](https://pubmed.ncbi.nlm.nih.gov/37723920) | The paper is a population PK study of apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Kolowrat_2025.pdf` | Kolowrat S et al., Real-World Impact of Amiodarone on Apix…, Clinical and translational… (2025) | popPK | 10 | [10.1111/cts.70392](https://doi.org/10.1111/cts.70392) | [41208245](https://pubmed.ncbi.nlm.nih.gov/41208245) | The paper is a population PK study of apixaban, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, which only reports exposure ratios and a percentage change in clearance. |
| `Konecki_2025.pdf` | Konecki C et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01476-6](https://doi.org/10.1007/s40262-025-01476-6) | [39853633](https://pubmed.ncbi.nlm.nih.gov/39853633) | The paper reports a population PK model for apixaban with a specific dialytic clearance value (1.20 L/h), but other standard parameters like total clearance, volume, and half-life are not explicitly listed in the provided text. |
| `Morath_2025.pdf` | Morath B et al., Effect of Amiodarone on Apixaban Exposu…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01534-z](https://doi.org/10.1007/s40262-025-01534-z) | [40474043](https://pubmed.ncbi.nlm.nih.gov/40474043) | The paper is a population PK study for apixaban and explicitly reports numeric values for CL/F, Vd/F, and ka in the abstract. |
| `Jaber_2022.pdf` | Jaber A et al., Esomeprazole and apixaban pharmacokinet…, Heliyon (2022) | popPK | 8 | [10.1016/j.heliyon.2022.e11015](https://doi.org/10.1016/j.heliyon.2022.e11015) | [36281394](https://pubmed.ncbi.nlm.nih.gov/36281394) | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for apixaban in rats, but specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-09-05T17:22:17.949049+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajavon-Hartmann_2025 | relevant | 10 | 0 | The paper describes a population PK model for apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Byon_2019 | irrelevant | 2 | 8 | The paper is a clinical review that summarizes PK parameters (CL, V, t1/2) for apixaban rather than reporting original quantitative disposition data from a primary study. |
| popPK | Gaspar_2023 | relevant | 10 | 0 | The paper is a population PK study of apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Jaber_2022 | relevant | 8 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for apixaban in rats, but specific numeric values are not present in the provided evidence text. |
| popPK | Kolowrat_2025 | relevant | 10 | 2 | The paper is a population PK study of apixaban, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, which only reports exposure ratios and a percentage change in clearance. |
| popPK | Terrier_2022 | irrelevant | 2 | 0 | The paper is a systematic review of existing models rather than an original study reporting new quantitative PK parameters, and no specific numeric values for apixaban are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_apixaban`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
