<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;isopropanol&quot;}]"></div>

# isopropanol

- **generic name:** isopropanol
- **ATC codes:** `D08AX05`
- **DrugBank:** [DB02325](https://go.drugbank.com/drugs/DB02325) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** An isomer of 1-propanol. It is a colorless liquid having disinfectant properties. It is used in the manufacture of acetone and its derivatives and as a solvent. Topically, it is used as an antiseptic.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 20:28 | 1:13:33 | 0/0/0 | 1/0/0 | 0/0/0 | 518,153/30,498 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 8/17 | 21/4 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.664). The first reading is what the record holds.">cross-check: disputed</span> | [Arshad_2020_WBC](drugs/drug_isopropanol/pd_Arshad_2020_WBC.md) | total WBC count ← 5-fluorouracil · indirect response — drug stimulates the production of total WBC count | — | Arshad U et al., Prediction of exposure-driven myelotoxi…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-019-04028-5](https://doi.org/10.1007/s00280-019-04028-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isopropanol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GCH1 (inhibitor), HMOX1 (inhibitor), NOS3 (inhibitor), NR1H2 (inhibitor), PLA2G2A (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 500 matched, 189 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_24 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dollery_1983.pdf` | Dollery CT et al., Concentration-effect relationships with…, British journal of clinical… (1983) | pd | 5 | [10.1111/j.1365-2125.1983.tb01554.x](https://doi.org/10.1111/j.1365-2125.1983.tb01554.x) | [6135438](https://www.ncbi.nlm.nih.gov/pubmed/6135438) | metadata signals extractable PD data (Concentration-effect) |
| `Hu_2022.pdf` | Hu X et al., A single-dose, randomized, open-labeled…, Frontiers in pharmacology (2022) | pd | 5 | [10.3389/fphar.2022.946505](https://doi.org/10.3389/fphar.2022.946505) | [36059939](https://www.ncbi.nlm.nih.gov/pubmed/36059939) | metadata signals extractable PD data (Emax) |
| `Kasabe_2015.pdf` | Kasabe PJ et al., Assessment of alkaline cholesterol oxid…, Protein expression and puri… (2015) | pd | 5 | [10.1016/j.pep.2015.08.011](https://doi.org/10.1016/j.pep.2015.08.011) | [26276474](https://www.ncbi.nlm.nih.gov/pubmed/26276474) | metadata signals extractable PD data (PKPD) |
| `Mostafa_2014.pdf` | Mostafa NM et al., Pharmacokinetic and exposure-response a…, Clinical drug investigation (2014) | pd | 5 | [10.1007/s40261-014-0193-2](https://doi.org/10.1007/s40261-014-0193-2) | [24756362](https://www.ncbi.nlm.nih.gov/pubmed/24756362) | metadata signals extractable PD data (exposure-response) |
| `Murphy_2014.pdf` | Murphy DJ et al., Pre-clinical development of a combinati…, The Journal of antimicrobia… (2014) | pd | 5 | [10.1093/jac/dku160](https://doi.org/10.1093/jac/dku160) | [24862093](https://www.ncbi.nlm.nih.gov/pubmed/24862093) | metadata signals extractable PD data (IC50) |
| `Arcanjo_2018.pdf` | Arcanjo GS et al., Heterogeneous photocatalysis using TiO2…, Journal of environmental ma… (2018) | pd | 4 | [10.1016/j.jenvman.2018.01.033](https://doi.org/10.1016/j.jenvman.2018.01.033) | [29408063](https://www.ncbi.nlm.nih.gov/pubmed/29408063) | metadata signals extractable PD data (EC50) |
| `Gorbatchuk_2001.pdf` | Gorbatchuk VV et al., Homotropic cooperative binding of organ…, Biochimica et biophysica ac… (2001) | pd | 4 | [10.1016/s0167-4838(00)00298-3](https://doi.org/10.1016/s0167-4838(00)00298-3) | [11342057](https://www.ncbi.nlm.nih.gov/pubmed/11342057) | metadata signals extractable PD data (sigmoid) |
| `Hicks_2007.pdf` | Hicks A et al., GW427353 (solabegron), a novel, selecti…, The Journal of pharmacology… (2007) | pd | 4 | [10.1124/jpet.107.125757](https://doi.org/10.1124/jpet.107.125757) | [17626794](https://www.ncbi.nlm.nih.gov/pubmed/17626794) | metadata signals extractable PD data (EC50) |
| `Holler_1993.pdf` | Holler T et al., Glutamate activates phospholipase D in…, Journal of neurochemistry (1993) | pd | 4 | [10.1111/j.1471-4159.1993.tb13659.x](https://doi.org/10.1111/j.1471-4159.1993.tb13659.x) | [8104235](https://www.ncbi.nlm.nih.gov/pubmed/8104235) | metadata signals extractable PD data (EC50) |
| `Hoult_1999.pdf` | Hoult JR et al., Chromatographic resolution, chiroptical…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991776741](https://doi.org/10.1211/0022357991776741) | [10579692](https://www.ncbi.nlm.nih.gov/pubmed/10579692) | metadata signals extractable PD data (IC50) |
| `Hu_2025.pdf` | Hu X et al., Bioassay-guided isolation and character…, Natural product research (2025) | pd | 4 | [10.1080/14786419.2023.2300397](https://doi.org/10.1080/14786419.2023.2300397) | [38179617](https://www.ncbi.nlm.nih.gov/pubmed/38179617) | metadata signals extractable PD data (IC50) |
| `Kim_2020.pdf` | Kim BR et al., Purification of Phenylpropanoids from t…, ACS omega (2020) | pd | 4 | [10.1021/acsomega.9b03649](https://doi.org/10.1021/acsomega.9b03649) | [32149232](https://www.ncbi.nlm.nih.gov/pubmed/32149232) | metadata signals extractable PD data (IC50) |
| `Kirchgessner_2015.pdf` | Kirchgessner TG et al., Pharmacological characterization of a n…, The Journal of pharmacology… (2015) | pd | 4 | [10.1124/jpet.114.219923](https://doi.org/10.1124/jpet.114.219923) | [25467132](https://www.ncbi.nlm.nih.gov/pubmed/25467132) | metadata signals extractable PD data (EC50) |
| `Muir_1983.pdf` | Muir CK, The toxic effect of some industrial che…, Toxicology letters (1983) | pd | 4 | [10.1016/0378-4274(83)90135-2](https://doi.org/10.1016/0378-4274(83)90135-2) | [6658843](https://www.ncbi.nlm.nih.gov/pubmed/6658843) | metadata signals extractable PD data (EC50) |
| `Pham_2008.pdf` | Pham TP et al., Effect of imidazolium-based ionic liqui…, Environmental toxicology an… (2008) | pd | 4 | [10.1897/07-415](https://doi.org/10.1897/07-415) | [18269297](https://www.ncbi.nlm.nih.gov/pubmed/18269297) | metadata signals extractable PD data (EC50) |
| `Rhyu_2006.pdf` | Rhyu MR et al., Black cohosh (Actaea racemosa, Cimicifu…, Journal of agricultural and… (2006) | pd | 4 | [10.1021/jf062808u](https://doi.org/10.1021/jf062808u) | [17177511](https://www.ncbi.nlm.nih.gov/pubmed/17177511) | metadata signals extractable PD data (EC50) |
| `Weiss_1996.pdf` | Weiss M et al., Is inhibition of oxygen radical product…, The Journal of pharmacology… (1996) | pd | 4 | not captured | [8819492](https://www.ncbi.nlm.nih.gov/pubmed/8819492) | metadata signals extractable PD data (EC50) |
| `de-Carvalho_2022.pdf` | de-Carvalho RR et al., Evaluation of the developmental toxicit…, Journal of toxicology and e… (2022) | pd | 4 | [10.1080/15287394.2022.2089413](https://doi.org/10.1080/15287394.2022.2089413) | [35723169](https://www.ncbi.nlm.nih.gov/pubmed/35723169) | metadata signals extractable PD data (EC50) |
| `Ernstgård_2003.pdf` | Ernstgård L et al., Sex differences in the toxicokinetics o…, Toxicology and applied phar… (2003) | pgx | 8 | [10.1016/j.taap.2003.08.005](https://doi.org/10.1016/j.taap.2003.08.005) | [14644618](https://www.ncbi.nlm.nih.gov/pubmed/14644618) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Xia_2021.pdf` | Xia Y et al., Determination of atomoxetine levels in…, Analytical methods : advanc… (2021) | pgx | 8 | [10.1039/d1ay00521a](https://doi.org/10.1039/d1ay00521a) | [33998618](https://www.ncbi.nlm.nih.gov/pubmed/33998618) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Begas_2015.pdf` | Begas E et al., Development and validation of a reverse…, Biomedical chromatography :… (2015) | pgx | 7 | [10.1002/bmc.3475](https://doi.org/10.1002/bmc.3475) | [25891161](https://www.ncbi.nlm.nih.gov/pubmed/25891161) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `González-Pérez_2012.pdf` | González-Pérez V et al., Impact of organic solvents on cytochrom…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.112.047134](https://doi.org/10.1124/dmd.112.047134) | [22896727](https://www.ncbi.nlm.nih.gov/pubmed/22896727) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Min_2016.pdf` | Min JS et al., Application of physiologically based ph…, Drug design, development an… (2016) | pgx | 7 | [10.2147/DDDT.S109141](https://doi.org/10.2147/DDDT.S109141) | [27695293](https://www.ncbi.nlm.nih.gov/pubmed/27695293) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kröplin_1998.pdf` | Kröplin T et al., Thiopurine S-methyltransferase activity…, European journal of clinica… (1998) | pgx | 5 | [10.1007/s002280050457](https://doi.org/10.1007/s002280050457) | [9681671](https://www.ncbi.nlm.nih.gov/pubmed/9681671) | metadata signals extractable PGX data (TPMT) |

<sub>queue written 2026-09-29T20:14:01.240222+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-AlGhafar_2026 | irrelevant | 0 | 0 | The paper describes a spectrofluorimetric method for caffeic acid and curcumin, and isopropanol is only mentioned as a solvent tested during method optimization, not as a subject drug for PK analysis. |
| PD | Abd-AlGhafar_2026 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for caffeic acid and curcumin, not a pharmacodynamic or exposure-response study for isopropanol. |
| PD | Amaro_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for microalgal extracts, not for isopropanol, and does not describe a pharmacodynamic model for isopropanol. |
| PGx | Aquino_2012 | not_relevant | 0 | 0 | The paper focuses on the formulation of gentamicin dry powder inhalers and does not report pharmacogenomic effects on the PK or PD of isopropanol. |
| popPK | Arcanjo_2018 | irrelevant | 0 | 0 | The paper is a photocatalysis study on textile effluent where isopropanol (2-propanol) is used only as a hydroxyl radical scavenger, not as a subject drug for pharmacokinetic analysis. |
| PD | Arcanjo_2018 | not_relevant | 0 | 0 | The paper describes a photocatalytic water treatment process; isopropanol (2-propanol) is used only as a chemical scavenger to inhibit hydroxyl radicals, not as a drug subject to pharmacodynamic analysis. |
| popPK | Arshad_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 5-fluorouracil (5FU), not isopropanol, which is only mentioned as a solvent in the analytical method. |
| popPK | Barbhaiya_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitomycin C in dogs, not isopropanol. |
| PD | Battula_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and biological activity of novel tetrahydro-β-carboline peptides, not isopropanol, and does not provide a pharmacokinetic or pharmacodynamic exposure-response model. |
| popPK | Beckett_2022 | irrelevant | 0 | 0 | The study evaluates VOC emissions from mattresses and is not a pharmacokinetic study of isopropanol. |
| PGx | Begas_2007 | not_relevant | 0 | 0 | The paper evaluates caffeine metabolism to assess enzyme activity in a population; isopropanol is used only as a solvent for extraction, not as the drug of interest. |
| PGx | Begas_2015 | not_relevant | 0 | 0 | The paper describes an HPLC method for CYP1A2 phenotyping using caffeine; isopropanol is used only as a solvent in the extraction process, not as the drug of interest. |
| PGx | Bennetto-Hood_2014 | not_relevant | 0 | 0 | The paper describes an analytical method for dolutegravir, not isopropanol, and contains no pharmacogenomic data. |
| PD | Biles_1983 | not_relevant | 0 | 0 | The paper studies chloropropanol, not isopropanol, and reports genotoxicity data rather than pharmacodynamic exposure-response parameters. |
| popPK | Brandel-Ankrapp_2026 | irrelevant | 0 | 0 | The paper is a behavioral and molecular study of ethanol (EtOH) in C. elegans, not a pharmacokinetic study of isopropanol, and contains no PK parameters for isopropanol. |
| PD | Brandel-Ankrapp_2026 | not_relevant | 0 | 0 | The paper studies the molecular and behavioral effects of ethanol withdrawal in C. elegans, focusing on gene expression and signaling pathways, but does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Brouwer_2023 | irrelevant | 0 | 0 | The study focuses on occupational exposure assessment of volatile organic compounds (including 2-propanol) in nail technicians and does not report pharmacokinetic parameters for isopropanol. |
| PD | Chain_2011 | not_relevant | 0 | 0 | The paper describes a physical dosimeter (polymer gel) for radiation dosimetry, not a pharmacodynamic study of isopropanol as a drug. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study characterizing a carbonyl reductase enzyme, not a pharmacokinetic study of isopropanol disposition in a biological system. |
| PD | Chen_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax) for a carbonyl reductase, not pharmacodynamic exposure-response or dose-response relationships for the drug isopropanol in a biological system. |
| PD | Chi_2012 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and does not report numeric PD parameters for the target drug. |
| popPK | Chiba_1998 | irrelevant | 0 | 0 | The paper describes an in-vitro cell viability assay where isopropanol is used as a solvent for extraction, not as a subject drug for pharmacokinetic evaluation. |
| PD | Chiba_1998 | not_relevant | 0 | 0 | The paper describes a cell viability assay method where isopropanol is used as a solvent for extraction, not as the drug or toxicant being evaluated for a dose-response relationship. |
| PGx | Choi_2014 | not_relevant | 0 | 0 | The paper focuses on lipidomic profiling of rosuvastatin-treated plasma and does not report pharmacogenomic effects on isopropanol PK/PD. |
| popPK | Cuevas_2026 | irrelevant | 0 | 0 | The paper studies delphinidin-3-glucoside in glioblastoma cells and is unrelated to isopropanol pharmacokinetics. |
| PD | Cuevas_2026 | not_relevant | 0 | 0 | The paper studies delphinidin-3-glucoside, not isopropanol, and does not report any pharmacodynamic parameters for isopropanol. |
| PGx | Cui_2005 | not_relevant | 0 | 0 | The paper studies SNPs in HDL metabolism genes (ABCA1, CETP, LPL) and mentions isopropanol only as a reagent for DNA precipitation, not as a drug subject to pharmacogenomic analysis. |
| popPK | De_2000 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral evaluation of new anti-HIV derivatives, not the pharmacokinetics of isopropanol. |
| PD | De_2000 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for new anti-HIV derivatives, not pharmacodynamic or exposure-response data for isopropanol. |
| PD | Devi_2020 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax) and cytotoxicity IC50 for a cholesterol oxidase enzyme, not a pharmacodynamic exposure-response relationship for the drug isopropanol. |
| PD | Dollery_1983 | not_relevant | 0 | 0 | The paper discusses FM 24 (a beta-adrenergic antagonist), not isopropanol. |
| popPK | Donmez_2026 | irrelevant | 0 | 0 | The study is an in vitro dental materials investigation using isopropanol as a cleaning solution, not a pharmacokinetic study. |
| popPK | Ekstrand_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD) and cannabidiolic acid (CBDA) in horses, not isopropanol. |
| PD | Ekstrand_2026 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, half-life) for cannabidiol and cannabidiolic acid in horses and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Ernstgård_2003 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PGx | Ernstgård_2003 | not_relevant | 0 | 0 | The paper investigates sex differences in toxicokinetics, not genetic variants or pharmacogenomic effects. |
| popPK | Etaka_2025 | irrelevant | 0 | 0 | The paper is a food safety study evaluating the antimicrobial efficacy of isopropyl alcohol as a sanitizer, not a pharmacokinetic study. |
| popPK | Fitzsimmons_1997 | irrelevant | 0 | 0 | The paper studies calcium release in pancreatic cells and uses 2-propanol (isopropanol) only as a solvent for extraction, not as a subject drug for pharmacokinetic analysis. |
| PD | Fitzsimmons_1997 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of palmitoyl-CoA, not isopropanol; isopropanol is only mentioned as a solvent for extraction. |
| popPK | Flacco_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on PI3K/mTOR inhibition in oral fibroblasts and does not involve isopropanol or pharmacokinetic parameters. |
| PD | Flacco_2026 | not_relevant | 0 | 0 | The paper studies the effect of PKI402 on cigarette smoke-induced senescence in oral fibroblasts and does not mention isopropanol or report any pharmacodynamic parameters for it. |
| PD | Fortunati_1993 | not_relevant | 3 | 2 | The paper reports qualitative effects of isopropanol on cytosolic calcium and mentions IC50 values for cell growth inhibition, but does not provide specific numeric PD parameters (like Emax, EC50, or dose-response curves) for isopropanol in the provided text. |
| popPK | Furlan_2025 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of TB47 against Mycobacterium leprae and does not report pharmacokinetic parameters for isopropanol. |
| PD | Furlan_2025 | not_relevant | 0 | 0 | The paper investigates the antimicrobial efficacy of TB47, not isopropanol, and does not report any pharmacodynamic parameters for isopropanol. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | The study is an in vitro toxicology assay for skin sensitization where isopropanol is used only as a negative control, not a pharmacokinetic study. |
| PD | Galbiati_2017 | not_relevant | 0 | 0 | The paper describes an in vitro skin sensitization assay for contact allergens and uses isopropanol only as a negative control; it does not report any pharmacodynamic or exposure-response relationship for isopropanol. |
| PGx | Galvez-Fernandez_2023 | not_relevant | 0 | 0 | The paper investigates the association between metabolic patterns (including isopropanol as a metabolite) and bone fragility, not the pharmacokinetics or pharmacodynamics of isopropanol as a drug. |
| popPK | Gekle_1998 | irrelevant | 0 | 0 | The paper studies the non-genomic action of aldosterone on sodium transport in kidney cells, and isopropanol is only mentioned as part of the chemical name of the inhibitor ethyl-isopropanol amiloride (EIPA), not as the subject drug for PK analysis. |
| popPK | Gomes_2024 | irrelevant | 0 | 0 | The paper is a chemistry study on copper complexes and their cytotoxicity, with no pharmacokinetic data for isopropanol. |
| PD | Gomes_2024 | not_relevant | 0 | 0 | The paper studies copper(II) complexes, not isopropanol, and reports cytotoxicity EC50 values for unrelated compounds. |
| PGx | González-Pérez_2012 | not_relevant | 0 | 0 | The paper investigates the impact of organic solvents on CYP450 probe reactions (warfarin and midazolam), not the pharmacokinetics or pharmacodynamics of isopropanol. |
| popPK | Gorbatchuk_2001 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| PD | Gorbatchuk_2001 | not_relevant | 0 | 0 | The paper investigates the biophysical binding of isopropanol to solid trypsin, not a pharmacodynamic or exposure-response relationship in a biological system. |
| popPK | Gowans_2026 | irrelevant | 0 | 0 | The paper is a review on organ-on-chip technologies for long-acting therapeutics and does not report pharmacokinetic parameters for isopropanol. |
| PD | Gowans_2026 | not_relevant | 0 | 0 | The paper is a review on organ-on-chip platforms for long-acting therapeutics and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| PD | Guggilla_2021 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for flurbiprofen and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Gugleva_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and characterization of niosomes for daunorubicin delivery, with no pharmacokinetic data or parameters for isopropanol. |
| PD | Gugleva_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of niosomes for daunorubicin delivery, not on the pharmacodynamics of isopropanol. |
| popPK | Havelkova_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on buparlisib polymer conjugates for glioblastoma and does not report pharmacokinetic parameters for isopropanol. |
| popPK | Helal_2026 | irrelevant | 0 | 0 | The paper describes a tumor-on-chip platform for breast cancer drug sensitivity testing and does not report pharmacokinetic parameters for isopropanol. |
| PD | Helal_2026 | not_relevant | 0 | 0 | The paper describes a tumor-on-chip platform for breast cancer drug sensitivity profiling and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Hicks_2007 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of solabegron on bladder function in dogs and does not report pharmacokinetic parameters for isopropanol. |
| PD | Hicks_2007 | not_relevant | 0 | 0 | The paper investigates GW427353 (solabegron), not isopropanol, and does not report any pharmacodynamic relationship for isopropanol. |
| popPK | Holler_1993 | irrelevant | 0 | 0 | The paper is a mechanistic study on phospholipase D activity in rat hippocampal slices and does not report pharmacokinetic parameters for isopropanol. |
| PD | Holler_1993 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of glutamate and ACPD on phospholipase D activity, not isopropanol (which is used only as a substrate for the assay). |
| PD | Hoult_1999 | not_relevant | 0 | 0 | The paper reports IC50 values for butibufen enantiomers, not isopropanol; isopropanol is only used as a mobile phase component in chromatography. |
| popPK | Hsiao_2011 | irrelevant | 0 | 0 | The paper is a methodological study on nanoparticle cytotoxicity assays where isopropanol is used as a solvent, not as a subject drug for pharmacokinetic analysis. |
| PD | Hsiao_2011 | not_relevant | 0 | 0 | The paper uses isopropanol as a solvent for the MTT assay to measure nanoparticle cytotoxicity, not as the drug of interest for a pharmacodynamic exposure-response analysis. |
| popPK | Hsieh_2006 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on green algae and does not report pharmacokinetic parameters for isopropanol. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PD | Hu_2022 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a synthetic biology tool (BioFuse) for gene expression timing in bacteria and contains no pharmacokinetic data for isopropanol. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a synthetic biology gene circuit (BioFuse) for timing gene expression in bacteria and does not involve isopropanol or pharmacodynamic modeling. |
| PD | Jahn_1995 | not_relevant | 0 | 0 | The paper describes a microbiological susceptibility assay for antifungal agents (amphotericin B, fluconazole, itraconazole) and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Ji_2022 | irrelevant | 0 | 0 | The paper is a study on plant viral disease control using oxadiazole derivatives, where "isopropanol" appears only as a chemical moiety in the compound structure, not as a subject drug for pharmacokinetic analysis. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The paper focuses on the formulation and stability of an enrofloxacin-colistin injection, using isopropanol only as a comparative cosolvent in solubility studies, and does not report any pharmacokinetic parameters for isopropanol. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation, stability, and toxicity of an enrofloxacin-colistin combination using 1,2-propanediol as a cosolvent; it does not report pharmacodynamic or exposure-response relationships for isopropanol. |
| PD | Jiménez_2000 | not_relevant | 0 | 0 | The paper reports the isolation and cytotoxicity (IC50) of new sesterterpenes from a sponge, not a pharmacodynamic or exposure-response analysis for isopropanol. |
| PGx | Jin_2010 | not_relevant | 0 | 0 | The paper describes an RNA extraction method for activated sludge where isopropanol is used as a reagent, not as a drug subject to pharmacogenomic analysis. |
| PGx | Jurin_2024 | not_relevant | 0 | 0 | The paper reports the synthesis and antiproliferative activity of hydantoin derivatives, not the pharmacogenomics of isopropanol. |
| popPK | Kaika_2024 | irrelevant | 0 | 0 | The study uses isopropanol as a reagent to induce cell membrane permeabilization in yeast for MRI spectroscopy analysis, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Kampf_1999 | not_relevant | 0 | 0 | The paper investigates the bactericidal efficacy of hand disinfectants (propanol/chlorhexidine) against bacteria, not the pharmacokinetics or pharmacodynamics of isopropanol in humans influenced by genetic variants. |
| popPK | Kasabe_2015 | irrelevant | 0 | 0 | The paper is a biochemical study on enzyme stability where isopropanol is used only as a solvent, not as a subject drug for pharmacokinetic analysis. |
| PD | Kasabe_2015 | not_relevant | 0 | 0 | The paper describes the stability of an enzyme in the presence of isopropanol, not a pharmacodynamic or exposure-response relationship for isopropanol as a drug. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro biological activity of new amidoxime compounds, with no pharmacokinetic data or mention of isopropanol. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening (MIC/MIC90 or similar) of new chemical compounds, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis for isopropanol. |
| popPK | Khan_2026 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study on blood glucose levels in diabetes patients and does not contain any pharmacokinetic data for isopropanol. |
| PD | Khan_2026 | not_relevant | 0 | 0 | The paper analyzes demographic determinants of blood glucose in diabetes patients and does not report any pharmacodynamic or exposure-response relationship for isopropanol. |
| PD | Kiltz_1994 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and reports no concentration-effect relationship or numeric PD parameters for the target drug. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study using QPAR modeling to predict EC50 values for chemical mixtures, and does not report pharmacokinetic parameters (CL, V, etc.) for isopropanol. |
| PD | Kim_2016 | not_relevant | 3 | 2 | The paper reports EC50 values for chemical mixtures in cell lines using QPAR modeling, which is a toxicological potency metric rather than a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper focuses on the purification of phenylpropanoids from Lilium Longiflorum and their DPP-IV inhibitory potentials, with no mention of isopropanol or any pharmacodynamic modeling for it. |
| popPK | Kirchgessner_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of BMS-779788 (an LXR agonist) in nonhuman primates and does not report pharmacokinetic parameters for isopropanol. |
| PD | Komura_2014 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and does not report any exposure-response or dose-response relationship for isopropanol. |
| PGx | Koyama_1993 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of imipramine, not isopropanol. |
| PGx | Krul_1998 | not_relevant | 0 | 0 | The paper analyzes caffeine metabolites to assess enzyme activities and does not involve isopropanol or pharmacogenomic effects on its PK/PD. |
| PGx | Kröplin_1998 | not_relevant | 0 | 0 | The paper focuses on thiopurine S-methyltransferase (TPMT) and thiopurine drugs, not isopropanol. |
| PGx | Kumar_2010 | not_relevant | 0 | 0 | The paper studies the effect of ethanol on CYP3A4 and nelfinavir metabolism, not the pharmacokinetics or pharmacodynamics of isopropanol. |
| PD | Kumar_2012 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for BACE-1, which is a pharmacodynamic potency metric, but it does not report an exposure-response or dose-response relationship for isopropanol (the solvent/structural motif) in a biological system, nor does it provide PK/PD modeling parameters. |
| popPK | Lal_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bulaquine and primaquine, with isopropanol used only as a solvent in the extraction method. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of relugolix, not isopropanol. |
| PD | Lee_2023 | not_relevant | 0 | 0 | The paper reports a PK/PD model for relugolix, not isopropanol. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper studies the antifungal activity of mefentrifluconazole, where "isopropanol" is only mentioned as part of the chemical class name (isopropanol triazoles), not as the subject drug for pharmacokinetic analysis. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper studies fungicide resistance in a fungus and mentions isopropanol only as a chemical class descriptor for the fungicide mefentrifluconazole, not as a subject drug for PK analysis. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper reports fungicide resistance mechanisms (mutations and overexpression) and EC50 values for a fungicide (mefentrifluconazole), not a pharmacodynamic exposure-response relationship for isopropanol. |
| popPK | Lim_2015 | irrelevant | 0 | 0 | The study is a population pharmacokinetic model for leuprolide, not isopropanol. |
| PD | Lim_2015 | not_relevant | 0 | 0 | The text describes a population pharmacokinetic (PK) model for leuprolide, not isopropanol, and contains no pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Lim_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for leuprolide, not isopropanol. |
| PD | Lim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for leuprolide, not isopropanol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper focuses on the cross-coupling metabolism of phenolic xenobiotics by CYP3A4 and does not report pharmacogenomic effects on the PK/PD of isopropanol. |
| popPK | Lv_2025 | irrelevant | 0 | 0 | The paper focuses on the antiviral activity of a novel compound (D39) where isopropanol is merely a chemical substituent, not the subject drug for pharmacokinetic analysis. |
| PD | Lv_2025 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for a novel compound (D39) containing an isopropanol substituent, but does not report a pharmacodynamic or exposure-response relationship for isopropanol itself. |
| popPK | Mahmood_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, and isopropanol is only mentioned as a component of the formulation solution, not as the subject drug. |
| PD | Mahmood_2025 | not_relevant | 0 | 0 | The paper focuses on the PK of metformin using a PBPK model; isopropanol is only mentioned as a component of the formulation cross-linking solution, and no PD or exposure-response data for isopropanol is reported. |
| PD | Maizlish_1985 | not_relevant | 1 | 0 | The study reports no significant relationship between solvent concentration and behavioral impairment, providing no numeric PD parameters or extractable dose-response curve. |
| popPK | Malikov_2026 | irrelevant | 0 | 0 | The paper is a dataset of solubility values for organic compounds in solvent mixtures and does not report pharmacokinetic parameters for isopropanol. |
| PD | Malikov_2026 | not_relevant | 0 | 0 | The paper is a dataset of solubility values for organic compounds in solvent mixtures and does not report any pharmacodynamic or exposure-response relationships for isopropanol. |
| PD | Mangal_2011 | not_relevant | 0 | 0 | The paper describes an analytical method for eicosanoids; isopropanol is only used as an extraction solvent, and no pharmacodynamic or exposure-response data for isopropanol are reported. |
| popPK | Maruyama_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile of ritobegron, not the pharmacokinetics of isopropanol. |
| PD | Maruyama_2012 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters for ritobegron, not isopropanol. |
| popPK | McKarns_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane integrity using LDH release assays, not a pharmacokinetic study reporting disposition parameters for isopropanol. |
| popPK | Mezei_1984 | irrelevant | 0 | 0 | The study investigates a different drug (a 1,2,4-oxadiazine derivative), and isopropanol is only mentioned as a solvent in the HPLC method. |
| PGx | Min_2016 | not_relevant | 0 | 0 | The paper focuses on sarpogrelate hydrochloride, not isopropanol. |
| PD | Minh_2023 | not_relevant | 0 | 0 | The paper reports antimicrobial MICs and cytotoxic IC50s for fungal alkaloids, not a pharmacodynamic or exposure-response relationship for isopropanol. |
| popPK | Mostafa_2014 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| PD | Mostafa_2014 | not_relevant | 0 | 0 | The paper analyzes leuprolide, not isopropanol. |
| popPK | Muir_1983 | irrelevant | 0 | 0 | The study is an in-vitro toxicology/irritancy assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters for isopropanol. |
| PD | Murphy_2014 | not_relevant | 2 | 2 | The paper reports PK data and static IC50 values from ex vivo challenge studies, but does not model or report a dynamic exposure-response or dose-response relationship for isopropanol (which is only used as a release medium). |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The paper studies the pharmacology of SR 58611A, a beta-adrenoceptor agonist, and does not report pharmacokinetic parameters for isopropanol. |
| popPK | Nordin_1991 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell viability, not a pharmacokinetic study reporting disposition parameters for isopropanol. |
| popPK | Ohkubo_2023 | irrelevant | 0 | 0 | The paper focuses on bioprocess engineering and mathematical modeling of E. coli for isopropanol production, not on the pharmacokinetics of isopropanol as a drug. |
| PGx | Ohno_2004 | not_relevant | 0 | 0 | The paper studies the metabolism of carvedilol, not isopropanol. |
| PGx | Ou-Yang_1998 | not_relevant | 0 | 0 | The paper describes an analytical method for CYP1A2 activity using caffeine, and isopropanol is only used as a solvent in sample preparation, not as the drug of interest. |
| popPK | Ozakca_2007 | irrelevant | 0 | 0 | The paper investigates beta-adrenoceptor subtypes in rat gastric fundus and does not report pharmacokinetic parameters for isopropanol. |
| PD | Ozakca_2007 | not_relevant | 0 | 0 | The paper investigates beta-adrenoceptor subtypes in rat gastric fundus and does not mention isopropanol or report any pharmacodynamic parameters for it. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a nanofluidic drug delivery device and does not report pharmacokinetic parameters for isopropanol. |
| PD | Paci_2026 | not_relevant | 0 | 0 | The paper describes a drug delivery device mechanism and release rates, but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for isopropanol or any other drug. |
| PD | Patathananone_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of plant extracts, not a pharmacodynamic or exposure-response relationship for the drug isopropanol. |
| PD | Patel_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation of liposomal raloxifene and leuprolide, not isopropanol, and reports only qualitative pharmacodynamic outcomes (fibroid regression) without numeric exposure-response parameters. |
| PD | Peri_2011 | not_relevant | 0 | 0 | The paper investigates the hydrolysis and cytotoxicity of titanium(IV) complexes, not the pharmacodynamics of isopropanol itself. |
| PGx | Pettenuzzo_2026 | not_relevant | 0 | 0 | The paper studies heat-shock responses in grapevines and does not involve isopropanol pharmacokinetics or pharmacodynamics. |
| popPK | Pham_2008 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on ionic liquids where isopropanol is only mentioned as a comparator solvent, with no pharmacokinetic parameters reported. |
| PD | Pham_2008 | not_relevant | 0 | 0 | The paper investigates the ecotoxicity of ionic liquids and compares them to isopropanol, but does not report a pharmacodynamic or exposure-response relationship for isopropanol itself. |
| PD | Ponnusamy_2011 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of plant extracts, not a pharmacodynamic or exposure-response relationship for the drug isopropanol in a biological system. |
| popPK | Przejczowska-Pomierny_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibuprofen, not isopropanol. |
| popPK | R_2026 | irrelevant | 0 | 0 | The paper studies the distribution of PARP inhibitors (rucaparib, niraparib, olaparib) in ovarian cancer, not the pharmacokinetics of isopropanol. |
| PD | R_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacology of PARP inhibitors (rucaparib, niraparib, olaparib) and does not contain any data, analysis, or mention of isopropanol. |
| popPK | Ramírez_2023 | irrelevant | 0 | 0 | The paper is an occupational exposure study measuring airborne VOC concentrations in beauty salons, not a pharmacokinetic study of isopropanol disposition. |
| PGx | Rasmussen_1996 | not_relevant | 0 | 0 | The paper describes an analytical method for theophylline and does not involve isopropanol or pharmacogenomics. |
| PGx | Rasmussen_1996_2 | not_relevant | 0 | 0 | The paper focuses on caffeine metabolism and CYP1A2 activity, not isopropanol pharmacokinetics or pharmacodynamics. |
| popPK | Rasool_2026 | irrelevant | 0 | 0 | The paper is a study on IL-11 signaling in esophageal cancer and mentions isopropanol only as a reagent for RNA precipitation, not as a subject drug for pharmacokinetic analysis. |
| PD | Rasool_2026 | not_relevant | 0 | 0 | The paper investigates IL-11 signaling in esophageal cancer and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Rauma_2009 | irrelevant | 0 | 0 | The study focuses on dermal diffusion of volatile chemicals (including 2-propanol) using TGA and Franz cells, not systemic pharmacokinetic parameters (CL, V, ka) for isopropanol. |
| popPK | Ravuri_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of ketoprofen, with isopropanol serving only as a solvent in the transdermal formulation rather than the subject drug. |
| popPK | Rhyu_2006 | irrelevant | 0 | 0 | The study investigates the pharmacological activity of black cohosh at mu opiate receptors, with isopropanol (2-propanol) used only as a solvent for extraction, not as the subject drug for PK analysis. |
| PD | Rhyu_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of black cohosh, not isopropanol; the 2-propanol extract is merely a solvent vehicle for the botanical compound. |
| PD | Rodecap_1981 | not_relevant | 0 | 0 | The paper describes a plant bioassay for phytotoxicity and does not report pharmacodynamic or exposure-response relationships for isopropanol in a biological system relevant to drug PD. |
| popPK | Rodina_2025 | irrelevant | 0 | 0 | The paper describes a chemoproteomic method for mapping protein-protein interactions and contains no pharmacokinetic data for isopropanol. |
| PD | Rodina_2025 | not_relevant | 0 | 0 | The paper describes a chemoproteomic method for mapping protein-protein interactions and contains no pharmacodynamic or exposure-response data for isopropanol. |
| PD | Ruplin_2024 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in prostate cancer and does not contain any pharmacodynamic or exposure-response analysis for isopropanol. |
| PD | Saltzstein_2018 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and does not report numeric PD parameters for isopropanol. |
| PGx | Sato_2020 | not_relevant | 0 | 0 | The paper investigates the virucidal efficacy of isopropanol as a disinfectant against human norovirus, not its pharmacokinetics or pharmacodynamics in humans. |
| popPK | Sawada_1987 | irrelevant | 0 | 0 | The study investigates the growth inhibitory and lethal effects of ethanol and isopropanol on Escherichia coli in vitro, not pharmacokinetic disposition parameters in humans or animals. |
| PD | Sawada_1987 | not_relevant | 4 | 2 | The paper reports a dose-response relationship for ethanol (not isopropanol) with specific kinetic parameters (Hill coefficient, inhibition constant), but only provides a qualitative correlation for isopropanol without numeric PD parameters. |
| PD | Schmidt_2026 | not_relevant | 2 | 1 | The paper mentions isopropanol qualitatively regarding membrane stress but does not provide specific numeric PD parameters (e.g., IC50, Emax) or a concentration-effect curve for it. |
| PGx | Sellés_2021 | not_relevant | 0 | 0 | The paper focuses on directed evolution of enzymes for industrial biocatalysis and metabolic engineering, not on human pharmacogenomics or the pharmacokinetics/pharmacodynamics of isopropanol as a drug. |
| PGx | Seronello_2010 | not_relevant | 0 | 0 | The paper investigates the effect of ethanol and isopropanol on HCV replication and lipid metabolism, not the pharmacokinetics or pharmacodynamics of isopropanol itself, nor does it involve genetic variants. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The paper studies the fungicide mefentrifluconazole (an isopropanol-triazole) in fungi, not the pharmacokinetics of isopropanol as a drug. |
| PD | Shi_2026 | not_relevant | 0 | 0 | The paper reports an EC50 for a fungicide (mefentrifluconazole) against a fungal pathogen, which is a toxicological/efficacy parameter, not a pharmacodynamic (exposure-response) relationship for the drug isopropanol in a biological system. |
| PD | Singh_2018 | not_relevant | 1 | 0 | The paper reports PK parameters (Cmax, AUC) and qualitative PD observations (ECG/HRV) for felodipine, but does not provide numeric PD parameters (Emax, EC50) or an exposure-response relationship. |
| PD | Sobottka_1992 | not_relevant | 0 | 0 | The paper reports IC50 values for HECNU, vinblastine, and HPC, but does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Stachenfeld_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of arginine vasopressin (AVP) and the effects of oestrogen on renal function, not the pharmacokinetics of isopropanol. |
| PGx | Stott_1997 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical inhibitor (DEDC) on CYP2E1 activity and toxicity of 1,3-dichloro-2-propanol, not a pharmacogenomic effect on isopropanol. |
| popPK | Suchomel_2023 | irrelevant | 0 | 0 | The study evaluates the bactericidal efficacy of isopropanol in hand hygiene products and does not report any pharmacokinetic parameters. |
| popPK | Sudarsono_2026 | irrelevant | 0 | 0 | The study focuses on ganciclovir PK/PD in a CMV infection model and does not involve isopropanol. |
| PD | Sudarsono_2026 | not_relevant | 0 | 0 | The paper describes a validation study for a hollow-fiber infection model using ganciclovir, not isopropanol, and does not report any PD parameters for isopropanol. |
| popPK | Sudarsono_2026_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ganciclovir in an in-vitro model, and isopropanol is only mentioned as a reagent for DNA precipitation. |
| PD | Sudarsono_2026_2 | not_relevant | 0 | 0 | The paper focuses on ganciclovir, not isopropanol, and is a model validation study without specific PD parameter estimation for the queried drug. |
| popPK | Sukeishi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of GS-441524 (remdesivir metabolite), not isopropanol. |
| PD | Sukeishi_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for GS-441524 (remdesivir metabolite) and does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| PD | Summey_2026 | not_relevant | 0 | 0 | The paper reports PD parameters for bicalutamide, anastrozole, and leuprolide, but does not mention or report any data for isopropanol. |
| popPK | Suthar_2025 | irrelevant | 0 | 0 | The study is a rumen metabolomics analysis where isopropanol is detected as a metabolite, not a subject drug for pharmacokinetic parameter estimation. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses on computational prediction of siRNA activity and does not involve isopropanol or pharmacokinetic parameters. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on computational prediction of siRNA activity and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| PD | Thilakarathna_2023 | not_relevant | 0 | 0 | The paper focuses on the physicochemical and antioxidative properties of mahua seed oil extracted via different methods; it does not report any pharmacodynamic or exposure-response relationship for isopropanol. |
| popPK | Timchalk_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ortho-phenylphenol (OPP), with isopropanol serving only as a solvent/vehicle, not the subject drug. |
| PGx | Tomicic_2011 | not_relevant | 0 | 0 | The study investigates the toxicokinetics of methyl ethyl ketone, 1-methoxy-2-propanol, and 1,1,1-trichloroethane, not isopropanol. |
| popPK | Tucker_2025 | irrelevant | 0 | 0 | The paper studies fosfomycin delivery for osteomyelitis and does not involve isopropanol or report any pharmacokinetic parameters for it. |
| PD | Tucker_2025 | not_relevant | 0 | 0 | The paper investigates a biomaterial delivery system for fosfomycin and does not report any pharmacodynamic or exposure-response analysis for isopropanol. |
| popPK | Varin_1986 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carvedilol, not isopropanol. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of HDAC6/AKT2 inhibitors for cancer treatment and does not involve isopropanol or pharmacokinetic parameters. |
| PD | Waitman_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for novel HDAC6/AKT2 inhibitors, not isopropanol, and does not contain any pharmacodynamic data for the specified drug. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of brucine, and isopropanol is only mentioned as a component of the extraction solvent. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper discusses protein engineering of an enzyme for industrial stability, not human pharmacogenomics or isopropanol pharmacokinetics. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper studies microbial tolerance to isopropanol as a biofuel, not human pharmacogenomics or PK/PD parameters. |
| popPK | Weiss_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of action of sympathomimetics on neutrophils and does not report pharmacokinetic parameters for isopropanol. |
| PD | Weiss_1996 | not_relevant | 0 | 0 | The paper investigates sympathomimetics (epinephrine, dopamine, dobutamine) and does not report any pharmacodynamic data for isopropanol. |
| PGx | Wu_2017 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme (HheC) for dehalogenation and does not involve isopropanol or human pharmacogenomics. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nemonoxacin, not isopropanol, which is only mentioned as a solvent in the extraction method. |
| popPK | Wuest_2009 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of isoproterenol (not isopropanol) on detrusor muscle and does not report pharmacokinetic parameters. |
| PGx | Xia_2021 | not_relevant | 0 | 0 | The paper focuses on atomoxetine pharmacogenomics (CYP2D6) and mentions isopropanol only as a component of the needle wash solution for the LC-MS/MS method. |
| popPK | Yamane_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine, and isopropanol is only mentioned as a solvent in the extraction method. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antimicrobial agents where "isopropanol" refers to a chemical linker in the molecular structure, not the drug isopropanol, and contains no pharmacokinetic data. |
| PGx | Yao_2025 | not_relevant | 0 | 0 | The paper describes the engineering of a carbonyl reductase enzyme for the industrial synthesis of a drug intermediate, not the pharmacogenomics of isopropanol metabolism in humans. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tripterine, not isopropanol, which is only used as a mobile phase component in the LC-MS/MS method. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper studies the environmental degradation and toxicity of C9 aromatics (including isopropylbenzene) in marine microcosms, not the pharmacokinetics of isopropanol. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper studies the toxicity of C9 aromatic intermediates to microalgae and does not mention isopropanol or report any pharmacodynamic parameters for it. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AC02 (an ACTH derivative), not isopropanol. |
| PD | Zhu_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for HIV-1 protease inhibitors, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship for the drug isopropanol in a biological system. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | de-Carvalho_2022 | not_relevant | 0 | 0 | The paper evaluates developmental toxicity in a freshwater snail model and does not report pharmacodynamic or exposure-response relationships for isopropanol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
