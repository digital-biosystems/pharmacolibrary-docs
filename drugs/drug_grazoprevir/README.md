<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;grazoprevir&quot;}]"></div>

# grazoprevir

- **generic name:** grazoprevir
- **ATC codes:** `J05AP11`, `J05AP54`
- **DrugBank:** [DB11575](https://go.drugbank.com/drugs/DB11575) · **PubChem:** [CID 44603531](https://pubchem.ncbi.nlm.nih.gov/compound/44603531)
- **molar mass:** 766.903 g/mol (C38H50N6O9S) — DrugBank
- **groups:** approved

## About

Grazoprevir is a protease inhibitor used to treat hepatitis C. It is taken orally as a tablet. It is authorized for use in combination with other antiviral medications.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q19786991](https://www.wikidata.org/wiki/Q19786991), [Wikipedia](https://en.wikipedia.org/wiki/Grazoprevir?oldid=1363943243) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| grazoprevir | parent | 766.903 | C38H50N6O9S | DrugBank | [44603531](https://pubchem.ncbi.nlm.nih.gov/compound/44603531) | Caro_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="not_reviewed" data-sim="no"></span><span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Gonzalez-Peralta_2023_age_cohort_1_12_to_18_y_mini_expanded](drugs/drug_grazoprevir/Grazoprevir_GonzalezPeralta2023_age_cohort_1_12_to_18_y_mini.md) | — | 1-compartment (no model) | 0 | Gonzalez-Peralta RP et al., Elbasvir/grazoprevir in children aged 3…, Hepatology communications (2023) | [10.1097/HC9.0000000000000031](https://doi.org/10.1097/HC9.0000000000000031) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="not_reviewed" data-sim="no"></span><span class="pk-badge pk-badge--neutral">not_reviewed</span> | [↳ age_cohort_2_7_to_12_y_mini_expanded](drugs/drug_grazoprevir/Grazoprevir_GonzalezPeralta2023_age_cohort_2_7_to_12_y_mini.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ age_cohort_3_3_to_7_y_mini_expanded](drugs/drug_grazoprevir/Grazoprevir_GonzalezPeralta2023_age_cohort_3_3_to_7_y_mini_e.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Caro_2019_reference](drugs/drug_grazoprevir/Grazoprevir_Caro2019_reference.md) | — | 1-compartment (no model) | 2 | Caro L et al., Pharmacokinetics of elbasvir and grazop…, European journal of clinica… (2019) | [10.1007/s00228-018-2585-3](https://doi.org/10.1007/s00228-018-2585-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_SARS_CoV_2_spike_protein_positive_cells](drugs/drug_grazoprevir/pd_Gammeltoft_2021_SARS_CoV_2_spike_protein_positive_cells.md) | SARS-CoV-2 spike protein-positive cells biomarker turnover ← grazoprevir | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:35 | 0:05 | 0/2/2 | 1/0/0 | 0/0/0 | 1,678/158 | einfracz / qwen3.8-27b | 25 | 2/21 | 25/0 | 0 |

## Coverage

- **PubMed hits:** 195 matched, 87 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abergel_2020 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting virological outcomes (SVR12/SVR24) and does not contain pharmacokinetic disposition parameters for grazoprevir. |
| PGx | Abergel_2020 | not_relevant | 0 | 0 | The paper reports on the clinical efficacy of the antiviral drug, not the pharmacokinetic or pharmacodynamic effects of host gene variants or polymorphisms. |
| popPK | Ahmed_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (SVR rates) for hepatitis C treatment and does not report pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Ahmed_2018 | not_relevant | 1 | 0 | The paper analyzes clinical efficacy (SVR rates) in subgroups such as IL28 CC genotype and resistance-associated substitutions, rather than reporting pharmacokinetic or pharmacodynamic parameters modified by a gene variant. |
| popPK | Alric_2016 | irrelevant | 0 | 0 | The paper is a narrative review of clinical efficacy and safety, providing no quantitative pharmacokinetic parameters for grazoprevir. |
| PGx | Alric_2016 | not_relevant | 0 | 0 | The paper describes the efficacy and safety of the grazoprevir/elbasvir combination but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Asante-Appiah_2017 | irrelevant | 0 | 0 | The study reports in vitro antiviral potency (EC50) and resistance profiles in HCV replicons, not population pharmacokinetic parameters. |
| PGx | Asante-Appiah_2017 | not_relevant | 0 | 0 | The paper investigates viral genotype variants and resistance mutations in HCV GT4 replicons, not human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of grazoprevir. |
| popPK | Asante-Appiah_2019 | irrelevant | 0 | 0 | The paper focuses on HCV resistance mechanisms and antiviral susceptibility of elbasvir and grazoprevir in vitro, not pharmacokinetic disposition parameters. |
| PGx | Asante-Appiah_2019 | not_relevant | 1 | 1 | The paper reports pharmacodynamic resistance to elbasvir and mentions grazoprevir only as a suppressive agent in vitro, without reporting pharmacogenomic effects on the PK or PD parameters of grazoprevir itself. |
| popPK | Asselah_2020 | irrelevant | 0 | 0 | The paper reports clinical efficacy (SVR rates) and safety, not pharmacokinetic parameters. |
| PGx | Asselah_2020 | not_relevant | 0 | 0 | The paper reports the efficacy of the drug regimen based on HCV genotype, not the effect of a human host pharmacogenomic variant on the drug's PK or PD parameters. |
| popPK | Caro_2017 | relevant | 8 | 2 | Study reports PK of grazoprevir in humans with hepatic impairment but only provides relative AUC fold-changes, not absolute CL, V, ka, or half-life values. |
| PGx | Caro_2017 | not_relevant | 0 | 0 | The study investigates the effect of hepatic impairment (a clinical phenotype) on pharmacokinetics, not the effect of a specific gene variant or genotype (pharmacogenomics). |
| PGx | Caro_2019 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics in renal impairment (a physiological condition) rather than the effect of a specific gene variant or genotype. |
| popPK | Caroleo_2018 | irrelevant | 0 | 0 | The study evaluates clinical efficacy and safety outcomes in a real-life setting and does not report pharmacokinetic parameters or quantitative disposition data for grazoprevir. |
| PGx | Caroleo_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety in a general patient population without analyzing genetic variants or genotypes. |
| popPK | Carrion_2016 | irrelevant | 2 | 0 | The paper is a review article summarizing safety and efficacy, and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PGx | Carrion_2016 | not_relevant | 0 | 0 | The paper is a review of safety and efficacy, containing no specific pharmacogenomic data or gene-variant analyses for grazoprevir. |
| popPK | Carson_2026 | irrelevant | 0 | 0 | This human treatment-response prediction study reports no grazoprevir pharmacokinetic parameters or values. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper is a cost-effectiveness analysis and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for grazoprevir. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis and does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Dhanalakshmi_2021 | irrelevant | 0 | 0 | This is a computational furin-inhibitor study, not a grazoprevir disposition-PK study, and reports no quantitative PK parameters. |
| popPK | Dhanalakshmi_2022 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing against furin and does not report pharmacokinetic parameters for grazoprevir. |
| PGx | Dhanalakshmi_2022 | not_relevant | 0 | 0 | The paper focuses on virtual screening and molecular docking to predict furin inhibition by repurposed drugs, with no data on pharmacogenomics or PK/PD parameters. |
| popPK | El_2016 | irrelevant | 1 | 0 | The paper is a review article that discusses the pharmacokinetic properties of grazoprevir qualitatively but does not provide any specific quantitative parameter values (e.g., clearance, volume, half-life) in the extracted text. |
| PGx | El_2016 | not_relevant | 0 | 0 | The paper is a review of elbasvir/grazoprevir efficacy and safety, containing no data on genetic variants influencing PK or PD parameters. |
| popPK | Evon_2022 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing patient-reported symptoms and well-being outcomes, not a pharmacokinetic study, and contains no PK parameters for grazoprevir. |
| PGx | Evon_2022 | not_relevant | 0 | 0 | The paper is a comparative effectiveness study on symptom outcomes for HCV treatments and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Fabrizi_2016 | irrelevant | 0 | 0 | The paper is a review focusing on safety and efficacy (viral response rates) of HCV therapies in chronic kidney disease, and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for grazoprevir. |
| PGx | Fabrizi_2016 | not_relevant | 0 | 0 | The paper reviews the efficacy and safety of hepatitis C treatments in chronic kidney disease but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Fabrizi_2016_2 | irrelevant | 0 | 0 | The paper is a narrative review focusing on treatment efficacy and safety in renal patients, containing no quantitative pharmacokinetic parameters. |
| PGx | Fabrizi_2016_2 | not_relevant | 0 | 0 | The paper discusses the clinical efficacy and safety of grazoprevir in patients with chronic kidney disease but contains no information on gene variants, genotypes, or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| PGx | Fathi_2017 | not_relevant | 0 | 0 | This review reports treatment efficacy by HCV genotype, not gene-variant effects on grazoprevir PK or PD parameters. |
| PGx | Gamal_2016 | not_relevant | 0 | 0 | The text does not report a host pharmacogenomic effect on grazoprevir pharmacokinetics or pharmacodynamics. |
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | This is an in-vitro mechanistic/antiviral efficacy study evaluating HCV protease inhibitors against SARS-CoV-2, not a pharmacokinetic study, and contains no PK parameters (CL, V, ka, etc.) for grazoprevir. |
| PGx | Gammeltoft_2021 | not_relevant | 0 | 0 | The study evaluates the in vitro antiviral efficacy of HCV protease inhibitors against SARS-CoV-2 and does not report on any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of grazoprevir. |
| popPK | Gane_2017 | irrelevant | 0 | 0 | The study reports virologic efficacy and resistance profiles for an HCV treatment regimen, not pharmacokinetic parameters. |
| PGx | Gane_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy and resistance profiles for HCV genotype 3 patients but does not analyze how host gene variants affect the pharmacokinetics or pharmacodynamics of grazoprevir. |
| popPK | Gane_2019 | irrelevant | 0 | 0 | This human study reports pharmacokinetics for glecaprevir and pibrentasvir, not grazoprevir. |
| popPK | Gentile_2016 | irrelevant | 0 | 0 | This is a narrative review of direct-acting antivirals without original quantitative pharmacokinetic data for grazoprevir. |
| PGx | Gentile_2016 | not_relevant | 0 | 0 | The paper is a general review of direct-acting antivirals in development and does not report specific pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of grazoprevir. |
| PGx | Gonzalez-Peralta_2023 | not_relevant | 0 | 0 | The study focuses on age-based pharmacokinetic modeling in children and does not report on genetic variants or genotypes. |
| popPK | Guo_2019 | irrelevant | 1 | 0 | The study reports relative pharmacokinetic exposure ratios (AUC) based on genetic variants rather than absolute compartmental parameters (clearance, volume, half-life), and specific numerical values for these parameters are not present in the evidence. |
| PGx | Huličiak_2022 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of ABCB1-mediated digoxin transport by grazoprevir, not a gene variant, genotype, or phenotype effect on grazoprevir PK or PD. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | The text discusses hepatitis C treatment options but reports no pharmacogenomic effects on grazoprevir pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ing_2020 | irrelevant | 0 | 0 | This is a narrative review discussing drug-drug interactions and mechanistic considerations, containing no original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for grazoprevir. |
| PGx | Ing_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between direct-acting antivirals and substances of abuse, containing no information on pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Irekeola_2022 | not_relevant | 0 | 0 | This review only names grazoprevir as an example protease inhibitor and reports no gene-related effect on its PK or PD parameters. |
| popPK | Jacobson_2019 | irrelevant | 5 | 0 | The study assesses efficacy and mentions PK evaluation, but specific quantitative PK parameters (CL, V, etc.) are not reported in the text and are referenced as being in Supplementary Table 1 which is not provided. |
| PGx | Jacobson_2019 | not_relevant | 1 | 2 | The study is a clinical trial assessing the safety and efficacy of the drug in a specific patient population (Child-Pugh B cirrhosis) and does not investigate how specific patient gene variants/genotypes affect the pharmacokinetics or pharmacodynamics of grazoprevir. |
| popPK | Jadoul_2017 | irrelevant | 0 | 0 | The paper is a clinical review of HCV treatment in CKD patients and does not report any pharmacokinetic parameters (CL, V, Q, ka, t1/2) or compartmental models for grazoprevir. |
| PGx | Jadoul_2017 | not_relevant | 0 | 0 | The paper is a clinical review on Hepatitis C treatment in Chronic Kidney Disease and does not contain any pharmacogenomic data or genotype-specific PK/PD effects for grazoprevir. |
| popPK | Karaoui_2017 | irrelevant | 1 | 0 | The paper is a clinical review of the drug combination elbasvir-grazoprevir that does not report specific quantitative pharmacokinetic parameter values (such as clearance, volume of distribution, or half-life) for grazoprevir. |
| PGx | Karaoui_2017 | not_relevant | 0 | 0 | The paper is a general clinical review of elbasvir-grazoprevir and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Kiang_2018 | irrelevant | 2 | 0 | The provided text is a qualitative review summary without specific quantitative pharmacokinetic parameter values (CL, V, etc.) for grazoprevir. |
| PGx | Kiang_2018 | not_relevant | 0 | 0 | The paper discusses standard pharmacokinetics and drug-drug interactions of elbasvir/grazoprevir but does not report any effects of gene variants, genotypes, or genetic phenotypes on PK/PD parameters. |
| popPK | Kohli_2016 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy (SVR12) in CKD patients, containing no pharmacokinetic parameters for grazoprevir. |
| PGx | Kohli_2016 | not_relevant | 0 | 0 | The paper is a review of DAA efficacy in chronic kidney disease patients and does not report pharmacogenomic effects (gene variants) on grazoprevir PK or PD parameters. |
| popPK | Koishikawa_2025 | irrelevant | 2 | 0 | Grazoprevir is used only as a probe substrate to demonstrate drug-drug interactions with rifampicin, and no specific quantitative PK parameters (CL, V, etc.) for grazoprevir are reported in the text. |
| PGx | Koishikawa_2025 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect (specific gene variant impact) on grazoprevir PK; it describes a transchromosomic mouse model and the effect of the drug rifampicin on grazoprevir exposure. |
| popPK | Laguno_2021 | irrelevant | 0 | 0 | This is a clinical efficacy study reporting SVR and safety outcomes, containing no pharmacokinetic parameters or quantitative disposition data for grazoprevir. |
| PGx | Laguno_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR) and safety of grazoprevir in HIV/HCV co-infected patients but does not assess the impact of host genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lawitz_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting SVR12 rates, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Lawitz_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR12) based on HCV genotype and cirrhosis status, but does not contain pharmacokinetic (PK) or pharmacodynamic (PD) data or associations with human genetic variants. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The analysis reports efficacy and safety by clinical subgroups and viral NS5A resistance substitutions, but no host genotype or phenotype effect on grazoprevir PK or PD. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper focuses on synthetic gene circuits for controlling T cell function and does not contain any pharmacokinetic data or parameters for grazoprevir. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper focuses on synthetic gene circuits for cell therapy and does not mention grazoprevir or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Liu_2020 | not_relevant | 0 | 0 | The paper reports IL28B genotype and viral resistance associations with treatment response, but no pharmacogenomic effect on a grazoprevir PK or PD parameter. |
| popPK | Marshall_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elbasvir in hepatic impairment; grazoprevir is only mentioned in the context of the fixed-dose combination and lacks specific quantitative PK parameter data in the provided evidence. |
| PGx | Marshall_2018 | not_relevant | 0 | 0 | The paper investigates the effect of hepatic impairment (a clinical condition/phenotype) on elbasvir pharmacokinetics, not a genetic variant or genotype. |
| popPK | Martinello_2023 | irrelevant | 0 | 0 | The study evaluates the efficacy of glecaprevir-pibrentasvir and mentions grazoprevir-elbasvir only as a retreatment option for virological failure, without reporting any pharmacokinetic parameters for grazoprevir. |
| PGx | Martinello_2023 | not_relevant | 0 | 0 | The study evaluates the efficacy of glecaprevir-pibrentasvir in a clinical trial and does not investigate the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mattingly_2017 | irrelevant | 0 | 0 | This is a cost-effectiveness economic analysis that does not report pharmacokinetic parameters for grazoprevir. |
| PGx | Mattingly_2017 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis comparing treatment regimens and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Nagral_2017 | irrelevant | 0 | 0 | The study is an efficacy/safety evaluation of HCV treatment in thalassemia patients and contains no pharmacokinetic data for grazoprevir. |
| PGx | Nagral_2017 | not_relevant | 0 | 0 | The study evaluates the efficacy and safety of generic DAAs in thalassemia patients but does not report any pharmacogenomic analysis of grazoprevir PK/PD parameters. |
| popPK | Onofrio_2021 | irrelevant | 0 | 0 | The paper is a clinical registry study evaluating the efficacy of sofosbuvir/velpatasvir/voxilaprevir as salvage therapy, with no pharmacokinetic data for grazoprevir (which is only listed as a prior therapy). |
| PGx | Onofrio_2021 | not_relevant | 0 | 0 | The paper evaluates clinical efficacy (SVR) of a salvage DAA regimen and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of grazoprevir. |
| popPK | Perazzo_2020 | irrelevant | 0 | 0 | This is a human treatment-effectiveness meta-analysis and reports no grazoprevir pharmacokinetic parameters. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment assessing resistance mechanisms and viral fitness, not a pharmacokinetic study. |
| PGx | Pham_2019 | not_relevant | 0 | 0 | The paper investigates viral resistance mechanisms (viral genetics) rather than patient pharmacogenomics affecting drug pharmacokinetics or pharmacodynamics. |
| popPK | Reau_2017 | irrelevant | 2 | 0 | The paper reports population PK parameters (AUC, Cmax) only for elbasvir, not grazoprevir, and lacks quantitative disposition parameters (CL, V, ka) for the subject drug. |
| PGx | Reau_2017 | not_relevant | 0 | 0 | The study assesses the effect of proton pump inhibitor use (a drug-drug interaction/covariate) on pharmacokinetics, not the effect of a specific gene variant, genotype, or genetic phenotype. |
| popPK | Ridruejo_2020 | irrelevant | 0 | 0 | The study reports clinical efficacy (SVR12) and safety outcomes for HCV treatment, containing no pharmacokinetic parameters (CL, V, ka, etc.) for grazoprevir. |
| PGx | Ridruejo_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (SVR12) and safety in CKD patients, but does not report any pharmacogenomic analysis or genotype-specific effects on PK/PD parameters. |
| PGx | Roth_2015 | not_relevant | 0 | 0 | The paper reports no gene variant, genotype, or phenotype effect on grazoprevir pharmacokinetic or pharmacodynamic parameters; HCV genotype refers to the virus. |
| popPK | Ruiz_2021 | irrelevant | 0 | 0 | The study assesses clinical efficacy (SVR rates) and virological resistance of DAA regimens, containing no pharmacokinetic parameter values for grazoprevir. |
| PGx | Ruiz_2021 | not_relevant | 0 | 0 | The paper evaluates HCV drug resistance (virulence/efficacy) rather than pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug grazoprevir. |
| popPK | Sulejmani_2016 | irrelevant | 2 | 0 | This is a review paper summarizing PK/PD and efficacy, and no original quantitative disposition parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| PGx | Sulejmani_2016 | not_relevant | 0 | 0 | The paper is a general review of pharmacokinetics and pharmacodynamics of elbasvir and grazoprevir in hepatitis C treatment and does not report specific pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Sun_2018 | irrelevant | 0 | 0 | The study focuses on the clinical effects of DAA treatment on lipid homoeostasis (triglycerides, cholesterol, lipoproteins) and does not report any pharmacokinetic parameters (CL, V, t1/2) for grazoprevir. |
| PGx | Sun_2018 | not_relevant | 0 | 0 | The paper investigates the clinical effect of grazoprevir on lipid parameters in a patient cohort without reporting any data on gene variants, genotypes, or pharmacogenomic interactions affecting PK/PD. |
| PGx | Tsai_2020 | not_relevant | 0 | 0 | The paper evaluates HCV viral genotypes and clinical outcomes, not a genetic variant or phenotype affecting grazoprevir PK or PD. |
| popPK | Velázquez_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the design, synthesis, and in-vitro potency (EC50) of new HCV NS3/4A inhibitors, with no population pharmacokinetic or disposition parameters reported. |
| PGx | Velázquez_2016 | not_relevant | 0 | 0 | The paper describes medicinal chemistry and synthesis of novel HCV NS3/4A inhibitors based on the core structure of grazoprevir, but does not report on pharmacogenomic effects on PK/PD parameters of grazoprevir itself. |
| popPK | Wang_2021 | irrelevant | 1 | 0 | The paper is a review article without original quantitative pharmacokinetic parameter values (CL, V, etc.) for grazoprevir. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper is a general review of Elbasvir/Grazoprevir PK, PD, and efficacy, with no focus on pharmacogenomics or genetic variants affecting drug parameters. |
| popPK | Wei_2020 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical trial focused on the efficacy (SVR12) and safety of elbasvir/grazoprevir, reporting no population pharmacokinetic parameters or quantitative disposition data. |
| PGx | Wei_2020 | not_relevant | 0 | 0 | The paper reports clinical trial outcomes (SVR12) based on HCV genotype, not on human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of grazoprevir. |
| popPK | Yakoot_2017 | irrelevant | 0 | 0 | The study is a clinical efficacy trial of sofosbuvir/daclatasvir; grazoprevir is only mentioned in the background guidelines and is not the subject of the pharmacokinetic analysis. |
| PGx | Yakoot_2017 | not_relevant | 0 | 0 | This study evaluates treatment duration for sofosbuvir/daclatasvir based on virologic response and does not report any pharmacogenomic effects on PK/PD parameters of grazoprevir. |
| PGx | Yeh_2018 | not_relevant | 0 | 0 | The reported differences are between HCV viral genotypes, not host pharmacogenomic variants; no host genotype-related PK or PD effect of grazoprevir is reported. |
| popPK | Yu_2018 | irrelevant | 2 | 0 | This is a review of FDA-approved drugs from 2013-2016 focusing on drug-drug interaction mechanisms (enzymes/transporters) rather than quantitative population pharmacokinetic parameter estimation (CL, V, etc.) for grazoprevir. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) involving transporters and enzymes, not pharmacogenomic effects of gene variants on pharmacokinetics or pharmacodynamics. |
| PGx | Yun_2020 | not_relevant | 0 | 0 | The paper models cost-utility of antiviral regimens and does not report genetic effects on grazoprevir pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zamor_2018 | irrelevant | 0 | 0 | The paper is a pooled efficacy and safety analysis focusing on virologic response rates in black adults, containing no pharmacokinetic or disposition parameter data for grazoprevir. |
| PGx | Zamor_2018 | not_relevant | 0 | 0 | The paper analyzes race-based differences in clinical outcomes (SVR) and adverse events, but does not report gene variant/genotype data or pharmacokinetic/pharmacodynamic parameter changes. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is an in-vitro antibacterial drug repurposing study involving 14 specific candidate drugs (DR1-DR14) and does not mention or analyze grazoprevir or its pharmacokinetics. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper discusses the drug repurposing of lifitegrast and glecaprevir (not grazoprevir) for antibacterial activity and does not involve human pharmacogenomics, genotypes, or pharmacokinetics/pharmacodynamics of grazoprevir. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper is a review of meeting highlights for multiple HCV drugs, and grazoprevir is only mentioned as part of a title regarding reinfection in opiate users, with no PK parameter values provided. |
| PGx | unknown_2017 | not_relevant | 0 | 0 | This text is a collection of abstracts from a 2017 AASLD meeting; while it mentions graziprevir, it reports on general efficacy and reinfection risks, not specific pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgrazoprevir%5D&body=Drug%3A%20grazoprevir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_grazoprevir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:29 UTC</sub>
