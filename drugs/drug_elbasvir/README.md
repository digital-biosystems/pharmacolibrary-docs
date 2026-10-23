<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;elbasvir&quot;}]"></div>

# elbasvir

- **generic name:** elbasvir
- **ATC codes:** `J05AP10`, `J05AP54`
- **DrugBank:** [DB11574](https://go.drugbank.com/drugs/DB11574) · **PubChem:** none
- **groups:** approved

## About

Elbasvir is an antiviral medicine used, in combination with grazoprevir, to treat hepatitis C infections. It is an approved direct-acting antiviral for HCV and is used in the treatment of chronic hepatitis C.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22673321](https://www.wikidata.org/wiki/Q22673321) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=elbasvir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:50 | 9:34 | 0/0/0 | 0/0/0 | 0/0/0 | 110,805/3,359 | einfracz / qwen3.8-27b | 18 | 3/12 | 18/0 | 0 |

## Coverage

- **PubMed hits:** 266 matched, 91 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caro_2019.pdf` | Caro L et al., Pharmacokinetics of elbasvir and grazop…, European journal of clinica… (2019) | popPK | 8 | [10.1007/s00228-018-2585-3](https://doi.org/10.1007/s00228-018-2585-3) | [30680407](https://pubmed.ncbi.nlm.nih.gov/30680407) | The paper reports a population pharmacokinetic study for elbasvir in humans, but the specific compartmental parameter values (clearance, volume) are not listed in the provided text, only AUC and GMRs. |

<sub>queue written 2026-10-07 12:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR rates) in subgroups based on HCV genotype and resistance-associated substitutions, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| popPK | Asante-Appiah_2017 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (EC50) and resistance analysis for elbasvir in HCV replicons, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Asante-Appiah_2019 | irrelevant | 0 | 0 | The paper describes in vitro antiviral activity and resistance mechanisms of elbasvir in HCV replicons, not pharmacokinetic parameters. |
| PGx | Asselah_2020 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR rates) in HCV Genotype 4 patients and does not report pharmacogenomic effects on PK or PD parameters of elbasvir. |
| PGx | Boerekamps_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of elbasvir in acute HCV but does not analyze pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Caro_2017 | not_relevant | 0 | 0 | The paper studies the effect of hepatic impairment on the pharmacokinetics of Grazoprevir, not a pharmacogenomic variant effect on elbasvir. |
| popPK | Caro_2019 | relevant | 8 | 2 | The paper reports a population pharmacokinetic study for elbasvir in humans, but the specific compartmental parameter values (clearance, volume) are not listed in the provided text, only AUC and GMRs. |
| PGx | Carrion_2016 | not_relevant | 0 | 0 | The paper is a general review of the safety and efficacy of elbasvir/grazoprevir and does not report specific pharmacogenomic associations between genetic variants and PK/PD parameters. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis comparing two HCV treatment regimens and does not report any pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| PGx | El_2016 | not_relevant | 0 | 0 | The paper is a general review of elbasvir/grazoprevir efficacy and safety and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Evon_2022 | irrelevant | 0 | 0 | The study reports patient-reported outcome measures (symptoms and well-being) rather than pharmacokinetic parameters for elbasvir. |
| PGx | Fabrizi_2016 | not_relevant | 0 | 0 | The text is a review of clinical efficacy and safety of elbasvir in renal patients, containing no data on pharmacogenomic effects or PK/PD parameters. |
| PGx | Fathi_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical efficacy (SVR rates) for HCV genotypes, not a pharmacogenomic study of a PK/PD parameter. |
| PGx | Gamal_2016 | not_relevant | 0 | 0 | The text is a general review of the drug's pharmacokinetics and efficacy but contains no information regarding gene variants or pharmacogenomic effects. |
| PGx | Gane_2017 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial for HCV and reports no pharmacogenomic effects on PK or PD parameters. |
| PGx | Gentile_2016 | not_relevant | 0 | 0 | The paper is a clinical review of Hepatitis C direct-acting antivirals and does not report pharmacogenomic effects on PK/PD parameters for elbasvir. |
| popPK | Gonzalez-Peralta_2023 | irrelevant | 2 | 3 | The study reports exposure metrics (AUC) and refers to clearance (CL/F) but does not provide quantitative disposition parameters (numeric CL, V, or ka) or a full compartmental model in the provided text. |
| PGx | Gonzalez-Peralta_2023 | not_relevant | 0 | 0 | The study assesses population pharmacokinetics in pediatric patients but does not report the influence of specific gene variants or genotypes on elbasvir PK/PD parameters. |
| PGx | Gottwein_2018 | not_relevant | 0 | 0 | The paper reports in vitro virological resistance of HCV to various NS5A inhibitors, including elbasvir, based on viral genotypes and amino acid mutations, not the pharmacogenomics of human patients. |
| PGx | Guo_2019 | not_relevant | 1 | 10 | The paper explicitly reports pharmacogenomic effects on grazoprevir PK, not elbasvir. |
| PGx | Huličiak_2022 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (ABCB1 inhibition) of elbasvir in vitro, not the effect of gene variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | The text is a general review of hepatitis C treatment policies and costs in Hungary and does not contain any pharmacogenomic data or PK/PD analysis for elbasvir. |
| PGx | Ibrahim_2023 | not_relevant | 0 | 0 | The paper is an in silico study of P-gp inhibition and does not report pharmacogenomic effects on PK/PD parameters for elbasvir. |
| PGx | Jacobson_2019 | not_relevant | 1 | 0 | The study investigates the effect of a disease phenotype (cirrhosis) on pharmacokinetics, but does not assess any gene variants or host genotypes. |
| PGx | Karaoui_2017 | not_relevant | 0 | 0 | The text is a general review of elbasvir's chemistry, pharmacokinetics, and efficacy, and does not report on specific gene variants or genotypes affecting its PK or PD. |
| PGx | Kiang_2018 | not_relevant | 1 | 1 | The paper discusses the clinical pharmacokinetics and drug-drug interactions of elbasvir, but does not report any specific pharmacogenomic effects (genetic variants) on its PK/PD parameters. |
| PGx | Kohli_2016 | not_relevant | 0 | 0 | The paper reviews clinical efficacy (SVR12) and safety of DAAs in patients with CKD, but does not report pharmacogenomic variations affecting PK or PD parameters of elbasvir. |
| PGx | Lagging_2016 | not_relevant | 0 | 0 | The paper reports clinical trial results for grazoprevir and contains no data on pharmacogenomics, gene variants, or specific PK/PD parameter changes due to genetic differences. |
| PGx | Lawitz_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR12) based on HCV genotype, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of elbasvir. |
| PGx | Marshall_2018 | not_relevant | 0 | 0 | The paper examines pharmacokinetics in relation to hepatic impairment (organ function), not gene variants, genotypes, or pharmacogenomic phenotypes. |
| PGx | Mattingly_2017 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis comparing HCV treatment regimens and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Nagral_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety in thalassemia patients but does not report pharmacogenomic effects on elbasvir PK or PD. |
| PGx | Onofrio_2021 | not_relevant | 0 | 0 | The study evaluates clinical efficacy (SVR rates) of sofosbuvir/velpatasvir/voxilaprevir in HCV patients and does not report pharmacokinetic or pharmacodynamic changes driven by specific gene variants. |
| popPK | Ramirez_2016 | irrelevant | 0 | 0 | The study is an in vitro virology analysis of HCV resistance and susceptibility, not a pharmacokinetic study for elbasvir. |
| PGx | Reau_2017 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (PPI use), not a pharmacogenomic effect (gene variant) on pharmacokinetics or pharmacodynamics. |
| PGx | Ridruejo_2020 | not_relevant | 0 | 0 | The paper investigates the efficacy and safety of DAA therapy (including elbasvir) in patients with chronic kidney disease, but does not report any pharmacogenomic analysis or the effect of specific gene variants on the PK/PD parameters of elbasvir. |
| PGx | Roth_2015 | not_relevant | 0 | 0 | The study evaluates efficacy and safety in CKD patients but does not report pharmacogenomic effects of gene variants on elbasvir PK or PD parameters. |
| popPK | Ruiz_2021 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study of HCV treatment in patients with inherited blood disorders, containing no pharmacokinetic parameters (CL, V, etc.) for elbasvir. |
| PGx | Sulejmani_2016 | not_relevant | 0 | 0 | The paper is a review of the pharmacokinetics and pharmacodynamics of elbasvir but does not report pharmacogenomic effects (gene variants) on these parameters. |
| PGx | Tsai_2020 | not_relevant | 0 | 0 | The study evaluates clinical efficacy and safety of elbasvir/grazoprevir in HCV patients but does not report pharmacogenomic effects (gene variants influencing PK/PD parameters). |
| popPK | Yeh_2018 | irrelevant | 0 | 0 | The study reports pharmacodynamic antiviral activity (HCV RNA decline) and safety, but provides no quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Yeh_2018 | not_relevant | 0 | 0 | The study evaluates antiviral activity and safety across HCV genotypes but does not assess the impact of host gene variants on PK or PD parameters. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | The paper describes the chemical discovery and SAR of a new compound (MK-6169) and its activity against HCV resistance, but does not report pharmacogenomic effects on PK/PD parameters for elbasvir. |
| PGx | Zamor_2018 | not_relevant | 0 | 0 | The paper reports a clinical outcome (SVR12) associated with race (a phenotype), but does not report a pharmacokinetic or pharmacodynamic parameter of elbasvir affected by a specific genetic variant. |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The paper is a collection of abstract summaries and meeting highlights from the 2017 AASLD, not a primary pharmacogenomic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Belbasvir%5D&body=Drug%3A%20elbasvir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_elbasvir/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
