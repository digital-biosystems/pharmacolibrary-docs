<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;bamethan&quot;}]"></div>

# bamethan

- **generic name:** bamethan
- **ATC codes:** `C04AA31`
- **DrugBank:** [DB13206](https://go.drugbank.com/drugs/DB13206) · **PubChem:** not captured
- **molar mass:** 209.289 g/mol (C12H19NO2) — DrugBank
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 12:07 | 31:18 | 0/0/0 | 0/0/0 | 0/0/0 | 133,377/4,151 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 6/5 | 10/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 33 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hengstmann_1981.pdf` | Hengstmann JH et al., [Pharmacokinetics of 3H-bamethan in hum…, Arzneimittel-Forschung (1981) | popPK | 8 | not captured | [6115653](https://pubmed.ncbi.nlm.nih.gov/6115653) | The paper reports quantitative PK parameters for bamethan in humans, including a biological half-life of 2.5 h and bioavailability of 75%, but lacks explicit clearance or volume of distribution values. |

<sub>queue written 2026-09-28T12:05:30.756215+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Benzi_1975 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (time to onset) of bamethan on enzyme activity but provides no numeric PD parameters, concentration-effect curves, or quantitative dose-response data. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | The paper is a molecular simulation study of thiazole derivatives as LasR inhibitors and does not involve the drug bamethan or report any pharmacokinetic parameters for it. |
| PD | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper is an in-silico study (molecular docking and dynamics) of thiazole derivatives as LasR inhibitors and does not report any pharmacodynamic, exposure-response, or dose-response data for bamethan. |
| popPK | Calvo-Gomez_2025 | irrelevant | 0 | 0 | The paper is a review of endophytic bioactive compounds for wound healing and does not mention bamethan or report any pharmacokinetic parameters. |
| PD | Calvo-Gomez_2025 | not_relevant | 0 | 0 | The paper is a review of endophytic bioactive compounds for wound healing and does not mention bamethan or report any pharmacodynamic parameters. |
| popPK | Carneiro_2023 | irrelevant | 0 | 0 | The paper is a review of the *Justicia* genus and does not report pharmacokinetic parameters for bamethan. |
| PD | Carneiro_2023 | not_relevant | 0 | 0 | The paper is a review of the chemical diversity and biological potential of the Justicia genus and does not contain any pharmacokinetic or pharmacodynamic data for bamethan. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | The paper is a review on radiolabeled nanoparticles for oncology and does not mention bamethan or report any pharmacokinetic parameters for it. |
| PD | Finogenova_2026 | not_relevant | 0 | 0 | The paper is a review of radionuclide nanoparticle imaging and therapy, does not mention bamethan, and contains no pharmacodynamic or exposure-response data. |
| popPK | Fraguas_2025 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of AMPK inhibition by BAY-3827 and does not involve the drug bamethan or report any pharmacokinetic parameters. |
| PD | Fraguas_2025 | not_relevant | 0 | 0 | The paper focuses on the structural and biochemical characterization of the AMPK inhibitor BAY-3827, not bamethan, and does not report any pharmacodynamic or exposure-response data for bamethan. |
| popPK | Guan_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine compound (NBTL) in rheumatoid arthritis and does not study the drug bamethan or report any pharmacokinetic parameters. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper is a structural biology and pharmacology study on RAS/SHOC2 interactions and does not involve the drug bamethan or report any pharmacokinetic parameters. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper describes the discovery of a tool compound targeting the SHOC2-RAS interaction and provides structural and biochemical data (SPR affinity, IC50 in cell assays), but it does not report a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with numeric PD parameters (Emax, EC50, etc.) for bamethan or any other drug in a physiological context. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carvedilol, not bamethan. |
| popPK | Islam_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antibacterial activity of thiazole Schiff base derivatives, not bamethan pharmacokinetics. |
| PD | Islam_2025 | not_relevant | 0 | 0 | The paper reports antibacterial activity via disk diffusion (zone of inhibition) and molecular docking, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters for bamethan. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper focuses on the design and biological evaluation of SARS-CoV-2 PLpro inhibitors and does not involve bamethan or pharmacokinetic studies. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper reports in vitro biochemical IC50 and antiviral EC50 values for SARS-CoV-2 PLpro inhibitors, but does not contain any pharmacokinetic data, exposure-response analysis, or PD modeling for the drug bamethan. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on glioblastoma and PRDM9, and does not mention bamethan or report any pharmacokinetic parameters for it. |
| PD | Joun_2025 | not_relevant | 0 | 0 | The paper does not mention the drug bamethan; it focuses on the mechanism of drug tolerance in glioblastoma involving PRDM9 and chemotherapy agents like CMPD1 and tivantinib. |
| popPK | Kaur_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro COX inhibition of NSAID analogues and does not involve bamethan or pharmacokinetic parameters. |
| popPK | Kaya_2026 | irrelevant | 0 | 0 | The paper is an in-silico study of flavonoids (myricetin, galangin, etc.) and does not mention or study the drug bamethan. |
| PD | Kaya_2026 | not_relevant | 0 | 0 | The paper performs in silico pharmacokinetic and drug-likeness predictions for flavonoids (myricetin, galangin, kaempferol, quercetin) and does not mention bamethan or report any pharmacodynamic or exposure-response data. |
| popPK | Keyvani_2024 | irrelevant | 0 | 0 | The study focuses on vancomycin and gentamicin, not bamethan, and involves biosensor development rather than bamethan PK parameter estimation. |
| PD | Keyvani_2024 | not_relevant | 0 | 0 | The paper focuses on biosensor development for vancomycin and gentamicin, does not mention bamethan, and reports no pharmacodynamic or exposure-response data. |
| popPK | Koster_1985 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of intestinal glucuronidation (metabolism) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume for bamethan. |
| popPK | Kumari_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Dioscorea oppositifolia and does not mention bamethan or report any pharmacokinetic parameters. |
| PD | Kumari_2025 | not_relevant | 0 | 0 | The paper is a review of Dioscorea oppositifolia and does not mention bamethan or report any pharmacodynamic parameters. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a metabolomics study of a Traditional Chinese Medicine formula (Huan Shao Dan) and does not report pharmacokinetic parameters for bamethan. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on chemical profiling and deep learning prediction of anti-aging metabolites in a TCM formula, with no pharmacodynamic modeling or exposure-response analysis for bamethan. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper focuses on dioxin-like compounds (DLCs) and does not mention or study bamethan. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of dioxin-like compounds (TCDD) and does not mention bamethan or report any pharmacodynamic parameters for it. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | The paper studies ferrocene derivatives for Alzheimer's disease and does not involve the drug bamethan or any pharmacokinetic parameters. |
| PD | Makhaeva_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel ferrocene derivatives, not pharmacodynamic or exposure-response data for the drug bamethan. |
| popPK | Makowska_2025 | irrelevant | 0 | 0 | The paper studies the neurochemical effects of Bisphenol A and S on mouse colon, not the pharmacokinetics of bamethan. |
| PD | Makowska_2025 | not_relevant | 0 | 0 | The paper studies the neurochemical effects of Bisphenol A and S, not bamethan, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Marbán-González_2025 | irrelevant | 0 | 0 | The paper focuses on the design of chemical libraries for Staphylococcus aureus FabI inhibition and does not involve the drug bamethan or pharmacokinetic studies. |
| PD | Marbán-González_2025 | not_relevant | 0 | 0 | The paper focuses on in silico library design and structure-activity relationships for FabI inhibitors, reporting predicted pIC50 values rather than experimental pharmacodynamic or exposure-response data for bamethan. |
| popPK | Ortiz-Morales_2023 | irrelevant | 0 | 0 | The paper studies the compound HO-AAVPA (N-(2-hydroxyphenyl)-2-propylpentanamide), not bamethan, and focuses on chemical stability and in-vitro antiproliferative effects rather than reporting quantitative PK parameters for bamethan. |
| popPK | Owczarek-Januszkiewicz_2022 | irrelevant | 0 | 0 | The paper is a review of Enzymatically Modified Isoquercitrin (EMIQ) and does not contain pharmacokinetic data for bamethan. |
| PD | Owczarek-Januszkiewicz_2022 | not_relevant | 0 | 0 | The paper is a review of Enzymatically Modified Isoquercitrin (EMIQ) and does not contain any data, analysis, or mention of the drug bamethan. |
| popPK | Praveena_2022 | irrelevant | 0 | 0 | The paper is a theoretical study on pelargonidin and its glucoside, not a pharmacokinetic study of bamethan. |
| PD | Praveena_2022 | not_relevant | 0 | 0 | The paper is a theoretical study using quantum chemical calculations and molecular dynamics to analyze the structure and binding of pelargonidin; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibacterial drugs and does not report pharmacokinetic parameters for bamethan. |
| PD | Rusu_2026 | not_relevant | 0 | 0 | The paper is a medicinal chemistry review focusing on the pyrrolidine scaffold in antibiotics and does not report any pharmacodynamic or exposure-response data for bamethan. |
| popPK | Schaub_2020 | irrelevant | 0 | 0 | The paper describes a computational tool for removing sugar moieties from molecular structures and does not contain any pharmacokinetic data or parameters for bamethan. |
| PD | Schaub_2020 | not_relevant | 0 | 0 | The paper describes a cheminformatics tool for in silico deglycosylation of natural products and contains no pharmacodynamic, exposure-response, or dose-response data for bamethan or any other drug. |
| popPK | Shaik_2026 | irrelevant | 0 | 0 | The paper focuses on the analytical characterization and in-silico safety evaluation of asciminib degradation products, not bamethan pharmacokinetics. |
| PD | Shaik_2026 | not_relevant | 0 | 0 | The paper focuses on the analytical method development and characterization of asciminib degradation products, containing no pharmacodynamic or exposure-response data. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of novel antitubercular compounds targeting InhA, with no mention of bamethan or pharmacokinetic parameters. |
| PD | Singh_2025 | not_relevant | 1 | 1 | The paper reports a single point of enzyme inhibition (36% at 50 μM) and MIC values, but does not provide a dose-response curve, Emax, or IC50, making it impossible to derive a pharmacodynamic model. |
| popPK | VALDES_1964 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the medicinal plant Tecomella undulata and does not mention bamethan or report any pharmacokinetic parameters. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not mention the drug bamethan or report any pharmacodynamic parameters. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The paper studies the traditional Chinese medicine Ganmai Dazao Decoction for depression and does not report pharmacokinetic parameters for bamethan. |
| PD | Wei_2025 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine decoction (Ganmai Dazao) and does not mention the drug bamethan or report any specific pharmacodynamic parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
