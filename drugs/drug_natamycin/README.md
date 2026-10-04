<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;natamycin&quot;}]"></div>

# natamycin

- **generic name:** natamycin
- **ATC codes:** `A01AB10`, `A07AA03`, `D01AA02`, `G01AA02`, `S01AA10`
- **DrugBank:** [DB00826](https://go.drugbank.com/drugs/DB00826) · **PubChem:** [CID 5284447](https://pubchem.ncbi.nlm.nih.gov/compound/5284447)
- **molar mass:** 665.733 g/mol (C33H47NO13) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Amphoteric macrolide antifungal antibiotic from Streptomyces natalensis or S. chattanoogensis. It is used for a variety of fungal infections, mainly topically. [PubChem]

**Indication.** For the treatment of fungal blepharitis, conjunctivitis, and keratitis caused by susceptible organisms including <i>Fusarium solani</i> keratitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 02:30 | 3:38 | 0/0/0 | 0/0/0 | 0/0/0 | 119,525/3,825 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 3/15 | 10/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 81 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bhatta_2012.pdf` | Bhatta RS et al., Mucoadhesive nanoparticles for prolonge…, International journal of ph… (2012) | popPK | 9 | [10.1016/j.ijpharm.2012.04.060](https://doi.org/10.1016/j.ijpharm.2012.04.060) | [22569234](https://pubmed.ncbi.nlm.nih.gov/22569234) | The study reports ocular pharmacokinetics of natamycin in rabbits, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only relative changes (fold-increases/decreases). |
| `Coleman_2022.pdf` | Coleman D et al., In vitro susceptibility testing for the…, Journal of fish diseases (2022) | popPK | 8 | [10.1111/jfd.13685](https://doi.org/10.1111/jfd.13685) | [35857853](https://pubmed.ncbi.nlm.nih.gov/35857853) | The study reports pharmacokinetic parameters for natamycin in white sturgeon, but specific numeric values (CL, V, etc.) are not present in the provided text, only a derived dosing recommendation. |
| `Patil_2020.pdf` | Patil A et al., Carboxyvinyl Polymer and Guar-Borate Ge…, Journal of ocular pharmacol… (2020) | popPK | 8 | [10.1089/jop.2019.0140](https://doi.org/10.1089/jop.2019.0140) | [32315560](https://pubmed.ncbi.nlm.nih.gov/32315560) | The study reports in vivo ocular pharmacokinetic parameters (MRT, t1/2) for natamycin in rabbits, but specific numeric values are not present in the provided abstract text. |
| `Chandasana_2014.pdf` | Chandasana H et al., Corneal targeted nanoparticles for sust…, International journal of ph… (2014) | pd | 5 | [10.1016/j.ijpharm.2014.10.035](https://doi.org/10.1016/j.ijpharm.2014.10.035) | [25455776](https://www.ncbi.nlm.nih.gov/pubmed/25455776) | metadata signals extractable PD data (PK/PD) |
| `Nakaminami_2017.pdf` | Nakaminami H et al., Evaluation of In Vitro Antiamoebic Acti…, Journal of ocular pharmacol… (2017) | pd | 5 | [10.1089/jop.2017.0033](https://doi.org/10.1089/jop.2017.0033) | [28704121](https://www.ncbi.nlm.nih.gov/pubmed/28704121) | metadata signals extractable PD data (IC50) |
| `Awasthi_2018.pdf` | Awasthi BP et al., In vitro leishmanicidal effects of the…, Apoptosis : an internationa… (2018) | pd | 4 | [10.1007/s10495-018-1468-5](https://doi.org/10.1007/s10495-018-1468-5) | [29971703](https://www.ncbi.nlm.nih.gov/pubmed/29971703) | metadata signals extractable PD data (IC50) |
| `Cao_2024.pdf` | Cao Y et al., Efficacy and toxic action of the natura…, Pest management science (2024) | pd | 4 | [10.1002/ps.7930](https://doi.org/10.1002/ps.7930) | [38087429](https://www.ncbi.nlm.nih.gov/pubmed/38087429) | metadata signals extractable PD data (EC50) |
| `Hu_2023.pdf` | Hu YM et al., Efficacy of pterostilbene suppression o…, International journal of fo… (2023) | pd | 4 | [10.1016/j.ijfoodmicro.2023.110318](https://doi.org/10.1016/j.ijfoodmicro.2023.110318) | [37454507](https://www.ncbi.nlm.nih.gov/pubmed/37454507) | metadata signals extractable PD data (EC50) |
| `Lin_2026.pdf` | Lin B et al., Temperature and osmotic pressure dual-s…, Drug delivery and translati… (2026) | pd | 4 | [10.1007/s13346-026-02190-x](https://doi.org/10.1007/s13346-026-02190-x) | [42493683](https://www.ncbi.nlm.nih.gov/pubmed/42493683) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T02:30:10.806024+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdin_2024 | irrelevant | 0 | 0 | The study focuses on the material science and antimicrobial properties of food packaging films, not the pharmacokinetics of natamycin. |
| popPK | Amit_2019 | irrelevant | 0 | 0 | The study focuses on the design of cell-penetrating peptides for antifungal delivery, using natamycin only as a positive control in in-vitro assays without reporting any pharmacokinetic parameters. |
| popPK | Arboleda_2024 | irrelevant | 0 | 0 | The paper is a review of mycotic keratitis management and does not report quantitative pharmacokinetic parameters for natamycin. |
| popPK | Awasthi_2018 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic effects (calcium homeostasis/mitochondrial dysfunction) rather than pharmacokinetic disposition parameters. |
| popPK | Badhani_2012 | irrelevant | 0 | 0 | The study focuses on the physico-chemical characterization and formulation of natamycin cyclodextrin complexes, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Bangeppagari_2026 | irrelevant | 0 | 0 | The paper is a review discussing natamycin's safety and food applications, mentioning low bioavailability qualitatively but providing no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Bhatta_2012 | relevant | 9 | 2 | The study reports ocular pharmacokinetics of natamycin in rabbits, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only relative changes (fold-increases/decreases). |
| popPK | Brooks_1998 | irrelevant | 0 | 0 | The study reports in-vitro antimicrobial susceptibility (MIC/IC50) data, not pharmacokinetic disposition parameters. |
| PD | Brooks_1998 | not_relevant | 2 | 1 | The paper reports in vitro MIC and IC50 values for fungal isolates, which are antimicrobial susceptibility metrics, not pharmacodynamic (exposure-response) parameters for the host or a PD model fit. |
| popPK | Burkin_2022 | irrelevant | 0 | 0 | The paper describes an immunoassay for detecting natamycin in food products and does not report any pharmacokinetic parameters. |
| PD | Burkin_2022 | not_relevant | 0 | 0 | The paper describes an immunoassay for detecting natamycin residues in food, not a pharmacodynamic or exposure-response analysis of the drug's biological effect. |
| popPK | Burkin_2022_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amphotericin B, and natamycin is only mentioned as a cross-reactive compound in the immunoassay validation. |
| PD | Burkin_2022_2 | not_relevant | 0 | 0 | The paper focuses on the development of an immunoassay for amphotericin B and reports PK parameters for a single patient; it does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for natamycin. |
| popPK | Cao_2024 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Cao_2024 | not_relevant | 0 | 0 | The paper describes the efficacy and toxic action of natamycin against a fungus (Sclerotinia sclerotiorum), which is a microbiological/antifungal study, not a pharmacodynamic (drug effect on host physiology) or exposure-response analysis in a biological system relevant to drug development. |
| popPK | Carmo_2023 | irrelevant | 1 | 0 | The paper is a general review of antifungals and does not report specific quantitative pharmacokinetic parameters for natamycin. |
| PD | Carmo_2023 | not_relevant | 2 | 1 | The paper is a general review of antifungal drugs and does not report specific numeric PD parameters or exposure-response models for natamycin. |
| PGx | Carmo_2023 | not_relevant | 0 | 0 | The paper is a general review of antifungal pharmacology and mentions pharmacogenomics only as a broad concept without reporting specific gene-variant effects on natamycin PK/PD. |
| popPK | Chandasana_2014 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The study reports in vitro antifungal efficacy (EC50) and resistance potential, not pharmacokinetic parameters. |
| popPK | Chhonker_2013 | irrelevant | 2 | 0 | The paper describes the development and validation of an LC-MS/MS assay for natamycin, but the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.). |
| popPK | Chi_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro release kinetics of natamycin-loaded films, not on the pharmacokinetic disposition parameters (CL, V, etc.) of natamycin in a biological system. |
| popPK | Coleman_2022 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for natamycin in white sturgeon, but specific numeric values (CL, V, etc.) are not present in the provided text, only a derived dosing recommendation. |
| popPK | Cuenca-León_2022 | irrelevant | 0 | 0 | The paper is a review of phytotherapy for antifungal resistance and does not report pharmacokinetic parameters for natamycin. |
| PD | Cuenca-León_2022 | not_relevant | 0 | 0 | The paper is a bibliographic review of phytotherapy for antifungal resistance and does not report any specific pharmacodynamic or exposure-response data for natamycin. |
| popPK | Dong_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of terbinafine, with natamycin serving only as a therapeutic comparator in efficacy models. |
| popPK | Díaz-Tomé_2022 | irrelevant | 2 | 1 | The study focuses on formulation development and ex vivo/in vitro permeability, reporting only ocular surface clearance ratios from a PET assay rather than systemic population pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| PD | Gangneux_2019 | not_relevant | 0 | 0 | The text is a conference invitation and contains no pharmacodynamic data or analysis. |
| popPK | Gelain_2023 | irrelevant | 0 | 0 | The study reports in vitro fungicide sensitivity (EC50) of fungal isolates to natamycin, not pharmacokinetic parameters. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | The study focuses on drug delivery, antifungal efficacy, and immunoregulation in a mouse model, without reporting quantitative pharmacokinetic parameters (CL, V, ka, etc.) for natamycin. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper is a biosynthetic and efficacy study of mandimycin, where natamycin is used only as a comparator antifungal agent, with no pharmacokinetic data reported. |
| PD | Han_2026 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis and genetic engineering of mandimycin; natamycin is only mentioned as a comparative antifungal agent without any pharmacodynamic modeling or specific numeric PD parameters for it. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Hu_2023 | not_relevant | 0 | 0 | The paper focuses on pterostilbene and Aspergillus flavus, not natamycin, and does not report any pharmacodynamic or exposure-response data for natamycin. |
| popPK | Kawakami_2015 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay (MIC/IC50) for antimicrobial agents, not a pharmacokinetic study, and reports no disposition parameters for natamycin. |
| popPK | Khames_2019 | irrelevant | 0 | 0 | The study is a formulation and ex vivo permeation study (using goat corneas) that reports permeability coefficients and flux, but does not provide in vivo pharmacokinetic parameters (CL, V, t1/2) or a compartmental PK model for natamycin. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper is a review focused on amphotericin B nanocarriers, and natamycin is only mentioned as a comparator drug without any quantitative pharmacokinetic parameters provided. |
| popPK | Laskowski_2025 | irrelevant | 0 | 0 | The paper focuses on the structural elucidation and stereochemistry of trichomycins, not the pharmacokinetics of natamycin. |
| PD | Laskowski_2025 | not_relevant | 0 | 0 | The paper focuses on the structural elucidation and stereochemistry of trichomycins A and B, containing no pharmacodynamic or exposure-response data. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Lin_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and release kinetics of a drug delivery system, not on pharmacodynamic modeling or exposure-response relationships. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | The study focuses on nanoparticle formulation, loading efficiency, and therapeutic efficacy in fungal keratitis, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Martínez_2013 | irrelevant | 0 | 0 | The study measures cytochrome P450 enzyme activities in rat liver microsomes (mechanistic/toxicology) and does not report pharmacokinetic parameters (CL, V, t1/2) for natamycin. |
| popPK | Mukhametkaliyev_2026 | irrelevant | 0 | 0 | The study reports in-vitro antiviral activity (IC50/EC50) and computational docking data, not pharmacokinetic disposition parameters. |
| popPK | Nakaminami_2017 | irrelevant | 0 | 0 | The paper evaluates in vitro antiamoebic activity, which is a mechanistic/microbiological study, not a pharmacokinetic study reporting disposition parameters for natamycin. |
| PD | Nakaminami_2017 | not_relevant | 0 | 0 | The paper evaluates in vitro activity against Acanthamoeba, not the pharmacodynamics of natamycin in a biological system with extractable exposure-response parameters. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | The paper is a plant pathology study on fungal fungicide sensitivity (EC50 values) and does not report pharmacokinetic parameters for natamycin. |
| PD | Nguyen_2025 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for Geotrichum species, which is a microbiological potency metric, not a pharmacodynamic (exposure-response) relationship for a drug in a host system. |
| popPK | ODay_1986 | irrelevant | 2 | 1 | The study reports local tissue concentrations (micrograms/gm) in rabbit corneas rather than systemic pharmacokinetic parameters (CL, V, t1/2) or a compartmental model. |
| popPK | ODay_1987 | irrelevant | 0 | 0 | The study evaluates in vitro susceptibility (MIC) and in vivo efficacy in a rabbit keratitis model, but does not report pharmacokinetic parameters (CL, V, t1/2) for natamycin. |
| PD | ODay_1987 | not_relevant | 3 | 1 | The paper mentions a dose-response observation qualitatively but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data for natamycin in the provided text. |
| popPK | ODay_2000 | irrelevant | 1 | 0 | This is a review article that mentions the exploration of pharmacokinetics but does not report any original quantitative disposition parameters or numeric values for natamycin. |
| popPK | Oldenkamp_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of topical natamycin in horses for ringworm and does not report any pharmacokinetic parameters. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report quantitative pharmacokinetic parameters for natamycin. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report specific pharmacodynamic or exposure-response data for natamycin. |
| popPK | Patil_2017 | irrelevant | 0 | 0 | The paper is a review of echinocandins in ocular therapeutics and does not report quantitative pharmacokinetic parameters for natamycin. |
| popPK | Patil_2020 | relevant | 8 | 2 | The study reports in vivo ocular pharmacokinetic parameters (MRT, t1/2) for natamycin in rabbits, but specific numeric values are not present in the provided abstract text. |
| popPK | Qi_2026 | irrelevant | 1 | 0 | The study focuses on the formulation and efficacy of a lipid nanoplatform for fungal keratitis, reporting qualitative release profiles and therapeutic outcomes rather than quantitative population pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Sahay_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacologic therapy for mycotic keratitis and does not report original quantitative pharmacokinetic parameters for natamycin. |
| popPK | Saito_2023 | irrelevant | 0 | 0 | The study evaluates the antifungal efficacy of natamycin on fruit rot and in vitro sensitivity, not its pharmacokinetic disposition parameters. |
| popPK | Sathe_2024 | irrelevant | 2 | 0 | The study focuses on formulation development and reports qualitative improvements in residence time and permeability, but does not provide quantitative compartmental PK parameters (CL, V, ka) for natamycin. |
| popPK | Sha_2022 | irrelevant | 2 | 0 | The study is a formulation and efficacy evaluation that reports qualitative penetration and retention data, but lacks quantitative pharmacokinetic parameters (CL, V, ka) or compartmental models for natamycin. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The paper is a review of lipid-based nanocarriers for ocular delivery and mentions natamycin only as a component in a formulation study without reporting quantitative pharmacokinetic parameters. |
| PD | Smolarz_2026 | not_relevant | 3 | 2 | The paper reports IC50 values for anticancer activity and qualitative antifungal potency, but lacks a formal exposure-response or dose-response model with derivable PD parameters (Emax, EC50, slope) for natamycin/pimaricin. |
| popPK | Tevyashova_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo antifungal efficacy of natamycin derivatives, reporting MICs and toxicity data rather than quantitative pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Tian_2024 | irrelevant | 2 | 0 | The study reports qualitative pharmacokinetic findings (extended mean residence time) for a natamycin conjugate in mice but provides no quantitative disposition parameters (CL, V, ka, etc.) in the evidence. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The paper is a proteomics study on covalent drug binding and does not report pharmacokinetic parameters for natamycin. |
| PD | Tian_2025 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects (western blots) and in vitro activity for natamycin but does not provide numeric PD parameters (e.g., IC50, Emax) or a formal exposure-response model. |
| popPK | Velpandian_2021 | irrelevant | 4 | 0 | The study reports relative concentration comparisons (e.g., 5x higher) and qualitative kinetic trends (Cmax time) but lacks specific quantitative PK parameters (CL, V, ka) for natamycin. |
| popPK | Verma_2021 | irrelevant | 2 | 0 | The study reports qualitative biodistribution and MIC data for natamycin in rabbits, but lacks quantitative compartmental PK parameters (CL, V, ka) in the provided evidence. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study reports in vitro antifungal efficacy (EC50) and postharvest disease control, not pharmacokinetic parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of 4-Methoxycinnamic acid and its synergy with natamycin in fungal keratitis, without reporting any pharmacokinetic parameters for natamycin. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and antifungal activity of new compounds, using natamycin only as a commercial comparator for efficacy, with no pharmacokinetic data reported. |
| PD | Wang_2025 | not_relevant | 3 | 2 | The paper reports an EC50 for a novel compound (LN18) and compares it qualitatively to natamycin, but does not provide numeric PD parameters or an exposure-response curve for natamycin itself. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review of oxidative stress mechanisms in Acanthamoeba keratitis and does not report pharmacokinetic parameters for natamycin. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress mechanisms in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for natamycin. |
| popPK | Zhan_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal and anti-inflammatory mechanisms of glabridin, with natamycin serving only as a comparator agent in synergy tests, and no pharmacokinetic parameters are reported. |
| popPK | Zhao_2018 | irrelevant | 2 | 0 | The study reports only tissue concentrations (Cmax) and permeability ratios, lacking quantitative compartmental PK parameters (CL, V, ka, t1/2) required for the screen. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry database resource for drug screening and does not report pharmacokinetic parameters for natamycin. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics database for drug detection and does not report any pharmacodynamic or exposure-response analysis for natamycin. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study focuses on the antifungal activity and mechanism of action of natamycin against Fusarium graminearum, not its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
