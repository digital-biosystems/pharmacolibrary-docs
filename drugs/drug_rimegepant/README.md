# rimegepant

- **generic name:** rimegepant
- **ATC codes:** `N02CD06`
- **DrugBank:** [DB12457](https://go.drugbank.com/drugs/DB12457)
- **groups:** approved, investigational

## About

**Description.** Rimegepant is an oral antagonist of the CGRP receptor developed by Biohaven Pharmaceuticals.[L11028] It received FDA approval on February 27, 2020 for the acute treatment migraine headache,[L11974] and was subsequently approved by the European Commission in April 2022 for both the treatment and prevention of migraines.[L41640] While several parenteral antagonists of CGRP and its receptor have been approved for migraine therapy (e.g. [erenumab], [fremanezumab], [galcanezumab]), rimegepant and [ubrogepant] were the only CGRP antagonists that possessed oral bioavailability[A189207] until the approval of [atogepant] in 2021.[L38814]

The current standard of migraine therapy involves abortive treatment with "triptans", such as [sumatriptan], but these medications are contraindicated in patients with pre-existing cerebrovascular and cardiovascular disease due to their vasoconstrictive properties.[A189207] Antagonism of the CGRP pathway has become an attractive target for migraine therapy as, unlike the triptans, oral CGRP antagonists have no observed vasoconstrictive properties and are therefore safer for use in patients with contraindications to standard therapy.[A189330,A189207]

**Indication.** Rimegepant is indicated for the acute treatment of migraine with or without aura in adults. Rimegepant is also indicated for the prevention of episodic migraine in adults.[L11971]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 21:28 | 7:55 | 1/1/0 | 0/0/0 | 0/0/0 | 63,384/3,861 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 2/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Comisar_2025](drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md) | Comisar (2025) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Comisar_2025_2](drugs/drug_rimegepant/Rimegepant_Comisar2025v2_reference.md) | Comisar (2025) | — |

## Coverage

- **PubMed hits:** 24 matched, 22 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Comisar_2025_2.pdf` | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | popPK | 10 | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) | [40614133](https://pubmed.ncbi.nlm.nih.gov/40614133) | The paper is a population PK study for rimegepant and explicitly lists numeric values for CL/F, Vc/F, Q/F, Vp/F, and ka in the text. |
| `Lim_2026.pdf` | Lim CN et al., A phase 1, multicenter, open-label stud…, Headache (2026) | popPK | 8 | [10.1111/head.15074](https://doi.org/10.1111/head.15074) | [41133671](https://pubmed.ncbi.nlm.nih.gov/41133671) | The study reports population PK modeling and summary exposure metrics (Cmax, AUC) for rimegepant, but specific disposition parameters like clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Bhardwaj_2025.pdf` | Bhardwaj R et al., Characterization of rimegepant drug-dru…, Headache (2025) | pgx | 7 | [10.1111/head.14836](https://doi.org/10.1111/head.14836) | [39364583](https://www.ncbi.nlm.nih.gov/pubmed/39364583) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-08-29T21:24:23.737618+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Baker_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (plasma/milk concentrations, RID) but contains no pharmacodynamic or exposure-response analysis. |
| PGx | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving CYP3A4 inhibitors/inducers, not pharmacogenomic effects based on genetic variants. |
| PGx | Comisar_2025_2 | not_relevant | 0 | 0 | The paper reports population PK modeling with covariates like weight, hepatic impairment, and drug-drug interactions, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PD | DeFalco_2021 | not_relevant | 1 | 0 | The paper is a clinical review summarizing efficacy and safety outcomes from RCTs but does not report or derive numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships. |
| PD | Dermitzakis_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (pain freedom, VAS reduction) for a fixed dose but does not provide drug concentration data or fit a pharmacodynamic model to derive parameters like Emax or EC50. |
| PD | Dong_2023 | not_relevant | 1 | 0 | The paper is a meta-analysis of adverse drug reaction incidence and correlates (e.g., age, BMI), not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Lim_2026 | relevant | 8 | 2 | The study reports population PK modeling and summary exposure metrics (Cmax, AUC) for rimegepant, but specific disposition parameters like clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a narrative review of clinical efficacy and safety of gepants and triptans, containing no pharmacogenomic data or genotype-specific PK/PD analysis. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (CYP3A4 inhibition) and clinical safety outcomes, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and general pharmacokinetics, and does not report any pharmacogenomic effects (gene variants) on rimegepant. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a title ("Drugs for Migraine") and contains no data, analysis, or numeric parameters. |
| PD | unknown_2020_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess a pharmacodynamic relationship. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a title for a paper on atogepant, not rimegepant, and contains no data or PD parameters. |
| PD | unknown_2021_2 | not_relevant | 0 | 0 | The paper discusses dihydroergotamine (Trudhesa), not rimegepant, and does not report PD parameters for the target drug. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or brief mention of "Drugs for migraine" and does not contain the full text of a paper reporting specific pharmacodynamic or exposure-response data for rimegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is a title for zavegepant, not rimegepant, and contains no data or analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_rimegepant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
