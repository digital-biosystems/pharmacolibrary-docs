<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;somatorelin&quot;}]"></div>

# somatorelin

- **generic name:** somatorelin
- **ATC codes:** `V04CD05`
- **DrugBank:** [DB12656](https://go.drugbank.com/drugs/DB12656) · **PubChem:** none
- **groups:** investigational

## About

Somatorelin is a recombinant form of growth hormone-releasing hormone used as a diagnostic agent to assess growth hormone deficiency. It is given via injection as a powder for solution. The drug is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7559299](https://www.wikidata.org/wiki/Q7559299), [Wikipedia](https://en.wikipedia.org/wiki/Somatorelin?oldid=1154586057) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Khalfallah_1990_GH_AUC](drugs/drug_somatorelin/pd_Khalfallah_1990_GH_AUC.md) | GH area under the curve ← GHRH · direct linear effect | — | Khalfallah Y et al., Dose-effect study of intranasal adminis…, The Journal of clinical end… (1990) | [10.1210/jcem-71-2-512](https://doi.org/10.1210/jcem-71-2-512) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tena-Sempere_1996_GH](drugs/drug_somatorelin/pd_Tena_Sempere_1996_GH.md) | GH secretion ← GHRH · direct Emax (saturable) effect | — | Tena-Sempere M et al., In vitro pituitary GH secretion after G…, Journal of molecular endocr… (1996) | [10.1677/jme.0.0160081](https://doi.org/10.1677/jme.0.0160081) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.95).">pig</span> | [Hassan_1995_growth_hormone_releasing_hormone_GHRH_binding](drugs/drug_somatorelin/pd_Hassan_1995_growth_hormone_releasing_hormone_GHRH_binding.md) | growth hormone-releasing hormone (GHRH) binding biomarker turnover ← somatorelin | — | Hassan HA et al., Characterization of growth hormone-rele…, Peptides (1995) | [10.1016/0196-9781(95)02026-8](https://doi.org/10.1016/0196-9781(95)02026-8) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:46 | 0:04 | 0/0/0 | 3/0/0 | 0/0/0 | 4,475/157 | einfracz / qwen3.8-27b | 37 | 1/36 | 37/0 | 0 |

## Coverage

- **PubMed hits:** 193 matched, 96 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alba_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects (growth normalization) of the GHRH analog CJC-1295 in mice, not the pharmacokinetic parameters of somatorelin. |
| PGx | Alba_2006 | not_relevant | 0 | 0 | The paper discusses somatotropin (growth hormone) and somatorelin (GHRH) analogs, not the drug somatorelin itself, and focuses on growth outcomes in knockout mice rather than pharmacogenomic PK/PD effects of somatorelin. |
| popPK | Ardiyanti_2009 | irrelevant | 0 | 0 | The study investigates bovine growth hormone and its axis in cattle, not the pharmacokinetics of the drug somatorelin. |
| PGx | Ardiyanti_2009 | not_relevant | 0 | 0 | The paper studies bovine growth hormone (bGH) gene polymorphisms in cattle, not the pharmacogenomics of the somatostatin analog somatorelin in humans. |
| popPK | Barron_1985 | irrelevant | 0 | 0 | The paper studies the pharmacodynamic response of growth hormone to GHRH analogs in men and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Barron_1985 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of GHRH analogs in normal men and does not involve the drug somatorelin or any pharmacogenomic analysis of gene variants. |
| popPK | Baudet_2003 | irrelevant | 0 | 0 | The paper studies the effect of ghrelin on growth hormone (GH) secretion in chickens, not the pharmacokinetics of somatorelin. |
| PGx | Baudet_2003 | not_relevant | 0 | 0 | The study investigates the pharmacology of ghrelin on growth hormone secretion in chickens and does not mention somatorelin or any genetic variants. |
| popPK | Bedart_2024 | irrelevant | 0 | 0 | This is a chemical library enumeration paper with no pharmacokinetic data for somatorelin. |
| PGx | Berry_2018 | not_relevant | 0 | 0 | Study examines exercise-induced GH/IGF-1 gene expression in prediabetes; no drug (somatorelin) administration or pharmacogenomic PK/PD effect reported. |
| popPK | Bitar_1993 | irrelevant | 0 | 0 | The paper investigates the receptor binding of PACAP-38 in rat lung membranes and does not involve the drug somatorelin or pharmacokinetic parameters. |
| PGx | Bitar_1993 | not_relevant | 0 | 0 | The paper studies PACAP-38 receptor binding in rat lungs and does not involve somatorelin or any pharmacogenomic analysis. |
| popPK | Bohlooli_2026 | irrelevant | 0 | 0 | This is a review of metal–organic framework stability and biointerface energetics; somatorelin is not mentioned and no PK parameters for it appear. |
| popPK | Brigante_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study of antiretroviral effects on growth hormone secretion and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Brigante_2019 | not_relevant | 0 | 0 | The paper investigates the effect of antiretroviral drugs on somatotropic cells, not a pharmacogenomic effect on the PK/PD of somatorelin. |
| popPK | Bruns_2002 | irrelevant | 5 | 2 | The study focuses on somatostatin peptidomimetics (SOM230), not somatorelin, and while it reports a half-life for SOM230 in rats, it lacks the specific PK parameters for somatorelin required. |
| PGx | Bruns_2002 | not_relevant | 0 | 0 | The paper describes the pharmacology and PK of SOM230 in animal models but does not report any genetic variants or genotypes. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | This is a structural/medicinal chemistry study of an AcrB efflux pump inhibitor (BDM91531) in bacteria; somatorelin is not mentioned and no PK parameters exist. |
| popPK | Chan_1998 | irrelevant | 0 | 0 | This is a mechanistic in vitro study characterizing a GHRH receptor in goldfish, not a pharmacokinetic study of somatorelin. |
| PGx | Chan_1998 | not_relevant | 0 | 0 | The paper focuses on the characterization of a GHRH receptor in goldfish and does not involve the drug somatorelin or human pharmacogenomics. |
| popPK | Chorążewska_2026 | irrelevant | 0 | 0 | The paper concerns a protein-drug conjugate (TriFHS-MMAE) for pancreatic cancer; somatorelin is never mentioned and no PK disposition parameters for it appear. |
| popPK | Chow_1997 | irrelevant | 0 | 0 | The study focuses on the molecular evolution and functional characterization of VIP receptors in goldfish and other non-mammalian vertebrates, and does not contain any pharmacokinetic data for somatorelin. |
| PGx | Chow_1997 | not_relevant | 0 | 0 | The paper investigates the molecular evolution and functional characterization of VIP receptors in fish, with no mention of somatorelin or pharmacogenomics. |
| popPK | Cohen_1991 | irrelevant | 0 | 0 | The study investigates the hormonal pharmacodynamics of somatostatin in diabetes, not the pharmacokinetics of somatorelin. |
| PGx | Cohen_1991 | not_relevant | 0 | 0 | The study investigates somatostatin (not somatorelin) and compares diabetic vs. nondiabetic subjects (clinical phenotypes), not genetic variants/genotypes. |
| PGx | Danek_2021 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on somatorelin PK/PD; paper studies iloperidone effects on rat CYP expression via neuroendocrine mechanisms, not pharmacogenomics. |
| popPK | El-Zahed_2026 | irrelevant | 0 | 0 | This is a nanocomposite antimicrobial study about amoxicillin/ZnO against P. aeruginosa; no somatorelin PK parameters appear anywhere. |
| popPK | Elias_1995 | irrelevant | 0 | 0 | The paper describes in vitro characterization of growth hormone-releasing peptides (GHRPs) and does not study somatorelin or its pharmacokinetics. |
| PGx | Elias_1995 | not_relevant | 0 | 0 | The paper describes the in vitro pharmacodynamics of novel GH-releasing peptides but does not report any pharmacogenomic effects. |
| popPK | Engel_2005 | irrelevant | 0 | 0 | The paper investigates the anticancer mechanism of a GHRH antagonist in endometrial cancer, not the pharmacokinetics of somatorelin. |
| PGx | Engel_2005 | not_relevant | 0 | 0 | The paper discusses a GHRH antagonist (MZ-J-7-118) and does not mention somatorelin or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Gabreanu_2018 | not_relevant | 2 | 2 | Paper covers GHD diagnosis and GHRH-arginine stimulation testing, but reports no gene variant effect on PK/PD parameters of somatorelin (GHRH). |
| popPK | Gajdošová_2026 | irrelevant | 0 | 0 | This is a SERS analytical detection paper for sertraline/serotonin with no somatorelin PK parameters; somatorelin does not appear at all. |
| popPK | Gaylinn_2002 | irrelevant | 0 | 0 | The paper is a review of the growth hormone releasing hormone receptor's biology and genetics, containing no pharmacokinetic data or parameters for somatorelin. |
| PGx | Gaylinn_2002 | not_relevant | 0 | 0 | The paper reviews the GHRH receptor gene and its mutations in general physiology/disease, but does not report pharmacogenomic effects on the PK or PD parameters of the specific drug somatorelin. |
| popPK | Ghorbanizamani_2026 | irrelevant | 0 | 0 | This is a review of upconversion nanoparticles; somatorelin is not mentioned and no PK parameters for it appear. |
| popPK | Gibadullin_2026 | irrelevant | 0 | 0 | This is a glucagon/PTH heterochiral analogue pharmacology study; somatorelin is not mentioned and no PK disposition parameters for it appear. |
| popPK | Gimenez_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of HDAC6 inhibitors with no somatorelin PK data or disposition parameters. |
| popPK | Gregory_2016 | irrelevant | 0 | 0 | The paper focuses on GHRH receptor mutations and growth hormone deficiency, not the pharmacokinetics of somatorelin. |
| PGx | Gregory_2016 | not_relevant | 0 | 0 | The paper describes the molecular basis of a growth hormone receptor mutation affecting endogenous GHRH signaling, not the pharmacogenomics of a drug called somatorelin. |
| popPK | Grugni_2013 | irrelevant | 0 | 0 | The paper analyzes GH secretion dynamics and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Grugni_2013 | not_relevant | 0 | 0 | The paper studies Growth Hormone (GH) secretion and Prader-Willi genotypes, but does not involve the drug somatorelin or its pharmacokinetics/pharmacodynamics. |
| popPK | Gupta_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Growth Hormone (GH) and GHRH, not for the drug somatorelin. |
| PGx | Gupta_1990 | not_relevant | 0 | 0 | The study investigates age- and sex-related pharmacokinetics of growth hormone (GH) induced by GHRH, not the pharmacogenomics of somatorelin. |
| popPK | Halmos_2006 | irrelevant | 0 | 0 | The study focuses on GH-RH receptor binding and expression in sarcoma xenografts, not the pharmacokinetics of somatorelin. |
| PGx | Halmos_2006 | not_relevant | 0 | 0 | The paper studies the binding of GH-RH antagonists to tumor receptors and does not involve the drug somatorelin or any pharmacogenomic analysis. |
| popPK | Hanew_2003 | irrelevant | 0 | 0 | The study investigates the physiological effects of a leptin fragment on pituitary function and GH secretion, not the pharmacokinetics of somatorelin. |
| PGx | Hanew_2003 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of a leptin fragment on GH secretion and does not involve somatorelin or any gene variants. |
| popPK | Hassan_1995 | irrelevant | 0 | 0 | The paper describes an in-vitro binding assay for GHRH, not the pharmacokinetics of somatorelin. |
| PGx | Hassan_1995 | not_relevant | 0 | 0 | The paper characterizes GHRH binding to a receptor and does not involve somatorelin or any pharmacogenomic analysis. |
| popPK | Haymer_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on amprenavir-derived CB2 agonists; somatorelin is not the subject drug and no somatorelin PK parameters appear. |
| popPK | Ho_1988 | irrelevant | 0 | 0 | This study focuses on gonadal steroid effects on pituitary somatotroph cell populations and GH secretion via the reverse hemolytic plaque assay, not on the pharmacokinetics of the drug somatorelin. |
| PGx | Ho_1988 | not_relevant | 0 | 0 | The paper studies endogenous growth hormone secretion and gonadal steroid effects in rats, not the pharmacokinetics or pharmacodynamics of the drug somatorelin (GHRP-6). |
| PGx | Hoffman_2020 | not_relevant | 0 | 0 | Study of GHRH-KO mice transcriptomics/metabolomics; no somatorelin administration or PK/PD parameters reported. |
| popPK | Ibraheem_2023 | irrelevant | 0 | 0 | This is an antibody-drug conjugate synthesis/characterization study of pemetrexed-atezolizumab, with no somatorelin PK parameters reported. |
| PGx | Icyuz_2020 | not_relevant | 0 | 0 | Study reports GHRH knockout metabolic phenotypes in mice; no drug (somatorelin) PK/PD or pharmacogenomic effect is examined. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of SARS-CoV-2 PLpro inhibitors with no pharmacokinetic parameters for somatorelin. |
| popPK | Katoh_2008 | irrelevant | 0 | 0 | The study examines GH gene polymorphisms and endocrine responses in cattle, not the pharmacokinetics of somatorelin. |
| PGx | Katoh_2008 | not_relevant | 0 | 0 | The paper studies growth hormone (GH) gene polymorphisms in cattle, not somatorelin, and does not report pharmacogenomic effects of somatorelin. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | This is a synthetic chemistry/in vitro screening paper on benzimidazole amidoxime derivatives; somatorelin is not mentioned and no PK parameters exist. |
| popPK | Kerrigan_1989 | irrelevant | 0 | 0 | The study investigates the pharmacology of somatostatin on growth hormone secretion in rat somatotropes and does not involve the drug somatorelin. |
| PGx | Kerrigan_1989 | not_relevant | 0 | 0 | The study investigates the endogenous regulation of growth hormone by somatostatin in different genetic/sex contexts, not the pharmacokinetics or pharmacodynamics of the synthetic drug somatorelin. |
| popPK | Khalfallah_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effect of GHRH on growth hormone secretion, not the pharmacokinetics of somatorelin. |
| PGx | Khalfallah_1990 | not_relevant | 0 | 0 | The study reports a dose-response relationship for somatorelin (GHRH-44-NH2) in healthy subjects but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Kidd_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic paper on neuroendocrine cell lines and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Kidd_2008 | not_relevant | 0 | 0 | The paper investigates the effects of peptide analogs on neuroendocrine tumor cell lines but does not involve somatorelin or report pharmacogenomic effects on PK/PD parameters. |
| popPK | Koyama_2026 | irrelevant | 0 | 0 | This is a narrative review of phytochemicals for dementia; somatorelin is not mentioned and no PK parameters for it appear. |
| popPK | Kołodziejczyk_2026 | irrelevant | 0 | 0 | Review of dendrimers/boron clusters for BNCT; no somatorelin PK parameters reported. |
| popPK | Lucas_2012 | irrelevant | 0 | 0 | The paper studies the pharmacodynamic effects of the GHRH agonist JI-34 on pulmonary edema and does not report any pharmacokinetic parameters for somatorelin. |
| PGx | Lucas_2012 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effect of the GHRH agonist JI-34 on lung edema in a toxicological model, not the pharmacokinetics/pharmacodynamics of somatorelin (GHRH) or any gene variant. |
| popPK | Madan_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paltusotine, an SST2 receptor agonist, while somatorelin is only used as a GHRH-stimulating agent for pharmacodynamic assessment. |
| PGx | Madan_2022 | not_relevant | 0 | 0 | The study evaluates the PK and PD of paltusotine (not somatorelin) in healthy volunteers and does not report any genetic variation or pharmacogenomic effects. |
| popPK | Maity_2024 | irrelevant | 0 | 0 | The paper is a computational study on dendrimer cytotoxicity prediction and contains no data or parameters for the drug somatorelin. |
| PGx | Maity_2024 | not_relevant | 0 | 0 | The paper focuses on using machine learning to predict the cytotoxicity of dendrimers (nanomaterials) and does not discuss the drug somatorelin or any pharmacogenomic effects. |
| popPK | Makara_1995 | irrelevant | 0 | 0 | The study investigates the neuroendocrine mechanism of oxymetazoline on growth hormone release in rats and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Makara_1995 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of oxymetazoline on growth hormone release and does not involve somatorelin or pharmacogenomic effects. |
| popPK | Makimura_2012 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of tesamorelin (a GHRH analog) on body composition and cardiovascular markers, not the pharmacokinetic parameters of somatorelin. |
| PGx | Makimura_2012 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of tesamorelin in obese subjects but does not report pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mallo_1993 | irrelevant | 0 | 0 | The study investigates the secretion of Growth Hormone (GH) induced by GHRP-6, not the pharmacokinetics (clearance, volume, etc.) of somatorelin. |
| PGx | Mallo_1993 | not_relevant | 0 | 0 | The study investigates GHRP-6 and does not mention somatorelin or any gene variant affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Marostica_2013 | irrelevant | 0 | 0 | The study investigates GH secretion kinetics in response to GHRH and arginine in Prader-Willi syndrome, not the pharmacokinetics of the drug somatorelin. |
| PGx | Marostica_2013 | not_relevant | 0 | 0 | The paper studies endogenous growth hormone (GH) secretion in response to a diagnostic test (GHRH+Arg) in patients with Prader-Willi Syndrome, not the pharmacokinetics or pharmacodynamics of the specific drug somatorelin (mecasermin). |
| popPK | Martínez-Coria_2002 | irrelevant | 0 | 0 | The study investigates the differential secretion of chicken growth hormone variants in vitro using growth hormone-releasing hormone, which is not somatorelin. |
| PGx | Martínez-Coria_2002 | not_relevant | 0 | 0 | The paper studies endogenous chicken growth hormone variants and their secretion, not the pharmacokinetics or pharmacodynamics of the drug somatorelin. |
| popPK | Massoud_1996 | irrelevant | 0 | 0 | The paper is a dose-response study for hexarelin, not somatorelin, and reports hormone levels rather than PK parameters. |
| PGx | Massoud_1996 | not_relevant | 0 | 0 | The paper describes the dose-response of hexarelin in healthy males and does not mention somatorelin or any pharmacogenomic analysis. |
| popPK | Matteri_1994 | irrelevant | 0 | 0 | The study investigates the secretion of pituitary hormones (GH, PRL, TSH) in pigs and does not involve the drug somatorelin or its pharmacokinetics. |
| PGx | Matteri_1994 | not_relevant | 0 | 0 | The paper examines the effect of thermal environment on pituitary function (GH, PRL, TSH) in pigs, not pharmacogenomics of somatorelin. |
| popPK | McNatty_1994 | irrelevant | 0 | 0 | The study investigates pituitary hormone responses (FSH, LH, TSH, GH) to releasing hormones in sheep, not the pharmacokinetics of somatorelin. |
| PGx | McNatty_1994 | not_relevant | 0 | 0 | The study examines the effect of a gene on endogenous hormone release in response to exogenous stimulants, not the PK or PD of a specific drug (somatorelin). |
| popPK | Mohammed_2026 | irrelevant | 0 | 0 | The paper describes the synthesis of a fluorescent probe for the detection of moxifloxacin and does not contain any pharmacokinetic data for somatorelin. |
| PGx | Mohammed_2026 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting moxifloxacin, not somatorelin, and does not involve pharmacogenomics. |
| popPK | Montero_1998 | irrelevant | 0 | 0 | The paper studies PACAP in eels, not somatorelin, and contains no pharmacokinetic parameters. |
| PGx | Montero_1998 | not_relevant | 0 | 0 | The paper studies PACAP in eels and does not involve somatorelin or any human pharmacogenomic analysis. |
| popPK | Monteserin-Garcia_2013 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of Sirt1 and CREB on growth hormone synthesis, not the pharmacokinetics of somatorelin. |
| PGx | Monteserin-Garcia_2013 | not_relevant | 0 | 0 | The paper investigates the molecular regulation of endogenous growth hormone synthesis by Sirt1 and resveratrol, not the pharmacogenomics of the drug somatorelin. |
| popPK | Mullis_2011 | irrelevant | 0 | 0 | This is a genetics and pharmacogenetics review discussing GHRH and GH receptors, with no pharmacokinetic data for somatorelin. |
| PGx | Mullis_2011 | not_relevant | 0 | 0 | The paper reviews genetics of the GH axis but does not report pharmacogenomic effects on the PK/PD parameters of somatorelin. |
| popPK | Nieves-Rivera_1993 | irrelevant | 0 | 0 | The study investigates growth hormone (GH) secretion and metabolism in diabetic rats, not the pharmacokinetics of somatorelin. |
| PGx | Nieves-Rivera_1993 | not_relevant | 0 | 0 | The paper studies growth hormone secretion in diabetic rats and does not involve the drug somatorelin or any pharmacogenomic analysis. |
| popPK | Plachká_2024 | irrelevant | 0 | 0 | This is an SFC retention/ANN cheminformatics study with no somatorelin PK parameters; no numeric disposition values present. |
| popPK | Pucca_2025 | irrelevant | 0 | 0 | Review of anuran antimicrobial toxins; no somatorelin PK parameters or numeric disposition values present. |
| popPK | Pérez-Ibave_2014 | irrelevant | 0 | 0 | The paper is a review of extrapituitary growth hormone synthesis in humans and does not contain pharmacokinetic data for somatorelin. |
| PGx | Pérez-Ibave_2014 | not_relevant | 0 | 0 | The paper is a review on extrapituitary growth hormone synthesis and does not report pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Raun_1998 | irrelevant | 0 | 0 | The study concerns the drug ipamorelin, not somatorelin, and reports pharmacodynamic (GH release) parameters rather than pharmacokinetic parameters for the target drug. |
| PGx | Raun_1998 | not_relevant | 0 | 0 | The paper describes the general pharmacology of ipamorelin in animals, with no mention of pharmacogenomics, genetic variants, or the specific drug somatorelin. |
| popPK | Recinella_2017 | irrelevant | 0 | 0 | The study investigates the effects of ghrelin on feeding behavior in mice and does not report any pharmacokinetic parameters for somatorelin. |
| PGx | Recinella_2017 | not_relevant | 0 | 0 | The study investigates ghrelin and GHRH, not somatorelin, so it does not report pharmacogenomic effects on a somatorelin PK/PD parameter. |
| popPK | Rubinfeld_2004 | irrelevant | 0 | 0 | The paper is an in vitro study on ghrelin analogs stimulating GH release, not a pharmacokinetic study of somatorelin. |
| PGx | Rubinfeld_2004 | not_relevant | 0 | 0 | The paper studies ghrelin analogs and their effects on growth hormone secretion, not the drug somatorelin, and does not report any pharmacogenomic effects. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | The paper is a review on chitosan hydrogels for drug delivery and does not contain pharmacokinetic data for somatorelin. |
| PGx | Salamat_2026 | not_relevant | 0 | 0 | The paper is a review of chitosan-based hydrogels for drug delivery and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of somatorelin. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | This is a synthesis/antitubercular activity study of pyrrole-fused pyrimidine derivatives; somatorelin is not mentioned and no PK parameters exist. |
| popPK | Spoudeas_1994 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic response of growth hormone (GH) to GHRH analogues, not the pharmacokinetic parameters (CL, V, ka) of somatorelin. |
| PGx | Spoudeas_1994 | not_relevant | 0 | 0 | The study investigates the dose-response pharmacodynamics of GHRH analogues in a healthy cohort without assessing any genetic variants, and the drug somatorelin is not mentioned. |
| popPK | Sturaro_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry/pharmacodynamics study of NOP receptor agonist peptides (N/OFQ analogues), not somatorelin, and no PK disposition parameters are reported. |
| popPK | Teichman_2006 | irrelevant | 0 | 0 | The study investigates CJC-1295 (a GHRH analog), not somatorelin (GHRH-1-29), which is a different drug. |
| PGx | Teichman_2006 | not_relevant | 0 | 0 | The paper reports standard PK/PD parameters for CJC-1295 in healthy adults but contains no information regarding somatorelin or any pharmacogenomic effects (gene variants/genotypes). |
| popPK | Tena-Sempere_1996 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of growth hormone secretion signaling pathways in rats and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Tena-Sempere_1996 | not_relevant | 0 | 0 | The paper does not involve the drug somatorelin, but instead studies the effect of GHRH on growth hormone release in orchidectomized rats. |
| popPK | Teng_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacology of AZ3451 (a PAR2 antagonist) and does not mention or study the drug somatorelin. |
| PGx | Teng_2025 | not_relevant | 0 | 0 | The paper investigates the delivery and mechanism of a PAR2 antagonist (AZ3451) for pain and does not mention the drug somatorelin or any pharmacogenomic analysis. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of action of candesartan cilexetil on Staphylococcus aureus, not the pharmacokinetics of somatorelin. |
| PGx | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of candesartan cilexetil against MRSA, not the pharmacogenomics of somatorelin. |
| popPK | Torsello_1990 | irrelevant | 0 | 0 | The study investigates the mechanism of galanin on growth hormone release in rat pituitary cells and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Torsello_1990 | not_relevant | 0 | 0 | The paper studies the effect of galanin on growth hormone release in rats and does not mention somatorelin or any human pharmacogenomic variant. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | Narrative review on oral peptide delivery technologies; somatorelin is not the subject drug and no PK parameter values are reported. |
| popPK | Vishnoi_2026 | irrelevant | 0 | 0 | Computational peptide design study of GLP-1/GIP/glucagon receptor agonists; no somatorelin PK parameters reported. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper is about computational drug design for myeloid cancer (HDAC6/AKT2 inhibitors) and contains no pharmacokinetic data for somatorelin. |
| PGx | Waitman_2025 | not_relevant | 0 | 0 | The paper describes the discovery of novel HDAC6/AKT2 inhibitors for myeloid cancer and contains no information regarding the drug somatorelin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a Mendelian randomization study on lipidomes, TRAIL, and breast cancer, containing no data for somatorelin. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper studies the causal relationship between lipidomes and breast cancer using Mendelian randomization and does not mention the drug somatorelin or its PK/PD parameters. |
| popPK | Webb_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of human growth hormone (hGH) isoforms, not somatorelin. |
| PGx | Webb_2010 | not_relevant | 0 | 0 | The paper studies the effects of GHRH stimulation on endogenous growth hormone isoforms, not the pharmacokinetics or pharmacodynamics of a specific exogenous drug like somatorelin modified by genetic variants. |
| popPK | Wehrenberg_1992 | irrelevant | 0 | 0 | The study investigates the mechanism of pyridostigmine on growth hormone release in rats and does not report pharmacokinetic parameters for somatorelin. |
| PGx | Wehrenberg_1992 | not_relevant | 0 | 0 | The study investigates the mechanism of pyridostigmine on growth hormone release and does not report any pharmacogenomic effects on the PK or PD parameters of somatorelin. |
| popPK | Williams_1988 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of somatostatin analogs on hormone secretion, not the pharmacokinetics of somatorelin. |
| PGx | Williams_1988 | not_relevant | 0 | 0 | The paper reports on the pharmacodynamics of somatostatin analogs but does not mention somatorelin or any gene variants. |
| popPK | Witkowski_2024 | irrelevant | 0 | 0 | The paper investigates the effects of the sweetener erythritol on platelet reactivity and does not involve somatorelin. |
| PGx | Witkowski_2024 | not_relevant | 0 | 0 | The study assesses the pharmacodynamic effects of the sweetener erythritol on platelet reactivity and does not involve the drug somatorelin or pharmacogenomic interactions. |
| popPK | Wu_2008 | irrelevant | 0 | 0 | The paper focuses on the cloning and characterization of peptide receptors in zebrafish, not the pharmacokinetics of somatorelin. |
| PGx | Wu_2008 | not_relevant | 0 | 0 | The paper describes receptor cloning and ligand binding in zebrafish and does not report pharmacogenomic effects on PK/PD parameters for somatorelin. |
| popPK | Xiao_2026 | irrelevant | 0 | 0 | The paper describes a computational drug discovery study for tuberculosis and does not contain any pharmacokinetic data for somatorelin. |
| PGx | Xiao_2026 | not_relevant | 0 | 0 | The paper is a computational study on tuberculosis drug resistance and virtual screening, not a pharmacogenomic study of somatorelin. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on GHRH-R splice variants and MIA-602 in esophageal cancer, containing no pharmacokinetic data for somatorelin. |
| PGx | Xiong_2020 | not_relevant | 0 | 0 | The paper studies a cancer therapeutic (MIA-602), not somatorelin, and focuses on tumor progression/glycolysis rather than a PK/PD parameter of somatorelin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsomatorelin%5D&body=Drug%3A%20somatorelin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_somatorelin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
