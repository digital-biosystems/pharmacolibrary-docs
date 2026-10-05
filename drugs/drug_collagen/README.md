<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;collagen&quot;}]"></div>

# collagen

- **generic name:** collagen
- **ATC codes:** `B02BC07`, `G04BX11`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Collagen, a fibrous protein of connective tissue, is used as a local hemostatic to help stop bleeding and as a urological agent. It remains in medical use, classified in the ATC system for local hemostatic and other urological applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q26868](https://www.wikidata.org/wiki/Q26868) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:31 | 20:11 | 0/0/0 | 0/1/0 | 0/0/1 | 805,730/21,032 | ollama / qwen3.8:27b-mtp-q8_0 | 73 | 8/92 | 72/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Smith_2000_Ad](drugs/drug_collagen/pd_Smith_2000_Ad.md) | adrenaline (Ad) efflux ← collagen · direct sigmoid Emax (Hill) effect | — | Smith CT et al., Platelet noradrenaline and adrenaline e…, Platelets (2000) | [10.1080/09537100020000166](https://doi.org/10.1080/09537100020000166) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Smith_2000_NA](drugs/drug_collagen/pd_Smith_2000_NA.md) | noradrenaline (NA) efflux ← collagen · direct sigmoid Emax (Hill) effect | — | Smith CT et al., Platelet noradrenaline and adrenaline e…, Platelets (2000) | [10.1080/09537100020000166](https://doi.org/10.1080/09537100020000166) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">mouse</span> | **SLCO1B1** | `Q22` · CL | transport | [Taylor_2021](drugs/drug_collagen/pgx_Taylor_2021_SLCO1B1_Q22.md) | Taylor ZL et al., Toward pharmacogenetic SLCO1B1-guided d…, Clinical and translational… (2021) | [10.1111/cts.13086](https://doi.org/10.1111/cts.13086) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=collagen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` transport | paper PGx gene |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4179 matched, 237 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bednar_1995.pdf` | Bednar B et al., Platelet aggregation monitored in a 96…, Thrombosis research (1995) | pd | 4 | [10.1016/0049-3848(95)93881-y](https://doi.org/10.1016/0049-3848(95)93881-y) | [7778060](https://www.ncbi.nlm.nih.gov/pubmed/7778060) | metadata signals extractable PD data (EC50) |
| `Gryglewski_1987.pdf` | Gryglewski RJ et al., On the mechanism of antithrombotic acti…, Biochemical pharmacology (1987) | pd | 4 | [10.1016/0006-2952(87)90288-7](https://doi.org/10.1016/0006-2952(87)90288-7) | [3101704](https://www.ncbi.nlm.nih.gov/pubmed/3101704) | metadata signals extractable PD data (EC50) |
| `Li_2025.pdf` | Li J et al., Release pattern of potent dipeptidyl pe…, Food chemistry (2025) | pd | 4 | [10.1016/j.foodchem.2025.144970](https://doi.org/10.1016/j.foodchem.2025.144970) | [40450856](https://www.ncbi.nlm.nih.gov/pubmed/40450856) | metadata signals extractable PD data (IC50) |
| `Neufeld_1992.pdf` | Neufeld TK et al., In vitro formation and expansion of cys…, Kidney international (1992) | pd | 4 | [10.1038/ki.1992.184](https://doi.org/10.1038/ki.1992.184) | [1319521](https://www.ncbi.nlm.nih.gov/pubmed/1319521) | metadata signals extractable PD data (EC50) |
| `Rodan_1989.pdf` | Rodan SB et al., Opposing effects of fibroblast growth f…, The Journal of biological c… (1989) | pd | 4 | not captured | [2479640](https://www.ncbi.nlm.nih.gov/pubmed/2479640) | metadata signals extractable PD data (EC50) |
| `Roth_1986.pdf` | Roth GJ et al., Localization of binding sites within hu…, Biochemistry (1986) | pd | 4 | [10.1021/bi00374a004](https://doi.org/10.1021/bi00374a004) | [3493805](https://www.ncbi.nlm.nih.gov/pubmed/3493805) | metadata signals extractable PD data (EC50) |
| `Sheng_2022.pdf` | Sheng Y et al., Novel Antioxidant Collagen Peptides of…, Marine drugs (2022) | pd | 4 | [10.3390/md20050325](https://doi.org/10.3390/md20050325) | [35621976](https://www.ncbi.nlm.nih.gov/pubmed/35621976) | metadata signals extractable PD data (EC50) |
| `Sun_2021.pdf` | Sun N et al., Inhibition of Arterial Thrombus Formati…, Langmuir : the ACS journal… (2021) | pd | 4 | [10.1021/acs.langmuir.1c00894](https://doi.org/10.1021/acs.langmuir.1c00894) | [34047558](https://www.ncbi.nlm.nih.gov/pubmed/34047558) | metadata signals extractable PD data (IC50) |
| `Zhao_2022.pdf` | Zhao R et al., Prediction of Axillary Lymph Node Metas…, Ultrasound in medicine & bi… (2022) | pd | 4 | [10.1016/j.ultrasmedbio.2022.05.018](https://doi.org/10.1016/j.ultrasmedbio.2022.05.018) | [35691734](https://www.ncbi.nlm.nih.gov/pubmed/35691734) | metadata signals extractable PD data (Emax) |
| `Zheng_2022.pdf` | Zheng S et al., Development of the Antithrombotic Pepti…, Langmuir : the ACS journal… (2022) | pd | 4 | [10.1021/acs.langmuir.2c00587](https://doi.org/10.1021/acs.langmuir.2c00587) | [35623058](https://www.ncbi.nlm.nih.gov/pubmed/35623058) | metadata signals extractable PD data (IC50) |
| `Nemoto_1994.pdf` | Nemoto N et al., Elevated expression of the Cyp1a2 gene…, Archives of biochemistry an… (1994) | pgx | 7 | [10.1006/abbi.1994.1041](https://doi.org/10.1006/abbi.1994.1041) | [7508708](https://www.ncbi.nlm.nih.gov/pubmed/7508708) | metadata signals extractable PGX data (Cyp1a2, PK/PD-context) |

<sub>queue written 2026-10-05T18:17:39.262645+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrahamsson_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of growth factors on collagen synthesis, not a pharmacokinetic study of collagen as a drug. |
| popPK | Adami_2026 | irrelevant | 0 | 0 | The study investigates bone turnover markers (P1NP, CTX) and Dkk1 levels in response to romosozumab, not the pharmacokinetics of collagen as a drug. |
| popPK | Ahmed_2022 | irrelevant | 0 | 0 | The paper is a dental materials study on bonding agents and collagen fibril exposure, not a pharmacokinetic study of collagen as a drug. |
| popPK | Al-Abdulraheem_2026 | irrelevant | 0 | 0 | The study focuses on drug repositioning for pulmonary fibrosis using ouabain and helenalin, with no mention of collagen as the subject drug or its pharmacokinetic parameters. |
| PD | Al-Abdulraheem_2026 | not_relevant | 0 | 0 | The paper focuses on drug repositioning workflows, in silico screening, and gene expression validation, without reporting any pharmacokinetic or pharmacodynamic exposure-response data or numeric PD parameters. |
| popPK | Al_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for von Willebrand factor (VWF) and Factor VIII, not collagen. |
| PD | Al_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for VWF and FVIII levels but does not model or report a pharmacodynamic (exposure-response or dose-response) relationship for collagen binding or any other effect. |
| popPK | Alarayyed_1995 | irrelevant | 0 | 0 | The study investigates in vitro platelet aggregation where collagen is used as an agonist, not as a drug subject to pharmacokinetic analysis. |
| PGx | Allamand_2011 | not_relevant | 0 | 0 | The paper reviews the pathophysiology and genetics of Collagen VI myopathies, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Augustin-Voss_1992 | irrelevant | 0 | 0 | The study investigates endothelial cell migration in vitro using collagen as a matrix coating, not the pharmacokinetics of collagen as a drug. |
| popPK | Bednar_1995 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Bednar_1995 | not_relevant | 0 | 0 | The paper discusses platelet aggregation assays and does not report any pharmacodynamic or exposure-response relationship for collagen. |
| PGx | Bezrodnyhk_1994 | not_relevant | 0 | 0 | The paper discusses the epidemiology and clinical manifestations of collagen diseases (SLE, SSD) in different ethnic groups, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Bhattarai_2024 | not_relevant | 0 | 0 | The paper investigates genetic variants in fibronectin (FN1) and collagen (COL6A2) associated with Alzheimer's disease risk, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Black_2022 | irrelevant | 0 | 0 | The study is an ex vivo proteomic analysis of cartilage catabolism and dexamethasone response, not a pharmacokinetic study of collagen as a drug. |
| PGx | Bury_2019 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of platelet-type von Willebrand disease (thrombocytopenia and proplatelet formation) and does not report pharmacokinetic or pharmacodynamic parameters of collagen as a drug. |
| PGx | Byers_1985 | not_relevant | 0 | 0 | The paper discusses genetic mutations in Ehlers-Danlos syndrome affecting collagen structure and function, but does not report pharmacokinetic or pharmacodynamic parameters of a drug. |
| popPK | Bélichard_1992 | irrelevant | 0 | 0 | The study investigates cardiac arrhythmias and electrophysiology in rats, measuring collagen content as a tissue marker rather than studying the pharmacokinetics of collagen as a drug. |
| popPK | Cai_2026 | irrelevant | 0 | 0 | The study investigates the association between skin advanced glycation end products (AGEs) and bone mineral density, not the pharmacokinetics of collagen as a drug. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not collagen. |
| PD | Camargo_2025 | not_relevant | 4 | 3 | The paper reports PK parameters and qualitative/semi-quantitative dose-response effects (BP reduction, vascular reactivity curves) but does not provide a formal PD model or numeric PD parameters (e.g., Emax, EC50) linking exposure to effect. |
| PGx | Carew_1992 | not_relevant | 0 | 0 | The paper investigates the effect of glycosylation on von Willebrand factor binding to platelets, not a pharmacogenomic effect on the PK/PD of collagen. |
| popPK | Carleton_2008 | irrelevant | 0 | 0 | The study investigates stable isotope (13C) incorporation rates in house sparrows, not the pharmacokinetics of collagen as a drug. |
| popPK | Cejas_2008 | irrelevant | 0 | 0 | The paper describes the self-assembly and thrombogenic activity of collagen-mimetic peptides, not the pharmacokinetics of collagen as a drug. |
| popPK | Chan_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug vosoritide, not for collagen (which is only mentioned as a biomarker source). |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of triptolide in a collagen-induced arthritis model, not the pharmacokinetics of collagen itself. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper describes an in vitro microfluidic device where collagen is used as a structural material, not as a drug subject to pharmacokinetic analysis. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of ARC-18 on Duchenne muscular dystrophy in mice, where collagen is mentioned only as a marker of fibrosis, not as the subject drug for pharmacokinetic analysis. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of paclitaxel nanomedicines and does not report pharmacokinetic parameters for collagen. |
| PD | Cheng_2026 | not_relevant | 0 | 0 | The paper is a narrative review of paclitaxel nanomedicines and does not report any pharmacodynamic or exposure-response analysis for collagen or any other drug. |
| popPK | Chuang_2026 | irrelevant | 0 | 0 | The study investigates the transcriptomic effects of a TDO2 inhibitor on fibroids and mentions collagen gene expression (COL11A1) but does not report pharmacokinetic parameters for collagen. |
| PD | Chuang_2026 | not_relevant | 1 | 0 | The paper reports qualitative transcriptomic and protein changes (e.g., reduced COL11A1) following treatment with a TDO2 inhibitor, but it does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for collagen. |
| PGx | Claassen_1995 | not_relevant | 0 | 0 | The study investigates the effect of dietary fatty acids on bone status in rats and does not involve gene variants or pharmacogenomics. |
| popPK | Cooper_1995 | irrelevant | 0 | 0 | The study investigates adenosine receptor pharmacology in human platelets where collagen is used only as a stimulus for serotonin release, not as a drug subject to pharmacokinetic analysis. |
| popPK | Cunha_2023 | irrelevant | 0 | 0 | The paper analyzes platelet function and vascular calcification in humans, where collagen is mentioned only as a platelet agonist, not as a drug subject to pharmacokinetic analysis. |
| popPK | Deng_2026 | irrelevant | 0 | 0 | The paper describes a bioartificial liver model for AML and hepatotoxicity studies, containing no pharmacokinetic data for collagen. |
| PGx | Diegel_2020 | not_relevant | 0 | 0 | The paper investigates the effects of an osteocalcin gene knockout on bone properties and physiology, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Ding_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Artemetin in asthma and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Dodda_2026 | irrelevant | 0 | 0 | The paper describes the material science and in vitro biocompatibility of composite films, not the pharmacokinetics of collagen. |
| PD | Dodda_2026 | not_relevant | 0 | 0 | The paper characterizes the mechanical and biological properties of composite films (PCL/MXene/Gelatin) but does not report a pharmacodynamic or exposure-response relationship for a drug. |
| popPK | Dogan_2025 | irrelevant | 0 | 0 | The paper describes an in vitro microphysiological system for cancer metastasis where collagen is a component of the extracellular matrix, not a drug subject to pharmacokinetic analysis. |
| PGx | Drechsler_2017 | not_relevant | 0 | 0 | The paper describes the development of a tissue engineering scaffold using collagen and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Du_2023 | not_relevant | 0 | 0 | The paper describes a hydrogel for wound healing and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Duriez_2020 | not_relevant | 0 | 0 | The paper describes an in vitro 3D liver model for NASH and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of collagen. |
| PGx | Enwonwu_1977 | not_relevant | 0 | 0 | The paper studies protein-energy malnutrition in non-human primates and does not involve pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Epstein-Shochet_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nintedanib, not collagen, and collagen is only mentioned as a biomarker of fibrosis. |
| PGx | Faakye_2025 | not_relevant | 0 | 0 | The paper investigates the effect of a genetic modification (GlycoHi) on cardiac aging and metabolism, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Fainberg_2024 | irrelevant | 0 | 0 | The study is a clinical biomarker analysis of pulmonary fibrosis endotypes and does not report pharmacokinetic parameters for collagen. |
| PD | Fedorova_2019 | not_relevant | 2 | 1 | The paper reports EC50 values for sodium nitroprusside (a vasorelaxant) to assess vascular function, but does not report a pharmacodynamic model or exposure-response relationship for collagen synthesis or the drug of interest (MBG/antibody). |
| popPK | Fischer_1995 | irrelevant | 0 | 0 | The study investigates the effects of anesthetics on brain endothelial permeability in vitro, where collagen is only used as a coating material for the membranes, not as the subject drug for pharmacokinetic analysis. |
| PGx | Fonseca_2017 | not_relevant | 0 | 0 | The paper investigates gene expression related to meat tenderness in cattle, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Formosa_2024 | not_relevant | 0 | 0 | The paper reviews genetic causes of osteoporosis (e.g., collagen defects) but does not report pharmacogenomic effects on the PK or PD of a specific drug. |
| popPK | Gajić_2026 | irrelevant | 0 | 0 | The study investigates the effects of diazepam on human umbilical arteries in an in vitro model and does not report pharmacokinetic parameters for collagen. |
| PD | Gajić_2026 | not_relevant | 2 | 1 | The study is an in vitro mechanistic investigation using fixed concentrations (100 μmol/L) and qualitative comparisons, lacking a dose-response curve or numeric PD parameters (Emax, EC50) for the drug. |
| PGx | García-Flores_2026 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic effects of a novel drug on platelet aggregation but does not investigate the impact of any gene variant or genotype on these parameters. |
| PGx | Ghoubay-Benallaoua_2017 | not_relevant | 0 | 0 | The paper describes cell isolation and culture methods for corneal stem cells, not pharmacogenomic effects on drug PK/PD parameters. |
| PGx | Godeneche_2009 | not_relevant | 0 | 0 | The study investigates aspirin non-response and platelet function, not the pharmacokinetics or pharmacodynamics of collagen. |
| PGx | Gray_2025 | not_relevant | 0 | 0 | The paper studies bacterial virulence and embryo lethality, not pharmacogenomics or drug PK/PD parameters. |
| popPK | Gritsch_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of von Willebrand factor (rVWF), not collagen, which is only mentioned as a binding substrate in functional assays. |
| popPK | Gryglewski_1987 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | Gryglewski_1987 | not_relevant | 0 | 0 | The paper discusses the mechanism of antithrombotic action of flavonoids, not collagen, and does not report PD parameters for collagen. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of LOXL4-driven matrix stiffening and T cell exhaustion in lung cancer, not the pharmacokinetics of collagen. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper describes a mechanistic study of LOXL4 and acetyldigoxin in lung cancer but does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters (e.g., EC50, Emax) for the drug. |
| PGx | Gäberlein_2023 | not_relevant | 0 | 0 | The paper characterizes the genetics of a cell line and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of collagen. |
| PGx | Görtz_2001 | not_relevant | 0 | 0 | The paper discusses genetic associations with osteoporosis and bone mineral density, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Habotta_2026 | not_relevant | 0 | 0 | The study investigates the therapeutic efficacy of selenium nanoparticles in a silicosis mouse model and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Hadar_2024 | not_relevant | 0 | 0 | The paper describes a genetic variant (THBS2) causing a connective tissue disorder (Ehlers-Danlos syndrome) and its effect on collagen structure and bleeding time, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Hall_2019 | irrelevant | 0 | 0 | The study evaluates the biological performance (cell adhesion/viability) of collagen-containing electrospun scaffolds, not the pharmacokinetics of collagen as a drug. |
| PD | Hall_2019 | not_relevant | 2 | 1 | The paper reports cell viability assays for drugs (IRG/LEVO) on scaffolds and mentions an external EC50 for IRG, but does not report a PD model or extractable numeric PD parameters for collagen itself. |
| popPK | Hamilton_2022 | irrelevant | 0 | 0 | The paper is a pharmacological study on the anti-fibrotic effects of tomentosenol A, not a pharmacokinetic study of collagen. |
| PGx | Haruyama_2021 | not_relevant | 0 | 0 | The paper studies the effect of a transgenic protein (LRAP) on bone turnover, not the pharmacokinetics or pharmacodynamics of a drug (collagen) influenced by a gene variant. |
| PGx | Herzfeld_1980 | not_relevant | 0 | 0 | The paper reports enzyme concentrations in fetal and neoplastic tissues but does not investigate the effect of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hori_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin, with collagen used only as a co-administered excipient to stabilize insulin, not as the subject drug. |
| PGx | Huang_2015 | not_relevant | 0 | 0 | The paper investigates the effect of Pycnogenol on bone parameters in rats and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ibrahim_2022 | irrelevant | 0 | 0 | The study focuses on wound healing and biomarker expression in a mouse model, not on the pharmacokinetic disposition parameters (CL, V, etc.) of collagen. |
| PD | Ibrahim_2022 | not_relevant | 3 | 2 | The paper reports a single EC50 value for honey-propolis wax (HPW) in an in vitro assay and compares fixed treatment groups in vivo, but does not provide a concentration-effect curve or dose-response model for the collagen scaffold itself. |
| popPK | Jen_2021 | irrelevant | 0 | 0 | The paper describes a computational pathology tool for detecting collagen in tissue images, not a pharmacokinetic study of collagen as a drug. |
| popPK | Jepsen_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing soft tissue dimensions and esthetics following collagen matrix augmentation, not a pharmacokinetic study of collagen disposition. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study investigates collagen fiber features and COL1A1 expression as diagnostic biomarkers for breast lesions, not the pharmacokinetics of collagen as a drug. |
| PD | Jiang_2022 | not_relevant | 0 | 0 | The paper analyzes the correlation between collagen expression (COL1A1) and tissue stiffness (elasticity) in breast lesions, which is a biomechanical/histological study, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Johnson_2025 | irrelevant | 0 | 0 | The paper describes a conceptual framework for multicellular systems biology modeling and does not contain any pharmacokinetic data for collagen. |
| PD | Johnson_2025 | not_relevant | 0 | 0 | The paper describes a computational framework for agent-based modeling of multicellular systems and does not report pharmacodynamic parameters or exposure-response relationships for collagen. |
| popPK | Jourdain_2026 | irrelevant | 0 | 0 | The study focuses on the in vitro effects of leucettamine B and nacryline derivatives on endochondral ossification, not the pharmacokinetics of collagen. |
| PD | Jourdain_2026 | not_relevant | 2 | 1 | The paper reports single-dose (0.2 mM) screening results and qualitative in silico PK/PD predictions, but does not provide a dose-response curve or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Kabra_2021 | irrelevant | 0 | 0 | The study investigates a glycan mimetic (SBR-294) that binds collagen, but does not report pharmacokinetic parameters for collagen itself. |
| popPK | Kalugin_2026 | irrelevant | 0 | 0 | The paper describes a method for tracking neuromodulators in the brain and does not involve the drug collagen or its pharmacokinetics. |
| PD | Kalugin_2026 | not_relevant | 0 | 0 | The paper describes a method for multiplexed optical recording of neuromodulators and does not report any pharmacodynamic or exposure-response relationship for collagen. |
| popPK | Kashmoola_2026 | irrelevant | 0 | 0 | The paper is a narrative review on polypharmacy and bone health in diabetes, containing no pharmacokinetic data for collagen. |
| PD | Kashmoola_2026 | not_relevant | 1 | 0 | The paper is a narrative review discussing qualitative effects of polypharmacy on bone health and does not report any numeric pharmacodynamic parameters or exposure-response relationships. |
| popPK | Kassam_2020 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of a collagen-targeted peptide amphiphile (nanomaterial), not the drug collagen itself. |
| PGx | Kharasch_1987 | not_relevant | 0 | 0 | The paper is a theoretical speculation about cancer mechanisms and tyrosinase, containing no pharmacogenomic data or PK/PD parameters for collagen. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The study is a tissue engineering investigation focusing on collagen fiber formation and mechanical properties, not the pharmacokinetics of collagen as a drug. |
| PGx | Kiratipaiboon_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of carbon nanotube-induced fibrosis and SOX2's role in collagen synthesis, not the pharmacogenomics of a drug's PK/PD. |
| popPK | Komez_2020 | irrelevant | 0 | 0 | The paper describes a 3D bone tumor model using collagen as a scaffold material, not a pharmacokinetic study of collagen as a drug. |
| popPK | Kovács_1990 | irrelevant | 0 | 0 | The paper studies platelet aggregation induced by collagen as a reagent, not the pharmacokinetics of collagen as a drug. |
| PD | Kovács_1990 | not_relevant | 4 | 2 | The paper reports EC50 values for collagen-induced platelet aggregation, which is a pharmacodynamic parameter, but the specific numeric values are not provided in the abstract, making them non-extractable from the given text. |
| PGx | Krzistetzko_2023 | not_relevant | 0 | 0 | The paper investigates the effect of Stabilin gene knockouts on liver fibrosis and collagen deposition, which is a disease pathology, not a pharmacokinetic or pharmacodynamic parameter of a drug. |
| popPK | Kuang_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of LY06006 (a denosumab biosimilar), not collagen; collagen is only mentioned as a biomarker (Type 1 collagen C-terminal telopeptide) for pharmacodynamic analysis. |
| PGx | Kudrycka_2025 | not_relevant | 0 | 0 | The paper investigates the effect of PHLDA1 silencing on tumor growth and collagen content, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for romosozumab and exercise in osteoporosis, not a pharmacokinetic study of collagen. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of BET inhibition in a murine cGVHD model and mentions collagen deposition as a pathological outcome, but does not report pharmacokinetic parameters for collagen as a drug. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper describes mechanistic effects of BET inhibition on fibrosis and lung function in a murine model but does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | König_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on collagen VII synthesis and deposition, not a pharmacokinetic study of collagen as a drug. |
| popPK | Laboyrie_2025 | irrelevant | 0 | 0 | The study investigates arteriovenous fistula remodeling in a mouse model of kidney disease and mentions collagen deposition qualitatively, but does not report pharmacokinetic parameters for collagen as a drug. |
| popPK | Lamberti_2026 | irrelevant | 0 | 0 | The paper studies mRNA translation dynamics and ribosome occupancy, not the pharmacokinetics of collagen. |
| PD | Lamberti_2026 | not_relevant | 0 | 0 | The paper focuses on mRNA translation dynamics and ribosome kinetics using a TASEP model, not on pharmacodynamic exposure-response relationships for a drug. |
| PGx | Lee_2025 | not_relevant | 0 | 0 | The paper investigates LGR5 as a stem cell marker in limbal epithelium and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of collagen. |
| PGx | Li_1995 | not_relevant | 0 | 0 | The paper studies drug-drug interaction (rifampicin inducing lidocaine metabolism) in hepatocytes, not a pharmacogenomic effect of a gene variant on a PK/PD parameter. |
| PD | Li_2025 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a collagen hydrolysate mixture, which is a static potency metric rather than a dynamic exposure-response or dose-response relationship with derivable PD parameters (e.g., Emax, EC50 curve, or time-dependent effect). |
| PGx | Lin_2025 | not_relevant | 0 | 0 | The study investigates disease-drug interactions (RA-induced cytokine suppression of CYP3A4/P-gp) rather than genetic variants or pharmacogenomic effects. |
| popPK | Ling_2019 | irrelevant | 0 | 0 | The study is a biomechanical analysis of collagen network structure in the eye, not a pharmacokinetic study of collagen as a drug. |
| PD | Ling_2019 | not_relevant | 0 | 0 | The paper analyzes the biomechanical structure-strain relationship of collagen in the lamina cribrosa, not a pharmacodynamic drug exposure-response relationship. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of anakinra in rats with collagen-induced arthritis, not the pharmacokinetics of collagen itself. |
| popPK | Liu_2011_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the BTK inhibitor GDC-0834 in a collagen-induced arthritis model, not the pharmacokinetics of collagen itself. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of liver damage and fibrosis (collagen upregulation) caused by UGT1A1 dysfunction and bilirubin accumulation, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The paper focuses on intratumoral heterogeneity and ECM remodeling in HCC, not on pharmacogenomic effects on the PK/PD of a specific drug. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study investigates the biotransformation of obefazimod, not collagen. |
| PD | Lochman_2026 | not_relevant | 0 | 0 | The paper focuses on the identification and quantification of obefazimod metabolites (biotransformation) in sheep and nematodes, not on pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Lon_2011 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug etanercept, not for collagen, which is only used to induce the disease model. |
| popPK | Lon_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug abatacept, not for collagen, which is used only as an agent to induce arthritis in the rats. |
| PGx | Ma_2014 | not_relevant | 0 | 0 | The paper describes the histological and immunohistochemical characteristics of corneal epithelium in sclerocornea, not a pharmacogenomic effect on a drug's PK/PD. |
| PGx | Ma_2026 | not_relevant | 0 | 0 | The paper investigates the role of the CD36 gene in knee osteoarthritis and meniscal degeneration, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Martin_2019 | irrelevant | 0 | 0 | The study investigates the mechanism of relaxin on cardiac remodeling and collagen synthesis in rats, not the pharmacokinetics of collagen as a drug. |
| PD | Martin_2019 | not_relevant | 4 | 3 | The paper reports a dose-response relationship for Relaxin on Nav1.5 expression (EC50 = 1.3 nM), but the specific effect on collagen is only described qualitatively (inhibition of TGFβ-induced elevation) without numeric PD parameters or a concentration-effect curve for collagen. |
| popPK | Matharoo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adapalene, not collagen. |
| popPK | Mathur_2026 | irrelevant | 0 | 0 | The paper is a computational study on gene expression modeling and contains no pharmacokinetic data for collagen. |
| PD | Mathur_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning (GNNs) for temporal transcriptomics to identify gene mechanisms in responders vs. non-responders; it does not report pharmacokinetic data, drug concentrations, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for collagen or any other drug. |
| popPK | Midgett_2020 | irrelevant | 0 | 0 | The study investigates the biomechanical deformation of collagen in the eye, not the pharmacokinetics of collagen as a drug. |
| PD | Midgett_2020 | not_relevant | 0 | 0 | The paper analyzes biomechanical pressure-strain relationships in ocular tissue, not pharmacodynamic drug exposure-response relationships. |
| PGx | Min-DeBartolo_2019 | not_relevant | 0 | 0 | The paper investigates the role of the TSP-1 gene in NASH pathophysiology and fibrosis, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Mitchell_2026 | irrelevant | 0 | 0 | The paper is a preclinical study on FAK inhibition in NF2 schwannomatosis in mice, and collagen is only mentioned as a histological component of onion-bulb formations, not as a drug subject to pharmacokinetic analysis. |
| PD | Moore_1986 | not_relevant | 3 | 5 | The paper reports an IC50 for a specific inhibitor (N-(benzyloxcarbonyl)-Pro-Leu-Gly-NHOH) against collagenase, which is an enzyme kinetics parameter, not a pharmacodynamic exposure-response relationship for the drug collagen itself. |
| PGx | Motmaen_2023 | not_relevant | 0 | 0 | The paper investigates deep learning classification of collagen staining for prognosis in Hodgkin's disease and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mäkitie_2022 | not_relevant | 0 | 0 | The paper discusses genetic causes of osteoporosis and general management, but does not report pharmacogenomic effects on the PK or PD of a specific drug. |
| PGx | Nagy_2017 | not_relevant | 0 | 0 | The paper investigates the role of the ABCG2 transporter in cardiac fibrosis and dysfunction, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Nemoto_1993 | not_relevant | 0 | 0 | The paper investigates CYP1A1/2 gene expression in mouse hepatocytes and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of collagen. |
| PGx | Nemoto_1994 | not_relevant | 0 | 0 | The paper investigates the effect of nicotinamide on CYP1A2 gene expression in mouse hepatocytes, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of collagen. |
| PGx | Neradilová_2022 | not_relevant | 0 | 0 | The paper investigates the genetic basis of a disease (alopecia) and mentions collagen formation as a pathway, but does not report pharmacogenomic effects on the PK/PD of a drug. |
| popPK | Neufeld_1992 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Neufeld_1992 | not_relevant | 0 | 0 | The paper describes in vitro cyst formation from renal cells and does not report any pharmacodynamic or exposure-response relationship for collagen. |
| popPK | Niu_2026 | irrelevant | 0 | 0 | The paper investigates the role of RGS19 in renal fibrosis and mentions collagen deposition as a pathological outcome, but it is not a pharmacokinetic study of collagen as a drug. |
| PD | Niu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of RGS19 in renal fibrosis using gene knockdown and nanoparticle delivery, reporting qualitative changes in collagen deposition and immune markers, but it does not perform pharmacokinetic analysis or fit a quantitative exposure-response or dose-response model with numeric PD parameters. |
| PGx | Okada_2020 | not_relevant | 2 | 5 | The paper investigates the effect of UGT1A9 expression levels (knockdown/overexpression) on the pharmacodynamic effect of dapagliflozin (cell adhesion), but it does not report a specific human gene variant or genotype associated with a change in PK/PD parameters. |
| PGx | Omosule_2023 | not_relevant | 0 | 0 | The paper investigates the effects of antibody treatments on bone and muscle in a mouse model of osteogenesis imperfecta, not the pharmacokinetics or pharmacodynamics of collagen itself. |
| popPK | Osterhout_2026 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Osterhout_2026 | not_relevant | 0 | 0 | The paper reports biomarker changes associated with treatment (seralutinib vs placebo) but does not provide drug exposure data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Paclíková_2025 | irrelevant | 0 | 0 | The study uses collagen as an ex vivo platelet aggregation inducer (agonist) to test antiplatelet drugs, not as a subject drug for pharmacokinetic analysis. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetic modeling and does not report quantitative PK parameters for collagen. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic modeling frameworks for nanoparticles and does not report any specific pharmacodynamic or exposure-response data for collagen. |
| PGx | Peng_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of a natural compound in liver fibrosis using network pharmacology and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Perła-Kajan_2016 | not_relevant | 0 | 0 | The paper describes a genetic mechanism affecting collagen structure in a disease model, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibandronate, using collagen (uCTX) only as a pharmacodynamic biomarker, not as the subject drug. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The study focuses on glycine's role in hepatocyte maturation and metabolism, with collagen mentioned only as a product of the phenotype, not as a subject drug for PK analysis. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper is a metabolomics study on cell differentiation and does not report a pharmacodynamic exposure-response or dose-response relationship for collagen with numeric PD parameters. |
| popPK | Qiu_2019 | irrelevant | 0 | 0 | The paper describes the preparation and antioxidant activity of gelatin peptides from fish scales, not the pharmacokinetics of collagen as a drug. |
| popPK | Rani_2026 | irrelevant | 0 | 0 | The paper is a review of quercetin for burn healing and does not report pharmacokinetic parameters for collagen. |
| PD | Rani_2026 | not_relevant | 1 | 0 | The paper is a review of quercetin (not collagen) and provides only qualitative mechanistic summaries and schematic figures without reporting specific numeric PD parameters or extractable concentration-effect curves. |
| PD | Rath_1993 | not_relevant | 3 | 2 | The paper reports time-course biochemical changes (collagenase activity, GAGs) after a single dose of PGE2, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for collagen. |
| PGx | Raymond_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of HSD17B13 in liver fibrosis and lipid metabolism, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Ren_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of fisetin on hyperuricemic nephropathy in mice and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ren_2025 | irrelevant | 0 | 0 | The paper describes a 3D tissue model for endometrial biology where collagen is a structural component of the extracellular matrix, not a drug subject to pharmacokinetic analysis. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics and in-vitro study on Jingfang Granule for pulmonary fibrosis and does not report pharmacokinetic parameters for collagen. |
| PD | Ren_2026 | not_relevant | 3 | 2 | The paper reports qualitative dose-response trends (e.g., collagen reduction with increasing JFG dose) and in vitro concentration effects, but it does not provide numeric PD parameters (Emax, EC50) or a fitted exposure-response model. |
| popPK | Renaud_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug glenzocimab, not for collagen (which is only the agonist used in the pharmacodynamic assay). |
| popPK | Rezek_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on antisense oligonucleotide therapy for a retinal dystrophy, where collagen IV is only a marker for extracellular matrix remodeling, not a drug subject to pharmacokinetic analysis. |
| popPK | Rimpelä_2018 | irrelevant | 0 | 0 | The study investigates the binding of 35 small molecule drugs to collagen within porcine vitreous humor, rather than the pharmacokinetics of collagen itself as a drug. |
| popPK | Riva_2023 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of rituximab, not the pharmacokinetics of collagen. |
| popPK | Rocha-Valderrama_2025 | irrelevant | 0 | 0 | The paper investigates the antiparasitic activity of 6-nitrocoumarin-3-thiosemicarbazone derivatives, not the pharmacokinetics of collagen. |
| popPK | Rodan_1989 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Rodan_1989 | not_relevant | 0 | 0 | The paper investigates the effects of FGF and pertussis toxin on gene expression in a cell line, not the pharmacodynamic relationship of collagen itself. |
| popPK | Rodolfi_2025 | irrelevant | 0 | 0 | The study analyzes serum biomarkers (COL4A1, COMP, TENC) for systemic sclerosis and does not report pharmacokinetic parameters for collagen as a drug. |
| popPK | Roman_2026 | irrelevant | 0 | 0 | The study evaluates sodium valproate for myocardial injury prevention and does not report pharmacokinetic parameters for collagen. |
| PD | Roman_2026 | not_relevant | 2 | 1 | The paper reports qualitative dose-response trends (e.g., troponin reduction at &lt;=14 days vs injury at &gt;14 days) and mechanistic pathways, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for the drug. |
| PGx | Romo-Valera_2021 | not_relevant | 0 | 0 | The paper characterizes corneal tissue storage and stem cell markers, containing no pharmacogenomic data or drug PK/PD parameters. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Roth_1986 | not_relevant | 0 | 0 | The paper describes the localization of binding sites on von Willebrand factor for collagen using biophysical techniques, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Rutten_1990 | irrelevant | 0 | 0 | The paper describes a rabbit skin organ culture model and mentions collagen fibrils only as a structural component of the skin, not as a drug subject to pharmacokinetic analysis. |
| PGx | Sae-Be_2025 | not_relevant | 0 | 0 | The paper investigates the anticancer efficacy of a nanotheranostic platform (doxorubicin and mango seed extract) against hepatocellular carcinoma and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Saito_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mycophenolic acid (MPA), not collagen. |
| popPK | Salesa_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on the cytotoxicity and gene expression effects of nanomaterials, not a pharmacokinetic study of collagen. |
| PGx | Scharffetter_1990 | not_relevant | 0 | 0 | The paper discusses the clinical classification and pathogenesis of scleroderma, not the pharmacogenomics of collagen or any specific drug. |
| popPK | Scholz_1990 | irrelevant | 0 | 0 | The paper describes a bioreactor design where collagen is used as a structural gel matrix for cell culture, not as a drug subject to pharmacokinetic analysis. |
| PGx | Schulte_2000 | not_relevant | 0 | 0 | The paper investigates genetic risk factors for bone loss in IBD, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Schütz_2019 | irrelevant | 0 | 0 | The paper studies the effect of 10-hydroxystearic acid on collagen synthesis and skin aging, not the pharmacokinetics of collagen as a drug. |
| PGx | Seidizadeh_2025 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of a genetic disease (von Willebrand disease) and the structural effects of mutations on the VWF protein, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| PGx | Sgonc_1995 | not_relevant | 0 | 0 | The paper investigates genomic loci in a chicken disease model for scleroderma and does not report pharmacogenomic effects on the PK or PD of any drug. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of Tanshinone IIA on collagen synthesis in pulmonary fibrosis, not the pharmacokinetics of collagen as a drug. |
| popPK | Sheng_2022 | irrelevant | 0 | 0 | no_text gate: only 204 chars of text extracted (&lt; 400) |
| PGx | Shi_2024 | not_relevant | 0 | 0 | The paper investigates the regulation of endogenous collagen expression by a gene variant, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Siddique_2014 | irrelevant | 0 | 0 | The paper describes an organotypic model for nerve repair where collagen is used as a coating material, not as a drug subject to pharmacokinetic analysis. |
| PGx | Signoretti_2026 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on a disease outcome (fibrosis/collagen deposition) rather than a pharmacokinetic or pharmacodynamic parameter of the drug itself. |
| popPK | Smith_2000 | irrelevant | 0 | 0 | The study uses collagen as a platelet agonist to measure catecholamine release, not as a drug subject to pharmacokinetic analysis. |
| PGx | Sothers_2025 | not_relevant | 0 | 0 | The paper investigates the transcriptomic signature of Duchenne Muscular Dystrophy and BMP4 signaling, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Sprott_1998 | not_relevant | 0 | 0 | The paper analyzes collagen metabolites in fibromyalgia patients but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters of a drug. |
| PGx | Stasiak_2022 | not_relevant | 0 | 0 | The paper investigates miRNA regulation of drug resistance genes in ovarian cancer cell lines and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of collagen. |
| popPK | Steinberg_1978 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of collagen turnover in cell cultures, not a pharmacokinetic study of collagen as a drug. |
| PGx | Steinmann_1991 | not_relevant | 0 | 0 | The paper investigates the effect of a drug (Cyclosporin A) on collagen folding kinetics, not the effect of a gene variant on the PK/PD of a drug. |
| popPK | Sundqvist_1995 | irrelevant | 0 | 0 | The study investigates the cellular mechanism of collagen biosynthesis in vitro, not the pharmacokinetic disposition of collagen as a drug. |
| PD | Sundqvist_1995 | not_relevant | 4 | 3 | The paper reports numeric EC50 values for prostaglandin formation, but only provides a qualitative description of the dose-dependent effect on collagen biosynthesis without specific numeric PD parameters. |
| popPK | Suntivich_2026 | irrelevant | 0 | 0 | The paper describes an HPLC method for quantifying triterpenes in Centella asiatica and does not involve collagen pharmacokinetics. |
| PD | Suntivich_2026 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying triterpenes in Centella asiatica and contains no pharmacodynamic, exposure-response, or dose-response data. |
| PGx | Takezawa_2022 | not_relevant | 0 | 0 | The paper describes a cell line subline and its culture conditions, not a pharmacogenomic effect of a gene variant on a PK/PD parameter. |
| PD | Turtle_2012 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for enzyme inhibition, which is a pharmacological potency metric, but does not report a pharmacodynamic (exposure-response) relationship for the drug in a biological system or population. |
| popPK | Uematsu_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vapiprost, using collagen only as an in-vitro agonist for platelet aggregation assays, not as the subject drug. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for wound healing and does not report pharmacokinetic parameters for collagen. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nanocarrier delivery systems for phytochemicals and does not report any primary pharmacokinetic or pharmacodynamic data, exposure-response models, or numeric PD parameters. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper describes a collagen-based scaffold for drug delivery and tissue engineering, not the pharmacokinetics of collagen as a drug. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper describes the preparation and in vitro antioxidant activity of collagen peptides, not the pharmacokinetics of collagen as a drug. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates genetic associations with kidney stone disease and plasma protein levels, not the pharmacokinetics or pharmacodynamics of collagen. |
| popPK | Wantoch_2019 | irrelevant | 0 | 0 | The study investigates cisplatin resistance in ovarian cancer cells using collagen as a substrate for cell adhesion, not as a drug subject to pharmacokinetic analysis. |
| popPK | Watson_1994 | irrelevant | 0 | 0 | The paper describes an immunological model of rheumatoid arthritis involving autoantibodies against collagen, not the pharmacokinetics of collagen as a drug. |
| PGx | Wei_2022 | not_relevant | 0 | 0 | The paper describes the natural history and genotype-phenotype correlation of Osteogenesis Imperfecta, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Wilmes_2018 | not_relevant | 0 | 0 | The paper studies the biosynthesis and assembly of the structural protein Pericardin in Drosophila, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Wong_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of anti-arthritis drugs (e.g., indomethacin, methotrexate) in a collagen-induced arthritis model, not the pharmacokinetics of collagen itself. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper describes a rat model of esophageal stricture and analyzes fibrosis-related gene expression (e.g., COL1A1) but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Wu_2023_2 | not_relevant | 0 | 0 | The paper describes a genetic mouse model for Alport syndrome and its pathological consequences, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of pirfenidone and its derivative CXN-8 in asthma, with collagen mentioned only as a marker of airway remodeling, not as the subject drug for PK analysis. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | The paper describes a deep-learning platform for drug discovery and does not report pharmacokinetic parameters for collagen. |
| PD | Xing_2026 | not_relevant | 0 | 0 | The paper describes a deep-learning platform for drug discovery based on transcriptomic profiles and does not report any pharmacodynamic or exposure-response analysis for collagen. |
| PGx | Xu_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a herbal compound (Praeruptorin E) on the pharmacokinetics of aminophylline, not the effect of a gene variant/genotype on a PK/PD parameter. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study is an in vitro food science analysis of gelatin hydrolysates and antioxidant peptides, not a pharmacokinetic study of collagen as a drug. |
| PD | Yang_2019 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of peptides derived from collagen, which is a biochemical assay, not a pharmacodynamic (exposure-response) relationship for the drug collagen in a biological system. |
| popPK | Yue_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of FXR/PPARδ agonists in a fibrosis model, not the pharmacokinetics of collagen. |
| PD | Yue_2025 | not_relevant | 3 | 2 | The paper reports in vitro receptor activation EC50s and a single-dose in vivo efficacy result, but does not provide an exposure-response or dose-response analysis for collagen deposition with derivable PD parameters. |
| popPK | Yuh_2026 | irrelevant | 0 | 0 | The paper describes a tumor microenvironment model for ameloblastoma and does not report pharmacokinetic parameters for collagen. |
| PD | Yuh_2026 | not_relevant | 0 | 0 | The paper is a biological study on tumor microenvironment and cell signaling (ameloblastoma) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for a drug. |
| popPK | Zamora_1983 | irrelevant | 0 | 0 | The study is an in-vitro toxicology/cytotoxicity assay where collagen is used as a substrate for cell culture, not as a drug subject to pharmacokinetic analysis. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antioxidant activity of collagen peptides, not a pharmacokinetic study of collagen as a drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study of EGFR-TKI resistance in cancer cell lines where collagen is used only as a matrix component for 3D culture, not as a drug subject to pharmacokinetic analysis. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The study investigates the expression of the enzyme PGK1 in rheumatoid arthritis, where collagen is used only as an immunogen to induce arthritis in rats, not as a drug subject to pharmacokinetic analysis. |
| PGx | Zhao_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Withaferin A on kidney injury and fibrosis in a mouse model, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Zhao_2022 | not_relevant | 0 | 0 | The paper focuses on diagnostic imaging (elastography) for breast cancer metastasis and does not report any pharmacodynamic or exposure-response data for collagen. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a proteomic study of blood-brain barrier proteins and does not report pharmacokinetic parameters for collagen. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper focuses on proteomic profiling of BBB transporters and uses PBPK modeling to simulate drug distribution (PK), but it does not report any pharmacodynamic (PD) or exposure-response relationships for collagen or any other drug. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of denosumab (a biosimilar), not collagen. |
| PD | Zhu_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and clinical efficacy (BMD changes) but does not perform or report a pharmacodynamic (PD) or exposure-response model linking drug concentration to effect. |
| popPK | Zhu_2026_2 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a herbal formula for pulmonary fibrosis, not the pharmacokinetics of collagen. |
| PD | Zhu_2026_2 | not_relevant | 2 | 1 | The study reports qualitative dose comparisons (low vs. medium) and cellular effects but explicitly states it did not establish a full dose-response relationship, and no numeric PD parameters (Emax, EC50) or concentration-effect curves are provided. |
| PGx | Zu_2025 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of renal fibrosis in hyperuricemic nephropathy (METTL3/ABCG2 pathway) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of a drug. |
| PD | al-Bayati_1989 | not_relevant | 3 | 1 | The paper describes qualitative dose-dependent toxicological effects and fibrosis progression over time but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model. |
| PGx | de_2005 | not_relevant | 0 | 0 | The paper describes the design and efficacy of p38alpha inhibitors in a rat model but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Świerczek_2024 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics in autoimmune diseases and does not report quantitative PK parameters for collagen. |
| PD | Świerczek_2024 | not_relevant | 1 | 0 | The paper is a general review of pharmacometric methods in autoimmune diseases and does not report specific numeric PD parameters or exposure-response relationships for collagen. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
