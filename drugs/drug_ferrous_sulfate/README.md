<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous sulfate&quot;}]"></div>

# ferrous sulfate

- **generic name:** ferrous sulfate
- **ATC codes:** `B03AA07`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ferrous sulfate is an oral iron medicine used to treat iron deficiency and related anemias. It is widely used and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q214863](https://www.wikidata.org/wiki/Q214863) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:28 | 0:47 | 0/0/0 | 0/1/0 | 0/0/0 | 56,579/2,810 | einfracz / qwen3.8-27b | 3 | 4/13 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_1995_CICR](drugs/drug_ferrous_sulfate/pd_Kim_1995_CICR.md) | Ca(2+)-induced Ca2+ release ← ferrous sulfate · direct Emax (saturable) effect | — | Kim E et al., Iron(II) is a modulator of ryanodine-se…, Toxicology and applied phar… (1995) | [10.1006/taap.1995.1008](https://doi.org/10.1006/taap.1995.1008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_1995_DXR_induced_Ca2_release](drugs/drug_ferrous_sulfate/pd_Kim_1995_DXR_induced_Ca2_release.md) | DXR-induced Ca2+ release ← ferrous sulfate · direct Emax (saturable) effect | — | Kim E et al., Iron(II) is a modulator of ryanodine-se…, Toxicology and applied phar… (1995) | [10.1006/taap.1995.1008](https://doi.org/10.1006/taap.1995.1008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_1995_binding_of_3H_ryanodine](drugs/drug_ferrous_sulfate/pd_Kim_1995_binding_of_3H_ryanodine.md) | binding of [3H]ryanodine ← ferrous sulfate · direct sigmoid Emax (Hill) effect | — | Kim E et al., Iron(II) is a modulator of ryanodine-se…, Toxicology and applied phar… (1995) | [10.1006/taap.1995.1008](https://doi.org/10.1006/taap.1995.1008) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 62 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuo_2014.pdf` | Zhuo Z et al., Kinetics absorption characteristics of…, Biological trace element re… (2014) | popPK | 9 | [10.1007/s12011-014-9906-x](https://doi.org/10.1007/s12011-014-9906-x) | [24615551](https://pubmed.ncbi.nlm.nih.gov/24615551) | The study describes a pharmacokinetic analysis of iron using a one-compartmental model in rats, comparing ferrous sulfate to ferrous glycinate, but the specific quantitative parameter values (Cmax, CL, V, etc.) are not provided in the text evidence. |
| `Aston_2010.pdf` | Aston JE et al., Effects of ferrous sulfate, inoculum hi…, Environmental toxicology an… (2010) | pd | 4 | [10.1002/etc.338](https://doi.org/10.1002/etc.338) | [20931606](https://www.ncbi.nlm.nih.gov/pubmed/20931606) | metadata signals extractable PD data (IC50) |
| `Fernandez_2017.pdf` | Fernandez ACAM et al., Antimicrobial and Antioxidant Activitie…, Current microbiology (2017) | pd | 4 | [10.1007/s00284-017-1340-9](https://doi.org/10.1007/s00284-017-1340-9) | [28840299](https://www.ncbi.nlm.nih.gov/pubmed/28840299) | metadata signals extractable PD data (IC50) |
| `Lo_1994.pdf` | Lo YC et al., Magnolol and honokiol isolated from Mag…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90187-2](https://doi.org/10.1016/0006-2952(94)90187-2) | [8117323](https://www.ncbi.nlm.nih.gov/pubmed/8117323) | metadata signals extractable PD data (IC50) |
| `Racay_1995.pdf` | Racay P et al., Rabbit brain endoplasmic reticulum memb…, Biochemistry and molecular… (1995) | pd | 4 | not captured | [7549956](https://www.ncbi.nlm.nih.gov/pubmed/7549956) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T18:27:54.652150+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnieszka_2022 | irrelevant | 0 | 0 | The paper is a systematic review of drug-food interactions in Parkinson's disease where ferrous sulfate is mentioned only as a dietary supplement that negatively affects levodopa, not as the subject drug for PK parameter extraction. |
| PD | Agnieszka_2022 | not_relevant | 1 | 0 | The paper is a systematic review that qualitatively mentions ferrous sulfate negatively affects levodopa pharmacokinetics, but it does not report any numeric PD parameters or concentration-effect curves for ferrous sulfate. |
| popPK | Ahn_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carbamazepine, where iron supplements are investigated only as a covariate affecting carbamazepine bioavailability, not as the subject drug. |
| PD | Ahn_2018 | not_relevant | 0 | 0 | The study reports a pharmacokinetic interaction (reduced bioavailability of carbamazepine) but does not report a pharmacodynamic or exposure-response relationship for ferrous sulfate itself. |
| popPK | Allen_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ferric maltol, not ferrous sulfate, which is only mentioned as a comparator. |
| PD | Allen_2021 | not_relevant | 4 | 3 | The study reports dose-response trends for serum iron and TSAT (Figure 2) and performs population PK modeling, but it does not fit a formal PK/PD model or report numeric PD parameters (e.g., Emax, EC50) for ferrous sulfate or ferric maltol. |
| popPK | Aston_2010 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Aston_2010 | not_relevant | 0 | 0 | The paper investigates the toxicity of heavy metals (lead, zinc, copper) to a bacterial strain, not the pharmacodynamics of ferrous sulfate as a drug. |
| popPK | Audet_1997 | irrelevant | 0 | 0 | The paper describes a radiological dosimeter mechanism involving spin-lattice relaxation, not the pharmacokinetics of ferrous sulfate. |
| PD | Audet_1997 | not_relevant | 0 | 0 | The paper describes a physical radiation dosimetry model (Fricke-gelatin) relating radiation dose to MRI relaxation rates, not a pharmacodynamic drug-response relationship. |
| popPK | Bellido_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid peroxidation where ferrous sulfate is used as a reagent to induce oxidative stress, not as a subject drug for pharmacokinetic analysis. |
| popPK | Benedetto_1985 | irrelevant | 0 | 0 | The paper describes the use of ferrous sulfate as a chemical dosimeter for radiation measurement, not as a drug for pharmacokinetic analysis. |
| PD | Benedetto_1985 | not_relevant | 0 | 0 | The paper describes a chemical dosimeter for radiation measurement, not a pharmacodynamic or exposure-response relationship for the drug ferrous sulfate. |
| popPK | Dainty_2003 | irrelevant | 6 | 3 | The paper reports iron absorption efficiency and model parameters (V, k, T) for a single-compartment model in a nutritional context, but does not report standard PK parameters (CL, Vd, ka) for ferrous sulfate as a drug; numeric values for the model parameters are described in text/simulation rather than a dedicated results table of estimated PK values per subject. |
| popPK | Davidsson_2003 | irrelevant | 0 | 0 | The study measures iron absorption via erythrocyte incorporation of stable isotopes and does not report pharmacokinetic parameters (CL, V, ka, etc.) for ferrous sulfate. |
| PD | Davidsson_2003 | not_relevant | 2 | 1 | The study reports a qualitative effect of a co-administered substance (retinyl palmitate) on iron absorption (erythrocyte incorporation) but does not provide a concentration-response or dose-response curve for ferrous sulfate itself, nor does it derive standard PD parameters (Emax, EC50) for the drug. |
| PGx | Davis_2024 | not_relevant | 0 | 0 | The paper describes a clinical response to ferrous sulfate treatment for iron deficiency in a patient with an FGF23 mutation, but does not report pharmacogenomic effects on the PK or PD of ferrous sulfate itself. |
| popPK | Droy-Lefaix_1995 | irrelevant | 0 | 0 | The study investigates the antioxidant effects of Ginkgo biloba extract on the retina, using ferrous sulfate only as a reagent to induce oxidative stress, not as a subject drug for pharmacokinetic analysis. |
| PD | Droy-Lefaix_1995 | not_relevant | 1 | 0 | The paper mentions a qualitative dose-response effect of Ginkgo biloba extract but provides no numeric PD parameters, concentration-effect curves, or quantitative data for ferrous sulfate. |
| popPK | Fernandez_2017 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Fernandez_2017 | not_relevant | 0 | 0 | The paper investigates the antimicrobial and antioxidant activities of plant extracts, not the pharmacodynamics of ferrous sulfate. |
| popPK | Fischer_2014 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of labetalol, not ferrous_sulfate. |
| PD | Fischer_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of labetalol and does not report any pharmacodynamic or exposure-response data for ferrous sulfate. |
| popPK | Fischer_2023 | irrelevant | 0 | 0 | The study reports ferritin concentrations and gut inflammation markers as clinical efficacy outcomes, not pharmacokinetic parameters (CL, V, ka, etc.) for ferrous sulfate. |
| popPK | Gaitán_2011 | irrelevant | 2 | 0 | The study measures fractional iron absorption using radioactive tracers rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Gaitán_2012 | irrelevant | 2 | 0 | The study investigates the interaction between heme and non-heme iron absorption using radioactive tracers, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Gómez_2026 | irrelevant | 0 | 0 | The paper is a systematic review on dentin erosion and MMP inhibition, not a pharmacokinetic study, and ferrous sulfate is used as a topical inhibitor rather than a subject drug for PK analysis. |
| PD | Gómez_2026 | not_relevant | 1 | 0 | The paper is a systematic review of proteolytic enzymes in dentin erosion and does not report any specific pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters for ferrous sulfate. |
| popPK | Haynes_2026 | irrelevant | 0 | 0 | The study analyzes changes in iron biomarkers (ferritin, hepcidin, sTfR, etc.) in response to oral iron dosing regimens and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for ferrous sulfate. |
| popPK | Hussein_2026 | irrelevant | 0 | 0 | The study focuses on iron oxide nanoparticles with ferrous sulfate used only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Hwang_2015 | irrelevant | 0 | 0 | The paper is an in-vitro antioxidant study of Aloe vera where ferrous sulfate is used only as a reagent/standard in the FRAP assay, not as a subject drug for pharmacokinetic analysis. |
| PD | Hwang_2015 | not_relevant | 0 | 0 | The paper studies Aloe vera extracts, not ferrous sulfate; ferrous sulfate is only mentioned as a unit of measurement for antioxidant power. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study focuses on the antioxidant properties of polydatin, using ferrous sulfate only as a reagent in the FRAP assay, and contains no pharmacokinetic data. |
| PD | Jin_2016 | not_relevant | 0 | 0 | The paper reports antioxidant activity (IC50) of polydatin, not a pharmacodynamic or exposure-response relationship for ferrous sulfate. |
| popPK | Kim_1995 | irrelevant | 0 | 0 | The study investigates the mechanistic action of ferrous iron on ryanodine receptors in rat cardiac sarcoplasmic reticulum in vitro, containing no pharmacokinetic parameters. |
| popPK | Lo_1994 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Lo_1994 | not_relevant | 0 | 0 | The paper investigates the cardioprotective effects of magnolol and honokiol, not ferrous sulfate. |
| popPK | Maeyama_2017 | irrelevant | 0 | 0 | The paper is a review of Fricke gel dosimeters where ferrous sulfate is used as a chemical dosimeter for radiation measurement, not as a subject drug for pharmacokinetic analysis. |
| PD | Maeyama_2017 | not_relevant | 0 | 0 | The paper is a review of Fricke gel dosimeters for radiation therapy verification, focusing on chemical dosimetry and imaging, not pharmacodynamic modeling of ferrous sulfate as a drug. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents (ESAs) in critically ill patients and does not mention ferrous sulfate or report any pharmacokinetic parameters for it. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials regarding the harms of erythropoiesis-stimulating agents (ESAs) and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for ferrous sulfate. |
| popPK | Mohamed_2022 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo mechanistic investigation of Hibiscus sabdariffa's antioxidant effects, using ferrous sulfate only as an oxidative stress inducer rather than as the subject drug for pharmacokinetic analysis. |
| PD | Mohamed_2022 | not_relevant | 0 | 0 | The paper studies the antioxidant and antidiabetic effects of Hibiscus sabdariffa extracts, using ferrous sulfate only as an agent to induce oxidative injury, and does not report any pharmacodynamic or exposure-response relationship for ferrous sulfate itself. |
| popPK | Mzembe_2025 | irrelevant | 0 | 0 | The study is a clinical trial analyzing child growth outcomes after prenatal iron treatment and does not report any pharmacokinetic parameters. |
| popPK | Nooreen_2017 | irrelevant | 0 | 0 | The paper is a phytochemical and biological activity study of Zanthoxylum armatum, where ferrous sulfate is only used as a standard for antioxidant assays (FRAP), not as a subject drug for pharmacokinetic analysis. |
| PD | Nooreen_2017 | not_relevant | 0 | 0 | The paper reports pharmacological assays (IC50, MIC) for plant compounds, not a pharmacodynamic or exposure-response relationship for the drug ferrous sulfate. |
| popPK | Oehlsen_2022 | irrelevant | 0 | 0 | The paper is a review of ferrofluid synthesis (iron oxide nanoparticles) and does not contain pharmacokinetic data for the drug ferrous sulfate. |
| PD | Oehlsen_2022 | not_relevant | 0 | 0 | The paper is a review on the synthesis and physical applications of ferrofluids (colloidal iron oxide nanoparticles) and does not report any pharmacodynamic or exposure-response data for ferrous sulfate as a drug. |
| popPK | Paganini_2017 | irrelevant | 2 | 0 | The study measures fractional iron absorption (bioavailability) using stable isotopes rather than pharmacokinetic parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Pandey_2025 | irrelevant | 0 | 0 | The study is a mechanistic neuroprotection investigation where ferrous sulfate is used as an inducer of oxidative stress, not as the subject drug for pharmacokinetic analysis. |
| PD | Pandey_2025 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of Betulinic acid in a disease model, not the pharmacodynamics of ferrous sulfate, and does not report any exposure-response or dose-response parameters for ferrous sulfate. |
| popPK | Pizarro_2002 | irrelevant | 1 | 0 | The study focuses on the absorption pathway of iron bis-glycine chelate, using ferrous sulfate only as a comparator/reference agent, and does not report quantitative pharmacokinetic parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Pizarro_2003 | irrelevant | 2 | 0 | The study reports iron absorption amounts (mg absorbed) rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ferrous sulfate. |
| popPK | Qasem_2022 | irrelevant | 0 | 0 | The study investigates the biological properties of Matricaria chamomilla essential oils and honey, not the pharmacokinetics of ferrous sulfate. |
| PD | Qasem_2022 | not_relevant | 0 | 0 | The paper investigates the biological properties of Matricaria chamomilla essential oils and honey, not ferrous sulfate, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Racay_1995 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Racay_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of stobadine on rabbit brain membranes and does not mention ferrous sulfate or report any pharmacodynamic or exposure-response data for it. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a soil chemistry study on bauxite residue neutralization, not a pharmacokinetic study of ferrous sulfate in biological systems. |
| PD | Ren_2022 | not_relevant | 0 | 0 | The paper investigates the chemical neutralization of bauxite residue (soil/environmental science) using ferrous sulfate, not a pharmacodynamic or exposure-response relationship in a biological system. |
| popPK | Rohn_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of free radical damage to ATPases, not a pharmacokinetic study, and reports no disposition parameters for ferrous sulfate. |
| popPK | Rosen_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of ferrous sulfate for iron deficiency, reporting only serum ferritin levels and not any pharmacokinetic parameters. |
| PD | Rosen_2019 | not_relevant | 1 | 0 | The paper reports clinical efficacy (ferritin increase) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for ferrous sulfate. |
| popPK | Sena_2024 | irrelevant | 0 | 0 | The study analyzes essential oils of Tetradenia riparia and mentions ferrous sulfate only as a unit of measurement for antioxidant capacity (FRAP), not as a drug for PK evaluation. |
| PD | Sena_2024 | not_relevant | 0 | 0 | The paper studies plant extracts and essential oils, not the drug ferrous sulfate (which is only mentioned as a unit in an antioxidant assay). |
| popPK | Silva_2022 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | Silva_2022 | not_relevant | 0 | 0 | The paper focuses on the extraction of kiwiberry leaves for skin application and does not involve ferrous sulfate or any pharmacodynamic modeling. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | The study analyzes phytochemicals of *Humulus lupulus* and uses ferrous sulfate only as a standard for FRAP assays, not as a drug subject for PK analysis. |
| PD | Silva_2025 | not_relevant | 0 | 0 | The paper analyzes the phytochemical profile and antioxidant activity of Humulus lupulus extracts, not the pharmacodynamics of ferrous sulfate. |
| popPK | Silva_2026 | irrelevant | 0 | 0 | The study focuses on the effects of N-acetylcysteine (NAC) in preeclampsia and contains no data on ferrous sulfate pharmacokinetics. |
| PD | Silva_2026 | not_relevant | 0 | 0 | The paper studies N-acetylcysteine, not ferrous sulfate, and reports clinical trial outcomes without any pharmacodynamic modeling or exposure-response analysis. |
| popPK | Stanoiu_2025 | irrelevant | 0 | 0 | The paper studies a medicinal mushroom delivery system and contains no pharmacokinetic data for ferrous sulfate. |
| PD | Stanoiu_2025 | not_relevant | 0 | 0 | The paper studies Inonotus obliquus and silver nanoparticles, not ferrous sulfate, and reports no pharmacodynamic or exposure-response data for the target drug. |
| popPK | Steele_2021 | irrelevant | 0 | 0 | The study evaluates the biological effects of iron supplementation on telomere length and mitochondrial DNA content, not pharmacokinetic parameters such as clearance or volume. |
| popPK | Steinke_1978 | irrelevant | 0 | 0 | The study assesses iron bioavailability via hemoglobin repletion in rats, not pharmacokinetic disposition parameters (CL, V, ka) for ferrous sulfate. |
| PD | Steinke_1978 | not_relevant | 3 | 2 | The paper reports relative bioavailability percentages using a slope ratio assay for iron sources, which is a pharmacokinetic/bioavailability metric, not a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Taha_2022 | irrelevant | 0 | 0 | The study focuses on the toxicological effects of heavy metals on detrusor muscle contractility (in vivo/in vitro physiology), not the pharmacokinetic disposition parameters of ferrous sulfate. |
| PD | Taha_2022 | not_relevant | 3 | 2 | The paper reports qualitative changes in Emax and dose-response curves for ferrous sulfate but does not provide numeric PD parameters (e.g., specific Emax values, EC50, or curve data) for extraction. |
| popPK | Valente_2016 | irrelevant | 0 | 0 | The paper describes the use of ferrous sulfate as a chemical component in a Fricke gel dosimeter for radiation measurement, not as a drug subject to pharmacokinetic analysis. |
| PD | Valente_2016 | not_relevant | 0 | 0 | The paper describes a radiation dosimeter (Fricke gel) and its physical dose-response to X-rays, not a pharmacodynamic drug response. |
| popPK | Walczyk_2014 | irrelevant | 0 | 0 | The study measures iron absorption efficiency using stable isotopes rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for ferrous sulfate. |
| popPK | Wolfson_1991 | irrelevant | 0 | 0 | The paper is a review of quinolone pharmacokinetics where ferrous sulfate is only mentioned as a co-administered agent that reduces bioavailability, not as the subject drug. |
| PD | Wolfson_1991 | not_relevant | 1 | 0 | The text is a review of quinolones that only qualitatively mentions ferrous sulfate as a substance that reduces bioavailability, without providing any pharmacodynamic or exposure-response data for ferrous sulfate itself. |
| popPK | Wong_2000 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, with ferrous sulfate serving only as a co-administered interactant rather than the subject drug. |
| PD | Wong_2000 | not_relevant | 3 | 1 | The study reports PK changes and qualitative changes in antimicrobial activity (assay dependency) but does not provide numeric PD parameters (e.g., MIC, Emax, EC50) or a quantitative concentration-effect curve for ferrous sulfate. |
| popPK | Yaeger_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tulathromycin in ewes, not ferrous sulfate. |
| PD | Yaeger_2021 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of tulathromycin, not ferrous sulfate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Zarif_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and delivery of atorvastatin, not ferrous sulfate. |
| PD | Zarif_2025 | not_relevant | 0 | 0 | The paper focuses on atorvastatin delivery and does not report any pharmacodynamic or exposure-response analysis for ferrous sulfate. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of iron supplementation on anemia and iron status, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhuo_2014 | relevant | 9 | 0 | The study describes a pharmacokinetic analysis of iron using a one-compartmental model in rats, comparing ferrous sulfate to ferrous glycinate, but the specific quantitative parameter values (Cmax, CL, V, etc.) are not provided in the text evidence. |
| popPK | de_2025 | irrelevant | 0 | 0 | The study focuses on the formulation of trans-dehydrocrotonin in a nanoemulsion and performs in vitro release/antioxidant assays, unrelated to ferrous_sulfate pharmacokinetics. |
| PD | de_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro antioxidant activity of a trans-dehydrocrotonin nanoemulsion, with no pharmacodynamic or exposure-response analysis for ferrous sulfate. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts and methods for studies on G-CSF, CSF3R splicing, hemophilia, DDAVP, cancer disparities, and dexrazoxane, but does not contain any data, analysis, or mention of ferrous sulfate or its pharmacodynamic parameters. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title/header for an abstract book and contains no data, analysis, or parameters regarding ferrous sulfate pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
