# hemoglobin crosfumaril

- **generic name:** hemoglobin crosfumaril
- **ATC codes:** `B05AA08`
- **DrugBank:** [DB13864](https://go.drugbank.com/drugs/DB13864)
- **groups:** experimental

## About

**Description.** Hemoglobin in which the alpha-subunit are cross-linked intramolecularly.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 14:06 | 9:02 | 0/0/0 | 0/0/0 | 0/0/0 | 6,907/716 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Palaparthy_2001.pdf` | Palaparthy R et al., Pharmacokinetics of diaspirin cross-lin…, The Journal of pharmacy and… (2001) | popPK | 10 | [10.1211/0022357011775370](https://doi.org/10.1211/0022357011775370) | [11273013](https://pubmed.ncbi.nlm.nih.gov/11273013) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for diaspirin cross-linked hemoglobin (hemoglobin_crosfumaril) in a rat model, with all numeric values explicitly present in the text. |
| `dAlmeida_1998.pdf` | d'Almeida MS et al., Influence of sepsis on the plasma elimi…, Artificial cells, blood sub… (1998) | popPK | 9 | [10.3109/10731199809117458](https://doi.org/10.3109/10731199809117458) | [9635120](https://pubmed.ncbi.nlm.nih.gov/9635120) | The study reports quantitative pharmacokinetic parameters (half-life and volume of distribution) for diaspirin crosslinked hemoglobin (a hemoglobin crosfumaril analog) in rats, with specific numeric values provided in the text. |
| `OHara_2001.pdf` | O'Hara JF et al., Hemoglobin and methemoglobin concentrat…, Anesthesia and analgesia (2001) | popPK | 8 | [10.1097/00000539-200101000-00009](https://doi.org/10.1097/00000539-200101000-00009) | [11133598](https://pubmed.ncbi.nlm.nih.gov/11133598) | The study reports quantitative pharmacokinetic parameters (peak plasma concentration and half-life) for diaspirin cross-linked hemoglobin (DCLHb), which is the specific formulation of hemoglobin crosfumaril. |
| `Swan_1995.pdf` | Swan SK et al., Pharmacologic profile of diaspirin cros…, American journal of kidney… (1995) | popPK | 8 | [10.1016/0272-6386(95)90056-x](https://doi.org/10.1016/0272-6386(95)90056-x) | [7503066](https://pubmed.ncbi.nlm.nih.gov/7503066) | The study reports quantitative pharmacokinetic parameters (terminal half-life and AUC) for diaspirin cross-linked hemoglobin (DCLHb), which is the specific formulation of hemoglobin_crosfumaril, with values clearly present in the abstract text. |

<sub>queue written 2026-09-07T14:06:50.003699+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barve_1997 | irrelevant | 0 | 0 | The study reports hemodynamic effects (MAP, blood flow) of DCLHb, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Bloomfield_2004 | irrelevant | 2 | 0 | The study reports pharmacodynamic and safety data (hemoglobin levels, blood pressure) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) or a compartmental model for the drug. |
| PD | Bloomfield_2004 | not_relevant | 2 | 1 | The paper reports group-level mean changes in hemodynamics and plasma hemoglobin at specific time points after a single dose, but it does not provide individual subject data, concentration-effect curves, or fitted PD parameters (e.g., Emax, EC50) to derive a quantitative exposure-response relationship. |
| popPK | Bowes_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in rabbits evaluating neurological outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for hemoglobin_crosfumaril. |
| popPK | Buehler_2006 | irrelevant | 0 | 0 | The paper focuses on the chemical characterization and molecular structure of a hemoglobin-based oxygen carrier, not on the pharmacokinetic parameters of hemoglobin_crosfumaril. |
| popPK | Burhop_1992 | irrelevant | 0 | 0 | The study focuses on cardiopulmonary and immunologic responses (inflammation markers) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Erhart_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction between DCLHb and nitrovasodilators on blood pressure, not the pharmacokinetic disposition parameters of hemoglobin_crosfumaril. |
| PD | Erhart_2000 | not_relevant | 4 | 2 | The study reports a qualitative dose-response effect of DCLHb on the potency of nitrovasodilators but does not provide numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect curves in the provided text. |
| popPK | Ferrera_2002 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects (mean arterial pressure) of DCLHb in swine and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ledvina_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular contractions, not a pharmacokinetic study, and reports no disposition parameters for hemoglobin_crosfumaril. |
| popPK | Nelson_1992 | irrelevant | 2 | 0 | The paper describes the synthesis and general physiological tolerance of a hemoglobin derivative (GP-DCLHb) but does not report quantitative pharmacokinetic parameters (CL, V, ka) for hemoglobin_crosfumaril. |
| popPK | Piper_1998 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects (ICP, CPP, CBF) of diaspirin cross-linked hemoglobin in a brain injury model and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Przybelski_1996 | irrelevant | 2 | 1 | The study evaluates diaspirin cross-linked hemoglobin (DCLHb), which is a different drug from hemoglobin_crosfumaril (HbVF), and only reports half-life without a compartmental model or clearance/volume parameters. |
| PD | Przybelski_1996 | not_relevant | 3 | 1 | The study reports qualitative dose-related effects (LDH-5, blood pressure) and PK parameters (half-life) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Qi_2016 | irrelevant | 0 | 0 | The paper describes the chemical synthesis and characterization of a modified hemoglobin polymer, not a pharmacokinetic study reporting quantitative disposition parameters for hemoglobin_crosfumaril. |
| popPK | Remy_1999 | irrelevant | 0 | 0 | The paper is a general review of red blood cell substitutes and does not report specific quantitative pharmacokinetic parameters for hemoglobin_crosfumaril. |
| popPK | Ritchie_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasoactive effects on arterial rings, not a pharmacokinetic study, and does not report any disposition parameters for hemoglobin_crosfumaril. |
| popPK | Rogers_1995 | irrelevant | 0 | 0 | The paper focuses on in-vitro oxygen binding and redox kinetics of hemoglobin derivatives, not on pharmacokinetic disposition parameters (CL, V, etc.) for hemoglobin_crosfumaril. |
| popPK | Rémy_1999 | irrelevant | 0 | 0 | The paper is a review of red cell substitutes and does not report quantitative pharmacokinetic parameters for hemoglobin_crosfumaril. |
| popPK | Schubert_2002 | irrelevant | 0 | 0 | The study is a clinical safety trial of diaspirin crosslinked hemoglobin (DCLHb), not hemoglobin_crosfumaril, and does not report pharmacokinetic parameters. |
| popPK | Sloan_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting trauma management outcomes (GCS, fluid volumes) and does not contain any pharmacokinetic parameters for hemoglobin_crosfumaril. |
| popPK | Standl_2001 | irrelevant | 0 | 0 | The paper is a general review of hemoglobin-based oxygen carriers and does not report specific quantitative pharmacokinetic parameters for hemoglobin_crosfumaril. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_hemoglobin_crosfumaril`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
