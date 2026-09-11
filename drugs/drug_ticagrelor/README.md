# ticagrelor

- **generic name:** ticagrelor
- **ATC codes:** `B01AC24`
- **DrugBank:** [DB08816](https://go.drugbank.com/drugs/DB08816)
- **groups:** approved, investigational

## About

**Description.** Ticagrelor, or AZD6140, was first described in the literature in 2003.[A204170,A2903] Ticagrelor is an ADP derivative developed for its P2Y<sub>12</sub> receptor antagonism.[A2903] Unlike [clopidogrel], ticagrelor is not a prodrug.[A2903] It is marketed by Astra Zeneca as Brilinta in the US[L14201] and Brilique or Possia in the EU,[L14207].

Ticagrelor was granted EMA approval on 3 December 2010.[L14207]
Ticagrelor was granted FDA approval on 20 July 2011.[L14201]

**Indication.** Ticagrelor is indicated to reduce the risk of cardiovascular death, myocardial infarction, and stroke in patients with acute coronary syndrome or a history of myocardial infarction.[L14201] Ticagrelor is also indicated to reduce the risk of a first myocardial infarction or stroke in high risk patients with coronary artery disease.[L14201]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 00:04 | 23:35 | 3/2/0 | 1/2/0 | 0/0/0 | 858,465/40,326 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Amilon_2019](drugs/drug_ticagrelor/Ticagrelor_Amilon2019_reference.md) | Amilon C et al., Population Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00758-0](https://doi.org/10.1007/s40262-019-00758-0) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Henrich_2021](drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md) | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Li_2016](drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md) | Li J et al., Population pharmacokinetics of ticagrel…, International journal of cl… (2016) | [10.5414/CP202549](https://doi.org/10.5414/CP202549) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kathman_2022](drugs/drug_ticagrelor/Ticagrelor_Kathman2022_reference.md) | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Åstrand_2019](drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md) | Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019) | [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Åstrand_2019](drugs/drug_ticagrelor/pd_strand_2019_PRU.md) | Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019) | [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Henrich_2021](drugs/drug_ticagrelor/pd_Henrich_2021_PRU.md) | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kathman_2022](drugs/drug_ticagrelor/pd_Kathman_2022_LTA.md) | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kathman_2022](drugs/drug_ticagrelor/pd_Kathman_2022_PRU.md) | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kathman_2022](drugs/drug_ticagrelor/pd_Kathman_2022_VASP.md) | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |

## Coverage

- **PubMed hits:** 48 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amilon_2019.pdf` | Amilon C et al., Population Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-019-00758-0](https://doi.org/10.1007/s40262-019-00758-0) | [30972696](https://pubmed.ncbi.nlm.nih.gov/30972696) | The paper reports a population PK model for ticagrelor with specific numeric values for clearance (22.8 L/h) and PK/PD parameters (EC50 233 nmol/L) present in the text. |
| `Li_2016.pdf` | Li J et al., Population pharmacokinetics of ticagrel…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202549](https://doi.org/10.5414/CP202549) | [27191766](https://pubmed.ncbi.nlm.nih.gov/27191766) | The paper is a population PK study for ticagrelor and explicitly reports numeric values for ka, CL, and V in the text. |
| `Liu_2018.pdf` | Liu S et al., Population pharmacokinetics and pharmac…, European journal of clinica… (2018) | popPK | 10 | [10.1007/s00228-018-2427-3](https://doi.org/10.1007/s00228-018-2427-3) | [29442148](https://pubmed.ncbi.nlm.nih.gov/29442148) | The paper describes a population PK study for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Liu_2024.pdf` | Liu M et al., Population pharmacokinetic study and ap…, International journal of cl… (2024) | popPK | 10 | [10.5414/CP204550](https://doi.org/10.5414/CP204550) | [39037109](https://pubmed.ncbi.nlm.nih.gov/39037109) | The study is a population PK analysis of ticagrelor, but only the absorption rate constant (0.67/h) is explicitly provided in the text, while other key parameters like clearance and volume are described qualitatively or implied to be in the full model not shown. |
| `Liu_2023.pdf` | Liu Z et al., Integrated Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2023) | popPK | 9 | [10.1007/s40262-022-01208-0](https://doi.org/10.1007/s40262-022-01208-0) | [36735213](https://pubmed.ncbi.nlm.nih.gov/36735213) | The paper describes a population PK model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only PD metrics and model structure descriptions. |
| `Liu_2023_2.pdf` | Liu Y et al., Model-Informed Dosing Regimen of Ticagr…, Clinical pharmacology and t… (2023) | popPK | 9 | [10.1002/cpt.3048](https://doi.org/10.1002/cpt.3048) | [37702259](https://pubmed.ncbi.nlm.nih.gov/37702259) | The paper describes a population pharmacokinetic model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |

<sub>queue written 2026-09-05T23:42:38.708536+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 2 | 0 | This is a systematic review that summarizes and simulates existing models rather than reporting original quantitative PK parameter values for ticagrelor in the provided text. |
| PD | Chen_2024 | not_relevant | 3 | 1 | The paper is a systematic review and simulation study that summarizes existing models but does not report original numeric PD parameters (e.g., Emax, EC50) or specific concentration-effect curves for ticagrelor in the provided text. |
| popPK | Giacoppo_2025 | irrelevant | 0 | 0 | The paper is a clinical outcomes meta-analysis comparing antiplatelet therapies and does not report any pharmacokinetic parameters for ticagrelor. |
| popPK | Henrich_2021 | irrelevant | 2 | 0 | The study focuses on the PK/PD of selatogrel, and ticagrelor is used only as a comparator with literature-based PK parameters, for which no specific numeric values are provided in the evidence. |
| popPK | Infeld_2021 | irrelevant | 0 | 0 | The study focuses on platelet reactivity and pharmacodynamics, not pharmacokinetic parameters like clearance or volume. |
| popPK | Lee_2018 | irrelevant | 2 | 3 | This is a systematic review that reports summary Cmax and AUC values from primary studies but does not provide the specific compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Lee_2018 | not_relevant | 3 | 2 | The paper is a systematic review that qualitatively summarizes PK and PD data from other studies but does not present a specific exposure-response model or derive numeric PD parameters (e.g., Emax, EC50) for ticagrelor. |
| popPK | Liu_2018 | relevant | 10 | 0 | The paper describes a population PK study for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Liu_2023 | relevant | 9 | 2 | The paper describes a population PK model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only PD metrics and model structure descriptions. |
| popPK | Liu_2023_2 | relevant | 9 | 0 | The paper describes a population pharmacokinetic model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| popPK | Liu_2024 | relevant | 10 | 2 | The study is a population PK analysis of ticagrelor, but only the absorption rate constant (0.67/h) is explicitly provided in the text, while other key parameters like clearance and volume are described qualitatively or implied to be in the full model not shown. |
| popPK | Röshammar_2017 | irrelevant | 2 | 0 | The paper reports exposure-response relationships and median steady-state concentrations but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) or a compartmental model for ticagrelor. |
| popPK | Siller-Matula_2010 | irrelevant | 2 | 1 | The paper is a review article that summarizes pharmacokinetic properties of multiple drugs, including ticagrelor, but does not present original quantitative population-PK parameters (CL, V, Q) or compartmental models for ticagrelor. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 0 | The paper is a review article summarizing the pharmacology of various antiplatelet agents, including ticagrelor, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for ticagrelor. |
| popPK | Teng_2012 | irrelevant | 2 | 0 | The paper is a review summarizing the profile of ticagrelor and does not report original quantitative disposition parameters (CL, V, Q, ka) or compartmental model values. |
| PD | Teng_2012 | not_relevant | 2 | 1 | The text is a qualitative review summarizing the PK/PD profile of ticagrelor without providing specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Teng_2015_2 | irrelevant | 2 | 3 | The paper is a review that summarizes pharmacokinetic parameters (tmax, t1/2, bioavailability) but does not report quantitative compartmental model parameters (CL, V, Q, ka) or population-PK estimates. |
| PD | Teng_2015_2 | not_relevant | 4 | 2 | The paper is a review that references a sigmoid Emax model and includes a scatter plot of concentration vs. effect, but it does not provide the specific numeric PD parameters (Emax, EC50) or a detailed data table from which they can be derived. |
| popPK | Valgimigli_2024 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of efficacy and safety outcomes, not a pharmacokinetic study, and contains no PK parameters for ticagrelor. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating antiplatelet efficacy and safety outcomes, not a pharmacokinetic study, and contains no PK parameters for ticagrelor. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ticagrelor`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
