<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor X&quot;}]"></div>

# coagulation factor X

- **generic name:** coagulation factor X
- **ATC codes:** `B02BD13`
- **DrugBank:** [DB13148](https://go.drugbank.com/drugs/DB13148) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Coagulation factor X is a human blood-clotting protein used to treat bleeding caused by a lack of factor X. It is an approved medicine, classified among blood coagulation factors, though it appears to be used only in limited settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423701](https://www.wikidata.org/wiki/Q423701) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:57 | 10:13 | 0/0/0 | 0/0/0 | 0/0/0 | 350,949/13,207 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 5/30 | 20/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 251 matched, 132 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sarode_2020.pdf` | Sarode R et al., Pharmacometric modeling to explore 4F-P…, Blood advances (2020) | popPK | 9 | [10.1182/bloodadvances.2020002267](https://doi.org/10.1182/bloodadvances.2020002267) | [32898246](https://pubmed.ncbi.nlm.nih.gov/32898246) | The paper describes a pharmacometric model for Factor X (FX) levels following 4F-PCC dosing, but specific numeric PK parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Koppelman_1995.pdf` | Koppelman SJ et al., Inhibition of the intrinsic factor X ac…, Blood (1995) | pd | 5 | not captured | [7620160](https://www.ncbi.nlm.nih.gov/pubmed/7620160) | metadata signals extractable PD data (IC50) |
| `Leclerc_1995.pdf` | Leclerc NE et al., Inhibitors of phosphodiesterase (pentox…, Journal of cardiovascular p… (1995) | pd | 5 | [10.1097/00005344-199500252-00019](https://doi.org/10.1097/00005344-199500252-00019) | [8699870](https://www.ncbi.nlm.nih.gov/pubmed/8699870) | metadata signals extractable PD data (EC50) |
| `Song_2014.pdf` | Song S et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2014) | pd | 5 | [10.1002/jcph.306](https://doi.org/10.1002/jcph.306) | [24706516](https://www.ncbi.nlm.nih.gov/pubmed/24706516) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Ueshima_2019.pdf` | Ueshima S et al., Population Pharmacokinetics and Pharmac…, The AAPS journal (2019) | pd | 5 | [10.1208/s12248-019-0353-7](https://doi.org/10.1208/s12248-019-0353-7) | [31236790](https://www.ncbi.nlm.nih.gov/pubmed/31236790) | metadata signals extractable PD data (IC50) |
| `Zou_2025.pdf` | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | pd | 5 | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) | [39526427](https://www.ncbi.nlm.nih.gov/pubmed/39526427) | metadata signals extractable PD data (PK-PD) |
| `Barrow_1994.pdf` | Barrow RT et al., Inhibition by heparin of the human bloo…, The Journal of biological c… (1994) | pd | 4 | not captured | [7929416](https://www.ncbi.nlm.nih.gov/pubmed/7929416) | metadata signals extractable PD data (IC50) |
| `Brinkman_1994.pdf` | Brinkman HJ et al., The activation of human blood coagulati…, British journal of haematol… (1994) | pd | 4 | [10.1111/j.1365-2141.1994.tb04918.x](https://doi.org/10.1111/j.1365-2141.1994.tb04918.x) | [7947276](https://www.ncbi.nlm.nih.gov/pubmed/7947276) | metadata signals extractable PD data (IC50) |
| `Dennis_2001.pdf` | Dennis MS et al., Selection and characterization of a new…, Biochemistry (2001) | pd | 4 | [10.1021/bi010591l](https://doi.org/10.1021/bi010591l) | [11583150](https://www.ncbi.nlm.nih.gov/pubmed/11583150) | metadata signals extractable PD data (IC50) |
| `Dockal_2014.pdf` | Dockal M et al., Small peptides blocking inhibition of f…, The Journal of biological c… (2014) | pd | 4 | [10.1074/jbc.M113.533836](https://doi.org/10.1074/jbc.M113.533836) | [24275667](https://www.ncbi.nlm.nih.gov/pubmed/24275667) | metadata signals extractable PD data (EC50) |
| `Hawthorne_1994.pdf` | Hawthorne TR et al., Isolation and characterization of recom…, Journal of biotechnology (1994) | pd | 4 | [10.1016/0168-1656(94)90049-3](https://doi.org/10.1016/0168-1656(94)90049-3) | [7765233](https://www.ncbi.nlm.nih.gov/pubmed/7765233) | metadata signals extractable PD data (IC50) |
| `Jesty_1990.pdf` | Jesty J, Analysis of the generation and inhibiti…, The Journal of biological c… (1990) | pd | 4 | not captured | [2211647](https://www.ncbi.nlm.nih.gov/pubmed/2211647) | metadata signals extractable PD data (Emax) |
| `London_1996.pdf` | London F et al., Annexin V inhibition of factor IXa-cata…, Biochemistry (1996) | pd | 4 | [10.1021/bi960712v](https://doi.org/10.1021/bi960712v) | [8988028](https://www.ncbi.nlm.nih.gov/pubmed/8988028) | metadata signals extractable PD data (IC50) |
| `Mathur_1997.pdf` | Mathur A et al., Interaction of factor IXa with factor V…, The Journal of biological c… (1997) | pd | 4 | [10.1074/jbc.272.37.23418](https://doi.org/10.1074/jbc.272.37.23418) | [9287357](https://www.ncbi.nlm.nih.gov/pubmed/9287357) | metadata signals extractable PD data (EC50) |
| `Orning_1998.pdf` | Orning L et al., A peptide sequence from mouse tissue fa…, Thrombosis research (1998) | pd | 4 | [10.1016/s0049-3848(98)00119-4](https://doi.org/10.1016/s0049-3848(98)00119-4) | [9806365](https://www.ncbi.nlm.nih.gov/pubmed/9806365) | metadata signals extractable PD data (IC50) |
| `Spiegel_2004.pdf` | Spiegel PC et al., Disruption of protein-membrane binding…, Chemistry & biology (2004) | pd | 4 | [10.1016/j.chembiol.2004.08.006](https://doi.org/10.1016/j.chembiol.2004.08.006) | [15489168](https://www.ncbi.nlm.nih.gov/pubmed/15489168) | metadata signals extractable PD data (IC50) |
| `Zhang_1998.pdf` | Zhang Y et al., Nitrophorin-2: a novel mixed-type rever…, Biochemistry (1998) | pd | 4 | [10.1021/bi973050y](https://doi.org/10.1021/bi973050y) | [9692958](https://www.ncbi.nlm.nih.gov/pubmed/9692958) | metadata signals extractable PD data (EC50) |
| `Aquilante_2006.pdf` | Aquilante CL et al., Influence of coagulation factor, vitami…, Clinical pharmacology and t… (2006) | pgx | 8 | [10.1016/j.clpt.2005.11.011](https://doi.org/10.1016/j.clpt.2005.11.011) | [16580898](https://www.ncbi.nlm.nih.gov/pubmed/16580898) | metadata signals extractable PGX data (VKORC1, PK/PD-context) |
| `Ueshima_2017.pdf` | Ueshima S et al., Impact of ABCB1, ABCG2, and CYP3A5 poly…, Pharmacogenetics and genomi… (2017) | pgx | 8 | [10.1097/FPC.0000000000000294](https://doi.org/10.1097/FPC.0000000000000294) | [28678049](https://www.ncbi.nlm.nih.gov/pubmed/28678049) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Gegu_2013.pdf` | Gegu M et al., [General characteristics of the new ora…, Geriatrie et psychologie ne… (2013) | pgx | 7 | [10.1684/pnv.2013.0446](https://doi.org/10.1684/pnv.2013.0446) | [24463058](https://www.ncbi.nlm.nih.gov/pubmed/24463058) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Scholz_2021.pdf` | Scholz I et al., Effects of Hypericum perforatum (St Joh…, British journal of clinical… (2021) | pgx | 7 | [10.1111/bcp.14553](https://doi.org/10.1111/bcp.14553) | [32959922](https://www.ncbi.nlm.nih.gov/pubmed/32959922) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-05T18:50:48.659193+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2018 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of dibenzylidene ketone derivatives, not the pharmacokinetics of coagulation factor X. |
| PD | Ahmed_2018 | not_relevant | 2 | 1 | The paper reports molecular docking scores for Factor X and general anticoagulant effects (PRT, bleeding time) but does not provide a concentration-effect or dose-response analysis specifically for Factor X inhibition with numeric PD parameters. |
| PGx | Akhavan_2007 | not_relevant | 0 | 0 | The paper describes a genetic cause of congenital Factor X deficiency (disease etiology) rather than a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Bafunno_2011 | not_relevant | 0 | 0 | The paper reviews protein Z deficiency and venous thrombosis risk, not the pharmacokinetics or pharmacodynamics of coagulation factor X. |
| PGx | Baroni_2015 | not_relevant | 0 | 0 | The paper investigates the structural and functional consequences of a specific mutation on coagulation factor X activation kinetics, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| PGx | Baroni_2020 | not_relevant | 0 | 0 | The paper investigates the association between FVIIa-AT levels and FXa generation in CAD patients, not the effect of a specific gene variant on the PK/PD of a drug. |
| popPK | Barrow_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of heparin's inhibition of factor X activation, not a pharmacokinetic study of coagulation_factor_x. |
| popPK | Bozhko_2025 | irrelevant | 0 | 0 | The paper describes a mechanistic mathematical model of the enzymatic activation of Factor X by Factor IXa, not the pharmacokinetic disposition (clearance, volume, half-life) of Factor X as a drug. |
| popPK | Brinkman_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of coagulation factor X activation kinetics on cell surfaces, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Brockmüller_2025 | irrelevant | 0 | 0 | The study focuses on DOAC underdosing in atrial fibrillation and does not report pharmacokinetic parameters for coagulation_factor_x. |
| PD | Brockmüller_2025 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological registry study analyzing predictors of DOAC underdosing based on medication data and clinical scores; it does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Carreño_2024 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of enoxaparin, not coagulation_factor_x. |
| PD | Carreño_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for enoxaparin but does not include a pharmacodynamic (PD) model or exposure-response analysis with numeric PD parameters. |
| popPK | Chen_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ethynyloestradiol and norethisterone, with Factor X mentioned only as a pharmacodynamic marker that increased, not as the subject drug for PK parameter estimation. |
| PD | Chen_1990 | not_relevant | 1 | 0 | The paper reports qualitative changes in Factor X levels and general PK/PD correlations for other markers, but provides no numeric concentration-effect or dose-response parameters for Factor X. |
| PGx | Chen_2010 | not_relevant | 0 | 0 | The paper describes using the Factor X GLA domain as a targeting ligand for adenovirus vectors, not a pharmacogenomic effect on Factor X pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper discusses a theoretical pharmacological framework (TAPD) and tissue expression landscapes, not the pharmacokinetic disposition parameters (CL, V, etc.) of coagulation factor X. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper proposes a theoretical framework (TAPD) and uses transcriptomic data to predict tissue-specific directionality, but it does not report experimental pharmacodynamic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for coagulation factor X. |
| popPK | Choi_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug GCC-4401C (a Factor Xa inhibitor), not for the drug coagulation_factor_x (Factor X) itself. |
| PGx | Choppin_2009 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of tecarfarin on coagulation factors in beagle dogs but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Chung_2023 | irrelevant | 0 | 0 | The paper is a review of QSP models of the coagulation cascade and does not report specific quantitative PK parameters (CL, V, etc.) for coagulation factor X. |
| PD | Chung_2023 | not_relevant | 2 | 0 | The paper is a review of QSP models for the coagulation cascade and does not report specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for Factor X in the provided text. |
| popPK | DAmico_2026 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of drug-drug interactions for bleeding risk and does not report pharmacokinetic parameters for coagulation_factor_x. |
| PD | DAmico_2026 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological study using claims data to identify drug-drug interaction signals for bleeding; it does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for coagulation factor X. |
| popPK | Daher_2025 | irrelevant | 0 | 0 | The paper focuses on microvascular autoregulation and hemodynamic modeling, not the pharmacokinetics of coagulation factor X. |
| PD | Daher_2025 | not_relevant | 0 | 0 | The paper focuses on calibrating a hemodynamic model of microvessel autoregulation (myogenic/endothelial responses) and does not involve coagulation factor X or any pharmacodynamic exposure-response relationship. |
| PGx | Delahousse_2002 | not_relevant | 0 | 0 | The paper focuses on Factor II (Prothrombin) levels and assay methods, not the pharmacokinetics or pharmacodynamics of Factor X. |
| popPK | Delavenne_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fondaparinux, not coagulation factor X. |
| popPK | Deng_2025 | irrelevant | 0 | 0 | The paper describes a machine learning workflow for drug design and contains no pharmacokinetic data for coagulation_factor_x. |
| PD | Deng_2025 | not_relevant | 0 | 0 | The paper describes a machine learning workflow for drug design and does not report any pharmacodynamic or exposure-response data for coagulation factor X. |
| popPK | Dennis_2001 | irrelevant | 0 | 0 | The paper describes in-vitro peptide inhibitors of Factor VIIa and reports IC50/Ki values, but contains no pharmacokinetic parameters (CL, V, t1/2) for coagulation_factor_x. |
| popPK | Dixon-Jimenez_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of rivaroxaban, not coagulation_factor_x, which is only used as a pharmacodynamic biomarker (anti-Xa activity). |
| popPK | Dockal_2014 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Dockal_2014 | not_relevant | 0 | 0 | The paper describes the mechanism of action of peptides blocking TFPI-mediated inhibition of Factor Xa, but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters (e.g., IC50, Emax) for Factor X itself. |
| popPK | Dos_2025 | irrelevant | 0 | 0 | The study investigates the anticoagulant activity of Eucalyptus essential oils using in vitro assays and in silico binding models, rather than reporting quantitative pharmacokinetic disposition parameters for coagulation factor X itself. |
| PD | Dos_2025 | not_relevant | 3 | 2 | The paper reports in vitro dose-response data (PT/aPTT prolongation) and in silico binding energies for Factor X, but lacks a formal PK/PD model or numeric PD parameters (e.g., EC50, Emax) derived from a pharmacodynamic fit. |
| PGx | Elikowski_2015 | not_relevant | 0 | 0 | The paper is a case report on a drug-drug interaction (rivaroxaban and amiodarone) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fernández-Cadenas_2006 | not_relevant | 0 | 0 | The study explicitly reports no association between ACE genotypes and Factor X activities, and the primary outcome (recanalization) is a clinical efficacy endpoint, not a PK/PD parameter of the drug. |
| popPK | Francischetti_2002 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of a tick salivary protein (Ixolaris) interacting with Factor X, not a pharmacokinetic study of coagulation_factor_x as a drug. |
| popPK | Fromage_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mycophenolate sodium/mycophenolic acid, not coagulation_factor_x. |
| PD | Fromage_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for mycophenolic acid, not a pharmacodynamic (PD) or exposure-response model for coagulation factor X. |
| popPK | Frost_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of apixaban (a factor Xa inhibitor), not coagulation factor X itself, which is the target protein rather than the subject drug. |
| PGx | Furlan_2004 | not_relevant | 0 | 0 | The paper studies Factor VII (FVII) variants, not Factor X (FX). |
| popPK | Gandhi_2024 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the bispecific antibody HMB-001 and its effect on FVIIa half-life, rather than reporting standard population PK parameters (CL, V, Q) for coagulation factor X itself. |
| PGx | Gegu_2013 | not_relevant | 0 | 0 | The paper is a general review of new oral anticoagulants and does not report specific pharmacogenomic effects of gene variants on the PK or PD of coagulation factor X. |
| PGx | Girolami_2008 | not_relevant | 0 | 0 | The paper is a general review of congenital bleeding disorders and does not report specific pharmacogenomic effects on PK/PD parameters for coagulation factor X. |
| popPK | Gordon_2026 | irrelevant | 0 | 0 | The study focuses on the rational design of Factor Xa inhibitors using QSAR and molecular docking, not the pharmacokinetics of coagulation factor X itself. |
| PD | Gordon_2026 | not_relevant | 0 | 0 | The paper reports a QSAR model correlating molecular descriptors with in vitro inhibitory activity (Ki), not a pharmacodynamic (exposure-response or dose-response) relationship involving drug concentration in a biological system. |
| popPK | Guerrero-Hurtado_2025 | irrelevant | 0 | 0 | The study is a computational fluid dynamics simulation of coagulation efficacy, not a pharmacokinetic study reporting disposition parameters for coagulation_factor_x. |
| PD | Guerrero-Hurtado_2025 | not_relevant | 0 | 0 | The paper focuses on Factor XI/XII inhibition and computational fluid dynamics, not Factor X, and does not report numeric PD parameters for Factor X. |
| popPK | Hawthorne_1994 | irrelevant | 0 | 0 | The paper characterizes recombinant annexin V, not coagulation factor X, and contains no pharmacokinetic parameters. |
| popPK | Hoffmann_2002 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and bioequivalence of low-molecular-weight heparin (Certoparin), not the pharmacokinetics of coagulation factor X. |
| PD | Hoffmann_2002 | not_relevant | 3 | 2 | The study reports bioequivalence metrics (AUC ratios) and qualitative PD effects but does not provide a concentration-effect model or numeric PD parameters (e.g., EC50, Emax) for Factor X. |
| popPK | Hofmann_1987 | irrelevant | 0 | 0 | The paper describes the biochemical characterization and purification of venom components that activate factor X, not the pharmacokinetics of factor X itself. |
| PD | Hofmann_1987 | not_relevant | 3 | 2 | The paper reports biochemical characterization and a Hill coefficient for Ca2+ dependency, but does not provide a drug exposure-response or dose-response curve with numeric PD parameters (Emax, EC50) for the activators themselves. |
| popPK | Husbyn_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on Factor VII peptides and their effect on Factor X activation, containing no pharmacokinetic parameters for Factor X. |
| popPK | Jakobsen_2000 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on inhibitors of the coagulation pathway, not a pharmacokinetic study of coagulation factor X. |
| popPK | Jay_2007 | irrelevant | 0 | 0 | The paper discusses thermoregulation and body temperature estimation during exercise, not the pharmacokinetics of coagulation factor X. |
| popPK | Jesty_1990 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Jesty_1990 | not_relevant | 0 | 0 | The paper analyzes the kinetics of Factor Xa generation and inhibition in a biochemical context, focusing on the independence of the area under the curve from generation rate, rather than reporting a pharmacodynamic exposure-response or dose-response relationship for a drug with numeric PD parameters. |
| popPK | Jian_2025 | irrelevant | 0 | 0 | The paper is a protocol for immunotherapy biomarker analysis and contains no pharmacokinetic data for coagulation_factor_x. |
| PD | Jian_2025 | not_relevant | 0 | 0 | The paper is a protocol for single-cell RNA-seq and CyTOF analysis of immune response to immunotherapy and contains no pharmacokinetic or pharmacodynamic data for coagulation factor X. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study characterizes an antibody against antithrombin III and its effect on coagulation assays, but does not report pharmacokinetic parameters (CL, V, etc.) for coagulation factor X. |
| popPK | Jonsson_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of emicizumab, not coagulation factor X. |
| PGx | Karimi_2012 | not_relevant | 2 | 5 | The paper reports genotype-phenotype correlations for bleeding severity (intracranial hemorrhage) in Factor X deficiency, but does not report how specific genotypes alter the pharmacokinetic or pharmacodynamic parameters of the administered Factor X concentrate. |
| popPK | Koppelman_1995 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of protein S inhibition of factor X activation, not a pharmacokinetic study reporting disposition parameters for coagulation_factor_x. |
| popPK | Kovalenko_2023 | irrelevant | 0 | 0 | The paper describes mechanistic mathematical models of coagulation factor X activation kinetics (enzyme-substrate reaction rates) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Kubisz_2017 | irrelevant | 0 | 0 | The paper is a review of apixaban (a drug that inhibits coagulation factor X), not a pharmacokinetic study of coagulation factor X itself, and contains no quantitative PK parameters for the target drug. |
| PD | Kubisz_2017 | not_relevant | 1 | 0 | The text is a general review summary that qualitatively describes apixaban's mechanism and pharmacodynamic properties but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Kubitza_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rivaroxaban, not coagulation_factor_x, which is only the target of the drugs' pharmacodynamic activity. |
| PGx | Kurdi_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of Factor X clearance via N-glycosylation and macrophage interaction, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Kvasnicka_2017 | irrelevant | 0 | 0 | The paper is a review of rivaroxaban (a drug that inhibits factor Xa), not a pharmacokinetic study of coagulation factor X itself. |
| PD | Kvasnicka_2017 | not_relevant | 1 | 0 | The text is a general review of rivaroxaban's pharmacokinetics and clinical indications, lacking specific numeric PD parameters or exposure-response data. |
| popPK | Lanoiselée_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of heparin (using anti-Xa as a biomarker), not the pharmacokinetics of coagulation factor X itself. |
| PD | Lanoiselée_2024 | not_relevant | 0 | 0 | The study reports a pharmacokinetic (PK) model for heparin to predict anti-Xa levels, but does not report a pharmacodynamic (PD) model or exposure-response relationship for coagulation factor X itself. |
| PGx | Le_2010 | not_relevant | 0 | 0 | The paper discusses Protein Z gene polymorphisms and their effect on Protein Z plasma levels, not the pharmacokinetics or pharmacodynamics of coagulation factor X. |
| popPK | Leclerc_1995 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Leclerc_1995 | not_relevant | 0 | 0 | The paper investigates the effect of phosphodiesterase inhibitors on tissue factor expression in endothelial cells, which is unrelated to the pharmacodynamics of coagulation factor X. |
| popPK | Lee_1995 | irrelevant | 0 | 0 | The paper describes the isolation and in-vitro enzymatic properties of a snake venom protein that activates Factor X, rather than the pharmacokinetics of Factor X itself. |
| PD | Lee_1995 | not_relevant | 3 | 2 | The paper reports a Hill coefficient (6.83) for Ca2+ dependence of factor X activation, but does not provide a concentration-effect curve, Emax, EC50, or other numeric PD parameters for the drug/enzyme itself. |
| popPK | Lindley_1994 | irrelevant | 0 | 0 | The study investigates recombinant factor VIIa (rFVIIa), not coagulation factor X, which is the required subject drug. |
| PD | Lindley_1994 | not_relevant | 4 | 2 | The paper reports a qualitative "maximum effect model" relationship between FVII:C and PT/aPTT but does not provide the specific numeric PD parameters (Emax, EC50) or data points required to derive them. |
| PGx | Lippi_2009 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of vitamin K antagonists (warfarin), not coagulation factor X. |
| popPK | London_1996 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Manco-Johnson_1994 | irrelevant | 0 | 0 | The study measures plasma concentrations of coagulation factor X in sheep to assess the effects of glucose and insulin infusions, but it does not report pharmacokinetic disposition parameters (clearance, volume, half-life) for factor X as a dosed drug. |
| popPK | Mathur_1997 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| PD | Mathur_1997 | not_relevant | 0 | 0 | The paper focuses on the structural and mechanistic interaction between Factor IXa and Factor VIIIa, not on the pharmacodynamic exposure-response relationship of Factor X. |
| PGx | Mertens_1993 | not_relevant | 0 | 0 | The paper studies engineered recombinant Factor VIII variants, not the pharmacogenomics of Factor X. |
| popPK | Mismetti_1998 | irrelevant | 0 | 0 | The study focuses on acenocoumarol, and coagulation_factor_x is only measured as a pharmacodynamic biomarker, not as the subject drug for PK parameter estimation. |
| PD | Mismetti_1998 | not_relevant | 2 | 1 | The paper reports qualitative observations of stable pharmacodynamic activity (INR, Factor X) over 24 hours but does not provide numeric concentration-effect parameters or a fitted PD model. |
| popPK | Mohammed_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin, not coagulation factor X. |
| PGx | Monroe_2016 | not_relevant | 0 | 0 | The paper characterizes the structure and function of a recombinant Factor IX product (IXINITY) but does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Muczynski_2019 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics and pharmacodynamics of an engineered protein variant (FX/FpA) in a mouse model, not the effect of a human genetic variant on the PK/PD of a drug. |
| popPK | Muir_2024 | irrelevant | 2 | 2 | The paper is a mechanistic in silico model of the coagulation cascade, not a pharmacokinetic study of Factor X; the PK parameters listed are for the 4F-PCC product components, not Factor X as a subject drug. |
| popPK | Nagahara_1994 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo anticoagulant activity of FXa inhibitors, not the pharmacokinetic disposition parameters of coagulation factor X itself. |
| PGx | Nagarajan_2023 | not_relevant | 0 | 0 | The paper investigates the role of the MLX gene in lipid and glucose metabolism, not the pharmacokinetics or pharmacodynamics of coagulation factor X. |
| PGx | Newman_2023 | not_relevant | 0 | 0 | The paper describes a genetic mutation in the endogenous coagulation factor FVII (a disease mechanism), not the pharmacokinetics or pharmacodynamics of an exogenous drug (coagulation_factor_x). |
| PGx | Okuda_2010 | not_relevant | 0 | 0 | The paper investigates the association between the TSNAX gene and Major Depressive Disorder, not the pharmacokinetics or pharmacodynamics of coagulation factor X. |
| popPK | Oliveira_2024 | irrelevant | 0 | 0 | The study is an in silico investigation of lanostane-type triterpenes targeting MYC, not a pharmacokinetic study of coagulation_factor_x. |
| PD | Oliveira_2024 | not_relevant | 0 | 0 | The paper is an in silico study of triterpenes targeting MYC and contains no data, analysis, or mention of coagulation factor X or any pharmacodynamic/exposure-response relationship. |
| popPK | Orning_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on peptide inhibition of factor X activation and does not report pharmacokinetic parameters for coagulation_factor_x. |
| popPK | Parsons-Rich_2017 | irrelevant | 2 | 1 | The study reports only a single half-life value (~4 min) without clearance, volume, or compartmental model parameters, and the drug is a specific variant (FXaI16L) rather than standard coagulation factor X. |
| PD | Parsons-Rich_2017 | not_relevant | 3 | 1 | The abstract reports qualitative PD changes (aPTT, TGA, etc.) and dose-proportional PK, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| PGx | Parsons-Rich_2017 | not_relevant | 0 | 0 | The paper reports a Phase 1 safety and PK/PD study of a recombinant factor Xa variant in healthy volunteers but does not investigate the impact of human genetic variants (pharmacogenomics) on these parameters. |
| PGx | Rao_1986 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of coagulation factor activation in vitro and in plasma, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Rao_2013 | not_relevant | 0 | 0 | The paper investigates mitochondrial function and catecholamine content in pheochromocytoma tumors, not the pharmacokinetics or pharmacodynamics of coagulation factor X. |
| popPK | Redondo-Castillejo_2025 | irrelevant | 0 | 0 | The study investigates diatomaceous earth supplementation in rats and does not involve coagulation_factor_x. |
| PD | Redondo-Castillejo_2025 | not_relevant | 0 | 0 | The paper investigates the effects of diatomaceous earth on lipid metabolism and does not report any pharmacodynamic or exposure-response relationship for coagulation factor X. |
| popPK | Retout_2020 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of emicizumab, not coagulation_factor_x. |
| PD | Retout_2020 | not_relevant | 3 | 1 | The paper reports a population PK model and a descriptive/exploratory comparison of exposure vs. bleeding rates, but it does not fit a formal PD model or provide numeric PD parameters (e.g., Emax, EC50) for the exposure-response relationship. |
| popPK | Sarode_2020 | relevant | 9 | 2 | The paper describes a pharmacometric model for Factor X (FX) levels following 4F-PCC dosing, but specific numeric PK parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PGx | Scholz_2021 | not_relevant | 0 | 0 | The study investigates a drug-herb interaction (St. John's Wort) rather than a genetic variant or genotype effect. |
| popPK | Serpa_2018 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of apixaban (a factor Xa inhibitor), not coagulation factor X itself. |
| PD | Serpa_2018 | not_relevant | 3 | 2 | The study explicitly states that the pharmacodynamic response (dPT) showed no relationship to apixaban concentration, and no numeric PD parameters (Emax, EC50, etc.) were derived or reported. |
| popPK | Sheehan_2006 | irrelevant | 0 | 0 | The study investigates the mechanism of inhibition of the intrinsic tenase complex (involving Factor X activation) by DHG and heparin, but does not report pharmacokinetic parameters (CL, V, etc.) for Factor X itself. |
| popPK | Sinn_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for phenprocoumon, not coagulation factor X, which is only measured as a biomarker of anticoagulant effect. |
| popPK | Song_2014 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Spiegel_2004 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action and inhibition of coagulation factor VIII, not the pharmacokinetics of coagulation factor X. |
| PGx | Srivastava_2016 | not_relevant | 0 | 0 | The text is a table of contents for a genome meeting and does not contain specific data or findings regarding pharmacogenomic effects on coagulation factor X. |
| popPK | Stucke-Ring_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doxorubicin and the pharmacodynamics of tTF-NGR, using Factor X only as a diagnostic assay substrate rather than as the subject drug for PK parameter estimation. |
| popPK | Trellu_2013 | irrelevant | 2 | 1 | The study focuses on the pharmacodynamic bioequipotency of idraparinux (an FXa inhibitor) and reports PK parameters for the drug itself, not for the target protein coagulation_factor_x. |
| popPK | Ueshima_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for apixaban, not coagulation_factor_x. |
| PD | Ueshima_2018 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and pharmacogenomics of apixaban, but does not report any pharmacodynamic (PD) or exposure-response relationship for coagulation factor X or any other PD endpoint. |
| popPK | Ueshima_2019 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| popPK | Ueshima_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of edoxaban, not coagulation_factor_x. |
| PD | Ueshima_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) model for edoxaban, focusing on clearance and volume of distribution, but does not include any pharmacodynamic (PD) modeling, exposure-response analysis, or dose-response relationship for coagulation factor X or any other PD endpoint. |
| popPK | Veyrat-Follet_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for idraparinux (a factor Xa inhibitor), not for coagulation factor X itself. |
| popPK | Wakui_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of clot waveform analysis for anticoagulants, not a pharmacokinetic study reporting disposition parameters for coagulation factor X. |
| popPK | Wallin_1988 | irrelevant | 0 | 0 | The paper is an in-vitro/mechanistic study on the carboxylation of factor X precursors, not a pharmacokinetic study reporting disposition parameters for coagulation_factor_x. |
| PD | Wallin_1988 | not_relevant | 3 | 1 | The paper mentions a qualitative dose-response relationship between warfarin administration and factor X substrate labeling but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Weiss_2025 | irrelevant | 0 | 0 | The paper describes an in vitro aerosol exposure system (NAVETTA) and does not involve coagulation_factor_x or any pharmacokinetic parameters. |
| PD | Weiss_2025 | not_relevant | 0 | 0 | The paper describes an in vitro aerosol exposure system (NAVETTA) and reports qualitative cellular stress responses (viability, IL-8) to TiO2 nanoparticles, but it does not report a pharmacodynamic model, exposure-response relationship, or numeric PD parameters (e.g., EC50, Emax) for coagulation factor X or any other drug. |
| PGx | Wheeler_2013 | not_relevant | 0 | 0 | The paper investigates the genetic architecture of paclitaxel-induced neuropathy, not the pharmacokinetics or pharmacodynamics of coagulation factor X. |
| popPK | Wilkinson_2002 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of coagulation factor X activation kinetics, not a pharmacokinetic study of the drug coagulation_factor_x. |
| PD | Wilkinson_2002 | not_relevant | 0 | 0 | The paper reports biochemical kinetic parameters (Vmax, Km, Kd) for protein-protein interactions and complex assembly, not a pharmacodynamic exposure-response or dose-response relationship for a drug. |
| popPK | Yetman_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic activity of apixaban (a Factor Xa inhibitor) and does not report pharmacokinetic parameters for coagulation factor X itself. |
| popPK | Yoneyama_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for emicizumab, not coagulation factor X. |
| popPK | Yuan_2005 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of factor IXa (not factor X) mutations and heparin binding, reporting no pharmacokinetic parameters. |
| PD | Yuan_2005 | not_relevant | 3 | 2 | The paper reports mechanistic enzymatic kinetics and heparin affinity (EC50) for Factor IXa mutants, not a pharmacodynamic exposure-response relationship for Factor X or a drug's effect on Factor X levels. |
| popPK | Zaiss_2011 | irrelevant | 0 | 0 | The paper investigates the mechanistic role of coagulation factor X in adenovirus transduction and does not report any pharmacokinetic parameters. |
| popPK | Zajda_2022 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of metformin derivatives on coagulation factor X activity in vitro, rather than reporting pharmacokinetic disposition parameters for coagulation factor X itself. |
| popPK | Zhang_1995 | irrelevant | 0 | 0 | The paper describes the purification and in-vitro enzymatic characterization of a venom protein that activates Factor X, not the pharmacokinetics of Factor X itself. |
| PD | Zhang_1995 | not_relevant | 3 | 2 | The paper reports a Hill coefficient of 7.9 for Ca2+ dependence, but does not provide a concentration-effect curve, Emax, EC50, or other numeric PD parameters for the drug's effect on Factor X activation. |
| popPK | Zhang_1998 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of frunexian (an FXIa inhibitor), not the pharmacokinetics of coagulation factor X itself. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of milvexian (a Factor XI inhibitor), not coagulation factor X. |
| popPK | Zou_2025 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Zou_2025 | not_relevant | 0 | 0 | The paper focuses on edoxaban, a direct factor Xa inhibitor, and does not report pharmacodynamic parameters for coagulation factor X itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
