<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;eosin&quot;}]"></div>

# eosin

- **generic name:** eosin
- **ATC codes:** `D08AX02`
- **DrugBank:** [DB13706](https://go.drugbank.com/drugs/DB13706) · **PubChem:** not captured
- **molar mass:** 691.859 g/mol (C20H6Br4Na2O5) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 20:09 | 2:19:52 | 0/0/0 | 0/0/0 | 0/0/0 | 455,869/17,622 | ollama / qwen3.8:27b-mtp-q8_0 | 49 | 9/40 | 38/11 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 995 matched, 243 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DCruz_2002.pdf` | D'Cruz OJ et al., A 13-week subchronic intravaginal toxic…, Toxicologic pathology (2002) | pd | 5 | [10.1080/01926230290168551](https://doi.org/10.1080/01926230290168551) | [12512870](https://www.ncbi.nlm.nih.gov/pubmed/12512870) | metadata signals extractable PD data (EC50) |
| `Selles_2024.pdf` | Selles SMA et al., Chemical compounds, antioxidant and sco…, Experimental parasitology (2024) | pd | 5 | [10.1016/j.exppara.2024.108699](https://doi.org/10.1016/j.exppara.2024.108699) | [38199324](https://www.ncbi.nlm.nih.gov/pubmed/38199324) | metadata signals extractable PD data (IC50) |
| `Zhang_2016.pdf` | Zhang YL et al., Development and characterization of a n…, Human reproduction (Oxford,… (2016) | pd | 5 | [10.1093/humrep/dev295](https://doi.org/10.1093/humrep/dev295) | [26621853](https://www.ncbi.nlm.nih.gov/pubmed/26621853) | metadata signals extractable PD data (EC50) |
| `Dai_2018.pdf` | Dai P et al., Visible-Light- and Oxygen-Promoted Dire…, Organic letters (2018) | pd | 4 | [10.1021/acs.orglett.8b02965](https://doi.org/10.1021/acs.orglett.8b02965) | [30354155](https://www.ncbi.nlm.nih.gov/pubmed/30354155) | metadata signals extractable PD data (EC50) |
| `Gatto_1995.pdf` | Gatto C et al., Eosin, a potent inhibitor of the plasma…, Biochemistry (1995) | pd | 4 | [10.1021/bi00003a031](https://doi.org/10.1021/bi00003a031) | [7530047](https://www.ncbi.nlm.nih.gov/pubmed/7530047) | metadata signals extractable PD data (IC50) |
| `Kennedy_1996.pdf` | Kennedy BG et al., Plasma membrane calcium-ATPase in cultu…, Experimental eye research (1996) | pd | 4 | [10.1006/exer.1996.0145](https://doi.org/10.1006/exer.1996.0145) | [8994358](https://www.ncbi.nlm.nih.gov/pubmed/8994358) | metadata signals extractable PD data (IC50) |
| `Kosk-Kosicka_1989.pdf` | Kosk-Kosicka D et al., Fluorescence energy transfer studies of…, The Journal of biological c… (1989) | pd | 4 | not captured | [2531140](https://www.ncbi.nlm.nih.gov/pubmed/2531140) | metadata signals extractable PD data (sigmoid) |
| `Owen_1983.pdf` | Owen MP et al., Importance of 'cut-end' effects in in v…, Blood vessels (1983) | pd | 4 | [10.1159/000158484](https://doi.org/10.1159/000158484) | [6616072](https://www.ncbi.nlm.nih.gov/pubmed/6616072) | metadata signals extractable PD data (EC50) |
| `Ratnasooriya_1991.pdf` | Ratnasooriya WD et al., Sperm antimotility properties of a seed…, Journal of ethnopharmacology (1991) | pd | 4 | [10.1016/0378-8741(91)90166-b](https://doi.org/10.1016/0378-8741(91)90166-b) | [1943179](https://www.ncbi.nlm.nih.gov/pubmed/1943179) | metadata signals extractable PD data (EC50) |
| `Unosawa_2004.pdf` | Unosawa S, Effects of a left ventricular assist de…, Annals of thoracic and card… (2004) | pd | 4 | not captured | [15658907](https://www.ncbi.nlm.nih.gov/pubmed/15658907) | metadata signals extractable PD data (Emax) |
| `Zhang_2024.pdf` | Zhang Z et al., Effect of Particle Size on Physical Pro…, Pharmaceutics (2024) | pd | 4 | [10.3390/pharmaceutics16111352](https://doi.org/10.3390/pharmaceutics16111352) | [39598477](https://www.ncbi.nlm.nih.gov/pubmed/39598477) | metadata signals extractable PD data (EC50) |
| `Guan_2022.pdf` | Guan S et al., [Long term maintenance of cytochrome P4…, Sheng wu yi xue gong cheng… (2022) | pgx | 7 | [10.7507/1001-5515.202108056](https://doi.org/10.7507/1001-5515.202108056) | [36008342](https://www.ncbi.nlm.nih.gov/pubmed/36008342) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Wu_2021.pdf` | Wu X et al., Polyoxypregnanes as safe, potent, and s…, Acta pharmaceutica Sinica. B (2021) | pgx | 7 | [10.1016/j.apsb.2020.12.021](https://doi.org/10.1016/j.apsb.2020.12.021) | [34386326](https://www.ncbi.nlm.nih.gov/pubmed/34386326) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Jin_2021.pdf` | Jin J et al., Proteomics and metabolic phenotyping de…, Acta pharmaceutica Sinica. B (2021) | pgx | 5 | [10.1016/j.apsb.2021.10.014](https://doi.org/10.1016/j.apsb.2021.10.014) | [35024308](https://www.ncbi.nlm.nih.gov/pubmed/35024308) | metadata signals extractable PGX data (Cyp1a1) |

<sub>queue written 2026-09-29T19:38:31.410292+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdi_2017 | not_relevant | 0 | 0 | The paper describes the development of a glioma tumor model in rats and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of eosin or any other drug. |
| PGx | Albadry_2024 | not_relevant | 0 | 0 | The paper investigates cross-species variability in liver lobular geometry and CYP zonation, not the effect of specific gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | An_2026 | irrelevant | 0 | 0 | The paper is a genomic and clinical study of hepatocellular carcinoma focusing on RB1 alterations and does not involve the drug eosin or pharmacokinetic parameters. |
| PD | An_2026 | not_relevant | 2 | 1 | The paper reports qualitative drug sensitivity and tumor growth inhibition in xenograft models but does not provide numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves. |
| popPK | Anzoise_2016 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Passiflora caerulea on colitis and does not report pharmacokinetic parameters for eosin. |
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper describes a translational safety strategy for a TCR-like T cell bispecific antibody (MAGE-A4-TCB) and does not involve the drug eosin or report any pharmacokinetic parameters. |
| popPK | Bai_2025 | irrelevant | 0 | 0 | The paper is a clinical study on Achilles tendon rupture pathology and outcomes, not a pharmacokinetic study of the drug eosin. |
| PGx | Berglund_2017 | not_relevant | 0 | 0 | The paper investigates immunological cytotoxicity of mesenchymal stem cells in horses, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| popPK | Best_2019 | irrelevant | 0 | 0 | The paper is a pathology study on collagen organization in renal cell carcinoma and does not involve the drug eosin or pharmacokinetic parameters. |
| PGx | Bi_2026 | not_relevant | 0 | 0 | The paper focuses on predicting platinum resistance using multimodal data (MRI, pathology, clinical) and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Boşnak_2026 | irrelevant | 0 | 0 | The study focuses on levofloxacin pharmacokinetics, not eosin. |
| popPK | Brott_2014 | irrelevant | 0 | 0 | The paper studies Ticagrelor, not eosin, and focuses on carcinogenicity and mode of action rather than PK parameters for eosin. |
| PD | Brott_2014 | not_relevant | 2 | 1 | The paper discusses a qualitative mode of action (dopamine agonism) and compares IC50 to exposure levels, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50 for tumor incidence) for the drug's effect. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not eosin. |
| PD | Camargo_2025 | not_relevant | 3 | 1 | The paper reports qualitative improvements in antihypertensive activity and PK parameters (bioavailability) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| PD | Cane_1975 | not_relevant | 2 | 1 | The study reports mean PGF concentrations for three discrete treatment groups (control, estrogen, progesterone) but does not provide a dose-response curve, concentration-effect relationship, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Champagne_2025 | irrelevant | 0 | 0 | The paper is a veterinary pathology study on liver abscesses in cattle and does not involve the drug eosin or pharmacokinetic parameters. |
| PGx | Chen_2020 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of a herbal formulation in a rat model and does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a study on placental physiology in cows and mentions "eosin" only as part of "hematoxylin and eosin staining," not as a drug subject for pharmacokinetic analysis. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of paclitaxel nanomedicines and does not involve the drug eosin or report any pharmacokinetic parameters for it. |
| PD | Cheng_2026 | not_relevant | 1 | 0 | The text is a narrative review of paclitaxel nanomedicines and resistance mechanisms, containing no specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Cho_2009 | irrelevant | 0 | 0 | The paper is an imaging study of a tumor model using Gd-DTPA and (18)F-Fmiso, where "eosin" appears only as part of the histological stain "hematoxylin/eosin," not as the subject drug for pharmacokinetic analysis. |
| popPK | Chon_2026 | irrelevant | 0 | 0 | The study investigates fostrox and lenvatinib, not eosin. |
| PD | Chon_2026 | not_relevant | 2 | 1 | The study mentions PK/PD evaluation and shows qualitative tumor-selective DNA damage in biopsies, but the provided text does not contain numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response curve. |
| popPK | Christenson_2026 | irrelevant | 0 | 0 | The paper is a clinical trial of copanlisib and nivolumab for colorectal cancer and does not study the drug eosin or report any pharmacokinetic parameters. |
| PD | Christenson_2026 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic biomarker changes (pAKT/pERK reduction, T-cell infiltration) via paired biopsies but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve. |
| popPK | Cui_2026 | irrelevant | 0 | 0 | The paper describes a machine learning platform for predicting anticancer drug responses and does not report pharmacokinetic parameters for eosin. |
| PD | Cui_2026 | not_relevant | 0 | 0 | The paper describes a machine learning platform (DrGee) for predicting drug sensitivity (IC50) from gene expression profiles, but it does not report a pharmacodynamic model, exposure-response relationship, or specific numeric PD parameters (like Emax, EC50, or slope) for the drug eosin. |
| popPK | DCruz_2001 | irrelevant | 0 | 0 | The study investigates the toxicity of vanadocene dithiocarbamate (VDDTC) in mice and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PD | DCruz_2001 | not_relevant | 0 | 0 | The paper is a subchronic toxicity study reporting safety endpoints (organ weights, histopathology, fertility) and does not provide a pharmacodynamic model or numeric exposure-response parameters for the drug's mechanism of action. |
| popPK | DCruz_2002 | irrelevant | 0 | 0 | The study investigates the toxicity of a vanadium complex (VDACAC) in mice and does not report pharmacokinetic parameters for the drug eosin. |
| PD | DCruz_2002 | not_relevant | 0 | 0 | The paper is a subchronic toxicity study reporting qualitative safety endpoints (organ weights, histopathology, fertility) and does not provide a quantitative exposure-response or dose-response model with numeric PD parameters. |
| popPK | DCruz_2002_2 | irrelevant | 0 | 0 | no_text gate: only 187 chars of text extracted (&lt; 400) |
| PD | DCruz_2002_2 | not_relevant | 0 | 0 | The paper describes a subchronic toxicity study in mice and does not report any pharmacodynamic or exposure-response analysis for the drug. |
| popPK | Dai_2018 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Dai_2018 | not_relevant | 0 | 0 | The paper reports the synthesis of new compounds and their antifungal activities (likely MIC/IC50), but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model or an exposure-response relationship for the drug eosin. |
| PGx | Dai_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of cholestasis induced by Polygoni Multiflori Radix in mice, focusing on bile acid metabolism and gene expression changes, but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| PGx | Dan_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a traditional Chinese medicine decoction in a mouse model of NAFLD and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Dang_2017 | irrelevant | 0 | 0 | The paper is an ex vivo study on trabecular meshwork decellularization and does not report pharmacokinetic parameters for the drug eosin. |
| PGx | Dankers_2013 | not_relevant | 0 | 0 | The paper investigates the effect of hyperuricemia (a disease state/metabolite) on transporter function and tryptophan metabolite levels, not the effect of a specific gene variant on the PK/PD of a drug. |
| PGx | Demetris_2009 | not_relevant | 0 | 0 | The paper discusses the evolution of Hepatitis C virus in liver allografts and histopathology, with no mention of pharmacogenomics, drug PK/PD parameters, or gene variants affecting drug response. |
| popPK | Deng_2026 | irrelevant | 0 | 0 | The paper focuses on a liver-on-chip model for AML and hepatotoxicity, does not study the drug eosin, and reports no pharmacokinetic parameters. |
| PD | Deng_2026 | not_relevant | 1 | 0 | The paper describes a drug screening and mechanistic study using an in vitro liver model and mouse models, reporting qualitative trends and efficacy comparisons rather than a quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Digiovanni_2026 | irrelevant | 0 | 0 | The paper focuses on IRAK1 signaling in non-small cell lung cancer and does not study the drug eosin or report any pharmacokinetic parameters for it. |
| popPK | Doghbri_2026 | irrelevant | 0 | 0 | The study investigates melatonin's effect on camel sperm quality using eosin only as a staining agent for viability assessment, not as a pharmacokinetic subject. |
| PGx | Drechsler_2017 | not_relevant | 0 | 0 | The paper describes the development of a tissue substitute for conjunctival reconstruction and does not involve pharmacogenomics or drug PK/PD parameters. |
| popPK | Du_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of streptomycin, using eosin only as a reagent for chemiluminescence detection. |
| PGx | Du_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Polyphyllin I on hepatocellular carcinoma cells and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Du_2024 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of polymethoxyflavones on lipid metabolism in rats and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Essa_2026 | not_relevant | 0 | 0 | The study is a toxicological investigation using fixed doses (10 mg/kg PMPs, 200 mg/kg Taurine) without measuring drug concentrations or fitting a dose-response curve; it reports qualitative/semi-quantitative changes in biomarkers rather than a pharmacodynamic model with numeric parameters like Emax or EC50. |
| PGx | Feng_2026 | not_relevant | 0 | 0 | The paper investigates autophagy states and drug response in cancer models, not pharmacogenomic effects on PK/PD parameters of eosin. |
| PD | Francis_2018 | not_relevant | 0 | 0 | The paper reports the synthesis of silver nanoparticles and their catalytic degradation of eosin Y, but does not provide a pharmacodynamic exposure-response or dose-response relationship for a drug with numeric PD parameters (Emax, EC50, etc.) for eosin. |
| PGx | Fu_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine in a rat model and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Furlan_2025 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of TB47 against Mycobacterium leprae and does not report pharmacokinetic parameters for eosin. |
| PD | Furlan_2025 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent efficacy (bactericidal vs bacteriostatic) at specific doses but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Gao_2015 | irrelevant | 0 | 0 | The paper studies antioxidant combinations (Vitamin C, GTP, GSEP) and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PGx | German_2019 | not_relevant | 0 | 0 | The paper investigates the effect of cell culture conditions (2D vs 3D) and endothelial cell types on acetaminophen metabolism, not the effect of a specific gene variant or genotype. |
| PGx | Ghareeb_2022 | not_relevant | 0 | 0 | The paper describes a deep learning model to predict KRAS genotype from histopathology images and does not report any pharmacokinetic or pharmacodynamic effects of the genotype on a drug. |
| PGx | Gong_2022 | not_relevant | 0 | 0 | The paper investigates LAMTOR3 as a prognostic biomarker in kidney cancer and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of eosin or any other drug. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Gong_2026 | not_relevant | 0 | 0 | The paper discusses clinical challenges and antibiotic tolerance in Klebsiella pneumoniae liver abscess but does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for eosin. |
| popPK | Grigoriou_2025 | irrelevant | 0 | 0 | The paper describes a diffusion MRI simulation framework for cancer imaging and does not report pharmacokinetic parameters for the drug eosin. |
| PGx | Guan_2022 | not_relevant | 0 | 0 | The paper describes an in vitro cell culture model for maintaining CYP450 activity and does not report any pharmacogenomic effects of gene variants on drug PK or PD parameters. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study focuses on L-4-boronophenylalanine (BPA) for boron neutron capture therapy, not the drug eosin. |
| PD | Guo_2026_2 | not_relevant | 1 | 0 | The study reports qualitative improvements in lung injury markers and identifies mechanisms via transcriptomics, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters. |
| PD | Hao_2026 | not_relevant | 0 | 0 | The study is a fixed-dose efficacy and mechanistic investigation in an animal model that explicitly states it did not include dose-response matrices or PK/PD modeling. |
| popPK | He_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis on the diagnostic value of indocyanine green (ICG) for sentinel lymph node mapping in gastric cancer and does not report pharmacokinetic parameters for the drug eosin. |
| PGx | He_2020 | not_relevant | 0 | 0 | The paper describes the creation of a rat hepatocyte organoid model for drug testing and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is an imaging study on renal cell carcinoma and does not involve the drug eosin or pharmacokinetic parameters. |
| popPK | Helfer_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftaroline, not eosin. |
| PD | Helfer_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for ceftaroline in rats, focusing on brain penetration and probability of target attainment (PTA), but does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug's effect. |
| PGx | Herat_2020 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of SGLT2 inhibitors in diabetic mouse models, not the impact of a specific gene variant on the pharmacokinetics or pharmacodynamics of eosin. |
| popPK | Ho_2025 | irrelevant | 0 | 0 | The paper is a forensic study on postmortem interval estimation using MALDI MS and does not involve the drug eosin or pharmacokinetic parameters. |
| PGx | Holm_2025 | not_relevant | 0 | 0 | The paper describes a 3D liver tissue model for toxicity studies and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Huo_2021 | irrelevant | 0 | 0 | The paper studies novel benzimidazole derivatives for RSV, and "eosin" appears only as part of "hematoxylin and eosin" staining, not as the drug eosin. |
| popPK | Ikeda_2025 | irrelevant | 0 | 0 | The paper is a histopathological study on eosinophil counting in gastrointestinal disorders, not a pharmacokinetic study of the drug eosin. |
| popPK | Jansen_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the contrast agent gadodiamide, not the drug eosin. |
| popPK | Jen_2021 | irrelevant | 0 | 0 | The paper is about computational pathology and image processing, where "eosin" refers to the histological stain (hematoxylin and eosin), not the drug. |
| popPK | Jiang_2017 | irrelevant | 0 | 0 | The paper is an MRI imaging study where "eosin" refers to hematoxylin and eosin (H&E) histological staining, not the drug eosin, and contains no pharmacokinetic parameters. |
| PGx | Jiang_2022 | not_relevant | 0 | 0 | The paper studies the chemotherapeutic effects of cucurbitacin E on laryngeal cancer stem cells and does not report any pharmacogenomic effects on PK or PD parameters. |
| PD | Jiang_2026 | not_relevant | 0 | 0 | The provided text consists of administrative ethics approval headers and software metadata, containing no pharmacological data, drug names, or PD parameters. |
| PGx | Jiao_2024 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of a traditional medicine in a mouse model and does not report any pharmacogenomic effects (gene variant impact) on PK or PD parameters. |
| PGx | Jin_2021 | not_relevant | 0 | 0 | The paper investigates the role of the aryl hydrocarbon receptor in liver metabolism and proteomics in mice, not the pharmacogenomics of the drug eosin. |
| popPK | Kasi_2025 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of toothpaste ingredients and does not report pharmacokinetic parameters for eosin. |
| popPK | Kassid_2026 | irrelevant | 0 | 0 | The study focuses on the protective effects of telmisartan against cyclophosphamide-induced testicular toxicity and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PD | Kassid_2026 | not_relevant | 3 | 1 | The study reports qualitative dose-dependent effects of telmisartan on biochemical markers but does not provide numeric concentration-effect data, PK parameters, or a fitted PD model. |
| popPK | Kato_2026 | irrelevant | 0 | 0 | The paper is a histological study of platelet-rich plasma in rabbit knees and does not report pharmacokinetic parameters for the drug eosin. |
| PD | Kennedy_1996 | not_relevant | 0 | 0 | The paper focuses on the characterization of plasma membrane calcium-ATPase in cultured cells, not on the pharmacodynamic or exposure-response relationship of a specific drug. |
| popPK | Khazipov_1999 | irrelevant | 0 | 0 | Eosin is used only as a dye to verify compartment isolation in an in vitro electrophysiology setup, not as a subject drug for pharmacokinetic analysis. |
| PGx | Kim_2011 | not_relevant | 0 | 0 | The paper investigates the role of P-glycoprotein in chondrogenesis and glycosaminoglycan accumulation, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paeonol and paeoniflorin from Moutan Cortex, not the drug eosin. |
| PD | Kim_2025 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative dose-dependent effects (DAI, protein expression) but does not provide a quantitative exposure-response model or numeric PD parameters (e.g., EC50, Emax) linking concentration to effect. |
| popPK | Kosk-Kosicka_1989 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Kosk-Kosicka_1989 | not_relevant | 0 | 0 | The paper studies the biophysics of purified erythrocyte Ca2+-ATPase and does not report pharmacodynamic or exposure-response relationships for the drug eosin. |
| PGx | Krishnan_2010 | not_relevant | 0 | 0 | The paper compares cell markers for limbal stem cell deficiency treatment and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Kuster_2019 | irrelevant | 0 | 0 | The paper is a study on hypertrophic cardiomyopathy in mice and does not involve the drug eosin or any pharmacokinetic parameters. |
| PD | Kuster_2019 | not_relevant | 0 | 0 | The paper reports a genetic mutation and its physiological effects (HCM phenotype, Ca2+ sensitivity of force generation) but does not involve a drug, exposure, or dose-response relationship. |
| popPK | Langer_2010 | irrelevant | 0 | 0 | The paper is an MRI study of prostate tissue where "eosin" refers to hematoxylin-eosin staining, not the drug eosin, and no pharmacokinetic parameters are reported. |
| popPK | Laue_2026 | irrelevant | 0 | 0 | The paper is a histological image analysis study of liver zonation and does not report pharmacokinetic parameters for the drug eosin. |
| PD | Laue_2026 | not_relevant | 0 | 0 | The paper describes an image analysis workflow for spatial quantification of liver zonation (steatosis and enzyme expression) and does not report any pharmacodynamic or exposure-response relationship for a drug. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper describes a chemical synthesis method using eosin Y as a photosensitizer, not a pharmacogenomic study of eosin as a drug. |
| PGx | Lee_2022 | not_relevant | 0 | 0 | The paper describes the establishment of pancreatic cancer organoids and their drug response to chemotherapy, but does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Lei_2022 | not_relevant | 0 | 0 | The paper describes a genetic cause of a disease (PCD) and its physiological consequences, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Li_2012 | not_relevant | 0 | 0 | The paper studies the effects of heat stress on liver gene expression and injury markers in mice, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper investigates the role of ADAM8 in CCl4-induced liver injury using antibodies, not the effect of a gene variant on the PK/PD of a specific drug. |
| PGx | Li_2015 | not_relevant | 0 | 0 | The paper investigates the histopathology and gene expression (CYP3A4 downregulation) in melanosis coli, but does not report a pharmacogenomic effect on the PK or PD of a specific drug. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper uses "eosin" as part of the H&E staining method for pathology images, not as a drug, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Li_2024_2 | not_relevant | 0 | 0 | The paper focuses on using H&E images to predict BRCA status and PARPi response, not on how a gene variant affects the PK or PD parameters of the drug eosin. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study investigates porfimer sodium (Photofrin) for photodynamic therapy, not eosin, and reports no pharmacokinetic parameters for eosin. |
| PD | Li_2026_2 | not_relevant | 2 | 1 | The study reports a single-dose efficacy comparison (IMR reduction) without measuring drug concentrations or fitting a dose-response/PD model, so no numeric PD parameters (Emax, EC50, etc.) are extractable. |
| popPK | Li_2026_3 | irrelevant | 0 | 0 | The paper studies Brusatol in meningioma and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PD | Li_2026_3 | not_relevant | 3 | 1 | The paper reports an IC50 value and qualitative dose-response effects (proliferation, apoptosis) but lacks a formal PK/PD model, exposure-response analysis, or detailed numeric PD parameters (like Emax, EC50 with confidence intervals, or slope) derived from a concentration-effect fit. |
| popPK | Li_2026_4 | irrelevant | 0 | 0 | The paper studies a peptide (LKLKLL) from Akkermansia muciniphila and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PD | Li_2026_4 | not_relevant | 1 | 0 | The paper describes qualitative biological effects and mechanisms of a peptide but does not report quantitative exposure-response or dose-response data with numeric PD parameters. |
| PD | Li_2026_5 | not_relevant | 3 | 1 | The study reports qualitative dose-dependent effects (high-dose group showed most pronounced inhibition) and pathway modulation, but provides no numeric PD parameters (Emax, EC50, slope) or quantitative concentration-effect curves. |
| popPK | Li_2026_6 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer 18F-FDG in a glioblastoma mouse model, not the drug eosin. |
| PD | Li_2026_6 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (k1, k2, k3) for FDG distribution and tumor growth kinetics, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for a therapeutic drug. |
| PGx | Liao_2006 | not_relevant | 0 | 0 | The study reports clinical outcomes (survival, recurrence) rather than pharmacokinetic or pharmacodynamic parameters of the drug. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper investigates the role of the OPTN gene in bone metabolism and osteoporosis, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper investigates the role of the NLRP3 gene in cardiac aging and pyroptosis, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine in an animal model and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The paper investigates the toxicity of nanoplastics (nPS) and does not report any pharmacogenomic effects on the PK or PD of the drug eosin. |
| PD | Liu_2026_2 | not_relevant | 0 | 0 | The paper describes mechanistic studies and qualitative efficacy in animal/cell models but does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| PGx | Liu_2026_3 | not_relevant | 0 | 0 | The paper is a cell line authentication and quality control report for AML12 cells, containing no pharmacogenomic or PK/PD data. |
| PGx | Long_2025 | not_relevant | 0 | 0 | The paper reports general toxicity and metabolomics of an essential oil in mice, with no mention of gene variants or pharmacogenomic effects on PK/PD parameters. |
| PD | Loveless_2012 | not_relevant | 2 | 1 | The study reports qualitative and percentage changes in imaging biomarkers (ADC, Ktrans) for treatment groups but does not provide drug concentration data or fit a dose-response/exposure-response model to derive numeric PD parameters like Emax or EC50. |
| PGx | Low_2024 | not_relevant | 0 | 0 | The paper describes a formulation strategy (cyclodextrin complex) to improve solubility and efficacy, not a pharmacogenomic effect of a gene variant on PK/PD. |
| PGx | Lu_2020 | not_relevant | 0 | 0 | The study evaluates the efficacy of a Traditional Chinese Medicine decoction in a mouse model and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of a herbal formula in a mouse model and does not report any pharmacogenomic effects or gene variant associations. |
| PD | Lv_2026 | not_relevant | 4 | 2 | The abstract mentions establishing a PK-PD model but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data in the provided text. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | The paper describes a rat knockout model and its phenotype, not a human pharmacogenomic study of eosin. |
| PGx | Ma_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of drug resistance reversal by Lycium barbarum polysaccharide in colon cancer cells and mice, but does not report any pharmacogenomic effects (gene variants affecting PK/PD) for the drug. |
| PGx | Ma_2024_2 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of a plant extract on hyperuricemia in mice and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Ma_2026 | not_relevant | 0 | 0 | The paper focuses on using deep learning to predict KRAS and TP53 mutation status from H&E images, not on how these variants affect the pharmacokinetics or pharmacodynamics of eosin. |
| PD | Ma_2026_2 | not_relevant | 3 | 1 | The study reports qualitative dose-dependent effects and mechanistic targets but does not provide numeric concentration-effect data, PK parameters, or a fitted PD model. |
| PGx | Magro_2002 | not_relevant | 0 | 0 | The paper discusses the immunophenotype and clonality of T-cells in Pityriasis lichenoides, not the pharmacogenomics of a drug. |
| PGx | Mao_2025 | not_relevant | 0 | 0 | The study investigates the effects of a probiotic on uric acid levels in mice and does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| PGx | Mao_2026 | not_relevant | 0 | 0 | The study investigates the effect of a toxin (T-2) on enzyme expression, not the effect of a gene variant on the PK/PD of a specific drug. |
| PGx | Matsui_1996 | not_relevant | 0 | 0 | The paper investigates maternal allergen stimulation and immune suppression in offspring, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | McHedlov-Petrossyan_2005 | irrelevant | 0 | 0 | The paper studies the spectroscopic properties and tautomerism of 2,4,5,7-tetranitrofluorescein, with eosin mentioned only as a structural comparator, and contains no pharmacokinetic data. |
| PD | McHedlov-Petrossyan_2005 | not_relevant | 0 | 0 | The paper describes the spectroscopic properties and tautomerism of a chemical dye (TNF) and does not report any pharmacodynamic or exposure-response data for the drug eosin. |
| popPK | Men_2020 | irrelevant | 0 | 0 | The paper studies Panax notoginseng saponins for wound healing and mentions eosin only as part of hematoxylin and eosin (H&E) staining, not as a drug subject for pharmacokinetic analysis. |
| PGx | Meneses_2019 | not_relevant | 0 | 0 | The paper studies the effect of an insulin-degrading enzyme knockout on testicular morphology and sperm quality, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| popPK | Mengoni_2011 | irrelevant | 0 | 0 | The paper studies anti-inflammatory compounds from rosemary (carnosic acid and carnosol) and does not involve the drug eosin or any pharmacokinetic parameters. |
| PGx | Mohamed_2025 | not_relevant | 0 | 0 | The paper describes a deep learning model for bladder cancer histopathology diagnosis and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Munhall_2026 | irrelevant | 0 | 0 | The study investigates cilastatin sodium in a crush syndrome model and uses iohexol as a GFR marker; eosin is not the subject drug and no PK parameters for it are reported. |
| PD | Munhall_2026 | not_relevant | 0 | 0 | The paper reports a binary treatment effect (cilastatin vs. vehicle) in a large animal model using linear mixed models, but does not provide drug concentration data or fit a pharmacodynamic model (e.g., Emax, EC50) to derive exposure-response parameters. |
| popPK | Nie_2025 | irrelevant | 0 | 0 | The study focuses on uricase (UOX) and immune tolerance, not the drug eosin. |
| PD | Nie_2025 | not_relevant | 0 | 0 | The paper describes an immunological mechanism (immune tolerance) and qualitative outcomes (uric acid control, inflammation attenuation) but does not report a quantitative pharmacodynamic model or numeric exposure-response parameters for eosin. |
| PGx | Ning_2023 | not_relevant | 0 | 0 | The paper investigates the association between ABCB11 expression in tumor microenvironments and resistance to immunotherapy, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of the drug eosin. |
| PGx | Oliva_2018 | not_relevant | 0 | 0 | The paper describes cell culture engineering for oral mucosa and does not involve pharmacogenomics or drug PK/PD parameters. |
| popPK | Owen_1983 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Owen_1983 | not_relevant | 0 | 0 | The paper focuses on mechanical 'cut-end' effects in in vitro artery segments and does not report any pharmacodynamic or exposure-response relationship for the drug eosin. |
| PGx | Pak_2016 | not_relevant | 0 | 0 | The paper investigates the anticancer effects of a herbal extract and gemcitabine in cell lines and mice, but does not report any pharmacogenomic effects (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Pan_2015 | irrelevant | 0 | 0 | The paper is a tissue engineering study on scaffold porosity and does not involve the drug eosin or pharmacokinetic parameters. |
| PGx | Park_2022 | not_relevant | 0 | 0 | The paper analyzes H&E staining and genomic profiles in lung cancer, not the pharmacokinetics or pharmacodynamics of the dye eosin. |
| PGx | Piehler_2026 | not_relevant | 0 | 0 | The paper is a review of diagnostic methods for congenital hemolytic anemias and does not report pharmacogenomic effects on the PK or PD of the drug eosin. |
| popPK | Pinet_2002 | irrelevant | 0 | 0 | The paper is an electrophysiology study where eosin is used as a channel blocker, not a pharmacokinetic study of eosin. |
| PD | Pinet_2002 | not_relevant | 3 | 2 | The paper reports a single EC50 value for chlorpromazine and qualitative dose-dependent blocking by ATP, but provides no numeric PD parameters or curve for eosin, which is only mentioned as a fixed-concentration blocker. |
| popPK | Pizzo_1991 | irrelevant | 0 | 0 | The paper is a mechanistic study on ATP-induced lysis in mouse thymocytes where Eosin Yellowish is used only as a probe for channel permeability, not as a subject drug for pharmacokinetic analysis. |
| popPK | Potunuru_2019 | irrelevant | 0 | 0 | The paper studies Amarogentin, not eosin, and focuses on mechanistic pharmacology rather than pharmacokinetic parameters. |
| PD | Powers_1994 | not_relevant | 0 | 0 | The paper is a biochemical study of mitochondrial channel inhibition and does not report pharmacodynamic exposure-response relationships or numeric PD parameters for the drug eosin in a physiological or clinical context. |
| popPK | Pysz_2015 | irrelevant | 0 | 0 | The paper is an imaging study using hematoxylin-eosin staining for histology, not a pharmacokinetic study of the drug eosin. |
| PGx | Qin_2021 | not_relevant | 0 | 0 | The study investigates the mechanism of a herbal remedy in rats and does not report any pharmacogenomic effects (gene variant impact) on PK or PD parameters. |
| PGx | Qin_2026 | not_relevant | 0 | 0 | The paper investigates the effect of a mycotoxin (deoxynivalenol) on enzyme expression, not the effect of a gene variant on the PK/PD of a specific drug. |
| PGx | Rakaee_2026 | not_relevant | 0 | 0 | The paper evaluates the performance of AI models for predicting EGFR mutations in lung cancer pathology slides and does not report pharmacokinetic or pharmacodynamic parameters of the drug eosin. |
| popPK | Ratnasooriya_1991 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | Ratnasooriya_1991 | not_relevant | 0 | 0 | The paper studies the sperm antimotility properties of a plant extract, which is unrelated to the drug eosin. |
| popPK | Robel_2025 | irrelevant | 0 | 0 | The paper is a histological study of immune cells in horse biopsies and does not involve the drug eosin or pharmacokinetic parameters. |
| PGx | Salgado_2015 | not_relevant | 0 | 0 | The paper analyzes the prognostic value of tumor-infiltrating lymphocytes (TILs) on clinical outcomes (pCR, EFS) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of eosin. |
| PGx | Schröder_2016 | not_relevant | 0 | 0 | The paper investigates the effect of a mitochondrial gene variant on the development of non-alcoholic steatohepatitis (NASH) and metabolic parameters, not on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Selles_2024 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Selles_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and scolicidal potencies (IC50) of an essential oil, which is a pharmacological efficacy study, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis for a drug in a biological system. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The paper studies the antidiabetic effects of Fraxinus xanthoxyloides bark extract and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PGx | Shang_2015 | not_relevant | 0 | 0 | The study investigates the effect of a drug on CYP enzyme activity in rats and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Shang_2025 | not_relevant | 1 | 0 | The study reports qualitative pharmacodynamic effects (mitophagy, protein expression) and mechanism of action but does not provide numeric exposure-response or dose-response parameters (e.g., EC50, Emax) or concentration-effect curves. |
| PD | Shang_2026 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects and optimal doses for a traditional formulation but lacks any exposure-response modeling, concentration-effect curves, or numeric PD parameters (e.g., EC50, Emax). |
| PGx | Shatos_2016 | not_relevant | 0 | 0 | The paper studies lacrimal gland pathology in a mouse model of Sjogren's syndrome and does not report pharmacokinetic or pharmacodynamic effects of a drug. |
| PD | Shen_2016 | not_relevant | 0 | 0 | The paper describes qualitative protective effects of diosmetin on retinal injury but does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| PGx | Shi_2017 | not_relevant | 0 | 0 | The paper investigates the effect of intermittent hypoxia on CYP1a2 expression in rats, not the effect of a genetic variant on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Stamford_1999 | irrelevant | 0 | 0 | The paper studies ascorbic acid (not eosin) and reports neuroprotective/histological outcomes, not pharmacokinetic parameters. |
| PGx | Sun_2016 | not_relevant | 0 | 0 | The paper describes a disease model (preeclampsia) in ApoE-knockout mice and does not report pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The paper is an MRI diagnostic study where "eosin" refers to the histological stain (H&E), not the drug, and contains no pharmacokinetic parameters. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The paper is about AI-assisted pathological diagnosis using virtual H&E staining, where "eosin" refers to the histological dye, not the drug eosin, and contains no pharmacokinetic data. |
| PD | Sun_2026 | not_relevant | 0 | 0 | The paper describes a deep learning framework for virtual histological staining (image-to-image translation) and contains no pharmacokinetic, pharmacodynamic, or dose-response data. |
| PGx | Sundaresan_2021 | not_relevant | 0 | 0 | The paper investigates the reduction of trabecular meshwork stem cells in glaucoma and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Suzuki_2026 | irrelevant | 0 | 0 | The paper is a histological study of neurogenic bladder and does not involve the drug eosin or any pharmacokinetic analysis. |
| PGx | Taghipour_2021 | not_relevant | 0 | 0 | The paper evaluates the scolicidal efficacy of a plant extract on a parasite in vitro and does not report any pharmacogenomic effects on PK or PD parameters. |
| PD | Tao_2026 | not_relevant | 1 | 0 | The study reports qualitative and comparative efficacy data (histology scores, cytokines) for a single dose but explicitly states that dose-response relationships and pharmacokinetics were not evaluated, leaving no extractable PD parameters. |
| PGx | Tian_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine herb pair in an asthma model and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tomasek_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of action of OM-89 (Uro-Vaxom) in bladder epithelium and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PD | Tomasek_2026 | not_relevant | 0 | 0 | The paper describes mechanistic cellular effects of OM-89 on lysosomal activity and bacterial clearance but does not report quantitative exposure-response or dose-response relationships with numeric PD parameters. |
| PGx | Tong_2026 | not_relevant | 0 | 0 | The study investigates the mechanism of action of a herbal formulation in a rat model and does not report any pharmacogenomic effects (gene variant impact) on PK or PD parameters. |
| popPK | Unosawa_2004 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Unosawa_2004 | not_relevant | 0 | 0 | The paper focuses on the physiological effects of a mechanical device (LVAD) on myocardial injury, not on the pharmacodynamic or exposure-response relationship of a drug. |
| PGx | Wan_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (DDI) involving CYP1A2 induction by rutaecarpine, not a pharmacogenomic effect based on genetic variants or genotypes. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The paper is a study on the synthesis and neuroprotective effects of ligustrazine derivatives, and "eosin" is mentioned only as a histological stain (hematoxylin and eosin), not as the subject drug for pharmacokinetic analysis. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper studies dietary betaine effects on fish metabolism, not a pharmacogenomic effect on a drug's PK/PD. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper studies steroidal pyridine compounds for RSV and does not involve the drug eosin or report any pharmacokinetic parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of Germacrone in lung injury, and "eosin" appears only as part of the histological staining technique (hematoxylin-eosin), not as the subject drug. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The study investigates the mechanism of action of a traditional Chinese medicine in an animal model of IBS-D and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a Chinese herbal formula in a disease model and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PD | Wang_2026_2 | not_relevant | 2 | 1 | The paper reports qualitative effects on portal pressure and cell proliferation but does not provide numeric concentration-effect curves, dose-response parameters (Emax/EC50), or a formal PK/PD model fit. |
| PGx | Wen_2020 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic model of hyperuricemia in mice but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of polyoxypregnanes as ABCB1 inhibitors and their PK interactions with paclitaxel, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper describes the construction of a rat model for esophageal stricture and analyzes histological and transcriptomic changes, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wu_2023_2 | not_relevant | 0 | 0 | The paper investigates the molecular mechanisms of bicyclol in NAFLD/NASH using proteomics in mice and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study investigates the wound healing effects of ligustroside, and eosin is only mentioned as a histological staining reagent (hematoxylin-eosin), not as the subject drug for pharmacokinetic analysis. |
| PD | Wu_2026 | not_relevant | 3 | 2 | The study reports a qualitative dose-response trend with two doses (5 and 10 mg/kg) but explicitly states it was not designed to establish a formal dose-response relationship and provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect curve. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The paper studies cytarabine-induced testicular damage in mice and does not involve the drug eosin or report any pharmacokinetic parameters. |
| PGx | Xing_2015 | not_relevant | 0 | 0 | The paper describes an animal model for alcoholic liver disease and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | The paper focuses on naloxone delivery and opioid overdose reversal, not the pharmacokinetics of eosin. |
| PD | Xing_2026 | not_relevant | 0 | 0 | The paper describes a device for drug delivery and overdose reversal but does not report pharmacokinetic data or fit a pharmacodynamic model (e.g., Emax, EC50) to derive numeric exposure-response parameters. |
| PD | Xu_2026 | not_relevant | 2 | 1 | The study is a pharmacological efficacy and metabolomics study in rats that compares different dose groups (high vs. low) but does not measure drug concentrations (PK) or fit a quantitative exposure-response or dose-response model (e.g., Emax, EC50); it only reports qualitative statistical differences in inflammatory markers and arthritis scores between groups. |
| popPK | Xu_2026_2 | irrelevant | 0 | 0 | The paper is a study on nanovesicle delivery for neuroinflammation and does not report pharmacokinetic parameters for the drug eosin. |
| PD | Xu_2026_2 | not_relevant | 0 | 0 | The paper reports qualitative efficacy and mechanistic data (RNA-seq, ELISA, behavioral tests) for a nanomedicine but does not provide concentration-effect curves, dose-response modeling, or numeric PD parameters (Emax, EC50, etc.). |
| PGx | Yadav_2013 | not_relevant | 0 | 0 | The paper evaluates the diagnostic accuracy of touch imprint cytology for surgical margins in oral cancer and does not involve pharmacogenomics or drug PK/PD parameters. |
| PGx | Yan_2026 | not_relevant | 0 | 0 | The paper investigates the impact of Mycoplasma pneumoniae infection on asthma control and inflammation, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Yu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of luteolin in a mouse model and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of miRNA55, not the drug eosin. |
| PD | Yue_2026 | not_relevant | 3 | 0 | The study is a mechanistic animal model investigation using fixed dose groups to assess efficacy and pathways, lacking any pharmacokinetic data, concentration-effect modeling, or derivable numeric PD parameters like Emax or EC50. |
| PD | Yıldırım_2026 | not_relevant | 0 | 0 | The study is a single-dose (20 µg/kg) mechanistic investigation in an animal model that reports qualitative changes in biochemical and histological markers, but it does not measure drug concentrations, perform PK/PD modeling, or provide numeric dose-response parameters (e.g., Emax, EC50). |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper is a histomorphological study of brain arteriovenous malformations and does not involve the drug eosin or pharmacokinetic parameters. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The subject drug is furanodiene, and eosin is only mentioned as a staining method for microscopy. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper focuses on the development and characterization of a novel FSH agonist (likely PK, binding, or in vitro activity) and does not report a pharmacodynamic exposure-response or dose-response relationship for the drug eosin. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on the physical properties, dissolution, and antioxidant activity of plant powders, with no pharmacodynamic modeling or exposure-response analysis for the drug eosin. |
| PGx | Zhang_2024_2 | not_relevant | 0 | 0 | The paper investigates the role of the QRICH2 gene in sperm function and infertility, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| PD | Zhang_2026_2 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (reduced liver injury, pathway activation) and mechanistic studies (metabolomics, network pharmacology) but does not report numeric concentration-effect or dose-response parameters (e.g., Emax, EC50) or a formal PK/PD model. |
| PGx | Zhao_2026 | not_relevant | 0 | 0 | The study investigates the mechanism of a traditional formula in rats and does not report human pharmacogenomic effects on PK or PD parameters. |
| popPK | Zhao_2026_2 | irrelevant | 0 | 0 | The paper investigates a sialidase inhibitor for ulcerative colitis and does not mention the drug eosin or report any pharmacokinetic parameters. |
| PD | Zhao_2026_2 | not_relevant | 0 | 0 | The paper reports clinical and preclinical efficacy outcomes (symptom improvement, microbiota changes) but does not provide drug concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PD | Zheng_2026 | not_relevant | 0 | 0 | The study is a mechanistic animal experiment comparing treatment groups (FMT) without measuring drug concentrations or fitting a quantitative exposure-response or dose-response model. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of a drug (Jujuboside A) in a disease model and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper investigates the tumor microenvironment and immunotherapy mechanisms in gastric cancer, not the pharmacokinetics or pharmacodynamics of the drug eosin. |
| PD | Zhou_2026 | not_relevant | 4 | 3 | The paper reports a dose-response relationship for BCAA supplementation on muscle morphology, but it lacks specific numeric effect values (e.g., mean weights, percentages) in the provided text, making it impossible to derive numeric PD parameters like Emax or EC50. |
| PGx | Zhu_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of a herbal medicine in rats using microbiome and metabolomics, with no mention of human gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Zhu_2026 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of dendrobine on diabetic retinopathy in zebrafish and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Zou_2024 | not_relevant | 0 | 0 | The paper investigates genetic mutations and immune infiltration in a brain tumor (ETMR) and does not report any pharmacokinetic or pharmacodynamic effects of a drug. |
| PD | Zou_2025 | not_relevant | 2 | 1 | The study reports qualitative dose-response effects (medium/high doses suppress metastasis) but lacks numeric concentration-effect data, PK parameters, or a formal PD model fit. |
| PGx | Šuca_2026 | not_relevant | 0 | 0 | The paper investigates the effect of dressing thickness on wound healing and systemic exposure in a porcine model, with no mention of gene variants or pharmacogenomics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
