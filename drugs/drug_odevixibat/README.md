# odevixibat

- **generic name:** odevixibat
- **ATC codes:** `A05AX05`
- **DrugBank:** [DB16261](https://go.drugbank.com/drugs/DB16261)
- **groups:** approved, investigational

## About

**Description.** Odevixibat, or A4250, is an ileal sodium/bile acid cotransporter inhibitor indicated for the treatment of pruritus in patients older than 3 months, with progressive familial intrahepatic cholestasis (PFIC).[A236808,L34793] Odevixibat is the first approved non-surgical treatment option for PFIC.[L34803] Previous therapies for PFIC included a bile acid sequestrant such as [ursodeoxycholic acid].[A236808]

Odevixibat was granted FDA and Health Canada approval on 20 July 2021 and 13 November 2023 respectively.[L34793,L49535]

**Indication.** Odevixibat is indicated for the treatment of pruritus in patients older than 3 months and 6 months with progressive familial intrahepatic cholestasis (PFIC) by the FDA and Health Canada respectively.[L46826,L49530] It is also indicated for the treatment of cholestatic pruritus in patients 12 months of age and older with Alagille Syndrome.[L46826] Odevixibat may not be effective in patients with PFIC type 2 with ABCB11 variants since these patients lack a functional bile salt export pump.[L34793]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 04:50 | 3:26 | 0/0/0 | 1/0/0 | 0/0/0 | 99,113/1,394 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/0 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Carreño_2025](drugs/drug_odevixibat/pd_Carre_o_2025_C4.md) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Carreño_2025](drugs/drug_odevixibat/pd_Carre_o_2025_GSRS_diarrhea.md) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |

## Coverage

- **PubMed hits:** 13 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2025 | irrelevant | 0 | 0 | The paper is a general tutorial on rare disease drug development and does not report any pharmacokinetic parameters for odevixibat. |
| PD | Ahmed_2025 | not_relevant | 0 | 0 | The paper is a general tutorial on rare disease drug development and does not contain specific pharmacodynamic data, models, or numeric parameters for odevixibat. |
| popPK | Billo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study analyzing transporter inhibition (IC50) and cross-reactivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume for odevixibat. |
| popPK | Carreño_2025 | irrelevant | 0 | 0 | The study focuses on linerixibat, not odevixibat, and reports pharmacodynamic parameters for C4 rather than pharmacokinetic parameters for the subject drug. |
| popPK | Floerl_2025 | irrelevant | 0 | 0 | The paper is an in-vitro transporter study where odevixibat is used only as a probe inhibitor, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Floerl_2025 | not_relevant | 3 | 2 | The paper reports in vitro transporter inhibition data (single-point % inhibition at 10 µM) for odevixibat, but does not provide a concentration-response curve or numeric PD parameters (e.g., IC50) for odevixibat, nor does it describe an in vivo exposure-response relationship. |
| PGx | Floerl_2025 | not_relevant | 0 | 0 | The paper characterizes transporter inhibition in vitro and does not report pharmacogenomic effects on odevixibat PK/PD parameters. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The paper is a general review of in silico approaches in precision medicine and does not report any pharmacokinetic parameters for odevixibat. |
| PD | Marques_2024 | not_relevant | 0 | 0 | The paper is a general review of in silico approaches in precision medicine and does not contain specific pharmacodynamic data, models, or numeric parameters for odevixibat. |
| popPK | Porwal_2023 | irrelevant | 2 | 0 | The paper is a review article that discusses odevixibat's pharmacokinetics generally but does not provide specific quantitative disposition parameters (CL, V, Q, ka) in the provided evidence. |
| PD | Porwal_2023 | not_relevant | 3 | 2 | The text is a review that provides qualitative dose-response data (percent reduction in bile acid AUC for specific doses) but does not report a formal PK/PD model, concentration-effect curve, or standard PD parameters like Emax or EC50. |
| popPK | de_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dose-response relationships for efficacy outcomes (pruritus and serum bile acids) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for odevixibat. |
| PD | de_2026 | not_relevant | 3 | 2 | The paper is a systematic review that explicitly concludes no consistent dose-response relationship was observed for odevixibat, and it does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence contains only the title of a clinical review or case report regarding odevixibat for pruritus, with no pharmacokinetic data, parameters, or quantitative disposition values present. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess an exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_odevixibat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
