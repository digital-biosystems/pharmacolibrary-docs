<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;bamethan&quot;}]"></div>

# bamethan

- **generic name:** bamethan
- **ATC codes:** `C04AA31`
- **DrugBank:** [DB13206](https://go.drugbank.com/drugs/DB13206) · **PubChem:** not captured
- **molar mass:** 209.289 g/mol (C12H19NO2) — DrugBank
- **groups:** experimental

## About

Bamethan is a vasodilator that was used for peripheral vascular disease. It is classified as experimental and is not authorised in the European Union, so it appears to be little used or no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4853482](https://www.wikidata.org/wiki/Q4853482) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:50 | 2:26 | 0/0/0 | 0/0/0 | 0/0/0 | 90,841/2,320 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 6/5 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hengstmann_1981.pdf` | Hengstmann JH et al., [Pharmacokinetics of 3H-bamethan in hum…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [6115653](https://pubmed.ncbi.nlm.nih.gov/6115653) | The study reports quantitative PK parameters (half-life, bioavailability, absorption rate) for bamethan in humans, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06T19:49:54.925928+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a new antifungal peptide (edaphochelin A) and does not involve the drug bamethan or its pharmacokinetics. |
| PD | Behsaz_2026 | not_relevant | 0 | 0 | The paper describes the discovery of a new peptide (edaphochelin A) and does not mention bamethan or report any pharmacodynamic parameters for it. |
| popPK | Benzi_1975 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of mitochondrial enzyme activity in rats, not a pharmacokinetic study, and reports no disposition parameters for bamethan. |
| PD | Benzi_1975 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (time to onset) of bamethan on enzyme activity but provides no numeric PD parameters, concentration-effect curves, or quantitative dose-response data. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | The paper is a molecular simulation study of thiazole derivatives as LasR inhibitors in Pseudomonas aeruginosa and does not involve the drug bamethan or its pharmacokinetics. |
| PD | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper is an in-silico study (molecular docking and dynamics) of thiazole derivatives as LasR inhibitors and does not report any pharmacodynamic, exposure-response, or dose-response data for bamethan. |
| popPK | Calvo-Gomez_2025 | irrelevant | 0 | 0 | The paper is a review of endophytic bioactive compounds for wound healing and does not mention bamethan or report any pharmacokinetic parameters. |
| PD | Calvo-Gomez_2025 | not_relevant | 0 | 0 | The paper is a review of endophytic bioactive compounds for wound healing and does not mention bamethan or report any pharmacodynamic parameters. |
| popPK | Carneiro_2023 | irrelevant | 0 | 0 | The paper is a review of the chemical diversity and biological potential of the plant genus Justicia and does not contain any pharmacokinetic data for bamethan. |
| PD | Carneiro_2023 | not_relevant | 0 | 0 | The paper is a review of the chemical diversity and biological potential of the Justicia genus and does not contain any pharmacokinetic or pharmacodynamic data for bamethan. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | The paper is a review of radionuclide-labeled nanoparticles for oncology and does not mention bamethan or report any pharmacokinetic parameters for it. |
| PD | Finogenova_2026 | not_relevant | 0 | 0 | The paper is a review of radionuclide nanoparticle imaging and therapy, does not mention bamethan, and contains no pharmacodynamic or exposure-response data. |
| popPK | Fraguas_2025 | irrelevant | 0 | 0 | The paper describes the mechanism of action of the AMPK inhibitor BAY-3827 and does not involve the drug bamethan or any pharmacokinetic parameters. |
| PD | Fraguas_2025 | not_relevant | 0 | 0 | The paper focuses on the structural and biochemical characterization of the AMPK inhibitor BAY-3827, not bamethan, and does not report any pharmacodynamic or exposure-response data for bamethan. |
| popPK | Guan_2025 | irrelevant | 0 | 0 | The paper investigates the therapeutic mechanisms of a traditional Chinese medicine compound (NBTL) in a rat model of rheumatoid arthritis and does not study the pharmacokinetics of bamethan. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper describes a structural biology and mechanistic study of RAS-mutant cancers and does not involve the drug bamethan or any pharmacokinetic parameters. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper describes the discovery of a tool compound targeting the SHOC2-RAS interaction and provides structural and biochemical data (SPR affinity, IC50 in cell assays), but it does not report a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with numeric PD parameters (Emax, EC50, etc.) for bamethan or any other drug in a physiological context. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carvedilol, not bamethan. |
| popPK | Islam_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antibacterial activity of thiazole Schiff base derivatives, not the pharmacokinetics of bamethan. |
| PD | Islam_2025 | not_relevant | 0 | 0 | The paper reports antibacterial activity via disk diffusion (zone of inhibition) and molecular docking, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters for bamethan. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper describes the design and biological evaluation of SARS-CoV-2 papain-like protease inhibitors and contains no pharmacokinetic data for bamethan. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper reports in vitro biochemical IC50 and antiviral EC50 values for SARS-CoV-2 PLpro inhibitors, but does not contain any pharmacokinetic data, exposure-response analysis, or PD modeling for the drug bamethan. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of drug tolerance in glioblastoma via PRDM9 and does not report pharmacokinetic parameters for bamethan. |
| PD | Joun_2025 | not_relevant | 0 | 0 | The paper does not mention the drug bamethan; it focuses on the mechanism of drug tolerance in glioblastoma involving PRDM9 and chemotherapy agents like CMPD1 and tivantinib. |
| popPK | Kaur_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro COX inhibition of NSAID analogues and does not involve bamethan or pharmacokinetic parameters. |
| popPK | Kaya_2026 | irrelevant | 0 | 0 | The study focuses on in silico pharmacokinetic predictions for flavonoids (myricetin, galangin, kaempferol, quercetin) and does not involve the drug bamethan. |
| PD | Kaya_2026 | not_relevant | 0 | 0 | The paper performs in silico pharmacokinetic and drug-likeness predictions for flavonoids (myricetin, galangin, kaempferol, quercetin) and does not mention bamethan or report any pharmacodynamic or exposure-response data. |
| popPK | Keyvani_2024 | irrelevant | 0 | 0 | The study focuses on vancomycin and gentamicin, not bamethan. |
| PD | Keyvani_2024 | not_relevant | 0 | 0 | The paper focuses on biosensor development for vancomycin and gentamicin, does not mention bamethan, and reports no pharmacodynamic or exposure-response data. |
| popPK | Koster_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glucuronidation in isolated rat cells, not a pharmacokinetic study reporting disposition parameters for bamethan. |
| popPK | Kumari_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Dioscorea oppositifolia and does not contain any pharmacokinetic data for bamethan. |
| PD | Kumari_2025 | not_relevant | 0 | 0 | The paper is a review of Dioscorea oppositifolia and does not mention bamethan or report any pharmacodynamic parameters. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper focuses on the chemical profiling of a traditional Chinese medicine formula (Huan Shao Dan) and does not report pharmacokinetic parameters for bamethan. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on chemical profiling and deep learning prediction of anti-aging metabolites in a TCM formula, with no pharmacodynamic modeling or exposure-response analysis for bamethan. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper focuses on PBPK modeling of dioxin-like compounds (DLCs) and does not mention bamethan or report any pharmacokinetic parameters for it. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of dioxin-like compounds (TCDD) and does not mention bamethan or report any pharmacodynamic parameters for it. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a metabolomic and transcriptomic study of the plant *Isatis indigotica* and does not involve the drug bamethan or any pharmacokinetic analysis. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper is a comparative metabolomic and transcriptomic study of plant cultivars and does not contain any pharmacodynamic or exposure-response data for bamethan. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological activity of ferrocene derivatives for Alzheimer's disease and does not involve the drug bamethan or any pharmacokinetic parameters. |
| PD | Makhaeva_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel ferrocene derivatives, not pharmacodynamic or exposure-response data for the drug bamethan. |
| popPK | Makowska_2025 | irrelevant | 0 | 0 | The study investigates the neurochemical effects of bisphenols in mice and does not involve the drug bamethan or its pharmacokinetics. |
| PD | Makowska_2025 | not_relevant | 0 | 0 | The paper studies the neurochemical effects of Bisphenol A and S, not bamethan, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Marbán-González_2025 | irrelevant | 0 | 0 | The paper focuses on the design of chemical libraries for Staphylococcus aureus FabI inhibition and does not involve the drug bamethan or any pharmacokinetic studies. |
| PD | Marbán-González_2025 | not_relevant | 0 | 0 | The paper focuses on in silico library design and structure-activity relationships for FabI inhibitors, reporting predicted pIC50 values rather than experimental pharmacodynamic or exposure-response data for bamethan. |
| popPK | Ortiz-Morales_2023 | irrelevant | 0 | 0 | The paper studies the compound HO-AAVPA (N-(2-hydroxyphenyl)-2-propylpentanamide), not bamethan, and focuses on chemical stability and in-vitro antiproliferative effects rather than bamethan pharmacokinetics. |
| popPK | Owczarek-Januszkiewicz_2022 | irrelevant | 0 | 0 | The paper is a review of enzymatically modified isoquercitrin (a flavonoid) and does not mention bamethan or report any pharmacokinetic parameters for it. |
| PD | Owczarek-Januszkiewicz_2022 | not_relevant | 0 | 0 | The paper is a review of Enzymatically Modified Isoquercitrin (EMIQ) and does not contain any data, analysis, or mention of the drug bamethan. |
| popPK | Praveena_2022 | irrelevant | 0 | 0 | The paper is a theoretical study on pelargonidin and its glucoside, not a pharmacokinetic study of bamethan. |
| PD | Praveena_2022 | not_relevant | 0 | 0 | The paper is a theoretical study using quantum chemical calculations and molecular dynamics to analyze the structure and binding of pelargonidin; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibacterial drugs and does not contain pharmacokinetic data for bamethan. |
| PD | Rusu_2026 | not_relevant | 0 | 0 | The paper is a medicinal chemistry review focusing on the pyrrolidine scaffold in antibiotics and does not report any pharmacodynamic or exposure-response data for bamethan. |
| popPK | Schaub_2020 | irrelevant | 0 | 0 | The paper describes a cheminformatics tool for deglycosylation and does not contain any pharmacokinetic data for bamethan. |
| PD | Schaub_2020 | not_relevant | 0 | 0 | The paper describes a cheminformatics tool for in silico deglycosylation of natural products and contains no pharmacodynamic, exposure-response, or dose-response data for bamethan or any other drug. |
| popPK | Shaik_2026 | irrelevant | 0 | 0 | The study focuses on the analytical characterization and in-silico safety evaluation of asciminib degradation products, not the pharmacokinetics of bamethan. |
| PD | Shaik_2026 | not_relevant | 0 | 0 | The paper focuses on the analytical method development and characterization of asciminib degradation products, containing no pharmacodynamic or exposure-response data. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of novel antitubercular compounds targeting InhA, with no mention of bamethan or its pharmacokinetics. |
| PD | Singh_2025 | not_relevant | 1 | 1 | The paper reports a single point of enzyme inhibition (36% at 50 μM) and MIC values, but does not provide a dose-response curve, Emax, or IC50, making it impossible to derive a pharmacodynamic model. |
| popPK | VALDES_1964 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not mention bamethan or report any pharmacokinetic parameters. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not mention the drug bamethan or report any pharmacodynamic parameters. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of a traditional Chinese medicine decoction in mice and does not involve the drug bamethan. |
| PD | Wei_2025 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine decoction (Ganmai Dazao) and does not mention the drug bamethan or report any specific pharmacodynamic parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
