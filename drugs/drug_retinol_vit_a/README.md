<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;retinol (vit A)&quot;}]"></div>

# retinol (vit A)

- **generic name:** retinol (vit A)
- **ATC codes:** `A11CA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Retinol (vitamin A) is a vitamin used to treat or prevent vitamin A deficiency. It is classified as a plain vitamin A product and remains in general use as a nutritional supplement.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:32 | 4:35 | 0/0/0 | 0/0/0 | 0/0/0 | 151,683/4,238 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 7/11 | 17/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 572 matched, 60 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_2021.pdf` | Green MH et al., A Compartmental Model Describing the Ki…, The Journal of nutrition (2021) | popPK | 9 | [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306) | [33188397](https://pubmed.ncbi.nlm.nih.gov/33188397) | The paper presents a compartmental model for retinol derived from beta-carotene in humans, reporting quantitative parameters like bioavailability and bioefficacy, though specific clearance/volume values are not explicitly listed in the text. |
| `Lopez-Teros_2022.pdf` | Lopez-Teros V et al., Development of a Compartmental Model fo…, The Journal of nutrition (2022) | popPK | 9 | [10.1093/jn/nxac078](https://doi.org/10.1093/jn/nxac078) | [35349703](https://pubmed.ncbi.nlm.nih.gov/35349703) | The paper describes a compartmental model for retinol kinetics in humans, but the specific numeric parameter values are assigned to theoretical subjects and likely reside in supplementary material or are not explicitly listed in the provided abstract text. |
| `Ko_2023.pdf` | Ko J et al., Pharmacokinetic Analyses of Liposomal a…, Nutrients (2023) | popPK | 8 | [10.3390/nu15133073](https://doi.org/10.3390/nu15133073) | [37447400](https://pubmed.ncbi.nlm.nih.gov/37447400) | The study reports PK parameters (clearance, volume, half-life) for Vitamin A (retinol) in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-05T08:32:07.555798+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ballard_1988 | irrelevant | 0 | 0 | The study investigates the effects of dietary zeolite and vitamin A on bone pathology (tibial dyschondroplasia) in chickens and does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Bankson_1988 | irrelevant | 0 | 0 | The study focuses on the development of an assay for retinol-binding protein (RBP) and reports RBP concentrations, not the pharmacokinetic parameters (CL, V, etc.) of retinol itself. |
| popPK | Cai_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of photoreceptor cell death pathways (pyroptosis/apoptosis) in mice and cell lines, not a pharmacokinetic study reporting quantitative disposition parameters for retinol. |
| popPK | Che_2016 | irrelevant | 0 | 0 | The paper studies the stability and degradation kinetics of beta-carotene in sorghum grain, not the pharmacokinetics of retinol in a biological system. |
| popPK | Chen_2017 | irrelevant | 1 | 2 | The study is an in-vitro mechanistic investigation of retinoid transport in isolated mouse photoreceptors, not a pharmacokinetic study reporting systemic disposition parameters (CL, V, ka) for retinol as a drug. |
| popPK | Chien_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of acitretin, etretinate, isotretinoin, and synthetic acetylenic retinoids, not retinol (vitamin A). |
| popPK | Choo_2019 | irrelevant | 0 | 0 | The study compares dialysis modalities and reports clearance of various solutes (urea, creatinine, FGF23, etc.), but does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol or vitamin A. |
| popPK | Christides_2015 | irrelevant | 0 | 0 | The study focuses on iron bioavailability in an in vitro Caco-2 cell model and does not report pharmacokinetic parameters for retinol or vitamin A. |
| popPK | Chungchunlam_2024 | irrelevant | 0 | 0 | The paper is a review of vitamin bioavailability in food sources and does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | The study investigates the antibacterial and antibiofilm properties of retinol in vitro, not its pharmacokinetics. |
| popPK | Costanza_2018 | irrelevant | 0 | 0 | The study investigates the expression of cellular retinol binding protein I (CRBPI) in psoriasis using immunohistochemistry and gene arrays, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Dayma_2025 | irrelevant | 0 | 0 | The paper is a review of Stargardt's disease pathogenesis and therapies, containing no pharmacokinetic studies or quantitative disposition parameters for retinol. |
| popPK | Fainsod_2020 | irrelevant | 0 | 0 | The paper is a review of developmental biology and mechanisms of Fetal Alcohol Spectrum Disorder, not a pharmacokinetic study reporting quantitative disposition parameters for retinol. |
| popPK | Farris_2022 | irrelevant | 2 | 0 | The paper is a review of cosmetic retinoids and discusses pharmacokinetics qualitatively but provides no quantitative disposition parameters or numeric values in the evidence. |
| popPK | Fawzi_1993 | irrelevant | 0 | 0 | The study is an epidemiological analysis of xerophthalmia risk and does not report pharmacokinetic parameters for retinol. |
| popPK | Formelli_1993 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of fenretinide (4HPR), with retinol measured only as a biomarker of effect (concentration reduction) rather than as the subject drug for PK parameter estimation. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of vitamin A supplementation in sepsis, reporting clinical outcomes and biomarkers (lactate, PCT) rather than pharmacokinetic parameters (CL, V, ka) for retinol. |
| popPK | Ghafoor_2022 | irrelevant | 0 | 0 | The paper is a clinical review of scalp psoriasis treatments and does not report any pharmacokinetic parameters for retinol or vitamin A. |
| popPK | Green_2021 | relevant | 9 | 4 | The paper presents a compartmental model for retinol derived from beta-carotene in humans, reporting quantitative parameters like bioavailability and bioefficacy, though specific clearance/volume values are not explicitly listed in the text. |
| popPK | Heidemann_2023 | irrelevant | 0 | 0 | The study investigates the effect of evolocumab on lipoprotein metabolism in familial dysbetalipoproteinemia, using retinyl palmitate only as a tracer for chylomicron kinetics rather than as the subject drug for PK parameter estimation. |
| popPK | Huang_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and mRNA stability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hurrell_2010 | irrelevant | 0 | 0 | The paper discusses iron bioavailability and mentions vitamin A only as a dietary factor influencing iron absorption, without reporting any pharmacokinetic parameters for retinol. |
| popPK | Iyer_2020 | irrelevant | 0 | 0 | The paper is an immunology study investigating the role of vitamin A signaling in pathogen clearance, not a pharmacokinetic study reporting disposition parameters for retinol. |
| popPK | Khokhar_1990 | irrelevant | 1 | 0 | The study reports qualitative changes in serum vitamin A concentrations in rats but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) or a PK model. |
| popPK | Klaska_2023 | irrelevant | 0 | 0 | The paper is an immunology study on autoimmune uveitis in mice and does not report pharmacokinetic parameters for retinol or vitamin A. |
| popPK | Ko_2023 | relevant | 8 | 2 | The study reports PK parameters (clearance, volume, half-life) for Vitamin A (retinol) in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Langhendries_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and toxicity of amikacin in neonates, not retinol_vit_a. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of retinoid metabolism and cytotoxicity in cells, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for retinol. |
| popPK | Li_2019 | irrelevant | 2 | 0 | The study reports qualitative changes in retinol concentrations and gene expression in mice but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) or a compartmental model. |
| popPK | Liao_2024 | irrelevant | 2 | 0 | The study reports qualitative changes in organ content and solubility but lacks quantitative pharmacokinetic parameters (CL, V, ka) for retinol or retinol acetate. |
| popPK | Lopez-Teros_2022 | relevant | 9 | 2 | The paper describes a compartmental model for retinol kinetics in humans, but the specific numeric parameter values are assigned to theoretical subjects and likely reside in supplementary material or are not explicitly listed in the provided abstract text. |
| popPK | Lucek_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etretinate, not retinol (vitamin A). |
| popPK | Miller_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of all-trans retinoic acid (a metabolite/derivative), not retinol (vitamin A) itself, and does not report compartmental PK parameters for retinol. |
| popPK | Miller_2022 | irrelevant | 0 | 0 | The study focuses on the mechanism of fenretinide inhibiting vitamin A synthesis in mice and reports tissue stores/levels, not quantitative pharmacokinetic parameters (CL, V, ka) for retinol. |
| popPK | Miller_2023 | irrelevant | 0 | 0 | The study focuses on the bioavailability and metabolism of neurosporaxanthin (a fungal carotenoid) in mice, not the pharmacokinetics of retinol/vitamin A itself. |
| popPK | Miwako_2007 | irrelevant | 0 | 0 | The paper is a review of tamibarotene, a synthetic retinoid, and does not report quantitative pharmacokinetic parameters for retinol (vitamin A). |
| popPK | Morley_1980 | irrelevant | 0 | 0 | The study investigates the endocrine effects of vitamin A on the thyroid axis in rats, not the pharmacokinetic disposition parameters (CL, V, etc.) of retinol itself. |
| popPK | Mourey_1990 | irrelevant | 1 | 0 | The study focuses on the regulation of retinol-binding protein (RBP) concentrations and forms rather than the quantitative pharmacokinetic parameters (CL, V, ka) of retinol itself. |
| popPK | ONeal_2020 | irrelevant | 0 | 0 | This is a clinical case report on toxicity (hypercalcemia) and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Oxley_2022 | irrelevant | 2 | 0 | The paper focuses on the bioconversion and bioefficacy of provitamin A carotenoids (beta-carotene and beta-cryptoxanthin) rather than the pharmacokinetic disposition parameters (CL, V, etc.) of retinol itself, and no numeric PK values are provided. |
| popPK | Penkert_2021 | irrelevant | 0 | 0 | The study investigates the immunological effects of vitamin A deficiency on influenza and bacterial coinfection in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Quiles_2024 | irrelevant | 0 | 0 | The study investigates the effects of vitamin A deficiency on lung epithelial remodeling and microbiome composition in mice, not the pharmacokinetic parameters (CL, V, etc.) of retinol. |
| popPK | Redgrave_1976 | irrelevant | 0 | 0 | The study investigates the cellular mechanism of chylomicron cholesterol clearance in rat liver, not the pharmacokinetic parameters (CL, V, etc.) of retinol/vitamin A. |
| popPK | Sarkar_2013 | irrelevant | 0 | 0 | The paper is a review of acitretin, a different drug, and does not report quantitative pharmacokinetic parameters for retinol_vit_a. |
| popPK | Savolainen_1995 | irrelevant | 0 | 0 | The paper discusses cadmium toxicity and mentions retinol binding protein only as a biomarker for renal tubular damage, not as a subject of pharmacokinetic analysis. |
| popPK | Shields_2018 | irrelevant | 1 | 0 | The study focuses on the formulation and controlled release kinetics of retinol from silicone particles (in vitro/topical release rates) rather than systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Shimizugawa_2004 | irrelevant | 0 | 0 | The paper focuses on lipid metabolism and atherosclerosis in mice, with no pharmacokinetic data for retinol_vit_a. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy of a hydrogel for skin repair, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Surber_1991 | irrelevant | 0 | 0 | The study investigates the in-vitro pharmacokinetics of acitretin, not retinol_vit_a. |
| popPK | Takashima_1990 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of cyclosporin A for psoriasis and does not report pharmacokinetic parameters for retinol_vit_a. |
| popPK | Tozer_2019 | irrelevant | 0 | 0 | The paper is an exposure assessment study estimating intake and bioavailability, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Tsuchida_2017 | irrelevant | 0 | 0 | The paper is a review of hepatic stellate cell activation and fibrosis mechanisms, not a pharmacokinetic study of retinol, and contains no quantitative PK parameters. |
| popPK | Tsuchida_2019 | irrelevant | 0 | 0 | The paper is a review of hepatic stellate cell activation and liver fibrosis mechanisms, with no pharmacokinetic data for retinol. |
| popPK | Widjaja-Adhi_2025 | irrelevant | 0 | 0 | The study focuses on retinal degeneration and visual cycle kinetics in mice, not on the systemic pharmacokinetic parameters (CL, V, etc.) of retinol. |
| popPK | Xia_2019 | irrelevant | 0 | 0 | The study focuses on the metabolism of all-trans-retinal (atRal) and its conversion to retinoic acid in retinal cells, not the pharmacokinetic disposition parameters (CL, V, etc.) of retinol (vitamin A) as the subject drug. |
| popPK | Yabut_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics (Km, kcat, Ki) for the metabolism of all-trans-retinoic acid (a metabolite of retinol) by CYP26A1, and does not report population pharmacokinetic parameters (CL, V, ka) for retinol. |
| popPK | Yildirim_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic effect of a topical ointment on post-surgical symptoms and mucociliary clearance, not a pharmacokinetic study of retinol. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The study focuses on the chemical stability and encapsulation of vitamin A palmitate in a material system, not on pharmacokinetic disposition parameters in a biological system. |
| popPK | elSisi_1993 | irrelevant | 0 | 0 | The study investigates the mechanism of vitamin A potentiation of carbon tetrachloride hepatotoxicity (toxicology/pathophysiology) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
