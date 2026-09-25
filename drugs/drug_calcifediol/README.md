<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;calcifediol&quot;}]"></div>

# calcifediol

- **generic name:** calcifediol
- **ATC codes:** `A11CC06`, `H05BX05`
- **DrugBank:** [DB00146](https://go.drugbank.com/drugs/DB00146)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** The major circulating metabolite of vitamin D3 (cholecalciferol). It is produced in the liver and is the best indicator of the body's vitamin D stores. It is effective in the treatment of rickets and osteomalacia, both in azotemic and non-azotemic patients. Calcifediol also has mineralizing properties.

**Indication.** Used to treat vitamin D deficiency or insufficiency, refractory rickets (vitamin D resistant rickets), familial hypophosphatemia and hypoparathyroidism, and in the management of hypocalcemia and renal osteodystrophy in patients with chronic renal failure undergoing dialysis. Also used in conjunction with calcium in the management and prevention of primary or corticosteroid-induced osteoporosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 08:33 | 3:34 | 0/0/0 | 0/1/0 | 0/0/0 | 23,544/1,448 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 6/18 | 22/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hoeben_2026](drugs/drug_calcifediol/pd_Hoeben_2026_TV.md) | Hoeben E et al., PKPD-Based Translational Modeling of Ca…, European journal of drug me… (2026) | [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcifediol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…Calcidiol undergoes hydroxylation in the mitochondria of kidney tissue, and this reaction…”</sub> | prose |

<sub>Actors without a tissue in the table: CYP24A1 (substrate), CYP27B1 (substrate), VDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9086 matched, 69 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Choe_2026.pdf` | Choe J et al., Extended-release calcifediol identifies…, Clinical kidney journal (2026) | pd | 5 | [10.1093/ckj/sfag194](https://doi.org/10.1093/ckj/sfag194) | [42459745](https://www.ncbi.nlm.nih.gov/pubmed/42459745) | metadata signals extractable PD data (Exposure-response) |
| `Graf_1992.pdf` | Graf W et al., Dynamics of parathyroid hormone release…, World journal of surgery (1992) | pd | 4 | [10.1007/BF02067339](https://doi.org/10.1007/BF02067339) | [1413832](https://www.ncbi.nlm.nih.gov/pubmed/1413832) | metadata signals extractable PD data (sigmoid) |
| `Ma_2025.pdf` | Ma K et al., Development of Highly Sensitive and Spe…, ACS sensors (2025) | pd | 4 | [10.1021/acssensors.5c00650](https://doi.org/10.1021/acssensors.5c00650) | [40340357](https://www.ncbi.nlm.nih.gov/pubmed/40340357) | metadata signals extractable PD data (EC50) |
| `Wilson_2023.pdf` | Wilson RT et al., Genetic Factors Associated with Absolut…, Cancer epidemiology, biomar… (2023) | pgx | 8 | [10.1158/1055-9965.EPI-22-0797](https://doi.org/10.1158/1055-9965.EPI-22-0797) | [36788426](https://www.ncbi.nlm.nih.gov/pubmed/36788426) | metadata signals extractable PGX data (CYP27B1, PK/PD-context) |

<sub>queue written 2026-09-16T08:33:09.293757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baroudi_2026 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics and model selection methodology, not calcifediol. |
| PD | Baroudi_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (popPK) model selection for tacrolimus and does not report any pharmacodynamic (PD) or exposure-response relationships for calcifediol. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not calcifediol. |
| PD | Barry_2026 | not_relevant | 0 | 0 | The paper analyzes vancomycin nephrotoxicity, not calcifediol. |
| popPK | Barsony_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cGMP signaling in fibroblasts and does not report pharmacokinetic parameters for calcifediol. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study calcifediol. |
| PD | Barzel_2026 | not_relevant | 1 | 0 | The paper is a review of lysosomal storage diseases and does not contain any data, models, or parameters for calcifediol. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using warfarin and generic PK data, with no mention of calcifediol or its specific pharmacokinetic parameters. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using neural ODEs and LASSO, demonstrating it on warfarin PK/PD data, but does not report any PD or exposure-response relationship for calcifediol. |
| popPK | Choe_2026 | irrelevant | 2 | 0 | The study focuses on exposure-response modeling of 25-hydroxyvitamin D levels and iPTH reduction, not on the pharmacokinetic disposition parameters (CL, V, ka) of calcifediol itself. |
| PD | Choe_2026 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Corlett_1987 | irrelevant | 0 | 0 | The study investigates the in-vitro mechanism of 25-hydroxylation of cholecalciferol (vitamin D3) and does not report pharmacokinetic parameters for calcifediol. |
| PD | Corlett_1987 | not_relevant | 0 | 0 | The paper investigates the regulation of 25-hydroxylase activity by calcium and calmodulin in liver homogenates, not the pharmacodynamic exposure-response relationship of the drug calcifediol. |
| popPK | Cozzolino_2019 | irrelevant | 2 | 0 | The paper is a review of clinical data for extended-release calcifediol and does not provide original quantitative population pharmacokinetic parameter values (CL, V, etc.) in the evidence. |
| PD | Cozzolino_2019 | not_relevant | 2 | 0 | The text is a review summary that qualitatively describes the pharmacodynamic effects (reduction in PTH, increase in 25D) but does not provide specific numeric PD parameters, dose-response curves, or model fits. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development for analgesics and does not report any pharmacokinetic parameters for calcifediol. |
| PD | Dahan_2026 | not_relevant | 0 | 0 | The paper is a narrative review of MIDD methodologies and does not report specific pharmacodynamic parameters or exposure-response data for calcifediol. |
| popPK | Das_2023 | irrelevant | 2 | 0 | The study reports efficacy and safety outcomes (serum levels of 25(OH)D, PTH, 1,25(OH)2D) but does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Degerud_2015 | irrelevant | 0 | 0 | The study investigates the association between 25-hydroxyvitamin D3 levels and coronary artery disease progression, not the pharmacokinetics of calcifediol. |
| PGx | Desmarchelier_2016 | not_relevant | 0 | 0 | The paper studies cholecalciferol (Vitamin D3), not calcifediol (Vitamin D2). |
| popPK | Djekic-Ivankovic_2017 | irrelevant | 0 | 0 | The study focuses on the biological activity and bone mineral density effects of 3-epi-25(OH)D3 in rats, not the pharmacokinetics of calcifediol. |
| PD | Djekic-Ivankovic_2017 | not_relevant | 3 | 2 | The study reports group-level mean differences in biomarkers (PTH, vBMD) across discrete dose groups but does not provide individual subject data, fitted concentration-effect curves, or numeric PD parameters (e.g., EC50, Emax) for calcifediol or its epimer. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) and does not report pharmacokinetic parameters for calcifediol. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) and does not report any pharmacodynamic or exposure-response data for calcifediol. |
| popPK | Foissac_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 25-hydroxycholecalciferol (calcidiol), not calcifediol (1,25-dihydroxycholecalciferol). |
| popPK | Foissac_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 25-hydroxycholecalciferol (vitamin D3), not calcifediol. |
| popPK | Goeyvaerts_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mosnodenvir, not calcifediol. |
| PD | Goeyvaerts_2026 | not_relevant | 0 | 0 | The paper discusses mosnodenvir, not calcifediol. |
| popPK | Graf_1992 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Graf_1992 | not_relevant | 0 | 0 | The paper focuses on parathyroid hormone and calcium dynamics after surgery for primary hyperparathyroidism and does not report a pharmacodynamic or exposure-response relationship for calcifediol. |
| PGx | Harrington_2004 | not_relevant | 0 | 0 | The study investigates the effect of diet on calcium and bone metabolism stratified by VDR genotype, but does not involve the drug calcifediol or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calaspargase pegol (CalPEG), not calcifediol. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PopPK modeling using 22 datasets (e.g., bedaquiline, cefaclor) that does not include calcifediol. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for calcifediol or any other drug. |
| popPK | Hymøller_2016 | irrelevant | 0 | 0 | The study investigates the interaction of retinol, vitamin D3, and alpha-tocopherol in mink, not the pharmacokinetics of calcifediol. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not calcifediol. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not calcifediol, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug in question. |
| popPK | Jodar_2023 | irrelevant | 1 | 0 | The paper is a narrative review that discusses qualitative pharmacokinetic differences (e.g., linear dose-response, absorption) but does not report quantitative disposition parameters (CL, V, ka, etc.) for calcifediol. |
| PD | Jodar_2023 | not_relevant | 2 | 1 | The text is a narrative review that qualitatively describes a linear dose-response curve for calcifediol but does not provide specific numeric PD parameters (e.g., slope, Emax, EC50) or data points to derive them. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not involve calcifediol. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not mention or analyze calcifediol. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a general framework for benchmarking covariate model building methods using simulated data and does not report specific pharmacokinetic parameters for calcifediol. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (PK) and does not report any pharmacodynamic (PD) or exposure-response relationships for calcifediol. |
| popPK | Khriesha_2021 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring IC50 values, not a pharmacokinetic study reporting disposition parameters for calcifediol. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bevacizumab (a monoclonal antibody), not calcifediol. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (CT-P16) and compares exposure metrics to a published efficacy benchmark, but it does not fit a pharmacodynamic (PD) model or report numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Kurnik_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid transfer stimulated by vitamin D metabolites and does not report pharmacokinetic parameters for calcifediol. |
| popPK | Lauridsen_2010 | irrelevant | 0 | 0 | The study focuses on reproductive performance and bone markers in swine using cholecalciferol and 25-hydroxycholecalciferol, not calcifediol, and does not report pharmacokinetic parameters. |
| popPK | Lauridsen_2014 | irrelevant | 0 | 0 | The paper is a review of a nutritional study in swine focusing on vitamin D requirements and bone health, not a pharmacokinetic study of calcifediol. |
| PD | Lauridsen_2014 | not_relevant | 3 | 1 | The text is a review of a dose-response trial in swine that reports qualitative trends (beneficial effects above 800 IU/kg) but does not provide specific numeric PD parameters (Emax, EC50) or detailed concentration-effect data for calcifediol. |
| popPK | Lawson_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cholecalciferol (D3) and 25-hydroxycholecalciferol (25(OH)D3), not calcifediol (25(OH)D2). |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of PF-06804103, not calcifediol. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper discusses PF-06804103, not calcifediol, and does not report any PD parameters for the target drug. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for gotistobart, not calcifediol. |
| PD | Li_2026_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for gotistobart, not calcifediol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Liu_2026 | not_relevant | 2 | 0 | The paper is a review of Vitamin D3 immunology and precision medicine strategies, mentioning VDR polymorphisms as a factor for variability but not reporting specific pharmacogenomic effects on PK/PD parameters of calcifediol. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Ma_2025 | not_relevant | 0 | 0 | The paper focuses on the development of biosensors for detection and does not report pharmacodynamic or exposure-response relationships. |
| popPK | Magagnoli_2025 | irrelevant | 1 | 0 | The paper is a review article discussing vitamin D compounds in CKD and does not report original quantitative pharmacokinetic parameter values for calcifediol. |
| PD | Magagnoli_2025 | not_relevant | 1 | 0 | The text is a review article overviewing vitamin D compounds and their general properties in CKD, but it does not report specific numeric PD parameters or exposure-response data for calcifediol. |
| PGx | Margier_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of vitamin D (cholecalciferol/25-hydroxycholecalciferol), not calcifediol. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor, not calcifediol. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of elafibranor, not calcifediol. |
| popPK | Quesada-Gomez_2018 | irrelevant | 2 | 0 | The paper is a review comparing efficacy and potency (nmol/l per μg) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for calcifediol. |
| PGx | Quesada-Gomez_2022 | not_relevant | 0 | 0 | The paper is a review of calcifediol's mechanism and clinical use in COVID-19 and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Raisz_1972 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bone resorption, not a pharmacokinetic study, and does not report any disposition parameters for calcifediol. |
| popPK | Reynolds_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of 25-hydroxycholecalciferol (calcifediol) in mice and cells, not its pharmacokinetic disposition parameters. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for asparaginase (native and pegylated), not calcifediol. |
| PD | Sethuramalingam_2026 | not_relevant | 0 | 0 | The paper focuses on asparaginase (N-Asp and P-Asp) pharmacokinetics and activity, not calcifediol, and does not report a concentration-effect or dose-response model for calcifediol. |
| PGx | Singh_2022 | not_relevant | 0 | 0 | The paper investigates the association between vitamin D status, host genetics, and gut microbiota composition, but does not report pharmacokinetic or pharmacodynamic parameters for calcifediol. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B, not calcifediol. |
| PD | Soeorg_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B, not calcifediol. |
| popPK | Sprague_2017 | irrelevant | 2 | 0 | The paper is a review article that discusses the pharmacokinetic profile of calcifediol but does not provide specific quantitative disposition parameters (CL, V, etc.) in the provided text. |
| PD | Sprague_2017 | not_relevant | 2 | 1 | The text is a review summary describing the mechanism and clinical utility of calcifediol but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Stamp_1977 | irrelevant | 0 | 0 | The study focuses on dose-response relationships and circulating concentrations of 25-hydroxyvitamin D, not the pharmacokinetic parameters (CL, V, etc.) of calcifediol. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not calcifediol. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil, not calcifediol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not calcifediol. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) studies for vancomycin, not calcifediol, and does not report any pharmacodynamic (PD) or exposure-response models. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and does not involve calcifediol. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and sampling strategies, not calcifediol, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Trummel_1969 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bone resorption and does not report pharmacokinetic parameters for calcifediol. |
| popPK | Vaes_2018 | irrelevant | 2 | 0 | The study reports dose-response effects on serum metabolite concentrations (25(OH)D) rather than quantitative pharmacokinetic parameters (CL, V, ka) or compartmental models for calcifediol. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not calcifediol. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships for calcifediol. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological study using simulated data to demonstrate a statistical metric (95% CDIRAs) and does not report pharmacokinetic parameters for calcifediol. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper is a methodological case study on uncertainty quantification using simulated PK data and does not report any pharmacodynamic or exposure-response relationships for calcifediol. |
| PGx | Wilkinson_2000 | not_relevant | 0 | 0 | The study investigates the association between VDR polymorphisms and tuberculosis susceptibility, not the pharmacokinetics or pharmacodynamics of calcifediol. |
| PGx | Wilson_2023 | not_relevant | 0 | 0 | The paper investigates genetic associations with endogenous calcitriol and the calcitriol-calcifediol ratio, not the pharmacokinetics or pharmacodynamics of exogenous calcifediol administration. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not calcifediol. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bosutinib, not calcifediol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not calcifediol. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not calcifediol, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of daptomycin, not calcifediol. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics (PopPK) and precision dosing, not calcifediol, and does not report any pharmacodynamic (PD) or exposure-response models. |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The paper investigates the causal relationship between serum hydroxyvitamin D levels and atherosclerosis using Mendelian randomization and transcriptomics, but does not report pharmacogenomic effects on the PK or PD of calcifediol. |
| popPK | Xu_2026_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not calcifediol. |
| PD | Xu_2026_2 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) exposure prediction (AUC) for polymyxin B using Bayesian and machine learning methods, and does not report any pharmacodynamic (PD) or exposure-response relationships for calcifediol or any other drug. |
| popPK | Yarger_1995 | irrelevant | 0 | 0 | The study focuses on 25-hydroxycholecalciferol (cholecalciferol) in chickens, not calcifediol (1,25-dihydroxyvitamin D3), and reports growth performance rather than pharmacokinetic parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not calcifediol. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships for calcifediol or any other drug. |
| popPK | Zheng_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of VDR signaling where calcifediol is used only as a VDR inhibitor, with no pharmacokinetic parameters reported. |
| PD | Zheng_2018 | not_relevant | 0 | 0 | The paper reports IC50 values for tamoxifen, not for calcifediol, and calcifediol is only mentioned qualitatively as a VDR inhibitor used to reverse effects, with no exposure-response or dose-response data provided for it. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IVIg/SCIg), not calcifediol. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not contain any data, analysis, or parameters for calcifediol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
