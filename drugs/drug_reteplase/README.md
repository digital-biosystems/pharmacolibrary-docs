# reteplase

- **generic name:** reteplase
- **ATC codes:** `B01AD07`
- **DrugBank:** [DB00015](https://go.drugbank.com/drugs/DB00015)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Human tissue plasminogen activator, purified, glycosylated, 355 residues purified from CHO cells. Retavase is considered a "third-generation" thrombolytic agent, genetically engineered to retain and delete certain portions of human tPA. Retavase is a deletion mutein of human tPA formed by deleting various amino acids present in endogenous human tPA. Retavase contains 355 of the 527 amino acids of native human tPA (amino acids 1-3 and 176-527), and retains the activity-related kringle-2 and serine protease domains of human tPA. Three domains are deleted from retavase - kringle-1, finger, and epidermal growth factor (EGF).

**Indication.** For lysis of acute pulmonary emboli, intracoronary emboli, and management of myocardial infarction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:19 | 0:57 | 0/0/0 | 0/1/0 | 0/0/0 | 1,402/410 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_reteplase/pd_Yang_2023_PAI_1_concentration.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_reteplase/pd_Yang_2023_clot_lysis_time.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_reteplase/pd_Yang_2023_fibrinogen_concentration.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_reteplase/pd_Yang_2023_intracranial_hemorrhage_risk.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |

## Coverage

- **PubMed hits:** 15 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuiper_1995.pdf` | Kuiper J et al., Uptake, internalization and degradation…, Thrombosis and haemostasis (1995) | popPK | 8 | not captured | [8772228](https://pubmed.ncbi.nlm.nih.gov/8772228) | The study reports quantitative PK parameters (biphasic half-lives and phase percentages) for reteplase in rats, though it lacks explicit clearance or volume values. |

<sub>queue written 2026-09-06T05:19:27.569871+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atkinson_2000 | irrelevant | 0 | 0 | The paper is a clinical review of venous thromboembolism management that mentions reteplase dosing but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Bhatt_2024 | irrelevant | 0 | 0 | The paper describes the heterologous expression, purification, and in-vitro refolding of reteplase in E. coli, containing no pharmacokinetic or disposition parameters. |
| popPK | Bode_1997 | irrelevant | 1 | 0 | The text is a general overview/review of reteplase's clinical efficacy and safety without reporting specific quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action and thrombolytic efficacy of reteplase variants in vitro and in a murine model, without reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Chen_2022 | not_relevant | 0 | 0 | The paper describes the engineering of a drug variant (reteplase mutation) to improve efficacy, not the effect of a patient's genetic variant on the drug's PK/PD. |
| popPK | Cohen_1999 | irrelevant | 2 | 0 | The paper is a review discussing qualitative pharmacokinetic differences (clearance dependence, half-life) without providing specific quantitative parameter values for reteplase. |
| popPK | Fathi-Roudsari_2018 | irrelevant | 0 | 0 | The paper focuses on the recombinant production and expression of reteplase in E. coli, not on pharmacokinetic disposition parameters in humans or animals. |
| popPK | Gusev_2018 | irrelevant | 0 | 0 | The text is a general review of thrombolytic therapy history and mechanisms, containing no quantitative pharmacokinetic parameters for reteplase. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a general historical overview of thrombolytic therapy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Hilleman_2003 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of reteplase for clearing hemodialysis catheters and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Izadi_2021 | irrelevant | 0 | 0 | The paper is a plant biotechnology study on the production and ex vivo activity of reteplase Fc-fusions, reporting no in vivo pharmacokinetic parameters (CL, V, t1/2) for reteplase. |
| PD | Kuiper_1995 | not_relevant | 1 | 0 | The paper describes PK and catabolic mechanisms (uptake/degradation) but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a clinical trial assessing safety and efficacy, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume. |
| popPK | Llevadot_2001 | irrelevant | 2 | 0 | The paper is a narrative review of bolus fibrinolytics and does not report original quantitative pharmacokinetic parameter values for reteplase. |
| PD | Llevadot_2001 | not_relevant | 2 | 0 | The paper is a narrative review summarizing efficacy and safety outcomes of bolus fibrinolytics, not a primary study reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for reteplase. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a general review of thrombolytic mechanisms and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Martin_1996 | not_relevant | 0 | 0 | The study investigates the effect of renal dysfunction (a physiological state) on reteplase pharmacokinetics in rats, not the effect of a specific gene variant or genotype. |
| popPK | Martin_1999 | irrelevant | 2 | 0 | The text is a review/summary that mentions PK concepts (AUC, half-life comparison) but does not provide specific quantitative disposition parameters (CL, V, Q, ka) or a compartmental model for reteplase. |
| PD | Martin_1999 | not_relevant | 3 | 1 | The text is a qualitative review describing the rationale for dose selection based on AUC-patency correlations and PK half-life, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves. |
| popPK | Mohammadi_2021 | irrelevant | 0 | 0 | The paper is a protein engineering and in-vitro study focusing on structural design and fibrin affinity, not a pharmacokinetic study reporting disposition parameters for reteplase. |
| popPK | Nishanth_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study of reteplase in pulmonary embolism and does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Ouriel_2004 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy trial (RELAX) reporting bleeding and thrombus dissolution outcomes, with no pharmacokinetic parameters or disposition data for reteplase. |
| PD | Ouriel_2004 | not_relevant | 2 | 1 | The paper explicitly states there was "no clear dose-response relationship" and only provides qualitative efficacy/safety comparisons across dose groups without numeric PD parameters or concentration-effect curves. |
| popPK | Rashedi_2025 | irrelevant | 0 | 0 | The paper is a narrative review of fibrinolytic therapy indications and does not report any quantitative pharmacokinetic parameters for reteplase. |
| popPK | Sakharov_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrinolysis efficiency and ultrasound effects, not a pharmacokinetic study, and reports no disposition parameters for reteplase. |
| popPK | Shafiee_2015 | irrelevant | 0 | 0 | The paper is a study on the recombinant expression and purification of reteplase in E. coli, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Tebbe_1999 | irrelevant | 0 | 0 | The study focuses on hemodynamic efficacy and safety in pulmonary embolism, reporting no quantitative pharmacokinetic parameters (CL, V, etc.) for reteplase. |
| popPK | Topol_2000 | irrelevant | 0 | 0 | The paper reports clinical survival outcomes (mortality rates) from a large trial, not pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Verstraete_1999 | irrelevant | 1 | 0 | The paper is a review discussing the structural properties and clinical outcomes of reteplase but does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) or compartmental models. |
| popPK | Verstraete_2000 | irrelevant | 0 | 0 | The text is a general review of third-generation thrombolytics that mentions reteplase only in the context of clinical efficacy and mechanism, without reporting any quantitative pharmacokinetic parameters. |
| PGx | Verstraete_2000 | not_relevant | 0 | 0 | The text describes general properties and clinical outcomes of third-generation thrombolytics but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Wooster_1999 | irrelevant | 2 | 1 | This is a review article that summarizes published data and mentions a half-life of 15 minutes, but it does not report original quantitative disposition parameters (CL, V, Q) or a compartmental/population-PK model. |
| PD | Wooster_1999 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical outcomes and general pharmacodynamic properties (fibrin specificity) without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Yang_2023 | relevant | 8 | 2 | The paper is an in silico PK/PD study that uses quantitative PK parameters (clearance, volume, half-life) for reteplase, but the specific numeric values are located in Table 1 and Appendix A, which are not fully provided in the evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_reteplase`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
