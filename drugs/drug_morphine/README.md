# morphine

- **generic name:** morphine
- **ATC codes:** `N02AA01`, `N02AG01`
- **DrugBank:** [DB00295](https://go.drugbank.com/drugs/DB00295)
- **groups:** approved, investigational

## About

**Description.** Morphine, the main alkaloid of opium, was first obtained from poppy seeds in 1805.[A176035] It is a potent analgesic, though its use is limited due to tolerance, withdrawal, and the risk of abuse.[A176050] Morphine is still routinely used today, though there are a number of semi-synthetic opioids of varying strength such as [codeine], [fentanyl], [methadone], [hydrocodone], [hydromorphone], [meperidine], and [oxycodone].

Morphine was granted FDA approval in 1941.[L12114]

**Indication.** Morphine is used for the management of chronic, moderate to severe pain.[A176050]

Opiods, including morphine, are effective for the short term management of pain. Patients taking opioids long term may need to be monitored for the development of physical dependence, addiction disorder, and drug abuse.[L5728]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 05:06 | 14:27 | 2/0/0 | 0/1/0 | 0/0/0 | 351,745/25,968 | ollama / qwen3.8:27b-mtp-q8_0 | 22 | 9/3 | 12/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yalcin_2022](drugs/drug_morphine/Morphine_Yalcin2022_reference.md) | Yalcin N et al., Population pharmacokinetics in critical…, BMJ paediatrics open (2022) | [10.1136/bmjpo-2022-001512](https://doi.org/10.1136/bmjpo-2022-001512) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2024](drugs/drug_morphine/Morphine_Yang2024_reference.md) | Yang TE et al., Mechanistic pharmacokinetic-pharmacodyn…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13215](https://doi.org/10.1002/psp4.13215) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Simons_2023](drugs/drug_morphine/pd_Simons_2023_V_E55.md) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |

## Coverage

- **PubMed hits:** 588 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bardol_2025 | irrelevant | 1 | 0 | Morphine is only a background co-medication here, and no readable morphine PK parameter values are provided in the included text. |
| PD | Bardol_2025 | not_relevant | 4 | 2 | The paper reports that no significant effect of morphine was found on the pharmacodynamic endpoint (COMFORT-B score), and while a PK model for morphine was developed, no numeric PD parameters (Emax, EC50) for morphine are reported or derivable. |
| popPK | Ing_2012 | irrelevant | 2 | 0 | The paper is a MiniReview summarizing PK/PD concepts and literature without reporting original quantitative disposition parameters (CL, V, etc.) for morphine. |
| PD | Ing_2012 | not_relevant | 2 | 0 | The paper is a mini-review that describes PK/PD modeling concepts and summarizes findings from other studies, but it does not present original data or specific numeric PD parameters (e.g., Emax, EC50) for morphine in the provided text. |
| popPK | Johnson_2011 | irrelevant | 2 | 1 | The study focuses on naltrexone bioavailability and abuse-deterrent properties, reporting only basic morphine Cmax and Tmax values without clearance, volume, or compartmental PK parameters. |
| PD | Johnson_2011 | not_relevant | 2 | 1 | The paper is a review of bioavailability and safety studies that reports mean peak effect scores (VAS) for different formulations but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model linking morphine exposure to analgesic or euphoric effects. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of anesthetic sensitivity (isoflurane) in mice, where morphine is used as a co-administered agent to test microtubule modulation, and no morphine pharmacokinetic parameters (CL, V, etc.) are reported. |
| popPK | Lötsch_2005 | irrelevant | 2 | 2 | The paper is a review of PK/PD modeling that reports effect-compartment equilibration half-lives (t1/2,ke0) for morphine, but lacks the core disposition parameters (CL, V, Q) required for population pharmacokinetic extraction. |
| PD | Lötsch_2005 | not_relevant | 3 | 2 | The text is a review describing PK/PD modeling principles and citing literature for specific parameters, but it does not report original data or provide a table of numeric PD parameters (Emax, EC50, etc.) for morphine in this specific document. |
| popPK | Martini_2011 | irrelevant | 2 | 1 | The paper is a review of PKPD modeling that reports pharmacodynamic parameters (C50, ke0, receptor kinetics) for morphine, but lacks quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| PD | Martini_2011 | not_relevant | 2 | 0 | The paper is a review article that discusses PK/PD modeling concepts and cites other studies, but it does not present original data or specific numeric PD parameters for morphine in the provided text. |
| popPK | Packiasabapathy_2020 | irrelevant | 0 | 0 | The evidence is about methadone pharmacogenetics, not morphine, and no morphine PK parameters are present. |
| popPK | Simons_2023 | relevant | 8 | 2 | This is a population PK/PD study of morphine with a compartmental model, but the actual morphine PK numeric parameter table appears to be referenced rather than fully shown here. |
| popPK | Yang_2024 | irrelevant | 2 | 0 | The study focuses on naloxone PK and uses morphine only as a comparator in PK-PD simulations, with no original quantitative morphine PK parameters reported in the text. |
| PD | Yang_2024 | not_relevant | 4 | 2 | The paper uses published morphine PK/PD models for simulations but does not report or derive new numeric PD parameters for morphine in the text. |
| popPK | Zgierska_2025 | irrelevant | 0 | 0 | This is a behavioral pain-therapy trial and does not report morphine PK parameters; morphine appears only in MME dosing, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_morphine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
