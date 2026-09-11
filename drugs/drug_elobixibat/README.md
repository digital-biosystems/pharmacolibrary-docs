# elobixibat

- **generic name:** elobixibat
- **ATC codes:** `A06AX09`
- **DrugBank:** [DB12486](https://go.drugbank.com/drugs/DB12486)
- **groups:** investigational

## About

**Description.** Elobixibat has been used in trials studying the treatment and basic science of Dyslipidemia, Constipation, Chronic Constipation, Functional Constipation, and Chronic Idiopathic Constipation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 08:27 | 9:13 | 0/0/0 | 1/1/0 | 0/0/0 | 144,689/16,550 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/1 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Carreño_2025](drugs/drug_elobixibat/pd_Carre_o_2025_C4.md) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Carreño_2025](drugs/drug_elobixibat/pd_Carre_o_2025_GSRS_diarrhea.md) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kumagai_2018](drugs/drug_elobixibat/pd_Kumagai_2018_7_hydroxy_4_cholesten_3_one.md) | Kumagai Y et al., Effect of single and multiple doses of…, British journal of clinical… (2018) | [10.1111/bcp.13698](https://doi.org/10.1111/bcp.13698) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kumagai_2018](drugs/drug_elobixibat/pd_Kumagai_2018_high_density_lipoprotein_cholesterol.md) | Kumagai Y et al., Effect of single and multiple doses of…, British journal of clinical… (2018) | [10.1111/bcp.13698](https://doi.org/10.1111/bcp.13698) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kumagai_2018](drugs/drug_elobixibat/pd_Kumagai_2018_low_density_lipoprotein_cholesterol.md) | Kumagai Y et al., Effect of single and multiple doses of…, British journal of clinical… (2018) | [10.1111/bcp.13698](https://doi.org/10.1111/bcp.13698) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kumagai_2018](drugs/drug_elobixibat/pd_Kumagai_2018_spontaneous_bowel_movement_frequency.md) | Kumagai Y et al., Effect of single and multiple doses of…, British journal of clinical… (2018) | [10.1111/bcp.13698](https://doi.org/10.1111/bcp.13698) |

## Coverage

- **PubMed hits:** 11 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Michiba_2025.pdf` | Michiba K et al., Characterization of intestinal transpor…, Drug metabolism and disposi… (2025) | pgx | 5 | [10.1016/j.dmd.2025.100075](https://doi.org/10.1016/j.dmd.2025.100075) | [40319556](https://www.ncbi.nlm.nih.gov/pubmed/40319556) | metadata signals extractable PGX data (SLC46A1) |

<sub>queue written 2026-09-11T08:20:48.051130+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Billo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study analyzing transporter inhibition (IC50) and cross-reactivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Carreño_2025 | irrelevant | 0 | 0 | The study focuses on linerixibat, not elobixibat, and models C4 biomarker kinetics rather than drug pharmacokinetics. |
| popPK | Chedid_2018 | irrelevant | 0 | 0 | The paper is a narrative review of elobixibat's mechanism and clinical efficacy for constipation, containing no quantitative pharmacokinetic parameters or compartmental models. |
| PD | Chedid_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical efficacy and mechanism of action but does not report specific numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response data. |
| popPK | Michiba_2025 | irrelevant | 0 | 0 | The paper focuses on in-vitro characterization of intestinal transporters for absorption prediction and does not report quantitative population pharmacokinetic parameters for elobixibat. |
| PGx | Michiba_2025 | not_relevant | 0 | 0 | The paper focuses on characterizing intestinal transporters in cell models for general drug absorption prediction and does not report pharmacogenomic effects on elobixibat PK/PD. |
| popPK | Wong_2013 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and mechanism of action, containing no quantitative pharmacokinetic parameter values for elobixibat. |
| PD | Wong_2013 | not_relevant | 2 | 0 | The text is a qualitative review/overview of Phase II trials and mechanism of action, containing no numeric PD parameters, dose-response curves, or PK/PD model fits. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focusing on bowel movement frequency, not a pharmacokinetic study reporting disposition parameters for elobixibat. |
| PD | Zhang_2020 | not_relevant | 3 | 2 | The paper is a model-based meta-analysis that reports aggregate effect sizes (maximal increase in bowel movements) for elobixibat, but it does not provide specific numeric PD parameters (like Emax, EC50) or an exposure-response curve for elobixibat in the provided text. |
| popPK | Zinsmeister_2013 | irrelevant | 0 | 0 | The paper is a statistical analysis of pharmacodynamic and clinical endpoints (colonic transit, stool frequency) and does not report pharmacokinetic parameters for elobixibat. |
| PD | Zinsmeister_2013 | not_relevant | 1 | 0 | The paper is a statistical review of coefficients of variation for endpoints in Phase IIA trials; it does not report specific concentration-effect or dose-response data or numeric PD parameters for elobixibat. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_elobixibat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
