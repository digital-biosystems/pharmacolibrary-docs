<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;carbamide&quot;}]"></div>

# carbamide

- **generic name:** carbamide
- **ATC codes:** `B05BC02`, `D02AE01`
- **DrugBank:** [DB03904](https://go.drugbank.com/drugs/DB03904) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Carbamide (urea) is used as a skin moisturiser for dry or rough skin and, in solution form, to promote osmotic diuresis. It remains in use, mainly in topical emollient preparations, and is also approved for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q56440222](https://www.wikidata.org/wiki/Q56440222) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 22:36 | 14:53 | 0/0/0 | 0/0/0 | 0/0/0 | 594,180/12,137 | ollama / qwen3.8:27b-mtp-q8_0 | 54 | 12/70 | 50/4 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carbamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ARG1 (unknown), CA2 (unknown), CTNNB1 (unknown), SLC14A1 (substrate), SLC14A2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4106 matched, 236 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abramson_1994.pdf` | Abramson F et al., Urea kinetic modeling at high urea clea…, Advances in renal replaceme… (1994) | popPK | 10 | [10.1016/s1073-4449(12)80017-3](https://doi.org/10.1016/s1073-4449(12)80017-3) | [7641088](https://pubmed.ncbi.nlm.nih.gov/7641088) | The paper reports quantitative two-compartment pharmacokinetic parameters (clearance, volume fraction) for urea (carbamide) in humans. |
| `Pearson_1994.pdf` | Pearson P et al., Measurement of kinetic parameters for u…, Journal of the American Soc… (1994) | popPK | 10 | [10.1681/ASN.V4111869](https://doi.org/10.1681/ASN.V4111869) | [7919136](https://pubmed.ncbi.nlm.nih.gov/7919136) | The paper reports quantitative two-compartment pharmacokinetic parameters (clearance, volume fractions) for urea (carbamide) in humans. |
| `Rapoport_1982.pdf` | Rapoport SI et al., Drug entry into and distribution within…, The American journal of phy… (1982) | popPK | 10 | [10.1152/ajpregu.1982.242.3.R339](https://doi.org/10.1152/ajpregu.1982.242.3.R339) | [7065229](https://pubmed.ncbi.nlm.nih.gov/7065229) | The study reports a four-compartment pharmacokinetic model for urea (carbamide) in rats, but the specific numeric parameter values are not listed in the provided evidence text. |
| `Broder_1988.pdf` | Broder I et al., Comparison of health of occupants and c…, Environmental research (1988) | pd | 5 | [10.1016/s0013-9351(88)80045-8](https://doi.org/10.1016/s0013-9351(88)80045-8) | [3127198](https://www.ncbi.nlm.nih.gov/pubmed/3127198) | metadata signals extractable PD data (exposure-response) |
| `Chowdhary_2022.pdf` | Chowdhary AB et al., Metsulfuron-methyl induced physiologica…, Pesticide biochemistry and… (2022) | pd | 5 | [10.1016/j.pestbp.2022.105276](https://doi.org/10.1016/j.pestbp.2022.105276) | [36464335](https://www.ncbi.nlm.nih.gov/pubmed/36464335) | metadata signals extractable PD data (EC50) |
| `Hanada_2000.pdf` | Hanada K et al., Pharmacokinetics and toxicodynamics of…, The Journal of pharmacy and… (2000) | pd | 5 | [10.1211/0022357001777496](https://doi.org/10.1211/0022357001777496) | [11186242](https://www.ncbi.nlm.nih.gov/pubmed/11186242) | metadata signals extractable PD data (sigmoid) |
| `Lu_2023.pdf` | Lu Q et al., Impacts of a bacterial algicide on meta…, Ecotoxicology and environme… (2023) | pd | 5 | [10.1016/j.ecoenv.2022.114451](https://doi.org/10.1016/j.ecoenv.2022.114451) | [38321670](https://www.ncbi.nlm.nih.gov/pubmed/38321670) | metadata signals extractable PD data (EC50) |
| `Song_2023.pdf` | Song W et al., The relationship between ethylene oxide…, Environmental science and p… (2023) | pd | 5 | [10.1007/s11356-022-24086-2](https://doi.org/10.1007/s11356-022-24086-2) | [36367648](https://www.ncbi.nlm.nih.gov/pubmed/36367648) | metadata signals extractable PD data (exposure-response) |
| `Chou_1995.pdf` | Chou CL et al., Oxytocin as an antidiuretic hormone. II…, The American journal of phy… (1995) | pd | 4 | [10.1152/ajprenal.1995.269.1.F78](https://doi.org/10.1152/ajprenal.1995.269.1.F78) | [7631834](https://www.ncbi.nlm.nih.gov/pubmed/7631834) | metadata signals extractable PD data (EC50) |
| `Lotti_1989.pdf` | Lotti VJ et al., A new potent and selective non-peptide…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90290-2](https://doi.org/10.1016/0014-2999(89)90290-2) | [2721567](https://www.ncbi.nlm.nih.gov/pubmed/2721567) | metadata signals extractable PD data (IC50) |
| `Zhi_2025.pdf` | Zhi Q et al., Comparative and Correlation Analysis of…, Journal of food science (2025) | pd | 4 | [10.1111/1750-3841.70748](https://doi.org/10.1111/1750-3841.70748) | [41355595](https://www.ncbi.nlm.nih.gov/pubmed/41355595) | metadata signals extractable PD data (EC50) |
| `Mukonzo_2011.pdf` | Mukonzo JK et al., HIV/AIDS patients display lower relativ…, Clinical pharmacokinetics (2011) | pgx | 8 | [10.2165/11592660-000000000-00000](https://doi.org/10.2165/11592660-000000000-00000) | [21740076](https://www.ncbi.nlm.nih.gov/pubmed/21740076) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Shi_2021.pdf` | Shi R et al., The antagonistic effect of bisphenol A…, Immunopharmacology and immu… (2021) | pgx | 7 | [10.1080/08923973.2021.1950179](https://doi.org/10.1080/08923973.2021.1950179) | [34282716](https://www.ncbi.nlm.nih.gov/pubmed/34282716) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Bilgin_2024.pdf` | Bilgin H et al., Clinical, biochemical, and genotypical…, European review for medical… (2024) | pgx | 5 | [10.26355/eurrev_202403_35601](https://doi.org/10.26355/eurrev_202403_35601) | [38497870](https://www.ncbi.nlm.nih.gov/pubmed/38497870) | metadata signals extractable PGX data (SLC25A15) |
| `Su_2026.pdf` | Su S et al., Genome-Wide Dissection of Shared Geneti…, FASEB journal : official pu… (2026) | pgx | 5 | [10.1096/fj.202504359R](https://doi.org/10.1096/fj.202504359R) | [42007877](https://www.ncbi.nlm.nih.gov/pubmed/42007877) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-10-05T22:26:45.766776+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Allen_2007 | not_relevant | 0 | 0 | The paper reports an IC50 for a CXCR3 antagonist (compound 9t), not for carbamide, and does not provide a concentration-effect curve or PD model for the specified drug. |
| popPK | Alugubelli_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in cellulo characterization of SARS-CoV-2 main protease inhibitors, where "carbamide" refers to a chemical functional group (amide) in the drug structure, not the drug carbamide (urea). |
| PGx | Alves_2017 | not_relevant | 0 | 0 | The paper describes the anaerobic metabolism of Acanthamoeba protozoa and does not involve the drug carbamide or any pharmacogenomic analysis. |
| PGx | Aoki_2025 | not_relevant | 0 | 0 | The paper focuses on molecular classification of hepatocellular carcinoma based on metabolic features and signaling pathways, not on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of carbamide. |
| PGx | Arenas_2024 | not_relevant | 0 | 0 | The paper is a systematic review of metabolomics in triple-negative breast cancer and does not report pharmacogenomic effects on the PK or PD of carbamide. |
| PD | Auria-Luna_2020 | not_relevant | 3 | 2 | The paper reports IC50 values for cytotoxicity in cell lines, which is a dose-response metric, but it is a standard pharmacological assay rather than a pharmacodynamic (PD) model analysis (e.g., PK/PD fit, Emax model) and the specific numeric values are not provided in the abstract text. |
| PGx | Barrett_1982 | not_relevant | 0 | 0 | The paper discusses Cyclosporin A, not carbamide, and does not report pharmacogenomic effects. |
| PGx | Bastos_2024 | not_relevant | 0 | 0 | The paper studies the efficacy and pharmacokinetics of buparvaquone in cattle, not carbamide, and does not report any pharmacogenomic effects. |
| PGx | Bilgin_2024 | not_relevant | 0 | 0 | The paper describes genetic causes of urea cycle disorders and their clinical management, not the pharmacogenomics of carbamide (urea) as a drug. |
| PGx | Bing_2025 | not_relevant | 0 | 0 | The paper studies methotrexate, not carbamide. |
| PGx | Bircsak_2021 | not_relevant | 0 | 0 | The paper describes a microfluidic liver model for toxicity screening and does not report pharmacogenomic effects on the PK/PD of carbamide. |
| popPK | Blackman_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, not carbamide. |
| PD | Blackman_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not carbamide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Broder_1988 | irrelevant | 0 | 0 | no_text gate: only 207 chars of text extracted (&lt; 400) |
| PD | Broder_1988 | not_relevant | 0 | 0 | The paper concerns urea formaldehyde foam insulation and occupant health, not the drug carbamide. |
| PGx | Caporali_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of p53 mutations in pancreatic cancer cells, not the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| popPK | Cendrós_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of enflicoxib, not carbamide. |
| PD | Cendrós_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model validation for enflicoxib but contains no pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Chen_1995 | irrelevant | 0 | 0 | The paper describes the biochemical interaction between recoverin and rhodopsin kinase in bovine photoreceptors and contains no pharmacokinetic data for carbamide. |
| PD | Chen_1995 | not_relevant | 0 | 0 | The paper describes a protein-protein interaction and enzyme kinetics (Ca2+ sensitivity of rhodopsin kinase), not a pharmacodynamic exposure-response relationship for the drug carbamide. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not carbamide. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper describes a TLR1/2 agonist (SMU127) and its anti-cancer effects, not the pharmacokinetics of carbamide. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of urea analogues as TLR2 agonists, not the pharmacokinetics of carbamide (urea). |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and immunological activity of TLR1/2 agonists, not the pharmacokinetics of carbamide. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for biapenem, not carbamide. |
| popPK | Chou_1995 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | Chou_1995 | not_relevant | 0 | 0 | The paper discusses oxytocin and vasopressin receptors, not carbamide, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Chowdhary_2022 | irrelevant | 0 | 0 | The study investigates the toxicity of the herbicide metsulfuron-methyl in earthworms and does not involve the drug carbamide or any pharmacokinetic parameters. |
| PD | Collins_1975 | not_relevant | 1 | 0 | The paper focuses on the pharmacokinetics of acebutolol and only qualitatively mentions that acebutolol, practolol, and propranolol were "approximately equipotent" at specific doses, without providing numeric PD parameters or concentration-effect curves. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics of tigecycline, not carbamide. |
| PD | Dai_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics (PopPK) for tigecycline and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Darwish_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for remlifanserin, not carbamide. |
| PD | Darwish_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for remlifanserin, not carbamide, and contains no pharmacodynamic or exposure-response analysis. |
| PD | Del_2021 | not_relevant | 2 | 1 | The paper is a QSAR study correlating physicochemical properties with IC50 values for a class of drugs, not a pharmacodynamic analysis of carbamide (urea) itself, and does not provide extractable PD parameters for the specific drug in question. |
| PGx | Deng_2025 | not_relevant | 0 | 0 | The paper investigates the effects of a dietary pectin on uric acid metabolism and inflammation, not the pharmacogenomics of carbamide. |
| PGx | Dennis_1989 | not_relevant | 0 | 0 | The paper describes a genetic mutation causing a metabolic disease (citrullinemia) in cattle and does not investigate the pharmacokinetics or pharmacodynamics of carbamide. |
| popPK | Depner_1991 | irrelevant | 0 | 0 | The study investigates urea (not carbamide) kinetics in hemodialysis patients. |
| popPK | Depner_1996 | irrelevant | 0 | 0 | The paper discusses urea kinetics in hemodialysis, not the pharmacokinetics of carbamide (urea) as a drug subject. |
| popPK | Du_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not carbamide. |
| popPK | Díaz_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro leishmanicidal activity of urea derivatives, not the pharmacokinetics of carbamide. |
| PD | Díaz_2019 | not_relevant | 3 | 3 | The paper reports single-point EC50 values for a series of novel compounds in an in vitro assay, which constitutes a dose-response screening result rather than a pharmacodynamic (exposure-response) model or analysis for a specific drug with derived PD parameters like Emax or slope. |
| PGx | Edwards_1993 | not_relevant | 0 | 0 | The paper describes antibody binding to CYP enzymes and does not report pharmacogenomic effects on the PK/PD of carbamide. |
| popPK | El-Gamal_2018 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antiproliferative activity of pyrazole-containing diarylureas, not the pharmacokinetics of carbamide. |
| popPK | Eliseev_2021 | irrelevant | 0 | 0 | The paper describes the development and characterization of anti-ErbB3 antibodies from llamas and contains no pharmacokinetic data for carbamide. |
| popPK | Endo_2023 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of sodium phenylacetate and sodium benzoate, not carbamide. |
| popPK | Espinosa_2021 | irrelevant | 0 | 0 | The paper studies the antitrypanosomal activity of styrylquinoline compounds, not the pharmacokinetics of carbamide. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The study investigates the anticancer potential of neomenthol, not the pharmacokinetics of carbamide. |
| PD | Fatima_2021 | not_relevant | 0 | 0 | The paper studies neomenthol, not carbamide, and reports IC50 values for neomenthol rather than a PD model for the queried drug. |
| popPK | Findlay_1987 | irrelevant | 0 | 0 | The paper describes the structural dissociation of an enzyme in urea (carbamide) and does not report pharmacokinetic parameters for carbamide. |
| PD | Findlay_1987 | not_relevant | 0 | 0 | The paper describes the structural dissociation of an enzyme in urea, not the pharmacodynamic response of a biological system to the drug carbamide. |
| popPK | Flower_2022 | irrelevant | 0 | 0 | The study analyzes urea-to-creatinine ratios in critical care patients and does not report pharmacokinetic parameters for carbamide. |
| PGx | Forny_2016 | not_relevant | 0 | 0 | The paper studies methylmalonic aciduria and cobalamin treatment, not the pharmacokinetics or pharmacodynamics of carbamide. |
| popPK | Foster_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of enrofloxacin and its metabolite ciprofloxacin in cats, not carbamide. |
| popPK | Fowler_1984 | irrelevant | 0 | 0 | The paper describes the purification and properties of erythrocyte membrane tropomyosin and contains no pharmacokinetic data for carbamide. |
| PD | Fowler_1984 | not_relevant | 0 | 0 | The paper describes the purification and biophysical properties of erythrocyte membrane tropomyosin, including its binding to actin, and does not involve the drug carbamide or any pharmacodynamic exposure-response analysis. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper is a systematic review of vancomycin pharmacokinetics, not carbamide. |
| PD | Fresquet-Molina_2025 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic (PK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Fröhlich_1987 | irrelevant | 0 | 0 | The study investigates the mechanism of urea-induced denaturation of the erythrocyte anion exchanger in vitro, not the pharmacokinetic disposition of carbamide. |
| PD | Gade_2023 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific compound in a binding assay, which is a pharmacological potency metric, but does not report a pharmacodynamic (exposure-response) relationship, dose-response curve, or PK/PD model for the drug carbamide. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper focuses on novel opioid/TRPV1 ligands for pain management and does not study carbamide or report its pharmacokinetic parameters. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate sodium, not carbamide. |
| PD | Gao_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for mycophenolate sodium and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for hydromorphone, not carbamide. |
| PD | Gao_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for hydromorphone, not carbamide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Gee_1990 | irrelevant | 0 | 0 | The study investigates cyanide-induced cytotoxicity in rat hepatocytes and does not involve the drug carbamide or its pharmacokinetics. |
| PGx | Giessel_2022 | not_relevant | 0 | 0 | The paper focuses on protein engineering of ornithine transcarbamylase (OTC) using machine learning, not on the pharmacogenomics of carbamide (urea) as a drug. |
| PGx | Gress_2016 | not_relevant | 0 | 0 | The paper investigates the protective effects of a plant extract against Roundup toxicity in rats and does not involve carbamide or any pharmacogenomic analysis. |
| PGx | Grünert_2020 | not_relevant | 0 | 0 | The paper describes a metabolic disorder (citrin deficiency) and its clinical management, not the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| PGx | Guo_2023 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of alpha-viniferin on hyperuricemia and does not involve carbamide or any pharmacogenomic analysis of carbamide. |
| PD | Gur_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for sEH inhibition, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system or PK/PD model. |
| PGx | Hajati_2025 | not_relevant | 0 | 0 | The paper reports genetic diagnoses for inborn errors of metabolism (hyperammonemia) and does not investigate the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| popPK | Hampe_1981 | irrelevant | 0 | 0 | The paper studies the interaction of urea (carbamide) with lysozyme via spectrophotometry, which is a biophysical/chemical study, not a pharmacokinetic study of carbamide disposition. |
| PD | Hampe_1981 | not_relevant | 0 | 0 | The paper studies the biophysical interaction of urea (carbamide) with lysozyme using UV spectroscopy, reporting binding constants and Hill coefficients for protein denaturation, which is not a pharmacodynamic exposure-response relationship for a drug. |
| PGx | Han_2025 | not_relevant | 0 | 0 | The paper investigates the protective effects of a plant extract on cisplatin-induced kidney injury and does not report pharmacogenomic effects on the PK/PD of carbamide. |
| popPK | Hanada_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin, not carbamide. |
| PD | Hanada_2000 | not_relevant | 4 | 3 | The paper analyzes cisplatin, not carbamide, and while it uses a PK/PD model, the specific numeric parameters are not provided in the abstract. |
| popPK | Hanada_2000_2 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Hanada_2000_2 | not_relevant | 0 | 0 | The paper focuses on cisplatin, not carbamide. |
| PD | Hao_2025 | not_relevant | 0 | 0 | The paper analyzes the prognostic association between a biomarker (BUN) and mortality, not the pharmacodynamic effect of a drug (carbamide). |
| popPK | Hok_2018 | irrelevant | 0 | 0 | The paper investigates the chlorination and ecotoxicity of 5-fluorouracil, not the pharmacokinetics of carbamide. |
| PD | Hok_2018 | not_relevant | 0 | 0 | The paper investigates the chlorination of 5-Fluorouracil and the ecotoxicity of its degradation products, not the pharmacodynamics of carbamide. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper studies thiazolidinedione derivatives as AMPK activators for renal injury, not the pharmacokinetics of carbamide. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The paper studies the effect of a fruit juice concentrate on uric acid excretion and gut microbiota in mice, not the pharmacogenomics of carbamide. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | The paper is a review of vancomycin pharmacokinetics, not carbamide. |
| PD | Husheng_2026 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The paper describes the discovery of anti-HBV compounds (phenyl ureas) and their antiviral potency, not the pharmacokinetics of carbamide. |
| PD | Hwang_2023 | not_relevant | 3 | 2 | The paper reports in vitro EC50 values for a new class of HBV capsid assembly modulators (tetrahydroquinoxaline ureas), but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve for carbamide. |
| popPK | Iida_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ONO-7579, not carbamide. |
| PGx | Isler_2020 | not_relevant | 0 | 0 | The paper focuses on the diagnostic yield of RNA sequencing for CPS1 deficiency, not on the pharmacokinetics or pharmacodynamics of carbamide. |
| popPK | Ismail_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of scorpion venom, not the drug carbamide. |
| PGx | Jacobasch_1977 | not_relevant | 0 | 0 | The paper discusses pyruvate kinase enzymopathies in erythrocytes and is unrelated to the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| PD | Jiang_2016 | not_relevant | 0 | 0 | The paper reports structure-activity relationships (SAR) and IC50 values for novel diaryl urea derivatives, not pharmacodynamic modeling or exposure-response analysis for carbamide. |
| popPK | Ju_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of rifampicin, not carbamide. |
| PD | Ju_2025 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic (popPK) model repository for rifampicin and does not report any pharmacodynamic (PD) or exposure-response relationships for carbamide or any other drug. |
| PGx | Kalra_1992 | not_relevant | 0 | 0 | The paper studies the effect of vasodilators and surface active drugs on peritoneal dialysis efficacy, not the pharmacogenomics of carbamide. |
| popPK | Kaufman_1995 | irrelevant | 0 | 0 | The paper discusses multicompartment modeling for urea and dialysis, not the pharmacokinetics of carbamide. |
| popPK | Killerby_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis on hay preservation using chemical additives (including urea, which is chemically related to carbamide but not the drug carbamide in a PK context) and contains no pharmacokinetic data. |
| PGx | Kim_2017 | not_relevant | 0 | 0 | The paper investigates the role of the CPS1 enzyme in cancer metabolism and does not report pharmacokinetic or pharmacodynamic effects of the drug carbamide (urea). |
| PGx | Kiyuna_2025 | not_relevant | 0 | 0 | The paper studies a metabolic disease (MCADD) using organoids and does not involve the drug carbamide or its pharmacokinetics/pharmacodynamics. |
| popPK | Kjaldgaard_2022 | irrelevant | 0 | 0 | The paper studies the viral kinetics of Ebolavirus in humans, not the pharmacokinetics of the drug carbamide. |
| popPK | Komatsu_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not carbamide. |
| popPK | Komoda_1977 | irrelevant | 0 | 0 | The paper studies the inhibition of alkaline phosphatase by sialic acid and does not involve the drug carbamide or its pharmacokinetics. |
| PD | Komoda_1977 | not_relevant | 0 | 0 | The paper studies the inhibition of alkaline phosphatase by sialic acid, not the pharmacodynamics of carbamide. |
| popPK | Kowitz_1994 | irrelevant | 0 | 0 | The study evaluates the efficacy of a tooth-whitening product containing carbamide peroxide, not the pharmacokinetics of carbamide. |
| PGx | Kulkarni_2026 | not_relevant | 0 | 0 | The paper describes a liver-on-a-chip platform for hepatotoxicity testing and does not report pharmacogenomic effects on the PK/PD of carbamide. |
| PD | Leeson_1992 | not_relevant | 0 | 0 | The paper reports structure-activity relationships and single-point IC50/Kb values for a series of NMDA receptor antagonists, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for carbamide. |
| popPK | Lei_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro bioactivity of pyrazolecarbamide derivatives as antifungal agents, containing no pharmacokinetic data for the drug carbamide. |
| popPK | Lei_2022_2 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antifungal activity of novel pyrazole carbamide derivatives, not the pharmacokinetics of the drug carbamide (urea). |
| PD | Leutcha_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for natural compounds (not carbamide) and does not contain any pharmacodynamic or exposure-response analysis for the specified drug. |
| popPK | Leypoldt_2017 | irrelevant | 0 | 0 | The study investigates phosphorus kinetics during hemodialysis, not the pharmacokinetics of carbamide. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for atorvastatin, not carbamide. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of sugarcane polyphenols in rats and does not report any pharmacogenomic effects on the PK or PD of carbamide. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of IDO1/TDO inhibitors, not the pharmacokinetics of carbamide. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of probe drugs (midazolam, dabigatran, statins) to assess enzyme activity in diabetes, and does not report parameters for carbamide. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PopPK) parameters and covariate effects on clearance, but does not model or report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remimazolam tosilate, not carbamide. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PopPK and PBPK) modeling to derive dose recommendations based on exposure matching; it does not report any pharmacodynamic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study investigates the urine-to-plasma urea ratio as a biomarker for CKD progression, not the pharmacokinetics of carbamide (urea) as a drug. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | Lu_2023 | not_relevant | 0 | 0 | The paper studies the impact of a bacterial algicide on algae, not the pharmacodynamics of carbamide. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | The paper studies a traditional Chinese herbal formula for hyperuricemia in mice and does not involve carbamide or any pharmacogenomic analysis. |
| PGx | Lübberstedt_2015 | not_relevant | 0 | 0 | The paper describes a bioreactor system for hepatocyte culture and does not investigate the effects of gene variants on the pharmacokinetics or pharmacodynamics of carbamide. |
| PGx | Machulkin_2024 | not_relevant | 0 | 0 | The paper describes the synthesis and preclinical evaluation of radiolabeled PSMA-targeted conjugates, not the pharmacogenomics of carbamide (urea) as a drug. |
| popPK | Maciuszek_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and evaluation of novel FPR2 agonists for cardiovascular inflammation and does not involve the drug carbamide or its pharmacokinetics. |
| popPK | Maggini_1992 | irrelevant | 0 | 0 | The paper reports enzyme kinetics for rat liver arginase, not the pharmacokinetic parameters of the drug carbamide. |
| PD | Maggini_1992 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Vmax, Km, Hill coefficient) for arginase in a cell-free system, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Mahmoud_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vancomycin, not carbamide. |
| PGx | Medici_2021 | not_relevant | 0 | 0 | The paper discusses the diagnosis of Wilson Disease using AI and metabolic markers, not the pharmacogenomics of carbamide. |
| PGx | Mehanna_2022 | not_relevant | 0 | 0 | The paper investigates baseline metabolomic differences associated with genetic ancestry in hypertensive patients, not the pharmacokinetic or pharmacodynamic effects of carbamide. |
| PGx | Millischer_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of lithium, not carbamide. |
| popPK | Moffett_2019 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of vancomycin, not carbamide. |
| popPK | Morita-Ogawa_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin, not carbamide. |
| popPK | Morita_2026 | irrelevant | 0 | 0 | The study focuses on pemetrexed pharmacokinetics and neutropenia risk, not carbamide. |
| PD | Morita_2026 | not_relevant | 0 | 0 | The paper focuses on pemetrexed, not carbamide, and reports a risk assessment model for neutropenia rather than a pharmacodynamic exposure-response relationship for the queried drug. |
| PGx | Mukonzo_2011 | not_relevant | 0 | 0 | The paper studies the effect of HIV/AIDS disease status and sex on efavirenz pharmacokinetics, not the effect of a gene variant on carbamide. |
| popPK | Mzyk_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of danofloxacin in calves, not carbamide. |
| PGx | Naeem_2024 | not_relevant | 0 | 0 | The study evaluates the efficacy of topical urea for preventing sunitinib-induced hand foot skin reaction and does not report pharmacogenomic effects on the PK or PD of carbamide. |
| PGx | Nagamani_2012 | not_relevant | 0 | 0 | The paper describes a genetic disorder (ASL deficiency) and its management, but does not report pharmacogenomic effects on the PK/PD of carbamide. |
| PGx | Nand_1995 | not_relevant | 0 | 0 | The paper investigates the effect of sodium nitroprusside on peritoneal dialysis efficacy and does not involve carbamide or any pharmacogenomic analysis. |
| popPK | Odeh_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of inulin and urea, not carbamide. |
| popPK | Ow_2025 | irrelevant | 0 | 0 | The paper focuses on splice-switching oligonucleotides for urea cycle disorders and does not report pharmacokinetic parameters for carbamide. |
| PGx | Ow_2025 | not_relevant | 0 | 0 | The paper focuses on developing a splice-switching oligonucleotide therapy for a genetic disorder, not on the pharmacogenomics of carbamide (urea). |
| PD | Pavić_2018 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for primaquine derivatives, not carbamide, and does not provide a pharmacodynamic exposure-response model or curve for the specified drug. |
| PGx | Pazmiño_1980 | not_relevant | 0 | 0 | The paper studies TPMT activity in uremia and its inhibition by plasma, but does not report pharmacokinetic or pharmacodynamic parameters for carbamide. |
| PD | Peng_2018 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for P2Y1 receptor antagonism, which are pharmacological potency metrics, but does not report a pharmacodynamic (exposure-response or dose-response) model with parameters like Emax, EC50, or slope for a drug effect in a biological system. |
| popPK | Perera_2022 | irrelevant | 0 | 0 | The study focuses on in vitro drug-induced liver injury using acetaminophen and ethanol, not the pharmacokinetics of carbamide. |
| popPK | Pietribiasi_2018 | irrelevant | 0 | 0 | The paper models fluid and solute shifts during hemodialysis, focusing on urea, sodium, and potassium, not the pharmacokinetics of carbamide. |
| popPK | Pradhan_2026 | irrelevant | 0 | 0 | The paper describes the design and mechanism of synthetic ionophores for H+/Cl- transport, not the pharmacokinetics of carbamide. |
| popPK | Prather_1994 | irrelevant | 0 | 0 | The paper investigates delta-opioid receptor signaling in cell lines and does not involve carbamide or pharmacokinetics. |
| PD | Prather_1994 | not_relevant | 4 | 3 | The paper reports dose-response parameters (EC50, Bmax) for a delta-opioid agonist (DADLE), not for carbamide. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem, not carbamide. |
| PD | Qiao_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of imipenem and probability of target attainment (PTA) for time-dependent PK/PD indices (fT&gt;MIC), but does not report a pharmacodynamic model (e.g., Emax, IC50) or numeric PD parameters for carbamide. |
| PGx | Qin_2024 | not_relevant | 0 | 0 | The paper describes a cell-based assay for CYP3A4 drug-drug interactions and does not report pharmacogenomic effects on carbamide. |
| popPK | Ramos_2023 | irrelevant | 0 | 0 | The study is an in-vitro dental materials investigation using carbamide peroxide as a bleaching agent, not a pharmacokinetic study of carbamide. |
| popPK | Rapoport_1982 | relevant | 10 | 2 | The study reports a four-compartment pharmacokinetic model for urea (carbamide) in rats, but the specific numeric parameter values are not listed in the provided evidence text. |
| PGx | Raven_1990 | not_relevant | 0 | 0 | The paper discusses plant physiology and nitrogen fixation, not human pharmacogenomics or carbamide pharmacokinetics. |
| PGx | Reckless_1982 | not_relevant | 0 | 0 | The paper discusses a genetic/acquired deficiency of apolipoprotein C-II affecting lipoprotein metabolism, not the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| popPK | Renou_2026 | irrelevant | 0 | 0 | The study evaluates population pharmacokinetic models for cabotegravir, not carbamide. |
| PD | Renou_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the external evaluation of population pharmacokinetic (PK) models for cabotegravir and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Reséndiz-Galván_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mycophenolic acid, not carbamide. |
| PGx | Reséndiz-Galván_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for mycophenolic acid (MPA), not carbamide. |
| popPK | Reynolds_2010 | irrelevant | 0 | 0 | The study reports reference intervals for plasma biochemical values in cats and does not involve carbamide or pharmacokinetic parameters. |
| popPK | Ringheim_1990 | irrelevant | 0 | 0 | The paper describes the domain structure and binding kinetics of cAMP-dependent protein kinase I, which is unrelated to the pharmacokinetics of carbamide. |
| PD | Ringheim_1990 | not_relevant | 0 | 0 | The paper describes the biochemical domain structure and binding kinetics of a protein kinase regulatory subunit, not the pharmacodynamics of the drug carbamide. |
| PGx | Robinson_2018 | not_relevant | 0 | 0 | The paper discusses microbial biodegradation of biuret (a fertilizer component), not the pharmacogenomics of carbamide (urea) in humans. |
| popPK | Rodríguez-Álvarez_2017 | irrelevant | 0 | 0 | The paper describes the production and characterization of recombinant simian Interleukin-15, not the pharmacokinetics of carbamide. |
| popPK | Rubin_2024 | irrelevant | 0 | 0 | The paper models urea kinetics in hemodialysis, not the pharmacokinetics of carbamide. |
| PGx | Salih_2026 | not_relevant | 0 | 0 | The paper describes an in vitro liver tissueoid model for studying regeneration and rejection, and does not report pharmacogenomic effects on the PK or PD of carbamide. |
| popPK | Saporta_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meropenem, not carbamide. |
| PD | Satoh_1995 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, drug information, or pharmacodynamic data. |
| PGx | Schmidt_2007 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving simvastatin, amiodarone, and atazanavir, and does not mention carbamide or any pharmacogenomic effects. |
| popPK | Schneditz_1993 | irrelevant | 0 | 0 | The study models urea kinetics, not carbamide (urea) pharmacokinetics as a drug, and carbamide is not the subject drug. |
| popPK | Schneditz_1994 | irrelevant | 0 | 0 | The paper models urea kinetics, not carbamide (urea) pharmacokinetics as a drug, and carbamide is not the subject drug. |
| popPK | Schneditz_2001 | irrelevant | 0 | 0 | The paper discusses compartment effects in hemodialysis generally and does not report pharmacokinetic parameters for carbamide. |
| popPK | Schouwenburg_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftriaxone, not carbamide. |
| PD | Schouwenburg_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for ceftriaxone, reporting PK metrics (rPE, rRMSE, etc.) and concentration predictions, but contains no pharmacodynamic (PD) modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Schouwenburg_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cefuroxime, not carbamide. |
| PD | Schouwenburg_2026 | not_relevant | 0 | 0 | The study is a population pharmacokinetic (popPK) analysis of cefuroxime that evaluates target attainment (PK/PD index) but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Serrano-Rodríguez_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen, not carbamide. |
| PGx | Shi_2021 | not_relevant | 0 | 0 | The paper studies the toxicity of bisphenol A and nonylphenol in rats and does not involve carbamide or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Smith_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of lead, not carbamide. |
| popPK | Smye_1995 | irrelevant | 0 | 0 | The paper models urea (not carbamide) kinetics during haemodialysis. |
| popPK | Sommerwerk_2016 | irrelevant | 0 | 0 | The paper describes the cytotoxicity of urea derivatives of triterpenes in cell lines, not the pharmacokinetics of carbamide (urea). |
| popPK | Song_2023 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Song_2023 | not_relevant | 0 | 0 | The paper analyzes the relationship between ethylene oxide (a metabolite of carbamide) and kidney stones, not the pharmacodynamic effect of carbamide itself, and does not report PD parameters for carbamide. |
| PGx | Spector_1975 | not_relevant | 0 | 0 | The paper studies citrulline metabolism and argininosuccinate synthetase activity in citrullinemia, not the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| PGx | Su_2026 | not_relevant | 0 | 0 | The paper investigates genetic correlations between kidney and lung function traits and does not mention carbamide or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Sun_2024 | not_relevant | 0 | 0 | The paper describes a 3D cell culture model for hepatotoxicity prediction and does not report pharmacogenomic effects on the PK or PD of carbamide. |
| popPK | Sun_2024_2 | irrelevant | 0 | 0 | The paper describes the synthesis and fungicidal activity of pyrazole derivatives, not the pharmacokinetics of carbamide. |
| popPK | Sundlof_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clorsulon, not carbamide. |
| PGx | Suzuki_1995 | not_relevant | 0 | 0 | The text is metadata from a document processing tool (GROBID) and contains no scientific content regarding pharmacogenomics or carbamide. |
| PD | Tawada_1994 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo dose observations, but lacks a formal exposure-response or dose-response model with derivable PD parameters like Emax or EC50 for the specific drug carbamide. |
| popPK | Thorpe_1991 | irrelevant | 0 | 0 | The paper describes the biochemical characterization of a guanylyl cyclase receptor and does not involve the drug carbamide or any pharmacokinetic parameters. |
| PD | Thorpe_1991 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics (Hill coefficient) of a purified receptor protein in vitro, not a pharmacodynamic exposure-response or dose-response relationship for the drug carbamide. |
| PGx | Tian_2025 | not_relevant | 0 | 0 | The paper studies a probiotic/epicatechin synbiotic for hyperuricemia and does not involve carbamide or any pharmacogenomic analysis. |
| popPK | Toroghi_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of REGN-EB3 (monoclonal antibodies) for Ebola treatment, not carbamide. |
| PGx | Tovar_2024 | not_relevant | 0 | 0 | The paper studies hydroxytyrosol linoleoyl ether, not carbamide, and does not report pharmacogenomic effects. |
| popPK | Tréluyer_2002 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of amikacin, not carbamide. |
| popPK | Tshuma_2023 | irrelevant | 0 | 0 | The study investigates milk urea nitrogen concentration in cattle as a nutritional biomarker, not the pharmacokinetics of carbamide (urea) as a drug. |
| popPK | Tsyplakova_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA), not carbamide. |
| PD | Tsyplakova_2025 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PopPK) modeling and machine learning for Mycophenolic Acid (MPA), but does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it contain data for carbamide. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper studies the A97S variant in transthyretin amyloidosis and the effect of tafamidis, not carbamide. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper is a machine learning study for predicting chronic brucellosis progression and does not report pharmacokinetic parameters for carbamide. |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting chronic brucellosis progression using clinical and laboratory data, not a pharmacodynamic or exposure-response analysis for carbamide. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on population pharmacokinetic models for polymyxin B, not carbamide. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and exposure simulation for polymyxin B, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin, not carbamide. |
| PD | Wassef_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for cefazolin, not carbamide, and focuses on exposure (concentration) rather than a pharmacodynamic (effect) response relationship. |
| popPK | Watanabe_1981 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding carbamide pharmacokinetics. |
| popPK | Watford_1991 | irrelevant | 0 | 0 | The paper discusses the metabolic urea cycle and channelling, not the pharmacokinetics of carbamide (urea) as a drug, and contains no PK parameters. |
| PGx | Wei_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on methotrexate, not carbamide. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salbutamol, not carbamide. |
| PD | Wen_2026 | not_relevant | 0 | 0 | The paper describes a population PBPK model for the pharmacokinetics (PK) of salbutamol, focusing on lung distribution and sampling design, but does not report any pharmacodynamic (PD) or exposure-response relationship. |
| PGx | Witteles_2024 | not_relevant | 0 | 0 | The paper analyzes the prognostic value of atrial fibrillation in transthyretin amyloid cardiomyopathy and does not report pharmacogenomic effects on the PK or PD of carbamide. |
| PGx | Wu_2019 | not_relevant | 0 | 0 | The paper describes the generation of liver organoids from stem cells and does not investigate pharmacogenomic effects on carbamide. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of losartan, not carbamide. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid, not carbamide. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper focuses on a clinical prediction model for COVID-19 deterioration and does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of carbamide. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lacosamide, not carbamide. |
| popPK | Wu_2026_2 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of contezolid, not carbamide. |
| PD | Wu_2026_2 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PopPK) modeling and probability of target attainment (PTA) based on MIC, but does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not carbamide. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not carbamide, and contains no pharmacodynamic or exposure-response analysis. |
| PGx | Xiao_2025 | not_relevant | 0 | 0 | The paper studies the mechanism of a herbal extract (Smilax glabra) in a mouse model and does not report pharmacogenomic effects on the PK/PD of carbamide. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daptomycin, not carbamide. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PopPK) modeling and simulation of daptomycin exposure (AUC, Cmin) and probability of target/toxicity attainment; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vancomycin, not carbamide. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper describes a diet-induced animal model for uric acid metabolism disorders and does not report pharmacogenomic effects on the PK/PD of carbamide. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not carbamide. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and exposure prediction (AUC) for polymyxin B, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Xu_2026_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not carbamide. |
| PD | Xu_2026_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for vancomycin, not carbamide, and focuses on exposure targets (AUC) rather than a pharmacodynamic (concentration-effect) relationship. |
| popPK | Yamada_2001 | irrelevant | 0 | 0 | The study analyzes the kinetics of beta(2)-microglobulin and urea nitrogen, not carbamide. |
| popPK | Yan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amisulpride, not carbamide. |
| PD | Yan_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation and development of population pharmacokinetic (PopPK) models for amisulpride, with no analysis of pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The text is metadata for the GROBID software and does not contain any pharmacogenomic or pharmacokinetic data for carbamide. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of polymyxin B, not carbamide. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) and dosing optimization for polymyxin B, not carbamide, and does not report a pharmacodynamic model or numeric PD parameters. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of honeysuckle peptides in hyperuricemia and does not involve carbamide or pharmacogenomic effects. |
| popPK | Yang_2026_2 | irrelevant | 0 | 0 | The paper describes the synthesis and antibacterial mechanism of indole derivatives against a plant pathogen, not the pharmacokinetics of carbamide. |
| PGx | Yoo_2022 | not_relevant | 0 | 0 | The paper analyzes genomic and metabolic hallmarks of renal cell carcinomas and does not involve the drug carbamide or its pharmacokinetics/pharmacodynamics. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not carbamide. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate, not carbamide. |
| PGx | Zeng_2023 | not_relevant | 0 | 0 | The paper studies the protective effect of Limonin on cisplatin-induced kidney injury and does not involve the drug carbamide or any pharmacogenomic analysis. |
| PD | Zhang_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for kinase inhibition, which are pharmacological potency metrics, not pharmacodynamic (exposure-response or dose-response) parameters for a drug in a biological system. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper investigates metabolic changes in neonatal intrahepatic cholestasis caused by citrin deficiency and does not report pharmacokinetic or pharmacodynamic effects of carbamide. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates genetic variants affecting QT interval in sickle cell disease, not the pharmacokinetics or pharmacodynamics of carbamide. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on gene editing for Maple Syrup Urine Disease and does not report pharmacokinetic or pharmacodynamic effects of carbamide. |
| popPK | Zhang_2025_2 | irrelevant | 0 | 0 | The paper is a systematic review of imipenem, not carbamide. |
| PD | Zhang_2025_2 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Zhang_2025_3 | irrelevant | 0 | 0 | The study investigates the association between renal function and cognitive progression in Parkinson's disease and does not report pharmacokinetic parameters for carbamide. |
| PGx | Zhang_2025_4 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting postoperative mortality and does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of carbamide. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting diabetic foot risk and does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of carbamide. |
| PGx | Zhao_2021 | not_relevant | 0 | 0 | The paper studies the effect of Withaferin A on hyperuricemia and kidney injury, not the pharmacogenomics of carbamide. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper studies curcumin, not carbamide, and does not report pharmacogenomic effects. |
| popPK | Zhi_2025 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| PD | Zhi_2025 | not_relevant | 0 | 0 | The paper analyzes flavonoids in sea buckthorn products and does not involve the drug carbamide or any pharmacodynamic modeling. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not carbamide. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Shenkang injection components (HSYA, tanshinol, etc.) and does not involve carbamide. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper reports on a genetic variant causing a metabolic disease (OTCD) and its use in preimplantation genetic testing, not the pharmacokinetics or pharmacodynamics of the drug carbamide. |
| PGx | Zhu_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of tacrolimus, not carbamide. |
| PD | al-Bayati_1989 | not_relevant | 3 | 2 | The paper describes a qualitative dose-response relationship for vanadate toxicity (morphological and biochemical changes) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | de_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate, not carbamide. |
| PD | Çapan_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for sEH inhibition, which are pharmacodynamic potency metrics, but does not report an exposure-response or dose-response relationship (e.g., Emax, EC50, slope, or effect-vs-concentration curve) for carbamide or any other drug in a physiological or PK/PD context. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
