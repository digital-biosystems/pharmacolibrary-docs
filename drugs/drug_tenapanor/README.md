<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;tenapanor&quot;}]"></div>

# tenapanor

- **generic name:** tenapanor
- **ATC codes:** `A06AX08`
- **DrugBank:** [DB11761](https://go.drugbank.com/drugs/DB11761)
- **groups:** approved, investigational

## About

**Description.** Tenapanor is a novel, small molecule medication approved in September 2019 for the treatment of constipation-predominant irritable bowel-syndrome (IBS-C).[L8558] It was first designed and synthesized in 2012.[A185492] As an inhibitor of the sodium/hydrogen exchanger isoform 3 (NHE3) transporter, it is the first and currently only medication within its class[A185489,A185492,A185495] and therefore exists as a novel alternative in the treatment of IBS-C. In October 2023, tenapanor was approved for the treatment of chronic kidney disease.[L48511]

**Indication.** Tenapanor is indicated for the treatment of constipation-predominant irritable bowel syndrome (IBS-C) in adults.[L8558] 

It is also indicated to reduce serum phosphorus in adults with chronic kidney disease (CKD) on dialysis as add-on therapy in patients who have an inadequate response to phosphate binders or who are intolerant of any dose of phosphate binder therapy.[L48511]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 15:08 | 10:59 | 0/0/0 | 0/1/0 | 0/0/0 | 242,634/3,875 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 0/0 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Yin_2017](drugs/drug_tenapanor/pd_Yin_2017_NHE3.md) | Yin J et al., A common NHE3 single-nucleotide polymor…, American journal of physiol… (2017) | [10.1152/ajpgi.00044.2017](https://doi.org/10.1152/ajpgi.00044.2017) |

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akizawa_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on pill burden reduction and does not report pharmacokinetic parameters for tenapanor. |
| PD | Akizawa_2021 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating pill burden and serum phosphorus levels; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Aoki_2022 | irrelevant | 0 | 0 | The paper is a letter to the editor discussing clinical trial safety and dosing, containing no pharmacokinetic parameters or quantitative disposition data for tenapanor. |
| PD | Aoki_2022 | not_relevant | 0 | 0 | The text is a letter to the editor discussing study withdrawals and dose selection, containing no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Currò_2023 | irrelevant | 1 | 0 | The paper is a narrative review discussing pharmacological properties and safety without reporting original quantitative population pharmacokinetic parameter values (CL, V, etc.) for tenapanor. |
| PD | Currò_2023 | not_relevant | 2 | 1 | The paper is a qualitative review that mentions the IC50 concept to explain the mechanism of action but does not provide a specific numeric IC50 value or any extractable dose-response curve or PD model parameters. |
| popPK | Haggie_2018 | irrelevant | 0 | 0 | The paper focuses on the identification of SLC26A3 inhibitors (DRA-inh-A250) and uses tenapanor only as a comparator agent in functional assays, without reporting any pharmacokinetic parameters for tenapanor. |
| PD | Haggie_2018 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of a new SLC26A3 inhibitor (DRA-inh-A250); tenapanor is only mentioned as a comparator in a qualitative efficacy study without any exposure-response or dose-response modeling or numeric PD parameters. |
| popPK | Inaba_2022 | irrelevant | 0 | 0 | The paper is a Phase 2 clinical trial evaluating the efficacy (serum phosphorus levels) and safety of tenapanor, and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Inaba_2022_2 | irrelevant | 0 | 0 | The paper is a letter to the editor discussing clinical trial design and safety, containing no pharmacokinetic data or quantitative disposition parameters for tenapanor. |
| PD | Inaba_2022_2 | not_relevant | 0 | 0 | The text is a letter to the editor discussing study design, adverse events, and a typo, containing no pharmacodynamic data, models, or numeric parameters. |
| popPK | Johansson_2017 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the probe drug midazolam to assess CYP3A4 interactions, and tenapanor plasma concentrations were below the limit of quantification, so no quantitative disposition parameters for tenapanor are reported. |
| PGx | Johansson_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP inhibition) of tenapanor, not pharmacogenomic effects (gene variants) on its PK/PD. |
| popPK | Johansson_2017_2 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic effects (sodium/phosphate excretion) and in-vitro binding, and while plasma concentrations were measured, no quantitative pharmacokinetic parameters (CL, V, ka, etc.) are reported in the text. |
| popPK | Johansson_2017_3 | irrelevant | 0 | 0 | The study investigates the effect of tenapanor on the pharmacokinetics of cefadroxil (a probe drug), and tenapanor itself was not detected in plasma, so no PK parameters for tenapanor are reported. |
| PD | Johansson_2017_3 | not_relevant | 1 | 0 | The study is a drug-drug interaction assessment using cefadroxil PK as a biomarker; it reports no numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves for tenapanor. |
| popPK | Johansson_2017_4 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of food effects on sodium/phosphate absorption, explicitly stating that PK parameters were not appropriate because tenapanor has minimal systemic availability (all plasma levels were below the limit of quantification). |
| PD | Johansson_2017_4 | not_relevant | 3 | 2 | The study reports mean pharmacodynamic effects (stool/urinary sodium/phosphorus) for different food timing conditions but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50), as systemic exposure was below the limit of quantification. |
| popPK | Johansson_2017_5 | irrelevant | 2 | 0 | The study reports pharmacodynamic data (sodium/phosphate excretion) and qualitative PK findings (minimal systemic exposure) but does not provide quantitative PK parameters (CL, V, t1/2) in the text. |
| popPK | Pergola_2022 | irrelevant | 0 | 0 | The paper is a review article discussing phosphate management and tenapanor's mechanism of action, but it does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for tenapanor. |
| popPK | Rosenbaum_2018 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and safety, reporting that plasma concentrations were below the quantification limit in 98.5% of samples, with no quantitative PK parameters (CL, V, t1/2) provided in the text. |
| popPK | Sinagra_2020 | irrelevant | 1 | 0 | The paper is a review article summarizing evidence without providing original quantitative pharmacokinetic parameter values for tenapanor. |
| PD | Sinagra_2020 | not_relevant | 2 | 0 | The text is a review summary that qualitatively describes tenapanor's local pharmacodynamic profile and clinical efficacy but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Sprague_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hyperphosphatemia and does not report pharmacokinetic parameters (CL, V, ka, etc.) for tenapanor. |
| PD | Sprague_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (serum phosphate reduction) from a randomized trial but does not provide pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Stamatopoulos_2023 | irrelevant | 2 | 3 | The paper describes a physiologically based biopharmaceutics model (PBBM) for a minimally absorbed drug, reporting only input parameters (Vss, clearance) for simulation rather than derived population PK parameters from observed plasma data. |
| popPK | Suzuki_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for hyperphosphatemia and constipation that does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tenapanor. |
| PD | Suzuki_2025 | not_relevant | 2 | 1 | The paper is a clinical trial reporting group-level changes in serum phosphorus and stool consistency over time, but it does not provide individual subject concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50) for tenapanor. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper is a GWAS study on diverticular disease genetics and does not report pharmacokinetic or pharmacodynamic effects of tenapanor. |
| popPK | Yin_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of NHE3 polymorphisms and tenapanor's inhibitory potency (IC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zielińska_2015 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetics qualitatively without providing original quantitative disposition parameters or numeric values for tenapanor. |
| PD | Zielińska_2015 | not_relevant | 2 | 0 | The text is a review article that qualitatively discusses pharmacodynamics and mentions the need to optimize dose-response, but it does not report specific numeric PD parameters or extractable concentration-effect curves. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The provided evidence is only a title indicating a review of drugs for IBS, with no original pharmacokinetic data or numeric parameters for tenapanor. |
| PD | unknown_2020 | not_relevant | 1 | 0 | The text is a title for a review article on IBS drugs and contains no specific data, models, or numeric parameters for tenapanor. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The paper is a corrigendum correcting a typo in a clinical trial table and contains no pharmacokinetic data or parameters for tenapanor. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a corrigendum correcting a typo in a table and does not contain the original study data, dose-response curves, or numeric PD parameters. |
| popPK | unknown_2022_2 | irrelevant | 0 | 0 | The provided evidence contains only the title and no quantitative pharmacokinetic parameters or study data for tenapanor. |
| PD | unknown_2022_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess a pharmacodynamic relationship. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided evidence contains only a title and no quantitative pharmacokinetic parameters or study data for tenapanor. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess a pharmacodynamic relationship. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | The provided evidence is only a title indicating a review of drugs for IBS, with no original pharmacokinetic data or numeric parameters for tenapanor. |
| PD | unknown_2025 | not_relevant | 1 | 0 | The text is a title for a review article on IBS drugs and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric parameters for tenapanor. |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | The evidence is a comparison chart for IBS-C drugs and contains no pharmacokinetic data or quantitative disposition parameters for tenapanor. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The text is a title of a comparison chart for IBS-C drugs and contains no data, analysis, or numeric parameters for tenapanor. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tenapanor`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
