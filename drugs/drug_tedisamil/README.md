# tedisamil

- **generic name:** tedisamil
- **ATC codes:** `C01BD06`
- **DrugBank:** [DB06200](https://go.drugbank.com/drugs/DB06200)
- **groups:** experimental

## About

**Description.** Tedisamil (planned trade name Pulzium) is an investigational drug for atrial fibrillation and atrial flutter. It is currently being developed by Solvay and is currently under regulatory review by the United States Food and Drug Administration.

**Indication.** Investigated for use/treatment in arrhythmia, atrial fibrillation, and angina.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 12:05 | 6:16 | 0/0/0 | 2/1/0 | 0/0/0 | 59,030/3,914 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wettwer_1998](drugs/drug_tedisamil/pd_Wettwer_1998_transient_outward_current_Ito_amplitude.md) | Wettwer E et al., Mechanism of block by tedisamil of tran…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0702110](https://doi.org/10.1038/sj.bjp.0702110) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zitron_2002](drugs/drug_tedisamil/pd_Zitron_2002_unknown.md) | Zitron E et al., Bertosamil blocks HERG potassium channe…, British journal of pharmaco… (2002) | [10.1038/sj.bjp.0704859](https://doi.org/10.1038/sj.bjp.0704859) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sarraf_2003](drugs/drug_tedisamil/pd_Sarraf_2003_unknown.md) | Sarraf G et al., Tedisamil and lidocaine enhance each ot…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705373](https://doi.org/10.1038/sj.bjp.0705373) |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faivre_1998.pdf` | Faivre JF et al., Comparative effects of glibenclamide, t…, Journal of cardiovascular p… (1998) | pd | 5 | [10.1097/00005344-199804000-00013](https://doi.org/10.1097/00005344-199804000-00013) | [9554804](https://www.ncbi.nlm.nih.gov/pubmed/9554804) | metadata signals extractable PD data (EC50) |
| `Pfründer_1991.pdf` | Pfründer D et al., Tedisamil blocks single large-conductan…, Pflugers Archiv : European… (1991) | pd | 4 | [10.1007/BF00550866](https://doi.org/10.1007/BF00550866) | [1876480](https://www.ncbi.nlm.nih.gov/pubmed/1876480) | metadata signals extractable PD data (IC50) |
| `Quast_1995.pdf` | Quast U et al., Ba2+ differentially inhibits the Rb+ ef…, Naunyn-Schmiedeberg's archi… (1995) | pd | 4 | [10.1007/BF00168920](https://doi.org/10.1007/BF00168920) | [8750921](https://www.ncbi.nlm.nih.gov/pubmed/8750921) | metadata signals extractable PD data (IC50) |
| `Thormann_1993.pdf` | Thormann J et al., Tedisamil (KC 8857) is a new specific b…, American heart journal (1993) | pd | 4 | [10.1016/0002-8703(93)90990-q](https://doi.org/10.1016/0002-8703(93)90990-q) | [8480574](https://www.ncbi.nlm.nih.gov/pubmed/8480574) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-09T12:04:36.153019+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berger_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel inhibition in rat myocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Doggrell_2001 | irrelevant | 2 | 1 | The paper is a mechanistic review that mentions a plasma half-life of ~10h but lacks quantitative compartmental PK parameters (CL, V, Q) or a population PK model. |
| popPK | Faivre_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel effects in guinea pig myocytes and does not report pharmacokinetic parameters for tedisamil. |
| popPK | Fischbach_2001 | irrelevant | 0 | 0 | The paper is a pharmacodynamic/efficacy study in canine models reporting antiarrhythmic effects, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for tedisamil. |
| popPK | Guillemare_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ion channels where tedisamil is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Guillemare_1995 | not_relevant | 0 | 0 | The paper studies glibenclamide's effect on KATP channels in Xenopus oocytes; tedisamil is only mentioned as a blocker that antagonizes glibenclamide, with no PD or exposure-response data provided for tedisamil. |
| popPK | Kessler_1997 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of potassium channels in rat aorta where tedisamil is used only as a channel blocker, not as the subject of a pharmacokinetic analysis. |
| PD | Kessler_1997 | not_relevant | 1 | 0 | The paper uses tedisamil only as a qualitative blocker to characterize potassium channel mechanisms; it does not report a concentration-effect curve or numeric PD parameters (e.g., IC50) for tedisamil itself. |
| popPK | Kreye_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tedisamil's effects on vascular smooth muscle and potassium channels, reporting no pharmacokinetic parameters. |
| popPK | McLarnon_1997 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of a tedisamil analogue (KC8851) on ion channels, reporting no pharmacokinetic parameters for tedisamil. |
| popPK | Pfründer_1991 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of ion channel blocking, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Quast_1995 | irrelevant | 0 | 0 | The paper studies levcromakalim and minoxidil sulfate in rat aorta and does not involve tedisamil or pharmacokinetic parameters. |
| PD | Quast_1995 | not_relevant | 0 | 0 | The paper studies levcromakalim and minoxidil sulfate, not tedisamil. |
| popPK | Radicke_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of tedisamil's effect on ion channels, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Sarraf_2003 | irrelevant | 0 | 0 | The study is an in-vivo pharmacodynamic and electrophysiological assessment of antiarrhythmic efficacy (ED50, QT interval) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Thormann_1993 | irrelevant | 0 | 0 | The paper focuses on the hemodynamic effects (contractility) of tedisamil using the conductance technique, not on pharmacokinetic disposition parameters. |
| PD | Thormann_1993 | not_relevant | 0 | 0 | The paper investigates the effect of tedisamil on myocardial contractility using a conductance technique but does not report a concentration-effect or dose-response relationship with numeric PD parameters. |
| popPK | Thormann_1993_2 | irrelevant | 0 | 0 | The study is a hemodynamic analysis of tedisamil's inotropic and bradycardic effects, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Thormann_1993_2 | not_relevant | 3 | 2 | The study reports hemodynamic changes (heart rate, ESPVR slope) after a single fixed dose (0.3 mg/kg) but does not provide plasma concentrations or fit a dose-response/PD model to derive parameters like Emax or EC50. |
| popPK | Wettwer_1998 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of action (channel block) of tedisamil, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zitron_2002 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of bertosamil (a related compound) on HERG channels in Xenopus oocytes, not the pharmacokinetics of tedisamil. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of tedisamil. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for tedisamil. |
| popPK | van_2009 | irrelevant | 2 | 0 | The study reports only relative changes in AUC and Cmax for a drug interaction, lacking absolute quantitative disposition parameters (CL, V, ka) or a compartmental model for tedisamil. |
| PD | van_2009 | not_relevant | 3 | 2 | The paper reports PK interaction data and mean changes in PD endpoints (QTc, PR) for fixed doses, but does not provide a concentration-effect model, Emax/EC50 parameters, or a dose-response curve. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tedisamil`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
