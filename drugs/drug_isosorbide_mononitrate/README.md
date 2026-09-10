# isosorbide mononitrate

- **generic name:** isosorbide mononitrate
- **ATC codes:** `C01DA14`
- **DrugBank:** [DB01020](https://go.drugbank.com/drugs/DB01020)
- **groups:** approved, investigational

## About

**Description.** Isosorbide mononitrate is an organic nitrate with vasodilating properties. It is an anti-anginal agent that works by relaxing the smooth muscles of both arteries and veins, but but predominantly veins to reduce cardiac preload.[L11698, L11743] Isosorbide mononitrate is an active metabolite of [isosorbide dinitrate]. Like other organic nitrates, isosorbide mononitrate acts as a prodrug for its active metabolite, [nitric oxide], which mediates the therapeutic action of isosorbide mononitrate.[L11743] Isosorbide mononitrate has a longer duration of action than [nitroglycerin] due to its slow onset of absorption and metabolism.[T28]

First approved by the FDA in 1991,[L11743] isosorbide mononitrate is used for the prevention and management of angina pectoris caused by coronary artery disease; however, the onset of action of orally-administered isosorbide mononitrate is not rapid enough to offset an acute anginal episode.[L11698] It is available in oral tablets generically and under the brand name ISMO and Monoket. The extended-release forms of the drug are also available generically and under the brand name Imdur.[L11743]

**Indication.** Isosorbide mononitrate is indicated for the prevention and management of angina pectoris due to coronary artery disease. The onset of action of oral isosorbide mononitrate is not sufficiently rapid to be useful in aborting an acute anginal episode.[L11698]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 22:13 | 8:03 | 0/0/0 | 0/0/0 | 0/0/0 | 60,922/2,884 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 27 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luo_1999.pdf` | Luo WX et al., Pharmacokinetics of sustained-release c…, Zhongguo yao li xue bao = A… (1999) | popPK | 8 | not captured | [11270999](https://pubmed.ncbi.nlm.nih.gov/11270999) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, MRT, AUC) for isosorbide mononitrate in humans, with values clearly present in the text. |
| `Johnson_1981.pdf` | Johnson KI et al., Relationship between the pharmacodynami…, Arzneimittel-Forschung (1981) | pd | 5 | not captured | [7196234](https://www.ncbi.nlm.nih.gov/pubmed/7196234) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-09T22:12:31.498920+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bennett_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxation in rabbit aortic rings and does not report pharmacokinetic disposition parameters for isosorbide mononitrate. |
| popPK | Boettcher_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic (PD) interaction trial evaluating blood pressure and heart rate effects, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.) for isosorbide mononitrate. |
| PD | Boettcher_2022 | not_relevant | 2 | 1 | The study reports only qualitative hemodynamic changes (mean differences in BP/HR) and explicitly states no consistent dose-dependent PD effects were noted, without providing numeric PD parameters or concentration-effect curves. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any pharmacokinetic parameters for isosorbide mononitrate. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters for isosorbide mononitrate. |
| popPK | Frampton_1992 | irrelevant | 0 | 0 | The paper is a review of nicorandil, and isosorbide mononitrate is only mentioned as a comparator for adverse events without any pharmacokinetic data. |
| PD | Frampton_1992 | not_relevant | 0 | 0 | The text is a review of nicorandil and only qualitatively compares its efficacy and side effects to isosorbide mononitrate without providing any numeric PD parameters or exposure-response data for isosorbide mononitrate. |
| PGx | Frampton_1992 | not_relevant | 0 | 0 | The paper is a review of nicorandil's pharmacology and efficacy, with no mention of pharmacogenomics or gene variants affecting isosorbide mononitrate PK/PD. |
| popPK | Greenberg_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and cGMP elevation, not a pharmacokinetic study reporting disposition parameters for isosorbide mononitrate. |
| popPK | Johnson_1981 | irrelevant | 0 | 0 | The study focuses on isosorbide dinitrate, not isosorbide mononitrate, and no quantitative PK parameters for the target drug are provided. |
| PD | Johnson_1981 | not_relevant | 0 | 0 | The paper studies isosorbide dinitrate, not isosorbide mononitrate. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of end-tidal carbon dioxide on cerebral oxygen saturation and does not report pharmacokinetic parameters for isosorbide mononitrate. |
| PD | Ki_2018 | not_relevant | 0 | 0 | The paper analyzes the relationship between end-tidal CO2 and cerebral oxygen saturation, not the pharmacodynamics of isosorbide mononitrate. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of malonyl-sildenafil, using isosorbide mononitrate only as a co-administered agent to test for drug-drug interactions (hypotension), without reporting any PK parameters for isosorbide mononitrate. |
| PD | Lee_2023 | not_relevant | 0 | 0 | The paper focuses on a PDE5 inhibitor (malonyl-sildenafil); isosorbide mononitrate is used only as a negative control to demonstrate lack of systemic interaction, with no PD or exposure-response analysis performed for it. |
| popPK | Merz_1992 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, MRT) for isosorbide mononitrate, but lacks specific compartmental parameters like clearance (CL) or volume (V) required for population PK modeling. |
| PD | Merz_1992 | not_relevant | 2 | 1 | The paper reports bioequivalence and qualitative PD observations (plateau effect on SBP &gt;1.5 umol/l) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| popPK | Momi_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacological properties of NCX 6560 and atorvastatin, using isosorbide mononitrate only as a positive control/comparator without reporting any pharmacokinetic parameters. |
| PD | Momi_2007 | not_relevant | 0 | 0 | The paper focuses on NCX 6560 and atorvastatin; isosorbide mononitrate is only mentioned as a positive control in a single-dose mortality and blood pressure experiment without any dose-response curve or PD parameter estimation. |
| PGx | Panfili_2012 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic adverse effect (bladder hypotonia) of ranolazine, not a pharmacogenomic effect on the PK/PD of isosorbide mononitrate. |
| popPK | Pello_1992 | irrelevant | 2 | 1 | The study focuses on isosorbide dinitrate as the subject drug, reporting only plasma concentration ranges for its metabolite isosorbide mononitrate without providing specific PK parameters like clearance or volume. |
| PD | Pello_1992 | not_relevant | 2 | 1 | The study reports PK parameters and a qualitative change in blood pressure response to a challenge dose (tolerance), but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for isosorbide mononitrate. |
| popPK | Sinnappah_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, not isosorbide mononitrate. |
| PD | Sinnappah_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of metformin in haemodialysis patients and does not contain any data or analysis regarding isosorbide mononitrate or any pharmacodynamic/exposure-response relationships. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for isosorbide mononitrate. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug interaction prevalence in prescription data and contains no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| popPK | Stokes_1999 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic effects (blood pressure and pulse wave) and only mentions plasma nitrate concentrations without reporting quantitative pharmacokinetic parameters like clearance or volume. |
| PD | Stokes_1999 | not_relevant | 3 | 2 | The study reports qualitative changes in blood pressure and pulse wave parameters at peak and trough concentrations but does not provide a concentration-effect curve, Emax, EC50, or other numeric PD parameters. |
| popPK | Stokes_2003 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (blood pressure and pulse wave contour) rather than pharmacokinetic parameters, and no PK values are reported. |
| PD | Stokes_2003 | not_relevant | 2 | 1 | The paper reports qualitative and percentage changes in hemodynamic parameters (e.g., 50% decrease in augmentation index) but does not provide concentration-effect data, PK parameters, or numeric PD model parameters (Emax, EC50) for isosorbide mononitrate. |
| popPK | Stokes_2003_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of blood pressure and pulse wave contour, reporting no pharmacokinetic parameters for isosorbide mononitrate. |
| PD | Stokes_2003_2 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (BP reduction) and statistical significance but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve. |
| popPK | Thadani_1988 | irrelevant | 1 | 0 | The text is a qualitative review discussing general pharmacokinetic properties without reporting any specific quantitative parameter values (e.g., CL, V, t1/2) for isosorbide mononitrate. |
| PD | Thadani_1988 | not_relevant | 1 | 0 | The text is a qualitative review stating that a reliable concentration-response relationship cannot be established for isosorbide mononitrate due to tolerance, and it provides no numeric PD parameters or data. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The provided evidence contains no mention of isosorbide mononitrate or its pharmacokinetic parameters. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for isosorbide mononitrate. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or parameters for isosorbide mononitrate. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of isosorbide mononitrate pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_isosorbide_mononitrate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
