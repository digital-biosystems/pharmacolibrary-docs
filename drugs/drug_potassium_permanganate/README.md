<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;potassium permanganate&quot;}]"></div>

# potassium permanganate

- **generic name:** potassium permanganate
- **ATC codes:** `D08AX06`, `V03AB18`
- **DrugBank:** [DB13831](https://go.drugbank.com/drugs/DB13831) · **PubChem:** not captured
- **molar mass:** 158.032 g/mol (KMnO4) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 21:20 | 15:46 | 0/0/0 | 0/0/0 | 0/0/0 | 121,831/4,013 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/8 | 9/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ding_2018.pdf` | Ding T et al., Biodegradation of triclosan in diatom N…, Journal of hazardous materi… (2018) | pd | 5 | [10.1016/j.jhazmat.2017.09.033](https://doi.org/10.1016/j.jhazmat.2017.09.033) | [29035714](https://www.ncbi.nlm.nih.gov/pubmed/29035714) | metadata signals extractable PD data (EC50) |
| `Al-Saleh_2002.pdf` | Al-Saleh SS, Biochemical characterization of the sol…, Journal of natural toxins (2002) | pd | 4 | not captured | [12503880](https://www.ncbi.nlm.nih.gov/pubmed/12503880) | metadata signals extractable PD data (IC50) |
| `Chhetri_2020.pdf` | Chhetri RK et al., Ecotoxicity Evaluation of Pure Peraceti…, International journal of en… (2020) | pd | 4 | [10.3390/ijerph17145031](https://doi.org/10.3390/ijerph17145031) | [32668774](https://www.ncbi.nlm.nih.gov/pubmed/32668774) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T21:18:22.671794+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abuladze_2009 | irrelevant | 0 | 0 | The paper is a thermal analysis study of bacterial cells using differential scanning calorimetry and does not report any pharmacokinetic parameters for potassium permanganate. |
| popPK | Al-Saleh_2002 | irrelevant | 0 | 0 | The paper is a biochemical study on snake venom alkaline phosphatase where permanganate is used only as an inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Al-Saleh_2002 | not_relevant | 0 | 0 | The paper reports biochemical enzyme kinetics (Km, Vmax, IC50) for alkaline phosphatase inhibition by permanganate, which is an in vitro enzymatic assay, not a pharmacodynamic (exposure-response) relationship for the drug in a biological system. |
| popPK | Alhamhoom_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and characterization of a topical cream, using potassium permanganate only as a reagent for antioxidant assays, not as a subject drug for pharmacokinetic evaluation. |
| PD | Alhamhoom_2026 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (DPPH/Permanganate) and ex vivo permeation, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug in a biological system with numeric PD parameters (e.g., Emax, EC50 for effect). |
| popPK | Aliyari_2025 | irrelevant | 0 | 0 | The paper studies the antiviral activity of hydrogen peroxide against SARS-CoV-2 and does not involve potassium permanganate or pharmacokinetic parameters. |
| PD | Aliyari_2025 | not_relevant | 0 | 0 | The paper studies hydrogen peroxide, not potassium permanganate. |
| popPK | Asser_2019 | irrelevant | 0 | 0 | The study is a toxicological dose-response analysis in mice focusing on behavioral effects and lethal doses, not a pharmacokinetic study reporting quantitative disposition parameters for potassium permanganate. |
| popPK | Berner_2020 | irrelevant | 0 | 0 | The paper is an in vitro study on antiseptics (sodium hypochlorite, hydrogen peroxide, chlorhexidine, benzalkonium chloride) and does not involve potassium permanganate or pharmacokinetic parameters. |
| PD | Berner_2020 | not_relevant | 0 | 0 | The paper investigates sodium hypochlorite, hydrogen peroxide, chlorhexidine, and benzalkonium chloride, but does not study potassium permanganate. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Chase_2012 | not_relevant | 0 | 0 | The provided text is a conference session header and file link, containing no scientific content, data, or pharmacodynamic analysis for potassium permanganate. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is an environmental water quality study where potassium permanganate is used only as a reagent for the CODMn index, not as a subject drug for pharmacokinetic analysis. |
| popPK | Chhetri_2020 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Chhetri_2020 | not_relevant | 0 | 0 | The paper evaluates the ecotoxicity of peracetic acid (PAA), not potassium permanganate, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | De_1991 | irrelevant | 0 | 0 | The paper is a genotoxicity study (Ames test and DNA damage) and does not report any pharmacokinetic parameters for potassium permanganate. |
| PD | De_1991 | not_relevant | 3 | 2 | The paper reports qualitative dose-response relationships and specific mutagenic potencies (revertants/nmole) for manganese salts, but lacks a formal pharmacodynamic model (e.g., Emax, EC50) or a continuous concentration-effect curve for potassium permanganate itself. |
| popPK | Deady_1999 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on topoisomerase inhibitors and does not report pharmacokinetic parameters for potassium permanganate. |
| PD | Deady_1999 | not_relevant | 0 | 0 | The paper reports IC50 values for novel topoisomerase inhibitors, not for potassium permanganate, which is only mentioned as a reagent in the synthesis. |
| popPK | Ding_2018 | irrelevant | 0 | 0 | The study focuses on the biodegradation and toxicity of triclosan in diatoms, with potassium permanganate serving only as a co-treatment agent, and no pharmacokinetic parameters are reported. |
| PD | Ding_2018 | not_relevant | 0 | 0 | The paper reports toxicity (EC50) of triclosan and qualitative effects of potassium permanganate on that toxicity, but does not provide a concentration-effect or dose-response relationship for potassium permanganate itself with numeric PD parameters. |
| popPK | Dorey_1995 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on beta-carbolines where potassium permanganate is used only as a reagent in synthesis, not as a subject drug for pharmacokinetic analysis. |
| PD | Dorey_1995 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study on beta-carboline derivatives; potassium permanganate is used only as a reagent in the synthesis, and no pharmacodynamic or exposure-response data for it are reported. |
| popPK | Jafarisani_2024 | irrelevant | 0 | 0 | The study focuses on cadmium nanoclusters and crocin, with potassium permanganate serving only as a comparator for genotoxicity, and no PK parameters for potassium permanganate are reported. |
| PD | Jafarisani_2024 | not_relevant | 0 | 0 | The paper focuses on cadmium nanoclusters and crocin; potassium permanganate is only mentioned as a positive control for genotoxicity without any exposure-response or PD analysis. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on glioblastoma and histone methylation, and does not report pharmacokinetic parameters for potassium permanganate. |
| PD | Joun_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of drug tolerance in glioblastoma (PRDM9) and mentions potassium permanganate only as a TLC stain in the chemistry methods, containing no pharmacodynamic or exposure-response data for it. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper studies fat taste receptor agonists (NKS-3 and NKS-5) and does not report pharmacokinetic parameters for potassium permanganate. |
| PD | Khan_2023 | not_relevant | 0 | 0 | The paper studies fat taste receptor agonists (NKS-3 and NKS-5) and does not mention or analyze potassium permanganate. |
| popPK | Lai_2022 | irrelevant | 0 | 0 | The paper is an environmental engineering study on water pollution modeling where potassium permanganate is used as a chemical indicator for COD (Chemical Oxygen Demand), not as a subject drug for pharmacokinetic analysis. |
| PD | Lai_2022 | not_relevant | 0 | 0 | The paper uses "potassium permanganate" as a chemical oxidant to measure Chemical Oxygen Demand (CODMn) in environmental water quality modeling, not as a pharmacological drug, and reports no pharmacodynamic or dose-response parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis on the effects of microplastics on soil organic carbon and does not involve the pharmacokinetics of potassium permanganate. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anticancer activity of carnosic acid derivatives and does not involve potassium permanganate or pharmacokinetic parameters. |
| PD | Moura_2025 | not_relevant | 0 | 0 | The paper studies carnosic acid derivatives, not potassium permanganate. |
| popPK | Paixão_2008 | irrelevant | 0 | 0 | The paper is a phytotoxicity screening study using potassium permanganate as a reference toxicant, not a pharmacokinetic study. |
| PD | Paixão_2008 | not_relevant | 3 | 0 | The paper reports an EC50 value for potassium permanganate as part of a method validation study, but the specific numeric value is not provided in the text, and it is an ecotoxicity endpoint rather than a pharmacodynamic model. |
| popPK | Poddar_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DI-87, not potassium permanganate. |
| PD | Poddar_2020 | not_relevant | 0 | 0 | The paper reports pharmacology for DI-87, not potassium permanganate. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper studies NIRF theranostic probes for Alzheimer's disease and does not involve potassium permanganate or its pharmacokinetics. |
| popPK | Saeed_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro study of Nicotiana glauca where potassium permanganate is used only as a reagent for an antioxidant assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Saeed_2026 | not_relevant | 0 | 0 | The paper studies the antioxidant and anticancer properties of a plant extract, using potassium permanganate only as a reagent in a chemical assay, not as a drug subject to pharmacodynamic modeling. |
| popPK | Sloan_2015 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic modeling of bacterial elimination in tuberculosis and does not involve potassium permanganate or its pharmacokinetics. |
| PD | Sloan_2015 | not_relevant | 0 | 0 | The paper models bacterial elimination rates (BER) and lipid body counts in tuberculosis patients, not the pharmacodynamic exposure-response relationship of potassium permanganate. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not mention potassium permanganate or report any pharmacokinetic parameters for it. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not report any pharmacodynamic or exposure-response data for potassium permanganate. |
| popPK | Wei_2011 | irrelevant | 0 | 0 | The paper describes an immunoassay for dibutyl phthalate (DBP) and uses potassium permanganate only as a chemical reagent for surface modification, not as a subject drug for pharmacokinetic analysis. |
| PD | Wei_2011 | not_relevant | 0 | 0 | The paper describes an immunoassay for dibutyl phthalate; potassium permanganate is used only as a chemical reagent for surface oxidation, not as a drug with a pharmacodynamic effect. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The paper is a review of acyclovir, not a pharmacokinetic study of potassium permanganate. |
| PD | Wei_2021 | not_relevant | 0 | 0 | The paper is a review of acyclovir synthesis and detection methods, not potassium permanganate, and contains no pharmacodynamic or exposure-response data. |
| popPK | Xiong_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibuprofen, using potassium permanganate only as a reagent for chemiluminescence detection. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper focuses on the discovery of an EGFR inhibitor (CDDO-Me) for lung cancer, and potassium permanganate is only mentioned as a compound excluded from the screening dataset, with no pharmacokinetic data provided. |
| popPK | Zufferey_2025 | irrelevant | 0 | 0 | The paper is a study protocol for tranexamic acid (TXA), not potassium permanganate, and does not report PK parameters for the target drug. |
| PD | Zufferey_2025 | not_relevant | 3 | 2 | The paper is a study protocol for a future trial and only cites assumed parameters (Emax 40%, ED50 400 mg) from a prior meta-analysis for sample size calculation, rather than reporting new PD data or a fitted model from the study itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
