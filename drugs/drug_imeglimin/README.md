<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;imeglimin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imeglimin_Tomita2022_reference&quot;,&quot;label&quot;:&quot;Tomita_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:37 | 3:35 | 1/0/0 | 1/0/0 | 0/0/0 | 286,865/12,374 | einfracz / qwen3.8-27b | 13 | 2/14 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.947). Primary extraction retained.">cross-check: partial</span> | [Tomita_2022_reference](drugs/drug_imeglimin/Imeglimin_Tomita2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 | Tomita Y et al., Imeglimin population pharmacokinetics a…, Clinical and translational… (2022) | [10.1111/cts.13221](https://doi.org/10.1111/cts.13221) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_18F_FDG](drugs/drug_imeglimin/pd_Sugawara_2025_18F_FDG.md) | [18F]FDG accumulation (cecal tissue) ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_18F_FDG_2](drugs/drug_imeglimin/pd_Sugawara_2025_18F_FDG_2.md) | [18F]FDG accumulation (intestinal wall and lumen) ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_Bifidobacterium](drugs/drug_imeglimin/pd_Sugawara_2025_Bifidobacterium.md) | Relative abundance of Bifidobacterium ← imeglimin · inhibition effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_Blood_glucose_levels](drugs/drug_imeglimin/pd_Sugawara_2025_Blood_glucose_levels.md) | Blood glucose levels ← imeglimin · inhibition effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_Enterococcus](drugs/drug_imeglimin/pd_Sugawara_2025_Enterococcus.md) | Relative abundance of Enterococcus ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_Escherichia](drugs/drug_imeglimin/pd_Sugawara_2025_Escherichia.md) | Relative abundance of Escherichia ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_GDF15](drugs/drug_imeglimin/pd_Sugawara_2025_GDF15.md) | Serum GDF15 concentration ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_Gdf15](drugs/drug_imeglimin/pd_Sugawara_2025_Gdf15.md) | Gdf15 expression (colon tissue) ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_GlUT1](drugs/drug_imeglimin/pd_Sugawara_2025_GlUT1.md) | GlUT1 expression (colon) ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_IgA_plasma_cells](drugs/drug_imeglimin/pd_Sugawara_2025_IgA_plasma_cells.md) | Proportion of IgA-producing plasma cells ← imeglimin · stimulation effect | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sugawara_2025_Shannon_index](drugs/drug_imeglimin/pd_Sugawara_2025_Shannon_index.md) | Gut microbial diversity (Shannon index) ← imeglimin · model not identified | — | Sugawara K et al., Similarities and differences in the int…, Diabetes, obesity & metabol… (2025) | [10.1111/dom.70075](https://doi.org/10.1111/dom.70075) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=imeglimin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PRKAA1 (modulator), PRKAB1 (modulator), PRKAG1 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 56 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chevalier_2021.pdf` | Chevalier C et al., Pharmacokinetics of Imeglimin in Subjec…, Clinical pharmacokinetics (2021) | popPK | 9 | [10.1007/s40262-020-00948-1](https://doi.org/10.1007/s40262-020-00948-1) | [33169345](https://pubmed.ncbi.nlm.nih.gov/33169345) | The study is a clinical PK study of imeglimin, but the evidence only provides relative fold-changes and ratios for Cmax and AUC, lacking absolute quantitative parameters like CL, V, or ka. |
| `Chevalier_2020.pdf` | Chevalier C et al., Lack of Drug-Drug Interaction Between C…, European journal of drug me… (2020) | popPK | 8 | [10.1007/s13318-020-00642-4](https://doi.org/10.1007/s13318-020-00642-4) | [32860624](https://pubmed.ncbi.nlm.nih.gov/32860624) | The study reports PK parameters for imeglimin, but only provides geometric mean ratios for Cmax and AUC relative to the DDI intervention, while the absolute numeric values (CL, V, T1/2, etc.) are not present in the provided evidence. |
| `Kitamura_2023.pdf` | Kitamura A et al., Pharmacokinetics and Safety of Imeglimi…, Journal of clinical pharmac… (2023) | popPK | 7 | [10.1002/jcph.2218](https://doi.org/10.1002/jcph.2218) | [36847203](https://pubmed.ncbi.nlm.nih.gov/36847203) | The study reports qualitative PK changes (increased exposure, decreased clearance) but lacks specific numeric parameter values (Cmax, AUC, CL, t1/2) in the provided text. |
| `Fouqueray_2020.pdf` | Fouqueray P et al., Imeglimin Does Not Induce Clinically Re…, Clinical pharmacokinetics (2020) | popPK | 5 | [10.1007/s40262-020-00886-y](https://doi.org/10.1007/s40262-020-00886-y) | [32270440](https://pubmed.ncbi.nlm.nih.gov/32270440) | The study assesses the pharmacokinetics of imeglimin in humans, but the specific quantitative disposition parameters for imeglimin (CL, V, ka) are not provided in the evidence, only stating that exposure was "similar to previous phase I studies" while providing detailed values only for the comparator drugs metformin and sitagliptin. |

<sub>queue written 2026-10-14T23:35:08.003858+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alamer_2023 | irrelevant | 1 | 0 | The paper describes the fabrication and characterization of a buccal nanofiber formulation, reporting only physical properties (diameter, disintegration time) and release profiles, with no in-vivo pharmacokinetic parameters or models. |
| PD | Alamer_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro characterization of imeglimin nanofibers, reporting no pharmacodynamic or exposure-response data. |
| popPK | Aoyagi_2024 | irrelevant | 0 | 0 | This is a mechanistic study on mitochondrial quality control and insulin secretion in mice, not a pharmacokinetic study, and no PK parameters (CL, V, t1/2) are reported. |
| popPK | Barseem_2025 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying imeglimin in pharmaceutical formulations, not a pharmacokinetic study. |
| PD | Barseem_2025 | not_relevant | 0 | 0 | The paper describes a smartphone-based colorimetric analytical method for quantifying imeglimin concentration, not a pharmacodynamic or exposure-response study. |
| popPK | Chevalier_2020 | relevant | 8 | 3 | The study reports PK parameters for imeglimin, but only provides geometric mean ratios for Cmax and AUC relative to the DDI intervention, while the absolute numeric values (CL, V, T1/2, etc.) are not present in the provided evidence. |
| popPK | Chevalier_2021 | relevant | 9 | 2 | The study is a clinical PK study of imeglimin, but the evidence only provides relative fold-changes and ratios for Cmax and AUC, lacking absolute quantitative parameters like CL, V, or ka. |
| popPK | Chevalier_2023 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetic properties without reporting original quantitative parameter values (CL, V, ka) in the provided text. |
| PD | Chevalier_2023 | not_relevant | 1 | 0 | The text is a clinical pharmacology review focusing exclusively on pharmacokinetics, absorption mechanisms, and drug-drug interactions, with no mention of pharmacodynamic models, exposure-response relationships, or numeric PD parameters. |
| popPK | Clémence_2020 | irrelevant | 2 | 0 | The abstract provides qualitative descriptions of pharmacokinetics but lacks specific quantitative disposition parameters (CL, V, ka, t1/2) or compartmental model values. |
| popPK | Dubourg_2022 | irrelevant | 0 | 0 | The study focuses on clinical efficacy and safety (HbA1c, adverse events) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Fouqueray_2020 | relevant | 5 | 0 | The study assesses the pharmacokinetics of imeglimin in humans, but the specific quantitative disposition parameters for imeglimin (CL, V, ka) are not provided in the evidence, only stating that exposure was "similar to previous phase I studies" while providing detailed values only for the comparator drugs metformin and sitagliptin. |
| popPK | Fujisawa_2025 | irrelevant | 0 | 0 | The study is a retrospective clinical trial focusing on efficacy and safety (HbA1c, adverse events) and contains no pharmacokinetic parameter data. |
| popPK | Giruzzi_2021 | irrelevant | 0 | 0 | no_text gate: only 9 chars of text extracted (&lt; 400) |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of novel DPP-4 inhibitors inspired by imeglimin, not on the pharmacokinetics of imeglimin itself. |
| PD | Gupta_2023 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo dose-dependent effects, but lacks a formal PK/PD model or quantitative exposure-response analysis for imeglimin. |
| popPK | Hagi_2026 | irrelevant | 0 | 0 | The paper is a pharmacodynamic/machine learning analysis of glycemic control predictors and does not report any pharmacokinetic parameters. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper describes a general mathematical framework for drug-drug interactions and does not report specific pharmacokinetic parameters for imeglimin. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for imeglimin. |
| popPK | Inoue_2025 | irrelevant | 0 | 0 | This is a mechanistic study focusing on cellular effects (proliferation/apoptosis) and metabolic intermediates (S-AMP) in islets, with no pharmacokinetic disposition parameters (CL, V, ka, etc.) for imeglimin. |
| popPK | Ishiguro_2025 | irrelevant | 0 | 0 | The paper focuses on mitochondrial function and gene expression in skeletal muscle, reporting no pharmacokinetic parameters. |
| popPK | Kaji_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on hepatic pathology and mitochondrial function in mice and in vitro hepatocytes, with no reported pharmacokinetic parameters such as clearance or volume. |
| popPK | Kitamura_2023 | relevant | 7 | 2 | The study reports qualitative PK changes (increased exposure, decreased clearance) but lacks specific numeric parameter values (Cmax, AUC, CL, t1/2) in the provided text. |
| popPK | Kogame_2019 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of fasiglifam, not imeglimin. |
| popPK | Kuznetsov_2022 | irrelevant | 3 | 2 | The paper is a review of the mechanism of action for imeglimin and only mentions basic PK parameters (Tmax, half-life) in the introduction without providing a quantitative PK model or disposition study. |
| popPK | Lachaux_2020 | irrelevant | 0 | 0 | The study focuses on cardiorenal functional and histological outcomes in rats, not pharmacokinetic disposition parameters. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper focuses on Fasiglifam (TAK-875) and transporter inhibition mechanisms, not the pharmacokinetics of imeglimin. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper studies a novel FFA1 agonist (Compound 11) and uses imeglimin (TAK-875) only as a comparator for pharmacokinetic properties, without reporting original PK parameter values for imeglimin. |
| popPK | Li_2026 | irrelevant | 1 | 0 | This is a mechanistic pharmacological study focused on molecular pathways and therapeutic effects in a murine model, with no pharmacokinetic parameter reporting. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of HWL-066 (an FFA1 agonist) and does not involve the drug imeglimin. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper is a mechanistic neuroscience study on traumatic brain injury in mice; imeglimin is used as a therapeutic agent to test microglial phenotypes, and no pharmacokinetic parameters (CL, V, etc.) are reported. |
| popPK | Mansour_2026 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying imeglimin and its degradation products, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mansour_2026 | not_relevant | 0 | 0 | The paper describes a stability-indicating HPLC method for quantifying imeglimin in tablets and does not contain any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Mima_2023 | irrelevant | 0 | 0 | The study reports safety and efficacy (glucose, liver enzymes) but does not report any quantitative pharmacokinetic parameters for imeglimin. |
| popPK | Molloy_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fasiglifam, not imeglimin. |
| popPK | Nihei_2026 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of imeglimin on diabetic neuropathy in rats, reporting neurophysiological outcomes (nerve conduction velocity, etc.) rather than pharmacokinetic disposition parameters. |
| popPK | Nowak_2022 | irrelevant | 3 | 2 | The paper is a narrative review discussing mechanism of action and clinical efficacy, containing only general descriptions of pharmacokinetics (e.g., "half-life 10-20 hours") without reporting specific compartmental population-PK parameters like clearance (CL) or volume (V) derived from a dedicated PK study. |
| popPK | Pacini_2015 | irrelevant | 0 | 0 | The study focuses on insulin secretion and beta-cell function (endocrinology) rather than the pharmacokinetic disposition of imeglimin itself. |
| popPK | Paskeviciene_2025 | irrelevant | 0 | 0 | The study investigates mechanistic mitochondrial effects of imeglimin in rat brain mitochondria (in vitro/in situ) and does not report any population pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Permana_2024 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (HbA1c reduction) and safety, containing no pharmacokinetic parameters or disposition data for imeglimin. |
| PD | Permana_2024 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials reporting dose-response trends (HbA1c reduction vs. dose) but does not provide a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters like Emax or EC50. |
| popPK | Qiang_2019 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of TAK-875, not imeglimin. |
| popPK | Rezk_2026 | relevant | 3 | 5 | The study provides non-compartmental PK parameters (t1/2, Kel) for imeglimin, but lacks compartmental model parameters (CL, V, Q) required for population PK. |
| popPK | Saboo_2026 | irrelevant | 0 | 0 | The study reports clinical efficacy (HbA1c changes) and safety outcomes, not pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Sanada_2024 | irrelevant | 0 | 0 | The study focuses on the anti-atherosclerotic effects and mechanistic pathways (oxidative stress, inflammation) of imeglimin in mice, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | This is a mechanistic study investigating the effects of imeglimin on circadian clock gene expression in mice, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Siam_2024 | irrelevant | 0 | 0 | The paper is a review of diabetes and cardiovascular disease epidemiology and pathophysiology, mentioning imeglimin only as a therapeutic agent without reporting any pharmacokinetic parameters or values. |
| popPK | Sugawara_2025 | irrelevant | 0 | 0 | The study investigates intestinal actions, gene expression, and microbiota composition, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Sugawara_2025 | not_relevant | 0 | 0 | The paper investigates intestinal mechanisms (RNA-seq, microbiome, glucose dynamics) using fixed doses or concentrations without modeling a concentration-effect relationship or reporting PD parameters. |
| popPK | Tajima_2026 | irrelevant | 0 | 0 | The study reports glucose and insulin kinetics (AUC, insulin sensitivity, insulin clearance) rather than the pharmacokinetic disposition parameters (CL, V, ka) of imeglimin itself. |
| PD | Tomita_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose adjustment based on renal function, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Tsuno_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on the effect of imeglimin on alpha cell identity and glucagon secretion, containing no pharmacokinetic parameters. |
| popPK | Usui_2025 | irrelevant | 0 | 0 | The study is a clinical trial focused on insulin and incretin secretion (mechanism of action) and does not report pharmacokinetic parameters (CL, V, etc.) for imeglimin. |
| popPK | Wadie_2026 | irrelevant | 3 | 0 | The paper is primarily an analytical method development study; while it mentions a bioequivalence study, specific quantitative disposition parameters (CL, V, ka) are not provided in the evidence, only AUC ratios for equivalence. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of skeletal muscle atrophy in mice and in vitro, reporting morphological and transcriptomic changes rather than quantitative pharmacokinetic parameters (CL, V, ka) for imeglimin. |
| popPK | Yendapally_2020 | irrelevant | 2 | 0 | The paper is a review describing the synthesis and properties of imeglimin, but the provided text contains no quantitative pharmacokinetic parameters (CL, V, etc.) for imeglimin. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no pharmacodynamic data, models, or parameters for imeglimin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:35 UTC</sub>
