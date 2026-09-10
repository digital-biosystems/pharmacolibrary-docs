# omecamtiv mecarbil

- **generic name:** omecamtiv mecarbil
- **ATC codes:** `C01CX10`
- **DrugBank:** [DB11816](https://go.drugbank.com/drugs/DB11816)
- **groups:** investigational

## About

**Description.** Omecamtiv Mecarbil has been used in trials studying the treatment and basic science of Heart Failure, Echocardiogram, Pharmacokinetics, Chronic Heart Failure, and History of Chronic Heart Failure, among others.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 21:02 | 4:37 | 0/1/0 | 1/0/0 | 0/0/0 | 59,435/2,945 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Chen_2022](drugs/drug_omecamtiv_mecarbil/OmecamtivMecarbil_Chen2022_reference.md) | Chen PW et al., Population Pharmacokinetic Properties o…, Journal of cardiovascular p… (2022) | [10.1097/FJC.0000000000001207](https://doi.org/10.1097/FJC.0000000000001207) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ting_2023](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_L_type_Ca2_current_ICa_L.md) | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ting_2023](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_delayed_rectifier_K_current_IK_DR.md) | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ting_2023](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_late_voltage_gated_Na_current_INa_L.md) | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ting_2023](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_transient_voltage_gated_Na_current_INa_T.md) | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ting_2023](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_window_Na_current_INa_W.md) | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2022.pdf` | Chen PW et al., Population Pharmacokinetic Properties o…, Journal of cardiovascular p… (2022) | popPK | 10 | [10.1097/FJC.0000000000001207](https://doi.org/10.1097/FJC.0000000000001207) | [34983909](https://pubmed.ncbi.nlm.nih.gov/34983909) | The paper is a population PK study for omecamtiv mecarbil and explicitly reports quantitative values for clearance (11.7 L/h), central volume (275 L), and half-life (33 hours) in the text. |
| `Vu_2015.pdf` | Vu T et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2015) | popPK | 10 | [10.1002/jcph.538](https://doi.org/10.1002/jcph.538) | [25951506](https://pubmed.ncbi.nlm.nih.gov/25951506) | The title confirms a population PK study of omecamtiv mecarbil, but the provided evidence contains only the title and no numeric parameter values. |
| `Tang_2019.pdf` | Tang W et al., Dilated cardiomyopathy mutation in the…, The Journal of biological c… (2019) | pd | 4 | [10.1074/jbc.RA119.010217](https://doi.org/10.1074/jbc.RA119.010217) | [31578282](https://www.ncbi.nlm.nih.gov/pubmed/31578282) | metadata signals extractable PD data (EC50) |
| `Trivedi_2022.pdf` | Trivedi A et al., Pharmacokinetic Evaluation of the CYP3A…, Clinical pharmacology in dr… (2022) | pgx | 8 | [10.1002/cpdd.987](https://doi.org/10.1002/cpdd.987) | [34145992](https://www.ncbi.nlm.nih.gov/pubmed/34145992) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-09T21:00:40.856791+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Forouzandehmehr_2022 | not_relevant | 0 | 0 | The paper is an in silico study modeling the effects of omecamtiv mecarbil on cardiomyocytes with a specific HCM mutation, but it does not report pharmacogenomic data (genotype-phenotype associations) regarding PK or PD parameters in a clinical or experimental population. |
| popPK | Nagy_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac myosin activation in isolated muscle fibers and does not report any pharmacokinetic parameters. |
| popPK | Parikh_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study using GANs to model cardiac myocyte contraction, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Potoskueva_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscle physiology and does not report any pharmacokinetic parameters for omecamtiv mecarbil. |
| PD | Potoskueva_2025 | not_relevant | 3 | 2 | The study reports qualitative changes in muscle mechanics (velocity, force) at a single fixed concentration (1 μM) and different treatment durations, but does not provide a concentration-response curve or numeric PD parameters (e.g., EC50, Emax) for omecamtiv mecarbil. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on cardiac myosin motor activity and does not report pharmacokinetic parameters for omecamtiv mecarbil. |
| PD | Tang_2019 | not_relevant | 0 | 0 | The paper is an in vitro biophysical study of myosin motor activity and does not report in vivo pharmacodynamic or exposure-response data for omecamtiv mecarbil. |
| popPK | Ting_2023 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the effects of omecamtiv mecarbil on ionic currents, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Trivedi_2022 | not_relevant | 2 | 8 | The paper reports a difference in drug-drug interaction magnitude between CYP2D6 phenotypes, but does not report a direct pharmacokinetic parameter change driven by the genotype itself (i.e., it is a DDI study, not a primary PK/PD pharmacogenomic study). |
| popPK | Vu_2015 | relevant | 10 | 0 | The title confirms a population PK study of omecamtiv mecarbil, but the provided evidence contains only the title and no numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_omecamtiv_mecarbil`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
