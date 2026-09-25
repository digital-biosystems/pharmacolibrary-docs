<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;retinol (vit A)&quot;}]"></div>

# retinol (vit A)

- **generic name:** retinol (vit A)
- **ATC codes:** `A11CA01`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 10:10 | 22:15 | 0/0/0 | 0/0/0 | 0/0/0 | 149,326/13,145 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 7/11 | 17/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
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
| `Lopez-Teros_2022.pdf` | Lopez-Teros V et al., Development of a Compartmental Model fo…, The Journal of nutrition (2022) | popPK | 9 | [10.1093/jn/nxac078](https://doi.org/10.1093/jn/nxac078) | [35349703](https://pubmed.ncbi.nlm.nih.gov/35349703) | The paper describes a compartmental model for retinol kinetics in theoretical women, but the specific numeric parameter values are assigned to theoretical subjects and not explicitly listed in the provided evidence text. |
| `Green_2021.pdf` | Green MH et al., A Compartmental Model Describing the Ki…, The Journal of nutrition (2021) | popPK | 8 | [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306) | [33188397](https://pubmed.ncbi.nlm.nih.gov/33188397) | The paper describes a compartmental model for retinol derived from beta-carotene, but the specific quantitative PK parameters (CL, V, Q) are not explicitly listed in the provided text, which focuses on bioavailability and metabolic percentages. |
| `Ko_2023.pdf` | Ko J et al., Pharmacokinetic Analyses of Liposomal a…, Nutrients (2023) | popPK | 8 | [10.3390/nu15133073](https://doi.org/10.3390/nu15133073) | [37447400](https://pubmed.ncbi.nlm.nih.gov/37447400) | The study reports PK parameters (clearance, volume, half-life) for vitamin A, but the specific numeric values are not present in the provided text, likely residing in tables or figures not included. |

<sub>queue written 2026-09-16T10:10:15.055492+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ballard_1988 | irrelevant | 0 | 0 | The study focuses on the effects of dietary zeolite and vitamin A on bone pathology in chickens, not on the pharmacokinetic disposition parameters (CL, V, etc.) of retinol. |
| popPK | Bankson_1988 | irrelevant | 0 | 0 | The paper describes an assay for retinol-binding protein (RBP) and does not report pharmacokinetic parameters for retinol (vitamin A). |
| popPK | Cai_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on photoreceptor cell death (pyroptosis/apoptosis) mediated by all-trans-retinal (atRAL) and Gasdermin E, not a pharmacokinetic study reporting disposition parameters for retinol (vitamin A). |
| popPK | Che_2016 | irrelevant | 0 | 0 | The paper focuses on the stability and degradation kinetics of β-carotene in sorghum grain, not the pharmacokinetics of retinol in a biological system. |
| popPK | Chen_2017 | irrelevant | 2 | 3 | The study reports in-vitro single-cell clearance rate constants for retinol in mouse photoreceptors, which are mechanistic transport parameters rather than systemic population pharmacokinetic parameters (CL, V, half-life). |
| popPK | Chien_1992 | irrelevant | 0 | 0 | The study focuses on synthetic retinoids (acitretin, etretinate, isotretinoin) and does not report pharmacokinetic parameters for retinol (vitamin A). |
| popPK | Choo_2019 | irrelevant | 0 | 0 | The study focuses on dialysis modalities and solute clearance (urea, creatinine, FGF23), not the pharmacokinetic parameters of retinol_vit_a. |
| popPK | Christides_2015 | irrelevant | 0 | 0 | The study focuses on iron bioavailability in an in vitro Caco-2 cell model and does not report pharmacokinetic parameters for retinol or vitamin A. |
| popPK | Chungchunlam_2024 | irrelevant | 0 | 0 | The paper is a review of nutrient bioavailability in foods and does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | The study focuses on the antibacterial and antibiofilm properties of retinol, not its pharmacokinetic disposition parameters. |
| popPK | Costanza_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on CRBPI expression in psoriasis and does not report any pharmacokinetic parameters for retinol. |
| popPK | Dayma_2025 | irrelevant | 0 | 0 | The paper is a review of Stargardt's disease pathogenesis and therapies, containing no pharmacokinetic studies or quantitative disposition parameters for retinol. |
| popPK | Fainsod_2020 | irrelevant | 0 | 0 | The paper is a review of developmental biology and mechanisms of Fetal Alcohol Spectrum Disorder, not a pharmacokinetic study reporting quantitative disposition parameters for retinol. |
| popPK | Farris_2022 | irrelevant | 2 | 0 | The paper is a review article discussing retinol for cosmetic use and does not provide original quantitative pharmacokinetic parameter values. |
| popPK | Fawzi_1993 | irrelevant | 0 | 0 | The paper is an epidemiological study on the clinical efficacy of vitamin A supplementation for xerophthalmia and does not report any pharmacokinetic parameters. |
| popPK | Formelli_1993 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of fenretinide (4HPR), with retinol serving only as a biomarker for drug effect rather than the subject drug for PK parameter estimation. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of vitamin A supplementation in sepsis and does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Ghafoor_2022 | irrelevant | 0 | 0 | The paper is a clinical review of scalp psoriasis treatments and does not report any pharmacokinetic parameters for retinol. |
| popPK | Green_2021 | relevant | 8 | 2 | The paper describes a compartmental model for retinol derived from beta-carotene, but the specific quantitative PK parameters (CL, V, Q) are not explicitly listed in the provided text, which focuses on bioavailability and metabolic percentages. |
| popPK | Heidemann_2023 | irrelevant | 0 | 0 | The study uses retinyl palmitate as a tracer to assess chylomicron metabolism in the context of PCSK9 inhibitor effects on lipoproteins, rather than reporting pharmacokinetic parameters (CL, V, ka) for retinol/vitamin A itself. |
| popPK | Huang_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gene expression and mRNA stability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hurrell_2010 | irrelevant | 0 | 0 | The paper discusses iron bioavailability and mentions vitamin A only as a dietary factor influencing iron absorption, without reporting any pharmacokinetic parameters for retinol. |
| popPK | Iyer_2020 | irrelevant | 0 | 0 | The paper is an immunology study on vitamin A signaling in gut infection, not a pharmacokinetic study, and contains no PK parameters for retinol. |
| popPK | Khokhar_1990 | irrelevant | 2 | 0 | The study reports qualitative changes in serum vitamin A concentrations in rats but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) or a PK model. |
| popPK | Klaska_2023 | irrelevant | 0 | 0 | The paper is an immunology study on autoimmune uveitis in mice and does not report pharmacokinetic parameters for retinol_vit_a. |
| popPK | Ko_2023 | relevant | 8 | 2 | The study reports PK parameters (clearance, volume, half-life) for vitamin A, but the specific numeric values are not present in the provided text, likely residing in tables or figures not included. |
| popPK | Langhendries_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and toxicity of amikacin in neonates, not retinol_vit_a. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study focuses on the metabolic formation of retinal dimers and cytotoxicity in cells and mice, not on the pharmacokinetic disposition parameters (CL, V, etc.) of retinol. |
| popPK | Li_2019 | irrelevant | 2 | 0 | The study focuses on the mechanistic effects of chitooligosaccharides on retinol metabolism and gene expression, reporting qualitative changes in concentration rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Liao_2024 | irrelevant | 2 | 0 | The study focuses on formulation and bioavailability (organ content) rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life for retinol. |
| popPK | Lopez-Teros_2022 | relevant | 9 | 2 | The paper describes a compartmental model for retinol kinetics in theoretical women, but the specific numeric parameter values are assigned to theoretical subjects and not explicitly listed in the provided evidence text. |
| popPK | Lucek_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etretinate, not retinol_vit_a. |
| popPK | Miller_1994 | irrelevant | 0 | 0 | The study focuses on all-trans retinoic acid (a metabolite/derivative), not retinol (vitamin A) as the subject drug, and reports AUC values rather than specific PK parameters for retinol. |
| popPK | Miller_2022 | irrelevant | 1 | 0 | The study focuses on the mechanism of fenretinide inhibiting vitamin A synthesis in mice and reports qualitative changes in tissue stores, but does not provide quantitative pharmacokinetic parameters (CL, V, ka) for retinol. |
| popPK | Miller_2023 | irrelevant | 0 | 0 | The study focuses on the bioavailability and metabolism of neurosporaxanthin, not retinol_vit_a, and does not report quantitative PK parameters for retinol. |
| popPK | Miwako_2007 | irrelevant | 0 | 0 | The paper is a review of tamibarotene, a different drug, and does not report quantitative pharmacokinetic parameters for retinol_vit_a. |
| popPK | Morley_1980 | irrelevant | 0 | 0 | The study focuses on the endocrine effects of vitamin A on the thyroid axis and does not report pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Mourey_1990 | irrelevant | 2 | 0 | The study focuses on the regulation of retinol-binding protein (RBP) concentrations and forms rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for retinol itself. |
| popPK | ONeal_2020 | irrelevant | 0 | 0 | The paper is a clinical case report on hypervitaminosis A toxicity and does not report any quantitative pharmacokinetic parameters for retinol. |
| popPK | Oxley_2022 | irrelevant | 2 | 0 | The paper focuses on the methodology for quantifying bioconversion and bioefficacy of provitamin A carotenoids using stable isotopes, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for retinol itself. |
| popPK | Penkert_2021 | irrelevant | 0 | 0 | The paper is an immunology study investigating the effects of vitamin A deficiency on immune responses to influenza and bacterial coinfection, and it does not report any pharmacokinetic parameters for retinol. |
| popPK | Quiles_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on lung epithelial remodeling and microbiome changes in vitamin A-deficient mice, not a pharmacokinetic study, and contains no quantitative PK parameters for retinol. |
| popPK | Redgrave_1976 | irrelevant | 0 | 0 | The study investigates the cellular mechanism of chylomicron cholesterol clearance in rat liver and does not report quantitative pharmacokinetic parameters for retinol. |
| popPK | Sarkar_2013 | irrelevant | 0 | 0 | The paper is a review of acitretin, a different drug, and does not report quantitative pharmacokinetic parameters for retinol_vit_a. |
| popPK | Savolainen_1995 | irrelevant | 0 | 0 | The paper discusses cadmium toxicity and mentions retinol binding protein only as a biomarker for renal tubular damage, not as a subject drug for pharmacokinetic analysis. |
| popPK | Shields_2018 | irrelevant | 1 | 0 | The paper focuses on the formulation and controlled release kinetics of retinol from silicone particles for topical delivery, not on systemic pharmacokinetic parameters (CL, V, ka) or population PK modeling. |
| popPK | Shimizugawa_2004 | irrelevant | 0 | 0 | The paper focuses on Angptl3 and lipid metabolism in mice, with no pharmacokinetic parameters reported for retinol_vit_a. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy of a hydrogel for skin repair, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for retinol. |
| popPK | Surber_1991 | irrelevant | 0 | 0 | The study focuses on the in-vitro pharmacokinetics of acitretin, not retinol_vit_a. |
| popPK | Takashima_1990 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of cyclosporin A for psoriasis and does not report pharmacokinetic parameters for retinol_vit_a. |
| popPK | Tozer_2019 | irrelevant | 0 | 0 | The paper is an exposure assessment study focusing on intake and bioavailability, not a pharmacokinetic study reporting disposition parameters like clearance or volume for retinol. |
| popPK | Tsuchida_2017 | irrelevant | 0 | 0 | The paper is a review of hepatic stellate cell activation and fibrosis mechanisms, not a pharmacokinetic study, and contains no quantitative disposition parameters for retinol. |
| popPK | Tsuchida_2019 | irrelevant | 0 | 0 | The paper is a review of hepatic stellate cell activation and liver fibrosis mechanisms, containing no pharmacokinetic data or quantitative disposition parameters for retinol. |
| popPK | Widjaja-Adhi_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on retinal degeneration and visual cycle kinetics in mice, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for retinol. |
| popPK | Xia_2019 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic analysis of retinal metabolism and cytotoxicity, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for retinol. |
| popPK | Yabut_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics (Km, kcat, Ki) for all-trans-retinoic acid metabolism, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for retinol. |
| popPK | Yildirim_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of a topical ointment on nasal symptoms and mucociliary clearance, not a pharmacokinetic study reporting disposition parameters for retinol. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The study focuses on the chemical stability and encapsulation of vitamin A palmitate in a material carrier, not on pharmacokinetic disposition parameters in a biological system. |
| popPK | elSisi_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of vitamin A potentiation of carbon tetrachloride hepatotoxicity and does not report pharmacokinetic parameters for retinol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
