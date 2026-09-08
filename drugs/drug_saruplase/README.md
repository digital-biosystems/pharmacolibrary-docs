# saruplase

- **generic name:** saruplase
- **ATC codes:** `B01AD08`
- **DrugBank:** [DB13646](https://go.drugbank.com/drugs/DB13646)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:23 | 1:56 | 0/1/0 | 0/0/0 | 0/0/0 | 7,859/1,035 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [de_1993](drugs/drug_saruplase/Saruplase_de1993_reference.md) | de Boer A et al., Pharmacokinetics of saruplase, a recomb…, Thrombosis and haemostasis (1993) | — |

## Coverage

- **PubMed hits:** 65 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1993.pdf` | de Boer A et al., Pharmacokinetics of saruplase, a recomb…, Thrombosis and haemostasis (1993) | popPK | 10 | not captured | [8236142](https://pubmed.ncbi.nlm.nih.gov/8236142) | The study reports quantitative PK parameters (clearance and volume of distribution) for saruplase in healthy subjects, with values explicitly stated in the abstract text. |

<sub>queue written 2026-09-06T05:22:53.203221+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1993 | irrelevant | 0 | 0 | The study investigates K2tu-PA (CGP 42935), not saruplase, and focuses on thrombolytic efficacy rather than PK parameters for the target drug. |
| popPK | Aliabeva_1998 | irrelevant | 0 | 0 | The study investigates recombinant pro-urokinase (proRUK), not saruplase. |
| popPK | Alla_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy for prourokinase (Pro-UK), not a pharmacokinetic study for saruplase. |
| popPK | Badylak_1988 | irrelevant | 0 | 0 | The study investigates single chain urokinase plasminogen activator (scu-PA) and t-PA, not saruplase, and does not report population pharmacokinetic parameters for the target drug. |
| popPK | Bell_2002 | irrelevant | 0 | 0 | The paper is a general review of thrombolytic agents and does not mention saruplase or provide any specific pharmacokinetic parameters for it. |
| PD | Bell_2002 | not_relevant | 0 | 0 | The text is a general review of thrombolytic agents and does not mention saruplase or provide any numeric pharmacodynamic parameters. |
| popPK | Breton_1995 | irrelevant | 0 | 0 | The study focuses on a pro-urokinase derivative conjugate, not saruplase, and does not report quantitative PK parameters for the target drug. |
| popPK | Collen_1991 | irrelevant | 2 | 0 | Saruplase is used as a comparator agent in animal studies, and no specific quantitative PK parameters (CL, V, ka) are reported for it, only relative comparisons of half-life and clearance. |
| popPK | Dewerchin_1992 | irrelevant | 0 | 0 | The study investigates a different drug (MA-15C5Hu/scu-PA-32k) and does not report pharmacokinetic parameters for saruplase. |
| popPK | Fitzgerald_1991 | irrelevant | 0 | 0 | The study investigates urokinase, t-PA, and prourokinase in a canine model, and saruplase is not mentioned or studied. |
| popPK | Frendl_2011 | irrelevant | 0 | 0 | The paper is a review of stroke management and fibrinolytic drugs (alteplase, tenecteplase, etc.) and does not mention saruplase or report any pharmacokinetic parameters for it. |
| popPK | Gurewich_1984 | irrelevant | 0 | 0 | The paper studies urokinase (pro-UK), not saruplase. |
| popPK | Gurewich_1993 | irrelevant | 0 | 0 | The paper focuses on the association of pro-urokinase and prekallikrein with platelets and does not report quantitative pharmacokinetic parameters for saruplase. |
| popPK | Harder_2000 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report any quantitative pharmacokinetic parameters for saruplase. |
| PD | Harder_2000 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and clinical management guidelines for thrombolytics, containing no numeric PD parameters, concentration-effect curves, or dose-response data for saruplase. |
| popPK | Higazi_1996 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on urokinase receptor interactions and does not report pharmacokinetic parameters for saruplase. |
| popPK | Higazi_1996_2 | irrelevant | 0 | 0 | The paper studies the mechanism of action of urokinase-type plasminogen activator (uPA), not the pharmacokinetics of saruplase. |
| popPK | Himmelreich_1993 | irrelevant | 0 | 0 | The paper discusses urokinase-type plasminogen activator (u-PA) in liver transplantation and does not mention saruplase or report any pharmacokinetic parameters for it. |
| popPK | Himmelreich_1993_2 | irrelevant | 0 | 0 | The paper investigates urokinase-type plasminogen activator (u-PA) and tissue-type plasminogen activator (t-PA) in liver transplantation, not the drug saruplase. |
| popPK | Holvoet_1993 | irrelevant | 0 | 0 | The study investigates chimeric plasminogen activators (scu-PA derivatives) in hamsters, not saruplase. |
| popPK | Komissarov_2013 | irrelevant | 0 | 0 | The study focuses on prourokinase (scuPA) and urokinase (uPA), not saruplase, and does not report population pharmacokinetic parameters for the target drug. |
| PD | Koster_1994 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in hemostatic markers (fibrinogen, alpha-2-antiplasmin) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Köhler_1991 | irrelevant | 0 | 0 | The study investigates urokinase (tcu-PA/scu-PA), not saruplase. |
| popPK | Matveev_1999 | irrelevant | 0 | 0 | The study investigates the distribution of recombinant pro-urokinase (PRU), not saruplase, and does not report quantitative PK parameters for the target drug. |
| popPK | Morton_1989 | irrelevant | 0 | 0 | The paper studies the catabolism of tissue-type plasminogen activator (t-PA) in cell lines, not the pharmacokinetics of saruplase. |
| popPK | Nguyen_1987 | irrelevant | 0 | 0 | The paper is a review of thrombolytic agents (t-PA, scu-PA, APSAC) and does not mention saruplase or provide any pharmacokinetic parameters. |
| popPK | Palazzolo_2023 | irrelevant | 0 | 0 | The study investigates a different drug (SCE5-scuPA) and does not report pharmacokinetic parameters for saruplase. |
| popPK | Spannagl_1995 | irrelevant | 0 | 0 | The study focuses on urokinase-type plasminogen activator (u-PA) and aprotinin, not saruplase. |
| popPK | Stefansson_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study on gp330-mediated endocytosis of urokinase and PAI-1, not a pharmacokinetic study of saruplase. |
| popPK | Stump_1987 | irrelevant | 0 | 0 | The study investigates urokinase-type plasminogen activator (scu-PA), not saruplase. |
| popPK | Ueshima_2006 | irrelevant | 0 | 0 | The paper is a general review of fibrinolytic agents and does not contain any specific pharmacokinetic data or quantitative parameters for saruplase. |
| popPK | Verstraete_1999 | irrelevant | 0 | 0 | The paper is a review of newer thrombolytic agents and does not mention saruplase or provide any pharmacokinetic parameters for it. |
| popPK | Verstraete_2000 | irrelevant | 0 | 0 | The paper is a review of third-generation thrombolytic drugs that does not mention saruplase or provide any quantitative pharmacokinetic parameters. |
| popPK | Wolfson_2020 | irrelevant | 0 | 0 | The study investigates the efficacy of plasminogen activators (tPA/scuPA) in a lung injury model and does not report pharmacokinetic parameters for saruplase. |
| PD | Wolfson_2020 | not_relevant | 3 | 1 | The paper describes a dose-response study in sheep but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect data in the provided text. |
| popPK | Yan_2007 | irrelevant | 0 | 0 | The study focuses on a chimaeric plasminogen activator (mAnxB1-RGDS-ScuPA) and does not report pharmacokinetic parameters for saruplase. |
| popPK | Zaitsev_2010 | irrelevant | 0 | 0 | The study investigates a novel RBC-targeted pro-urokinase construct (scFv/uPA-T) in mice, not the drug saruplase. |
| popPK | Zhang_1998 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on cell surface plasminogen activator activity and does not involve saruplase or report pharmacokinetic parameters. |
| popPK | de_1995 | irrelevant | 1 | 0 | The paper is a review discussing drug interactions and general pharmacokinetic properties (high clearance) of saruplase but does not report specific quantitative PK parameter values. |
| PD | de_1995 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and pharmacokinetic mechanisms (hepatic blood flow) without reporting any numeric PD parameters or concentration-effect data for saruplase. |
| PD | van_1995 | not_relevant | 2 | 1 | The study reports changes in PK parameters and qualitative trends in PD markers (u-PA antigen) relative to baseline, but does not provide a concentration-effect model, Emax/EC50, or numeric PD parameters describing the relationship between saruplase exposure and effect. |
| popPK | van_1995_2 | irrelevant | 0 | 0 | The study focuses on in-vitro binding characteristics of urokinase-type plasminogen activator (u-PA) in rat liver cells, not the pharmacokinetics of saruplase. |
| popPK | van_1996 | irrelevant | 0 | 0 | The study investigates recombinant tissue-type plasminogen activator (rt-PA), not saruplase. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_saruplase`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
