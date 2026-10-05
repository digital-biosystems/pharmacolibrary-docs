<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;retinol&quot;}]"></div>

# retinol

- **generic name:** retinol
- **ATC codes:** `A11CA01`, `D10AD02`, `R01AX02`, `S01XA02`
- **DrugBank:** [DB00162](https://go.drugbank.com/drugs/DB00162) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Retinol, a form of vitamin A, is used as a vitamin supplement and in skincare products to support skin cell renewal. It is widely used, appears on the WHO essential medicines list, and is approved for human and veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424976](https://www.wikidata.org/wiki/Q424976) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| retinol | parent | 286.459 | C20H30O | PubChem | [445354](https://pubchem.ncbi.nlm.nih.gov/compound/445354) | Green_2024_2 |
| polar metabolites | metabolite | — (mass units only) | — | — | — | — |
| retinyl acetate | metabolite | 328.496 | C22H32O2 | PubChem | [638034](https://pubchem.ncbi.nlm.nih.gov/compound/638034) | Green_2024_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:27 | 18:25 | 0/2/2 | 0/0/0 | 0/0/0 | 488,751/41,617 | ollama / qwen3.8:27b-mtp-q8_0 | 37 | 7/30 | 33/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Adams_1995_4_hpr](drugs/drug_retinol/Retinol_Adams1995_4_hpr.md) | — | 1-compartment (no model) | 1 | Adams WR et al., Effects of N-(4-hydroxyphenyl)retinamid…, Proceedings of the Society… (1995) | [10.3181/00379727-208-43849](https://doi.org/10.3181/00379727-208-43849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.417). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Adams_1995_control](drugs/drug_retinol/Retinol_Adams1995_control.md) | — | 1-compartment (no model) | 1 | Adams WR et al., Effects of N-(4-hydroxyphenyl)retinamid…, Proceedings of the Society… (1995) | [10.3181/00379727-208-43849](https://doi.org/10.3181/00379727-208-43849) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Green_2024_2_reference](drugs/drug_retinol/Retinol_Green2024v2_reference.md) | — | 1-compartment (no model) | 4 | Green MH et al., Use of Population-Based Compartmental M…, Current developments in nut… (2024) | [10.1016/j.cdnut.2024.104484](https://doi.org/10.1016/j.cdnut.2024.104484) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lewis_1990_reference](drugs/drug_retinol/Retinol_Lewis1990_reference.md) | — | parent + metabolite (no model) | 0 | Lewis KC et al., Retinol metabolism in rats with low vit…, Journal of lipid research (1990) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=retinol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALDH1A1 (substrate), ALDH1A2 (substrate), ALDH1A3 (substrate), APOD (target), CYP26A1 (inducer), CYP26A1 (substrate), DHRS3 (substrate), DHRS4 (substrate), LRAT (substrate), PTGDS (target), RBP1 (binder), RBP2 (binder), RBP3 (binder), RBP4 (binder), RBP5 (binder), RBP7 (binder), RDH11 (substrate), RDH12 (substrate), RDH13 (substrate), RDH14 (substrate), RDH5 (substrate), RDH8 (substrate), RETSAT (substrate), RLBP1 (binder), RXRG (binder), STRA6 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 707 matched, 136 returned
- **screened:** 31  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_1994.pdf` | Green MH et al., Vitamin A intake and status influence r…, The Journal of nutrition (1994) | popPK | 10 | [10.1093/jn/124.12.477](https://doi.org/10.1093/jn/124.12.477) | [16856330](https://pubmed.ncbi.nlm.nih.gov/16856330) | The study reports quantitative compartmental parameters (transit times, pool sizes, utilization rates) for retinol in rats, with specific numeric values provided in the abstract. |
| `Lewis_1990.pdf` | Lewis KC et al., Retinol metabolism in rats with low vit…, Journal of lipid research (1990) | popPK | 10 | not captured | [2246607](https://pubmed.ncbi.nlm.nih.gov/2246607) | The paper describes a compartmental model for retinol in rats and provides specific quantitative turnover rates and utilization values in the text. |
| `Li_2020.pdf` | Li Y et al., Dietary Iron Repletion Stimulates Hepat…, The Journal of nutrition (2020) | popPK | 10 | [10.1093/jn/nxaa098](https://doi.org/10.1093/jn/nxaa098) | [32297934](https://pubmed.ncbi.nlm.nih.gov/32297934) | The study reports compartmental PK parameters for retinol in rats, but the specific numeric values are not present in the provided text evidence. |
| `Green_1993.pdf` | Green MH et al., Vitamin A metabolism in rat liver: a ki…, The American journal of phy… (1993) | popPK | 9 | [10.1152/ajpgi.1993.264.3.G509](https://doi.org/10.1152/ajpgi.1993.264.3.G509) | [8460704](https://pubmed.ncbi.nlm.nih.gov/8460704) | The paper describes a compartmental kinetic model for retinol in rats, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Green_2021.pdf` | Green MH et al., A Compartmental Model Describing the Ki…, The Journal of nutrition (2021) | popPK | 9 | [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306) | [33188397](https://pubmed.ncbi.nlm.nih.gov/33188397) | The paper presents a compartmental model for retinol kinetics in humans, but the specific numeric PK parameters (CL, V, Q) are not explicitly listed in the provided text, only derived percentages and ranges. |
| `Lopez-Teros_2022.pdf` | Lopez-Teros V et al., Development of a Compartmental Model fo…, The Journal of nutrition (2022) | popPK | 9 | [10.1093/jn/nxac078](https://doi.org/10.1093/jn/nxac078) | [35349703](https://pubmed.ncbi.nlm.nih.gov/35349703) | The paper describes a compartmental model for retinol kinetics in humans, but the specific numeric parameter values are assigned to theoretical subjects and likely reside in supplementary material or figures not provided in the evidence. |
| `Willhite_1985.pdf` | Willhite CC et al., Comparative pharmacokinetics of vitamin…, Food and chemical toxicolog… (1985) | popPK | 9 | [10.1016/0278-6915(85)90220-0](https://doi.org/10.1016/0278-6915(85)90220-0) | [4038683](https://pubmed.ncbi.nlm.nih.gov/4038683) | The study reports a two-compartment PK model for retinol in rats and hamsters, but specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided text, only qualitative comparisons and relative AUC differences. |
| `Formelli_2010.pdf` | Formelli F et al., Relationship among pharmacokinetics and…, Cancer chemotherapy and pha… (2010) | pd | 5 | [10.1007/s00280-010-1370-5](https://doi.org/10.1007/s00280-010-1370-5) | [20532509](https://www.ncbi.nlm.nih.gov/pubmed/20532509) | metadata signals extractable PD data (effectcompartment) |
| `Guo_2017.pdf` | Guo J et al., Butylated hydroxyanisole alters rat 5α-…, Neuroscience letters (2017) | pd | 4 | [10.1016/j.neulet.2017.05.034](https://doi.org/10.1016/j.neulet.2017.05.034) | [28552457](https://www.ncbi.nlm.nih.gov/pubmed/28552457) | metadata signals extractable PD data (IC50) |
| `Mao_2018.pdf` | Mao B et al., Methoxychlor and its metabolite HPTE in…, Neuroscience letters (2018) | pd | 4 | [10.1016/j.neulet.2018.08.008](https://doi.org/10.1016/j.neulet.2018.08.008) | [30107201](https://www.ncbi.nlm.nih.gov/pubmed/30107201) | metadata signals extractable PD data (IC50) |
| `Penzes_1997.pdf` | Penzes P et al., Enzymatic characteristics of retinal de…, Biochimica et biophysica ac… (1997) | pd | 4 | [10.1016/s0167-4838(97)00102-7](https://doi.org/10.1016/s0167-4838(97)00102-7) | [9392526](https://www.ncbi.nlm.nih.gov/pubmed/9392526) | metadata signals extractable PD data (IC50) |
| `Rivero-Pino_2025.pdf` | Rivero-Pino F et al., Characterization of Rugulopteryx okamur…, Food chemistry (2025) | pd | 4 | [10.1016/j.foodchem.2025.143084](https://doi.org/10.1016/j.foodchem.2025.143084) | [39884239](https://www.ncbi.nlm.nih.gov/pubmed/39884239) | metadata signals extractable PD data (EC50) |
| `Su_2018.pdf` | Su Y et al., Ziram inhibits rat neurosteroidogenic 5…, Toxicology mechanisms and m… (2018) | pd | 4 | [10.1080/15376516.2017.1355950](https://doi.org/10.1080/15376516.2017.1355950) | [28707553](https://www.ncbi.nlm.nih.gov/pubmed/28707553) | metadata signals extractable PD data (IC50) |
| `Thriemer_2005.pdf` | Thriemer K et al., In vitro activity of artemisinin alone…, Wiener klinische Wochenschr… (2005) | pd | 4 | [10.1007/s00508-005-0447-3](https://doi.org/10.1007/s00508-005-0447-3) | [16416385](https://www.ncbi.nlm.nih.gov/pubmed/16416385) | metadata signals extractable PD data (EC50) |
| `Xu_2017.pdf` | Xu R et al., Effects of perfluoroalkyl substances on…, Chemico-biological interact… (2017) | pd | 4 | [10.1016/j.cbi.2017.05.017](https://doi.org/10.1016/j.cbi.2017.05.017) | [28535922](https://www.ncbi.nlm.nih.gov/pubmed/28535922) | metadata signals extractable PD data (IC50) |
| `Kanduri_2016.pdf` | Kanduri C et al., The landscape of copy number variations…, Autism research : official… (2016) | pgx | 5 | [10.1002/aur.1502](https://doi.org/10.1002/aur.1502) | [26052927](https://www.ncbi.nlm.nih.gov/pubmed/26052927) | metadata signals extractable PGX data (CYP2E1) |

<sub>queue written 2026-10-05T08:12:05.533681+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2022 | not_relevant | 0 | 0 | The paper investigates genetic determinants of fillet color in rainbow trout, not the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Alcalá-Santiago_2022 | not_relevant | 0 | 0 | The paper focuses on Vitamin D deficiency and COVID-19, mentioning retinol only as a pathway category in enrichment analysis without reporting any pharmacogenomic effects on retinol PK/PD. |
| PGx | Almazrouei_2025 | not_relevant | 0 | 0 | The paper investigates the impact of bariatric surgery on metabolic and microbiome profiles, not the pharmacokinetics or pharmacodynamics of retinol. |
| PD | Amedee-Manesme_1987 | not_relevant | 3 | 2 | The paper describes a diagnostic test (RDR) based on a single fixed dose and provides qualitative thresholds for liver concentration, but it does not report a pharmacodynamic model or numeric PD parameters (like Emax or EC50) for retinol. |
| popPK | Bauman_2006 | irrelevant | 0 | 0 | The study focuses on the enzymatic conversion of androgens in prostate tissue and mentions retinol dehydrogenases only as candidate enzymes, providing no pharmacokinetic parameters for retinol. |
| PGx | Bray_2001 | not_relevant | 0 | 0 | The paper investigates the effect of retinol on drug-metabolizing enzymes and toxicity, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of retinol itself. |
| popPK | Campbell_2022 | irrelevant | 0 | 0 | The study is a clinical trial of antiretroviral therapy in HIV patients and does not report pharmacokinetic parameters for retinol. |
| PGx | Cao_2020 | not_relevant | 0 | 0 | The study investigates the association between genetic variants and prostate cancer risk, not the effect of genotypes on the pharmacokinetic or pharmacodynamic parameters of retinol. |
| PGx | Chen_2000 | not_relevant | 0 | 0 | The paper investigates the enzymatic mechanism of retinol oxidation using wild-type human liver microsomes and expressed CYPs, but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The study investigates biological aging (PhenoAge) and its associations with various factors, including retinol levels, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of retinol. |
| popPK | Choi_2024 | irrelevant | 0 | 0 | The study is an in vitro/in silico toxicology screening of AHR ligands where retinol is only a negative control, not a pharmacokinetic study. |
| PD | Choi_2024 | not_relevant | 0 | 0 | The paper explicitly states that Retinol did not induce transcriptional activity, and no numeric PD parameters (e.g., EC50) are reported for it. |
| popPK | Czuba_2024 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of gene expression and metabolic activity in cell lines, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for retinol. |
| PGx | Demmer_1987 | not_relevant | 0 | 0 | The paper describes the gene sequence and chromosomal localization of CRBP II but does not report any pharmacogenomic effects on retinol PK or PD parameters. |
| PGx | Ding_2022 | not_relevant | 0 | 0 | The paper identifies prognostic gene signatures for liver cancer survival and mentions retinol metabolism as an enriched pathway, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Doherty_2013 | not_relevant | 0 | 0 | The paper investigates the association between DNA repair gene variants and lung cancer risk, not the effect of genotypes on the pharmacokinetics or pharmacodynamics of retinol. |
| PGx | Domarkienė_2022 | not_relevant | 0 | 0 | The study investigates genetic associations with serum carotenoid levels (zeaxanthin, lycopene, beta-carotene) in healthy individuals, not the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| popPK | Exner_2007 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of antimalarial activity (EC50/EC90) and does not report pharmacokinetic disposition parameters for retinol. |
| PD | Faye_2021 | not_relevant | 2 | 1 | The study is a cross-sectional comparison of vitamin A status (MRDR, serum retinol) between supplemented and non-supplemented groups, reporting only group means and p-values without fitting a dose-response or concentration-effect model to derive PD parameters like Emax or EC50. |
| popPK | Ford_2017 | irrelevant | 2 | 0 | The study focuses on a method for estimating beta-carotene bioefficacy using retinol as a reference marker, rather than reporting quantitative disposition parameters (CL, V, etc.) for retinol itself. |
| popPK | Ford_2018 | relevant | 8 | 2 | The paper describes a population pharmacokinetic model for retinol in children, but the specific numeric parameter values are located in Supplemental Table 1 and figures which are not included in the provided evidence. |
| popPK | Formelli_2010 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Formelli_2010 | not_relevant | 0 | 0 | The paper focuses on fenretinide, not retinol, and does not report a pharmacodynamic model or numeric exposure-response parameters for retinol itself. |
| PGx | Gray_1995 | not_relevant | 0 | 0 | The paper describes a physical map of the CYP2C gene cluster and mentions the location of the RBP4 gene, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of retinol. |
| popPK | Green_1993 | relevant | 9 | 2 | The paper describes a compartmental kinetic model for retinol in rats, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Green_2020 | irrelevant | 2 | 0 | The paper is a methodological review discussing the mathematics of retinol isotope dilution and compartmental modeling, but it does not report original quantitative PK parameters (CL, V, ka) for a specific study cohort, only citing literature values for coefficients. |
| popPK | Green_2020_2 | irrelevant | 2 | 0 | The study uses theoretical/simulated data for "theoretical humans" to validate a modeling method, rather than reporting original quantitative PK parameters from actual experimental subjects. |
| popPK | Green_2021 | relevant | 9 | 4 | The paper presents a compartmental model for retinol kinetics in humans, but the specific numeric PK parameters (CL, V, Q) are not explicitly listed in the provided text, only derived percentages and ranges. |
| popPK | Green_2021_2 | irrelevant | 2 | 0 | The study uses theoretical/simulated data to evaluate sampling times for the retinol isotope dilution method, rather than reporting original quantitative PK parameters (CL, V, etc.) from a pharmacokinetic study of retinol administration. |
| popPK | Green_2022_2 | irrelevant | 2 | 0 | This is a theoretical simulation study using assigned parameters to test a model, not an original pharmacokinetic study reporting measured quantitative disposition parameters for retinol. |
| popPK | Green_2022_3 | irrelevant | 2 | 0 | The study is a theoretical simulation using assigned kinetic parameters for 12 hypothetical subjects rather than reporting original quantitative PK parameter estimates (CL, V, etc.) from a pharmacokinetic study. |
| popPK | Green_2024 | irrelevant | 2 | 0 | The study is a simulation of the Retinol Isotope Dilution (RID) test for estimating total body stores, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for retinol. |
| popPK | Groth_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of myoglobin, not retinol; retinol-binding protein is only mentioned as a comparator for molecular weight. |
| PGx | Gu_1997 | not_relevant | 0 | 0 | The paper reports genetic mutations causing a retinal dystrophy disease, not the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PD | Guo_2017 | not_relevant | 0 | 0 | The paper investigates the effects of butylated hydroxyanisole on neurosteroid enzymes in rats and does not contain any pharmacodynamic or exposure-response data for retinol. |
| PGx | Guo_2022 | not_relevant | 0 | 0 | The study investigates the toxicity mechanisms of a plant extract using metabolomics and network toxicology, not the pharmacogenomics of retinol. |
| PGx | Gäberlein_2023 | not_relevant | 0 | 0 | The paper characterizes the genetics of a cell line and its retinol metabolism capabilities but does not report how specific gene variants alter pharmacokinetic or pharmacodynamic parameters of retinol. |
| popPK | Hailili_2025 | irrelevant | 0 | 0 | The study is an epidemiological analysis of dietary carotenoid intake and cognitive function, not a pharmacokinetic study, and reports no disposition parameters for retinol. |
| popPK | Hamzah_2020 | irrelevant | 0 | 0 | The study assesses tenofovir alafenamide safety using retinol-binding protein as a renal biomarker, not the pharmacokinetics of retinol. |
| PGx | Han_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of a traditional Chinese medicine (Zhuyu pill) in a rat cholestasis model and does not report pharmacogenomic effects on the PK/PD of retinol. |
| PGx | Hassan_2020 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of tenofovir nephrotoxicity, not the pharmacokinetics or pharmacodynamics of retinol. |
| popPK | Hidiroglou_1993 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of vitamin E (tocopherol) in sheep to assess the effect of retinol co-administration, not the pharmacokinetics of retinol itself. |
| PGx | Hu_2019 | not_relevant | 0 | 0 | The study investigates the association between STRA6 polymorphisms and gestational diabetes/glucose metabolism, not the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Iakovleva_1987 | not_relevant | 0 | 0 | The paper discusses the impact of xenobiotics on vitamin A and E levels but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Kanduri_2016 | not_relevant | 0 | 0 | The paper focuses on copy number variations in autism spectrum disorders and does not mention retinol or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Kim_2021 | not_relevant | 0 | 0 | The paper investigates genetic associations with milk production traits in cattle and does not report pharmacokinetic or pharmacodynamic effects of retinol in humans or any other species. |
| PD | Kiziltas_2017 | not_relevant | 0 | 0 | The paper reports the chemical content of retinol in a plant extract and general hepatoprotective effects of the whole extract, but does not perform any pharmacokinetic or pharmacodynamic modeling for retinol specifically, nor does it provide concentration-effect data or numeric PD parameters for retinol. |
| PD | Kley_2024 | not_relevant | 0 | 0 | The paper investigates the inhibition of 3α-HSD enzymes by parabens and UV-filters, not the pharmacodynamics of retinol; retinol dehydrogenases are only mentioned as additional enzymes tested for activity, not as the subject of a PD analysis. |
| popPK | Knauer_2008 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction (synergism) of retinol with quinine in Plasmodium falciparum isolates, not the pharmacokinetic disposition parameters of retinol. |
| PGx | La_2019 | not_relevant | 0 | 0 | The paper analyzes gene expression in sheep uterine tissue related to prolificacy and mentions retinol metabolism as a pathway, but does not report pharmacogenomic effects on the PK or PD of retinol as a drug. |
| popPK | Li_2020 | relevant | 10 | 2 | The study reports compartmental PK parameters for retinol in rats, but the specific numeric values are not present in the provided text evidence. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper investigates the therapeutic targets of curcumol for COVID-19 and colon adenocarcinoma, not the pharmacogenomics of retinol. |
| PGx | Liu_1990 | not_relevant | 0 | 0 | The paper characterizes a protein (retinol-binding protein) in bovine placenta and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Liu_1992 | not_relevant | 0 | 0 | The paper describes the purification and localization of a protein, not the effect of a gene variant on pharmacokinetic or pharmacodynamic parameters. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper focuses on kaempferol's anti-fibrotic mechanism via transcriptomics and network pharmacology; retinol is only mentioned as a metabolic pathway, and no PD or exposure-response data for retinol is reported. |
| popPK | Lopez-Teros_2022 | relevant | 9 | 2 | The paper describes a compartmental model for retinol kinetics in humans, but the specific numeric parameter values are assigned to theoretical subjects and likely reside in supplementary material or figures not provided in the evidence. |
| PD | Mao_2018 | not_relevant | 0 | 0 | The paper focuses on the inhibition of enzymes (3α-HSD and RDH2) by methoxychlor and HPTE, not on the pharmacodynamic exposure-response relationship of retinol itself. |
| PGx | Mateza_2023 | not_relevant | 0 | 0 | The paper investigates pharmacogenetics of tenofovir renal toxicity, not the pharmacokinetics or pharmacodynamics of retinol. |
| popPK | Mertz_2000 | irrelevant | 0 | 0 | The study focuses on the enzymatic conversion of retinol to retinoic acid in chick choroid tissue (in vitro/mechanistic) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for retinol. |
| PGx | Miao_2025 | not_relevant | 0 | 0 | The paper investigates genetic predictors of tacrolimus nephrotoxicity using retinol-binding protein as a biomarker, but does not report pharmacogenomic effects on the PK or PD parameters of retinol itself. |
| popPK | Mutumba_2024 | irrelevant | 0 | 0 | The study is a nutritional intervention trial measuring biomarkers of micronutrient status (e.g., retinol-binding protein) rather than a pharmacokinetic study reporting disposition parameters (CL, V, ka) for retinol. |
| popPK | Novotny_1995 | irrelevant | 2 | 0 | The study focuses on beta-carotene metabolism and compartmental modeling, with retinol appearing only as a metabolite product rather than the subject drug for PK parameter extraction. |
| PD | Ohdo_2022 | not_relevant | 1 | 0 | The paper is a review on chronopharmacology and mentions retinol accumulation in CKD as a mechanism for cardiac complications, but it does not report any quantitative exposure-response or dose-response data, curves, or PD parameters for retinol. |
| PD | Olson_1984 | not_relevant | 1 | 0 | The text is a qualitative review of vitamin A physiology and status assessment methods, providing no numeric PD parameters, dose-response curves, or PK/PD modeling data. |
| popPK | Ost_2007 | irrelevant | 0 | 0 | The study investigates the mechanism of insulin resistance mediated by retinol-binding protein-4 in adipocytes, not the pharmacokinetics of retinol. |
| popPK | Parizek_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring antimalarial activity (EC50/EC90) of retinol, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pedersen_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of retinoid effects on cholinergic properties in cell lines, not a pharmacokinetic study. |
| popPK | Pein_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of Akt signaling and lipid composition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Penzes_1997 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Penzes_1997 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics (Km, Vmax) of retinal dehydrogenase type I in E. coli, which is a biochemical enzyme study, not a pharmacodynamic exposure-response or dose-response analysis of retinol in a biological system. |
| popPK | Posch_1992 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic characterization of retinal dehydrogenase kinetics (Km, Vmax) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for retinol. |
| popPK | Prom_2022 | irrelevant | 0 | 0 | The study measures retinol concentrations in serum and colostrum but does not report pharmacokinetic parameters (CL, V, ka, t1/2) or a PK model. |
| PD | Qing_2021 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship between urinary cadmium and kidney injury biomarkers (including retinol binding protein), not the pharmacodynamic effect of the drug retinol itself. |
| PGx | Reboul_2023 | not_relevant | 0 | 0 | The paper is a review of transport proteins for fat-soluble vitamins and carotenoids and does not report pharmacogenomic effects on retinol PK/PD parameters. |
| PD | Renner_1985 | not_relevant | 0 | 0 | The study explicitly states that no effect was seen when retinol was used, and the reported dose-response data pertains to beta-carotene, not retinol. |
| popPK | Rivero-Pino_2025 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Rivero-Pino_2025 | not_relevant | 0 | 0 | The paper characterizes algae bioactive compounds and does not report any pharmacodynamic or exposure-response data for retinol. |
| PD | Rohan_1995 | not_relevant | 1 | 0 | The paper is an epidemiological case-control study reporting relative risks based on dietary intake quartiles, not a pharmacodynamic study with numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| popPK | Samal_2005 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of antimalarial activity (EC50/EC90) and does not report pharmacokinetic disposition parameters for retinol. |
| PGx | Schmidt_1997 | not_relevant | 0 | 0 | The paper investigates risk factors for cerebral damage and reports associations between retinol levels and disease status, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of retinol. |
| PGx | Sezgin_2019 | not_relevant | 0 | 0 | The paper discusses host genetics of Cytomegalovirus pathogenesis and mentions retinol metabolism only in the context of GWAS associations with anti-CMV antibody response, not as a pharmacokinetic or pharmacodynamic parameter of retinol therapy. |
| popPK | Sorg_2002 | irrelevant | 0 | 0 | The study investigates the mechanism of UV-induced depletion of epidermal vitamin A in mice, not the pharmacokinetic disposition parameters (CL, V, ka) of retinol. |
| PD | Sovani_1994 | not_relevant | 2 | 1 | The paper reports clinical outcomes (healing rates, relapse risk) and identifies baseline retinol as a predictor, but it does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve. |
| PD | Su_2018 | not_relevant | 0 | 0 | The paper investigates the enzyme inhibition of Ziram on neurosteroidogenic enzymes and does not report any pharmacodynamic or exposure-response relationship for retinol. |
| PD | Suharno_1992 | not_relevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of prevalence and associations, not a pharmacodynamic or exposure-response study with numeric PD parameters. |
| PGx | Sweetser_1987 | not_relevant | 0 | 0 | The paper describes the gene structure and mapping of intestinal fatty acid binding protein, not the pharmacokinetics or pharmacodynamics of retinol. |
| PGx | Tabata_2022 | not_relevant | 0 | 0 | The paper investigates the biosynthesis of endogenous geranylgeranoic acid (GGA) and the role of CYP3A4 in oxidizing geranylgeraniol, not the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Takeda_2023 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on the toxicity and efficacy of pemetrexed, not on the pharmacokinetic or pharmacodynamic parameters of retinol. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses nutritional deficiencies and mineral balance, not pharmacogenomic effects on retinol PK/PD. |
| popPK | Thriemer_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PGx | Torok_2024 | not_relevant | 0 | 0 | The paper investigates the genetic heritability and risk loci for migraine, not the pharmacokinetics or pharmacodynamics of retinol. |
| PD | Ubels_1986 | not_relevant | 2 | 1 | The paper describes qualitative dose-response relationships for secretagogues (pilocarpine, acetylcholine, VIP) on retinol secretion but does not provide numeric PD parameters or concentration-effect curves for retinol itself. |
| PD | Udomkesmalee_1992 | not_relevant | 2 | 1 | The paper reports qualitative correlations between plasma concentrations and functional indices (VRT, CIC) but does not provide numeric PD parameters (e.g., EC50, Emax) or a defined dose-response curve. |
| PGx | Van_1994 | not_relevant | 0 | 0 | The paper studies the toxicology of PCBs and TCDD in rats, not the pharmacogenomics of retinol. |
| PGx | Van_1994_2 | not_relevant | 0 | 0 | The paper studies the toxicological interaction between PCB 156 and TCDD in rats, not the pharmacogenomics of retinol. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates metabolic and transcriptomic changes in diabetic retinopathy, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper investigates gene expression profiles in atrophic gastritis and mentions retinol metabolism as a pathway, but does not report pharmacogenomic effects on the PK or PD of retinol as a drug. |
| popPK | Willhite_1985 | relevant | 9 | 2 | The study reports a two-compartment PK model for retinol in rats and hamsters, but specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided text, only qualitative comparisons and relative AUC differences. |
| PD | Xu_2017 | not_relevant | 0 | 0 | The paper investigates the effects of perfluoroalkyl substances on neurosteroid enzymes, not the pharmacodynamics of retinol. |
| popPK | Yee_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of protein-protein interactions (retinol binding protein and cryptochrome) and binding affinity (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Zenkel_2022 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of Pseudoexfoliation syndrome and the role of retinoic acid signaling in fibrosis, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper investigates gene expression profiles in laryngeal carcinoma and mentions retinol metabolism only as a biological process in enrichment analysis, without reporting any pharmacokinetic or pharmacodynamic parameters of retinol. |
| PGx | Zhang_2022_2 | not_relevant | 0 | 0 | The paper studies pesticide toxicity in zebrafish and mentions retinol metabolism only as a molecular mechanism for antagonism, not as a pharmacogenomic effect on a PK/PD parameter of retinol. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper studies toxicology of antibiotics in rats and mentions retinol metabolism pathways but does not report a pharmacogenomic effect on retinol PK/PD parameters. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is a plant pathology study on Fusarium fungi and fungicide sensitivity; "retinol" appears only as a misidentified gene name (RPB2) and is not the subject of any pharmacokinetic analysis. |
| PD | Zhao_2023 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for Fusarium pathogens, not a pharmacodynamic relationship for the drug retinol. |
| PGx | Zhao_2024 | not_relevant | 0 | 0 | The paper investigates the association between DNA methylation/expression of retinol metabolism genes and hepatocellular carcinoma prognosis, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of retinol as a drug. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine formula on fertility and does not report any pharmacogenomic effects on the PK or PD of retinol. |
| PD | Zhu_2026 | not_relevant | 0 | 0 | The paper is a metabolomics study identifying retinol as a biomarker distinguishing treatment groups, but it does not report a pharmacodynamic exposure-response or dose-response relationship for retinol itself. |
| popPK | el_1994 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic kinetics analysis of retinal dehydrogenase, not a pharmacokinetic study of retinol disposition. |
| PD | el_1994 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Michaelis-Menten/Allosteric parameters) for retinal dehydrogenase, not a pharmacodynamic exposure-response relationship for retinol in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 08:12 UTC</sub>
