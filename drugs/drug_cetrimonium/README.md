<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;cetrimonium&quot;}]"></div>

# cetrimonium

- **generic name:** cetrimonium
- **ATC codes:** `D08AJ02`, `R02AA17`
- **DrugBank:** [DB01718](https://go.drugbank.com/drugs/DB01718) · **PubChem:** [CID 2681](https://pubchem.ncbi.nlm.nih.gov/compound/2681)
- **molar mass:** 284.5435 g/mol (C19H42N) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Cetrimonium is a quaternary ammonium cation whose salts are used as antiseptics.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:03 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 2,134/302 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Qv_2013.pdf` | Qv XY et al., Toxicity evaluation of two typical surf…, Environmental toxicology an… (2013) | pd | 4 | [10.1002/etc.2073](https://doi.org/10.1002/etc.2073) | [23166012](https://www.ncbi.nlm.nih.gov/pubmed/23166012) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T18:03:44.573735+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelaziz_2019 | irrelevant | 0 | 0 | The study focuses on pemetrexed and resveratrol delivery, and cetrimonium is not the subject drug nor are any PK parameters for it reported. |
| PD | Abdelaziz_2019 | not_relevant | 0 | 0 | The paper focuses on pemetrexed and resveratrol delivery; cetrimonium is not mentioned, and no PD parameters for it are reported. |
| popPK | Battu_2010 | irrelevant | 0 | 0 | The study focuses on the physicochemical characterization of berberine chloride, not the pharmacokinetics of cetrimonium. |
| PD | Battu_2010 | not_relevant | 0 | 0 | The paper focuses on the physicochemical characterization and solubility of berberine chloride, not cetrimonium, and contains no pharmacodynamic or exposure-response data. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | The paper is a review on bacterial endophytic secondary metabolites and does not study cetrimonium or report any pharmacokinetic parameters for it. |
| PD | Biju_2026 | not_relevant | 0 | 0 | The paper is a review on endophytic metabolites and does not report any pharmacodynamic or exposure-response data for cetrimonium. |
| popPK | Chang_2021 | irrelevant | 0 | 0 | The paper studies the removal of graphene oxides using cetyl trimethyl ammonium bromide (CTAB) as a flotation reagent, not the pharmacokinetics of cetrimonium. |
| PD | Chang_2021 | not_relevant | 0 | 0 | The paper studies the removal of graphene oxides using cetyl trimethyl ammonium bromide (CTAB) in wastewater treatment, not the pharmacodynamics of cetrimonium in a biological system. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | The paper investigates the hydrophobic aggregation of coal slurry particles using quaternary ammonium salts and does not involve cetrimonium or pharmacokinetic parameters. |
| PD | Chen_2016 | not_relevant | 0 | 0 | The paper investigates the physical chemistry of coal slurry aggregation using quaternary ammonium salts and does not mention cetrimonium or report any pharmacodynamic or exposure-response data. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study focuses on voriconazole pharmacokinetics, and cetrimonium (or CTAC) is only mentioned as a formulation carrier, not as the subject drug for PK parameter extraction. |
| popPK | David_2010 | irrelevant | 0 | 0 | The paper is a microbiological study on mycoplasma inactivation using cetyltrimethylammonium bromide (a different compound) and does not report pharmacokinetic parameters for cetrimonium. |
| popPK | Davies_2018 | irrelevant | 0 | 0 | The paper is a study protocol for tuberculosis drugs (e.g., pyrazinamide, ethambutol) and does not mention cetrimonium or report any pharmacokinetic parameters for it. |
| PD | Davies_2018 | not_relevant | 0 | 0 | The paper is a study protocol for a prospective observational cohort and does not report any results, data, or numeric PD parameters. |
| popPK | Dong_2018 | irrelevant | 0 | 0 | The paper investigates the adsorption of Chromium(VI) onto a surfactant-modified substrate and does not involve the drug cetrimonium or any pharmacokinetic parameters. |
| PD | Dong_2018 | not_relevant | 0 | 0 | The paper investigates the adsorption of Chromium(VI) onto a surfactant-modified substrate and does not involve the drug cetrimonium or any pharmacodynamic analysis. |
| popPK | Fatoki_2020 | irrelevant | 0 | 0 | The study is an in-silico investigation of excipients (including CTAB, not cetrimonium) and does not report quantitative pharmacokinetic parameters for cetrimonium. |
| popPK | Gurjar_2018 | irrelevant | 0 | 0 | The study is an in-vitro investigation of excipient effects on P-glycoprotein using digoxin as a substrate, and does not report pharmacokinetic parameters for cetrimonium. |
| popPK | Huang_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of penicillin (ampicillin), using cetyltrimethylammonium bromide (CTMAB) only as a reagent for detection, not as the subject drug. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The paper is a study on microalgae harvesting using surfactants and does not involve cetrimonium pharmacokinetics. |
| PD | Huang_2019 | not_relevant | 0 | 0 | The paper discusses a Gemini surfactant (BCBD) and compares it to CTAB, but does not report any pharmacodynamic or exposure-response relationship for cetrimonium (or any other drug) with numeric PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study on antibiotic resistance evolution in E. coli and does not report pharmacokinetic parameters for cetrimonium. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on evolutionary microbiology and antibiotic resistance mechanisms in E. coli, not pharmacodynamic modeling or exposure-response relationships for cetrimonium. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper studies the adsorption of 2,4-dichlorophenol by CTAB-modified biochar, which is an environmental chemistry study unrelated to the pharmacokinetics of cetrimonium. |
| PD | Liu_2021 | not_relevant | 0 | 0 | The paper describes the adsorption of a chemical pollutant (2,4-DCP) by a modified biochar material, which is a physicochemical/environmental engineering study, not a pharmacodynamic or exposure-response study of a drug. |
| popPK | Liu_2021_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on autophagy and lipid clearance, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Marchianò_2023 | irrelevant | 0 | 0 | The paper focuses on the formulation and characterization of nanovesicles for vanillin delivery, not the pharmacokinetics of cetrimonium. |
| popPK | Moawed_2023 | irrelevant | 0 | 0 | The study focuses on the antitumor efficacy of a copper-CTAB complex in vitro and in vivo, reporting no pharmacokinetic parameters for cetrimonium. |
| popPK | Mrestani_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefodizime, not cetrimonium, and cetrimonium is not mentioned in the provided evidence. |
| popPK | Nagireddi_2019 | irrelevant | 0 | 0 | The paper studies palladium adsorption using a chitosan resin and does not involve cetrimonium or pharmacokinetics. |
| PD | Nagireddi_2019 | not_relevant | 0 | 0 | The paper discusses the adsorption of Palladium (Pd) from plating solutions, not the pharmacodynamics of the drug cetrimonium. |
| popPK | Pejaver_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of liposomal stability and ester hydrolysis, not a pharmacokinetic study of cetrimonium disposition. |
| popPK | Qv_2013 | irrelevant | 0 | 0 | The paper studies the toxicity of surfactants (SDBS and CTAC) on algae, not the pharmacokinetics of cetrimonium. |
| popPK | Saravani_2017 | irrelevant | 0 | 0 | The paper studies phenol removal using Cetyl Trimethyl Ammonium Bromide (CTAB) as a surfactant, not cetrimonium as a subject drug, and contains no pharmacokinetic parameters. |
| PD | Saravani_2017 | not_relevant | 0 | 0 | The paper describes a chemical engineering process (foam separation/biosorption) for phenol removal using a surfactant, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Shi_2021 | irrelevant | 0 | 0 | The paper investigates surfactant-assisted thermal hydrolysis of sludge and does not involve cetrimonium or pharmacokinetic parameters. |
| PD | Shi_2021 | not_relevant | 0 | 0 | The paper investigates the effect of cetyl trimethyl ammonium bromide (CTAB), not cetrimonium, and focuses on sludge treatment engineering parameters rather than pharmacodynamic exposure-response relationships. |
| popPK | Smith_1991 | irrelevant | 0 | 0 | The paper describes an HPLC assay for oxycodone where cetrimonium (cetavlon) is used only as a mobile phase additive, not as the subject drug for PK analysis. |
| popPK | Song_2022 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for rutin detection and does not report pharmacokinetic parameters for cetrimonium. |
| popPK | Su_2012 | irrelevant | 0 | 0 | The study focuses on gold nanorods as optical contrast agents and does not involve cetrimonium or report pharmacokinetic parameters for it. |
| popPK | Taghavijeloudar_2019 | irrelevant | 0 | 0 | The paper investigates the effect of surfactants on microalgae dewaterability and does not involve cetrimonium or pharmacokinetic parameters. |
| PD | Taghavijeloudar_2019 | not_relevant | 0 | 0 | The paper investigates the effect of surfactants on microalgae dewaterability (filtration flux), which is a physicochemical engineering process, not a pharmacodynamic (drug-response) relationship in a biological system. |
| popPK | Xu_2009 | irrelevant | 0 | 0 | The study investigates hemoglobin-loaded polymeric nanoparticles where cetrimonium (CTAB) is used only as a surface modifier, not as the subject drug for PK parameter extraction. |
| popPK | Xu_2016 | irrelevant | 0 | 0 | The study focuses on paclitaxel biodistribution using CTAB as a formulation excipient, not on the pharmacokinetics of cetrimonium. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper studies the antifungal activity and cytotoxicity of a nanoparticle hybrid, not the pharmacokinetics of cetrimonium. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
