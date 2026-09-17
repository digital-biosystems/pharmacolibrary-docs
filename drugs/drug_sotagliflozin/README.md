<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;sotagliflozin&quot;}]"></div>

# sotagliflozin

- **generic name:** sotagliflozin
- **ATC codes:** `A10BK06`
- **DrugBank:** [DB12713](https://go.drugbank.com/drugs/DB12713)
- **groups:** approved, investigational

## About

**Description.** Sotagliflozin is a dual inhibitor of SGLT1 and SGLT2, the first of its kind,[A244499] which is approved for use in the EU, in combination with insulin, to improve glycemic control in patients with type 1 diabetes mellitus (T1DM) and a BMI ≥27 kg/m<sup>2</sup>.[L39705] Its potency in inhibiting SGLT2 is similar to that of other SGLT2 inhibitors, such as [canagliflozin] and [dapagliflozin], but its potency in inhibiting SGLT1 is >10-fold higher than its predecessors.[A244499] The added inhibition of intestinal SGLT1 delays glucose absorption in the distal small intestine and colon, thereby reducing post-prandial glucose levels.[A244470,A244499]

Sotagliflozin was approved by the EMA under the brand name "Zynquista" on April 26, 2019, for the treatment of type 1 diabetes.[L39734] A similar approval has also been sought in the US, but the FDA has since published a proposal to refuse the approval because the data submitted did not show that it was safe under the proposed conditions of use.[L39739] On March 22, 2022, the marketing authorization of sotagliflozin for the treatment of type 1 diabetes mellitus was withdrawn by the EMA due to commercial reasons.[L46616]

In May 2023, sotagliflozin was approved by the FDA to reduce the risk of cardiovascular death and heart failure in patients with high risk factors.[]

**Indication.** In the US, sotagliflozin is indicated to reduce the risk of cardiovascular death and heart failure in adults with heart failure, type 2 diabetes mellitus, chronic kidney disease, and other cardiovascular risk factors.[L46611]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 01:31 | 9:09 | 0/0/0 | 0/0/0 | 0/0/0 | 70,430/3,151 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 2/2 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2022.pdf` | He X et al., Pharmacokinetics, Pharmacodynamics, Saf…, Drug design, development an… (2022) | popPK | 8 | [10.2147/DDDT.S372575](https://doi.org/10.2147/DDDT.S372575) | [36097559](https://pubmed.ncbi.nlm.nih.gov/36097559) | The study is a Phase I PK study of sotagliflozin, but the evidence only provides qualitative descriptions and accumulation ratios, lacking specific numeric values for clearance, volume, or half-life. |
| `de_2025.pdf` | de Souza Gama F et al., Design, Optimization, and Biological Ev…, Journal of medicinal chemis… (2025) | pd | 5 | [10.1021/acs.jmedchem.5c02225](https://doi.org/10.1021/acs.jmedchem.5c02225) | [41385386](https://www.ncbi.nlm.nih.gov/pubmed/41385386) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-16T01:30:21.758408+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheong_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of weight reduction effects and does not report any pharmacokinetic parameters for sotagliflozin. |
| PD | Cheong_2022 | not_relevant | 3 | 2 | The paper is a meta-analysis that qualitatively identifies a dose-response relationship for sotagliflozin but does not provide specific numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for the drug. |
| popPK | Gumieniczek_2024 | irrelevant | 1 | 0 | The study focuses on lipophilicity analysis (chromatographic/computational) and only mentions PK parameters like clearance and volume of distribution in the context of correlation with lipophilicity, without reporting original quantitative PK model parameters for sotagliflozin. |
| PD | Gumieniczek_2024 | not_relevant | 1 | 0 | The paper analyzes lipophilicity and correlates it with static properties like IC50, but does not report an exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | He_2022 | relevant | 8 | 2 | The study is a Phase I PK study of sotagliflozin, but the evidence only provides qualitative descriptions and accumulation ratios, lacking specific numeric values for clearance, volume, or half-life. |
| PD | He_2022 | not_relevant | 3 | 2 | The paper reports qualitative dose-response trends (UGE elevation) and PK parameters but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve in the provided text. |
| popPK | Hegde_2023 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis focusing on renoprotective efficacy (eGFR decline) rather than pharmacokinetic parameters. |
| PD | Hegde_2023 | not_relevant | 2 | 1 | The paper is a network meta-analysis comparing clinical outcomes (eGFR decline) across different drug doses, not a pharmacodynamic modeling study; it reports odds ratios and SUCRA scores rather than numeric PD parameters like Emax, EC50, or concentration-effect curves. |
| popPK | Ismail_2026 | irrelevant | 0 | 0 | The paper is a clinical outcomes study analyzing suPAR biomarkers and cardiovascular events, containing no pharmacokinetic parameters for sotagliflozin. |
| PD | Ismail_2026 | not_relevant | 0 | 0 | The paper analyzes the association between a biomarker (suPAR) and clinical outcomes, not a pharmacodynamic exposure-response or dose-response relationship for sotagliflozin. |
| popPK | Jendle_2021 | irrelevant | 0 | 0 | The paper is a review discussing the efficacy and safety of dapagliflozin in Type 1 diabetes, with no pharmacokinetic data or quantitative disposition parameters for sotagliflozin. |
| PD | Jendle_2021 | not_relevant | 1 | 0 | The text is a review discussing dapagliflozin in T1D and only qualitatively mentions a dose-response for DKA risk with sotagliflozin without providing any numeric PD parameters or data. |
| popPK | Johnston_2021 | irrelevant | 0 | 0 | The paper focuses on efficacy modeling for empagliflozin in Type 1 diabetes and does not report pharmacokinetic parameters for sotagliflozin. |
| PD | Johnston_2021 | not_relevant | 0 | 0 | The paper focuses on empagliflozin, not sotagliflozin, and does not report sotagliflozin PD parameters. |
| popPK | Kluger_2018 | irrelevant | 0 | 0 | The paper is a systematic review of cardiovascular outcomes for other SGLT2 inhibitors (dapagliflozin, canagliflozin, empagliflozin) and does not contain pharmacokinetic data for sotagliflozin. |
| popPK | Liao_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of cardiorenal safety and efficacy outcomes, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Liao_2026 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical trial outcomes (cardiovascular and renal endpoints) and does not report pharmacokinetic data, concentration-effect relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for sotagliflozin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and reports aggregate efficacy/safety outcomes (e.g., HbA1c reduction) without any pharmacokinetic data, exposure-response modeling, or numeric PD parameters for sotagliflozin. |
| popPK | Matei_2026 | irrelevant | 0 | 0 | The paper is a review focusing on the mechanisms of natural compounds (resveratrol/viniferin) with sotagliflozin mentioned only as a clinically validated comparator, and no quantitative PK parameters for sotagliflozin are provided. |
| popPK | Morillas_2022 | irrelevant | 0 | 0 | The paper is a clinical review of SGLT2 inhibitors in acute heart failure and does not report any pharmacokinetic parameters for sotagliflozin. |
| PD | Morillas_2022 | not_relevant | 1 | 0 | The paper is a clinical review of SGLT2 inhibitors in acute heart failure and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for sotagliflozin. |
| popPK | Nuffer_2019 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety in type 1 diabetes and does not report quantitative pharmacokinetic parameters for sotagliflozin. |
| PD | Nuffer_2019 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical trial outcomes (HbA1c reduction, safety) without reporting any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The paper is a bioanalytical method validation study for sotagliflozin in rabbit plasma and does not report any pharmacokinetic disposition parameters (e.g., CL, V, t1/2). |
| PD | Patel_2026 | not_relevant | 0 | 0 | The paper describes the development and validation of an LC-MS/MS assay for quantifying sotagliflozin in rabbit plasma and contains no pharmacodynamic or exposure-response data. |
| popPK | Perkins_2020 | irrelevant | 0 | 0 | The study focuses on empagliflozin, not sotagliflozin, and does not report quantitative PK parameters for the subject drug. |
| PD | Perkins_2020 | not_relevant | 0 | 0 | The paper analyzes empagliflozin, not sotagliflozin. |
| popPK | Salvatore_2026 | irrelevant | 0 | 0 | The paper is a phenome-wide association study of clinical outcomes for GLP-1 RAs and SGLT2is, containing no pharmacokinetic parameters for sotagliflozin. |
| PD | Salvatore_2026 | not_relevant | 0 | 0 | The paper is a phenome-wide association study using electronic health records to compare clinical outcomes (diagnoses) between drug classes; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for sotagliflozin. |
| popPK | Sato_2024 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of HbA1c reduction (pharmacodynamics) for six SGLT2 inhibitors, explicitly excluding sotagliflozin from the analysis, and does not report any pharmacokinetic parameters for sotagliflozin. |
| PD | Sato_2024 | not_relevant | 0 | 0 | not captured |
| popPK | Sims_2018 | irrelevant | 1 | 0 | The paper is a narrative review that discusses sotagliflozin's clinical efficacy and safety but does not report original quantitative pharmacokinetic parameters (e.g., CL, V, ka) in the provided text. |
| PD | Sims_2018 | not_relevant | 2 | 0 | The paper is a narrative review summarizing clinical trial outcomes and safety profiles without presenting specific pharmacokinetic or pharmacodynamic modeling data or numeric PD parameters. |
| popPK | Sridharan_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of safety outcomes (adverse events) for SGLT2 inhibitors, not a pharmacokinetic study, and contains no quantitative PK parameters for sotagliflozin. |
| PD | Sridharan_2026 | not_relevant | 1 | 0 | The paper is a network meta-analysis of safety outcomes (odds ratios) and does not report pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect relationships for sotagliflozin. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (blood pressure and weight) and does not report any pharmacokinetic parameters for sotagliflozin. |
| PD | Wu_2022 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting aggregate mean differences and a qualitative mention of a dose-response relationship, but it does not provide specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of safety outcomes (adverse events) and does not report any pharmacokinetic parameters for sotagliflozin. |
| PD | Zhou_2022 | not_relevant | 1 | 0 | The paper is a meta-analysis of safety outcomes (adverse events) and does not report pharmacodynamic parameters (Emax, EC50) or exposure-response relationships. |
| popPK | de_2025 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | de_2025 | not_relevant | 0 | 0 | The paper focuses on the design and biological evaluation of novel triple inhibitors, not on the pharmacokinetic or pharmacodynamic modeling of sotagliflozin. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The text discusses dapagliflozin, not sotagliflozin, and contains no pharmacodynamic or exposure-response data. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is a title or heading ("Drugs for chronic heart failure") and contains no data, analysis, or mention of sotagliflozin or any pharmacodynamic parameters. |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The text is a title for a comparison chart and contains no data, analysis, or numeric parameters regarding sotagliflozin pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sotagliflozin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
