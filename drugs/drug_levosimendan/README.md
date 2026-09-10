# levosimendan

- **generic name:** levosimendan
- **ATC codes:** `C01CX08`
- **DrugBank:** [DB00922](https://go.drugbank.com/drugs/DB00922)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Levosimendan increases calcium sensitivity to myocytes by binding to troponin C in a calcium dependent manner. This increases contractility without raising calcium levels. It also relaxes vascular smooth muscle by opening adenosine triphosphate sensitive potassium channels. Levosimendan is used to manage acutely decompensated congestive heart failure. Levosimendan is under investigation in clinical trial NCT00527059 (Renal Effects of Levosimendan in Patients Admitted With Acute Decompensated Heart Failure).

**Indication.** For short term treatment of acutely decompensated severe chronic heart failure (CHF). Also being investigated for use/treatment in heart disease.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 20:48 | 13:21 | 2/1/0 | 2/0/0 | 0/0/0 | 208,133/25,384 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bertin_2025](drugs/drug_levosimendan/Levosimendan_Bertin2025_reference.md) | Bertin S et al., Pharmacokinetics of levosimendan in cri…, Frontiers in pediatrics (2025) | [10.3389/fped.2025.1542417](https://doi.org/10.3389/fped.2025.1542417) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jonsson_2003](drugs/drug_levosimendan/Levosimendan_Jonsson2003_reference.md) | Jonsson EN et al., Population pharmacokinetics of levosime…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01778.x](https://doi.org/10.1046/j.1365-2125.2003.01778.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Bertin_2026](drugs/drug_levosimendan/Levosimendan_Bertin2026_reference.md) | Bertin S et al., Population Pharmacokinetics of Levosime…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01591-4](https://doi.org/10.1007/s40262-025-01591-4) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rump_1994](drugs/drug_levosimendan/pd_Rump_1994_CF.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rump_1994](drugs/drug_levosimendan/pd_Rump_1994_HR.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rump_1994](drugs/drug_levosimendan/pd_Rump_1994_LVP.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rump_1994](drugs/drug_levosimendan/pd_Rump_1994_NADH_fluorescence_area.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wanderer_2022](drugs/drug_levosimendan/pd_Wanderer_2022_unknown.md) | Wanderer S et al., Levosimendan as a therapeutic strategy…, Journal of neurointerventio… (2022) | [10.1136/neurintsurg-2021-017504](https://doi.org/10.1136/neurintsurg-2021-017504) |

## Coverage

- **PubMed hits:** 36 matched, 21 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bourgoin_2023.pdf` | Bourgoin P et al., Population Pharmacokinetics of Levosime…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-022-01199-y](https://doi.org/10.1007/s40262-022-01199-y) | [36631687](https://pubmed.ncbi.nlm.nih.gov/36631687) | The paper is a population PK study of levosimendan, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text, only relative changes (e.g., 78% increase) are mentioned. |
| `Jonsson_2003.pdf` | Jonsson EN et al., Population pharmacokinetics of levosime…, British journal of clinical… (2003) | popPK | 10 | [10.1046/j.1365-2125.2003.01778.x](https://doi.org/10.1046/j.1365-2125.2003.01778.x) | [12814448](https://pubmed.ncbi.nlm.nih.gov/12814448) | The paper reports a population PK model for levosimendan with explicit numeric values for clearance, central volume of distribution, and interindividual variability directly in the text. |
| `Põder_2003.pdf` | Põder P et al., Pharmacokinetic-pharmacodynamic interre…, International journal of cl… (2003) | popPK | 10 | not captured | [12940594](https://pubmed.ncbi.nlm.nih.gov/12940594) | The title confirms a PK/PD study of levosimendan, but the provided evidence contains only the title and no numeric parameter values. |
| `Kaheinen_2006.pdf` | Kaheinen P et al., Positive inotropic effect of levosimend…, Basic & clinical pharmacolo… (2006) | pd | 4 | [10.1111/j.1742-7843.2006.pto_231.x](https://doi.org/10.1111/j.1742-7843.2006.pto_231.x) | [16433895](https://www.ncbi.nlm.nih.gov/pubmed/16433895) | metadata signals extractable PD data (EC50) |
| `Antila_1998.pdf` | Antila S et al., The CYP3A4 inhibitor intraconazole does…, International journal of cl… (1998) | pgx | 7 | not captured | [9726699](https://www.ncbi.nlm.nih.gov/pubmed/9726699) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-09T20:39:37.440250+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Antila_1998 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (itraconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Antoniades_2009 | irrelevant | 2 | 3 | The paper is a review article that discusses pharmacokinetics qualitatively and cites general ranges (e.g., clearance 175-250 mL/h/kg) rather than reporting original quantitative population-PK parameter estimates from a specific study. |
| popPK | Bourgoin_2023 | relevant | 10 | 2 | The paper is a population PK study of levosimendan, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text, only relative changes (e.g., 78% increase) are mentioned. |
| popPK | Bourgoin_2023_2 | irrelevant | 0 | 0 | The provided text is only a correction notice for a paper and contains no original pharmacokinetic data or numeric parameter values. |
| popPK | Brixius_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of levosimendan's effect on myocardial contractility and does not report pharmacokinetic parameters. |
| popPK | Ertuna_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity in isolated human arteries and veins, reporting no pharmacokinetic parameters for levosimendan. |
| popPK | Kaheinen_2006 | irrelevant | 0 | 0 | The provided evidence consists only of a title indicating a mechanistic study on inotropic effects and lacks any pharmacokinetic data or quantitative disposition parameters. |
| PD | Kaheinen_2006 | not_relevant | 0 | 0 | The paper focuses on the mechanistic correlation between inotropic effect and Ca2+ sensitization/PDE inhibition, not on quantitative pharmacodynamic modeling or exposure-response relationships. |
| popPK | Konczalla_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cerebral vasospasm and does not report any pharmacokinetic parameters for levosimendan. |
| popPK | Kopustinskiene_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial potassium flux and does not report pharmacokinetic parameters. |
| popPK | Kortejärvi_2006 | irrelevant | 2 | 0 | The paper focuses on an in vitro-in vivo correlation (IVIVC) model for formulation development and does not report specific quantitative population pharmacokinetic parameter values (CL, V, etc.) for levosimendan in the provided evidence. |
| PGx | Lim_2019 | not_relevant | 0 | 0 | The paper focuses on drug repurposing and multi-target discovery (RIOK1 inhibition) for cancer, not on pharmacogenomic effects on PK/PD parameters. |
| popPK | Marcus_2026 | irrelevant | 0 | 0 | The study is a mechanistic animal trial assessing microvascular perfusion and mitochondrial respiration, not a pharmacokinetic study reporting disposition parameters like clearance or volume for levosimendan. |
| popPK | Pataricza_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxing effects on isolated portal veins, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Põder_2003 | relevant | 10 | 0 | The title confirms a PK/PD study of levosimendan, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Rump_1994 | irrelevant | 0 | 0 | The study is an in-vitro functional/pharmacodynamic investigation in isolated rabbit hearts, not a pharmacokinetic study, and reports no disposition parameters for levosimendan. |
| popPK | Szilágyi_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamics (inotropy and PDE inhibition) in guinea pig hearts, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wanderer_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxation in rat basilar arteries and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for levosimendan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_levosimendan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
