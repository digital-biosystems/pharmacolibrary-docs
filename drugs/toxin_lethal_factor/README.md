<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Lethal factor&quot;}]"></div>

# Lethal factor

- **generic name:** Lethal factor
- **T3DB:** [T3D2594](http://www.t3db.ca/toxins/T3D2594) · **PubChem:** none

## About

Lethal factor (LF) is a component of the anthrax (Bacillus anthracis) toxins, with a zinc-dependent metallo-protease activity. The anthrax toxins consist of three distinct proteins: the protective antigen (PA; 83 kDA), the edema factor (EF; 89 kDA) and the lethal factor (LF; 90 kDa). Individually, none of the three is toxic; PA combined with LF is the lethal toxin (LeTx) and PA combined with EF is the edema toxin (EdTx).

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Lethal factor (LF) is a component of the anthrax (Bacillus anthracis) toxins.
- **Mechanism of toxicity:** After binding to a host cell surface receptor, PA is cleaved by membrane endoproteases of the furin family. Cleaved PA molecules assemble into heptamers, which then associate with EF and LF. …
- **Health effects:** Lethal factor (LF) is a component of the anthrax (Bacillus anthracis) toxins. Anthrax is an acute diease that may manifest as a pulmonary, gastrointestinal, or cutaneous infection. …
- **Acute toxicity:** LD50: <114 ug/kg (Intravenous, Rat)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2594">T3DB T3D2594</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 159233-86-0</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 07:51 | 1:27:19 | 0/0/0 | 0/0/0 | 0/0/0 | 1,559,372/60,824 | ollama / glm-5.3-flash | 93 | 4/79 | 92/1 | 0 |

## Coverage

- **PubMed hits:** 497 matched, 261 returned
- **screened:** 13  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Furst_1995.pdf` | Furst DE, Innovative treatment approaches for rhe…, Bailliere's clinical rheuma… (1995) | popPK | 7 | [10.1016/s0950-3579(05)80310-3](https://doi.org/10.1016/s0950-3579(05)80310-3) | [8591650](https://pubmed.ncbi.nlm.nih.gov/8591650) | The elimination half-life of the active metabolite (~11 days) and renal excretion for leflunomide are reported numerically in the text; no other kinetic parameters. |
| `Nagy_2024.pdf` | Nagy Á et al., Impact of site-specific conjugation str…, European journal of medicin… (2024) | popPK | 7 | [10.1016/j.ejmech.2024.116927](https://doi.org/10.1016/j.ejmech.2024.116927) | [39378827](https://pubmed.ncbi.nlm.nih.gov/39378827) | In vivo blood/tissue kinetics of radiolabelled DUNP19 (LF) antibodies are reported, but the numeric values appear to live in figures/results not provided; "LF" here denotes lethal factor fusion naming, but the kinetic subject is the antibody conjugate, not the lethal factor substance itself. |
| `Santori_2020.pdf` | Santori N et al., In vitro detoxication of microcystins i…, Toxicology letters (2020) | popPK | 7 | [10.1016/j.toxlet.2020.01.007](https://doi.org/10.1016/j.toxlet.2020.01.007) | [31953209](https://pubmed.ncbi.nlm.nih.gov/31953209) | Reports kinetic detoxication (GST/GSH conjugation) parameters for MC-LF in human recombinant enzymes and hepatic cytosol, but the numeric values do not appear in the provided evidence and presumably live in tables or figures not included. |
| `Mu_2025.pdf` | Mu Y et al., Lactoferrin-functionalized PEGylation l…, International journal of ph… (2025) | popPK | 6 | [10.1016/j.ijpharm.2025.125245](https://doi.org/10.1016/j.ijpharm.2025.125245) | [39842742](https://pubmed.ncbi.nlm.nih.gov/39842742) | Reports in vivo pharmacokinetics of norcantharidic acid liposomes in rats (AUC and t1/2 fold-increases of 4.28 and 5.17 vs solution given numerically), but absolute t1/2/AUC values and full PK profiles appear to reside in figures/tables not provided. |
| `Pan_2018.pdf` | Pan L et al., Intranasal delivery of α-asarone to the…, Drug delivery and translati… (2018) | popPK | 6 | [10.1007/s13346-017-0438-8](https://doi.org/10.1007/s13346-017-0438-8) | [29134552](https://pubmed.ncbi.nlm.nih.gov/29134552) | Formulation/PK and brain-distribution study of alpha-asarone with AUC values (mainly reported as fold-changes); full numeric PK and tissue-distribution values likely in tables/figures only partly provided. |
| `Dadachova_2008.pdf` | Dadachova E et al., In vitro evaluation, biodistribution an…, Nuclear medicine and biology (2008) | popPK | 5 | [10.1016/j.nucmedbio.2008.07.001](https://doi.org/10.1016/j.nucmedbio.2008.07.001) | [18848660](https://pubmed.ncbi.nlm.nih.gov/18848660) | Biodistribution of radiolabeled LF in mice is reported as lethal_factor's own disposition, but no numeric biodistribution values for LF appear in the evidence (only PA's Kd), suggesting values live in figures/tables not provided. |
| `Ji_2023.pdf` | Ji XZ et al., [Associations between indoor volatile o…, Beijing da xue xue bao. Yi… (2023) | pd | 5 | [10.19723/j.issn.1671-167X.2023.03.015](https://doi.org/10.19723/j.issn.1671-167X.2023.03.015) | [37291925](https://www.ncbi.nlm.nih.gov/pubmed/37291925) | metadata signals extractable PD data (exposure-response) |
| `Jiang_2016.pdf` | Jiang S et al., Traffic-related air pollution is associ…, International archives of o… (2016) | pd | 5 | [10.1007/s00420-016-1129-3](https://doi.org/10.1007/s00420-016-1129-3) | [27084335](https://www.ncbi.nlm.nih.gov/pubmed/27084335) | metadata signals extractable PD data (exposure-response) |
| `Qin_2021.pdf` | Qin L et al., Effect of soil leaching on the toxicity…, Ecotoxicology and environme… (2021) | pd | 5 | [10.1016/j.ecoenv.2021.112999](https://doi.org/10.1016/j.ecoenv.2021.112999) | [34798362](https://www.ncbi.nlm.nih.gov/pubmed/34798362) | metadata signals extractable PD data (EC50) |
| `Tang_2021.pdf` | Tang M et al., The acute effects of temperature variab…, Environmental research (2021) | pd | 5 | [10.1016/j.envres.2020.110655](https://doi.org/10.1016/j.envres.2020.110655) | [33358871](https://www.ncbi.nlm.nih.gov/pubmed/33358871) | metadata signals extractable PD data (exposure-response) |
| `Mutagonda_2019.pdf` | Mutagonda RF et al., Pregnancy and CYP3A5 Genotype Affect Da…, Drug metabolism and disposi… (2019) | pgx | 8 | [10.1124/dmd.119.088062](https://doi.org/10.1124/dmd.119.088062) | [31744845](https://www.ncbi.nlm.nih.gov/pubmed/31744845) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Hooker_2008.pdf` | Hooker AC et al., Population pharmacokinetic model for do…, Clinical pharmacology and t… (2008) | pgx | 7 | [10.1038/sj.clpt.6100476](https://doi.org/10.1038/sj.clpt.6100476) | [18183036](https://www.ncbi.nlm.nih.gov/pubmed/18183036) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-11 07:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarab_2008 | irrelevant | 0 | 0 | This is an environmental biomarker study of lipofuscin accumulation and lysosomal stability in mussels, with no toxicokinetic parameters for lethal factor. |
| popPK | Alderete_2013 | irrelevant | 0 | 0 | Human epidemiological/outcome study of liver fat and diabetes risk factors with no toxicokinetic parameters for lethal_factor. |
| PGx | Alhaj_2026 | not_relevant | 0 | 0 | The paper discusses dairy bioactive compounds and gut microbiota; "LF" refers to lactoferrin (not anthrax lethal factor), and no gene variant effect on a PK/PD parameter of lethal factor is described. |
| popPK | Alshehri_2023 | irrelevant | 0 | 0 | The kinetic parameters (CL/F, Vc/F, Vp/F, Ka, etc.) all belong to ivermectin, not to lethal_factor as the subject substance, so nothing here is relevant. |
| PGx | Alshehri_2026 | not_relevant | 2 | 8 | Paper reports PopPK covariates (sex, age, weight) on albendazole/albendazole-sulfoxide PK, but identifies no gene variant/genotype/phenotype effect; explicitly calls for future pharmacogenetic studies. |
| popPK | Altaner_2019 | irrelevant | 2 | 2 | This is an analytical-method validation paper (recoveries, LOD/LOQ, internal standards); MC-LF tissue concentrations are shown in a figure but no kinetic parameters (half-life, clearance, rate constants) are reported, and most numeric values (recovery data) live in tables/supplementary figures. |
| popPK | Anand_2015 | irrelevant | 0 | 0 | The paper concerns bovine lactoferrin nanocapsules against Toxoplasma gondii; lethalfactor (anthrax lethal factor) is not studied, and no kinetic parameters for it are reported. |
| popPK | André_2015 | irrelevant | 0 | 0 | Paper is an in vitro bactericidal study of lactoferrin/lysozyme against pneumococci with no kinetic parameters for lethal_factor. |
| popPK | Aperia_1984 | irrelevant | 0 | 0 | A study of renal water excretion in infants with no kinetic parameters for any substance called lethal_factor; substance not even present. |
| popPK | Artym_2005 | irrelevant | 0 | 0 | Review on lactoferrin with no kinetic parameters for lethal_factor; no numeric values present. |
| PGx | Bacheva_2026 | not_relevant | 0 | 0 | No drug or lethal factor is studied; the paper links SNPs to HRV/FEV1 in athletes, with no PK/PD parameters for lethal_factor. |
| popPK | Bala_2021 | irrelevant | 0 | 0 | The paper reports population PK parameters for diethylcarbamazine, not for lethal_factor; DEC is the studied substance and no kinetic parameters of lethal_factor appear. |
| popPK | Bayne_1982 | irrelevant | 0 | 0 | Lethal factor is not the protein lethal factor; the paper concerns bacterial septicemia in snails with no kinetic parameters, and death is attributed to septicemia rather than a toxin. |
| popPK | Beekman_1991 | irrelevant | 0 | 0 | Paper concerns chicken apolipoprotein II gene transcription regulation; "LF-A1" is a liver transcription factor, not the toxicokinetics of any substance, and no kinetic parameters are reported. |
| PGx | Bi_2026 | not_relevant | 0 | 0 | Paper predicts platinum resistance via AI models with no pharmacogenomic or PK/PD parameter data for lethal_factor. |
| popPK | Bildaci_2025 | irrelevant | 0 | 0 | Clinical outcome study of dialyzer effects on body composition with no toxicokinetic parameters for lethal_factor of any kind. |
| PGx | Boccardi_2010 | not_relevant | 0 | 3 | The paper examines TCF7L2 variants on autonomic (LF/HF) activity after glucose, with no drug and no PK/PD parameter for lethal factor. |
| popPK | Boecker_1969 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Budge_2018 | irrelevant | 0 | 0 | This is a review of adverse events in lymphatic filariasis treatment (DEC/IVM/ALB); "lethal_factor" (the substance of interest) never appears as a subject, and no kinetic parameters for it are reported. |
| popPK | Burlacu_2007 | irrelevant | 0 | 0 | The paper reports PK parameters only for levobupivacaine, fentanyl, and clonidine; lethal_factor does not appear as the subject substance at all. |
| popPK | Caccia_1985 | irrelevant | 0 | 0 | The paper reports kinetic parameters for fenfluramine and norfenfluramine, not for lethal_factor, which does not appear as the subject substance. |
| popPK | Caccia_1992 | irrelevant | 0 | 0 | The paper reports kinetic parameters for d-fenfluramine, not for lethal_factor as the subject substance; no numeric parameter values for lethal_factor appear. |
| PGx | Carnevali_2014 | not_relevant | 0 | 0 | Paper concerns FTO knockout effects on cardiac autonomic function in mice; no drug lethal_factor or pharmacogenomic PK/PD effect is involved. |
| popPK | Cecchetto_2025 | irrelevant | 0 | 0 | This is an environmental exposure/monitoring study reporting pollutant concentrations in bees, flowers and soils with no toxicokinetic parameters for the substance. |
| PGx | Chandra_2006 | not_relevant | 0 | 0 | Paper is an immunology/vaccine delivery study; no gene variant effects on lethal factor PK/PD parameters are reported. |
| popPK | Chang_2006 | irrelevant | 0 | 0 | The paper is a mouse Campylobacter colonization/infection study; no toxicokinetic parameters for lethal_factor of any kind are reported. |
| popPK | Chen_1990 | irrelevant | 0 | 0 | "LF" here denotes liver function tests, not lethal_factor toxin; the paper is a clinical HBV/BMT outcome study with no toxicokinetic parameters. |
| PGx | Chen_2021 | not_relevant | 0 | 0 | Study associates SCNN1A Ala663Thr with sudden sensorineural hearing loss risk, not with any pharmacokinetic or pharmacodynamic parameter of a drug. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is a review of honeysuckle flower chemistry and pharmacokinetics with no mention of lethal_factor as a subject substance, and no numeric parameters for it in the evidence. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | Paper is about MRI-based prediction of glioma genotypes (IDH/MGMT), with no drug PK/PD parameters or pharmacogenomic effects. |
| popPK | Coray_2012 | irrelevant | 0 | 0 | Paper concerns lactoferrin and H. pylori internalisation into cultured cells with no toxicokinetic parameters for lethal_factor. |
| popPK | Cruz_2023 | irrelevant | 0 | 0 | Paper concerns NK cells and IPF; no kinetic parameters for lethal_factor of any kind are reported. |
| popPK | Cuddihy_1969 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Dadachova_2008 | relevant | 5 | 2 | Biodistribution of radiolabeled LF in mice is reported as lethal_factor's own disposition, but no numeric biodistribution values for LF appear in the evidence (only PA's Kd), suggesting values live in figures/tables not provided. |
| popPK | Desager_1980 | irrelevant | 0 | 0 | The paper concerns fenofibrate's uricosuric effects in volunteers; lethal_factor does not appear as the studied substance, and no kinetic parameters for it are reported. |
| PGx | Diliberto_1997 | not_relevant | 0 | 5 | The paper examines CYP1A2 knockout effects on TCDD hepatic sequestration, not on the specified drug lethal_factor. |
| popPK | Diliberto_2001 | irrelevant | 1 | 2 | The kinetic parameters (body burdens, L/F ratios) belong to TCDD, not to lethal_factor, which does not appear as the subject substance; numeric values in the abstract are for TCDD. |
| PGx | Driuchina_2023 | not_relevant | 0 | 0 | Paper reports metabolite biomarkers of fatty liver disease (CYP1A2/CYP3A4 activity via caffeine/testosterone metabolites), not genomic variants altering PK/PD of lethal factor. |
| popPK | Dubray_2020 | irrelevant | 0 | 0 | Clinical safety/efficacy trial of DEC, albendazole and ivermectin with no toxicokinetic parameters of any substance, let alone lethal_factor. |
| popPK | Edi_2019 | irrelevant | 0 | 0 | The paper reports PK parameters (t½, CL/F, Vz/F, AUC) for DEC, ivermectin and albendazole in humans; lethal_factor is not the subject substance and no kinetic parameters for it appear. |
| popPK | Erameh_2020 | irrelevant | 0 | 0 | Study protocol for ribavirin PK in Lassa fever patients; no kinetic parameters for lethal_factor are reported, and no numeric values are present. |
| popPK | Erameh_2026 | irrelevant | 0 | 0 | The kinetic parameters (AUC, half-life, clearance, Vd) belong to favipiravir and ribavirin for Lassa fever (LF), not to "lethal factor" as the subject substance. |
| popPK | Feurstein_2010 | irrelevant | 2 | 2 | No quantitative toxicokinetic parameters (rate constants, Km/Vmax, half-life, clearance) for microcystin congeners; only qualitative uptake evidence and percent PP-activity inhibition/uptake-inhibition values. |
| popPK | Fimbo_2024 | irrelevant | 0 | 0 | The paper reports PK (Cmax, AUC) for ivermectin, not for lethal_factor, and is otherwise an efficacy/outcome study. |
| PGx | Fischer_2010 | not_relevant | 0 | 0 | Study examines OATP transporter-mediated uptake and congener toxicity of microcystins in vitro; no gene variant/genotype/phenotype effect on PK/PD parameters is reported. |
| popPK | Fountain_2025 | irrelevant | 0 | 0 | Paper is an exercise metabolomics study in humans; no lethal_factor toxicokinetic parameters of any kind, only metabolite concentration trajectories in supplements. |
| popPK | Fu_2026 | irrelevant | 0 | 0 | Epidemiological NHANES exposure-outcome study of DCBA (DEET metabolite) with only odds ratios and docking scores, no toxicokinetic parameters of any kind. |
| popPK | Gao_2010 | irrelevant | 0 | 0 | The paper concerns lactoferrin- and transferrin-conjugated polymersomes as brain-delivery vectors; lethal_factor is not the subject substance and no kinetic parameters for it are reported. |
| popPK | Ghosh_2025 | irrelevant | 0 | 0 | This is an epidemiological compartmental transmission model of lymphatic filariasis, not a toxicokinetic study of lethal_factor; parameters are disease transmission/epidemiology rates, not disposition kinetics of the substance. |
| PGx | Gomez-Delgado_2015 | not_relevant | 0 | 0 | No drug or PK/PD parameter for lethal_factor; this is a gene-diet interaction study on lipid/inflammatory biomarkers. |
| PGx | Gomez-Delgado_2019 | not_relevant | 0 | 0 | The paper concerns APOE-diet interactions on postprandial triglycerides, with no drug or lethal_factor PK/PD parameters. |
| popPK | Gouw_2024 | irrelevant | 0 | 0 | Radiotherapy fractionation modeling for NSCLC; no toxicokinetic parameters (half-life, clearance, partition, etc.) for the substance are reported. |
| popPK | Gugler_1975 | irrelevant | 0 | 5 | The paper reports full quantitative pharmacokinetics (half-life, absorption, renal excretion) but for the beta-blocker LF 17-895, a different substance from lethal_factor. |
| popPK | Guillén_2002 | irrelevant | 0 | 0 | The paper concerns human lactoferrin-transgenic mice and S. aureus infection; no toxicokinetic parameters for lethal_factor appear anywhere in the evidence. |
| popPK | Gunasekaran_2023 | irrelevant | 0 | 0 | This is a mathematical control-theory SIR epidemic modeling paper with no toxicokinetic parameters (no half-life, clearance, partition coefficient, etc.) for lethal_factor. |
| popPK | Hancock_2023 | irrelevant | 0 | 0 | This is an organizational leadership survey study with no toxicokinetic parameters for lethal_factor of any kind. |
| PGx | Harwansh_2014 | not_relevant | 0 | 0 | This is an in vitro CYP inhibition study of an herbal formulation; no gene variant/genotype/phenotype effects on lethal_factor PK/PD are reported. |
| popPK | He_2018 | irrelevant | 0 | 0 | The papers partition/extraction coefficients relate to a viral protein purification process, not to toxicokinetic parameters of lethal_factor. |
| PGx | He_2018_2 | not_relevant | 0 | 0 | Paper concerns Tpcn2 knockout effects on glucose/insulin physiology; no drug PK/PD parameter for lethal_factor reported. |
| popPK | Hicks_2011 | irrelevant | 1 | 0 | This is a narrative review of toxins' cardiovascular pathogenesis with no kinetic parameters for lethal factor; references and figure values are not provided. |
| popPK | Hooker_2008 | irrelevant | 0 | 0 | The kinetic parameters (docetaxel clearance) belong to docetaxel, not to lethal_factor, which does not appear as the subject substance. |
| PGx | Hoti_2003 | not_relevant | 4 | 2 | Paper reports beta-tubulin codon 200 polymorphism only as a genetic sensitivity marker for albendazole in W. bancrofti; no PK/PD parameters (exposure, response metrics) are measured or modified. |
| popPK | Hou_2015 | irrelevant | 0 | 0 | This is a chemical extraction/purification study of Maitake β-Glucan; lethal_factor is not the subject substance and no toxicokinetic parameters are reported. |
| popPK | Huang_1977 | irrelevant | 4 | 1 | LD50 values were computed but no numeric toxicokinetic parameters appear in the provided text; values seem lost without tables/figures. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The paper concerns lactoferrin-heparin conjugate pharmacokinetics in mice, with no quantitative toxicokinetic parameters for lethal_factor and no numeric values provided. |
| PGx | Ifergan_2004 | not_relevant | 2 | 5 | Effects are due to folate-deprivation-induced BCRP expression changes in cell lines, not a gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Inose_2021 | irrelevant | 3 | 2 | Only qualitative blood retention times (minutes, 1–3 h) for AuNP-lactoferrin complexes are described; no numeric kinetic parameters (half-life, clearance, Vd) are given. |
| popPK | Ippolito_2018 | irrelevant | 0 | 0 | The paper concerns the antimalarial drug lumefantrine (abbreviated LF), a different substance, with no lethal_factor kinetic parameters reported. |
| popPK | Jacinto_2013 | irrelevant | 0 | 0 | This is a pediatric physiotherapy/heart rate variability study with no toxicokinetic parameters of any kind for lethal_factor; no numeric kinetic values appear anywhere in the evidence. |
| PGx | Jańczuk-Grabowska_2023 | not_relevant | 0 | 0 | Paper examines gene–diet interaction of lactoferrin (a nutraceutical, not a drug) on body weight/HbA1c; no PK or PD drug parameters are reported. |
| popPK | Ji_2023 | irrelevant | 0 | 0 | This is an epidemiological panel study of TVOC exposure with heart rate variability outcomes; it contains no kinetic parameters (half-life, clearance, partition coefficients, etc.) for the substance of interest. |
| popPK | Jiang_2016 | irrelevant | 0 | 0 | Epidemiological exposure study of PM2.5 with biomarker associations; no kinetic parameters for lethal_factor. |
| popPK | Jiang_2022 | irrelevant | 0 | 2 | The kinetic parameters (Cmax, AUC, t1/2, CL/F) belong to huperzine A nanoemulsions; lethal_factor itself is never the measured subject, and Table 2's numeric values are truncated/not present. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | Clinical outcome study of hemodialysis in uremia; no kinetic parameter (half-life, clearance, etc.) for the substance is reported. |
| popPK | Karami_2019 | irrelevant | 0 | 0 | This paper is about indinavir nanoemulsions; "lethal_factor" is not the subject substance and no kinetic parameters for lethal_factor appear. |
| popPK | Kim_2023 | irrelevant | 2 | 1 | The paper reports PK parameters (AUC, half-life) for glycyrrhizin and its lactoferrin conjugate in mice, but lethal_factor itself is never studied; the substance mismatch makes the values unusable, and half-life/clearance figures are partly in truncated text/figures. |
| PGx | Knudsen_2021 | not_relevant | 0 | 0 | Paper studies indole (gut microbial metabolite) effects on liver inflammation in mice; no gene variant/genotype effect on a PK or PD parameter of lethal factor is reported. |
| PGx | Kobayashi_1986 | not_relevant | 0 | 0 | Abstract is about E. coli phospholipid synthesis mutants; "lethal factor" refers to membrane lethality, not the anthrax toxin drug, and no pharmacogenomic PK/PD effect is reported. |
| popPK | Kolm_2006 | irrelevant | 0 | 0 | LF here is endogenous lactoferrin expression in horse endometrium, not toxicokinetic parameters for a substance named lethal_factor; no kinetic parameters reported. |
| popPK | Kraus_2013 | irrelevant | 0 | 0 | Epidemiological noise exposure study with no substance identified as lethal_factor and no kinetic parameters of any kind. |
| PGx | Kruger_2012 | not_relevant | 0 | 0 | Paper studies Acads genotype effects on brain gene expression and feeding behavior; no lethal_factor drug or PK/PD parameters are reported. |
| popPK | Kumari_2017 | irrelevant | 0 | 10 | The kinetic parameters (T1/2, MRT, AUC) belong to temozolomide (TMZ) nanoparticles, not to the subject substance lethal_factor; lactoferrin appears only as a nanoparticle carrier/vehicle. |
| PGx | Lemos_2008 | not_relevant | 0 | 0 | Study of folate-induced BCRP expression in Caco-2 cells; no gene variants and no lethal_factor PK/PD parameters reported. |
| PGx | Lemos_2009 | not_relevant | 3 | 2 | The paper examines folate-status/BCRP expression effects on gefitinib/erlotinib IC50; the ABCG2 C421A variant was genotyped but all lines were wild-type, so no pharmacogenomic effect on a PK/PD parameter of the queried drug is reported. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | The kinetic parameters (AUC, t1/2, Vz/F, CLz/F) in Table 5 belong to NMN (nicotinamide mononucleotide), not to lethal_factor; lactoferrin (Lf) appears only as a nanoparticle targeting ligand. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | An immunology study of neutrophil–Bacillus anthracis interactions with no toxicokinetic parameters for lethal factor; lethal factor appears only as a bacterial toxin component studied functionally, not kinetically. |
| PGx | Lu_2018 | not_relevant | 0 | 0 | Paper reports metabolic effects of RN genotype in pigs, with no drug, PK, or PD parameter for lethal_factor. |
| PGx | Lu_2021 | not_relevant | 0 | 0 | The paper describes engineering of anthrax PA immunotoxin delivery; no gene variant/genotype/phenotype effects on PK or PD parameters of lethal factor are reported. |
| popPK | Luerken_2023 | irrelevant | 0 | 0 | The substance is indocyanine green, not lethal_factor; the paper reports diagnostic ICG clearance values in liver fibrosis patients with no kinetic parameters for lethal_factor itself. |
| popPK | Madkour_2022 | irrelevant | 0 | 0 | The paper's subject is lactoferrin (a glycoprotein) as a renoprotective agent in rats, not the toxicokinetics of lethal factor; no kinetic parameters are reported. |
| popPK | Maheshwari_2015 | irrelevant | 0 | 0 | The paper concerns cystatin C dialysis clearance in hemodialysis patients; lethal_factor is never studied or measured, so no kinetic parameters for the substance exist here. |
| popPK | Malinczak_2024 | irrelevant | 0 | 0 | The paper concerns recombinant human lactoferrin, a different substance than lethal_factor, and reports only a workshop roadmap with no kinetic parameters of any kind. |
| PGx | Manzanares_2015 | not_relevant | 1 | 2 | Study examines dietary modulation of xenobiotic-metabolizing enzyme mRNA in rats; no gene variant effect on lethal factor PK/PD parameters. |
| popPK | Marchesi_2014 | irrelevant | 0 | 0 | Paper concerns electromagnetic fields and autophagy in SH-SY5Y cells with no toxicokinetic parameters of lethal_factor. |
| popPK | Masuda_2022 | irrelevant | 0 | 0 | "LF" here refers to the liposomal formulation of eribulin, not the substance lethal_factor, and no toxicokinetic parameters for lethal_factor are reported; only efficacy/safety outcomes are given. |
| popPK | Mayfield_2025 | irrelevant | 0 | 0 | This is an epidemiological study of lymphatic filariasis (W. bancrofti) persistence after drug administration; "LF" here refers to filariasis antigen, not the toxin lethal factor, and no toxicokinetic parameters for lethal factor are reported. |
| popPK | McPherson_2022 | irrelevant | 0 | 0 | This is an epidemiological surveillance study of lymphatic filariasis in mosquitoes and humans; no toxicokinetic parameters of any substance are reported. |
| PGx | Mendenhall_2020 | not_relevant | 0 | 0 | Lethal factor is a bacterial toxin substrate/protease substrate biology, not a drug; reported mutations affect toxin pathogenicity, not pharmacogenomic changes in PK/PD parameters of a therapeutic drug. |
| PGx | Meyer_2025 | not_relevant | 0 | 0 | Study examines COVID-19 vaccine immune responses in lymphatic filariasis patients; no gene variant effect on lethal_factor PK/PD reported. |
| popPK | Miranda_2018 | irrelevant | 0 | 0 | Surgical outcome study of Dupuytren's fasciectomy with no toxicokinetic parameters for lethal_factor; the only numbers are clearance margins and recurrence/complication rates. |
| popPK | Miyata_1994 | irrelevant | 0 | 0 | Gene characterization paper for thromboxane synthase with no toxicokinetic parameters for any substance. |
| PGx | Miyata_1994 | not_relevant | 0 | 0 | Gene characterization of TBXAS1 with no variant/genotype effects on any drug PK/PD parameter. |
| PGx | Moayeri_2007 | not_relevant | 0 | 0 | Mouse/rat strain differences in PA cleavage/clearance are not gene-variant pharmacogenomic effects on lethal factor PK/PD parameters. |
| popPK | Mokhtar_2022 | irrelevant | 0 | 0 | The paper is a drug-delivery formulation study (lactoferrin used as a targeting ligand for methotrexate/exemestane nanoparticles); it contains no toxicokinetic parameters for lethal_factor. |
| popPK | Montenegro_2021 | irrelevant | 0 | 0 | This is a parasite resistance/susceptibility study; "delayed parasite clearance" refers to parasitological clearance in malaria patients, not any toxicokinetic parameter of a substance. |
| PGx | Morozumi_1996 | not_relevant | 0 | 0 | No gene variant or pharmacogenomic effect; findings concern sympathetic activity affecting MIBG imaging, not lethal factor PK/PD genetics. |
| popPK | Mosha_2014 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| popPK | Mutagonda_2016 | irrelevant | 3 | 4 | Day 7 plasma lumefantrine concentrations are measured, but these are exposure/outcome data with no kinetic parameters (no t½, clearance, Vd, or model) for LF itself; the numeric values are cut-offs and medians, not toxicokinetic parameters. |
| PGx | Mutagonda_2017 | not_relevant | 0 | 0 | Paper reports pharmacogenetic effects on lumefantrine PK/exposure, not on lethal_factor; lethal_factor is not studied. |
| PGx | Mutagonda_2019 | not_relevant | 0 | 0 | The paper reports CYP3A5 genotype effects on lumefantrine PK, but the target drug here is lethal_factor, which is not studied, so no pharmacogenomic effect on lethal_factor PK/PD is reported. |
| popPK | Na_2022 | irrelevant | 0 | 0 | This paper concerns lactoferrin-based implant coatings; lethal_factor is not the subject substance and no toxicokinetic parameters are reported. |
| popPK | Nagendra_2015 | irrelevant | 1 | 5 | The paper reports only an acute LD50 in mice, with no kinetic parameters (half-life, clearance, partitioning, etc.) for lethal factor. |
| popPK | Nagy_2024 | relevant | 7 | 2 | In vivo blood/tissue kinetics of radiolabelled DUNP19 (LF) antibodies are reported, but the numeric values appear to live in figures/results not provided; "LF" here denotes lethal factor fusion naming, but the kinetic subject is the antibody conjugate, not the lethal factor substance itself. |
| popPK | Naik_2025 | irrelevant | 0 | 0 | Clinical diagnostic study of liver stiffness in neonatal cholestasis; no toxicokinetic parameters for lethal_factor or any substance. |
| popPK | Navegantes_2024 | irrelevant | 0 | 0 | This is a sepsis treatment efficacy study in mice with no toxicokinetic parameters for lethal_factor; "LF" here is the lipid fraction of Agaricus brasiliensis, not the substance of interest, and no kinetic numbers appear. |
| popPK | Nawrot_2021 | irrelevant | 0 | 0 | The paper reports heavy metal accumulation in Phragmites seedlings with no kinetic parameters (half-life, rate constants, partition coefficients, models) for lethal_factor as a subject substance. |
| PGx | Nejat_2026 | not_relevant | 0 | 0 | The paper studies DNAJB3 knockout mice and metabolic phenotypes with no pharmacogenomic effects on PK/PD parameters of lethal factor. |
| popPK | Nickel_2024 | irrelevant | 0 | 0 | The paper concerns heart rate variability and glucose OGTT; lethal_factor (e.g., anthrax lethal factor) is never mentioned and no toxicokinetic parameters for it appear. |
| popPK | Ning_2021 | irrelevant | 0 | 0 | The paper reports kinetics/retention of Fe and doxorubicin from a nano-formulation, with no toxicokinetic parameters for lethal_factor; no numeric values for lethal_factor appear in the evidence. |
| popPK | Nisha_2021 | irrelevant | 0 | 0 | The paper concerns imatinib mesylate nanoparticles as the subject substance, not lethal_factor, and no numeric toxicokinetic parameters for lethal_factor appear in the evidence. |
| popPK | Nojima_2008 | irrelevant | 1 | 1 | The paper reports half-life, AUC and absorption parameters for bovine lactoferrin (a protein drug), not for the substance lethal_factor; numbers present but for a different substance. |
| popPK | Nojima_2009 | irrelevant | 0 | 0 | The substance studied is PEGylated bovine lactoferrin, not lethal_factor; no kinetic parameters for lethal_factor appear. |
| popPK | ONeill_1992 | relevant | 3 | 5 | Reports limited in vivo disposition data for IQ/PhIP in rats (percent of dose entrapped in GI microcapsules, urinary excretion) but no standard kinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Ortega_2024 | irrelevant | 0 | 0 | The paper characterizes Salmon salar NK-lysin antimicrobial peptides (bioactivity, antimicrobial and immunomodulatory effects) with no toxicokinetic parameters (no half-life, clearance, partition coefficients, etc.) for any substance; "lethal_factor" only appears as a bacterial strain (P. salmonis LF-89). |
| popPK | Owji_2020 | irrelevant | 0 | 0 | This is a rat lung injury physiology study with thyroid hormones as modulators, not toxicokinetic parameters of lethal_factor. |
| popPK | Paglialunga_2008 | irrelevant | 0 | 0 | No toxicokinetic parameters for a substance; it's a mouse physiology/metabolic phenotype study of ASP deficiency with no kinetic parameters of a toxicological subject. |
| popPK | Pan_2018 | relevant | 6 | 4 | Formulation/PK and brain-distribution study of alpha-asarone with AUC values (mainly reported as fold-changes); full numeric PK and tissue-distribution values likely in tables/figures only partly provided. |
| popPK | Pang_2010 | irrelevant | 0 | 0 | Lethal_factor is not the studied substance; parameters concern doxorubicin/tetrandrine polymersomes, so no toxicokinetic data for lethal_factor appear. |
| popPK | Pang_2025 | irrelevant | 0 | 0 | The paper studies glycyrrhetic acid 3-O-mono-β-d-glucuronide (GAMG) treating liver fibrosis (LF); lethal_factor does not appear as the subject substance and no kinetic parameters for it are reported. |
| popPK | Parekh_1976 | irrelevant | 0 | 0 | "LF" here is Lissamine Green SF, a renal test dye, not the substance lethal_factor, and no toxicokinetic parameters for lethal_factor are reported. |
| popPK | Parisotto_2008 | irrelevant | 1 | 0 | lethal_factor is not a study subject; MIBG appears only as an imaging tracer in a clinical cardiac autonomic study with no toxicokinetic parameters for lethal_factor. |
| popPK | Petyaev_2018 | irrelevant | 0 | 0 | The paper reports DHA (docosahexaenoic acid) pharmacokinetics in humans; the target substance lethal_factor does not appear anywhere as a study subject. |
| popPK | Pezeshgi_2016 | irrelevant | 0 | 0 | The substance lethal_factor does not appear anywhere in this paper about dialyzer effects on serum phosphorus in hemodialysis patients. |
| popPK | Pourbaix_1984 | irrelevant | 0 | 0 | LF 2151 is a metabolite/comparator of fenofibrate; no kinetic parameters of lethal_factor are reported, only qualitative metabolic observations in hamsters. |
| popPK | Qi_2021 | irrelevant | 1 | 1 | Lactoferrin appears only as a targeting ligand on docetaxel liposomes; no kinetic parameters (half-life, clearance, partition coefficients, etc.) for lactoferrin itself are reported, and numbers present relate to liposome characterization and docetaxel release/tissue levels. |
| popPK | Qiu_2023 | irrelevant | 0 | 0 | The kinetic parameters (ICG elimination rate constant and clearance time) pertain to indocyanine green as a hepatic-function tracer in rabbits, not to lethal_factor as the subject substance; no lethal_factor kinetic data are present in the evidence. |
| popPK | Ramalingam_2018 | irrelevant | 0 | 0 | Fish oil study with glucose clearance (pharmacodynamic, not lethal_factor kinetics); no toxicokinetic parameters for lethal_factor. |
| popPK | Raval_2025 | irrelevant | 1 | 3 | The kinetic parameters concern etoposide nanoparticles, not lethal_factor as the subject substance, so no quantitative toxicokinetic values for lethal_factor itself are reported. |
| PGx | Recinos_2004 | not_relevant | 0 | 0 | Paper studies liver gene expression in atherosclerosis-prone mice; no drug, gene variant effects on lethal factor PK/PD reported. |
| popPK | Ribot_2006_2 | irrelevant | 0 | 0 | In vitro macrophage functional study with no toxicokinetic parameters for lethal factor. |
| popPK | Rodrigues_2018 | irrelevant | 0 | 0 | This is an HRV stress study in air traffic controllers; lethal_factor plays no role and no toxicokinetic parameters are reported. |
| popPK | Rodrigues_2018_2 | irrelevant | 0 | 0 | This is a human stress/HRV study with no toxicokinetic parameters for lethal_factor; LF here is heart-rate variability's low-frequency component, not a substance. |
| popPK | Rodrigues_2021 | irrelevant | 0 | 0 | No substance or toxicokinetic parameters at all; the paper is a wearable stress/HRV biomonitoring study with no chemical kinetic data. |
| popPK | Rojas_2020 | irrelevant | 0 | 0 | This is a molecular modeling study of the dopamine transporter with no toxicokinetic parameters, no half-lives, rates, or kinetic models for any substance — the substance lethal_factor does not appear as a subject. |
| popPK | Roumelioti_2016 | irrelevant | 0 | 0 | The kinetic parameters (clearances, volumes, generation rates) all belong to beta-2-microglobulin, not to lethal_factor, so the substance is not the subject of any reported toxicokinetic values. |
| PGx | Ruziyeva_2026 | not_relevant | 0 | 0 | No drug or lethal_factor exposure is studied; paper reports genetic associations with cardiovascular physiology, not PK/PD parameters. |
| popPK | STARA_1963 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PGx | Saha_2012 | not_relevant | 0 | 0 | The paper concerns antimalarial drug efficacy and resistance markers, with no data on lethal_factor PK/PD parameters. |
| popPK | Salahuddin_2018 | irrelevant | 0 | 0 | The paper studies heart rate variability and lactate clearance in critically ill patients with no quantitative toxicokinetic parameters for lethal_factor as a subject substance. |
| popPK | Santori_2020 | relevant | 7 | 3 | Reports kinetic detoxication (GST/GSH conjugation) parameters for MC-LF in human recombinant enzymes and hepatic cytosol, but the numeric values do not appear in the provided evidence and presumably live in tables or figures not included. |
| popPK | Schiller_2016 | irrelevant | 0 | 0 | This is a renal physiology study in rabbits with no toxicokinetic parameters for lethal_factor. |
| PGx | Schwab_2007 | not_relevant | 0 | 0 | Theoretical modeling of drug resistance inheritance in parasites; no gene variant effect on PK/PD parameters of a lethal_factor measured or fitted. |
| popPK | Sharifi_2020 | irrelevant | 1 | 1 | Lf appears solely as a nanoparticle targeting ligand; no half-life, clearance or other kinetic parameter of Lf itself is reported, and any Doxo biodistribution values live in figures not provided. |
| popPK | Sharma_2013 | irrelevant | 0 | 0 | The kinetic parameters (Cmax, AUC) belong to vismodegib, not to lethal_factor, which does not appear in the paper at all. |
| popPK | Shiga_2015 | irrelevant | 0 | 0 | The paper concerns recombinant human lactoferrin-Fc fusion pharmacokinetics; lethal_factor is not the subject substance and no kinetic parameters for it appear. |
| popPK | Shokri-Kojori_2023 | irrelevant | 0 | 0 | Human neuroimaging study of sleep deprivation with no kinetic parameters of lethal_factor. |
| PGx | Silva_2019 | not_relevant | 2 | 3 | Paper describes a genotyping assay for kdr mosquito resistance alleles; insecticide survival associations are phenotype frequencies, not a fitted PK/PD parameter effect for lethal_factor. |
| popPK | Simons_2026 | irrelevant | 0 | 0 | Epidemiological/spatial burden modelling of Lassa virus with no toxicokinetic parameters for any substance; numbers present are incidence, occupancy and seroreversion rates, not kinetic parameters. |
| PGx | Sitinjak_2026 | not_relevant | 0 | 0 | No gene variant/genotype effect on any PK/PD parameter of lactoferrin is reported; the study examines antiviral and microbiome effects in chickens. |
| popPK | Song_2023 | irrelevant | 0 | 0 | The paper concerns electroacupuncture and liver imaging in mice using Cy5.5-GP and ICG probes; lethal_factor is not the subject and no kinetic parameters for it appear anywhere. |
| popPK | Steiner_2016 | irrelevant | 0 | 0 | The paper concerns microcystin congeners, not the target substance lethal_factor; the kinetic parameters (transport rates by zebrafish Oatps) belong to a different substance. |
| PGx | Strauss_2020 | not_relevant | 0 | 0 | This paper concerns bilirubin levels in Crigler-Najjar syndrome and does not report pharmacokinetic or pharmacodynamic parameters for lethal_factor. |
| popPK | Su_2014 | irrelevant | 2 | 7 | All kinetic/tissue distribution parameters reported are for doxorubicin, a different substance; lethal_factor (lactoferrin) appears only as a surface modifier of the carrier, not the pharmacokinetic subject; values (e.g., brain accumulation at 2 h) are in the text, but the pharmacokinetic parameters themselves appear only summarized. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper concerns shionone's anti-fibrotic mechanism with no toxicokinetic parameters for lethal_factor or any kinetic values. |
| popPK | Suzuki_2004 | irrelevant | 0 | 0 | Study of lactoferrin receptor expression, not toxicokinetics of lethal_factor; no kinetic parameters present. |
| popPK | Sykes_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of omeprazole, not lethal_factor, so no toxicokinetic parameters for the subject substance exist; values are in supplementary tables not provided anyway. |
| popPK | Tamadaho_2023 | irrelevant | 0 | 0 | This is a human immunology study of Wuchereria bancrofti infection (immune cell frequencies), with no toxicokinetic parameters for lethal_factor of any kind. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | This is an epidemiological exposure study of temperature variability and HRV with no kinetic parameters for lethal_factor or any substance. |
| popPK | Tao_2018 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/protection study; lethal factor appears only as a challenge toxin with no kinetic parameters of its disposition. |
| popPK | Tavul_2022 | irrelevant | 0 | 0 | Clinical trial of antifilarial efficacy/safety; no kinetic parameters (half-life, clearance, partition coefficients) for any substance, only parasite clearance rates. |
| popPK | Tessitore_2004 | irrelevant | 0 | 0 | This is a hemodialysis outcome study of pentosidine clearance in patients; no toxicokinetic parameters for a substance named lethal_factor are reported. |
| popPK | Thomas_1969 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Thomsen_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of DEC, albendazole and ivermectin; lethal_factor does not appear as the studied substance. |
| popPK | Tong_2007 | irrelevant | 0 | 0 | Clinical hemodialysis outcome study with HRV and urea clearance measures; no toxicokinetic parameters for lethal_factor and no numeric values for it. |
| popPK | Tsokos_2003 | irrelevant | 0 | 0 | Immunohistochemistry review of sepsis lung injury in human autopsy material with no kinetic parameters for lethal_factor of any kind. |
| popPK | Tsuboi_2022 | irrelevant | 0 | 0 | Clinical surgical outcome study of biliary atresia with no toxicokinetic parameters for lethal_factor |
| popPK | Usman_2013 | irrelevant | 1 | 8 | The abbreviation "LF" in this paper denotes levofloxacin, a different substance, so the full readable PK parameter set (T½, Ka, AUC, Vd, Cl) does not belong to lethal_factor. |
| popPK | Vasunilashorn_2022 | irrelevant | 0 | 0 | This is a psychometric/outcome study of a delirium severity score in older adults with no toxicokinetic parameters for lethal_factor of any kind. |
| popPK | Velliyagounder_2019 | irrelevant | 1 | 0 | This is an efficacy study of lactoferrin against Candida infection in mice with no kinetic parameters (half-life, clearance, partitioning, etc.) for lactoferrin reported in the evidence. |
| popPK | Venturoli_2009 | irrelevant | 0 | 0 | The paper models icodextrin peritoneal ultrafiltration in peritoneal dialysis patients with no kinetic parameters for lethal_factor as the subject substance. |
| popPK | Vesterkvist_2003 | irrelevant | 1 | 0 | An in vitro lipid monolayer/membrane interaction study of MC-LF with no quantitative kinetic parameters (only "higher surface activity" qualitatively) and no numeric values given. |
| PGx | Wang_2025_2 | not_relevant | 0 | 0 | Yak gut microbiota study with no drug, gene variant, or PK/PD parameter for lethal_factor. |
| popPK | Wang_2025_3 | irrelevant | 0 | 0 | No kinetic parameters for any substance, let alone lethal_factor; this is a stroke/neuroinflammation study in mice. |
| popPK | Wei_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of liposomal nanoformulations carrying fluorescent probes in mice, with no kinetic parameters of lethal_factor. |
| popPK | Wei_2021 | irrelevant | 1 | 1 | A chemistry/extraction paper on tea saponin partitioning in an aqueous two-phase system; lethal_factor is not the subject substance and no kinetic parameters for it are reported. |
| popPK | Wemm_2023 | irrelevant | 0 | 0 | This is a human observational HRV study in alcohol use disorder with no toxicokinetic parameters of any kind for lethal_factor. |
| popPK | Westra_2019 | irrelevant | 0 | 0 | The paper is a population PK model of vancomycin in dialysis patients; lethal_factor is never the subject substance, so no kinetic parameters for it exist here. |
| PGx | Willicott_2026 | not_relevant | 0 | 0 | The paper is a C. elegans genetic screen studying α-synuclein neurodegeneration modulators (jmjd, twk-14); lethal_factor is not a drug and no PK/PD pharmacogenomic effects are reported. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | In vitro study of lethal toxin cytotoxicity/cell sensitivity with no toxicokinetic parameters and no numeric kinetic values in the evidence. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | Study of trio-WES diagnostic yield prediction in autism; no drug, no PK/PD parameters, no pharmacogenomic effect. |
| popPK | Wu_2025_2 | irrelevant | 0 | 0 | This is a mouse HBV/liver-fibrosis model paper; "LF" here means liver fibrosis, not lethal_factor, and no toxicokinetic parameters of any substance are reported. |
| popPK | Wu_2025_3 | irrelevant | 0 | 0 | Clinical laser treatment efficacy study with no toxicokinetic parameters for the substance. |
| PGx | Xiong_2017 | not_relevant | 0 | 0 | Microbiome metatranscriptomics study in mice; no drug lethal_factor, no PK/PD parameters or pharmacogenomic effects. |
| popPK | Xu_2010 | irrelevant | 0 | 0 | Gene expression study in sheep follicles with no toxicokinetic parameters for lethal_factor. |
| popPK | Xu_2016 | irrelevant | 0 | 0 | This is a polymer bioseparation study; "partition coefficient" refers to ε-polylysine extraction in an aqueous two-phase system, not toxicokinetics of lethal_factor, and no species exists. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | Paper is a drug delivery/therapeutic efficacy study of LNP-encapsulated α-mangostin/siRNA; "Lf" is lactoferrin as a targeting ligand, and there are no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for any substance of toxicological interest. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper concerns gold nanorods as photothermal agents, not lethal_factor, and the abstract provides no quantitative kinetic parameters; any distribution data likely live in figures. |
| PGx | Yavari_2023 | not_relevant | 0 | 0 | Paper concerns EPA dietary effects in an Alzheimer's mouse model with no gene variant effects on lethal_factor PK/PD. |
| popPK | Ye_2013 | irrelevant | 0 | 0 | The paper reports biodistribution/pharmacokinetics of a fluorescent dye IR-775 in a lactoferrin-cyclodextrin nanocarrier, not any kinetic parameters for lethal_factor; the substance of interest does not appear as the subject. |
| PGx | Ye_2025 | not_relevant | 0 | 0 | The paper concerns plant flavonoid biosynthesis in foxtail millet, not a drug (lethal_factor) or any pharmacogenomic effect on PK/PD parameters. |
| popPK | Yu_2013 | irrelevant | 0 | 0 | The paper's kinetic parameters (krel 0.078 h⁻¹, free fractions) belong to eribulin mesylate E7389; "LF" denotes the liposomal formulation, not the subject substance lethal_factor, so no parameters for lethal_factor are present. |
| popPK | Yu_2014 | irrelevant | 0 | 0 | The paper studies the drug LF-3-88, not lethal_factor; no kinetic parameters of lethal_factor are reported at all. |
| popPK | Yu_2024 | irrelevant | 0 | 0 | The paper is a formulation/bioequivalence study of oseltamivir phosphate, not a toxicokinetic study of lethal_factor; no lethal_factor parameters are present. |
| popPK | Yun_2012 | irrelevant | 0 | 0 | Immunology of Lassa virus clearance with no kinetic parameters or subject substance present. |
| popPK | Zagulski_1998 | irrelevant | 1 | 0 | Lethal factor appears only as an E. coli LD100 lethality endpoint; no toxicokinetic parameters for it are reported as numeric values. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | C. elegans cell corpse engulfment study with no toxicokinetic parameters for lethal_factor. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | "LF" here is heart-rate-variability low-frequency power, not the substance lethal_factor; no toxicokinetic parameters of any substance (and certainly none for lethal_factor) are reported — only HRV/inflammatory endpoint changes in a human exposure study. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper concerns rTMS treatment of chronic insomnia and glymphatic function; it contains no lethal_factor toxicokinetic parameters or any kinetic model. |
| popPK | Zimecki_2002 | irrelevant | 0 | 0 | Pharmacodynamic immunology study of lactoferrin with no kinetic parameters for lethal_factor. |
| popPK | de_2018 | irrelevant | 0 | 0 | Diagnostic study of schistosome antigens with no kinetic parameters for lethal_factor. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blethal_factor%5D&body=Drug%3A%20lethal_factor%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lethal_factor/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
