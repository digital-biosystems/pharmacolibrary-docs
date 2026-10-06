<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;carbohydrates&quot;}]"></div>

# carbohydrates

- **generic name:** carbohydrates
- **ATC codes:** `B05BA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Intravenous sugar (dextrose) solution is used to treat low blood sugar and is given as a carbohydrate source in parenteral nutrition. It is on the WHO list of essential medicines and is widely used in hospitals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3489648](https://www.wikidata.org/wiki/Q3489648) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 22:55 | 19:13 | 0/0/0 | 0/0/0 | 0/0/0 | 817,276/12,086 | ollama / qwen3.8:27b-mtp-q8_0 | 72 | 16/80 | 70/2 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1598 matched, 207 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lavau_1975.pdf` | Lavau M et al., [U-14C]glucose metabolism in vivo in ra…, Journal of lipid research (1975) | popPK | 8 | not captured | [1127353](https://pubmed.ncbi.nlm.nih.gov/1127353) | The study reports quantitative pharmacokinetic parameters (turnover rate, pool size, space) for glucose (a carbohydrate) in rats using a two-compartment model. |
| `Atengueño-Reyes_2023.pdf` | Atengueño-Reyes K et al., Microalgal consortium tolerance to bisp…, Ecotoxicology and environme… (2023) | pd | 5 | [10.1016/j.ecoenv.2023.115117](https://doi.org/10.1016/j.ecoenv.2023.115117) | [37315359](https://www.ncbi.nlm.nih.gov/pubmed/37315359) | metadata signals extractable PD data (EC50) |
| `Cheng_2024.pdf` | Cheng S et al., Improving Anti-HIV activity and pharmac…, European journal of medicin… (2024) | pd | 5 | [10.1016/j.ejmech.2024.116299](https://doi.org/10.1016/j.ejmech.2024.116299) | [38479167](https://www.ncbi.nlm.nih.gov/pubmed/38479167) | metadata signals extractable PD data (EC50) |
| `Kovačević_2022.pdf` | Kovačević M et al., Comprehensive study of the effects of s…, Ecotoxicology (London, Engl… (2022) | pd | 5 | [10.1007/s10646-022-02609-4](https://doi.org/10.1007/s10646-022-02609-4) | [36462129](https://www.ncbi.nlm.nih.gov/pubmed/36462129) | metadata signals extractable PD data (EC50) |
| `Byambaragchaa_2018.pdf` | Byambaragchaa M et al., Site specificity of eel luteinizing hor…, General and comparative end… (2018) | pd | 4 | [10.1016/j.ygcen.2018.07.015](https://doi.org/10.1016/j.ygcen.2018.07.015) | [30056138](https://www.ncbi.nlm.nih.gov/pubmed/30056138) | metadata signals extractable PD data (EC50) |
| `Ghosia_2019.pdf` | Ghosia L et al., Phytochemical screening, antioxidant an…, Journal of traditional Chin… (2019) | pd | 4 | not captured | [32186146](https://www.ncbi.nlm.nih.gov/pubmed/32186146) | metadata signals extractable PD data (EC50) |
| `Iyanda_2024.pdf` | Iyanda Y et al., Inhibition of alpha-Amylase and alpha-G…, Nigerian journal of physiol… (2024) | pd | 4 | [10.54548/njps.v39i1.18](https://doi.org/10.54548/njps.v39i1.18) | [40156814](https://www.ncbi.nlm.nih.gov/pubmed/40156814) | metadata signals extractable PD data (IC50) |
| `Jiang_2024.pdf` | Jiang Y et al., RNA-Activatable Near-Infrared Photosens…, Journal of the American Che… (2024) | pd | 4 | [10.1021/jacs.4c09470](https://doi.org/10.1021/jacs.4c09470) | [39215718](https://www.ncbi.nlm.nih.gov/pubmed/39215718) | metadata signals extractable PD data (IC50) |
| `Kim_2019.pdf` | Kim JM et al., Site-specific roles of N-linked oligosa…, General and comparative end… (2019) | pd | 4 | [10.1016/j.ygcen.2019.03.003](https://doi.org/10.1016/j.ygcen.2019.03.003) | [30836102](https://www.ncbi.nlm.nih.gov/pubmed/30836102) | metadata signals extractable PD data (EC50) |
| `Leifeld_2018.pdf` | Leifeld V et al., Ferrous ions reused as catalysts in Fen…, Journal of environmental ma… (2018) | pd | 4 | [10.1016/j.jenvman.2018.05.087](https://doi.org/10.1016/j.jenvman.2018.05.087) | [29860122](https://www.ncbi.nlm.nih.gov/pubmed/29860122) | metadata signals extractable PD data (EC50) |
| `Nyayiru_2020.pdf` | Nyayiru Kannaian UP et al., Phytochemical composition and antioxida…, Heliyon (2020) | pd | 4 | [10.1016/j.heliyon.2020.e03411](https://doi.org/10.1016/j.heliyon.2020.e03411) | [32083218](https://www.ncbi.nlm.nih.gov/pubmed/32083218) | metadata signals extractable PD data (EC50) |
| `Laki_2013.pdf` | Laki S et al., [Importance of drug interactions with s…, Acta pharmaceutica Hungarica (2013) | pgx | 7 | not captured | [24575657](https://www.ncbi.nlm.nih.gov/pubmed/24575657) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Murray_2006.pdf` | Murray M, Altered CYP expression and function in…, Current drug metabolism (2006) | pgx | 7 | [10.2174/138920006774832569](https://doi.org/10.2174/138920006774832569) | [16454693](https://www.ncbi.nlm.nih.gov/pubmed/16454693) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |
| `Robledo_2015.pdf` | Robledo MA et al., Hypothesis of demodicidosis rosacea flu…, Medical hypotheses (2015) | pgx | 5 | [10.1016/j.mehy.2015.01.036](https://doi.org/10.1016/j.mehy.2015.01.036) | [25683389](https://www.ncbi.nlm.nih.gov/pubmed/25683389) | metadata signals extractable PGX data (CYP2E1) |
| `Slemc_2016.pdf` | Slemc L et al., Transcription factor HIF1A: downstream…, Tumour biology : the journa… (2016) | pgx | 5 | [10.1007/s13277-016-5331-4](https://doi.org/10.1007/s13277-016-5331-4) | [27644243](https://www.ncbi.nlm.nih.gov/pubmed/27644243) | metadata signals extractable PGX data (ABCG2) |

<sub>queue written 2026-10-05T22:43:30.416663+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Afzal_2026 | irrelevant | 0 | 0 | The paper investigates the antimicrobial activity of plant terpenoids against bacteria and does not report pharmacokinetic parameters for carbohydrates. |
| popPK | Al-Rowaily_2019 | irrelevant | 0 | 0 | The paper analyzes the nutritional composition and antioxidant activity of wild plants, not the pharmacokinetics of carbohydrates as a drug. |
| PD | Al-Rowaily_2019 | not_relevant | 0 | 0 | The paper reports nutritional composition and in vitro antioxidant activity (DPPH EC50) of plant extracts, not a pharmacodynamic exposure-response relationship for a drug. |
| PGx | Albert_2012 | not_relevant | 0 | 0 | The paper focuses on the cultivation and characterization of corneal limbal epithelial stem cells, not on pharmacogenomics or drug PK/PD parameters. |
| popPK | Ali_2012 | irrelevant | 0 | 0 | The paper investigates the anthelmintic and antispasmodic activities of a plant extract, not the pharmacokinetics of carbohydrates. |
| popPK | Ali_2017 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Punica granatum extract on rabbit jejunum and does not report pharmacokinetic parameters for carbohydrates. |
| popPK | Alkadi_2024 | irrelevant | 0 | 0 | The study investigates the association between snack intake (carbohydrates) and oral microorganism colonization, not the pharmacokinetics of carbohydrates. |
| popPK | Almiron-Roig_2023 | irrelevant | 0 | 0 | The study investigates the acute metabolic effects of sweetener blends on a carbohydrate-rich meal, not the pharmacokinetic disposition parameters (CL, V, etc.) of carbohydrates as a drug. |
| PGx | Apryatin_2017 | not_relevant | 0 | 0 | The study investigates the physiological effects of dietary sugars on metabolic syndrome markers in rats and mice, not the pharmacokinetic or pharmacodynamic effects of a drug modulated by a gene variant. |
| popPK | Atengueño-Reyes_2023 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Atengueño-Reyes_2023 | not_relevant | 0 | 0 | The paper studies the toxicological effects of bisphenol A and triclosan on microalgae, not the pharmacodynamics of carbohydrates. |
| PGx | Aw_2019 | not_relevant | 0 | 0 | The paper is a review on evolutionary biology and mitochondrial genetics, discussing macronutrient interactions with mtDNA mutations, not pharmacokinetics or pharmacodynamics of carbohydrate drugs. |
| PGx | Aziz_2016 | not_relevant | 0 | 0 | The paper studies the effect of a gluten-free diet on IBS symptoms stratified by HLA genotype, not the pharmacokinetics or pharmacodynamics of a specific carbohydrate drug. |
| popPK | Bai_2023 | irrelevant | 0 | 0 | The study investigates the toxicity of paraquat to the cyanobacterium Microcystis aeruginosa and is not a pharmacokinetic study of carbohydrates. |
| PD | Bai_2023 | not_relevant | 3 | 2 | The paper reports toxicological effects of paraquat on cyanobacteria at two specific concentrations (EC10/EC50) but does not provide a pharmacodynamic model, dose-response curve, or numeric PD parameters for carbohydrates. |
| popPK | Battaglia_1986 | irrelevant | 0 | 0 | The paper discusses placental transport and metabolism of carbohydrates (glucose) in a physiological context, not pharmacokinetic parameters (CL, V, ka) for a specific drug. |
| popPK | Bernabé_2016 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between sugar intake and dental caries, not a pharmacokinetic study of carbohydrates as a drug. |
| PGx | Bernal_2024 | not_relevant | 0 | 0 | The paper studies plant metabolism and seed development in beans, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Bian_2026 | irrelevant | 0 | 0 | The study is a nutritional epidemiology analysis of dietary carbohydrate quality and glycemic control in Type 1 Diabetes, not a pharmacokinetic study of carbohydrates as a drug. |
| PGx | Bidart_2023 | not_relevant | 0 | 0 | The paper investigates bacterial carbohydrate metabolism and gene knockouts in a bacterium, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Bird_1984 | irrelevant | 0 | 0 | The study investigates triacylglycerol secretion kinetics in rats using carbohydrates only as dietary variables, not as the subject drug for PK analysis. |
| popPK | Bracke_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for an anti-rat complement C2 antibody, not for the drug carbohydrates. |
| PGx | Buron-Moles_2019 | not_relevant | 0 | 0 | The paper studies carbohydrate metabolism in lactic acid bacteria, not the pharmacokinetics or pharmacodynamics of drugs in humans. |
| popPK | Byambaragchaa_2018 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Byambaragchaa_2018 | not_relevant | 0 | 0 | The paper focuses on the structural role of N-linked oligosaccharides in eel luteinizing hormone signal transduction, not on pharmacodynamic exposure-response or dose-response modeling with numeric parameters. |
| popPK | Candido_2022 | irrelevant | 0 | 0 | The paper is a biotechnology study on microalgae growth in vinasse and does not report pharmacokinetic parameters for carbohydrates as a drug. |
| PGx | Carew_1992 | not_relevant | 0 | 0 | The paper investigates the structural role of O-linked carbohydrates on von Willebrand factor binding, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a carbohydrate drug. |
| PD | Carr_1985 | not_relevant | 1 | 0 | The text is a historical review of the synthesis and pharmacology of isosorbide dinitrate and does not report any numeric PD parameters or exposure-response data. |
| PGx | Chen_2022 | not_relevant | 0 | 0 | The paper analyzes metabolic differences in soybean seeds, not pharmacogenomic effects on drug PK/PD parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper describes a bioinformatics database of natural components and does not report any pharmacokinetic parameters for carbohydrates. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper describes a bioinformatics database (GNDC) for cataloging natural components and does not report any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Cheng_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and in vitro anti-HIV activity of a modified peptide, not on a pharmacodynamic exposure-response or dose-response relationship for carbohydrates. |
| PGx | Cicalini_2021 | not_relevant | 0 | 0 | The paper reports on a genetic disorder (biotinidase deficiency) affecting endogenous metabolism, not the pharmacokinetics or pharmacodynamics of an exogenous carbohydrate drug. |
| PGx | Dandekar_2010 | not_relevant | 0 | 0 | The paper is a review on antimicrobial resistance and pharmacogenomics for antibiotics, not on the pharmacokinetics or pharmacodynamics of carbohydrates. |
| popPK | Demeyer_1986 | irrelevant | 0 | 0 | The paper discusses rumen microbial growth efficiency and fermentation of feed carbohydrates, not the pharmacokinetics of carbohydrates as a drug. |
| PD | Di_2021 | not_relevant | 3 | 2 | The paper reports in vitro binding inhibition (IC50) for synthetic ligands, which is a pharmacodynamic parameter, but it lacks the exposure-response or dose-response modeling context (PK/PD) typically required for this specific extraction task, and the text provided does not contain the numeric values. |
| popPK | Easter_2013 | irrelevant | 0 | 0 | The paper is a nutritional epidemiology study analyzing dietary patterns and macronutrient intake in children, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | El-Maradny_2025 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the antioxidant and prebiotic properties of mushroom extracts, not a pharmacokinetic study of carbohydrates as a drug. |
| PGx | Enko_2018 | not_relevant | 0 | 0 | The study investigates the association between carbohydrate malabsorption and depression, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Fan_2024 | irrelevant | 0 | 0 | The paper describes the isolation and antifungal activity of brominated butenolides, mentioning carbohydrates only as metabolites affected by the drug mechanism, not as the subject of a pharmacokinetic study. |
| popPK | Fatima_2025 | irrelevant | 0 | 0 | The paper is a review of nutraceuticals and natural compounds for chronic disease management and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Fatima_2025 | not_relevant | 0 | 0 | The paper is a narrative review of nutraceuticals and natural compounds, focusing on mechanisms and delivery technologies, without reporting any specific pharmacodynamic models, exposure-response relationships, or numeric PD parameters for carbohydrates. |
| popPK | Feás_2012 | irrelevant | 0 | 0 | The paper is a nutritional and chemical characterization of bee pollen, not a pharmacokinetic study of carbohydrates. |
| PD | Feás_2012 | not_relevant | 0 | 0 | The paper reports nutritional composition and in vitro antioxidant activity (EC50) of bee pollen, but does not report a pharmacodynamic or exposure-response relationship for carbohydrates in a biological system. |
| popPK | Flatt_1987 | irrelevant | 0 | 0 | The paper discusses a theoretical model of body weight regulation and energy storage, not the pharmacokinetics of carbohydrates as a drug. |
| popPK | Foster_2017 | irrelevant | 0 | 0 | The paper is an ecological study on tree defoliation and non-structural carbohydrate storage, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Frybortova_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ozanimod, not carbohydrates. |
| PD | Frybortova_2026 | not_relevant | 0 | 0 | The paper investigates the effect of a ketogenic diet on the pharmacokinetics (PK) of ozanimod and hepatic enzyme activity, but it does not report any pharmacodynamic (PD) or exposure-response relationship for the drug or the diet. |
| PGx | Gao_2018 | not_relevant | 0 | 0 | The paper studies the genetic regulation of developmental timing and lipid metabolism in Drosophila in response to dietary carbohydrates, not the pharmacokinetics or pharmacodynamics of a carbohydrate drug. |
| popPK | Ghosh_2023 | irrelevant | 0 | 0 | The study is an in-vitro analysis of antioxidant and cytotoxic properties of mushroom teas, not a pharmacokinetic study of carbohydrates. |
| popPK | Ghosia_2019 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Ghosia_2019 | not_relevant | 0 | 0 | The paper focuses on phytochemical screening and in vitro antioxidant/antibacterial assays of Daphne mucronata, not on pharmacokinetics or pharmacodynamics of carbohydrates. |
| popPK | Giovannini_2026 | irrelevant | 0 | 0 | The paper is a clinical trial protocol evaluating the metabolic effects of dietary carbohydrate products (glycemic index, TyG index) and does not report pharmacokinetic parameters (CL, V, ka) for carbohydrates as a drug. |
| popPK | Glass_2023 | irrelevant | 0 | 0 | The paper is a metabolomics study of urine in ME/CFS patients, not a pharmacokinetic study of carbohydrates as a drug. |
| PGx | Gonzalez-Alba_2019 | not_relevant | 0 | 0 | The paper focuses on the evolutionary phylogeny of Escherichia coli and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Gridneva_2019 | irrelevant | 0 | 0 | The study investigates the association between human milk carbohydrate concentrations and infant body composition, not the pharmacokinetic disposition parameters (CL, V, etc.) of carbohydrates as a drug. |
| popPK | Guzmán-Flores_2026 | irrelevant | 0 | 0 | The paper is an in silico study on compounds for dental caries prevention and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Guzmán-Flores_2026 | not_relevant | 0 | 0 | The paper is an in silico study focusing on molecular docking and binding energies for drug candidates, containing no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Henselmans_2022 | not_relevant | 1 | 0 | The paper is a systematic review of dietary carbohydrate intake on strength performance and explicitly states there was no evidence of a dose-response effect, providing no numeric PD parameters or concentration-effect curves. |
| popPK | Hilligoss_2026 | irrelevant | 0 | 0 | The study analyzes causal mediation pathways of carbohydrate intake on glucose levels in Type 1 Diabetes, not the pharmacokinetic disposition parameters (CL, V, ka) of carbohydrates as a drug. |
| popPK | Hovorka_1998 | irrelevant | 0 | 0 | The study models C-peptide kinetics and beta-cell responsiveness in response to a carbohydrate meal, but does not report pharmacokinetic parameters (CL, V, etc.) for carbohydrates as the subject drug. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The paper describes the structural characterization and in vitro bioactivities (antioxidant, immunomodulatory) of a bamboo shoot polysaccharide, containing no pharmacokinetic data. |
| popPK | Hussien_2022 | irrelevant | 0 | 0 | The paper is a plant pathology study evaluating fungicides on tomato plants, and "carbohydrates" is mentioned only as a chemical constituent measured in the plants, not as a drug subject to pharmacokinetic analysis. |
| PD | Inoue_2023 | not_relevant | 0 | 0 | The paper characterizes physicochemical properties (carbohydrate content, viscosity, antioxidant capacity) of rice wine samples but does not report any pharmacodynamic or exposure-response relationship for a drug. |
| popPK | Iqbal_2026 | irrelevant | 0 | 0 | The study investigates the association between dietary carbohydrate intake and blood glucose levels in children with Type 1 Diabetes, rather than the pharmacokinetic disposition parameters (CL, V, etc.) of carbohydrates as a drug. |
| PD | Iqbal_2026 | not_relevant | 2 | 1 | The study uses machine learning to identify risk thresholds for dysglycemia based on insulin and carbohydrate intake, but it does not report a pharmacodynamic model (e.g., Emax, EC50) or a quantitative concentration-effect relationship for carbohydrates. |
| popPK | Ivanović_2020 | irrelevant | 0 | 0 | The study analyzes the chemical composition and antioxidant activity of hazelnut skins, not the pharmacokinetics of carbohydrates as a drug. |
| PD | Ivanović_2020 | not_relevant | 0 | 0 | The paper reports chemical composition and in vitro antioxidant activity (EC50 for DPPH) of hazelnut skin extracts, but does not report a pharmacodynamic exposure-response or dose-response relationship for carbohydrates in a biological system. |
| popPK | Jach_2026 | irrelevant | 0 | 0 | The paper is a narrative review on probiotics and plant bioactives, containing no pharmacokinetic data for carbohydrates. |
| PD | Jach_2026 | not_relevant | 1 | 0 | The paper is a narrative review of probiotic-phytochemical interactions and does not report original pharmacodynamic modeling or extractable numeric PD parameters for carbohydrates. |
| popPK | James_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for glucagon, not carbohydrates. |
| popPK | Jegatheesan_2024 | irrelevant | 0 | 0 | The paper presents a mathematical model of gut microbiota competition for carbohydrates, not a pharmacokinetic study of carbohydrates as a drug. |
| PGx | Jiao_2015 | not_relevant | 0 | 0 | The paper compares plant species using ITS sequences and metabolomics, not pharmacogenomic effects on drug PK/PD. |
| PGx | KRAUSE_1962 | not_relevant | 0 | 0 | The paper describes the chemical structure of bacterial carbohydrate antigens and does not involve human pharmacogenomics or drug PK/PD parameters. |
| PGx | Kan_2020 | not_relevant | 0 | 0 | The paper studies bacterial carbohydrate utilization and genotyping, not human pharmacogenomics or drug PK/PD parameters. |
| PGx | Karalis_2012 | not_relevant | 0 | 0 | The paper is a review of regulatory guidelines for bioequivalence testing and does not report specific pharmacogenomic effects on PK/PD parameters. |
| PD | Karl_1980 | not_relevant | 1 | 0 | The text is a qualitative review of corticosteroid side effects and metabolic impacts without reporting any numeric PD parameters or exposure-response data. |
| popPK | Kartbayeva_2026 | irrelevant | 0 | 0 | The paper is a review of the phytochemistry and pharmacology of Cirsium species, not a pharmacokinetic study of carbohydrates. |
| PD | Kartbayeva_2026 | not_relevant | 0 | 0 | The paper is a review of ethnopharmacology and phytochemistry of Cirsium species, focusing on secondary metabolites and general biological activities, with no specific pharmacodynamic modeling or numeric exposure-response parameters for carbohydrates. |
| popPK | Khan_2026 | irrelevant | 0 | 0 | The study analyzes random blood glucose levels in diabetic patients and does not report pharmacokinetic parameters (CL, V, ka, etc.) for carbohydrates. |
| PD | Khan_2026 | not_relevant | 0 | 0 | The study analyzes demographic determinants of blood glucose using regression and machine learning, but does not report a pharmacodynamic exposure-response or dose-response relationship for a drug. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Kim_2019 | not_relevant | 0 | 0 | The paper investigates the structural role of N-linked oligosaccharides in a recombinant hormone (FSH) for secretion and signaling, not the pharmacodynamic exposure-response relationship of carbohydrates as a drug. |
| popPK | Kittichaiworakul_2026 | irrelevant | 0 | 0 | The study investigates the effects of a plant extract on gut microbiota and obesity in rats, not the pharmacokinetics of carbohydrates. |
| PD | Kittichaiworakul_2026 | not_relevant | 0 | 0 | The study investigates the effects of a plant extract on gut microbiota and metabolic markers in rats but does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Koethe_2025 | irrelevant | 0 | 0 | The study investigates dietary carbohydrate intake and body composition in HIV patients, not the pharmacokinetics of carbohydrates as a drug. |
| popPK | Kosmadopoulos_2020 | irrelevant | 0 | 0 | The study investigates dietary patterns and caloric intake in shift workers, not the pharmacokinetics of carbohydrates as a drug. |
| PGx | Kovatcheva-Datchary_2009 | not_relevant | 0 | 0 | The paper investigates bacterial phylogenetics and starch fermentation in an in vitro model, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Kovačević_2022 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Kovačević_2022 | not_relevant | 0 | 0 | The paper studies the toxicological effects of fungicides on an invertebrate, not the pharmacodynamics of carbohydrates in a biological system. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The study investigates cortisol response and transcriptomic changes in migraine patients, with no pharmacokinetic data for carbohydrates. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper investigates the neuroendocrine response to a fixed-dose citalopram challenge (cortisol and gene expression) in migraine patients versus controls, but it does not report a pharmacodynamic model, exposure-response relationship, or numeric PD parameters (e.g., Emax, EC50) for carbohydrates or any other drug. |
| PD | Kusui_1994 | not_relevant | 0 | 0 | The paper investigates receptor glycosylation and binding affinity (IC50) but does not report a pharmacodynamic exposure-response or dose-response relationship for carbohydrates. |
| popPK | Lacroix_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of the antibiotic polymyxin B, not the drug carbohydrates. |
| PGx | Laki_2013 | not_relevant | 0 | 0 | The paper discusses drug interactions with smoking (environmental factor) and mentions "carbohydrates" in the context of cigarette smoke components, not as a drug class subject to pharmacogenomic analysis. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | The paper is a review of date palm nutraceuticals and does not report quantitative pharmacokinetic parameters for carbohydrates as a subject drug. |
| PD | Lani_2026 | not_relevant | 1 | 0 | The paper is a narrative review of date palm nutraceuticals that explicitly identifies dose-response relationships as a gap in the literature and does not report any numeric PD parameters or concentration-effect curves. |
| PGx | Lawson_2026 | not_relevant | 0 | 0 | The study investigates the effect of short-chain fatty acids on androstenone metabolism in pigs, which is not a pharmacogenomic study of a carbohydrate drug. |
| popPK | Lebang_2026 | irrelevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Lebang_2026 | not_relevant | 1 | 0 | The paper is a narrative review of Clerodendrum plants for metabolic syndrome and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for carbohydrates. |
| popPK | Leifeld_2018 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Leifeld_2018 | not_relevant | 0 | 0 | The paper discusses chemical engineering and wastewater remediation using Fenton-like reactions, not pharmacodynamics or drug exposure-response relationships. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study investigates the association between maternal diet and breast milk oligosaccharide concentrations, not the pharmacokinetic disposition parameters (CL, V, etc.) of carbohydrates as a drug. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of obesity and dietary patterns, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper describes the preparation and characterization of polysaccharides from Spirulina platensis, not the pharmacokinetics of carbohydrates as a drug. |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper characterizes polysaccharides from Spirulina platensis and reports antioxidant activity (EC50), but does not report a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| popPK | Lucchesi_1990 | irrelevant | 2 | 0 | The study investigates the transport mechanism of carbohydrates across the blood-brain barrier using permeability-surface area (PS) products, which is a mechanistic/transport study rather than a standard pharmacokinetic study reporting clearance, volume of distribution, or half-life for the drug itself. |
| popPK | Lundemose_2025 | irrelevant | 0 | 0 | The paper is a systematic review of glucagon efficacy for hypoglycemia prevention, not a pharmacokinetic study of carbohydrates. |
| PD | Lundemose_2025 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of clinical outcomes (hypoglycemia risk, TBR) rather than a pharmacodynamic study reporting exposure-response or dose-response parameters like Emax or EC50. |
| PD | Lutz_1994 | not_relevant | 3 | 2 | The study reports qualitative dose-dependent effects and a minimal effective dose (0.5 microgram/kg) but explicitly states that no clear dose-response relationship was observed in the primary group, and no numeric PD parameters (Emax, EC50) or concentration-effect curves are provided. |
| PGx | Mahatma_2021 | not_relevant | 0 | 0 | The paper investigates plant metabolomics and disease resistance in groundnuts, not human pharmacogenomics or drug PK/PD parameters. |
| PGx | Marion_2021 | not_relevant | 0 | 0 | The paper investigates metabolic phenotypes (nutrient partitioning, fat storage) in a genetic mouse model, not the pharmacokinetics or pharmacodynamics of a specific carbohydrate drug. |
| PGx | Martin_2016 | not_relevant | 0 | 0 | The paper reviews dietary interventions for migraine prevention and does not report pharmacokinetic or pharmacodynamic parameters of carbohydrate drugs. |
| popPK | Martinez_2026 | irrelevant | 0 | 0 | The paper is a review of the phytochemical composition and health benefits of Tamarindus indica, not a pharmacokinetic study of carbohydrates. |
| PD | Martinez_2026 | not_relevant | 1 | 0 | The paper is a narrative review of the phytochemical composition and general health benefits of Tamarindus indica, lacking any specific pharmacokinetic or pharmacodynamic modeling or numeric dose-response parameters. |
| PGx | McCARTY_1955 | not_relevant | 0 | 0 | The paper describes bacterial antigenic variation in cell wall carbohydrates, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | McColl_2026 | irrelevant | 0 | 0 | The paper is a systems modelling study of muscle protein synthesis and anabolic resistance, not a pharmacokinetic study of carbohydrates. |
| PD | McColl_2026 | not_relevant | 0 | 0 | The paper is a systems modelling study of leucine-mediated muscle protein synthesis and does not report a pharmacodynamic or exposure-response relationship for carbohydrates. |
| PD | Meier_1990 | not_relevant | 0 | 0 | The paper studies plant physiology (ozone exposure in pine seedlings), not pharmacodynamics of a drug in a biological system. |
| popPK | Miguel_2016 | irrelevant | 0 | 0 | The paper is a chemical characterization and bioactivity study of plant extracts, not a pharmacokinetic study of carbohydrates as a drug. |
| PD | Miguel_2016 | not_relevant | 1 | 0 | The paper reports chemical composition and in vitro cytotoxicity (EC50) for plant extracts, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response relationship for carbohydrates in a biological system. |
| popPK | Moing_1992 | irrelevant | 0 | 0 | The paper describes carbon fluxes and sugar transport in peach leaves, not the pharmacokinetics of carbohydrates as a drug. |
| PGx | Montero-Calasanz_2022 | not_relevant | 0 | 0 | The paper focuses on microbial taxonomy and phylogenomics of Geodermatophilaceae, not human pharmacogenomics or drug PK/PD. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a narrative review of DPP-4 inhibitors in cancer and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Mui_2023 | not_relevant | 0 | 0 | The paper describes microbial metabolism of sulfoquinovose in E. coli and does not involve human pharmacogenomics or drug PK/PD parameters. |
| PGx | Murray_2006 | not_relevant | 0 | 0 | The paper discusses dietary modulation of CYP enzymes and drug interactions, not the effect of genetic variants on the PK/PD of carbohydrates. |
| PGx | Mwamba_2020 | not_relevant | 0 | 0 | The paper studies cadmium stress responses in plants (Brassica napus), not human pharmacogenomics or drug PK/PD. |
| popPK | Myles_2017 | irrelevant | 0 | 0 | The study is a nutritional epidemiology survey of dietary intake in pregnant women, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Nascimben_2025 | irrelevant | 0 | 0 | The paper describes a bioinformatics tool for bacterial transcriptomics and contains no pharmacokinetic data for carbohydrates. |
| PD | Nascimben_2025 | not_relevant | 0 | 0 | The paper describes a bioinformatics tool for analyzing bacterial transcriptomics data and does not report any pharmacodynamic or exposure-response relationships for carbohydrates or any other drug. |
| popPK | Nassis_1992 | irrelevant | 0 | 0 | The study investigates the antihistamine activity of a plant extract where carbohydrates are merely listed as a component, not as the subject drug for pharmacokinetic analysis. |
| popPK | Nyayiru_2020 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Nyayiru_2020 | not_relevant | 0 | 0 | The paper analyzes phytochemical composition and antioxidant activity of coconut cotyledon, which is a food science/nutritional analysis, not a pharmacodynamic or exposure-response study of a drug. |
| popPK | Ochoa_2023 | irrelevant | 0 | 0 | The study is an in-vitro simulation of enzymatic digestion and microbial fermentation, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for carbohydrates. |
| popPK | Ota_2011 | irrelevant | 0 | 0 | The paper describes a tritium transport model in plants where carbohydrates are a compartment for tritium allocation, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Ozek_2026 | irrelevant | 0 | 0 | The paper is an in-vitro spectroscopic study of Nigella sativa extract on cancer cells, not a pharmacokinetic study of carbohydrates. |
| popPK | Peltier_2022 | irrelevant | 0 | 0 | The paper studies non-structural carbohydrates in trees as a physiological mechanism for climate memory, not the pharmacokinetics of carbohydrates as a drug. |
| popPK | Petrović_2025 | irrelevant | 0 | 0 | The paper is a nutritional and phytochemical analysis of Lunaria annua seeds, not a pharmacokinetic study of carbohydrates as a drug. |
| PD | Petrović_2025 | not_relevant | 0 | 0 | The paper reports nutritional composition and in vitro bioactivity (antioxidant/antimicrobial) of plant extracts, but does not report a pharmacodynamic exposure-response or dose-response relationship for carbohydrates in a biological system. |
| popPK | Piterà_2026 | irrelevant | 0 | 0 | The study investigates the effects of cryostimulation on stress biomarkers in Parkinson's disease and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Piterà_2026 | not_relevant | 0 | 0 | The study evaluates a non-pharmacological intervention (cryostimulation) and reports pre/post changes in biomarkers and scores, but does not model a drug exposure-response or dose-response relationship. |
| popPK | Plaza-Díaz_2022 | irrelevant | 0 | 0 | The study investigates the effects of dietary carbohydrates on the gut microbiome in rats, not the pharmacokinetic disposition parameters (CL, V, etc.) of carbohydrates as a drug. |
| popPK | Qi_2026 | irrelevant | 0 | 0 | The paper studies non-structural carbohydrates (NSCs) in trees as ecological/physiological traits, not as a pharmacokinetic drug subject. |
| popPK | Rangel_2025 | irrelevant | 0 | 0 | The paper is a nutritional and biochemical assessment of fruit composition, not a pharmacokinetic study of carbohydrates as a drug. |
| PD | Rangel_2025 | not_relevant | 0 | 0 | The paper reports nutritional composition and in vitro antioxidant/antimicrobial activity (EC50/MIC) of fruit extracts, not a pharmacodynamic exposure-response or dose-response relationship for carbohydrates in a biological system. |
| popPK | Rasmussen_2000 | irrelevant | 0 | 0 | The study investigates muscle protein kinetics and anabolism in response to a supplement, not the pharmacokinetic disposition parameters (CL, V, etc.) of carbohydrates as a drug. |
| PGx | Renault_2018 | not_relevant | 0 | 0 | The paper studies bacterial community shifts in agricultural biofilters and is unrelated to human pharmacogenomics or drug PK/PD. |
| popPK | Riya_2023 | irrelevant | 0 | 0 | The paper is a phytochemical analysis of plant constituents and does not report any pharmacokinetic parameters for carbohydrates. |
| PD | Riya_2023 | not_relevant | 0 | 0 | The paper is a phytochemical and antioxidant characterization study of a plant, reporting static composition and activity values (e.g., EC50 for radical scavenging) without any pharmacokinetic or pharmacodynamic modeling of a drug's exposure-response relationship. |
| PGx | Robledo_2015 | not_relevant | 0 | 0 | The paper discusses a hypothesis regarding the pathogenesis of rosacea flushing involving ALDH2 and acetaldehyde, but it does not report pharmacogenomic effects on the PK/PD of a specific carbohydrate drug. |
| popPK | Romero_2020 | irrelevant | 0 | 0 | The study investigates the toxic effects of silver nanoparticles on microalgae, where carbohydrates are measured as a biochemical component of the cells, not as a subject drug for pharmacokinetic analysis. |
| popPK | Saiti_2020 | irrelevant | 0 | 0 | The study focuses on machine learning algorithms for blood glucose prediction in diabetes, not on the pharmacokinetic parameters of carbohydrates as a drug. |
| popPK | Salim_2025 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacokinetic data. |
| PD | Salim_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Sangüesa-Barreda_2012 | irrelevant | 0 | 0 | The paper is a dendrochronological study on mistletoe infestation in pine trees, not a pharmacokinetic study of carbohydrates as a drug. |
| PGx | Schaefer_1986 | not_relevant | 0 | 0 | The paper discusses general metabolic traits (acetylation, alcohol, sugar) in specific populations but does not report a specific gene variant affecting the PK/PD of a carbohydrate drug. |
| PGx | Schauber_2006 | not_relevant | 0 | 0 | The study investigates the effect of dietary carbohydrates on gene expression, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Schneck_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of insulin and the pharmacodynamics of glucose, treating carbohydrates only as a meal component or input variable rather than the subject drug for PK parameter estimation. |
| PGx | Scholz_2026 | not_relevant | 0 | 0 | The paper describes a genetic metabolic disease (TXNIP deficiency) and its physiological effects, not the pharmacokinetics or pharmacodynamics of a specific carbohydrate drug. |
| PD | Selepe_2024 | not_relevant | 0 | 0 | The paper reports environmental engineering data (flocculation efficiency, wastewater treatment) and cytotoxicity IC50 values, but does not report a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on synthetic galectin-1 inhibitors, not a pharmacokinetic study of carbohydrates. |
| PD | Sethi_2024 | not_relevant | 3 | 2 | The paper reports single-point enzyme inhibition percentages and binding constants (Ka) for small molecule inhibitors, but does not provide a dose-response curve, Emax/EC50 parameters, or any pharmacokinetic/pharmacodynamic modeling. |
| popPK | Shah_2025 | irrelevant | 0 | 0 | The paper is a review on machine learning for predicting food effects and does not report specific pharmacokinetic parameters for carbohydrates. |
| PD | Shah_2025 | not_relevant | 0 | 0 | The paper is a review on machine learning for predicting food effects on drug absorption (PK), and does not report any pharmacodynamic (PD) or exposure-response relationships for carbohydrates or any other drug. |
| PD | Shaheen_2022 | not_relevant | 2 | 2 | The study reports qualitative phytochemical screening and zone-of-inhibition data for a crude plant extract, but does not provide a quantitative exposure-response or dose-response model with derivable PD parameters (e.g., Emax, EC50) for carbohydrates. |
| PGx | Shahryar_2016 | not_relevant | 0 | 0 | The paper studies plant physiology and carbohydrate metabolism in wheat under cold stress, not human pharmacogenomics or drug PK/PD. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The study investigates the antidiabetic pharmacological effects of a plant extract in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for carbohydrates or any specific drug. |
| PGx | Shumakova_2020 | not_relevant | 0 | 0 | The paper studies the effect of quercetin on trace element levels in different mouse genotypes, not the pharmacokinetics or pharmacodynamics of carbohydrates. |
| popPK | Silmore_2021 | irrelevant | 0 | 0 | The paper is a systematic review of cannabidiol (CBD) pharmacokinetics, not carbohydrates. |
| PD | Silmore_2021 | not_relevant | 1 | 0 | The paper is a systematic review focusing on food effects on CBD pharmacokinetics (bioavailability, variability) and only qualitatively discusses downstream pharmacodynamics without providing numeric PD parameters or exposure-response models. |
| PGx | Sim_2021 | not_relevant | 0 | 0 | The paper is a review of metabolic biomarkers in asthma and does not report pharmacogenomic effects on the PK or PD of carbohydrate drugs. |
| PGx | Singh_2018 | not_relevant | 0 | 0 | The paper describes metabolic engineering and fermentation in a bacterium, not the pharmacokinetics or pharmacodynamics of a drug in humans. |
| PGx | Slemc_2016 | not_relevant | 0 | 0 | The paper is a review of HIF1A target genes and pathways, not a study on pharmacogenomic effects on PK/PD parameters of carbohydrates. |
| popPK | Sládeková_2025 | irrelevant | 0 | 0 | The study investigates the therapeutic and toxicological effects of FKK6 in a mouse model of colorectal cancer and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Sládeková_2025 | not_relevant | 0 | 0 | The paper reports qualitative efficacy and safety data for FKK6 (a PXR agonist) in a cancer model but does not provide any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Sommersten_2022 | irrelevant | 0 | 0 | The study is a nutritional trial examining the effects of dietary carbohydrate sources on visceral fat volume, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Sousa_2024 | irrelevant | 0 | 0 | The study investigates the antimicrobial activity of nanoparticles in vitro and does not report pharmacokinetic parameters for carbohydrates. |
| PD | Stellingwerff_2014 | not_relevant | 2 | 1 | The paper is a systematic review that reports qualitative mechanisms and general dose thresholds (e.g., &gt;90 g/h) but does not provide specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for a specific drug. |
| PGx | Stewart_2019 | not_relevant | 0 | 0 | The study examines the effect of APOE genotype on postprandial blood pressure (a physiological response to diet), not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The study focuses on nanoparticle-cell conjugation strategies and stability in vitro, not the pharmacokinetics of carbohydrates. |
| PD | Su_2025 | not_relevant | 0 | 0 | The paper investigates nanoparticle-cell conjugation efficiency and stability using flow cytometry, not pharmacodynamic exposure-response or dose-response relationships for a drug. |
| PGx | Swain_2025 | not_relevant | 0 | 0 | The paper studies plant physiology (rice yield and iron toxicity) and does not involve human pharmacogenomics or drug PK/PD parameters. |
| PGx | Taherzadeh_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for predicting protein-carbohydrate binding sites and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper is a review of semi-mechanistic models for HbA1c prediction in Type 2 Diabetes and does not report pharmacokinetic parameters for carbohydrates as a subject drug. |
| PD | Tan_2026 | not_relevant | 2 | 1 | The paper is a narrative review of semi-mechanistic HbA1c models and does not report new experimental data or specific numeric PD parameters for a drug. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The study is a comparative metabolomics analysis of breath and blood in healthy volunteers, not a pharmacokinetic study of carbohydrates as a drug. |
| PD | Tang_2025 | not_relevant | 0 | 0 | The paper is a comparative metabolomics study of breath and blood samples in healthy volunteers and does not report any pharmacodynamic, exposure-response, or dose-response relationships for carbohydrates or any other drug. |
| popPK | Tauheed_2022 | irrelevant | 0 | 0 | The study investigates the antitrypanosomal activity of plant extracts and does not report pharmacokinetic parameters for carbohydrates. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The paper is a formulation and in vitro evaluation study of a herbal suppository containing Peperomia pellucida, not a pharmacokinetic study of carbohydrates. |
| PGx | Thome_2024 | not_relevant | 0 | 0 | The paper investigates the effect of AHR gene variants on mitochondrial energetics in CKD, not the pharmacokinetics or pharmacodynamics of a carbohydrate drug. |
| PGx | Tobias_1992 | not_relevant | 0 | 0 | The paper investigates metabolic changes in maize genotypes, not pharmacogenomic effects on drug PK/PD parameters. |
| PGx | Torralbo_2019 | not_relevant | 0 | 0 | The paper studies plant physiology (barley genotypes and CO2 response), not human pharmacogenomics or drug PK/PD. |
| PGx | Traversari_2018 | not_relevant | 0 | 0 | The paper studies plant physiology (sugar metabolism in poplar) and does not involve human pharmacogenomics or drug PK/PD parameters. |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The study is a phytochemical and pharmacological evaluation of a plant extract (Fingerhuthia africana) and does not report pharmacokinetic parameters for carbohydrates. |
| popPK | Valenzuela_2024_2 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on hydroquinone, not a pharmacokinetic study of carbohydrates. |
| popPK | Van_2024 | irrelevant | 0 | 0 | The study evaluates diagnostic classifiers for sucrase-isomaltase inhibition using a 13C-sucrose breath test, rather than reporting standard pharmacokinetic disposition parameters (CL, V, Q) for carbohydrates as a drug. |
| popPK | Vara_2020 | irrelevant | 0 | 0 | The paper is a food composition and antioxidant activity study of red raspberries, not a pharmacokinetic study of carbohydrates as a drug. |
| PD | Vara_2020 | not_relevant | 0 | 0 | The paper reports the chemical composition of red raspberries and the antioxidant/antimicrobial activity of the whole extract (providing EC50/IC50 for the extract), but it does not report a pharmacodynamic or exposure-response relationship for specific carbohydrates. |
| PGx | Vesnina_2020 | not_relevant | 0 | 0 | The paper is a review on nutrigenetics and eating preferences, not a pharmacogenomic study of drug PK/PD parameters. |
| PGx | Vesnina_2022 | not_relevant | 0 | 0 | The paper is a review on nutrition and atherosclerosis prevention, discussing general genetic markers and diets, but does not report specific pharmacogenomic effects on the PK/PD of carbohydrates. |
| PGx | Viladomiu_2013 | not_relevant | 0 | 0 | The paper is a review of nutritional interventions (prebiotics/fibers) for gut inflammation and does not report pharmacogenomic effects on PK/PD parameters of carbohydrates. |
| PGx | Virgili_2023 | not_relevant | 2 | 0 | The paper reviews the effect of genetics on caffeine's cardiometabolic outcomes (PD), not the pharmacokinetics or pharmacodynamics of carbohydrates. |
| PGx | Volenec_1984 | not_relevant | 0 | 0 | The paper studies plant physiology (carbohydrate metabolism in fescue) and is not related to human pharmacogenomics or drug PK/PD. |
| PGx | Volenec_1984_2 | not_relevant | 0 | 0 | The paper studies plant physiology and carbohydrate metabolism in tall fescue, not human pharmacogenomics or drug PK/PD. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The study is a metabolomics reproducibility analysis of blood samples, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is a soil science study analyzing the molecular composition of dissolved organic matter (DOM) in soils, not a pharmacokinetic study of carbohydrates as a drug. |
| popPK | Wieslander_2000 | irrelevant | 0 | 0 | The paper discusses the chemical stability and biological effects of glucose degradation products in dialysis fluids, not the pharmacokinetics of carbohydrates. |
| PGx | Wohlhieter_1962 | not_relevant | 0 | 0 | The paper studies bacterial metabolism and piliation, not human pharmacogenomics or drug PK/PD parameters. |
| PGx | Xie_2025 | not_relevant | 0 | 0 | The paper describes protein engineering of an enzyme for industrial carbohydrate production, not a pharmacogenomic effect on human PK/PD parameters. |
| PGx | Yesbergenova-Cuny_2016 | not_relevant | 0 | 0 | The paper studies genetic variability in maize phloem sap metabolites, not pharmacogenomic effects on drug PK/PD parameters. |
| PGx | Yin_2016 | not_relevant | 0 | 0 | The paper describes a genetic engineering method for vaccine production in Lactobacillus casei and does not report pharmacogenomic effects on the PK or PD of carbohydrate drugs. |
| popPK | Zamanillo-Campos_2022 | irrelevant | 0 | 0 | The study investigates the association between dietary carbohydrate quality and adiposity, not the pharmacokinetics of carbohydrates as a drug. |
| PGx | Zamfir-Taranu_2025 | not_relevant | 0 | 0 | The paper investigates the relationship between genetic variants and the efficacy of a dietary intervention (FODMAP-lowering diet), not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Cirsium arvense and does not report pharmacokinetic parameters for the drug carbohydrates. |
| PD | Zhakipbekov_2026 | not_relevant | 0 | 0 | The paper is a narrative review of phytochemistry and general biological activities of Cirsium arvense, containing no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper investigates drug resistance mechanisms in NSCLC cell lines using EGFR inhibitors and does not report pharmacokinetic parameters for carbohydrates. |
| PGx | Zheng_2009 | not_relevant | 0 | 0 | The paper investigates the effect of chemical conjugation to carbohydrates on drug distribution and efficacy, not the effect of human gene variants on pharmacokinetics or pharmacodynamics. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The paper is a general review of P-glycoprotein structure and function, mentioning carbohydrates only as a class of substrates without reporting specific pharmacogenomic effects on their PK/PD parameters. |
| PD | Zhuang_2025 | not_relevant | 0 | 0 | The study analyzes the association between a dietary score (DKR) and depressive symptoms using epidemiological data, not a pharmacodynamic exposure-response relationship for a drug or specific carbohydrate concentration. |
| PGx | Zumaraga_2022 | not_relevant | 0 | 0 | The study investigates genetic and nutritional determinants of hypertension, not the pharmacokinetics or pharmacodynamics of carbohydrate drugs. |
| popPK | de_2019 | irrelevant | 0 | 0 | The paper is a clinical trial on dietary interventions for weight loss in postpartum women and does not report pharmacokinetic parameters for carbohydrates as a drug. |
| popPK | de_2024 | irrelevant | 0 | 0 | The study characterizes the binding affinity (Ka) of a lectin protein to carbohydrates using spectroscopy and MD simulations, which is a mechanistic/biochemical study, not a pharmacokinetic study of carbohydrates as a drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
