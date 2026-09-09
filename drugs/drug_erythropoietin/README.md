# erythropoietin

- **generic name:** erythropoietin
- **ATC codes:** `B03XA01`
- **DrugBank:** [DB00016](https://go.drugbank.com/drugs/DB00016)
- **groups:** approved, investigational

## About

**Description.** Erythropoietin (EPO) is a growth factor produced in the kidneys that stimulates the production of red blood cells. It works by promoting the division and differentiation of committed erythroid progenitors in the bone marrow [FDA Label]. Epoetin alfa (Epoge) was developed by Amgen Inc. in 1983 as the first rhEPO commercialized in the United States, followed by other alfa and beta formulations. Epoetin alfa is a 165-amino acid erythropoiesis-stimulating glycoprotein produced in cell culture using recombinant DNA technology and is used for the treatment of patients with anemia associated with various clinical conditions, such as chronic renal failure, antiviral drug therapy, chemotherapy, or a high risk for perioperative blood loss from surgical procedures [FDA Label]. It has a molecular weight of approximately 30,400 daltons and is produced by mammalian cells into which the human erythropoietin gene has been introduced. The product contains the identical amino acid sequence of isolated natural erythropoietin and has the same biological activity as the endogenous erythropoietin. Epoetin alfa biosimilar, such as Retacrit (epoetin alfa-epbx or epoetin zeta), has been formulated to allow more access to treatment options for patients in the market [L2784]. The biosimilar is approved by the FDA and EMA as a safe, effective and affordable biological product and displays equivalent clinical efficacy, potency, and purity to the reference product [A7504]. Epoetin alfa formulations can be administered intravenously or subcutaneously.

**Indication.** Indicated in adult and paediatric patients for the: 

- treatment of anemia due to Chronic Kidney Disease (CKD) in patients on dialysis and not on dialysis.
- treatment of anemia due to zidovudine in patients with HIV-infection. 
- treatment of anemia due to the effects of concomitant myelosuppressive chemotherapy, and upon initiation, there is a minimum of two additional months of planned chemotherapy.
- reduction of allogeneic RBC transfusions in patients undergoing elective, noncardiac, nonvascular surgery.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 19:43 | 12:07 | 1/4/0 | 0/0/0 | 0/0/0 | 48,020/35,130 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 3/7 | 9/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Frymoyer_2017](drugs/drug_erythropoietin/Erythropoietin_Frymoyer2017_reference.md) | Frymoyer A et al., High-dose erythropoietin population pha…, Pediatric research (2017) | [10.1038/pr.2017.15](https://doi.org/10.1038/pr.2017.15) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Chakraborty_2005](drugs/drug_erythropoietin/Erythropoietin_Chakraborty2005_reference.md) | Chakraborty A et al., Population pharmacokinetics of erythrop…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269520](https://doi.org/10.1177/0091270004269520) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Gaudard_2003](drugs/drug_erythropoietin/Erythropoietin_Gaudard2003_reference.md) | Gaudard A et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical drug investigation (2003) | [10.2165/00044011-200323030-00003](https://doi.org/10.2165/00044011-200323030-00003) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Jolling_2004](drugs/drug_erythropoietin/Erythropoietin_Jolling2004_reference.md) | Jolling K et al., Population pharmacokinetic analysis of…, Journal of pharmaceutical s… (2004) | [10.1002/jps.20200](https://doi.org/10.1002/jps.20200) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Olsson-Gisleskog_2007](drugs/drug_erythropoietin/Erythropoietin_OlssonGisleskog2007_reference.md) | Olsson-Gisleskog P et al., Population pharmacokinetics meta-analys…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746020-00004](https://doi.org/10.2165/00003088-200746020-00004) |

## Coverage

- **PubMed hits:** 258 matched, 63 returned
- **screened:** 16  ·  **relevant:** 7
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chakraborty_2005.pdf` | Chakraborty A et al., Population pharmacokinetics of erythrop…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004269520](https://doi.org/10.1177/0091270004269520) | [15647412](https://pubmed.ncbi.nlm.nih.gov/15647412) | The paper reports quantitative population PK parameters (CL/F, V/F, variability) for erythropoietin in the text. |
| `Gaudard_2003.pdf` | Gaudard A et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical drug investigation (2003) | popPK | 10 | [10.2165/00044011-200323030-00003](https://doi.org/10.2165/00044011-200323030-00003) | [23340923](https://pubmed.ncbi.nlm.nih.gov/23340923) | The paper reports a population PK model for erythropoietin with specific quantitative values for half-life (5.2 and 35.8 hours) and clearance (4.33 L/h) directly in the text. |
| `Jolling_2004.pdf` | Jolling K et al., Population pharmacokinetic analysis of…, Journal of pharmaceutical s… (2004) | popPK | 10 | [10.1002/jps.20200](https://doi.org/10.1002/jps.20200) | [15503315](https://pubmed.ncbi.nlm.nih.gov/15503315) | The paper reports a population pharmacokinetic model for pegylated erythropoietin in rats with all quantitative parameters (CL, Vc, Q, Vp, Ka, Tlag, F) explicitly listed in the text. |
| `Krzyzanski_2005.pdf` | Krzyzanski W et al., Pharmacokinetic and pharmacodynamic mod…, European journal of pharmac… (2005) | popPK | 10 | [10.1016/j.ejps.2005.06.010](https://doi.org/10.1016/j.ejps.2005.06.010) | [16102948](https://pubmed.ncbi.nlm.nih.gov/16102948) | The paper reports quantitative PK parameters for erythropoietin, including specific values for absorption rate (ka) and elimination rate (CL/Vd), directly in the provided text. |
| `Olsson-Gisleskog_2007.pdf` | Olsson-Gisleskog P et al., Population pharmacokinetics meta-analys…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746020-00004](https://doi.org/10.2165/00003088-200746020-00004) | [17253886](https://pubmed.ncbi.nlm.nih.gov/17253886) | The paper is a population PK meta-analysis of erythropoietin reporting quantitative parameters such as volume (6L), clearance range (0.3-0.9 L/h), and bioavailability (30-71%) directly in the abstract text. |
| `Reynaldo-Fernández_2018.pdf` | Reynaldo-Fernández G et al., Semi-mechanistic Pharmacokinetic/Pharma…, European journal of pharmac… (2018) | popPK | 10 | [10.1016/j.ejps.2018.04.047](https://doi.org/10.1016/j.ejps.2018.04.047) | [29729414](https://pubmed.ncbi.nlm.nih.gov/29729414) | The paper describes a population PK study of erythropoietin in rabbits with a two-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence. |
| `Varlet-Marie_2003.pdf` | Varlet-Marie E et al., Pharmacokinetic-pharmacodynamic modelli…, International journal of sp… (2003) | popPK | 9 | [10.1055/s-2003-39506](https://doi.org/10.1055/s-2003-39506) | [12784166](https://pubmed.ncbi.nlm.nih.gov/12784166) | The study reports quantitative PK parameters (clearance, half-life) for erythropoietin in the text, though it is a PK-PD study rather than a pure population PK analysis. |
| `Woo_2007.pdf` | Woo S et al., Target-mediated pharmacokinetic and pha…, Journal of pharmacokinetics… (2007) | popPK | 9 | [10.1007/s10928-007-9074-0](https://doi.org/10.1007/s10928-007-9074-0) | [17943422](https://pubmed.ncbi.nlm.nih.gov/17943422) | The paper describes a mechanistic PK/PD model for erythropoietin in multiple species, but the evidence only provides the equilibrium dissociation constant (KD) and lacks specific numeric values for clearance, volume, or half-life. |
| `Keller_2015.pdf` | Keller F et al., Pharmacokinetic and pharmacodynamic con…, Expert opinion on drug meta… (2015) | pd | 5 | [10.1517/17425255.2015.989832](https://doi.org/10.1517/17425255.2015.989832) | [25466552](https://www.ncbi.nlm.nih.gov/pubmed/25466552) | metadata signals extractable PD data (sigmoid) |
| `Marathe_2024.pdf` | Marathe DD et al., Exposure-Response Analyses for Belzutif…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2459](https://doi.org/10.1002/jcph.2459) | [38752556](https://www.ncbi.nlm.nih.gov/pubmed/38752556) | metadata signals extractable PD data (Exposure-Response) |

<sub>queue written 2026-09-06T14:15:30.714068+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al-Hamoudi_2011 | not_relevant | 0 | 0 | The paper reports clinical outcomes of HCV treatment and mentions erythropoietin use as supportive care for cytopenia, but does not investigate the effect of gene variants on erythropoietin pharmacokinetics or pharmacodynamics. |
| PGx | Alkaissi_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy of belzutifan in HIF2A-related tumors, not the pharmacokinetics or pharmacodynamics of erythropoietin. |
| PGx | Altraif_2017 | not_relevant | 0 | 0 | The paper investigates ribavirin dosing strategies in HCV patients and mentions erythropoietin use as a consequence of anemia, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of erythropoietin. |
| PGx | Amann_2018 | not_relevant | 0 | 0 | The paper describes engineering CHO cells to alter the glycosylation profile of recombinant erythropoietin, which is a manufacturing process modification, not a study of how human genetic variants affect the PK or PD of the drug. |
| popPK | An_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for darbepoetin, not erythropoietin. |
| PGx | Anderson_2015 | not_relevant | 0 | 0 | The study investigates the effect of erythropoietin on hepatic enzyme expression in a rat model of traumatic brain injury, not the effect of a gene variant on erythropoietin's PK/PD. |
| PGx | Ando_1995 | not_relevant | 0 | 0 | The paper discusses the clinical use of erythropoietin for FAP symptoms but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Antonini_2015 | not_relevant | 0 | 0 | The paper reports clinical outcomes and drug-drug interactions in HCV/HIV patients, but does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of erythropoietin. |
| PGx | Bernabucci_2014 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR) of Boceprevir in HCV patients and mentions Erythropoietin use for anemia management, but does not report any pharmacogenomic effects on the PK or PD parameters of Erythropoietin. |
| PGx | Charache_1992 | not_relevant | 0 | 0 | The paper studies hydroxyurea in sickle cell anemia and does not report pharmacogenomic effects on the PK or PD of erythropoietin. |
| PGx | Coilly_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes and drug-drug interactions for protease inhibitors in liver transplant patients, with no mention of pharmacogenomic variants affecting erythropoietin PK/PD. |
| PGx | Corredor_2020 | not_relevant | 2 | 5 | The paper reports associations between genetic variants and the Erythropoietin Resistance Index (a clinical biomarker), but does not report pharmacokinetic parameters (e.g., clearance, half-life) or direct pharmacodynamic effects of erythropoietin administration. |
| PGx | Ellis_2026 | not_relevant | 0 | 0 | The paper is a general review of Polycythemia Vera pathophysiology and management, not a study on the pharmacogenomics of erythropoietin. |
| PGx | Erbayraktar_2003 | not_relevant | 0 | 0 | The paper describes a structural modification of the drug (asialoerythropoietin) and its pharmacological effects, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Faisal_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes and drug-drug interactions for HCV therapy, with no analysis of genetic variants affecting erythropoietin pharmacokinetics or pharmacodynamics. |
| PGx | Gaur_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes for sofosbuvir-velpatasvir in HCV patients and does not involve erythropoietin or pharmacogenomic analysis. |
| PGx | Ghasemi_2025 | not_relevant | 0 | 0 | The study reports the PK/PD of casdatifan in healthy participants but does not investigate the impact of gene variants or genotypes on these parameters. |
| PGx | Gordon_2015 | not_relevant | 0 | 0 | The paper reports safety outcomes and predictors of anemia in HCV patients but does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of erythropoietin. |
| popPK | Heh-Foster_2014 | irrelevant | 0 | 0 | The study is a clinical retrospective analysis of hemoglobin recovery rates, not a pharmacokinetic study, and reports no PK parameters for erythropoietin. |
| PGx | Hermann_2010 | not_relevant | 0 | 0 | The paper is an editorial discussing the neuroprotective properties and delivery of erythropoietin variants in stroke, with no data on gene variants affecting PK or PD parameters. |
| PGx | Hu_2019 | not_relevant | 0 | 0 | The paper reviews FLT3 glycosylation in AML and does not report pharmacogenomic effects on the PK or PD of erythropoietin. |
| popPK | Huber_2025 | irrelevant | 0 | 0 | The study investigates the pathophysiology of anemia and EPO resistance in primary hyperparathyroidism, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for erythropoietin. |
| PGx | Jain_2022 | not_relevant | 0 | 0 | The paper is a systematic review of therapeutic interventions for Friedreich ataxia and does not report pharmacogenomic effects on the PK or PD of erythropoietin. |
| PGx | Kamar_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes of ribavirin therapy for HEV and mentions erythropoietin use as a supportive care measure for anemia, but it does not investigate the effect of gene variants on the PK or PD of erythropoietin. |
| popPK | Keller_2015 | irrelevant | 2 | 0 | The paper is a review of darbepoetin (a different drug) and reports pharmacodynamic parameters (CE50, half-life) rather than quantitative population-pharmacokinetic disposition parameters (CL, V, Q) for erythropoietin. |
| PGx | Kwo_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes of an antiviral regimen and mentions erythropoietin use as an adverse event management strategy, but it does not report any pharmacogenomic effects on the PK or PD of erythropoietin. |
| PGx | Kühn_2015 | not_relevant | 0 | 0 | The paper is a review of iron regulatory proteins and general iron metabolism, mentioning erythropoietin synthesis regulation but not reporting any pharmacogenomic effects on EPO PK/PD parameters. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of FGF23 upregulation in bone marrow endothelial cells in response to anemia and erythropoietin, but does not report pharmacogenomic effects on the PK or PD of erythropoietin. |
| popPK | Marathe_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of belzutifan, with erythropoietin serving only as a pharmacodynamic biomarker rather than the subject drug. |
| PGx | Marra_2024 | not_relevant | 0 | 0 | The paper describes the genetic basis of a congenital anemia disorder (CDA I) and compares disease severity markers, but it does not report the effect of a gene variant on the pharmacokinetics or pharmacodynamics of erythropoietin as a therapeutic drug. |
| popPK | Neelakantan_2009 | irrelevant | 2 | 0 | The study focuses on endogenous EPO PK/PD in sheep rather than the disposition parameters (CL, V, etc.) of administered recombinant erythropoietin, and no quantitative PK parameters for the drug are reported. |
| PGx | OBrien_2024 | not_relevant | 0 | 0 | The paper investigates genetic associations with placental metabolic phenotypes and endogenous erythropoietin levels in high-altitude pregnancy, not the pharmacokinetics or pharmacodynamics of exogenous erythropoietin therapy. |
| PGx | Oguro_2011 | not_relevant | 0 | 0 | The paper studies CYP3A4 overexpression in cancer cells and its effect on erythropoietin gene expression, not the pharmacokinetics or pharmacodynamics of erythropoietin as a drug. |
| PGx | Pergola_2021 | not_relevant | 0 | 0 | The study investigates the effect of a drug (ziltivekimab) in a specific genotype subgroup (rs855791) but does not report a pharmacogenomic effect on the PK or PD parameters of erythropoietin itself. |
| PGx | Pluthero_2019 | not_relevant | 0 | 0 | The paper reviews inherited platelet disorders and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of erythropoietin. |
| PGx | Pockros_2016 | not_relevant | 0 | 0 | The paper studies HCV treatment in renal impairment and does not report pharmacogenomic effects on erythropoietin PK/PD. |
| popPK | Reynaldo-Fernández_2018 | relevant | 10 | 0 | The paper describes a population PK study of erythropoietin in rabbits with a two-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence. |
| PGx | Sangrador_2014 | not_relevant | 0 | 0 | The paper compares safety profiles of telaprevir therapy in HCV monoinfected vs. HIV-coinfected patients and does not report pharmacogenomic effects on erythropoietin PK/PD parameters. |
| PGx | Shah_2023 | not_relevant | 0 | 0 | The paper studies the pathophysiology of Chuvash erythrocytosis and thrombosis risk, not the pharmacokinetics or pharmacodynamics of exogenous erythropoietin therapy. |
| PGx | Sierra_2019 | not_relevant | 0 | 0 | The study investigates the effect of ACTN3 genotype on hematological and iron metabolism responses to marathon exercise, not the pharmacokinetics or pharmacodynamics of erythropoietin administration. |
| PGx | Sochorcova_2023 | not_relevant | 0 | 0 | The paper investigates genetic causes of congenital erythrocytosis and iron metabolism, not the pharmacokinetics or pharmacodynamics of exogenous erythropoietin therapy. |
| PGx | Takano_2021 | not_relevant | 0 | 0 | The paper investigates the effect of PHD2 inhibitors on CYP enzyme expression and mentions erythropoietin only as a marker for HIF-α stabilization, not as a drug whose PK/PD is being analyzed for pharmacogenomic effects. |
| popPK | Thomas_2025 | irrelevant | 0 | 0 | The paper is a review of bioanalytical methods in doping controls and does not report quantitative pharmacokinetic parameters for erythropoietin. |
| PGx | Titov_2010 | not_relevant | 0 | 0 | The paper discusses the pathogenesis of arterial hypertension and mentions erythropoietin as a cause of increased peripheral resistance, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Uehlinger_1992 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of hematocrit response and red blood cell lifespan, not on the pharmacokinetic disposition parameters (CL, V, ka) of erythropoietin. |
| popPK | Woo_2007 | relevant | 9 | 2 | The paper describes a mechanistic PK/PD model for erythropoietin in multiple species, but the evidence only provides the equilibrium dissociation constant (KD) and lacks specific numeric values for clearance, volume, or half-life. |
| popPK | Zhang_2013 | irrelevant | 2 | 1 | The paper describes a novel antibody-erythropoietin fusion protein and reports only a qualitative half-life comparison in mice, lacking the quantitative compartmental PK parameters (CL, V, Q) required for population pharmacokinetic modeling. |
| PGx | Zheng_2021 | not_relevant | 0 | 0 | The study investigates the effect of an EPO gene variant on the efficacy and toxicity of platinum-based chemotherapy, not on the pharmacokinetics or pharmacodynamics of erythropoietin itself. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (atazanavir inhibiting UGT1A1-mediated metabolism of molidustat), not a pharmacogenomic effect of a gene variant on erythropoietin PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_erythropoietin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
