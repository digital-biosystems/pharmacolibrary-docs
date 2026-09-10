# natamycin

- **generic name:** natamycin
- **ATC codes:** `A01AB10`, `A07AA03`, `D01AA02`, `G01AA02`, `S01AA10`
- **DrugBank:** [DB00826](https://go.drugbank.com/drugs/DB00826)
- **groups:** approved, investigational

## About

**Description.** Amphoteric macrolide antifungal antibiotic from Streptomyces natalensis or S. chattanoogensis. It is used for a variety of fungal infections, mainly topically. [PubChem]

**Indication.** For the treatment of fungal blepharitis, conjunctivitis, and keratitis caused by susceptible organisms including <i>Fusarium solani</i> keratitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 09:15 | 17:38 | 0/0/0 | 1/0/0 | 0/0/0 | 142,311/4,807 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/13 | 13/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Saito_2023](drugs/drug_natamycin/pd_Saito_2023_unknown.md) | Saito S et al., Sensitivity of Mucor piriformis to Nata…, Plant disease (2023) | [10.1094/PDIS-04-23-0796-RE](https://doi.org/10.1094/PDIS-04-23-0796-RE) |

## Coverage

- **PubMed hits:** 47 matched, 63 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bhatta_2012.pdf` | Bhatta RS et al., Mucoadhesive nanoparticles for prolonge…, International journal of ph… (2012) | popPK | 9 | [10.1016/j.ijpharm.2012.04.060](https://doi.org/10.1016/j.ijpharm.2012.04.060) | [22569234](https://pubmed.ncbi.nlm.nih.gov/22569234) | The study reports ocular pharmacokinetics for natamycin in rabbits, but the evidence only provides relative changes (fold-increases/decreases) rather than absolute numeric values for clearance, volume, or half-life. |
| `Chandasana_2014.pdf` | Chandasana H et al., Corneal targeted nanoparticles for sust…, International journal of ph… (2014) | pd | 5 | [10.1016/j.ijpharm.2014.10.035](https://doi.org/10.1016/j.ijpharm.2014.10.035) | [25455776](https://www.ncbi.nlm.nih.gov/pubmed/25455776) | metadata signals extractable PD data (PK/PD) |
| `Nakaminami_2017.pdf` | Nakaminami H et al., Evaluation of In Vitro Antiamoebic Acti…, Journal of ocular pharmacol… (2017) | pd | 5 | [10.1089/jop.2017.0033](https://doi.org/10.1089/jop.2017.0033) | [28704121](https://www.ncbi.nlm.nih.gov/pubmed/28704121) | metadata signals extractable PD data (IC50) |
| `Awasthi_2018.pdf` | Awasthi BP et al., In vitro leishmanicidal effects of the…, Apoptosis : an internationa… (2018) | pd | 4 | [10.1007/s10495-018-1468-5](https://doi.org/10.1007/s10495-018-1468-5) | [29971703](https://www.ncbi.nlm.nih.gov/pubmed/29971703) | metadata signals extractable PD data (IC50) |
| `Cao_2024.pdf` | Cao Y et al., Efficacy and toxic action of the natura…, Pest management science (2024) | pd | 4 | [10.1002/ps.7930](https://doi.org/10.1002/ps.7930) | [38087429](https://www.ncbi.nlm.nih.gov/pubmed/38087429) | metadata signals extractable PD data (EC50) |
| `Hu_2023.pdf` | Hu YM et al., Efficacy of pterostilbene suppression o…, International journal of fo… (2023) | pd | 4 | [10.1016/j.ijfoodmicro.2023.110318](https://doi.org/10.1016/j.ijfoodmicro.2023.110318) | [37454507](https://www.ncbi.nlm.nih.gov/pubmed/37454507) | metadata signals extractable PD data (EC50) |
| `Lin_2026.pdf` | Lin B et al., Temperature and osmotic pressure dual-s…, Drug delivery and translati… (2026) | pd | 4 | [10.1007/s13346-026-02190-x](https://doi.org/10.1007/s13346-026-02190-x) | [42493683](https://www.ncbi.nlm.nih.gov/pubmed/42493683) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T09:13:58.346608+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdin_2024 | irrelevant | 0 | 0 | The study focuses on the material science and antimicrobial properties of food packaging films, not on the pharmacokinetics or disposition parameters of natamycin. |
| popPK | Amit_2019 | irrelevant | 0 | 0 | The study focuses on the design of cell-penetrating peptides for antifungal delivery, using natamycin only as a positive control in in-vitro assays without reporting any pharmacokinetic parameters. |
| popPK | Arboleda_2024 | irrelevant | 0 | 0 | The paper is a clinical review of mycotic keratitis treatment and does not report any quantitative pharmacokinetic parameters for natamycin. |
| popPK | Awasthi_2018 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic effects (calcium homeostasis/mitochondrial dysfunction) rather than pharmacokinetic disposition parameters. |
| popPK | Badhani_2012 | irrelevant | 0 | 0 | The study focuses on in-vitro formulation and physico-chemical characterization of cyclodextrin complexes, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for natamycin. |
| popPK | Bhatta_2012 | relevant | 9 | 2 | The study reports ocular pharmacokinetics for natamycin in rabbits, but the evidence only provides relative changes (fold-increases/decreases) rather than absolute numeric values for clearance, volume, or half-life. |
| PD | Bhatta_2012 | not_relevant | 0 | 0 | The paper focuses on in vitro release and ocular pharmacokinetics (PK) of natamycin nanoparticles, reporting PK parameters (AUC, Cmax, t1/2) but lacking any pharmacodynamic (PD) or exposure-response analysis with numeric PD parameters. |
| popPK | Brooks_1998 | irrelevant | 0 | 0 | The study reports in-vitro antimicrobial susceptibility (MIC/IC50) data, not pharmacokinetic disposition parameters. |
| PD | Brooks_1998 | not_relevant | 2 | 1 | The paper reports in vitro MIC and IC50 values for fungal isolates, which are antimicrobial susceptibility metrics, not pharmacodynamic (exposure-response) parameters for the host or a PD model fit. |
| popPK | Burkin_2022 | irrelevant | 0 | 0 | The paper describes an immunoassay for detecting natamycin in food products and does not report any pharmacokinetic parameters. |
| PD | Burkin_2022 | not_relevant | 0 | 0 | The paper describes an immunoassay for detecting natamycin residues in food, not a pharmacodynamic or exposure-response analysis of the drug's biological effect. |
| popPK | Burkin_2022_2 | irrelevant | 0 | 0 | The study focuses on the development of an immunoassay for amphotericin B, and natamycin is only mentioned as a cross-reactive compound in the assay validation, not as the subject of PK analysis. |
| PD | Burkin_2022_2 | not_relevant | 0 | 0 | The paper focuses on the development of an immunoassay for amphotericin B and reports PK parameters for a single patient; it does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for natamycin. |
| popPK | Cao_2024 | irrelevant | 0 | 0 | The paper focuses on the efficacy and toxic action of natamycin against a fungus (Sclerotinia sclerotiorum), which is a mechanistic/toxicological study, not a pharmacokinetic study reporting disposition parameters. |
| PD | Cao_2024 | not_relevant | 0 | 0 | The paper describes the efficacy and toxic action of natamycin against a fungus (Sclerotinia sclerotiorum), which is a microbiological/antifungal study, not a pharmacodynamic (drug effect on host physiology) or exposure-response analysis in a biological system relevant to drug development. |
| popPK | Carmo_2023 | irrelevant | 0 | 0 | The paper is a review that mentions natamycin only as a topical polyene antifungal without reporting any quantitative pharmacokinetic parameters for it. |
| PD | Carmo_2023 | not_relevant | 2 | 1 | The paper is a general review of antifungal drugs and does not report specific numeric PD parameters or exposure-response models for natamycin. |
| PGx | Carmo_2023 | not_relevant | 0 | 0 | The paper is a general review of antifungal drugs and does not report specific pharmacogenomic effects on natamycin PK/PD parameters. |
| popPK | Chandasana_2014 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameter values or data for natamycin. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The study reports in-vitro antifungal sensitivity (EC50) and resistance potential, not pharmacokinetic disposition parameters. |
| popPK | Chi_2025 | irrelevant | 0 | 0 | The paper is a materials science study on drug delivery films (in vitro release and animal efficacy) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for natamycin. |
| popPK | Cuenca-León_2022 | irrelevant | 0 | 0 | The paper is a review on phytotherapy for oral antifungal resistance and does not report any pharmacokinetic parameters for natamycin. |
| PD | Cuenca-León_2022 | not_relevant | 0 | 0 | The paper is a bibliographic review of phytotherapy for antifungal resistance and does not report any specific pharmacodynamic or exposure-response data for natamycin. |
| popPK | Díaz-Tomé_2022 | irrelevant | 2 | 1 | The study focuses on formulation development and in vitro/ex vivo permeability, reporting only ocular surface clearance ratios from PET imaging rather than systemic or compartmental pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | The provided text is a conference invitation and contains no pharmacokinetic data or study results for natamycin. |
| PD | Gangneux_2019 | not_relevant | 0 | 0 | The text is a conference invitation and contains no pharmacodynamic data or analysis. |
| popPK | Gelain_2023 | irrelevant | 0 | 0 | The study is an in-vitro fungicide sensitivity assay (EC50) for plant pathogens, not a pharmacokinetic study of natamycin in humans or animals. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | The study focuses on drug delivery and therapeutic efficacy in a mouse model, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for natamycin. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper focuses on the biosynthesis and antifungal efficacy of mandimycin, with natamycin serving only as a comparator agent, and contains no pharmacokinetic data. |
| PD | Han_2026 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis and genetic engineering of mandimycin; natamycin is only mentioned as a comparative antifungal agent without any pharmacodynamic modeling or specific numeric PD parameters for it. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | The paper concerns the efficacy of pterostilbene against Aspergillus flavus and does not involve natamycin pharmacokinetics. |
| PD | Hu_2023 | not_relevant | 0 | 0 | The paper focuses on pterostilbene and Aspergillus flavus, not natamycin, and does not report any pharmacodynamic or exposure-response data for natamycin. |
| popPK | Kawakami_2015 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay (MIC/IC50) for antimicrobial agents, not a pharmacokinetic study, and reports no disposition parameters for natamycin. |
| popPK | Khames_2019 | irrelevant | 0 | 0 | The study focuses on the formulation and ex vivo permeation of natamycin nanoparticles, reporting no in vivo pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Laskowski_2025 | irrelevant | 0 | 0 | The paper focuses on the structural elucidation and isolation of trichomycins A and B, not the pharmacokinetics of natamycin. |
| PD | Laskowski_2025 | not_relevant | 0 | 0 | The paper focuses on the structural elucidation and stereochemistry of trichomycins A and B, containing no pharmacodynamic or exposure-response data. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | The paper describes a drug delivery formulation (ophthalmic gel) and likely focuses on in-vitro release or formulation characterization rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for natamycin in a biological system. |
| PD | Lin_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and release kinetics of a drug delivery system, not on pharmacodynamic modeling or exposure-response relationships. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | The study focuses on nanoparticle formulation, encapsulation efficiency, and therapeutic efficacy in fungal keratitis, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Mukhametkaliyev_2026 | irrelevant | 0 | 0 | The study reports in-vitro antiviral activity (IC50/EC50) and computational docking data, not pharmacokinetic disposition parameters. |
| popPK | Nakaminami_2017 | irrelevant | 0 | 0 | The paper evaluates in vitro antiamoebic activity, which is a mechanistic/microbiological study, not a pharmacokinetic study reporting disposition parameters for natamycin. |
| PD | Nakaminami_2017 | not_relevant | 0 | 0 | The paper evaluates in vitro activity against Acanthamoeba, not the pharmacodynamics of natamycin in a biological system with extractable exposure-response parameters. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | The paper is a plant pathology study reporting in-vitro fungicide sensitivity (EC50) of fungal pathogens, not a pharmacokinetic study of natamycin in a host. |
| PD | Nguyen_2025 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for Geotrichum species, which is a microbiological potency metric, not a pharmacodynamic (exposure-response) relationship for a drug in a host system. |
| popPK | ODay_1986 | irrelevant | 2 | 1 | The study reports local tissue concentrations (micrograms/gm) rather than systemic pharmacokinetic parameters (CL, V, ka) or a compartmental model for natamycin. |
| popPK | ODay_1987 | irrelevant | 0 | 0 | The study evaluates in vivo susceptibility and efficacy (MIC, treatment frequency) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PD | ODay_1987 | not_relevant | 3 | 1 | The paper mentions a dose-response observation qualitatively but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data for natamycin in the provided text. |
| popPK | Oldenkamp_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on the treatment of ringworm in horses and does not report any pharmacokinetic parameters for natamycin. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review on mucoadhesive drug delivery systems for oral candidiasis and does not report quantitative pharmacokinetic parameters for natamycin. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report specific pharmacodynamic or exposure-response data for natamycin. |
| popPK | Patil_2017 | irrelevant | 0 | 0 | The paper is a review of echinocandins in ocular therapeutics and does not report quantitative pharmacokinetic parameters for natamycin. |
| popPK | Sahay_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacologic therapy for mycotic keratitis and does not report original quantitative pharmacokinetic parameters for natamycin. |
| popPK | Saito_2023 | irrelevant | 0 | 0 | The paper is a postharvest plant pathology study evaluating fungicide efficacy on fruit, not a pharmacokinetic study, and contains no PK parameters for natamycin. |
| popPK | Sha_2022 | irrelevant | 2 | 0 | The study focuses on formulation development and qualitative/semi-quantitative efficacy (MIC, retention time, clinical scores) rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Tevyashova_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo efficacy of natamycin derivatives, reporting MICs and toxicity indices rather than quantitative pharmacokinetic parameters (CL, V, ka) for natamycin. |
| popPK | Tian_2024 | irrelevant | 2 | 0 | The study focuses on the formulation and therapeutic efficacy of natamycin-modified eye drops in mice, mentioning pharmacokinetic analysis qualitatively (extended mean residence time) but providing no quantitative PK parameters (CL, V, ka, etc.) in the evidence. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The paper is a chemoproteomic study analyzing covalent drug-target interactions (cysteine reactivity) and does not report any pharmacokinetic parameters for natamycin. |
| PD | Tian_2025 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects (western blots) and in vitro activity for natamycin but does not provide numeric PD parameters (e.g., IC50, Emax) or a formal exposure-response model. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study reports in-vitro fungicide efficacy (EC50) and postharvest disease control, not pharmacokinetic disposition parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of 4-Methoxycinnamic acid and its synergy with natamycin, without reporting any pharmacokinetic parameters for natamycin. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel antifungal compounds where natamycin is used only as a comparator for efficacy, with no pharmacokinetic parameters reported. |
| PD | Wang_2025 | not_relevant | 3 | 2 | The paper reports an EC50 for a novel compound (LN18) and compares it qualitatively to natamycin, but does not provide numeric PD parameters or an exposure-response curve for natamycin itself. |
| popPK | Zhan_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal and anti-inflammatory mechanisms of glabridin, with natamycin serving only as a comparator agent in synergy tests, and no pharmacokinetic parameters are reported. |
| popPK | Zhao_2018 | relevant | 4 | 2 | The study reports peak concentrations (Cmax) and permeability ratios for natamycin but lacks formal compartmental PK parameters (CL, V, ka, t1/2) required for population PK modeling. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics resource for drug exposure detection via metabolomics and mentions natamycin only as an example of a food preservative, providing no pharmacokinetic parameters. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics database for drug detection and does not report any pharmacodynamic or exposure-response analysis for natamycin. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study focuses on the antifungal activity and mechanism of action of natamycin against Fusarium graminearum, reporting EC50 values and biochemical effects rather than pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_natamycin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
