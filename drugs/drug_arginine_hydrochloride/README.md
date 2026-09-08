# arginine hydrochloride

- **generic name:** arginine hydrochloride
- **ATC codes:** `B05XB01`
- **DrugBank:** [DB00125](https://go.drugbank.com/drugs/DB00125)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** An essential amino acid that is physiologically active in the L-form.

**Indication.** Used for nutritional supplementation, also for treating dietary shortage or imbalance.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 17:29 | 11:49 | 1/2/0 | 0/0/0 | 0/0/0 | 184,256/11,670 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Awan_2024](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Awan2024_reference.md) | Awan SF et al., Phase 1 trial evaluating safety and pha…, JCI insight (2024) | [10.1172/jci.insight.175375](https://doi.org/10.1172/jci.insight.175375) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Wang2018_reference.md) | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yeo_2013](drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference.md) | Yeo TW et al., A randomized pilot study of L-arginine…, PloS one (2013) | [10.1371/journal.pone.0069587](https://doi.org/10.1371/journal.pone.0069587) |

## Coverage

- **PubMed hits:** 20 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2018.pdf` | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | popPK | 10 | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) | [28925806](https://pubmed.ncbi.nlm.nih.gov/28925806) | The study reports quantitative population PK parameters (CL, Q, V1, V2) for arginine, which is the active moiety of arginine hydrochloride, with all numeric values explicitly present in the text. |
| `Avogaro_2003.pdf` | Avogaro A et al., L-arginine-nitric oxide kinetics in nor…, Diabetes (2003) | popPK | 9 | [10.2337/diabetes.52.3.795](https://doi.org/10.2337/diabetes.52.3.795) | [12606522](https://pubmed.ncbi.nlm.nih.gov/12606522) | The paper describes a compartmental PK model for L-arginine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-07T17:24:48.907485+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amantana_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a cell-penetrating peptide-morpholino oligomer conjugate, not arginine hydrochloride, which is only mentioned as a supplement for toxicity assessment. |
| popPK | Avogaro_2003 | relevant | 9 | 0 | The paper describes a compartmental PK model for L-arginine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Avontuur_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-NAME and its metabolite L-NOARG, not arginine_hydrochloride. |
| popPK | Awan_2024 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of HIV-1 broadly neutralizing monoclonal antibodies (10E8VLS and VRC07-523LS), not arginine_hydrochloride. |
| PD | Awan_2024 | not_relevant | 0 | 0 | The paper reports PK and safety data for HIV-1 monoclonal antibodies (10E8VLS and VRC07-523LS), not arginine_hydrochloride, and contains no pharmacodynamic modeling or exposure-response analysis for the target drug. |
| popPK | Barr_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for citrulline, not arginine_hydrochloride. |
| popPK | Beardwell_1975 | irrelevant | 0 | 0 | The study measures arginine-vasopressin (AVP), not arginine hydrochloride, and reports PK parameters for AVP only. |
| popPK | Cruz_2025 | irrelevant | 0 | 0 | The paper is a review on viscosity mitigation for high-concentration protein therapeutics (antibodies) and does not study arginine_hydrochloride or report any pharmacokinetic parameters for it. |
| PD | Cruz_2025 | not_relevant | 0 | 0 | The paper is a review on formulation development and viscosity mitigation for biotherapeutics; it does not report pharmacodynamic or exposure-response data for arginine hydrochloride. |
| popPK | Ferl_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiolabeled peptide 64Cu-DOTA-RGD, not arginine_hydrochloride. |
| popPK | Fike_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for L-citrulline, not arginine_hydrochloride. |
| popPK | Gaudinski_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody VRC01LS, not arginine_hydrochloride, which is only mentioned as a formulation excipient. |
| PD | Gaudinski_2018 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and neutralization activity for the monoclonal antibody VRC01LS, not arginine_hydrochloride. |
| popPK | Ghosh_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of pegzilarginase (an enzyme therapy), not arginine_hydrochloride, which is the substrate/metabolite being measured. |
| popPK | Gonce_1990 | irrelevant | 0 | 0 | The study is a nutritional/immunological efficacy trial in guinea pigs reporting survival and nitrogen balance, not a pharmacokinetic study with disposition parameters. |
| PD | Gonce_1990 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response trend for amino acid levels and survival outcomes across dietary groups, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for arginine hydrochloride. |
| popPK | Green_1994 | irrelevant | 0 | 0 | The paper studies atrial natriuretic peptide (ANP) in cultured cells and does not report pharmacokinetic parameters for arginine_hydrochloride. |
| popPK | Lambert_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 177Lu-Dotatate, with arginine serving only as a co-administered amino acid component, not the subject drug. |
| popPK | Longo_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glycerol phenylbutyrate (GPB) and its metabolites, not arginine_hydrochloride. |
| PD | Longo_2021 | not_relevant | 0 | 0 | The paper reports PK and safety data for glycerol phenylbutyrate, not arginine hydrochloride, and does not provide a quantitative exposure-response or dose-response model with numeric PD parameters. |
| popPK | Modi_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TP-9201 (a GPIIbIIIa antagonist), not arginine_hydrochloride. |
| popPK | Modi_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TP-9201 (an RGD peptide), not arginine_hydrochloride. |
| popPK | Nilsson_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of terlipressin (TGLVP), not arginine_hydrochloride. |
| popPK | Niu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of losartan potassium, not arginine_hydrochloride. |
| popPK | Preijers_2021 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for clotting factors (FVIII/FIX) and desmopressin, not arginine hydrochloride. |
| popPK | Soria-Chacartegui_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tramadol, not arginine_hydrochloride (which is only mentioned as a co-administered excipient/vehicle). |
| popPK | Vertiz-Hernandez_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenacetin, with L-arginine serving only as a co-administered agent to test its effect on hepatic blood flow, not as the subject drug for PK parameter extraction. |
| popPK | Yeo_2008 | irrelevant | 2 | 0 | The study is a safety and hemodynamic assessment of L-arginine infusion that does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Yeo_2013 | relevant | 9 | 4 | The paper reports a compartmental PK model for L-arginine hydrochloride with some numeric values (Q, BSV) visible in the evidence, but key parameters like CL and V are likely in Table 3 which is not fully provided. |
| PD | Yeo_2013 | not_relevant | 2 | 1 | The paper reports population PK parameters and qualitative safety/efficacy outcomes (no significant change in lactate or RH-PAT), but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_arginine_hydrochloride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
