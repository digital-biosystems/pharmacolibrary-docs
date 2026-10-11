<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;isopropanol&quot;}]"></div>

# isopropanol

- **generic name:** isopropanol
- **ATC codes:** `D08AX05`
- **DrugBank:** [DB02325](https://go.drugbank.com/drugs/DB02325) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Isopropanol is used as a skin antiseptic and disinfectant. It is widely used in healthcare settings and is an approved topical antiseptic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q16392](https://www.wikidata.org/wiki/Q16392) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:32 | 2:34 | 0/0/0 | 0/0/0 | 0/0/0 | 256,327/9,019 | einfracz / qwen3.8-27b | 20 | 8/21 | 19/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isopropanol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GCH1 (inhibitor), HMOX1 (inhibitor), NOS3 (inhibitor), NR1H2 (inhibitor), PLA2G2A (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 500 matched, 189 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dollery_1983.pdf` | Dollery CT et al., Concentration-effect relationships with…, British journal of clinical… (1983) | pd | 5 | [10.1111/j.1365-2125.1983.tb01554.x](https://doi.org/10.1111/j.1365-2125.1983.tb01554.x) | [6135438](https://www.ncbi.nlm.nih.gov/pubmed/6135438) | metadata signals extractable PD data (Concentration-effect) |
| `Kasabe_2015.pdf` | Kasabe PJ et al., Assessment of alkaline cholesterol oxid…, Protein expression and puri… (2015) | pd | 5 | [10.1016/j.pep.2015.08.011](https://doi.org/10.1016/j.pep.2015.08.011) | [26276474](https://www.ncbi.nlm.nih.gov/pubmed/26276474) | metadata signals extractable PD data (PKPD) |
| `Mostafa_2014.pdf` | Mostafa NM et al., Pharmacokinetic and exposure-response a…, Clinical drug investigation (2014) | pd | 5 | [10.1007/s40261-014-0193-2](https://doi.org/10.1007/s40261-014-0193-2) | [24756362](https://www.ncbi.nlm.nih.gov/pubmed/24756362) | metadata signals extractable PD data (exposure-response) |
| `Murphy_2014.pdf` | Murphy DJ et al., Pre-clinical development of a combinati…, The Journal of antimicrobia… (2014) | pd | 5 | [10.1093/jac/dku160](https://doi.org/10.1093/jac/dku160) | [24862093](https://www.ncbi.nlm.nih.gov/pubmed/24862093) | metadata signals extractable PD data (IC50) |
| `Arcanjo_2018.pdf` | Arcanjo GS et al., Heterogeneous photocatalysis using TiO2…, Journal of environmental ma… (2018) | pd | 4 | [10.1016/j.jenvman.2018.01.033](https://doi.org/10.1016/j.jenvman.2018.01.033) | [29408063](https://www.ncbi.nlm.nih.gov/pubmed/29408063) | metadata signals extractable PD data (EC50) |
| `Gorbatchuk_2001.pdf` | Gorbatchuk VV et al., Homotropic cooperative binding of organ…, Biochimica et biophysica ac… (2001) | pd | 4 | [10.1016/s0167-4838(00)00298-3](https://doi.org/10.1016/s0167-4838(00)00298-3) | [11342057](https://www.ncbi.nlm.nih.gov/pubmed/11342057) | metadata signals extractable PD data (sigmoid) |
| `Hicks_2007.pdf` | Hicks A et al., GW427353 (solabegron), a novel, selecti…, The Journal of pharmacology… (2007) | pd | 4 | [10.1124/jpet.107.125757](https://doi.org/10.1124/jpet.107.125757) | [17626794](https://www.ncbi.nlm.nih.gov/pubmed/17626794) | metadata signals extractable PD data (EC50) |
| `Holler_1993.pdf` | Holler T et al., Glutamate activates phospholipase D in…, Journal of neurochemistry (1993) | pd | 4 | [10.1111/j.1471-4159.1993.tb13659.x](https://doi.org/10.1111/j.1471-4159.1993.tb13659.x) | [8104235](https://www.ncbi.nlm.nih.gov/pubmed/8104235) | metadata signals extractable PD data (EC50) |
| `Hoult_1999.pdf` | Hoult JR et al., Chromatographic resolution, chiroptical…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991776741](https://doi.org/10.1211/0022357991776741) | [10579692](https://www.ncbi.nlm.nih.gov/pubmed/10579692) | metadata signals extractable PD data (IC50) |
| `Hu_2025.pdf` | Hu X et al., Bioassay-guided isolation and character…, Natural product research (2025) | pd | 4 | [10.1080/14786419.2023.2300397](https://doi.org/10.1080/14786419.2023.2300397) | [38179617](https://www.ncbi.nlm.nih.gov/pubmed/38179617) | metadata signals extractable PD data (IC50) |
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
| `Kröplin_1998.pdf` | Kröplin T et al., Thiopurine S-methyltransferase activity…, European journal of clinica… (1998) | pgx | 5 | [10.1007/s002280050457](https://doi.org/10.1007/s002280050457) | [9681671](https://www.ncbi.nlm.nih.gov/pubmed/9681671) | metadata signals extractable PGX data (TPMT) |

<sub>queue written 2026-10-07T22:31:32.242394+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-AlGhafar_2026 | irrelevant | 0 | 0 | The study describes a spectrofluorimetric method for determining caffeic acid and curcumin, with no pharmacokinetic data for isopropanol. |
| PD | Abd-AlGhafar_2026 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for caffeic acid and curcumin, not a pharmacodynamic or exposure-response study for isopropanol. |
| PD | Amaro_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for microalgal extracts, not for isopropanol, and does not describe a pharmacodynamic model for isopropanol. |
| PGx | Aquino_2012 | not_relevant | 0 | 0 | The paper focuses on dry powder inhaler formulation for gentamicin and does not report pharmacogenomic effects on isopropanol pharmacokinetics or pharmacodynamics. |
| popPK | Arcanjo_2018 | irrelevant | 0 | 0 | The paper describes photocatalytic treatment of textile effluent where isopropanol (2-propanol) is used only as a hydroxyl radical scavenger, not as a subject drug for PK analysis. |
| PD | Arcanjo_2018 | not_relevant | 0 | 0 | The paper describes a photocatalytic water treatment process; isopropanol (2-propanol) is used only as a chemical scavenger to inhibit hydroxyl radicals, not as a drug subject to pharmacodynamic analysis. |
| popPK | Arshad_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-fluorouracil (5FU), while isopropanol is only mentioned as a solvent for sample preparation. |
| popPK | Barbhaiya_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitomycin C in dogs, not isopropanol. |
| PD | Battula_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and biological activity of novel tetrahydro-β-carboline peptides, not isopropanol, and does not provide a pharmacokinetic or pharmacodynamic exposure-response model. |
| popPK | Beckett_2022 | irrelevant | 0 | 0 | The study evaluates volatile organic compound emissions from mattresses and is not a pharmacokinetic study involving the administration of isopropanol to subjects. |
| PGx | Begas_2007 | not_relevant | 0 | 0 | The study evaluates CYP1A2, CYP2A6, NAT-2, and XO activities using caffeine as a probe substrate, not isopropanol. |
| PGx | Begas_2015 | not_relevant | 0 | 0 | The paper focuses on a CYP1A2 phenotyping method for caffeine in saliva and does not study isopropanol pharmacokinetics or pharmacodynamics. |
| PGx | Bennetto-Hood_2014 | not_relevant | 0 | 0 | The paper describes an analytical method for dolutegravir and contains no information on isopropanol or pharmacogenomics. |
| PD | Biles_1983 | not_relevant | 0 | 0 | The paper studies chloropropanol, not isopropanol, and reports genotoxicity data rather than pharmacodynamic exposure-response parameters. |
| popPK | Brandel-Ankrapp_2026 | irrelevant | 0 | 0 | The study investigates gene expression and behavior in C. elegans after ethanol exposure, containing no pharmacokinetic data for isopropanol. |
| PD | Brandel-Ankrapp_2026 | not_relevant | 0 | 0 | The paper studies the molecular and behavioral effects of ethanol withdrawal in C. elegans, focusing on gene expression and signaling pathways, but does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Brouwer_2023 | irrelevant | 0 | 0 | The study is an occupational exposure assessment measuring ambient air concentrations of 2-propanol (isopropanol) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| PD | Chain_2011 | not_relevant | 0 | 0 | The paper describes a physical dosimeter (polymer gel) for radiation dosimetry, not a pharmacodynamic study of isopropanol as a drug. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The paper describes the enzymatic characterization of a carbonyl reductase from bacteria, not the pharmacokinetics of isopropanol in an organism. |
| PD | Chen_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax) for a carbonyl reductase, not pharmacodynamic exposure-response or dose-response relationships for the drug isopropanol in a biological system. |
| PD | Chi_2012 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and does not report numeric PD parameters for the target drug. |
| popPK | Chiba_1998 | irrelevant | 0 | 0 | The paper describes an in vitro cell viability assay method where isopropanol is used solely as an extraction solvent, not as the subject of pharmacokinetic study. |
| PD | Chiba_1998 | not_relevant | 0 | 0 | The paper describes a cell viability assay method where isopropanol is used as a solvent for extraction, not as the drug or toxicant being evaluated for a dose-response relationship. |
| PGx | Choi_2014 | not_relevant | 0 | 0 | The paper reports a lipidomic profiling methodology for rosuvastatin-treated plasma, with no mention of gene variants or isopropanol pharmacokinetics. |
| popPK | Cuevas_2026 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of delphinidin-3-glucoside on glioblastoma cells and contains no pharmacokinetic data for isopropanol. |
| PD | Cuevas_2026 | not_relevant | 0 | 0 | The paper studies delphinidin-3-glucoside, not isopropanol, and does not report any pharmacodynamic parameters for isopropanol. |
| PGx | Cui_2005 | not_relevant | 0 | 0 | The paper studies SNPs in HDL metabolism genes (ABCA1, CETP, LPL) and uses isopropanol only as a reagent for DNA precipitation, not as a drug subject to pharmacogenomic analysis. |
| popPK | De_2000 | irrelevant | 0 | 0 | The paper reports the synthesis and in vitro antiviral activity of anti-HIV derivatives, not the pharmacokinetics of isopropanol. |
| PD | De_2000 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for new anti-HIV derivatives, not pharmacodynamic or exposure-response data for isopropanol. |
| PD | Devi_2020 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax) and cytotoxicity IC50 for a cholesterol oxidase enzyme, not a pharmacodynamic exposure-response relationship for the drug isopropanol. |
| PD | Dollery_1983 | not_relevant | 0 | 0 | The paper discusses FM 24 (a beta-adrenergic antagonist), not isopropanol. |
| popPK | Donmez_2026 | irrelevant | 0 | 0 | The study is an in vitro dental materials science experiment regarding the trueness of removable dies cleaned with isopropyl alcohol, containing no pharmacokinetic data. |
| popPK | Ekstrand_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cannabidiol and cannabidiolic acid in horses, not isopropanol. |
| PD | Ekstrand_2026 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, half-life) for cannabidiol and cannabidiolic acid in horses and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Ernstgård_2003 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PGx | Ernstgård_2003 | not_relevant | 0 | 0 | The study examines sex differences (phenotypic/physiological) rather than specific gene variants or genotypes, and thus does not report a pharmacogenomic effect. |
| popPK | Etaka_2025 | irrelevant | 0 | 0 | The study evaluates isopropyl alcohol as a surface sanitizer for reducing pathogens on harvest bags and contains no pharmacokinetic data for isopropanol. |
| popPK | Fitzsimmons_1997 | irrelevant | 0 | 0 | The study investigates calcium signaling in pancreatic acini and uses isopropanol (2-propanol) only as an extraction solvent, not as the subject drug for pharmacokinetic analysis. |
| PD | Fitzsimmons_1997 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of palmitoyl-CoA, not isopropanol; isopropanol is only mentioned as a solvent for extraction. |
| popPK | Flacco_2026 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of PI3K/mTOR inhibitors on oral fibroblasts and does not involve isopropanol or pharmacokinetic modeling. |
| PD | Flacco_2026 | not_relevant | 0 | 0 | The paper studies the effect of PKI402 on cigarette smoke-induced senescence in oral fibroblasts and does not mention isopropanol or report any pharmacodynamic parameters for it. |
| PD | Fortunati_1993 | not_relevant | 3 | 2 | The paper reports qualitative effects of isopropanol on cytosolic calcium and mentions IC50 values for cell growth inhibition, but does not provide specific numeric PD parameters (like Emax, EC50, or dose-response curves) for isopropanol in the provided text. |
| popPK | Furlan_2025 | irrelevant | 0 | 0 | The paper investigates the antimicrobial efficacy of TB47 against Mycobacterium leprae and does not contain pharmacokinetic data for isopropanol. |
| PD | Furlan_2025 | not_relevant | 0 | 0 | The paper investigates the antimicrobial efficacy of TB47, not isopropanol, and does not report any pharmacodynamic parameters for isopropanol. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | This is an in vitro immunotoxicology study where isopropanol is used only as a non-sensitizing control vehicle, with no pharmacokinetic parameters reported. |
| PD | Galbiati_2017 | not_relevant | 0 | 0 | The paper describes an in vitro skin sensitization assay for contact allergens and uses isopropanol only as a negative control; it does not report any pharmacodynamic or exposure-response relationship for isopropanol. |
| PGx | Galvez-Fernandez_2023 | not_relevant | 0 | 0 | The paper analyzes metabolic patterns and bone fragility endpoints in a general population, not the pharmacokinetics or pharmacodynamics of isopropanol as a drug. |
| popPK | Gekle_1998 | irrelevant | 0 | 0 | The paper describes the non-genomic action of aldosterone on cytosolic sodium in cells, where isopropanol appears only as part of the name of the compound ethyl-isopropanol amiloride (EIPA) used as an inhibitor, not as the subject drug for PK analysis. |
| popPK | Gomes_2024 | irrelevant | 0 | 0 | The paper concerns the synthesis and cytotoxicity of copper(II) complexes and does not involve the pharmacokinetics of isopropanol. |
| PD | Gomes_2024 | not_relevant | 0 | 0 | The paper studies copper(II) complexes, not isopropanol, and reports cytotoxicity EC50 values for unrelated compounds. |
| PGx | González-Pérez_2012 | not_relevant | 0 | 0 | The paper studies the impact of organic solvents (including isopropanol) on CYP450 probe reactions, but does not report any pharmacogenomic effects on the PK/PD of isopropanol itself. |
| popPK | Gorbatchuk_2001 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| PD | Gorbatchuk_2001 | not_relevant | 0 | 0 | The paper investigates the biophysical binding of isopropanol to solid trypsin, not a pharmacodynamic or exposure-response relationship in a biological system. |
| popPK | Gowans_2026 | irrelevant | 0 | 0 | The paper is a review on organ-on-chip technologies and does not contain pharmacokinetic data for isopropanol. |
| PD | Gowans_2026 | not_relevant | 0 | 0 | The paper is a review on organ-on-chip platforms for long-acting therapeutics and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| PD | Guggilla_2021 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for flurbiprofen and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Gugleva_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro characterization of daunorubicin-loaded niosomes, with no mention of isopropanol pharmacokinetics. |
| PD | Gugleva_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of niosomes for daunorubicin delivery, not on the pharmacodynamics of isopropanol. |
| popPK | Havelkova_2026 | irrelevant | 0 | 0 | The paper investigates the in vitro cytotoxicity and delivery of buparlisib (a PI3K inhibitor) in glioblastoma cell lines, not the pharmacokinetics of isopropanol. |
| popPK | Helal_2026 | irrelevant | 0 | 0 | The paper describes a tumor-on-chip platform for breast cancer drug sensitivity and does not report pharmacokinetic parameters for isopropanol. |
| PD | Helal_2026 | not_relevant | 0 | 0 | The paper describes a tumor-on-chip platform for breast cancer drug sensitivity profiling and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Hicks_2007 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of solabegron in dogs for overactive bladder, and isopropanol is not the subject drug or reported. |
| PD | Hicks_2007 | not_relevant | 0 | 0 | The paper investigates GW427353 (solabegron), not isopropanol, and does not report any pharmacodynamic relationship for isopropanol. |
| popPK | Holler_1993 | irrelevant | 0 | 0 | The paper studies phospholipase D activity in rat hippocampal slices and uses propanol (likely 1-propanol) as an assay reagent, not as a subject for pharmacokinetic parameter estimation. |
| PD | Holler_1993 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of glutamate and ACPD on phospholipase D activity, not isopropanol (which is used only as a substrate for the assay). |
| PD | Hoult_1999 | not_relevant | 0 | 0 | The paper reports IC50 values for butibufen enantiomers, not isopropanol; isopropanol is only used as a mobile phase component in chromatography. |
| popPK | Hsiao_2011 | irrelevant | 0 | 0 | The study uses isopropanol as a solvent for MTT assays in a cytotoxicity study of nanoparticles, not as a drug for pharmacokinetic evaluation. |
| PD | Hsiao_2011 | not_relevant | 0 | 0 | The paper uses isopropanol as a solvent for the MTT assay to measure nanoparticle cytotoxicity, not as the drug of interest for a pharmacodynamic exposure-response analysis. |
| popPK | Hsieh_2006 | irrelevant | 0 | 0 | The paper reports toxicological data (EC50) for isopropanol (2-propanol) in green algae, not pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of leuprolide acetate, not isopropanol. |
| PD | Hu_2022 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a synthetic biology tool (BioFuse) for timing gene expression in bacteria and contains no pharmacokinetic data for isopropanol. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a synthetic biology gene circuit (BioFuse) for timing gene expression in bacteria and does not involve isopropanol or pharmacodynamic modeling. |
| PD | Jahn_1995 | not_relevant | 0 | 0 | The paper describes a microbiological susceptibility assay for antifungal agents (amphotericin B, fluconazole, itraconazole) and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Ji_2022 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of chemical compounds containing an isopropanol moiety, not the pharmacokinetics of isopropanol as a drug. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The paper focuses on the formulation of an enrofloxacin-colistin combination for veterinary use and does not report pharmacokinetic parameters for isopropanol. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation, stability, and toxicity of an enrofloxacin-colistin combination using 1,2-propanediol as a cosolvent; it does not report pharmacodynamic or exposure-response relationships for isopropanol. |
| PD | Jiménez_2000 | not_relevant | 0 | 0 | The paper reports the isolation and cytotoxicity (IC50) of new sesterterpenes from a sponge, not a pharmacodynamic or exposure-response analysis for isopropanol. |
| PGx | Jin_2010 | not_relevant | 0 | 0 | The paper describes an RNA extraction method for activated sludge, where isopropanol is used merely as a reagent for nucleic acid precipitation, and contains no pharmacogenomic data. |
| PGx | Jurin_2024 | not_relevant | 0 | 0 | The paper reports on the synthesis and antiproliferative activity of novel hydantoin compounds, with no mention of isopropanol or any gene variant/genotype effects on pharmacokinetics or pharmacodynamics. |
| popPK | Kaika_2024 | irrelevant | 0 | 0 | The study is a preclinical/magnetic resonance imaging methodological study using isopropanol as a cell membrane permeabilization agent, not a pharmacokinetic study. |
| PGx | Kampf_1999 | not_relevant | 0 | 0 | The paper evaluates the bactericidal activity of hand disinfectants (including propanols) against bacteria and does not involve human pharmacokinetics or pharmacogenomics. |
| popPK | Kasabe_2015 | irrelevant | 0 | 0 | The paper describes the stability of a bacterial enzyme in the presence of isopropanol as a chemical solvent, not a pharmacokinetic study of isopropanol. |
| PD | Kasabe_2015 | not_relevant | 0 | 0 | The paper describes the stability of an enzyme in the presence of isopropanol, not a pharmacodynamic or exposure-response relationship for isopropanol as a drug. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological screening of novel benzimidazole derivatives for antimicrobial/antidiabetic activity, with no pharmacokinetic data or mention of isopropanol. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening (MIC/MIC90 or similar) of new chemical compounds, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis for isopropanol. |
| popPK | Khan_2026 | irrelevant | 0 | 0 | The study investigates random blood glucose levels in patients with type 2 diabetes and does not contain any pharmacokinetic data for isopropanol. |
| PD | Khan_2026 | not_relevant | 0 | 0 | The paper analyzes demographic determinants of blood glucose in diabetes patients and does not report any pharmacodynamic or exposure-response relationship for isopropanol. |
| PD | Kiltz_1994 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and reports no concentration-effect relationship or numeric PD parameters for the target drug. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study is an in vitro toxicity study using QPAR modeling for chemical mixtures, not a pharmacokinetic study reporting disposition parameters. |
| PD | Kim_2016 | not_relevant | 3 | 2 | The paper reports EC50 values for chemical mixtures in cell lines using QPAR modeling, which is a toxicological potency metric rather than a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper focuses on the purification of phenylpropanoids from Lilium Longiflorum and their DPP-IV inhibitory potentials, with no mention of isopropanol or any pharmacodynamic modeling for it. |
| popPK | Kirchgessner_2015 | irrelevant | 0 | 0 | The study investigates the pharmacological activity of an LXR agonist (BMS-779788) in nonhuman primates, not the pharmacokinetics of isopropanol. |
| PD | Komura_2014 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and does not report any exposure-response or dose-response relationship for isopropanol. |
| PGx | Koyama_1993 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of imipramine, not isopropanol. |
| PGx | Krul_1998 | not_relevant | 0 | 0 | The paper describes a method for analyzing caffeine metabolites and reports differences in enzyme activity ratios based on gender and smoking status, but it does not report any pharmacogenomic effects on isopropanol. |
| PGx | Kröplin_1998 | not_relevant | 0 | 0 | The paper concerns thiopurine metabolism and TPMT activity, not isopropanol pharmacokinetics or pharmacodynamics. |
| PGx | Kumar_2010 | not_relevant | 0 | 0 | The study examines the chemical interaction of ethanol and isopropanol with CYP3A4 and its effect on nelfinavir metabolism, not pharmacogenomic effects of gene variants on isopropanol PK/PD. |
| PD | Kumar_2012 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for BACE-1, which is a pharmacodynamic potency metric, but it does not report an exposure-response or dose-response relationship for isopropanol (the solvent/structural motif) in a biological system, nor does it provide PK/PD modeling parameters. |
| popPK | Lal_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bulaquine and primaquine, where isopropanol is used only as a component of the extraction solvent, not as the subject drug. |
| PGx | Lee_2011 | not_relevant | 0 | 0 | The paper describes the in vitro kinetic properties of alcohol dehydrogenase (ADH) isozymes; it is a mechanistic study rather than a report of a specific pharmacogenomic variant (e.g., an SNV) altering the in vivo PK/PD of isopropanol in a clinical or human trial context. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of relugolix, not isopropanol. |
| PD | Lee_2023 | not_relevant | 0 | 0 | The paper reports a PK/PD model for relugolix, not isopropanol. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper studies the antifungal activity of a fungicide (mefentrifluconazole) on Botrytis cinerea, not the pharmacokinetics of isopropanol as a drug. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study investigates fungicide resistance mechanisms in the fungus *Alternaria alternata*, and "isopropanol" is only mentioned as part of the chemical classification of the fungicide mefentrifluconazole, not as a pharmacokinetic subject. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper reports fungicide resistance mechanisms (mutations and overexpression) and EC50 values for a fungicide (mefentrifluconazole), not a pharmacodynamic exposure-response relationship for isopropanol. |
| popPK | Lim_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for leuprolide, not isopropanol. |
| PD | Lim_2015 | not_relevant | 0 | 0 | The text describes a population pharmacokinetic (PK) model for leuprolide, not isopropanol, and contains no pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Lim_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for leuprolide acetate, not isopropanol. |
| PD | Lim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for leuprolide, not isopropanol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper discusses cross-coupling metabolism of xenobiotics and CYP3A4, but does not report pharmacogenomic effects on the PK/PD of isopropanol. |
| popPK | Lv_2025 | irrelevant | 0 | 0 | The paper describes 3,4-dihydropyrimidine derivatives as antivirals, where "isopropanol" is merely a chemical substituent on a compound, not the subject drug for PK analysis. |
| PD | Lv_2025 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for a novel compound (D39) containing an isopropanol substituent, but does not report a pharmacodynamic or exposure-response relationship for isopropanol itself. |
| popPK | Mahmood_2025 | irrelevant | 0 | 0 | The paper studies metformin pharmacokinetics, and isopropanol is only mentioned as a component of the solution for bead formation. |
| PD | Mahmood_2025 | not_relevant | 0 | 0 | The paper focuses on the PK of metformin using a PBPK model; isopropanol is only mentioned as a component of the formulation cross-linking solution, and no PD or exposure-response data for isopropanol is reported. |
| PD | Maizlish_1985 | not_relevant | 1 | 0 | The study reports no significant relationship between solvent concentration and behavioral impairment, providing no numeric PD parameters or extractable dose-response curve. |
| popPK | Malikov_2026 | irrelevant | 0 | 0 | The paper reports solubility data for organic compounds in solvent mixtures and does not contain any pharmacokinetic parameters for isopropanol. |
| PD | Malikov_2026 | not_relevant | 0 | 0 | The paper is a dataset of solubility values for organic compounds in solvent mixtures and does not report any pharmacodynamic or exposure-response relationships for isopropanol. |
| PD | Mangal_2011 | not_relevant | 0 | 0 | The paper describes an analytical method for eicosanoids; isopropanol is only used as an extraction solvent, and no pharmacodynamic or exposure-response data for isopropanol are reported. |
| popPK | Maruyama_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile of ritobegron in cynomolgus monkeys and does not report pharmacokinetic parameters for isopropanol. |
| PD | Maruyama_2012 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters for ritobegron, not isopropanol. |
| popPK | McKarns_1997 | irrelevant | 0 | 0 | This is an in vitro mechanistic study focusing on membrane integrity and toxicity (LDH release), not pharmacokinetic parameters. |
| popPK | Mezei_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a 1,2,4-oxadiazine derivative, not isopropanol (which is only used as a solvent in the HPLC method). |
| PGx | Min_2016 | not_relevant | 0 | 0 | The paper discusses PBPK modeling for sarpogrelate hydrochloride and does not mention isopropanol or pharmacogenomic effects on its parameters. |
| PD | Minh_2023 | not_relevant | 0 | 0 | The paper reports antimicrobial MICs and cytotoxic IC50s for fungal alkaloids, not a pharmacodynamic or exposure-response relationship for isopropanol. |
| popPK | Mostafa_2014 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| PD | Mostafa_2014 | not_relevant | 0 | 0 | The paper analyzes leuprolide, not isopropanol. |
| popPK | Muir_1983 | irrelevant | 0 | 0 | The study measures toxicity/irritancy (EC50) in vitro and in vivo, not pharmacokinetic disposition parameters. |
| PD | Murphy_2014 | not_relevant | 2 | 2 | The paper reports PK data and static IC50 values from ex vivo challenge studies, but does not model or report a dynamic exposure-response or dose-response relationship for isopropanol (which is only used as a release medium). |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The paper describes the pharmacological activity of SR 58611A on brown adipose tissue and does not involve isopropanol pharmacokinetics. |
| popPK | Nordin_1991 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell growth inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ohkubo_2023 | irrelevant | 0 | 0 | The paper is a study on bioprocess engineering and control systems for isopropanol production in *E. coli*, not a pharmacokinetic study of isopropanol as a drug. |
| PGx | Ohno_2004 | not_relevant | 0 | 0 | The paper focuses on carvedilol metabolism and does not mention isopropanol. |
| PGx | Ou-Yang_1998 | not_relevant | 0 | 0 | The paper describes an HPLC method using isopropanol as a solvent, not as a drug, and does not report any pharmacogenomic effects. |
| popPK | Ozakca_2007 | irrelevant | 0 | 0 | The study investigates beta-adrenoceptor subtypes in rat gastric fundus and does not involve isopropanol pharmacokinetics. |
| PD | Ozakca_2007 | not_relevant | 0 | 0 | The paper investigates beta-adrenoceptor subtypes in rat gastric fundus and does not mention isopropanol or report any pharmacodynamic parameters for it. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a generic drug delivery device and does not report pharmacokinetic parameters for isopropanol. |
| PD | Paci_2026 | not_relevant | 0 | 0 | The paper describes a drug delivery device mechanism and release rates, but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for isopropanol or any other drug. |
| PD | Patathananone_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of plant extracts, not a pharmacodynamic or exposure-response relationship for the drug isopropanol. |
| PD | Patel_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation of liposomal raloxifene and leuprolide, not isopropanol, and reports only qualitative pharmacodynamic outcomes (fibroid regression) without numeric exposure-response parameters. |
| PD | Peri_2011 | not_relevant | 0 | 0 | The paper investigates the hydrolysis and cytotoxicity of titanium(IV) complexes, not the pharmacodynamics of isopropanol itself. |
| PGx | Pettenuzzo_2026 | not_relevant | 0 | 0 | The paper reports on heat stress responses and metabolic profiling in grapevine (Vitis vinifera L.), which is a plant species, not a study of pharmacogenomic effects on the PK/PD of the drug isopropanol. |
| popPK | Pham_2008 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of ionic liquids in algae, where isopropanol is only mentioned as a comparator solvent, not a subject of pharmacokinetic analysis. |
| PD | Pham_2008 | not_relevant | 0 | 0 | The paper investigates the ecotoxicity of ionic liquids and compares them to isopropanol, but does not report a pharmacodynamic or exposure-response relationship for isopropanol itself. |
| PD | Ponnusamy_2011 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of plant extracts, not a pharmacodynamic or exposure-response relationship for the drug isopropanol in a biological system. |
| popPK | Przejczowska-Pomierny_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ibuprofen, not isopropanol; isopropanol (2-propanol) is mentioned only as a component of the HPLC mobile phase. |
| popPK | R_2026 | irrelevant | 0 | 0 | The paper studies the intracellular distribution of PARP inhibitors (rucaparib, niraparib, olaparib) in ovarian carcinoma explants and does not involve isopropanol. |
| PD | R_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacology of PARP inhibitors (rucaparib, niraparib, olaparib) and does not contain any data, analysis, or mention of isopropanol. |
| popPK | Ramírez_2023 | irrelevant | 0 | 0 | The paper is an environmental exposure study measuring volatile organic compound (VOC) concentrations in beauty salon air, not a pharmacokinetic study. |
| PGx | Rasmussen_1996 | not_relevant | 0 | 0 | The paper describes an analytical method for theophylline and does not report on isopropanol or pharmacogenomic effects. |
| PGx | Rasmussen_1996_2 | not_relevant | 0 | 0 | The paper studies caffeine metabolism and CYP1A2 activity, not the pharmacokinetics or pharmacodynamics of isopropanol. |
| popPK | Rasool_2026 | irrelevant | 0 | 0 | The paper studies IL-11 signaling in esophageal cancer and contains no pharmacokinetic data for isopropanol. |
| PD | Rasool_2026 | not_relevant | 0 | 0 | The paper investigates IL-11 signaling in esophageal cancer and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Rauma_2009 | irrelevant | 1 | 0 | The study focuses on dermal diffusion of volatile chemicals in pig skin (in vitro) and mentions 2-propanol only as part of a comparison with previously published data, without providing original quantitative population-PK parameters for isopropanol. |
| popPK | Ravuri_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketoprofen in dogs, where isopropanol is merely a solvent in the transdermal formulation. |
| popPK | Rhyu_2006 | irrelevant | 0 | 0 | The study investigates the receptor binding of black cohosh extracts and does not report pharmacokinetic parameters for isopropanol, which is only mentioned as a solvent. |
| PD | Rhyu_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of black cohosh, not isopropanol; the 2-propanol extract is merely a solvent vehicle for the botanical compound. |
| PD | Rodecap_1981 | not_relevant | 0 | 0 | The paper describes a plant bioassay for phytotoxicity and does not report pharmacodynamic or exposure-response relationships for isopropanol in a biological system relevant to drug PD. |
| popPK | Rodina_2025 | irrelevant | 0 | 0 | The paper describes a chemoproteomic method for mapping protein-protein interactions and does not contain any pharmacokinetic data for isopropanol. |
| PD | Rodina_2025 | not_relevant | 0 | 0 | The paper describes a chemoproteomic method for mapping protein-protein interactions and contains no pharmacodynamic or exposure-response data for isopropanol. |
| PD | Ruplin_2024 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in prostate cancer and does not contain any pharmacodynamic or exposure-response analysis for isopropanol. |
| PD | Saltzstein_2018 | not_relevant | 0 | 0 | The paper studies leuprolide acetate, not isopropanol, and does not report numeric PD parameters for isopropanol. |
| PGx | Sato_2020 | not_relevant | 0 | 0 | The paper investigates the antiviral efficacy of isopropanol on human norovirus in cells, not the pharmacogenomics of human isopropanol metabolism or pharmacodynamics. |
| popPK | Sawada_1987 | irrelevant | 0 | 0 | This is an in-vitro microbiology study examining the effects of ethanol, isopropanol, and propanol on bacterial growth, with no pharmacokinetic parameters reported. |
| PD | Sawada_1987 | not_relevant | 4 | 2 | The paper reports a dose-response relationship for ethanol (not isopropanol) with specific kinetic parameters (Hill coefficient, inhibition constant), but only provides a qualitative correlation for isopropanol without numeric PD parameters. |
| PD | Schmidt_2026 | not_relevant | 2 | 1 | The paper mentions isopropanol qualitatively regarding membrane stress but does not provide specific numeric PD parameters (e.g., IC50, Emax) or a concentration-effect curve for it. |
| PGx | Sellés_2021 | not_relevant | 0 | 0 | The paper describes metabolic engineering of E. coli to produce isopropanol, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of isopropanol in patients. |
| PGx | Seronello_2010 | not_relevant | 0 | 0 | The paper studies the effect of isopropanol on HCV replication in cell culture, not the pharmacokinetics or pharmacodynamics of isopropanol influenced by genetic variants. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The paper concerns fungicide resistance mechanisms in a fungal pathogen and isopropanol is only part of the chemical name of the fungicide, with no pharmacokinetic data for the drug isopropanol. |
| PD | Shi_2026 | not_relevant | 0 | 0 | The paper reports an EC50 for a fungicide (mefentrifluconazole) against a fungal pathogen, which is a toxicological/efficacy parameter, not a pharmacodynamic (exposure-response) relationship for the drug isopropanol in a biological system. |
| PD | Singh_2018 | not_relevant | 1 | 0 | The paper reports PK parameters (Cmax, AUC) and qualitative PD observations (ECG/HRV) for felodipine, but does not provide numeric PD parameters (Emax, EC50) or an exposure-response relationship. |
| PD | Sobottka_1992 | not_relevant | 0 | 0 | The paper reports IC50 values for HECNU, vinblastine, and HPC, but does not report any pharmacodynamic or exposure-response data for isopropanol. |
| popPK | Stachenfeld_2003 | irrelevant | 0 | 0 | The study investigates the effects of estrogen on vasopressin (AVP) pharmacokinetics and renal response, not isopropanol. |
| PGx | Stott_1997 | not_relevant | 0 | 0 | The study focuses on 1,3-dichloro-2-propanol, not isopropanol, and does not report pharmacogenomic effects on isopropanol PK/PD. |
| popPK | Suchomel_2023 | irrelevant | 0 | 0 | The study is a microbiological efficacy evaluation of hand hygiene products and does not contain any pharmacokinetic parameters for isopropanol. |
| popPK | Sudarsono_2026 | irrelevant | 0 | 0 | The study focuses on a hollow-fiber infection model for ganciclovir and CMV, with no mention of isopropanol or its pharmacokinetics. |
| PD | Sudarsono_2026 | not_relevant | 0 | 0 | The paper describes a validation study for a hollow-fiber infection model using ganciclovir, not isopropanol, and does not report any PD parameters for isopropanol. |
| popPK | Sudarsono_2026_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ganciclovir in an in vitro hollow fiber model, not isopropanol. |
| PD | Sudarsono_2026_2 | not_relevant | 0 | 0 | The paper focuses on ganciclovir, not isopropanol, and is a model validation study without specific PD parameter estimation for the queried drug. |
| popPK | Sukeishi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remdesivir and its active metabolite GS-441524, not isopropanol. |
| PD | Sukeishi_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for GS-441524 (remdesivir metabolite) and does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| PD | Summey_2026 | not_relevant | 0 | 0 | The paper reports PD parameters for bicalutamide, anastrozole, and leuprolide, but does not mention or report any data for isopropanol. |
| popPK | Suthar_2025 | irrelevant | 0 | 0 | The study is a metabolomic analysis of dairy cow rumen fluid where isopropanol is detected as a naturally occurring metabolite, not a drug administered for pharmacokinetic evaluation. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses on the computational prediction of siRNA activity and contains no pharmacokinetic data for isopropanol. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on computational prediction of siRNA activity and does not report any pharmacodynamic or exposure-response data for isopropanol. |
| PD | Thilakarathna_2023 | not_relevant | 0 | 0 | The paper focuses on the physicochemical and antioxidative properties of mahua seed oil extracted via different methods; it does not report any pharmacodynamic or exposure-response relationship for isopropanol. |
| popPK | Timchalk_1998 | irrelevant | 0 | 0 | Isopropanol is only mentioned as the solvent for the dermal solution; the subject drug is ortho-phenylphenol (OPP). |
| PGx | Tomicic_2011 | not_relevant | 0 | 0 | The study investigates the effects of sex, hormones, and CYP2E1 polymorphisms on the metabolism of methyl ethyl ketone, 1-methoxy-2-propanol, and 1,1,1-trichloroethane, but does not investigate isopropanol. |
| popPK | Tucker_2025 | irrelevant | 0 | 0 | The paper studies fosfomycin delivery for osteomyelitis in rats and does not involve isopropanol. |
| PD | Tucker_2025 | not_relevant | 0 | 0 | The paper investigates a biomaterial delivery system for fosfomycin and does not report any pharmacodynamic or exposure-response analysis for isopropanol. |
| popPK | Varin_1986 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carvedilol, not isopropanol. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper reports in vitro IC50 values for novel HDAC6/AKT2 inhibitors and does not study isopropanol pharmacokinetics. |
| PD | Waitman_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for novel HDAC6/AKT2 inhibitors, not isopropanol, and does not contain any pharmacodynamic data for the specified drug. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of brucine, not isopropanol; isopropyl alcohol is mentioned only as a component of the extraction solvent. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper describes a protein engineering study for thermostability, not a pharmacogenomic study on isopropanol pharmacokinetics/pharmacodynamics. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper concerns microbial engineering and biofuel tolerance, not human pharmacogenomics or clinical pharmacokinetics/pharmacodynamics of isopropanol. |
| popPK | Weiss_1996 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of sympathomimetics (epinephrine, dopamine, dobutamine) on neutrophil oxygen radical production, and does not involve isopropanol or any pharmacokinetic parameters. |
| PD | Weiss_1996 | not_relevant | 0 | 0 | The paper investigates sympathomimetics (epinephrine, dopamine, dobutamine) and does not report any pharmacodynamic data for isopropanol. |
| PGx | Wu_2017 | not_relevant | 0 | 0 | The paper focuses on the enzyme engineering and kinetics of HheC, not the pharmacogenomics of isopropanol. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nemonoxacin, not isopropanol; isopropanol is mentioned only as a solvent component in the extraction method. |
| popPK | Wuest_2009 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics (receptor subtypes mediating muscle relaxation) of isoproterenol, not the pharmacokinetics of isopropanol. |
| PGx | Xia_2021 | not_relevant | 0 | 0 | The paper concerns the pharmacogenomics of atomoxetine (CYP2D6), and isopropanol is only mentioned as a component of the laboratory needle wash solution, not as a drug being studied. |
| popPK | Yamane_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine and its metabolites in dogs, not isopropanol (which is mentioned only as an extraction solvent). |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and antimicrobial activity of novel compounds, where "isopropanol" refers to a chemical linker structure, not the drug subject for pharmacokinetic study. |
| PGx | Yao_2025 | not_relevant | 0 | 0 | The paper describes enzyme engineering for industrial synthesis of an alcohol, not the pharmacogenomics of isopropanol metabolism in humans. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tripterine, not isopropanol (isopropanol is only used as a mobile phase component). |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper investigates environmental degradation and toxicity of C9 aromatics (like isopropylbenzene) in marine microalgae, not pharmacokinetics of isopropanol. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper studies the toxicity of C9 aromatic intermediates to microalgae and does not mention isopropanol or report any pharmacodynamic parameters for it. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AC02, an ACTH derivative, not isopropanol. |
| PD | Zhu_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for HIV-1 protease inhibitors, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship for the drug isopropanol in a biological system. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| PD | de-Carvalho_2022 | not_relevant | 0 | 0 | The paper evaluates developmental toxicity in a freshwater snail model and does not report pharmacodynamic or exposure-response relationships for isopropanol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
