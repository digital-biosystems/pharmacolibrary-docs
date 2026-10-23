<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;imeglimin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imeglimin_Tomita2022_reference&quot;,&quot;label&quot;:&quot;Tomita_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# imeglimin

- **generic name:** imeglimin
- **ATC codes:** `A10BX15`
- **DrugBank:** [DB12509](https://go.drugbank.com/drugs/DB12509) · **PubChem:** [CID 24812808](https://pubchem.ncbi.nlm.nih.gov/compound/24812808)
- **molar mass:** 155.205 g/mol (C6H13N5) — DrugBank
- **groups:** investigational

## About

Imeglimin is a blood glucose lowering drug investigated for diabetes. It is classed as investigational and is not an approved medicine in major databases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6003719](https://www.wikidata.org/wiki/Q6003719) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| imeglimin | parent | 155.205 | C6H13N5 | DrugBank | [24812808](https://pubchem.ncbi.nlm.nih.gov/compound/24812808) | Tomita_2022 |

## Start here

> **Tomita_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> Japanese and Western patients with type 2 diabetes, n = 867. [Run it in the simulator](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md?tab=Simulation) · [record](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 66.9 | L/h | 66.9 L/h | Japanese and Western patients with type 2 diabetes | 867 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tomita_2022_reference](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md) |
| V | V1 | 142 | L | 142 L | Japanese and Western patients with type 2 diabetes | 867 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tomita_2022_reference](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md) |
| ka | kabs | 0.144 | 1/h | 0.144 h−1 | Japanese and Western patients with type 2 diabetes | 867 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tomita_2022_reference](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tomita_2022_reference](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Tomita Y et al., Imeglimin population pharmacokinetics a…, Clinical and translational… (2022) | [10.1111/cts.13221](https://doi.org/10.1111/cts.13221) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=imeglimin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PRKAA1 (modulator), PRKAB1 (modulator), PRKAG1 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:20 | 3:26 | 1/0/0 | 0/0/0 | 0/0/0 | 288,893/11,074 | einfracz / qwen3.8-27b | 13 | 2/14 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 56 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kitamura_2023.pdf` | Kitamura A et al., Pharmacokinetics and Safety of Imeglimi…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2218](https://doi.org/10.1002/jcph.2218) | [36847203](https://pubmed.ncbi.nlm.nih.gov/36847203) | The paper reports PK data for imeglimin, but specific numeric parameter values (Cmax, AUC, Clearance) are only described qualitatively (e.g., "higher," "decreased") without the actual figures provided in the evidence. |
| `Fouqueray_2020.pdf` | Fouqueray P et al., Imeglimin Does Not Induce Clinically Re…, Clinical pharmacokinetics (2020) | popPK | 6 | [10.1007/s40262-020-00886-y](https://doi.org/10.1007/s40262-020-00886-y) | [32270440](https://pubmed.ncbi.nlm.nih.gov/32270440) | The study is a DDI study for imeglimin in humans, but the abstract only reports comparative changes and PK parameters for the co-administered drugs (metformin/sitagliptin), with no numeric imeglimin parameter values provided in the evidence. |
| `Clémence_2020.pdf` | Clémence C et al., In Vitro Investigation, Pharmacokinetic…, Drug metabolism and disposi… (2020) | popPK | 5 | [10.1124/dmd.120.000154](https://doi.org/10.1124/dmd.120.000154) | [33020063](https://pubmed.ncbi.nlm.nih.gov/33020063) | The paper is a comprehensive PK/dosimetry study of imeglimin, but the provided evidence (abstract) only contains qualitative descriptions (e.g., "absorption was good 50%-80%") and lacks specific numeric PK parameters like CL, V, or ka. |

<sub>queue written 2026-10-07 21:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alamer_2023 | irrelevant | 1 | 0 | The study focuses on formulation and release characterization of imeglimin nanofibers in vitro/physicochemically, without reporting quantitative PK parameters like CL, V, or ka in living subjects. |
| PD | Alamer_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro characterization of imeglimin nanofibers, reporting no pharmacodynamic or exposure-response data. |
| popPK | Aoyagi_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of mitochondrial quality control and insulin secretion in db/db mice, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for imeglimin. |
| popPK | Barseem_2025 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying imeglimin in pharmaceutical formulations, not a pharmacokinetic study. |
| PD | Barseem_2025 | not_relevant | 0 | 0 | The paper describes a smartphone-based colorimetric analytical method for quantifying imeglimin concentration, not a pharmacodynamic or exposure-response study. |
| popPK | Chevalier_2020 | irrelevant | 2 | 0 | The study is a drug-drug interaction study that reports only relative changes (1.3-fold) in Cmax and AUC, lacking absolute quantitative PK parameters like clearance (CL), volume of distribution (V), or half-life (t1/2). |
| popPK | Chevalier_2021 | irrelevant | 1 | 0 | The abstract reports only relative changes (fold-increases) in Cmax and AUC between groups but does not provide absolute quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Chevalier_2023 | irrelevant | 1 | 0 | This is a review article without original quantitative parameter values (CL, V, ka) for imeglimin. |
| PD | Chevalier_2023 | not_relevant | 1 | 0 | The text is a clinical pharmacology review focusing exclusively on pharmacokinetics, absorption mechanisms, and drug-drug interactions, with no mention of pharmacodynamic models, exposure-response relationships, or numeric PD parameters. |
| popPK | Clémence_2020 | relevant | 5 | 2 | The paper is a comprehensive PK/dosimetry study of imeglimin, but the provided evidence (abstract) only contains qualitative descriptions (e.g., "absorption was good 50%-80%") and lacks specific numeric PK parameters like CL, V, or ka. |
| popPK | Dubourg_2022 | irrelevant | 0 | 0 | This is a Phase 3 clinical trial focusing on safety and efficacy (HbA1c) with no reporting of pharmacokinetic parameters. |
| popPK | Fouqueray_2020 | relevant | 6 | 0 | The study is a DDI study for imeglimin in humans, but the abstract only reports comparative changes and PK parameters for the co-administered drugs (metformin/sitagliptin), with no numeric imeglimin parameter values provided in the evidence. |
| popPK | Fujisawa_2025 | irrelevant | 0 | 0 | This is a retrospective clinical efficacy and safety study reporting HbA1c and adverse events, containing no pharmacokinetic parameters. |
| popPK | Giruzzi_2021 | irrelevant | 0 | 0 | no_text gate: only 9 chars of text extracted (&lt; 400) |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of novel DPP-4 inhibitors inspired by imeglimin, not on the pharmacokinetics of imeglimin itself. |
| PD | Gupta_2023 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo dose-dependent effects, but lacks a formal PK/PD model or quantitative exposure-response analysis for imeglimin. |
| popPK | Hagi_2026 | irrelevant | 0 | 0 | The paper is a machine learning analysis of clinical trial outcomes (HbA1c predictors) and does not report any pharmacokinetic parameters for imeglimin. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper proposes a general methodological framework for modeling drug-drug interactions and does not mention imeglimin or report specific PK parameters for this drug. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for imeglimin. |
| popPK | Inoue_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of action (metabolic effects on beta-cells) rather than pharmacokinetic parameters. |
| popPK | Ishiguro_2025 | irrelevant | 0 | 0 | The study focuses on mechanistic effects on mitochondrial function and gene expression, not pharmacokinetic parameters. |
| popPK | Kaji_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of imeglimin's effects on mitochondrial dysfunction and liver pathophysiology in mice and in vitro, containing no pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Kitamura_2023 | relevant | 8 | 2 | The paper reports PK data for imeglimin, but specific numeric parameter values (Cmax, AUC, Clearance) are only described qualitatively (e.g., "higher," "decreased") without the actual figures provided in the evidence. |
| popPK | Kogame_2019 | irrelevant | 0 | 0 | The study investigates fasiglifam, not imeglimin. |
| popPK | Kuznetsov_2022 | irrelevant | 1 | 1 | The paper is a review of the mechanism of action and does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for imeglimin. |
| popPK | Lachaux_2020 | irrelevant | 0 | 0 | The study is a mechanistic/physiological investigation of cardiovascular and renal effects in rats, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.). |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper studies the hepatotoxicity mechanisms of fasiglifam (TAK-875) and does not report pharmacokinetic parameters for imeglimin. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper describes the discovery of FFA1 agonists (compound 11) and uses a different drug (TAK-875) as a PK comparator; imeglimin is not the subject drug and no imeglimin PK parameters are reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of imeglimin's therapeutic effects in a MASLD model and does not report any pharmacokinetic disposition parameters. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of HWL-066 (a FFA1 agonist), not imeglimin. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper is a neuroscience study on traumatic brain injury in mice where imeglimin is used as a mechanistic probe (ELF1 inhibitor), and no pharmacokinetic parameters (CL, V, t1/2) are reported. |
| popPK | Mansour_2026 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying imeglimin and its degradation products, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mansour_2026 | not_relevant | 0 | 0 | The paper describes a stability-indicating HPLC method for quantifying imeglimin in tablets and does not contain any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Mima_2023 | irrelevant | 2 | 0 | This is a small case series focusing on safety and efficacy (glycemic control) in dialysis patients, reporting no quantitative pharmacokinetic parameters (CL, V, etc.) for imeglimin. |
| popPK | Molloy_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Fasiglifam (TAK-875), not imeglimin. |
| popPK | Nihei_2026 | irrelevant | 1 | 0 | The paper is a preclinical efficacy study evaluating the neuroprotective effects of imeglimin in diabetic rats, and it does not report pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Nowak_2022 | irrelevant | 2 | 1 | This is a review article that cites external sources for pharmacokinetic parameters (half-life, bioavailability) but does not report original quantitative disposition parameters (CL, V, ka) or population PK model values. |
| popPK | Pacini_2015 | irrelevant | 0 | 0 | The study assesses insulin secretion and beta-cell function using a clamp technique, rather than reporting pharmacokinetic parameters (CL, V, ka, etc.) for imeglimin. |
| popPK | Paskeviciene_2025 | irrelevant | 0 | 0 | The study investigates mitochondrial mechanisms and ischemic brain damage in rats, not population pharmacokinetic parameters (CL, V, ka, etc.) of imeglimin. |
| popPK | Permana_2024 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (HbA1c reduction) and safety, containing no pharmacokinetic parameters or disposition data for imeglimin. |
| PD | Permana_2024 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials reporting dose-response trends (HbA1c reduction vs. dose) but does not provide a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters like Emax or EC50. |
| popPK | Qiang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TAK-875, not imeglimin. |
| popPK | Saboo_2026 | irrelevant | 0 | 0 | The study is a clinical outcomes cohort reporting efficacy (HbA1c) and safety, containing no pharmacokinetic data. |
| popPK | Sanada_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on the anti-atherosclerotic effects of imeglimin in mice and does not report pharmacokinetic parameters (CL, V, t1/2, etc.) for the drug. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The study investigates the effects of imeglimin on circadian clock gene expression in mice and does not report pharmacokinetic parameters. |
| popPK | Siam_2024 | irrelevant | 0 | 0 | This is a review article discussing the epidemiology and pathophysiology of diabetes and cardiovascular disease; it does not report any quantitative pharmacokinetic parameters for imeglimin. |
| popPK | Sugawara_2025 | irrelevant | 0 | 0 | The study focuses on intestinal mechanisms and microbiota, not on pharmacokinetic parameters like clearance or volume. |
| PD | Sugawara_2025 | not_relevant | 0 | 0 | The paper investigates intestinal mechanisms (RNA-seq, microbiome, glucose dynamics) using fixed doses or concentrations without modeling a concentration-effect relationship or reporting PD parameters. |
| popPK | Tajima_2026 | irrelevant | 0 | 0 | The study investigates insulin secretion and sensitivity mechanisms via clamps and tracers, not the pharmacokinetic disposition parameters (CL, V, ka) of imeglimin. |
| PD | Tomita_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose adjustment based on renal function, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Tsuno_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on alpha-cell biology and does not report any pharmacokinetic parameters. |
| popPK | Usui_2025 | irrelevant | 0 | 0 | The study focuses on insulin and incretin secretion (pharmacodynamics) rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Wadie_2026 | relevant | 4 | 1 | The paper describes a bioequivalence study with PK parameters (Cmax, AUC) calculated for imeglimin, but the specific numeric values for these parameters are not present in the provided text (likely in Tables/Figures not included). |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of skeletal muscle atrophy and transcriptomic profiles in mice, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Yendapally_2020 | irrelevant | 1 | 0 | This is a review paper comparing the synthesis and properties of metformin and imeglimin, and the provided evidence contains no quantitative PK parameters for imeglimin. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no pharmacodynamic data, models, or parameters for imeglimin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimeglimin%5D&body=Drug%3A%20imeglimin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_imeglimin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 21:18 UTC</sub>
