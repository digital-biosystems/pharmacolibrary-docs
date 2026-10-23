<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;Elexacaftor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Elexacaftor_Jiang2025_reference&quot;,&quot;label&quot;:&quot;Jiang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_elexacaftor/Elexacaftor_Jiang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Elexacaftor_Truong2025_reference&quot;,&quot;label&quot;:&quot;Truong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_elexacaftor/Elexacaftor_Truong2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Elexacaftor

- **generic name:** Elexacaftor
- **ATC codes:** `R07AX32`
- **DrugBank:** [DB15444](https://go.drugbank.com/drugs/DB15444) · **PubChem:** not captured
- **molar mass:** 597.66 g/mol (C26H34F3N7O4S) — DrugBank
- **groups:** approved, investigational

## About

Elexacaftor is a respiratory medicine, classified under other respiratory system products. It is an approved medicine, though detailed information on where and how widely it is used is not available here.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72184089](https://www.wikidata.org/wiki/Q72184089) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| elexacaftor | parent | 597.66 | C26H34F3N7O4S | DrugBank | — | Truong_2025 |
| elexacaftor, ivacaftor, tezacaftor | metabolite | 597.657 | C26H34F3N7O4S | PubChem | [134587348](https://pubchem.ncbi.nlm.nih.gov/compound/134587348) | Truong_2025 |

## Start here

> **Truong_2025_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> children with cystic fibrosis, n = ,. [Run it in the simulator](drugs/drug_elexacaftor/Elexacaftor_Truong2025_reference.md?tab=Simulation) · [record](drugs/drug_elexacaftor/Elexacaftor_Truong2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 21.6 | L/h | 21.6 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Jiang_2025_reference](drugs/drug_elexacaftor/Elexacaftor_Jiang2025_reference.md) |
| V | V/F | 140 | L | 140.0 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Jiang_2025_reference](drugs/drug_elexacaftor/Elexacaftor_Jiang2025_reference.md) |
| ka | kabs | 1.3 | 1/h | 1.3 h−1 | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Jiang_2025_reference](drugs/drug_elexacaftor/Elexacaftor_Jiang2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Jiang_2025_reference](drugs/drug_elexacaftor/Elexacaftor_Jiang2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jiang L et al., Drug-Drug Interactions and Individualiz…, Drug design, development an… (2025) | [10.2147/dddt.s547878](https://doi.org/10.2147/dddt.s547878) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Truong_2025_reference](drugs/drug_elexacaftor/Elexacaftor_Truong2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Truong NH et al., Elexacaftor/Tezacaftor/Ivacaftor Popula…, Clinical and translational… (2025) | [10.1111/cts.70245](https://doi.org/10.1111/cts.70245) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.60).">human + animal</span> | **CFTR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Stanleigh_2025](drugs/drug_elexacaftor/pgx_Stanleigh_2025_CFTR_Q100.md) | Stanleigh N et al., The response of rare CFTR mutations to…, ERJ open research (2025) | [10.1183/23120541.01308-2024](https://doi.org/10.1183/23120541.01308-2024) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:59 | 14:26 | 2/0/0 | 0/0/0 | 0/0/1 | 614,182/33,602 | einfracz / qwen3.8-27b | 28 | 2/24 | 28/0 | 0 |

## Coverage

- **PubMed hits:** 191 matched, 79 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magnas_2025.pdf` | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) | [40405059](https://pubmed.ncbi.nlm.nih.gov/40405059) | The study reports a population PK model for elexacaftor, but specific numeric parameter values (CL, V, etc.) are not present in the extracted abstract; only AUC ranges are provided. |
| `Sanders_2026.pdf` | Sanders M et al., Evaluation of the drug interaction betw…, Journal of cystic fibrosis… (2026) | popPK | 7 | [10.1016/j.jcf.2025.09.002](https://doi.org/10.1016/j.jcf.2025.09.002) | [40957819](https://pubmed.ncbi.nlm.nih.gov/40957819) | The study reports non-compartmental PK parameters (Cmax, AUC, and GMRs) for elexacaftor in humans, but specific numeric values for Cmax and AUC are not provided in the abstract text, only the ratios. |
| `Hong_2023.pdf` | Hong E et al., Safety of elexacaftor/tezacaftor/ivacaf…, Pharmacotherapy (2023) | pd | 5 | [10.1002/phar.2786](https://doi.org/10.1002/phar.2786) | [36866442](https://www.ncbi.nlm.nih.gov/pubmed/36866442) | metadata signals extractable PD data (PK-PD) |
| `Hong_2024.pdf` | Hong E et al., Preliminary evidence for sustained effi…, Journal of cystic fibrosis… (2024) | pd | 5 | [10.1016/j.jcf.2023.11.015](https://doi.org/10.1016/j.jcf.2023.11.015) | [38036321](https://www.ncbi.nlm.nih.gov/pubmed/38036321) | metadata signals extractable PD data (EC50) |
| `Smith_2022.pdf` | Smith M et al., Ivacaftor-elexacaftor-tezacaftor and ta…, Journal of cystic fibrosis… (2022) | pgx | 7 | [10.1016/j.jcf.2021.05.008](https://doi.org/10.1016/j.jcf.2021.05.008) | [34130909](https://www.ncbi.nlm.nih.gov/pubmed/34130909) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T17:52:55.848688+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alicandro_2026 | not_relevant | 0 | 0 | The paper reports general clinical efficacy of elexacaftor in pediatric CF patients but does not analyze pharmacokinetic or pharmacodynamic parameters stratified by specific gene variants or genotypes. |
| popPK | Barreca_2024 | irrelevant | 0 | 0 | The paper focuses on in vitro identification of novel CFTR correctors and mechanistic insights, with no pharmacokinetic parameters or disposition studies for elexacaftor. |
| popPK | Bendixen_2025 | irrelevant | 0 | 0 | The study investigates the impact of elexacaftor on pulmonary pathogen prevalence and infection status, not its pharmacokinetic parameters. |
| popPK | Chan_2025 | irrelevant | 0 | 0 | The study focuses on glycemic control and insulin secretion in patients with cystic fibrosis, not on the pharmacokinetic disposition parameters of elexacaftor. |
| PGx | Daines_2023 | not_relevant | 0 | 0 | The paper reports clinical safety and efficacy (lung function, safety events) of elexacaftor but does not report pharmacokinetic or pharmacodynamic parameter changes based on specific gene variants. |
| PGx | Daines_2025 | not_relevant | 0 | 0 | The paper reports general safety and efficacy outcomes for a specific genotype subgroup but does not analyze how gene variants affect pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dallmann_2026 | irrelevant | 0 | 0 | The paper is a general review of PBPK models for fetal exposure and does not report quantitative PK parameters for elexacaftor. |
| PGx | Donaldson_2024 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic effects of the drug on disease physiology (mucociliary clearance) but does not analyze how genetic variants affect these parameters or pharmacokinetics. |
| PGx | Fragoso_2024 | not_relevant | 0 | 0 | The paper is a real-world observational study on clinical efficacy and safety, reporting no pharmacogenomic analysis of how genotypes affect PK/PD parameters. |
| PGx | Goralski_2023 | not_relevant | 3 | 4 | The paper describes a clinical trial with PK and PD endpoints and mentions a post hoc analysis by genotype, but the provided text does not report the results of that stratified analysis nor a specific pharmacogenomic effect size. |
| PGx | Graeber_2022 | not_relevant | 0 | 0 | The paper compares lung outcomes (LCI/MRI) in patients with different F508del genotypes treated with the drug, but does not report how genetic variants affect the pharmacokinetics or pharmacodynamics of the drug itself. |
| PGx | Gramegna_2024 | not_relevant | 0 | 0 | The paper examines baseline pulmonary physiology (lung volumes) as predictors of clinical response (FEV1 change) to elexacaftor/tezacaftor/ivacaftor and does not report the effect of any specific gene variant or genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Gravelle_2025 | irrelevant | 0 | 0 | The study examines the relationship between inflammation and vitality outcomes in cystic fibrosis patients and does not report any pharmacokinetic parameters for elexacaftor. |
| PGx | Haq_2022 | not_relevant | 0 | 0 | The text is a general review of CFTR genetics and modulator therapies; it discusses therapeutic efficacy based on genotype (precision medicine) but does not report pharmacokinetic or pharmacodynamic parameters specific to elexacaftor (e.g., AUC, Cmax, half-life) or genotype-dependent changes in its PK/PD. |
| popPK | Harwood_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tobramycin, not elexacaftor, which is only listed as a concomitant medication. |
| popPK | Hong_2023 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Hong_2024 | irrelevant | 2 | 0 | The paper focuses on efficacy in 3 case reports and a PBPK model simulation rather than reporting quantitative population PK parameter estimates (CL, V, etc.) derived from clinical data. |
| popPK | Hoppe_2025 | irrelevant | 0 | 0 | The study evaluates vanzacaftor–tezacaftor–deutivacaftor, with elexacaftor serving only as a run-in/comparator agent, and no PK parameters for elexacaftor are reported. |
| PGx | Hoppe_2025 | not_relevant | 0 | 0 | The study evaluates the safety and efficacy of a new drug combination in a population but does not report a pharmacogenomic effect (gene variant impact) on PK/PD parameters. |
| popPK | James_2024 | irrelevant | 0 | 0 | This is a clinical study on iron status biomarkers, not a pharmacokinetic study, and reports no PK parameters for elexacaftor. |
| PGx | Januska_2020 | not_relevant | 0 | 0 | The paper discusses CFTR variant prevalence and access to elexacaftor therapy, but does not report any pharmacokinetic or pharmacodynamic data or effects of genotypes on drug parameters. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for clozapine, not elexacaftor. |
| PGx | Keating_2025 | not_relevant | 0 | 0 | The paper compares the efficacy and safety of two CFTR modulator regimens but does not analyze how specific gene variants affect the pharmacokinetic or pharmacodynamic parameters of elexacaftor. |
| PGx | Keens_2024 | not_relevant | 0 | 0 | The paper is a real-world observational study of clinical efficacy (FEV1, BMI, exacerbations) and does not report pharmacokinetic data or specific genotype-dependent drug response differences. |
| PGx | King_2022 | not_relevant | 0 | 0 | The paper is a broad review of CFTR modulators' clinical outcomes and challenges, not a study reporting pharmacogenomic effects on the PK/PD parameters of elexacaftor. |
| PGx | Kogias_2026 | not_relevant | 5 | 5 | The paper reports PD response to ETI stratified by genotype but concludes the genotype effect is minor and does not report a fitted pharmacogenomic effect size. |
| popPK | Magnas_2025 | relevant | 10 | 3 | The study reports a population PK model for elexacaftor, but specific numeric parameter values (CL, V, etc.) are not present in the extracted abstract; only AUC ranges are provided. |
| popPK | Magnas_2026 | relevant | 8 | 4 | The study is a human population PK analysis of elexacaftor (ELX) as part of the ETI combination, reporting specific effects on ELX clearance (19% decrease) and using a compartmental model, though full parameter tables appear to be in supplementary material or figures not fully detailed in the text. |
| popPK | Mainz_2022 | irrelevant | 0 | 0 | The study focuses on gastrointestinal symptom scores (CFAbd-Score) and pulmonary function, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for elexacaftor. |
| PGx | Mall_2022 | not_relevant | 0 | 0 | The paper reports the clinical efficacy (PD endpoints like LCI, sweat chloride) of the drug in a specific patient population (F508del carriers) but does not report pharmacokinetic parameters or effects of gene variants on the drug's PK/PD relationship. |
| PGx | Mall_2025 | not_relevant | 2 | 2 | The paper reports clinical safety and efficacy of elexacaftor in CF patients but does not analyze the effect of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Middleton_2019 | not_relevant | 2 | 5 | The paper reports clinical efficacy outcomes for elexacaftor in patients with the CFTR Phe508del mutation, but does not report pharmacokinetic (PK) parameters or a pharmacogenomic study of drug-metabolizing genes. |
| PGx | Nussstein_2026 | not_relevant | 0 | 0 | The paper compares disease biomarkers (sputum rheology, inflammation) between PCD and CF patients, rather than reporting pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Rodriguez_2025 | not_relevant | 0 | 0 | The study investigates the predictive value of organoid responses and identifies SNPs associated with *response variability*, but does not report a direct pharmacogenomic effect on a specific PK or PD parameter of elexacaftor. |
| popPK | Rolsma_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of cefepime, meropenem, and piperacillin-tazobactam, with elexacaftor mentioned only as a concomitant medication in the context of covariate analysis, and no PK parameters for elexacaftor are reported. |
| popPK | Sagel_2026 | irrelevant | 0 | 0 | The study focuses on inflammatory markers and clinical outcomes in cystic fibrosis patients, not on the pharmacokinetic disposition parameters of elexacaftor. |
| popPK | Sanders_2026 | relevant | 7 | 4 | The study reports non-compartmental PK parameters (Cmax, AUC, and GMRs) for elexacaftor in humans, but specific numeric values for Cmax and AUC are not provided in the abstract text, only the ratios. |
| PGx | Sanders_2026 | not_relevant | 0 | 10 | The paper reports a drug-drug interaction (rifabutin effect on ETI PK), not a pharmacogenomic effect (gene variant/genotype effect). |
| popPK | Sanders_2026_2 | irrelevant | 1 | 0 | The paper is a PBPK modeling study focused on drug-drug interactions (DDIs) predicting relative exposure changes (AUC ratios), rather than a study reporting absolute quantitative disposition parameters (CL, V, ka) or a standalone PK model for elexacaftor. |
| popPK | Semenchuk_2024 | irrelevant | 0 | 0 | The paper is a longitudinal observational study on lung function and BMI in cystic fibrosis patients, not a pharmacokinetic study, and reports no PK parameters for elexacaftor. |
| popPK | Shirley_2026 | irrelevant | 0 | 0 | The paper reports on bone mineral density changes, not pharmacokinetic parameters for elexacaftor. |
| PGx | Sinkey_2026 | not_relevant | 0 | 0 | The paper reports a case study of pharmacokinetics in a specific mother-child dyad but does not analyze how genetic variants (other than the CFTR genotype causing the disease) modulate the drug's PK or PD parameters. |
| PGx | Smith_2022 | not_relevant | 2 | 1 | The paper discusses a drug-drug interaction between CFTR modulators and tacrolimus, not a pharmacogenomic effect of a gene variant on elexacaftor's PK/PD. |
| PGx | Solomon_2024 | not_relevant | 4 | 10 | The paper evaluates the clinical efficacy of elexacaftor in a specific CFTR variant subgroup (N1303K) but does not compare pharmacokinetic parameters or report differential pharmacodynamic responses relative to a control genotype to establish a pharmacogenomic PK/PD effect. |
| PGx | Stahl_2024 | not_relevant | 0 | 0 | The study reports clinical efficacy (PD endpoints like LCI, FEV1, MRI) for specific CF genotypes but does not report pharmacokinetic (PK) parameters or differences in drug exposure based on gene variants. |
| PGx | Terlizzi_2021 | not_relevant | 4 | 10 | The paper reports clinical efficacy and a PD marker (sweat chloride) improvement in patients with a specific CFTR genotype, but it does not report how a gene variant changes pharmacokinetic parameters or specific pharmacodynamic effect sizes (e.g., Emax, EC50) of the drug itself. |
| PGx | Truong_2025 | not_relevant | 0 | 0 | The study characterizes population pharmacokinetics based on demographic covariates (age, body weight) but does not investigate the impact of genetic variants or genotypes. |
| popPK | Tsai_2020 | relevant | 9 | 2 | The paper is a PBPK modeling study for elexacaftor, but the specific quantitative parameter values (CL, V, Q, ka) are explicitly stated to be in Supplementary Table S4, which is not provided in the evidence. |
| PGx | Uluer_2023 | not_relevant | 1 | 1 | The study evaluates CFTR mutation status as an inclusion criterion for efficacy endpoints (ppFEV1, sweat chloride) but does not report pharmacokinetic or pharmacodynamic parameters of elexacaftor driven by specific gene variants (pharmacogenomics). |
| popPK | Vonk_2025 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of tezacaftor and ivacaftor; elexacaftor is only mentioned in passing (as part of a newer triple therapy) and no PK parameters or values for elexacaftor are provided. |
| PGx | Wainwright_2025 | not_relevant | 2 | 0 | The paper reports clinical outcomes (efficacy/safety) in patients with specific CFTR genotypes but does not report pharmacokinetic parameters or genotype-dependent pharmacodynamic effect sizes. |
| PGx | Weitzel_2024 | not_relevant | 2 | 4 | The paper describes a clinical case series of adverse events (hyperbilirubinemia) in patients with Gilbert syndrome, but does not report quantitative pharmacokinetic or pharmacodynamic parameters or fitted effect sizes for elexacaftor. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 17:53 UTC</sub>
