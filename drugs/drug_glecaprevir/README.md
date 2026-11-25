<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Glecaprevir&quot;}]"></div>

# Glecaprevir

- **generic name:** Glecaprevir
- **ATC codes:** `J05AP57`
- **DrugBank:** [DB13879](https://go.drugbank.com/drugs/DB13879) · **PubChem:** [CID 66828839](https://pubchem.ncbi.nlm.nih.gov/compound/66828839)
- **molar mass:** 838.87 g/mol (C38H46F4N6O9S) — DrugBank
- **groups:** approved, investigational

## About

Glecaprevir is a direct-acting antiviral drug used to treat chronic hepatitis C. It is given as a tablet by mouth. It is used in combination therapy and is approved in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q28868720](https://www.wikidata.org/wiki/Q28868720), [Wikipedia](https://en.wikipedia.org/wiki/Glecaprevir?oldid=1370553172) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glecaprevir (glecaprevir and pibrentasvir) | parent | 838.87 | C38H46F4N6O9S | DrugBank | [66828839](https://pubchem.ncbi.nlm.nih.gov/compound/66828839) | Thakre_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [Thakre_2026_reference](drugs/drug_glecaprevir/Glecaprevir_Thakre2026_reference.md) | held back | 1-compartment, oral | 7 (+3 cov.) | Thakre N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jonas_2020_reference](drugs/drug_glecaprevir/Glecaprevir_Jonas2020_reference.md) | — | 1-compartment (no model) | 0 | Jonas MM et al., Pharmacokinetics, Safety, and Efficacy…, Hepatology (Baltimore, Md.) (2020) | [10.1002/hep.30840](https://doi.org/10.1002/hep.30840) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ng_2018_HCV](drugs/drug_glecaprevir/pd_Ng_2018_HCV.md) | HCV replication ← glecaprevir · inhibition effect | — | Ng TI et al., In Vitro Antiviral Activity and Resista…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.01620-17](https://doi.org/10.1128/AAC.01620-17) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ng_2018_NS3_4A](drugs/drug_glecaprevir/pd_Ng_2018_NS3_4A.md) | HCV NS3/4A protease activity ← glecaprevir · inhibition effect | — | Ng TI et al., In Vitro Antiviral Activity and Resista…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.01620-17](https://doi.org/10.1128/AAC.01620-17) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Oberoi_2020_QTcF](drugs/drug_glecaprevir/pd_Oberoi_2020_QTcF.md) | QTcF ← glecaprevir · direct linear effect | — | Oberoi RK et al., A Thorough QT Study of the Combination…, Clinical therapeutics (2020) | [10.1016/j.clinthera.2020.05.009](https://doi.org/10.1016/j.clinthera.2020.05.009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Schnell_2018_Antiviral_activity_of_GLE_against_HCV_replicons_containing_NS3_4A](drugs/drug_glecaprevir/pd_Schnell_2018_Antiviral_activity_of_GLE_against_HCV_replicons.md) | Antiviral activity of GLE against HCV replicons containing NS3/4A ← glecaprevir · direct sigmoid Emax (Hill) effect | — | Schnell G et al., Hepatitis C virus genetic diversity by…, PloS one (2018) | [10.1371/journal.pone.0205186](https://doi.org/10.1371/journal.pone.0205186) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:38 | 0:08 | 1/1/0 | 4/0/0 | 0/0/0 | 1,678/134 | einfracz / qwen3.8-27b | 26 | 0/24 | 26/0 | 0 |

## Coverage

- **PubMed hits:** 200 matched, 65 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kosloski_2019.pdf` | Kosloski MP et al., Translation of In Vitro Transport Inhib…, The Journal of pharmacology… (2019) | pd | 5 | [10.1124/jpet.119.256966](https://doi.org/10.1124/jpet.119.256966) | [31167814](https://www.ncbi.nlm.nih.gov/pubmed/31167814) | metadata signals extractable PD data (IC50) |
| `Nnani_2021.pdf` | Nnani DU et al., Effect of glecaprevir/pibrentasvir on w…, Transplant infectious disea… (2021) | pgx | 7 | [10.1111/tid.13716](https://doi.org/10.1111/tid.13716) | [34407270](https://www.ncbi.nlm.nih.gov/pubmed/34407270) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-24 00:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abu-Freha_2022 | not_relevant | 0 | 0 | The review reports no gene variant, genotype, or phenotype effect on a pharmacokinetic or pharmacodynamic parameter of glecaprevir. |
| popPK | Atsukawa_2019 | irrelevant | 1 | 0 | The study investigates efficacy and dialysability (removal via dialysis) but does not report quantitative population-pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Atsukawa_2019 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics in renal impairment and dialysis effects, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Bellesini_2020 | not_relevant | 0 | 0 | The paper reports a drug–drug interaction between glecaprevir/pibrentasvir and dabigatran, not a gene-, genotype-, or phenotype-associated effect on glecaprevir PK or PD. |
| popPK | Brockmüller_2025 | irrelevant | 0 | 0 | This human DOAC-underdosing study reports no glecaprevir pharmacokinetic parameters. |
| PGx | Brown_2020 | not_relevant | 0 | 0 | Reports adherence and HCV viral-genotype outcomes, not a pharmacogenomic effect on glecaprevir PK or PD. |
| popPK | Carrion_2018 | irrelevant | 2 | 0 | The provided text is an abstract for a review article that discusses pharmacokinetics generally but does not contain any quantitative disposition parameters (e.g., CL, V, ka) or numeric values for glecaprevir. |
| PGx | Carrion_2018 | not_relevant | 0 | 0 | The text is a general review of glecaprevir/pibrentasvir focusing on efficacy and safety in CKD, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Carson_2026 | irrelevant | 0 | 0 | Glecaprevir is mentioned only as an example regimen; no glecaprevir pharmacokinetic parameters are reported. |
| popPK | Dore_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial focusing on virological response (SVR12) and does not report any pharmacokinetic parameters for glecaprevir. |
| PGx | Dore_2020 | not_relevant | 0 | 0 | The paper reports on a clinical monitoring strategy trial for glecaprevir and contains no data on pharmacogenomics, genetic variants, or PK/PD parameters. |
| popPK | Dudnyk_2025 | irrelevant | 0 | 0 | This viewpoint only mentions glecaprevir in a co-treatment context and reports no quantitative disposition parameters. |
| PGx | Fathi_2017 | not_relevant | 0 | 0 | The review reports treatment efficacy by HCV viral genotype, not a host genetic effect on glecaprevir pharmacokinetic or pharmacodynamic parameters. |
| popPK | Flamm_2019 | irrelevant | 1 | 0 | The paper reports only a percentage change in exposure (-41%) without providing quantitative pharmacokinetic parameters (CL, V, Q, ka) or a compartmental model. |
| PGx | Flamm_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (acid-reducing agents) rather than pharmacogenomic effects (gene variants/genotypes) on pharmacokinetics or pharmacodynamics. |
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study of HCV protease inhibitors against SARS-CoV-2, not a pharmacokinetic study, and contains no disposition parameters for glecaprevir. |
| PGx | Gammeltoft_2021 | not_relevant | 0 | 0 | The paper evaluates the in vitro antiviral efficacy and interactions of HCV protease inhibitors against SARS-CoV-2, but does not report any pharmacogenomic effects on the PK or PD of glecaprevir. |
| popPK | Gane_2019 | relevant | 8 | 2 | Human population-PK analysis reports glecaprevir AUC values, but no numeric disposition or model parameter estimates are provided. |
| PGx | Gane_2019 | not_relevant | 0 | 0 | The reported glecaprevir exposure difference is by cirrhosis status, not a gene variant, genotype, or pharmacogenomic phenotype. |
| popPK | Huff_2020 | irrelevant | 2 | 0 | The paper is a review article summarizing clinical efficacy and safety outcomes, and the provided evidence does not contain quantitative pharmacokinetic parameter values (e.g., CL, Vd) for glecaprevir. |
| PGx | Huff_2020 | not_relevant | 0 | 0 | The paper is a clinical review of efficacy and safety that does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Ing_2020 | irrelevant | 2 | 0 | The paper is a review discussing drug-drug interaction potential and does not report original quantitative population PK parameters for glecaprevir. |
| PGx | Ing_2020 | not_relevant | 0 | 0 | The paper is a literature review discussing drug-drug interactions between DAAs and substances of abuse, and does not report any pharmacogenomic effects (gene variants) on the PK/PD of glecaprevir. |
| PGx | Jonas_2020 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetics of glecaprevir in adolescents versus adults based on demographic factors (age, weight) and does not report any genetic variants or genotypes affecting drug exposure. |
| PGx | Jonas_2021 | not_relevant | 0 | 0 | The paper reports pediatric glecaprevir exposure and HCV viral genotypes/polymorphisms, but no pharmacogenomic effect on a glecaprevir PK or PD parameter. |
| PGx | Kalluri_2023 | not_relevant | 0 | 0 | The study reports pharmacokinetics in a general population of healthy Chinese adults but does not analyze specific gene variants or genotypes associated with drug metabolism or response. |
| popPK | Kosloski_2017 | irrelevant | 1 | 0 | The study focuses on drug-drug interactions regarding methadone and buprenorphine, providing no quantitative PK parameters (CL, V, etc.) for glecaprevir. |
| PGx | Kosloski_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between glecaprevir/pibrentasvir and opioids, not pharmacogenomic effects of gene variants on glecaprevir PK/PD. |
| popPK | Kosloski_2019 | irrelevant | 0 | 0 | The study focuses on drug-drug interactions and transporter inhibition (IC50) rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for glecaprevir itself. |
| PGx | Kosloski_2019 | not_relevant | 0 | 5 | The study evaluates drug-drug interactions and transporter inhibition but does not report any effect of a genetic variant or genotype on the pharmacokinetics or pharmacodynamics of glecaprevir. |
| popPK | Kosloski_2019_2 | irrelevant | 2 | 0 | The paper reports drug-drug interaction effects (percent change in AUC) on exposure rather than quantitative compartmental or population PK parameters (CL, V, ka) for glecaprevir. |
| PGx | Kosloski_2019_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions with immunosuppressants, not the effect of a gene variant/genotype/phenotype on glecaprevir's PK/PD. |
| popPK | Kosloski_2020 | irrelevant | 1 | 0 | This is a drug-drug interaction study focusing on exposure changes (AUC ratios) rather than reporting standalone population PK parameter estimates (CL, V, etc.) for glecaprevir. |
| PGx | Kosloski_2020 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) between glecaprevir and HIV antiretrovirals, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The review discusses HCV genotypes and resistance mutations in relation to treatment outcomes, but does not report a pharmacogenomic effect on a glecaprevir PK or PD parameter. |
| PGx | Llibre_2026 | not_relevant | 0 | 0 | The study reports HCV viral genotypes and clinical outcomes, but no pharmacogenomic effect on glecaprevir PK or PD parameters. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluoxazolevir, while glecaprevir is only used as a comparator agent in combination therapy without reporting its PK parameters. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | The paper focuses on fluoxazolevir pharmacology and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glecaprevir. |
| popPK | Martinello_2020 | irrelevant | 0 | 0 | This is a clinical efficacy study evaluating viral load response, not a pharmacokinetic study, and it contains no PK parameters for glecaprevir. |
| PGx | Martinello_2020 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of a shortened treatment duration for recent HCV infection and does not report on pharmacogenomic effects (host gene variants) on the pharmacokinetics or pharmacodynamics of glecaprevir. |
| popPK | Mensa_2019 | irrelevant | 4 | 0 | The paper is a narrative review summarizing PK parameters, but the evidence provided contains no numeric values, and such reviews typically lack original extractable quantitative disposition data. |
| PGx | Mensa_2019 | not_relevant | 0 | 0 | The paper is a general review of glecaprevir/pibrentasvir PK/PD and clinical efficacy, with no mention of pharmacogenomic effects. |
| popPK | Monribot_2023 | irrelevant | 0 | 0 | The paper is a case report focusing on the interaction between crizotinib and sofosbuvir/velpatasvir; glecaprevir is only mentioned as a general example of a CYP3A4 inhibitor and no PK parameters for it are reported. |
| PGx | Monribot_2023 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between crizotinib and sofosbuvir/velpatasvir, not a pharmacogenomic effect on glecaprevir. |
| PGx | Mukherjee_2023 | not_relevant | 0 | 0 | The paper models a drug–drug interaction and reports no gene variant, genotype, or phenotype effect on glecaprevir PK or PD. |
| popPK | Ng_2018 | irrelevant | 0 | 0 | This is an in vitro antiviral-activity study and reports no quantitative pharmacokinetic disposition parameters for glecaprevir. |
| popPK | Nnani_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (T/D ratios) for the drug tacrolimus, not for glecaprevir, which is only the interacting agent. |
| PGx | Nnani_2021 | not_relevant | 0 | 0 | The study reports a drug-drug interaction effect on tacrolimus pharmacokinetics, not a pharmacogenomic effect on glecaprevir. |
| popPK | Oberoi_2020 | irrelevant | 2 | 0 | This is a Thorough QT (TQT) study focused on cardiac repolarization safety, not a population pharmacokinetic study reporting clearance, volume, or rate constants for glecaprevir. |
| PGx | Oberoi_2020 | not_relevant | 0 | 0 | The study is a Thorough QT study in healthy subjects that evaluates cardiac repolarization, not a pharmacogenomic study assessing the impact of genetic variants on PK/PD parameters. |
| popPK | Pearlman_2018 | irrelevant | 0 | 0 | The paper is a clinical review comparing safety and efficacy of antiviral regimens and does not report quantitative pharmacokinetic parameters or compartmental models for glecaprevir. |
| PGx | Pearlman_2018 | not_relevant | 0 | 0 | The text is a clinical review comparing efficacy and safety profiles, containing no pharmacogenomic data or gene variant analyses affecting PK/PD. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | The paper is an in-vitro virology study investigating HCV resistance and fitness, not a pharmacokinetic study reporting quantitative disposition parameters for glecaprevir. |
| PGx | Pham_2019 | not_relevant | 1 | 2 | The paper reports viral escape and IC50/EC50 shifts due to HCV viral genotype variants (NS3 Q80), which is a target-mediated resistance mechanism, not a human pharmacogenomic effect on the PK or PD of glecaprevir. |
| popPK | Ridruejo_2020 | irrelevant | 0 | 0 | The paper is an efficacy and safety study reporting SVR12 and adverse events, with no pharmacokinetic parameters or population-PK model reported. |
| PGx | Ridruejo_2020 | not_relevant | 0 | 0 | The paper investigates the clinical efficacy and safety of HCV treatments in patients with chronic kidney disease, but it does not report any pharmacogenomic effects of gene variants on the PK or PD parameters of glecaprevir. |
| PGx | Sato_2018 | not_relevant | 0 | 0 | The paper discusses viral NS5A P32 deletion and resistance to pibrentasvir and other NS5A inhibitors, but reports no pharmacogenomic effect on a PK or PD parameter of glecaprevir. |
| popPK | Schnell_2018 | irrelevant | 1 | 0 | This genetic-diversity analysis reports no quantitative glecaprevir disposition parameters or PK model. |
| popPK | Scotto_2019 | irrelevant | 0 | 0 | The paper is a review of efficacy and safety outcomes (SVR rates) for HCV treatments, not a pharmacokinetic study reporting quantitative disposition parameters for glecaprevir. |
| PGx | Scotto_2019 | not_relevant | 0 | 0 | The paper is a review of real-world efficacy (SVR rates) and safety of pangenotypic DAAs, reporting no pharmacogenomic effects on PK/PD parameters. |
| popPK | Soriano_2017 | irrelevant | 0 | 0 | The paper is a review of fixed-dose combinations for HCV treatment and does not report quantitative pharmacokinetic parameters for glecaprevir. |
| PGx | Soriano_2017 | not_relevant | 0 | 0 | The paper discusses fixed-dose combinations for hepatitis C treatment and adherence but does not mention glecaprevir or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Suleiman_2020 | relevant | 10 | 0 | The paper describes a population PK model for glecaprevir but does not report specific numeric parameter values (CL, V, etc.) in the provided abstract. |
| PGx | Suleiman_2020 | not_relevant | 0 | 0 | The paper evaluates the impact of demographic and clinical covariates (such as cirrhosis, age, body weight, and renal function) on the pharmacokinetics of glecaprevir/pibrentasvir, but it does not evaluate genetic variants, genotypes, or pharmacogenomic phenotypes. |
| popPK | Taskar_2020 | irrelevant | 0 | 0 | This review reports no quantitative glecaprevir disposition parameters, and no glecaprevir values are present in the evidence. |
| PGx | Thakre_2026 | not_relevant | 0 | 0 | No host genetic variants or phenotypes were evaluated; HCV genotypes are viral genotypes, not pharmacogenomic factors. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy (SVR12 rates) and safety, containing no pharmacokinetic or disposition parameters. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper reports overall efficacy (SVR12) and safety based on HCV genotype and clinical subgroups (e.g., renal impairment, HIV), but does not report any pharmacogenomic effects of patient gene variants on glecaprevir's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yamana_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy and viral resistance mutations, but no pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of glecaprevir. |
| PGx | Yen_2020 | not_relevant | 0 | 0 | The study compares outcomes by ESRD status but reports no gene variant, genotype, or pharmacogenomic phenotype effect on glecaprevir PK or PD. |
| popPK | Zamor_2021 | irrelevant | 0 | 0 | The paper is a post-hoc analysis of adherence and virologic efficacy (SVR12) in clinical trials, not a pharmacokinetic study reporting quantitative disposition parameters for glecaprevir. |
| PGx | Zamor_2021 | not_relevant | 0 | 0 | The paper evaluates adherence and treatment interruption on virologic response but does not report any pharmacogenomic data or gene variant impacts on PK/PD parameters. |
| PGx | Zarębska-Michaluk_2022 | not_relevant | 0 | 0 | The paper reports clinical predictors of SVR and regimen effectiveness, but no pharmacogenomic association with a glecaprevir PK or PD parameter. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on in vitro antibacterial activity and molecular docking for drug repurposing, with no pharmacokinetic data for glecaprevir. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates the antibacterial activity of drugs against bacteria and does not report any human pharmacogenomic effects on the PK or PD parameters of glecaprevir. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper is a review of conference abstracts focusing primarily on efficacy and safety, with no original quantitative pharmacokinetic parameter values (CL, V, etc.) provided in the text. |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The text is a table of contents/highlight summary of HCV clinical trial presentations and does not report on any pharmacogenomic effects on PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglecaprevir%5D&body=Drug%3A%20glecaprevir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glecaprevir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 13:59 UTC</sub>
