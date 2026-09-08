# defibrotide

- **generic name:** defibrotide
- **ATC codes:** `B01AX01`
- **DrugBank:** [DB04932](https://go.drugbank.com/drugs/DB04932)
- **groups:** approved, investigational

## About

**Description.** Defibrotide is the sodium salt of a mixture of single-stranded oligodeoxyribonucleotides derived from porcine mucosal DNA. It has been shown to have antithrombotic, anti-inflammatory and anti-ischemic properties (but without associated significant systemic anticoagulant effects). It is marketed under the brand names Dasovas (FM), Noravid, and Prociclide in a variety of countries. In the USA it is was approved in March, 2016 as Defitelio.

**Indication.** Indicated for the treatment of severe hepatic veno-occlusive disease (VOD), also known as sinusoidal obstruction syndrome (SOS), with renal or pulmonary dysfunction following hematopoietic stem-cell transplantation (HSCT).[label]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:38 | 0:50 | 0/0/0 | 1/1/0 | 0/0/0 | 1,326/234 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 1/9 | 14/11 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bianchi_1993](drugs/drug_defibrotide/pd_Bianchi_1993_trachealis_muscle_relaxation.md) | Bianchi G et al., Defibrotide, a single-stranded polydeox…, European journal of pharmac… (1993) | [10.1016/0014-2999(93)90864-e](https://doi.org/10.1016/0014-2999(93)90864-e) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Pennesi_2022](drugs/drug_defibrotide/pd_Pennesi_2022_minimal_residual_disease_status.md) | Pennesi E et al., Inotuzumab ozogamicin as single agent i…, Leukemia (2022) | [10.1038/s41375-022-01576-3](https://doi.org/10.1038/s41375-022-01576-3) |

## Coverage

- **PubMed hits:** 48 matched, 41 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gryglewski_1989.pdf` | Gryglewski RJ et al., Prostacyclin and the mechanism of actio…, Eicosanoids (1989) | pd | 4 | not captured | [2517030](https://www.ncbi.nlm.nih.gov/pubmed/2517030) | metadata signals extractable PD data (IC50) |
| `Zhang_2022.pdf` | Zhang F et al., Potential Anti-SARS-CoV-2 Activity of P…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15020258](https://doi.org/10.3390/ph15020258) | [35215371](https://www.ncbi.nlm.nih.gov/pubmed/35215371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-06T16:37:59.903768+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_2023 | irrelevant | 0 | 0 | The study investigates heparan sulfate oligosaccharides, not defibrotide. |
| popPK | Asako_1994 | irrelevant | 0 | 0 | The paper studies histamine-induced leukocyte rolling and albumin clearance in rat mesentery and does not involve defibrotide or report pharmacokinetic parameters for it. |
| PD | Aziz_2018 | not_relevant | 1 | 0 | The paper is a narrative review summarizing efficacy and safety outcomes (response rates, survival) rather than reporting a specific pharmacodynamic model or numeric exposure-response parameters. |
| PD | Bagal_2018 | not_relevant | 1 | 0 | The paper explicitly states that no dose-response relationship was observed and provides no numeric PD parameters or concentration-effect data. |
| popPK | Bartelink_2016 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and outcomes, not defibrotide. |
| PD | Bartelink_2016 | not_relevant | 0 | 0 | The paper analyzes busulfan exposure-response relationships, not defibrotide. |
| popPK | Berti_1991 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic effects of defibrotide on prostacyclin release and renal function, not on quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bi_2023 | irrelevant | 0 | 0 | The paper focuses on curcumin nanoemulsions and does not involve defibrotide or its pharmacokinetics. |
| popPK | Botting_1989 | irrelevant | 0 | 0 | The paper is a mechanistic review of endothelial mediators that mentions defibrotide only as a drug potentially releasing prostacyclin, without reporting any pharmacokinetic parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper focuses on the preparation and properties of a thymol-chitooligosaccharide complex for food storage, with no mention of defibrotide or pharmacokinetic parameters. |
| popPK | Cella_2001 | irrelevant | 2 | 1 | The study focuses on the mechanism of TFPI release rather than pharmacokinetic disposition, and only provides a single plasma concentration point (25.4 microg/mL) without clearance, volume, or half-life parameters. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is about sewage sludge pretreatment for lipid production and does not involve defibrotide or pharmacokinetics. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper studies zinc bioavailability using nanoparticles and does not involve defibrotide or pharmacokinetic parameters. |
| PGx | Coppell_2003 | not_relevant | 0 | 0 | The paper is a review discussing the pathogenesis of VOD and the general use of defibrotide, but it does not report specific pharmacogenomic effects on defibrotide's PK or PD parameters. |
| PD | Glusa_2001 | not_relevant | 1 | 2 | The paper reports an IC50 for defibrotide as an inhibitor of cathepsin G-induced relaxation, which is a pharmacological interaction study, not a pharmacodynamic exposure-response or dose-response analysis of defibrotide's own therapeutic effect. |
| popPK | Gross_1987 | irrelevant | 0 | 0 | The paper studies the clearance of rat liver secretory glycoproteins and does not involve defibrotide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper studies naringin nanoparticles and does not involve defibrotide or its pharmacokinetics. |
| popPK | Halbeek_1993 | irrelevant | 0 | 0 | The paper is a review on NMR spectroscopy for glycoprotein characterization and does not contain any pharmacokinetic data for defibrotide. |
| popPK | Harenberg_2010 | irrelevant | 0 | 0 | The paper discusses idraparinux and idrabiotaparinux, not defibrotide. |
| popPK | Hong_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and its metabolites, with defibrotide mentioned only as a treatment for veno-occlusive disease without any PK parameter reporting. |
| PD | Hong_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclophosphamide and its metabolites, not defibrotide; while defibrotide is mentioned in supplementary tables regarding VOD treatment, no pharmacodynamic or exposure-response analysis for defibrotide is presented. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The study focuses on curcumin as a model drug for solid dispersion formulation, not defibrotide. |
| popPK | Imber_1981 | irrelevant | 0 | 0 | The paper studies the clearance of alpha 2-macroglobulin in mice, not the pharmacokinetics of defibrotide. |
| popPK | Koehl_2007 | irrelevant | 1 | 0 | The study focuses on anti-angiogenic mechanisms and in vivo efficacy in mice, reporting no quantitative pharmacokinetic parameters (CL, V, etc.) for defibrotide. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper studies lutein-stachyose derivatives and does not involve defibrotide. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on the oral delivery of doxorubicin, not defibrotide. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review of non-coding RNAs in human health and disease and contains no information regarding defibrotide or its pharmacokinetics. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a review on non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacodynamic or exposure-response analysis for defibrotide. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium oligomannate, not defibrotide. |
| popPK | Lunghi_2025 | irrelevant | 0 | 0 | The paper investigates the effects of OligoGM1 on microglial activation and alpha-synuclein clearance in an in vitro model, and does not involve defibrotide or report any pharmacokinetic parameters. |
| popPK | Magner_1984 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbohydrate processing of thyrotropin in mouse pituitary tumors and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Natale_2022 | irrelevant | 0 | 0 | This is a Cochrane review of antiplatelet agents in CKD that mentions defibrotide only as a comparator in limited head-to-head data, with no pharmacokinetic parameters reported. |
| PD | Noseda_1986 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, AUC, Vd) and their dose-dependence, with no pharmacodynamic or exposure-response data. |
| popPK | Oltolini_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding SARS-CoV-2 management in a transplant patient where defibrotide is mentioned only as a treatment for veno-occlusive disease, with no pharmacokinetic parameters reported. |
| PD | Palmer_1993 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacodynamic properties and therapeutic use, containing no numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | Pennesi_2022 | irrelevant | 0 | 0 | The study focuses on Inotuzumab Ozogamicin, and defibrotide is only mentioned as a treatment for a complication (SOS), with no PK parameters reported for it. |
| popPK | Pescador_1983 | relevant | 8 | 0 | The paper describes a two-compartment PK study of defibrotide in rabbits, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Pescador_1983 | not_relevant | 4 | 2 | The abstract describes dose-dependent PK parameters and qualitative trends in profibrinolytic activity but does not provide specific numeric PD parameters (e.g., Emax, EC50) or quantitative concentration-effect data. |
| popPK | Pérez-González_2025 | irrelevant | 0 | 0 | The study focuses on a dexamethasone nanosystem and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Rigotti_1991 | irrelevant | 0 | 0 | The study focuses on renal function and prostanoid excretion in rats, not on the pharmacokinetic disposition parameters (CL, V, etc.) of defibrotide. |
| popPK | Shah_2018 | irrelevant | 0 | 0 | The paper is a case report on Sinusoidal Obstruction Syndrome where defibrotide is mentioned only as a treatment agent, with no pharmacokinetic parameters reported for it. |
| popPK | Strous_1985 | irrelevant | 0 | 0 | The paper studies the effect of monensin on glycosylation in HeLa cells and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Tanabe_2020 | irrelevant | 0 | 0 | The paper studies the bioavailability of maltobionic acid, not defibrotide. |
| popPK | Thotakura_1991 | irrelevant | 0 | 0 | The paper studies recombinant human thyrotropin (TSH), not defibrotide. |
| popPK | Tian_2024 | irrelevant | 0 | 0 | The paper studies xylooligosaccharides from rice husks and contains no information regarding defibrotide or its pharmacokinetics. |
| popPK | Tollefsen_1988 | irrelevant | 0 | 0 | The paper studies the clearance of human glycosylated alpha-amylase in rats, not defibrotide. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper focuses on the synthesis of heparan sulfate oligosaccharides and their anticoagulant properties, not the pharmacokinetics of defibrotide. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on the analysis of heparan sulfate structural motifs and heparin/enoxaparin, not the pharmacokinetics of defibrotide. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper studies heparan sulfate in Alzheimer's disease models and does not involve defibrotide or its pharmacokinetics. |
| popPK | Wu_2022_2 | irrelevant | 0 | 0 | The paper investigates heparan sulfate for Alzheimer's disease and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Wyss_2020 | irrelevant | 0 | 0 | The paper focuses on the renal clearance of polymeric nanoparticles and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | The provided evidence contains pharmacokinetic data for oxycodone, daridorexant, atorvastatin, and other drugs, but does not mention defibrotide or provide any parameters for it. |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text contains abstracts for oxycodone, esomeprazole/IL-6, daridorexant, bile acids, and atorvastatin, but does not contain any information regarding defibrotide. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for Pentosan Polysulfate (PPS) and Mucopolysaccharide Polysulfate (MPS), but only mentions defibrotide as part of the tested library without providing any specific numeric PD parameters (IC50, Emax, etc.) or concentration-effect data for it. |
| popPK | de_2015 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics, not defibrotide. |
| PD | de_2015 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and dosing algorithms, not defibrotide, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of defibrotide. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no study data, parameters, or mention of defibrotide. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for defibrotide. |
| popPK | unknown_2015_2 | irrelevant | 0 | 0 | The provided evidence contains only a session header with no pharmacokinetic data or study details. |
| PD | unknown_2015_2 | not_relevant | 0 | 0 | The provided text is a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The paper is a collection of abstracts from the 2016 ASPHO meeting and does not contain any pharmacokinetic data or parameters for defibrotide. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts for G-CSF, Clofarabine/Mitoxantrone, DFMO, Genomic Profiling, Gemcitabine/Nab-paclitaxel, Nanomedicine, and CVL management, but does not contain any information regarding defibrotide or its pharmacodynamic parameters. |
| popPK | unknown_2016_2 | irrelevant | 0 | 0 | The provided evidence contains no text, data, or parameters related to defibrotide or any pharmacokinetic study. |
| PD | unknown_2016_2 | not_relevant | 0 | 0 | The provided text is a header ("Physicians Abstracts") and contains no scientific content, data, or analysis regarding defibrotide or any pharmacodynamic relationship. |
| popPK | unknown_2016_3 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or text for defibrotide. |
| PD | unknown_2016_3 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper is a collection of abstracts from a hematology conference focusing on vaccines, fludarabine, and stem cell transplantation, with no mention of defibrotide or its pharmacokinetic parameters. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text contains abstracts regarding VZV vaccine, fludarabine exposure, G-CSF, plerixafor, and CD34 counts, but does not contain any information or data regarding defibrotide. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of conference metadata and contains no pharmacokinetic data or study content. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The evidence consists only of a conference title and session name, containing no pharmacokinetic data, parameters, or study details for defibrotide. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The provided evidence is only a conference title with no pharmacokinetic data or parameters for defibrotide. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The paper is a collection of abstracts from the EBMT 2022 meeting focusing on hematopoietic cell transplantation outcomes and does not contain any pharmacokinetic data for defibrotide. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text contains abstracts regarding bone marrow transplantation outcomes and risk scores, with no mention of defibrotide or any pharmacodynamic modeling. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_defibrotide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
