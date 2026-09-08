# dipyridamole

- **generic name:** dipyridamole
- **ATC codes:** `B01AC07`
- **DrugBank:** [DB00975](https://go.drugbank.com/drugs/DB00975)
- **groups:** approved, investigational

## About

**Description.** A phosphodiesterase inhibitor that blocks uptake and metabolism of adenosine by erythrocytes and vascular endothelial cells. Dipyridamole also potentiates the antiaggregating action of prostacyclin. (From AMA Drug Evaluations Annual, 1994, p752)

**Indication.** For as an adjunct to coumarin anticoagulants in the prevention of postoperative thromboembolic complications of cardiac valve replacement and also used in prevention of angina.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 19:34 | 33:21 | 0/2/0 | 0/2/0 | 0/0/0 | 570,743/22,458 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/3 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nielsen-Kudsk_1979](drugs/drug_dipyridamole/Dipyridamole_NielsenKudsk1979_reference.md) | Nielsen-Kudsk F et al., Pharmacokinetics of dipyridamole, Acta pharmacologica et toxi… (1979) | [10.1111/j.1600-0773.1979.tb02350.x](https://doi.org/10.1111/j.1600-0773.1979.tb02350.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nielsen-Kudsk_1980](drugs/drug_dipyridamole/Dipyridamole_NielsenKudsk1980_reference.md) | Nielsen-Kudsk F et al., Myocardial pharmacokinetics and pharmac…, Acta pharmacologica et toxi… (1980) | [10.1111/j.1600-0773.1980.tb01559.x](https://doi.org/10.1111/j.1600-0773.1980.tb01559.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Gesztelyi_2003](drugs/drug_dipyridamole/pd_Gesztelyi_2003_unknown.md) | Gesztelyi R et al., Special sensitization pattern in adenos…, Journal of pharmacological… (2003) | [10.1254/jphs.91.295](https://doi.org/10.1254/jphs.91.295) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Herington_2015](drugs/drug_dipyridamole/pd_Herington_2015_Ca2_mobilization.md) | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Herington_2015](drugs/drug_dipyridamole/pd_Herington_2015_uterine_contractility.md) | Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015) | [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243) |

## Coverage

- **PubMed hits:** 132 matched, 57 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nielsen-Kudsk_1979.pdf` | Nielsen-Kudsk F et al., Pharmacokinetics of dipyridamole, Acta pharmacologica et toxi… (1979) | popPK | 10 | [10.1111/j.1600-0773.1979.tb02350.x](https://doi.org/10.1111/j.1600-0773.1979.tb02350.x) | [474151](https://pubmed.ncbi.nlm.nih.gov/474151) | The paper reports quantitative PK parameters (beta, half-life, ka, bioavailability) for dipyridamole in humans, though specific clearance and volume values are not explicitly listed in the text. |
| `Cheng_2006.pdf` | Cheng J et al., Stability and pharmacokinetic studies o…, International journal of ph… (2006) | popPK | 9 | [10.1016/j.ijpharm.2006.01.031](https://doi.org/10.1016/j.ijpharm.2006.01.031) | [16540271](https://pubmed.ncbi.nlm.nih.gov/16540271) | The paper describes a pharmacokinetic study of dipyridamole in rats using a two-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| `Dresse_1982.pdf` | Dresse A et al., Pharmacokinetics of oral dipyridamole (…, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00547559](https://doi.org/10.1007/BF00547559) | [6756935](https://pubmed.ncbi.nlm.nih.gov/6756935) | The paper describes a pharmacokinetic study of dipyridamole using a two-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| `Nielsen-Kudsk_1980.pdf` | Nielsen-Kudsk F et al., Myocardial pharmacokinetics and pharmac…, Acta pharmacologica et toxi… (1980) | popPK | 8 | [10.1111/j.1600-0773.1980.tb01559.x](https://doi.org/10.1111/j.1600-0773.1980.tb01559.x) | [7446135](https://pubmed.ncbi.nlm.nih.gov/7446135) | The study reports quantitative pharmacokinetic parameters (half-lives, steady-state accumulation) for dipyridamole in an animal model (isolated rabbit heart). |
| `Li_2020.pdf` | Li Y et al., Metabolism and disposition of corylifol…, Xenobiotica; the fate of fo… (2020) | pgx | 7 | [10.1080/00498254.2020.1732496](https://doi.org/10.1080/00498254.2020.1732496) | [32116078](https://www.ncbi.nlm.nih.gov/pubmed/32116078) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Qin_2018.pdf` | Qin Z et al., Chemical inhibition and stable knock-do…, Food & function (2018) | pgx | 7 | [10.1039/c7fo01298e](https://doi.org/10.1039/c7fo01298e) | [29318243](https://www.ncbi.nlm.nih.gov/pubmed/29318243) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Quan_2015.pdf` | Quan E et al., Characterization of chrysin glucuronida…, Drug metabolism and disposi… (2015) | pgx | 7 | [10.1124/dmd.114.061598](https://doi.org/10.1124/dmd.114.061598) | [25595598](https://www.ncbi.nlm.nih.gov/pubmed/25595598) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Zhang_2009.pdf` | Zhang ZY et al., Biotransformation and in vitro assessme…, Journal of pharmaceutical a… (2009) | pgx | 7 | [10.1016/j.jpba.2009.04.013](https://doi.org/10.1016/j.jpba.2009.04.013) | [19467820](https://www.ncbi.nlm.nih.gov/pubmed/19467820) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dickens_2013.pdf` | Dickens D et al., ABCB1 single nucleotide polymorphisms (…, Pharmacogenetics and genomi… (2013) | pgx | 5 | [10.1097/FPC.0b013e328360d10c](https://doi.org/10.1097/FPC.0b013e328360d10c) | [23619510](https://www.ncbi.nlm.nih.gov/pubmed/23619510) | metadata signals extractable PGX data (ABCB1) |
| `Keyany_2026.pdf` | Keyany A et al., Impact of CYP2C19 genotyping on clopido…, European journal of hospita… (2026) | pgx | 5 | [10.1136/ejhpharm-2025-004727](https://doi.org/10.1136/ejhpharm-2025-004727) | [41791861](https://www.ncbi.nlm.nih.gov/pubmed/41791861) | metadata signals extractable PGX data (CYP2C19) |
| `Wright_2023.pdf` | Wright S et al., Development of a point-of-care genetic…, Wellcome open research (2023) | pgx | 5 | [10.12688/wellcomeopenres.19202.1](https://doi.org/10.12688/wellcomeopenres.19202.1) | [37869733](https://www.ncbi.nlm.nih.gov/pubmed/37869733) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-05T19:15:08.658770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adema_2012 | not_relevant | 0 | 0 | The paper investigates the metabolism of elacytarabine and CP-4126, using dipyridamole only as a transporter inhibitor, and does not report pharmacogenomic effects on dipyridamole's PK/PD. |
| PGx | Allon_2012 | not_relevant | 0 | 0 | The paper reports an association between a Factor V polymorphism and graft failure (clinical outcome), not a change in the pharmacokinetic or pharmacodynamic parameters of dipyridamole. |
| PGx | Badruddin_2009 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for clopidogrel (CYP2C19) but provides no pharmacogenomic data for dipyridamole. |
| popPK | Candenas_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile effects on guinea-pig trachea, not a pharmacokinetic study, and dipyridamole is used only as a modulator/comparator. |
| PD | Candenas_1992 | not_relevant | 3 | 2 | The paper reports qualitative modulation of agonist effects by dipyridamole (reduction/suppression) but does not provide numeric PD parameters (e.g., EC50, Emax) for dipyridamole itself or a quantitative exposure-response relationship. |
| popPK | Cheng_2006 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of dipyridamole in rats using a two-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Cichocki_2024 | irrelevant | 0 | 0 | The study focuses on the repeatability of myocardial blood flow calculations in SPECT imaging where dipyridamole is used only as a pharmacological stress agent, not as the subject of pharmacokinetic analysis. |
| popPK | Conesa-Buendía_2019 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of dipyridamole on bone loss in mice and does not report any pharmacokinetic parameters. |
| PGx | Damont_2016 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effect of dipyridamole on P-glycoprotein function in nonhuman primates but does not report any pharmacogenomic effects (gene variants) on dipyridamole's PK or PD parameters. |
| popPK | Deckert_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/autoradiography study characterizing adenosine transporter heterogeneity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Deckert_1987 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding kinetics (Kd, Bmax, Ki) for [3H]dipyridamole, which are pharmacological binding parameters, not pharmacodynamic (exposure-response) parameters for the drug's physiological effect. |
| PGx | Desai_1997 | not_relevant | 0 | 0 | The study investigates the pharmacological interaction between dipyridamole and doxorubicin in tumor models, not the effect of a gene variant on dipyridamole's PK or PD. |
| PGx | Dickens_2013 | not_relevant | 0 | 0 | The paper investigates the functional impact of ABCB1 SNPs on P-gp transport activity using digoxin and imatinib as substrates, and while dipyridamole is listed as an inhibitor, the study does not report any pharmacokinetic or pharmacodynamic parameters of dipyridamole itself being altered by the genetic variants. |
| popPK | Dresse_1982 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of dipyridamole using a two-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | El_2016 | not_relevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of dipyridamole on myocardial injury markers and does not report any pharmacogenomic effects or gene-variant interactions. |
| PGx | Ensor_2010 | not_relevant | 0 | 0 | The paper discusses antithrombotic therapy for an artificial heart and mentions warfarin genomics, but does not report any pharmacogenomic effects on the PK or PD of dipyridamole. |
| popPK | Gesztelyi_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adenosine mechanisms in guinea pig atria where dipyridamole is used only as a tool compound (transport inhibitor), not as the subject of pharmacokinetic analysis. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper evaluates antithrombotic therapy in Kawasaki disease and mentions dipyridamole only as a comparator for platelet inhibition, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Herington_2015 | irrelevant | 0 | 0 | The study is a high-throughput screening and ex vivo contractility assay where dipyridamole is used as a hit compound to test uterine inhibition, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Keyany_2026 | not_relevant | 0 | 0 | The paper focuses on CYP2C19 genotyping for clopidogrel therapy adjustments, not on the pharmacokinetics or pharmacodynamics of dipyridamole. |
| popPK | Klabunde_1983 | irrelevant | 0 | 0 | The study focuses on the hemodynamic and mechanistic effects of dipyridamole on vasodilation and adenosine levels, not on the pharmacokinetic disposition parameters (CL, V, etc.) of dipyridamole itself. |
| popPK | Kleppe_2018 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of intracellular signaling pathways in platelets and does not report pharmacokinetic disposition parameters for dipyridamole. |
| PGx | Kuczek_1992 | not_relevant | 0 | 0 | The paper discusses tumor resistance mechanisms and mentions dipyridamole only in the context of synergy with PALA, without reporting any pharmacogenomic effects on dipyridamole's PK or PD parameters. |
| PGx | Kwan_2009 | not_relevant | 0 | 0 | The paper investigates the effect of dipyridamole as a transporter inhibitor on darunavir accumulation, not the effect of a gene variant on dipyridamole's PK/PD. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper investigates the metabolism of corylifol A, not dipyridamole; dipyridamole is only used as a transporter inhibitor. |
| popPK | Lortie_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET tracer 82Rb, using dipyridamole only as a stress agent, and does not report PK parameters for dipyridamole. |
| popPK | Mediero_2015 | irrelevant | 0 | 0 | The study is a mechanistic bone regeneration experiment where dipyridamole is used as a pharmacological tool to block purine transport, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mediero_2015 | not_relevant | 3 | 2 | The paper reports a single-dose efficacy study (1 μM) and lists the intrinsic EC50 of dipyridamole as a compound property, but does not provide an exposure-response curve, dose-response data, or fitted PD parameters (Emax, EC50 for the observed effect) for the drug in this context. |
| PGx | Molina-Arcas_2009 | not_relevant | 2 | 0 | The text is a general review of nucleoside transporters and mentions dipyridamole as a target, but it does not report specific pharmacogenomic effects of gene variants on dipyridamole's PK or PD parameters. |
| PGx | Offman_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with omeprazole, not a pharmacogenomic effect of a gene variant on dipyridamole PK/PD. |
| popPK | Olivera_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine receptors where dipyridamole is used only as a tool compound to inhibit uptake, with no pharmacokinetic parameters reported. |
| PD | Olivera_1992 | not_relevant | 0 | 0 | The paper studies adenosine and its analogues; dipyridamole is only mentioned qualitatively as an enhancer of the adenosine response, with no specific dose-response or PD parameters reported for dipyridamole itself. |
| PGx | Peters_2013 | not_relevant | 0 | 0 | The paper studies the metabolism and mechanism of action of fluorocyclopentenylcytosine (RX-3117), not dipyridamole, and does not report pharmacogenomic effects on dipyridamole PK/PD. |
| PGx | Qin_2018 | not_relevant | 0 | 0 | The paper investigates the transport of wushanicaritin glucuronides and uses dipyridamole only as a negative control inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Qin_2025 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (efficacy/safety) and does not report pharmacokinetic or pharmacodynamic parameters or specific gene variant effects on dipyridamole. |
| PGx | Quan_2015 | not_relevant | 0 | 0 | The paper investigates the transporters responsible for the efflux of chrysin glucuronide, not the pharmacokinetics or pharmacodynamics of dipyridamole. |
| popPK | Rosenberg_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on adenosine release in cell cultures where dipyridamole is used only as a pharmacological tool (phosphodiesterase inhibitor) and no pharmacokinetic parameters are reported. |
| PD | Rosenberg_1994 | not_relevant | 0 | 0 | The paper investigates the effect of isoproterenol on adenosine/cAMP in cell cultures and does not mention dipyridamole or report any PD parameters for it. |
| PGx | Shalinsky_1990 | not_relevant | 0 | 0 | The paper investigates dipyridamole as a pharmacological modulator of multidrug resistance in cell lines, not as a drug whose PK/PD is altered by a specific gene variant. |
| PGx | Shankar_2006 | not_relevant | 0 | 0 | The paper uses dipyridamole as a transporter inhibitor to study the uptake of radiolabeled tracers, not to report pharmacogenomic effects on dipyridamole's own PK/PD parameters. |
| popPK | Trump_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluorouracil, with dipyridamole serving only as a co-administered agent, and no PK parameters for dipyridamole are reported. |
| PGx | Tsukahara_2021 | not_relevant | 0 | 0 | The paper describes a clinical case of myocardial ischemia during therapy but does not report any pharmacogenomic effects on dipyridamole PK or PD parameters. |
| popPK | Vallée_1997 | irrelevant | 0 | 0 | The study measures myocardial perfusion parameters (K1, Vd) for the MRI contrast agent Gd-DTPA, using dipyridamole only as a stress-inducing agent, and does not report pharmacokinetic parameters for dipyridamole itself. |
| popPK | Ver_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition and does not report pharmacokinetic disposition parameters for dipyridamole. |
| PGx | Verstuyft_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic effect of dipyridamole on digoxin, not the effect of a gene variant on dipyridamole's own PK/PD parameters. |
| PGx | Wichaiyo_2026 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet drugs and does not report specific pharmacogenomic effects on the PK or PD of dipyridamole. |
| PGx | Wright_2023 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis of a CYP2C19 test for clopidogrel and does not report pharmacokinetic or pharmacodynamic data for dipyridamole. |
| popPK | Xi_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radiotracer 99mTc-3SPboroxime, using dipyridamole only as a stress agent, and does not report PK parameters for dipyridamole itself. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper investigates the efflux transporters of bisdemethoxycurcumin-O-glucuronide, using dipyridamole only as a chemical inhibitor, and does not report pharmacogenomic effects on dipyridamole's PK or PD. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper investigates in vitro metabolism and drug-drug interactions of dipyridamole but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | van_2022 | not_relevant | 0 | 0 | The paper uses dipyridamole as a reference compound in a computational screen to identify other drugs that potentiate statins; it does not report how a specific gene variant or genotype alters the pharmacokinetic or pharmacodynamic parameters of dipyridamole itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dipyridamole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
