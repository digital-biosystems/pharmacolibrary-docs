<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium folinate&quot;}]"></div>

# sodium folinate

- **generic name:** sodium folinate
- **ATC codes:** `V03AF06`
- **DrugBank:** [DB00650](https://go.drugbank.com/drugs/DB00650) · **PubChem:** [CID 6006](https://pubchem.ncbi.nlm.nih.gov/compound/6006)
- **molar mass:** 473.446 g/mol (C20H23N7O7) — DrugBank
- **groups:** approved, investigational

## About

Sodium folinate is a detoxifying agent used in antineoplastic treatment to manage adverse effects of chemotherapy. It is administered intravenously, intramuscularly, or orally as injections or tablets, and is well absorbed by mouth. It is an approved medication widely used in clinical settings for cancer care support.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27155238](https://www.wikidata.org/wiki/Q27155238), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Lam_2022_Clinical_outcome_measures_depression_schizophrenia_autism_bipolar_ADHD](drugs/drug_sodium_folinate/pd_Lam_2022_Clinical_outcome_measures_depression_schizophrenia_.md) | Clinical outcome measures (depression, schizophrenia, autism, bipolar, ADHD) · stimulation effect | — | Lam NSK et al., The potential use of folate and its der…, Biomedicine & pharmacothera… (2022) | [10.1016/j.biopha.2021.112541](https://doi.org/10.1016/j.biopha.2021.112541) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:08 | 0:04 | 0/0/0 | 0/1/0 | 0/0/0 | 5,545/185 | einfracz / qwen3.8-27b | 51 | 3/48 | 51/0 | 0 |

## Coverage

- **PubMed hits:** 702 matched, 151 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abu_2017 | irrelevant | 0 | 0 | The paper focuses on the discovery of inhibitors for Mycobacterium tuberculosis thymidylate synthase X and does not study the pharmacokinetics of sodium_folinate. |
| PGx | Abu_2017 | not_relevant | 0 | 0 | The paper discusses the discovery of a Mycobacterium tuberculosis thymidylate synthase X inhibitor, not sodium_folinate, and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Akiyama_2012 | irrelevant | 0 | 0 | The study is a pharmacogenomics analysis of FOLFIRI efficacy, not a pharmacokinetic study providing quantitative disposition parameters for sodium folinate. |
| PGx | Alfaro_2022 | not_relevant | 2 | 3 | Narrative review mentions MTHFR/TS/DPYD variants affecting 5-FU/capecitabine efficacy and safety, but no PK/PD parameter changes for sodium folinate (leucovorin) itself are reported. |
| popPK | Alum_2026 | irrelevant | 0 | 0 | This is a rat neuroprotection/docking study of Jimson weed vs methotrexate; folinic acid (leucovorin) appears only as a docking comparator, with no PK parameters for sodium folinate. |
| popPK | Antczak_2016 | irrelevant | 0 | 0 | The paper is a review of chemotherapeutics for toxoplasmosis and does not contain any population pharmacokinetic parameter data for sodium folinate. |
| PGx | Antczak_2016 | not_relevant | 0 | 0 | The paper is a review on treating toxoplasmosis and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium folinate. |
| popPK | Assenat_2006 | irrelevant | 0 | 0 | The paper is a clinical review of irinotecan for colorectal cancer and does not report pharmacokinetic parameters for sodium folinate. |
| PGx | Assenat_2006 | not_relevant | 2 | 0 | The paper discusses irinotecan and its combinations with folinic acid, mentioning pharmacogenomics only as a promising future field, without reporting any specific gene variant effects on PK/PD parameters for sodium_folinate. |
| popPK | Aumente_2006 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not sodium folinate (leucovorin), which is only mentioned as a rescue agent. |
| PGx | Aumente_2006 | not_relevant | 0 | 0 | The paper models the pharmacokinetics of methotrexate, not sodium_folinate, and analyzes conventional covariates (age, weight) rather than gene variants. |
| popPK | Avallone_2007 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring synergistic antitumor effects (IC50) in cancer cell lines, not a pharmacokinetic study reporting disposition parameters for sodium folinate. |
| PGx | Avallone_2007 | not_relevant | 0 | 0 | The paper studies the synergistic antitumor effect of raltitrexed and 5-fluorouracil plus folinic acid in cell lines, but does not report a pharmacogenomic effect on the PK/PD of sodium_folinate. |
| popPK | Bagarry-Liégey_1996 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate, with folinic acid (sodium folinate) mentioned only as a rescue agent and not as the subject of PK analysis. |
| PGx | Bagarry-Liégey_1996 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic dose adjustment for methotrexate but contains no information regarding pharmacogenomics or genetic variants affecting sodium_folinate. |
| popPK | Bamgboye_2026 | irrelevant | 0 | 0 | This is a population PK study of topiramate, not sodium folinate; no sodium folinate parameters are reported. |
| popPK | Bandín-Vilar_2022 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for linezolid, not sodium folinate. |
| PGx | Bandín-Vilar_2022 | not_relevant | 0 | 0 | The paper reviews population pharmacokinetics of linezolid, not sodium folinate, and does not report pharmacogenomic effects. |
| popPK | Bartkowiak_2026 | irrelevant | 0 | 0 | Transcriptomic drug-repurposing study in zebrafish with no PK parameters for sodium folinate; the drug is not even mentioned. |
| popPK | Bedon_2022 | irrelevant | 0 | 0 | The study focuses on machine learning for toxicity prediction of irinotecan (FOLFIRI regimen) and mentions irinotecan pharmacokinetics, but does not report quantitative disposition parameters for sodium_folinate (folinic acid) as the subject drug. |
| PGx | Bedon_2022 | not_relevant | 0 | 0 | The paper focuses on machine learning predictors for irinotecan toxicity and does not report pharmacogenomic effects on the PK/PD of sodium folinate. |
| popPK | Bendell_2020 | irrelevant | 0 | 0 | This is a clinical efficacy study for vanucizumab in cancer patients; sodium folinate (leucovorin) is only a component of the mFOLFOX6 chemotherapy regimen and its pharmacokinetic parameters are not reported as the subject of study. |
| PGx | Bendell_2020 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of vanucizumab versus bevacizumab and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium folinate. |
| popPK | Blau_2003 | irrelevant | 0 | 0 | The paper reports cerebrospinal fluid concentrations of pterins and folates in patients with Aicardi-Goutières syndrome, not pharmacokinetic parameters (clearance, volume, etc.) for sodium folinate. |
| PGx | Blau_2003 | not_relevant | 0 | 0 | The paper describes a biochemical phenotype (CSF pterin/folate levels) and the clinical response to folinic acid in Aicardi-Goutieres syndrome, but it does not report a pharmacogenomic association between a specific genetic variant and a pharmacokinetic or pharmacodynamic parameter of sodium folinate. |
| popPK | Borjkhani_2026 | irrelevant | 0 | 0 | Computational Hodgkin-Huxley model of magnesium neuroprotection in retinal ganglion cells; no pharmacokinetic parameters for sodium folinate anywhere. |
| popPK | Bressolle_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil (5-FU); sodium folinate (leucovorin) was only a co-administered agent and no PK parameters for it are reported. |
| PGx | Bressolle_1999 | not_relevant | 0 | 0 | The paper describes the population pharmacokinetics of 5-fluorouracil influenced by circadian rhythms and demographics (sex, age, weight), but it does not report any pharmacogenomic effects (gene variants) on the PK parameters of sodium_folinate or 5-FU. |
| popPK | Camara_2012 | irrelevant | 0 | 0 | The paper discusses the inhibition of folate biosynthesis in plants and parasites by rubreserine and does not contain any pharmacokinetic data for sodium_folinate. |
| PGx | Camara_2012 | not_relevant | 0 | 0 | The paper reports on the pharmacodynamics of a natural product (rubreserine) in plants and parasites, not the pharmacokinetics or pharmacodynamics of the clinical drug sodium_folinate in a human population stratified by genotype. |
| popPK | Casale_2004 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil (5-FU) and its metabolites, using folinic acid (sodium folinate) only as a co-administered adjuvant, not as the subject drug. |
| PGx | Casale_2004 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of 5-fluorouracil and its metabolites in colon cancer patients and does not report any pharmacogenomic effects (gene variants) or analyze the specific pharmacokinetic or pharmacodynamic parameters of sodium folinate. |
| popPK | Chang_2013 | irrelevant | 0 | 0 | The study assesses diagnostic assay concordance for KRAS genotyping in colorectal cancer patients, not the pharmacokinetics of sodium folinate. |
| PGx | Chang_2013 | not_relevant | 0 | 0 | The paper assesses the concordance of two KRAS genotyping assays for predicting cetuximab response, not the pharmacogenomic effect of a gene variant on the PK/PD of sodium_folinate (leucovorin). |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | Hypothesis/review paper on treatment-resistant depression with no sodium_folinate PK data or parameters; sodium_folinate not even mentioned. |
| popPK | Cheung_2026_2 | irrelevant | 0 | 0 | Case series of dextromethorphan/fluoxetine/bupropion for PTSD; no sodium folinate and no PK parameters reported. |
| popPK | Clarke_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of raltitrexed, not sodium folinate (which is only mentioned as a comparator or rescue agent). |
| PGx | Clarke_2000 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of raltitrexed and mentions folinic acid as a rescue agent, but does not report any pharmacokinetic or pharmacodynamic parameters of sodium_folinate itself, nor does it report any pharmacogenomic effects on sodium_folinate. |
| popPK | Climente-Martí_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil, and while sodium folinate (leucovorin) is co-administered as a co-drug, no pharmacokinetic parameters for sodium folinate itself are reported. |
| PGx | Climente-Martí_2003 | not_relevant | 0 | 0 | The paper focuses on 5-fluorouracil PK and does not report a pharmacogenomic effect on sodium_folinate PK or PD. |
| popPK | Cohen_2025 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| PGx | Cohen_2025 | not_relevant | 0 | 0 | The paper discusses methotrexate PK and toxicity, not sodium_folinate pharmacogenomics. |
| popPK | Cohn_2017 | irrelevant | 0 | 0 | This is an exposure–response study of ramucirumab; folinic acid (leucovorin) is only a co-administered FOLFIRI component, with no PK parameters for sodium folinate reported. |
| popPK | Comandone_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate (MTX), with folinic acid (sodium folinate) used only as a rescue agent and not the subject of PK parameter estimation. |
| PGx | Comandone_2005 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic covariates (height, weight, etc.) for methotrexate, but does not report any gene variants, genotypes, or phenotypes that affect the PK/PD parameters of sodium_folinate. |
| popPK | Corghi_2002 | irrelevant | 0 | 0 | The study reports on homocysteine levels and folate supplementation effects, not the pharmacokinetic disposition parameters (CL, Vd, etc.) of sodium folinate. |
| PGx | Corghi_2002 | not_relevant | 0 | 0 | The paper investigates the effect of folinic acid supplementation on homocysteine levels, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium folinate itself. |
| popPK | Crom_1987 | irrelevant | 0 | 0 | The paper is a review discussing pharmacokinetics in children and mentions folinic acid only in the context of methotrexate rescue, without providing quantitative PK parameters for sodium_folinate itself. |
| PGx | Crom_1987 | not_relevant | 0 | 0 | The paper discusses pediatric pharmacokinetics of various anticancer drugs and mentions folinic acid rescue for methotrexate, but it does not report any genetic variant or pharmacogenomic effect on the PK/PD of sodium_folinate. |
| popPK | Dahan_2024 | irrelevant | 0 | 0 | The paper is a PKPD study of ketamine/norketamine with sodium nitroprusside; sodium folinate is not mentioned at all, and no disposition parameters for it appear. |
| popPK | Darwish_2025 | irrelevant | 0 | 0 | This is a population PK study of trofinetide, not sodium folinate; no sodium folinate parameters are present. |
| popPK | Delgado-Plasencia_2013 | irrelevant | 0 | 0 | The paper is a genetic association study analyzing the MTHFR C677T polymorphism in colorectal cancer patients and does not contain any pharmacokinetic data for sodium folinate. |
| PGx | Delgado-Plasencia_2013 | not_relevant | 2 | 5 | The paper reports an association between MTHFR genotype and clinical outcomes (survance/prognosis) of chemotherapy, but does not report specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, Emax) for sodium_folinate. |
| popPK | Dimitrakopoulou-Strauss_2004 | irrelevant | 0 | 0 | The study focuses on 18F-FDG PET kinetics for prognostic assessment in cancer patients, not the pharmacokinetic parameters of sodium folinate. |
| PGx | Dimitrakopoulou-Strauss_2004 | not_relevant | 0 | 0 | The paper evaluates PET imaging kinetics for prognostic purposes in colorectal cancer patients and does not investigate the impact of gene variants on the pharmacokinetics or pharmacodynamics of sodium_folinate. |
| popPK | Donelli_1995 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate, not sodium folinate (leucovorin), which is only mentioned as the rescue agent. |
| PGx | Donelli_1995 | not_relevant | 0 | 0 | The study analyzes age-based pharmacokinetic changes in methotrexate, not the pharmacogenomics of sodium_folinate. |
| popPK | Duldulao_2013 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study on toxicity in rectal cancer patients receiving 5-FU and folinic acid, with no pharmacokinetic parameters reported for sodium folinate. |
| PGx | Duldulao_2013 | not_relevant | 0 | 0 | The study focuses on clinical toxicity (adverse events) rather than pharmacokinetic (PK) or pharmacodynamic (PD) parameters, and the target drug is 5-FU, not sodium_folinate. |
| popPK | Dupuis_2008 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of methotrexate, not sodium folinate (leucovorin), which is only mentioned as a rescue agent. |
| PGx | Dupuis_2008 | not_relevant | 0 | 0 | The paper reports covariates (creatinine clearance, ALT) influencing MTX clearance and validates a sampling strategy, but it does not report pharmacogenomic variants or effects for sodium_folinate. |
| popPK | Eh_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of liposome encapsulation efficiency and cytotoxicity (IC50) for folinic acid, not a pharmacokinetic study of sodium folinate. |
| PGx | Eh_2020 | not_relevant | 0 | 0 | The paper investigates liposomal drug delivery and in vitro cytotoxicity, containing no genetic data or pharmacogenomic analysis of sodium folinate. |
| PGx | Elens_2021 | not_relevant | 2 | 3 | The paper reports MTHFR1298 genotype effects on methotrexate-induced CSF Tau/pTau toxicity biomarkers, not on any PK/PD parameter of folinic acid (sodium folinate) itself; folinic acid supplementation is only mentioned as an intervention without genotype-specific folinate PK/PD outcomes. |
| popPK | Etienne_2004 | irrelevant | 0 | 0 | The study analyzes MTHFR gene polymorphisms and treatment response to fluorouracil and folinic acid, containing no pharmacokinetic data or parameters for sodium folinate. |
| PGx | Etienne_2004 | not_relevant | 3 | 10 | The paper reports the effect of MTHFR genotype on clinical response to 5-FU, not on the PK/PD parameters of sodium_folinate itself. |
| PGx | Etienne_2004_2 | not_relevant | 2 | 5 | The paper reports gene polymorphism effects on 5-fluorouracil sensitivity (IC50), not on any PK/PD parameter of sodium folinate itself; folinic acid is only a modulating co-treatment. |
| popPK | Fava_2009 | irrelevant | 0 | 0 | The paper is a review of folate efficacy in depression and contains no pharmacokinetic parameter estimates for sodium folinate. |
| PGx | Fava_2009 | not_relevant | 5 | 2 | The text discusses folate formulations (including folinic acid) and mentions 'genetic polymorphism' but lacks specific pharmacokinetic or pharmacodynamic data or fitted effect sizes. |
| popPK | Fimbo_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ivermectin, not sodium_folinate. |
| PGx | Fimbo_2023 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of ivermectin, not sodium_folinate, and does not report pharmacogenomic effects for the target drug. |
| popPK | Frye_2017 | irrelevant | 0 | 0 | The paper is a review of folate metabolism and biomarkers in autism, containing no quantitative pharmacokinetic parameters for sodium folinate. |
| PGx | Frye_2017 | not_relevant | 2 | 2 | The paper discusses folate metabolism abnormalities and folinic acid as a treatment in autism but does not report pharmacogenomic effects on the PK or PD parameters of sodium_folinate. |
| popPK | García-Carbonero_2017 | irrelevant | 0 | 0 | This is a Phase II efficacy trial for parsatuzumab; while sodium folinate (folinic acid) is part of the chemotherapy regimen, no specific pharmacokinetic parameters (CL, V, etc.) for sodium folinate are reported or extractable. |
| PGx | García-Carbonero_2017 | not_relevant | 0 | 0 | The paper does not report any pharmacogenomic effects (gene variant/genotype) on PK/PD parameters; it is a clinical trial evaluating the efficacy of an anti-EGFL7 antibody. |
| popPK | Garnett_1985 | irrelevant | 0 | 0 | The paper studies the mechanism of action of a methotrexate-drug conjugate in vitro and does not report pharmacokinetic parameters for sodium folinate. |
| PGx | Garnett_1985 | not_relevant | 0 | 0 | The paper studies the mechanism of action of a methotrexate-antibody conjugate in cancer cells and does not report any pharmacogenomic effects on sodium folinate PK/PD. |
| popPK | Gilbar_2001 | irrelevant | 0 | 0 | The paper is a case report on a phenytoin-fluorouracil interaction and does not report any pharmacokinetic parameters for sodium folinate. |
| PGx | Gilbar_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (phenytoin-fluorouracil) affecting phenytoin PK, not a pharmacogenomic effect on sodium folinate (leucovorin). |
| popPK | Harding_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BI 905711 (a bispecific antibody) and uses leucovorin (sodium folinate) only as a co-administered chemotherapy agent, providing no PK parameters for sodium folinate itself. |
| PGx | Harding_2026 | not_relevant | 0 | 0 | The paper describes a phase 1 study of a bispecific antibody and does not report pharmacogenomic effects on the PK or PD of sodium folinate. |
| popPK | Hauser_2001 | irrelevant | 0 | 0 | The paper reports efficacy endpoints (homocysteine levels) rather than pharmacokinetic parameters (CL, V, half-life) for sodium folinate. |
| popPK | Hecht_2021 | irrelevant | 0 | 0 | The study is a clinical trial focused on the efficacy of a combination therapy involving sodium_folinate (folinic acid), but it does not report any pharmacokinetic parameters or models for sodium_folinate itself. |
| PGx | Hecht_2021 | not_relevant | 0 | 0 | The paper is a Phase III clinical trial evaluating the efficacy and safety of adding pegilodecakin to FOLFOX; it does not report pharmacogenomic analysis of sodium folinate. |
| popPK | Helsby_2010 | irrelevant | 0 | 0 | The paper is a case report on CYP2C19 metabolizer status changes following 5-fluorouracil therapy, with no pharmacokinetic parameters reported for sodium folinate. |
| PGx | Helsby_2010 | not_relevant | 0 | 0 | The paper reports that 5-fluorouracil alters CYP2C19 activity, not that a genetic variant affects the pharmacokinetics or pharmacodynamics of sodium folinate. |
| popPK | Hovda_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methanol and formate, not for sodium_folinate (leucovorin), which is not the subject drug. |
| PGx | Hovda_2005 | not_relevant | 0 | 0 | The paper reports PK parameters for methanol and formate (not sodium folinate) and does not assess any genetic variants or pharmacogenomic effects. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on 5-fluorouracil resistance in colorectal cancer cells and does not contain any pharmacokinetic data for sodium folinate. |
| PGx | Hu_2021 | not_relevant | 1 | 10 | The paper investigates mechanisms of 5-FU resistance in colorectal cancer cells and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium folinate. |
| popPK | Inoue_2014 | irrelevant | 0 | 0 | The paper investigates pharmacogenomic markers for cetuximab and FOLFIRI efficacy and contains no pharmacokinetic parameters for sodium folinate. |
| PGx | Inoue_2014 | not_relevant | 0 | 0 | The study investigates pharmacogenomic predictors for cetuximab efficacy, not the pharmacokinetics or pharmacodynamics of sodium_folinate. |
| popPK | Jackman_1997 | irrelevant | 0 | 0 | The paper focuses on the cellular pharmacology and activity of ZD9331, a thymidylate synthase inhibitor, and does not study the pharmacokinetics of sodium folinate. |
| PGx | Jackman_1997 | not_relevant | 0 | 0 | The paper evaluates the cellular and in vivo pharmacology of ZD9331, a non-folate drug, rather than pharmacogenomic effects on sodium_folinate. |
| popPK | Jebabli_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, and folinic acid is only mentioned as an antidote/co-administered agent without providing PK parameters for sodium folinate. |
| PGx | Jebabli_2015 | not_relevant | 0 | 0 | The paper reports population PK for methotrexate, focusing on non-genetic covariates like age, sex, and creatinine clearance, and does not analyze pharmacogenomic effects on sodium folinate. |
| popPK | Johnstone_2019 | irrelevant | 0 | 0 | The paper describes a genetic disorder (PLPHP deficiency) and uses a zebrafish model, with no pharmacokinetic parameters reported for sodium folinate. |
| PGx | Johnstone_2019 | not_relevant | 0 | 0 | The paper describes PLPBP deficiency and epilepsy mechanisms, with no study of sodium_folinate pharmacokinetics or pharmacodynamics. |
| PGx | Kalaimani_2025 | not_relevant | 2 | 5 | The paper concerns folic acid supplementation and endogenous folate metabolite concentrations with MTHFR genotype; sodium folinate (folinic acid) is not administered as a drug, so no pharmacogenomic effect on its PK/PD parameters is reported. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | This is a cryo-EM structural biology study of NMDA receptors with no pharmacokinetic data for sodium folinate; the drug is not mentioned at all. |
| popPK | Kissel_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil (5-FU) and its catabolite, with folinic acid (sodium folinate) serving only as a biomodulator/comparator, and no PK parameters for sodium folinate itself are reported. |
| PGx | Kissel_1997 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic modeling of 5-FU and the clinical effect of folinic acid (sodium folinate) as a biomodulator, but it does not report any gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Kjersem_2014 | not_relevant | 3 | 5 | Reports FCGR2A/FCGR3A genotype associations with cetuximab response/survival, not a PK or PD parameter of folinic acid. |
| popPK | Klinov_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic enzyme kinetics analysis of folinic acid binding to phosphorylase, not a pharmacokinetic disposition study. |
| PGx | Klinov_1987 | not_relevant | 0 | 0 | The paper describes in vitro enzyme inhibition of muscle glycogen phosphorylase by folinic acid and other pterins, but does not report any pharmacogenomic effects (genotype/variant) on pharmacokinetic or pharmacodynamic parameters in humans or animal models. |
| popPK | Klinov_1988 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition assay in rabbit muscle and does not report any pharmacokinetic parameters for sodium folinate. |
| PGx | Klinov_1988 | not_relevant | 0 | 0 | The paper studies the inhibition of muscle glycogen phosphorylase b by folate derivatives and methotrexates in rabbit skeletal muscle, focusing on enzyme kinetics, and does not report pharmacogenomic effects on PK/PD parameters for sodium folinate. |
| popPK | Labriet_2019 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of survival outcomes and gene expression, reporting no quantitative pharmacokinetic parameters for sodium folinate. |
| PGx | Labriet_2019 | not_relevant | 0 | 0 | The paper reports associations between gene variants and overall survival (clinical outcome), not changes in pharmacokinetic or pharmacodynamic parameters of sodium folinate. |
| popPK | Lam_2022 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy for psychiatric disorders and does not report pharmacokinetic disposition parameters for sodium folinate. |
| PGx | Lam_2022 | not_relevant | 1 | 0 | The paper is a clinical systematic review evaluating the efficacy of folate supplements in psychiatric disorders and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Lambie_1985 | irrelevant | 0 | 0 | The paper is a review of folate metabolism and drug interactions, containing no pharmacokinetic parameter estimates for sodium_folinate. |
| PGx | Lambie_1985 | not_relevant | 0 | 0 | The text discusses general folate metabolism and the mechanism of folate antagonists, but does not report any pharmacogenomic studies or gene variant effects on the pharmacokinetics or pharmacodynamics of sodium folinate. |
| popPK | Lazar_2004 | irrelevant | 0 | 0 | The paper is a pharmacogenetic case report of 5-FU toxicity and does not report any pharmacokinetic parameters for sodium folinate. |
| PGx | Lazar_2004 | not_relevant | 0 | 0 | The paper reports on the toxicity of 5-fluorouracil due to a DPYD variant, but does not report pharmacogenomic effects on PK or PD parameters for sodium_folinate. |
| popPK | Leegwater_2025 | irrelevant | 0 | 0 | This is a population PK study of trimethoprim/sulfamethoxazole and its metabolite, not sodium folinate; no sodium folinate parameters appear. |
| popPK | Lehman_2002 | irrelevant | 0 | 0 | The paper is a review of thymidylate synthase inhibitors and does not report any pharmacokinetic parameters for sodium folinate. |
| PGx | Lehman_2002 | not_relevant | 0 | 0 | The paper is a general review of thymidylate synthase inhibitors and mentions pharmacogenetics only as a future direction for individualized therapy without reporting specific quantitative effects of genetic variants on PK/PD parameters for sodium_folinate. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a population PK study of polymyxin B, not sodium folinate; no sodium folinate parameters appear. |
| popPK | Lim_2005 | irrelevant | 0 | 0 | The paper is a clinical case series on methotrexate-induced pancytopenia and contains no pharmacokinetic modeling or quantitative disposition parameters for sodium folinate. |
| PGx | Lim_2005 | not_relevant | 0 | 0 | The paper reports a case series of methotrexate-induced pancytopenia and risk factors, but does not analyze any genetic variants or genotypes affecting the pharmacokinetics or pharmacodynamics of sodium folinate. |
| popPK | Lévi_2000 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of oxaliplatin, and sodium folinate is only mentioned as a co-administered agent for which no PK parameters are reported. |
| PGx | Lévi_2000 | not_relevant | 0 | 0 | The paper discusses oxaliplatin pharmacokinetics and chronopharmacology, not sodium_folinate pharmacogenomics. |
| popPK | Machover_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pyridoxamine and in-vitro cytotoxicity of 5-Fluorouracil, with no quantitative pharmacokinetic parameters reported for sodium folinate (folinic acid). |
| PGx | Machover_2018 | not_relevant | 0 | 0 | The study reports drug-drug interaction and biochemical mechanism, not the effect of a gene variant on the PK or PD of sodium folinate. |
| popPK | McLeod_1998 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions in oncology and does not report quantitative pharmacokinetic parameters for sodium_folinate (or folinic acid) as the subject drug. |
| PGx | McLeod_1998 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (e.g., 5-FU and folinic acid) but does not report any pharmacogenomic effects (gene variants) on sodium folinate PK/PD parameters. |
| popPK | Meshkin_2007 | irrelevant | 0 | 0 | The paper is a review on folate nutrigenetics and does not report quantitative pharmacokinetic parameters for sodium folinate. |
| PGx | Meshkin_2007 | not_relevant | 2 | 3 | The paper is a review on folate nutrigenetics and metabolism, focusing on dietary intake and general pharmacogenetics of anti-folates, without reporting specific quantitative PK/PD data for sodium_folinate. |
| PGx | Misselbeck_2019 | not_relevant | 2 | 2 | Computational modeling of folate metabolism with MTHFR polymorphism effects on endogenous folate pools, not on PK/PD parameters of sodium folinate (leucovorin) administration. |
| popPK | Mohelnikova-Duchonova_2014 | irrelevant | 0 | 0 | The paper is a pharmacogenetics review discussing drug response and biomarkers, containing no quantitative pharmacokinetic parameters for sodium folinate. |
| PGx | Mohelnikova-Duchonova_2014 | not_relevant | 0 | 0 | This is a general review discussing 5-fluorouracil and other drugs, and it does not report pharmacogenomic effects on the PK/PD of sodium_folinate. |
| popPK | Monjanel-Mouterde_2002 | irrelevant | 1 | 0 | The study models the pharmacokinetics of methotrexate (MTX), while sodium folinate (folinic acid) is only mentioned as a rescue agent, and no PK parameters for sodium folinate are reported. |
| PGx | Monjanel-Mouterde_2002 | not_relevant | 0 | 0 | The paper focuses on a Bayesian pharmacokinetic model for methotrexate to guide dosing and does not report any pharmacogenomic effects or gene variants on sodium_folinate. |
| popPK | Moreno-Gomez_2026 | irrelevant | 0 | 0 | The paper studies the off-target effects of DREADD ligands (CNO, C21, DCZ) in mice and does not report pharmacokinetic parameters for sodium_folinate. |
| PGx | Moreno-Gomez_2026 | not_relevant | 0 | 0 | The paper investigates the off-target effects of DREADD ligands on anesthesia emergence in mice and does not study sodium folinate or pharmacogenomics. |
| popPK | Murphy_2012 | irrelevant | 0 | 0 | The study is a pharmacogenomic analysis of clinical outcomes (survival, GVHD) and genetic polymorphisms, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life for sodium folinate. |
| PGx | Murphy_2012 | not_relevant | 2 | 1 | The paper reports associations between MTHFR genotypes and clinical outcomes (survival, GVHD) in the context of Methotrexate treatment, and does not report PK or PD parameters (e.g., AUC, $C_{max}$, drug concentration) for sodium folinate. |
| popPK | Nassim_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil, while sodium folinate is only a co-administered component of the chemotherapy regimen and not the subject drug. |
| PGx | Nassim_1998 | not_relevant | 0 | 0 | The paper investigates the effect of N-(phosphonacetyl)-L-aspartate (PALA) on 5-FU pharmacokinetics, not the pharmacogenomic effect of a gene variant on sodium_folinate. |
| popPK | Nduati_2008 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamics study on folate derivatives and antifolate activity in malaria parasites, containing no pharmacokinetic parameters for sodium folinate. |
| PGx | Nduati_2008 | not_relevant | 0 | 0 | The paper studies drug-drug interactions in P. falciparum, not human pharmacogenomics for sodium_folinate. |
| popPK | Ohdo_2007 | irrelevant | 0 | 0 | The paper is a review on chronopharmacology and circadian rhythms, where folinic acid is only mentioned as a co-administered drug in a clinical trial context, and no pharmacokinetic parameters for it are reported. |
| PGx | Ohdo_2007 | not_relevant | 0 | 0 | The paper focuses on chronopharmacology (timing of administration) rather than pharmacogenomics (genetic variation) for sodium folinate. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | This is a population PK model of methotrexate; leucovorin (folinic acid) is only mentioned as rescue therapy, with no PK parameters for sodium folinate itself. |
| popPK | Oláh_2026 | irrelevant | 0 | 0 | This is a neuroscience study of GluN2D-NMDAR modulators and ketamine in mice; sodium folinate is not mentioned and no PK parameters for it appear. |
| PGx | Oosterom_2019 | not_relevant | 3 | 5 | MTHFR c.677C&gt;T genotype was tested but showed no significant effect on folate levels, and folate vitamers are not PK/PD parameters of leucovorin itself. |
| popPK | Pannu_2019 | irrelevant | 0 | 0 | The paper is a review of methotrexate overdose management and does not provide quantitative pharmacokinetic parameters for sodium folinate. |
| PGx | Pannu_2019 | not_relevant | 0 | 0 | The paper reviews methotrexate overdose and does not report pharmacogenomic effects on the PK/PD of sodium_folinate. |
| popPK | Passero_2016 | irrelevant | 0 | 0 | The paper is a review of irinotecan pharmacokinetics, and sodium_folinate (leucovorin) is mentioned only as a co-administered agent without any quantitative disposition parameters. |
| PGx | Passero_2016 | not_relevant | 1 | 0 | The text reviews irinotecan and mentions folinic acid only as a combination therapy component, without detailing pharmacogenomic effects on its specific PK/PD parameters. |
| popPK | Petric_2023 | irrelevant | 0 | 0 | The paper models vinpocetine and its metabolite apovincaminic acid, not sodium folinate; no sodium folinate parameters appear. |
| popPK | Plard_2007 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics, not sodium_folinate. |
| PGx | Plard_2007 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic parameters of methotrexate, not sodium_folinate. |
| popPK | Radukic_2026 | irrelevant | 0 | 0 | This is a neurobiology study of alprazolam withdrawal in rats with no pharmacokinetic parameters for sodium folinate (which does not appear at all). |
| popPK | Rafsanjani_2026 | irrelevant | 0 | 0 | This is a deep-learning spatial imaging study of PDX colorectal cancer tissue; folinic acid is only a co-administered FOLFOX component with no PK parameters reported. |
| popPK | Rahman_2017 | irrelevant | 0 | 0 | The paper is a review of nanoliposomal irinotecan for pancreatic cancer and does not report quantitative PK parameters for sodium folinate. |
| PGx | Rahman_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics (UGT1A1) specifically for irinotecan, not for sodium folinate (folinic acid). |
| PGx | Ray_2022 | not_relevant | 2 | 3 | Folinic acid is given empirically to replete CSF 5-MTHF in BH4 deficiencies, but no gene-variant effect on a PK/PD parameter of folinic acid is quantified. |
| popPK | Rodan_2018 | irrelevant | 0 | 0 | The paper is a clinical case report on a neurometabolic disorder (MTHFS deficiency) and reports no pharmacokinetic parameters (CL, V, ka, etc.) for sodium folinate. |
| PGx | Rodan_2018 | not_relevant | 0 | 0 | The paper reports on a genetic enzyme deficiency (MTHFS) and its impact on endogenous folate metabolism, not on the pharmacokinetics or pharmacodynamics of the drug sodium folinate. |
| popPK | Ruzzo_2007 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of clinical outcomes and toxicity in cancer patients, reporting no pharmacokinetic parameters for sodium folinate. |
| PGx | Ruzzo_2007 | not_relevant | 0 | 0 | The study reports clinical outcomes (PFS, neurotoxicity) rather than specific pharmacokinetic or pharmacodynamic parameters of sodium folinate. |
| popPK | Salaün_2022 | irrelevant | 0 | 0 | The paper is a case report describing toxicities and clinical management, not a pharmacokinetic study providing quantitative disposition parameters for sodium folinate. |
| PGx | Salaün_2022 | not_relevant | 1 | 0 | The paper is a case report of toxicities (PD side effects) and mentions MTHFR/SLCO1B1 genotypes but provides no quantitative pharmacokinetic or pharmacodynamic parameter values. |
| popPK | Sarris_2019 | irrelevant | 0 | 0 | This is a clinical efficacy trial for Major Depressive Disorder that does not report any pharmacokinetic parameters for sodium folinate. |
| PGx | Sarris_2019 | not_relevant | 0 | 0 | The study investigates a nutraceutical combination for depression and mentions non-significant genetic moderation of clinical response, but it does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of sodium folinate. |
| popPK | Saud_2026 | irrelevant | 0 | 0 | This is a study of ivermectin's biochemical effects in rabbits, with no sodium_folinate PK parameters reported. |
| popPK | Scaglione_2014 | irrelevant | 0 | 0 | The paper is a review of folate types (specifically 5-MTHF) and does not provide quantitative pharmacokinetic parameters for sodium folinate (folinic acid). |
| PGx | Scaglione_2014 | not_relevant | 2 | 1 | The paper discusses folate metabolism and genetics generally but does not report pharmacogenomic effects on the PK or PD of sodium folinate specifically. |
| popPK | Schoondermark-van_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pyrimethamine and sulfadiazine, while sodium folinate (folinic acid) is only mentioned as a co-administered supplement without reporting its own PK parameters. |
| PGx | Schoondermark-van_1995 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of pyrimethamine and sulfadiazine in rhesus monkeys and does not involve sodium_folinate or any genetic variants. |
| popPK | Seshia_2011 | irrelevant | 0 | 0 | The paper is a clinical review of neonatal seizures and management guidelines that mentions folinic acid as a therapeutic trial but does not report any quantitative pharmacokinetic parameters for it. |
| PGx | Seshia_2011 | not_relevant | 0 | 0 | The paper is a general review of neonatal seizures that mentions folinic acid as a therapeutic trial and states generally that pharmacogenetics influences drug dosing, but it does not report a specific pharmacogenomic effect on the PK or PD of sodium folinate. |
| popPK | Si_2018 | irrelevant | 0 | 0 | The study evaluates Licochalcone A for anti-Toxoplasma activity and does not report pharmacokinetic parameters for sodium folinate, which is only mentioned as a component of a positive control regimen. |
| PGx | Si_2018 | not_relevant | 0 | 0 | The paper evaluates the anti-Toxoplasma gondii activity of Licochalcone A, not the pharmacogenomics of sodium_folinate. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The paper is an in silico study on mGluR5 modulators and does not investigate sodium folinate pharmacokinetics. |
| PGx | Singh_2026 | not_relevant | 0 | 0 | The paper investigates computational binding of natural compounds to mGluR5 and does not involve sodium_folinate or any pharmacogenomic analysis. |
| popPK | Spears_1989 | irrelevant | 0 | 0 | The paper describes a methodological approach for pharmacodynamic analysis of tissue levels of folinic acid metabolites and enzymes, not the pharmacokinetic disposition of sodium folinate itself. |
| PGx | Spears_1989 | not_relevant | 0 | 0 | The paper discusses pharmacodynamics of folinic acid in relation to 5-fluorouracil and thymidylate synthase inhibition but does not report any gene variants or genotypes affecting these parameters. |
| popPK | Steiner_2005 | irrelevant | 0 | 0 | The paper is a case report on pharmacogenetics and toxicity, not a pharmacokinetic study, and does not report quantitative disposition parameters for sodium folinate. |
| PGx | Steiner_2005 | not_relevant | 0 | 0 | The paper focuses on the toxicity of 5-fluorouracil and irinotecan due to DPYD and UGT1A1 variants, and does not report any pharmacokinetic or pharmacodynamic parameters or genetic effects for sodium_folinate. |
| popPK | Steinwurzel_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and neurophysiological effects of beta-hydroxybutyrate (a ketone body), not sodium folinate. |
| PGx | Steinwurzel_2025 | not_relevant | 0 | 0 | The paper studies the effects of beta-hydroxybutyrate, not the drug sodium folinate, and does not report pharmacogenomic effects. |
| popPK | Stewart_1999 | irrelevant | 0 | 0 | The paper is a clinical pilot study reporting tumor response and toxicity for a multi-agent chemotherapy regimen, containing no pharmacokinetic parameters or models for sodium folinate. |
| PGx | Stewart_1999 | not_relevant | 0 | 0 | The paper is a clinical pilot study evaluating a chemotherapy regimen and reports toxicity and survival outcomes, but it contains no information on pharmacogenomics, gene variants, or pharmacokinetic/pharmacodynamic modeling of sodium folinate. |
| popPK | Suenaga_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of irinotecan and its metabolites, not sodium folinate. |
| PGx | Suenaga_2014 | not_relevant | 1 | 2 | The paper reports a pharmacogenomic effect of UGT1A1 on the pharmacokinetics of irinotecan, not the target drug sodium_folinate. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | This is a scoping review of ketamine/esketamine in diabetes; sodium folinate is not mentioned and no PK parameters for it appear. |
| popPK | Susgun_2023 | irrelevant | 0 | 0 | The paper describes a genetic and clinical case study of a neurometabolic disorder treated with folinic acid (sodium folinate) but contains no pharmacokinetic data, modeling, or quantitative disposition parameters for the drug. |
| PGx | Susgun_2023 | not_relevant | 0 | 0 | The paper reports a FOLR1 variant affecting folate metabolism and clinical response to folinic acid treatment, but it does not report specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, Emax) or quantitative dose-exposure-response data for the drug sodium_folinate. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | This is a systematic review of 5-fluorouracil population PK; sodium folinate is not the subject drug and no sodium folinate parameters appear. |
| popPK | Tabernero_2008 | irrelevant | 0 | 0 | The study focuses on cetuximab pharmacokinetics and dosing regimens, mentioning sodium folinate (folinic acid) only as part of the background chemotherapy regimen without reporting its PK parameters. |
| PGx | Tabernero_2008 | not_relevant | 0 | 0 | The paper discusses cetuximab dosing and pharmacokinetics in colorectal cancer, but does not report any pharmacogenomic effects or specific PK/PD data for sodium_folinate. |
| popPK | Tabernero_2010 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study for cetuximab; sodium_folinate (folinic acid) is only a co-administered agent in the FOLFIRI regimen with no quantitative PK parameters reported for it. |
| PGx | Tabernero_2010 | not_relevant | 0 | 0 | The paper studies cetuximab PK/PD and mentions folinic acid only as part of a background regimen, with no analysis of pharmacogenomic effects on sodium folinate parameters. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | This is a population-PK study of 5-fluorouracil; folinic acid (leucovorin) is only mentioned as part of co-administered regimens, with no sodium folinate PK parameters. |
| popPK | Thomas_1998 | irrelevant | 0 | 0 | The paper is a review of 5-fluorouracil and does not provide quantitative pharmacokinetic parameters for sodium_folinate. |
| PGx | Thomas_1998 | not_relevant | 1 | 0 | The text describes the pharmacological mechanisms and clinical use of 5-fluorouracil and its interactions, but does not report a pharmacogenomic effect (gene variant) on a PK or PD parameter of sodium folinate. |
| popPK | Trenque_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pyrimethamine and sulfadoxine; folinic acid (sodium folinate) is co-administered but no PK parameters for it are reported. |
| PGx | Trenque_2004 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of pyrimethamine and sulfadoxine, not sodium_folinate, and does not report any genetic variants affecting drug disposition. |
| popPK | Urreizti_2010 | irrelevant | 0 | 0 | The paper is a clinical and genetic characterization of MTHFR deficiency mutations, not a pharmacokinetic study reporting disposition parameters for sodium folinate. |
| PGx | Urreizti_2010 | not_relevant | 0 | 0 | The paper describes the molecular genetics of MTHFR deficiency and disease progression, but does not report pharmacokinetic or pharmacodynamic changes of sodium_folinate (leucovorin) due to specific gene variants in a pharmacogenomic context. |
| popPK | Visentin_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antifolate activity and does not report pharmacokinetic disposition parameters for sodium folinate. |
| PGx | Visentin_2014 | not_relevant | 0 | 0 | The paper investigates the impact of 5-formyltetrahydrofolate on pralatrexate and methotrexate in vitro, not a pharmacogenomic effect (gene variant) on sodium_folinate. |
| popPK | Wattanatorn_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil, with folinic acid (sodium folinate) administered only as part of the chemotherapy protocol, not as the subject drug. |
| PGx | Wattanatorn_1997 | not_relevant | 0 | 0 | The paper compares 5-FU pharmacokinetics across different blood matrices and does not investigate the impact of genetic variants on sodium folinate or 5-FU PK/PD parameters. |
| PGx | Watts_2022 | not_relevant | 2 | 5 | The paper reports ST6GAL1 rs6783836 association with hand-foot syndrome (a toxicity, not a PK/PD parameter), and the SNP was not associated with HFS in the FOLFOX (folinic acid) arm (OR=0.86, P=.65). |
| popPK | Welz_2007 | irrelevant | 0 | 0 | The study focuses on renal toxicity and clinical outcomes of chemoradiotherapy, not the pharmacokinetics of sodium folinate. |
| PGx | Welz_2007 | not_relevant | 0 | 0 | The paper investigates the renal toxicity of cisplatin and 5-FU chemotherapy, reporting clinical outcomes like creatinine levels, but does not discuss pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium_folinate. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | This is a narrative review of magnesium sulfate, not sodium folinate; no PK parameters for sodium folinate appear. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | This is a warfarin PKPD study; sodium folinate does not appear as the subject drug, and no folinate disposition parameters are reported. |
| popPK | Yamada_2025 | irrelevant | 0 | 0 | The study analyzes the population pharmacokinetics of 5-fluorouracil and oxaliplatin, with sodium folinate (leucovorin) mentioned only as a co-administered agent and not as the subject drug. |
| PGx | Yamada_2025 | not_relevant | 0 | 0 | The paper analyzes the effect of zolbetuximab on the PK of 5-FU and oxaliplatin, and folinic acid is not the focus of the pharmacokinetic or pharmacodynamic analysis. |
| popPK | Yamada_2025_2 | irrelevant | 0 | 0 | This is a population PK study of zolbetuximab, a different drug; sodium folinate (leucovorin) appears only as a chemotherapy backbone component (mFOLFOX6), with no PK parameters for sodium folinate itself. |
| popPK | Yang_1982 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of folate transport in cell membranes, not a population pharmacokinetic study of sodium folinate in humans or animals. |
| PGx | Yang_1982 | not_relevant | 0 | 0 | The paper describes folate transport mechanisms in cell membrane vesicles and does not report pharmacogenomic effects on the PK or PD of sodium folinate. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The population-PK model is for methotrexate; sodium folinate (leucovorin) is only mentioned as rescue co-medication, with no folinate PK parameters reported. |
| PGx | Zhang_2025 | not_relevant | 3 | 5 | Gene polymorphisms are associated with changes in behavioral PEP-3 efficacy scores, not with any pharmacokinetic or pharmacodynamic parameter of folinic acid. |
| popPK | Zhao_1997 | irrelevant | 0 | 0 | The paper focuses on the transport mechanism of methotrexate (MTX) in murine leukemia cells, not the pharmacokinetics of sodium_folinate. |
| PGx | Zhao_1997 | not_relevant | 0 | 0 | The paper investigates methotrexate transport in cell lines, not the pharmacokinetics or pharmacodynamics of sodium_folinate. |
| popPK | Zhao_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of folate carrier mutations in mouse cells, not a pharmacokinetic study of sodium folinate. |
| PGx | Zhao_1998 | not_relevant | 0 | 0 | The paper focuses on methotrexate (MTX) resistance and folate transport, not the pharmacokinetics or pharmacodynamics of sodium_folinate. |
| popPK | Zhao_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of folate transport mutants (RFC1) in cell lines, not a pharmacokinetic study of sodium folinate. |
| PGx | Zhao_1999 | not_relevant | 0 | 0 | The paper investigates the effect of a mutation on the transport of folates and methotrexate, not on the pharmacokinetic or pharmacodynamic parameters of sodium folinate (leucovorin). |
| popPK | Zhao_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antifolate activity in murine cells and does not report pharmacokinetic parameters for sodium folinate. |
| PGx | Zhao_2001 | not_relevant | 0 | 0 | The study investigates the effect of folate levels on antifolate activity in murine cells, but does not report any pharmacogenomic effects of sodium folinate. |
| popPK | Zhao_2005 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on pemetrexed (not sodium_folinate) and reports no pharmacokinetic parameters. |
| PGx | Zhao_2005 | not_relevant | 0 | 0 | The paper discusses the effects of reduced folate carrier (RFC) variants on the pharmacodynamics of pemetrexed, not sodium_folinate. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | This is a population PK/PD study of gabapentin, not sodium folinate; no folinate parameters are present. |
| popPK | Zhu_2007 | irrelevant | 0 | 0 | The study is a developmental biology investigation of cardiovascular phenotypes in Folr1 knockout mice treated with folinic acid (sodium folinate), and it reports no pharmacokinetic disposition parameters. |
| PGx | Zhu_2007 | not_relevant | 3 | 5 | The study investigates the effect of a genetic knockout (Folr1) on the efficacy (rescue of cardiac defects) of sodium folinate in mice, which is a pharmacodynamic interaction with a transporter gene, but it does not report specific PK parameters or standard PD metrics in the context of human pharmacogenomics for drug dose adjustment. |
| popPK | van_1998 | irrelevant | 0 | 0 | This is a review paper focusing on the mechanisms of action and toxicity of methotrexate, with no population pharmacokinetic data for sodium folinate. |
| PGx | van_1998 | not_relevant | 3 | 0 | The paper discusses methotrexate, not sodium folinate, and while it mentions folinic acid as a toxicity-reducing strategy, it does not report pharmacogenomic effects on PK/PD parameters of sodium folinate itself. |
| popPK | van_2001 | irrelevant | 0 | 0 | The study focuses on the genetic risk (MTHFR mutation) for methotrexate toxicity and does not report quantitative pharmacokinetic parameters for sodium folinate. |
| PGx | van_2001 | not_relevant | 0 | 0 | The paper studies the effect of MTHFR variants on methotrexate toxicity (liver enzymes), not on the pharmacokinetic or pharmacodynamic parameters of sodium_folinate. |
| popPK | van_2002 | irrelevant | 0 | 0 | The study investigates the effect of methotrexate and folate supplementation on homocysteine and folate metabolism (concentrations), not the pharmacokinetic parameters (clearance, volume, etc.) of sodium_folinate. |
| PGx | van_2002 | not_relevant | 0 | 0 | The paper reports on the effect of MTHFR variants on homocysteine levels during Methotrexate treatment, not on the pharmacokinetic or pharmacodynamic parameters of sodium_folinate itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_folinate%5D&body=Drug%3A%20sodium_folinate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_folinate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
