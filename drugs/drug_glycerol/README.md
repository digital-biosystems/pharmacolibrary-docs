<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;glycerol&quot;}]"></div>

# glycerol

- **generic name:** glycerol
- **ATC codes:** `A06AG04`, `A06AX01`
- **DrugBank:** [DB09462](https://go.drugbank.com/drugs/DB09462) · **PubChem:** [CID 753](https://pubchem.ncbi.nlm.nih.gov/compound/753)
- **molar mass:** 92.0938 g/mol (C3H8O3) — DrugBank
- **groups:** approved, investigational

## About

Glycerol is used to treat constipation, and has also been used for dermatitis. It is an approved drug, given as enemas or other formulations for constipation, and is widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q132501](https://www.wikidata.org/wiki/Q132501) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:53 | 17:53 | 0/0/1 | 0/0/0 | 0/0/0 | 641,705/16,396 | ollama / qwen3.8:27b-mtp-q8_0 | 65 | 19/71 | 60/5 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Beylot_1987_healthy adults and insulin-dependent diabetic patients](drugs/drug_glycerol/Glycerol_Beylot1987_healthy_adults_and_insulin_dependent_dia.md) | — | — (no model) | 0 | Beylot M et al., Determination of steady state and nonst…, Journal of lipid research (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glycerol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | adipose tissue | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `ADH1B` unknown, `CYP2E1` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALDH1A1 (substrate), AQP7 (unknown), AQP9 (unknown), ARF1 (unknown), GSTZ1 (unknown), ISYNA1 (unknown), ITPR1 (unknown), NAGA (unknown), PAEP (unknown), PAPSS1 (unknown), PLA2G2E (unknown), PPARD (target), TRDMT1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1686 matched, 226 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beylot_1987.pdf` | Beylot M et al., Determination of steady state and nonst…, Journal of lipid research (1987) | popPK | 9 | not captured | [3585175](https://pubmed.ncbi.nlm.nih.gov/3585175) | The study reports quantitative pharmacokinetic parameters for glycerol in humans, including volume of distribution (0.306-0.308 L/kg) and appearance rates, using a single-compartment model. |
| `Coppack_2005.pdf` | Coppack SW et al., A multicompartmental model of in vivo a…, Diabetes (2005) | popPK | 9 | [10.2337/diabetes.54.7.1934](https://doi.org/10.2337/diabetes.54.7.1934) | [15983192](https://pubmed.ncbi.nlm.nih.gov/15983192) | The study reports quantitative parameters from a four-compartment model of glycerol kinetics in humans, including specific values for capillary diffusion capacity and interstitial concentrations. |
| `Hall_1976.pdf` | Hall SE et al., Effects of age and fasting on gluconeog…, The American journal of phy… (1976) | popPK | 8 | [10.1152/ajplegacy.1976.230.2.362](https://doi.org/10.1152/ajplegacy.1976.230.2.362) | [1259014](https://pubmed.ncbi.nlm.nih.gov/1259014) | The study uses a four-compartment model to calculate glycerol kinetics in dogs, but the evidence only provides metabolic flux percentages (e.g., % of glucose carbon from glycerol) rather than explicit PK parameters like clearance or volume. |
| `Schoemaker_2002.pdf` | Schoemaker RC et al., Modeling the influence of growth hormon…, Journal of pharmacokinetics… (2002) | popPK | 8 | [10.1023/a:1019803924485](https://doi.org/10.1023/a:1019803924485) | [12361241](https://pubmed.ncbi.nlm.nih.gov/12361241) | The study uses a PK/PD model to estimate glycerol rate of appearance (Ra) and concentration profiles in humans, but no specific numeric parameter values (CL, V, etc.) are provided in the text. |
| `Asher_2023.pdf` | Asher MJ et al., A Complete Endocannabinoid Signaling Sy…, Molecular pharmacology (2023) | pd | 5 | [10.1124/molpharm.122.000555](https://doi.org/10.1124/molpharm.122.000555) | [36379717](https://www.ncbi.nlm.nih.gov/pubmed/36379717) | metadata signals extractable PD data (EC50) |
| `Cheng_2024.pdf` | Cheng R et al., Time-dependent hormesis transfer from f…, Environmental research (2024) | pd | 5 | [10.1016/j.envres.2024.118418](https://doi.org/10.1016/j.envres.2024.118418) | [38316386](https://www.ncbi.nlm.nih.gov/pubmed/38316386) | metadata signals extractable PD data (EC50) |
| `Huber_1990.pdf` | Huber T et al., Bioaequivalence of sublingual glycerol…, Arzneimittel-Forschung (1990) | pd | 5 | not captured | [2128865](https://www.ncbi.nlm.nih.gov/pubmed/2128865) | metadata signals extractable PD data (EC50) |
| `Macário_2018.pdf` | Macário IPE et al., The antagonist and synergist potential…, Ecotoxicology and environme… (2018) | pd | 5 | [10.1016/j.ecoenv.2018.09.027](https://doi.org/10.1016/j.ecoenv.2018.09.027) | [30236922](https://www.ncbi.nlm.nih.gov/pubmed/30236922) | metadata signals extractable PD data (EC50) |
| `Ming_2026.pdf` | Ming C et al., Development of a SMEDDS for oral delive…, Journal of pharmaceutical s… (2026) | pd | 5 | [10.1016/j.xphs.2026.104356](https://doi.org/10.1016/j.xphs.2026.104356) | [42250802](https://www.ncbi.nlm.nih.gov/pubmed/42250802) | metadata signals extractable PD data (PK/PD) |
| `Cui_2024.pdf` | Cui K et al., Inhibitory activity and antioomycete me…, Pesticide biochemistry and… (2024) | pd | 4 | [10.1016/j.pestbp.2024.106067](https://doi.org/10.1016/j.pestbp.2024.106067) | [39277383](https://www.ncbi.nlm.nih.gov/pubmed/39277383) | metadata signals extractable PD data (EC50) |
| `Cui_2026.pdf` | Cui J et al., Identification, Biology, and Bactericid…, Microorganisms (2026) | pd | 4 | [10.3390/microorganisms14061179](https://doi.org/10.3390/microorganisms14061179) | [42354804](https://www.ncbi.nlm.nih.gov/pubmed/42354804) | metadata signals extractable PD data (EC50) |
| `Hamann_2022.pdf` | Hamann D et al., Active edible films based on green tea…, Meat science (2022) | pd | 4 | [10.1016/j.meatsci.2022.108966](https://doi.org/10.1016/j.meatsci.2022.108966) | [36126391](https://www.ncbi.nlm.nih.gov/pubmed/36126391) | metadata signals extractable PD data (IC50) |
| `Hou_2019.pdf` | Hou YP et al., Impact of fluazinam on morphological an…, Pesticide biochemistry and… (2019) | pd | 4 | [10.1016/j.pestbp.2019.01.009](https://doi.org/10.1016/j.pestbp.2019.01.009) | [30857631](https://www.ncbi.nlm.nih.gov/pubmed/30857631) | metadata signals extractable PD data (EC50) |
| `Nagata_1995.pdf` | Nagata T, Morphometry in anatomy: image analysis…, Italian journal of anatomy… (1995) | pd | 4 | not captured | [11322340](https://www.ncbi.nlm.nih.gov/pubmed/11322340) | metadata signals extractable PD data (EMAX) |
| `Petersen_2020.pdf` | Petersen LM et al., The Ionophores CCCP and Gramicidin but…, Cells (2020) | pd | 4 | [10.3390/cells9102335](https://doi.org/10.3390/cells9102335) | [33096791](https://www.ncbi.nlm.nih.gov/pubmed/33096791) | metadata signals extractable PD data (IC50) |
| `Sun_2021.pdf` | Sun YY et al., Several natural products isolated from…, Environmental science and p… (2021) | pd | 4 | [10.1007/s11356-020-11755-3](https://doi.org/10.1007/s11356-020-11755-3) | [33420683](https://www.ncbi.nlm.nih.gov/pubmed/33420683) | metadata signals extractable PD data (EC50) |
| `Tao_2021.pdf` | Tao X et al., Antifungal Activity and Biological Char…, Plant disease (2021) | pd | 4 | [10.1094/PDIS-08-20-1821-RE](https://doi.org/10.1094/PDIS-08-20-1821-RE) | [33404275](https://www.ncbi.nlm.nih.gov/pubmed/33404275) | metadata signals extractable PD data (EC50) |
| `Wang_2025.pdf` | Wang C et al., A Novel Field Resistance Mechanism: Two…, Journal of agricultural and… (2025) | pd | 4 | [10.1021/acs.jafc.5c04566](https://doi.org/10.1021/acs.jafc.5c04566) | [40667854](https://www.ncbi.nlm.nih.gov/pubmed/40667854) | metadata signals extractable PD data (EC50) |
| `Heikal_2009.pdf` | Heikal A et al., The stabilisation of purified, reconsti…, Cryobiology (2009) | pgx | 7 | [10.1016/j.cryobiol.2008.10.125](https://doi.org/10.1016/j.cryobiol.2008.10.125) | [18983838](https://www.ncbi.nlm.nih.gov/pubmed/18983838) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Li_2017.pdf` | Li Z et al., Analysis of the Variables Influencing V…, Therapeutic drug monitoring (2017) | pgx | 5 | [10.1097/FTD.0000000000000424](https://doi.org/10.1097/FTD.0000000000000424) | [28604475](https://www.ncbi.nlm.nih.gov/pubmed/28604475) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-04T15:41:57.580100+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelwahid_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of lysophosphatidic acid analogues, where glycerol is only a structural component of the molecule, not the subject drug for pharmacokinetic analysis. |
| PD | Abdelwahid_2023 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/agonist EC50 values for LPA analogues, not a pharmacodynamic exposure-response or dose-response relationship for glycerol. |
| PGx | Adolfsen_1976 | not_relevant | 0 | 0 | The paper describes the biochemical activation of an enzyme using glycerol as a reagent, not the pharmacokinetics or pharmacodynamics of glycerol as a drug in relation to genetic variants. |
| popPK | Anil_2014 | irrelevant | 0 | 0 | The study measures serum glycerol levels as a biomarker of lipolysis in mice, but does not report pharmacokinetic parameters (CL, V, etc.) for glycerol. |
| PD | Anil_2014 | not_relevant | 3 | 2 | The paper reports an in vitro EC50 for the drug CNX-010-49 and qualitative changes in serum glycerol levels in mice, but it does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Antoniadou_2011 | irrelevant | 0 | 0 | The paper describes a photoactivated fuel cell using glycerol as a fuel source, not a pharmacokinetic study. |
| PGx | Apaya_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of doxorubicin and dLGG in breast cancer, not the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Arad_1992 | irrelevant | 0 | 0 | Glycerol is used as a tracer (3H-glycerol) to measure VLDL triglyceride metabolism, not as the subject drug for PK parameter estimation. |
| popPK | Arulrajah_2025 | irrelevant | 0 | 0 | The study focuses on microbial bioprocess engineering and single-cell behavior in E. coli, using glycerol only as a carbon source, not as a subject drug for pharmacokinetic analysis. |
| popPK | Asher_2023 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Asher_2023 | not_relevant | 0 | 0 | The paper focuses on endocannabinoid signaling in neurons and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Baird_2010 | irrelevant | 0 | 0 | The study investigates the toxicity of conazole fungicides in algae and mentions glycerol only as a cellular osmolyte, not as a subject drug for pharmacokinetic analysis. |
| PD | Baird_2010 | not_relevant | 0 | 0 | The paper reports toxicity (EC50) of conazole fungicides on algae and mentions glycerol only as an osmolyte that is not inhibited, providing no exposure-response or dose-response data for glycerol itself. |
| popPK | Bastiaens_1992 | irrelevant | 0 | 0 | The study is a biophysical fluorescence analysis of lipoamide dehydrogenase in a glycerol solution, not a pharmacokinetic study of glycerol. |
| PGx | Bellerose_2019 | not_relevant | 0 | 0 | The paper investigates how bacterial gene variants (glpK) affect the efficacy of TB drugs, not how human gene variants affect the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Beltz_1985 | irrelevant | 1 | 0 | Glycerol is used only as a radiolabeled precursor for VLDL triglycerides, and the study reports lipoprotein kinetics rather than glycerol pharmacokinetic parameters. |
| PGx | Bidart_2023 | not_relevant | 0 | 0 | The paper investigates bacterial carbohydrate metabolism and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Bird_1984 | irrelevant | 2 | 0 | The study uses radioactive glycerol as a tracer to model triacylglycerol secretion, not to characterize the pharmacokinetic disposition parameters (CL, V, etc.) of glycerol itself. |
| PGx | Boadi_2005 | not_relevant | 0 | 0 | The paper evaluates the efficacy of a microbicide (CAP) in a non-human primate model and does not report any pharmacogenomic effects on the PK or PD of glycerol. |
| PGx | Bocca_2018 | not_relevant | 0 | 0 | The paper reports a metabolomic signature associated with OPA1 variants, not the pharmacokinetics or pharmacodynamics of glycerol. |
| PGx | Bossie_1992 | not_relevant | 0 | 0 | The paper studies yeast nuclear protein localization mutants and uses glycerol as a carbon source for growth, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Bournique_1999 | not_relevant | 0 | 0 | The paper discusses glycerol as an incubation factor affecting CYP1A2 activity in vitro, not as a drug subject to pharmacogenomic analysis. |
| PGx | Bowden_1985 | not_relevant | 0 | 0 | The paper investigates the lipolytic effects of human growth hormone preparations on glycerol release, not the pharmacokinetics or pharmacodynamics of glycerol itself, and contains no pharmacogenomic data. |
| PGx | Bozadjieva-Kramer_2024 | not_relevant | 0 | 0 | The paper studies the role of FGF15 in metabolism and reports no pharmacokinetic or pharmacodynamic effects of gene variants on glycerol. |
| PGx | Briquet-Laugier_1994 | not_relevant | 0 | 0 | The paper investigates genetic effects on fat storage and enzyme activity in adipocytes, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PGx | Brisson_2010 | not_relevant | 0 | 0 | The paper discusses the pharmacodynamic response of fibrates in patients with glycerol kinase deficiency, but does not report pharmacokinetic or pharmacodynamic parameters of glycerol itself. |
| popPK | Brulez_1999 | irrelevant | 0 | 0 | The study is an in-vitro immunological assessment of peritoneal dialysis fluid biocompatibility where glycerol is used solely as an osmotic stress agent, not as a subject drug for pharmacokinetic analysis. |
| popPK | Burke_1995 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on cytosolic phospholipase A2 where glycerol is only mentioned as a stabilizer, not as a subject drug for pharmacokinetic analysis. |
| PD | Burke_1995 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and cooperativity of cPLA2, not a pharmacodynamic exposure-response relationship for glycerol. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of bacterial antibiotic efflux pump inhibitors (BDM91531) and does not involve glycerol or its pharmacokinetics. |
| popPK | Cen_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and efficacy of hydroxypyridinones for treating rhabdomyolysis, using glycerol only as an agent to induce the disease model, not as the subject of pharmacokinetic analysis. |
| PD | Cen_2024 | not_relevant | 0 | 0 | The paper reports in vitro EC50 for a hydroxypyridinone compound (6k) and in vivo efficacy in a glycerol-induced model, but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Cheng_2024 | not_relevant | 0 | 0 | The paper focuses on toxicological hormesis and mixture effects of personal care product components, not on the pharmacokinetic or pharmacodynamic modeling of glycerol. |
| PD | Ciganović_2023 | not_relevant | 0 | 0 | The paper focuses on the optimization of extraction conditions for Echinacea purpurea using glycerol and reports in vitro antioxidant and enzyme inhibition assays (e.g., IC50 for hyaluronidase), but does not report a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response relationship for glycerol itself. |
| PGx | Cooper_2015 | not_relevant | 0 | 0 | The paper investigates the metabolic role of the GPAT4 enzyme in fatty acid oxidation and obesity, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Cox_1997 | irrelevant | 0 | 0 | The study investigates the effects of adenosine A1 agonists on lipolysis, using glycerol release as a metabolic marker rather than studying the pharmacokinetics of glycerol itself. |
| popPK | Coëffier_1986 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of PAF-acether (a glycerol derivative) on platelets and bronchoconstriction in guinea pigs, not the pharmacokinetics of glycerol itself. |
| PD | Crampes_1986 | not_relevant | 5 | 2 | The paper describes a dose-response relationship for epinephrine on glycerol release in isolated fat cells, but the provided text only contains qualitative descriptions and p-values without specific numeric concentration-effect data or derived PD parameters (like EC50 or Emax). |
| popPK | Crawford_1983 | irrelevant | 0 | 0 | The study is an in-vitro metabolic flux analysis of rat hepatocytes where glycerol is used as a substrate, not a pharmacokinetic study of glycerol disposition. |
| PGx | Crivaro_2023 | not_relevant | 0 | 0 | The paper studies lipid metabolism (glycerol release) in Gaucher disease adipocytes, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Cuevas_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of delphinidin-3-glucoside on glioblastoma cells and does not report pharmacokinetic parameters for glycerol. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Cui_2024 | not_relevant | 0 | 0 | The paper investigates the antifungal activity of citral against Phytophthora capsici, not the pharmacodynamics of glycerol. |
| popPK | Cui_2026 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Cui_2026 | not_relevant | 0 | 0 | The paper focuses on the identification and bactericide control of a plant disease (Peach Bacterial Shot Hole) and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Dabdoub_2024 | irrelevant | 0 | 0 | The study is an in-vitro transcriptomic analysis of e-cigarette components (including vegetable glycerin) on pre-osteoblasts and does not report pharmacokinetic parameters for glycerol. |
| PD | Dabdoub_2024 | not_relevant | 2 | 1 | The study mentions an EC50 for cell cycle alteration but focuses on transcriptomic profiling and qualitative pathway analysis without providing numeric PD parameters or a quantitative dose-response curve for glycerol. |
| PGx | Dabrowski_2002 | not_relevant | 0 | 0 | The paper investigates the binding mechanism of pyrene in CYP3A4 and does not report pharmacogenomic effects on the PK/PD of glycerol. |
| PD | Damon_1930 | not_relevant | 0 | 0 | The paper describes the membrane potential (P.D.) of Valonia cells in response to sea water concentration, using glycerol only as an osmotic agent to maintain isotonicity, and does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| PGx | De_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and gene expression in Miscanthus grass under drought stress, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | The paper is a mycological study on fungicide resistance in a plant pathogen, not a pharmacokinetic study of glycerol. |
| PD | Deng_2023 | not_relevant | 0 | 0 | The paper reports EC50 values for fludioxonil (a fungicide) on a fungal pathogen, not a pharmacodynamic relationship for glycerol in a biological system. |
| PGx | Di_1993 | not_relevant | 0 | 0 | The paper investigates the physical polymorphism of a diacylglycerol lipid, not the pharmacokinetics or pharmacodynamics of glycerol in relation to genetic variants. |
| popPK | Dooley_1980 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic investigation of cell permeation kinetics, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for a biological system. |
| popPK | Druml_1998 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of intravenous lipid emulsions (triglycerides), and glycerol is only measured as a byproduct of hydrolysis without specific PK parameter modeling for glycerol itself. |
| PD | Du_2021 | not_relevant | 0 | 0 | The paper identifies active ingredients in Coix seed using chemometrics and grey relational analysis but does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for glycerol. |
| PGx | Duarte-Andrade_2019 | not_relevant | 0 | 0 | The paper reports a metabolic association between a BRAF mutation and glycerol levels in tumor tissue, not a pharmacokinetic or pharmacodynamic effect of a drug. |
| popPK | Dubey_2026 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of amoxicillin-clavulanic acid against E. coli, not the pharmacokinetics of glycerol. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for cancer therapy and does not contain pharmacokinetic data for glycerol. |
| PD | Eljack_2022 | not_relevant | 0 | 0 | The paper is a review on nanoparticle design for chemoresistance reversal and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Erbiai_2023 | irrelevant | 0 | 0 | The paper is a chemical characterization of mushrooms where glycerol is identified as a static chemical component, not a pharmacokinetic study. |
| PD | Erbiai_2023 | not_relevant | 0 | 0 | The paper reports the chemical composition of mushrooms (including glycerol content) and antioxidant EC50 values for whole extracts, but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | FARQUHAR_1965 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PGx | Fawdry_2022 | not_relevant | 0 | 0 | The paper describes a case of fructose-1,6-bisphosphatase deficiency where glycerol ingestion is contraindicated due to toxicity, but it does not report pharmacokinetic or pharmacodynamic parameters of glycerol as a drug. |
| PD | Forestrania_2022 | not_relevant | 0 | 0 | The paper reports the isolation and structural characterization of natural products, including glycerol esters, and provides a single IC50 value for lupeol, but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| PGx | Freeman_2025 | not_relevant | 0 | 0 | The paper studies bacterial metabolism and virulence of Listeria monocytogenes, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of glycerol as a drug. |
| PD | Frezza_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for plant extracts and isolated compounds (e.g., salvigenin) against parasites, but does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | Gao_2015 | not_relevant | 0 | 0 | The paper studies chaperonin mutations in archaea for cold adaptation and does not involve glycerol pharmacokinetics or pharmacodynamics. |
| popPK | Garcia_2026 | irrelevant | 0 | 0 | The paper investigates antibiotic and phage efficacy against E. coli in a urinary tract infection model and does not report pharmacokinetic parameters for glycerol. |
| PGx | Garrigós-Martínez_2021 | not_relevant | 0 | 0 | The paper describes the biotechnological production of a CYP2C9 biocatalyst in yeast, not the pharmacokinetics or pharmacodynamics of glycerol in humans. |
| popPK | Gaspar_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fexofenadine, not glycerol. |
| PD | Gaspar_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for fexofenadine, not glycerol, and focuses on exposure (AUC) rather than pharmacodynamic effects. |
| PGx | Gautherot_2012 | not_relevant | 0 | 0 | The paper investigates the rescue of a trafficking-defective transporter mutant using chaperones, not the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Gavriil_2019 | irrelevant | 0 | 0 | The study investigates the effects of a plant extract supplement on platelet-activating factor (PAF) metabolism and aggregation, not the pharmacokinetics of glycerol. |
| PD | Gavriil_2019 | not_relevant | 0 | 0 | The study investigates the effect of a plant extract supplement on platelet aggregation and PAF metabolism, not glycerol, and does not report any exposure-response or dose-response relationship for glycerol. |
| popPK | Ginsberg_1986 | irrelevant | 0 | 0 | The study investigates lipoprotein metabolism (apo B, VLDL, LDL) using [3H]glycerol as a tracer for triglyceride synthesis, not the pharmacokinetics of glycerol itself. |
| popPK | González-Sales_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for imetelstat, not glycerol. |
| PD | González-Sales_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for imetelstat, not glycerol, and contains no pharmacodynamic or exposure-response analysis. |
| PD | González_1978 | not_relevant | 4 | 2 | The paper describes a dose-response relationship for epinephrine on glycerol release but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative curve in the text. |
| popPK | Goodrich_2020 | irrelevant | 0 | 0 | The study is an epidemiological analysis of DNA methylation and metabolomics associations in children, not a pharmacokinetic study of glycerol. |
| popPK | Gross_1988 | irrelevant | 0 | 0 | The study investigates the turnover of lung surfactant (DSPC) in mice using [3H]glycerol as a tracer, not the pharmacokinetics of glycerol itself. |
| popPK | Hall_1976 | relevant | 8 | 2 | The study uses a four-compartment model to calculate glycerol kinetics in dogs, but the evidence only provides metabolic flux percentages (e.g., % of glucose carbon from glycerol) rather than explicit PK parameters like clearance or volume. |
| PD | Hamann_2022 | not_relevant | 0 | 0 | The paper reports antimicrobial IC50 values for green tea extract, not pharmacodynamic parameters for glycerol, which is used only as a plasticizer in the film formulation. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The paper is a study on fungicide resistance in a fungus and mentions glycerol only as a cellular metabolite content, not as a subject drug for pharmacokinetic analysis. |
| PD | Han_2017 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for a pathogen and mentions glycerol content in resistant mutants, but does not report a pharmacodynamic exposure-response relationship for glycerol as a drug. |
| PGx | Hansel_2025 | not_relevant | 0 | 0 | The paper describes a genetic disorder (glycerol kinase deficiency) affecting endogenous glycerol metabolism, not the pharmacokinetics or pharmacodynamics of glycerol as an administered drug. |
| PGx | Heikal_2009 | not_relevant | 0 | 0 | The paper describes the stabilization of P-glycoprotein using disaccharides and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Hoang_2023 | irrelevant | 0 | 0 | The paper is a bioprocess engineering study on L-phenylalanine production in E. coli where glycerol is used as a carbon source, not as a drug subject for pharmacokinetic analysis. |
| popPK | Hollande_1993 | irrelevant | 0 | 0 | The study investigates histamine release from rabbit mucosal cells and does not report pharmacokinetic parameters for glycerol. |
| PD | Hollande_1993 | not_relevant | 0 | 0 | The paper reports dose-response relationships for gastrin, CCK, and carbachol on histamine release, but does not report any pharmacodynamic data for glycerol. |
| popPK | Hou_2019 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Hou_2019 | not_relevant | 0 | 0 | The paper studies the effect of fluazinam on a fungus, not the pharmacodynamics of glycerol. |
| PD | Huamán-Castilla_2024 | not_relevant | 0 | 0 | The paper describes a chemical extraction process for polyphenols using glycerol as a solvent and reports extraction yields and antioxidant assay results (IC50 of the extract), but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Hughes_2026 | irrelevant | 0 | 0 | The paper describes novel imaging probes and modalities (FLIM, PLIM, FluoRaman) and does not report pharmacokinetic parameters for glycerol. |
| PD | Hughes_2026 | not_relevant | 0 | 0 | The paper focuses on the development of imaging probes and multimodal imaging techniques (FLIM, PLIM, FluoRaman) and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Jana_2026 | irrelevant | 0 | 0 | The paper describes the antifungal activity and mechanism of a bacterial metabolite (SM06) and does not study the pharmacokinetics of glycerol. |
| popPK | Janus_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the peptide NX210c, not glycerol (which is only mentioned as a preservative in sample storage). |
| popPK | Jeremy_1987 | irrelevant | 0 | 0 | The study investigates prostanoid synthesis in rat urinary bladder tissue and does not report pharmacokinetic parameters for glycerol. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and stability of an enrofloxacin-colistin combination, not the pharmacokinetics of glycerol. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation, stability, and solubility of an enrofloxacin-colistin injection using 1,2-propanediol (not glycerol) and reports efficacy/toxicity data without any pharmacokinetic or pharmacodynamic modeling. |
| PGx | Jiménez_2025 | not_relevant | 0 | 0 | The paper studies plant physiology (rice roots) and the role of glycerol esters in oxygen diffusion, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Jin_2025 | not_relevant | 0 | 0 | The paper investigates the toxicity of acrolein (a degradation product) and the role of the TRPA1 gene in pulmonary and vascular effects, not the pharmacokinetics or pharmacodynamics of glycerol itself. |
| popPK | Johannsen_2023 | irrelevant | 0 | 0 | The study measures cerebral glycerol levels as a biomarker of neurological injury in a pig model of cardiac arrest, not as a pharmacokinetic parameter for glycerol dosing. |
| PD | Johny_2019 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of a novel phenolic lipid (monoacylglycerol), not glycerol itself, and provides only static IC50 values for cytotoxicity without a dose-response curve or PK/PD modeling. |
| popPK | Kadouch_2024 | irrelevant | 2 | 0 | The study uses glycerol as a biomarker for lipolysis during exercise rather than dosing it to characterize its pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Karamanou_2020 | not_relevant | 0 | 0 | The paper studies fungicide resistance in yeast using metabolomics, where glycerol is identified as a metabolic biomarker of toxicity, not as a drug subject to pharmacogenomic PK/PD analysis. |
| popPK | Khalaf_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and release kinetics of Metoprolol, not the pharmacokinetics of glycerol. |
| PD | Khalaf_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation development and in vitro release kinetics of a Metoprolol gastroretentive film; it does not report any pharmacodynamic or exposure-response data for glycerol or any other drug. |
| popPK | King_2025 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study on antibiotic resistance evolution in E. coli using cefotaxime, and does not report pharmacokinetic parameters for glycerol. |
| PGx | Kodali_1990 | not_relevant | 0 | 0 | The paper describes the physical chemistry and polymorphism of synthetic diacylglycerols, not the pharmacokinetics or pharmacodynamics of glycerol or any drug. |
| popPK | Kokkaliari_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipolysis signal transduction where glycerol is measured as a product of fat breakdown, not as a subject drug for pharmacokinetic analysis. |
| PD | Kokkaliari_1994 | not_relevant | 0 | 0 | The paper reports EC50 values for cyclic AMP (a signaling molecule) on glycerol release, not for glycerol itself, and does not describe a pharmacodynamic model for glycerol. |
| popPK | Kollau_2007 | irrelevant | 0 | 0 | The study investigates the in-vitro bioactivation mechanism of nitroglycerin (GTN) and does not report pharmacokinetic parameters for glycerol. |
| popPK | Kozawa_1992 | irrelevant | 0 | 0 | The paper describes in vitro signaling mechanisms in osteoblast-like cells and does not report pharmacokinetic parameters for glycerol. |
| PD | Kozawa_1992 | not_relevant | 0 | 0 | The paper reports dose-response data for prostaglandin E2 (PGE2), not glycerol. |
| PGx | Kumar_2018 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering of Bacillus subtilis for protein production, not human pharmacogenomics or the PK/PD of glycerol as a drug. |
| popPK | Kunz_2026 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic comparison of antibiotics (aztreonam-avibactam vs aztreonam-ceftazidime-avibactam) against bacteria, and glycerol is only mentioned as a cryoprotectant for storing bacterial isolates. |
| PD | Kypson_1976 | not_relevant | 1 | 0 | The paper studies the effects of uridine and inosine on glycerol release, not the pharmacodynamics of glycerol itself, and provides no numeric PD parameters for glycerol. |
| PD | Lakshminarayana_2023 | not_relevant | 0 | 0 | The paper studies the effects of Abutilon indicum extract, not glycerol; glycerol is only mentioned as a marker for lipolysis, and no exposure-response or dose-response relationship for glycerol is reported. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for heptanoate (a metabolite of triheptanoin), not for glycerol, which is only mentioned as the backbone of the triheptanoin molecule. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on Valproic Acid, not glycerol; glycerol is only mentioned as a concomitant medication. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study on antibiotic resistance in E. coli and does not involve glycerol pharmacokinetics. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on the evolution of antibiotic resistance in E. coli and does not report pharmacodynamic or exposure-response relationships for glycerol. |
| PGx | Lin_2026 | not_relevant | 0 | 0 | The paper studies the effects of a dietary mushroom supplement on fish survival and metabolism, not the pharmacogenomics of glycerol. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper investigates SNPs in Mycobacterium neoaurum for steroid production, not human pharmacogenomics or the PK/PD of glycerol. |
| PD | Liu_2017 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for antiviral activity and inhibition percentages at a single concentration, but does not provide a dose-response curve, Emax, or any pharmacokinetic/pharmacodynamic modeling parameters. |
| PGx | Lv_2024 | not_relevant | 0 | 0 | The paper investigates the effect of SGLT1/2 inhibition on cerebral small vessel disease and circulating metabolites, not the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Macário_2018 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Macário_2018 | not_relevant | 0 | 0 | The paper focuses on cholinium-based deep eutectic solvents and does not report pharmacodynamic or exposure-response data for glycerol. |
| popPK | Madawala_2011 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antioxidant activity of 1,3-diacylglycerol conjugates, not the pharmacokinetics of glycerol. |
| PD | Madawala_2011 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (DPPH assay) for synthetic glycerol conjugates, not a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Mamo_2024 | irrelevant | 0 | 0 | The study investigates the cryopreservation of mesenchymal stem cells using glycerol as a cryoprotectant, not the pharmacokinetics of glycerol as a drug. |
| PGx | Manzke_2018 | not_relevant | 0 | 0 | The paper studies the efficacy of energy supplementation (including glycerin) on growth performance in pigs, not the pharmacokinetics or pharmacodynamics of glycerin as a drug, nor does it report pharmacogenomic effects. |
| PD | Martikainen_2012 | not_relevant | 3 | 2 | The paper reports a single IC50 value for glycerol as a CYP2E1 inhibitor, which is a static enzyme kinetics parameter, not a pharmacodynamic exposure-response or dose-response relationship for the drug's effect in a biological system. |
| PGx | Martini_2024 | not_relevant | 0 | 0 | The paper investigates artemisinin resistance in Mycobacterium tuberculosis linked to glycerol metabolism genes, not the pharmacokinetics or pharmacodynamics of glycerol itself. |
| popPK | Masocha_2025 | irrelevant | 0 | 0 | The study focuses on in silico docking and in vitro inhibition of MAGL by triterpenes, not the pharmacokinetics of glycerol. |
| PD | Masocha_2025 | not_relevant | 0 | 0 | The paper focuses on in silico docking and molecular dynamics simulations of triterpenes, not glycerol, and does not report pharmacodynamic exposure-response relationships or numeric PD parameters for glycerol. |
| PGx | Masud_2022 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of pyrvinium, not glycerol. |
| PD | Matchide_2023 | not_relevant | 0 | 0 | The paper reports the isolation and structural characterization of a new glycerol derivative (dryoptkirbioside) and provides IC50/MIC values for crude fractions and other compounds, but it does not report a pharmacodynamic (exposure-response) model or dose-response curve for glycerol itself. |
| popPK | McCallin_2026 | irrelevant | 0 | 0 | The paper describes a clinical case series on phage therapy and FMT for urinary tract infections and contains no pharmacokinetic data for glycerol. |
| PD | McCallin_2026 | not_relevant | 0 | 0 | The paper is a clinical case series on phage therapy and FMT for UTIs; it does not report a pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | McMurrough_1996 | not_relevant | 0 | 0 | The paper analyzes DPD polymorphism and its effect on DPD enzyme activity, not the pharmacokinetics or pharmacodynamics of glycerol (which is used only as a storage buffer). |
| PGx | Mersmann_1989 | not_relevant | 0 | 0 | The study compares obese and lean pig phenotypes, not specific gene variants, and glycerol is a metabolite/analyte, not the drug of interest. |
| popPK | Messah_2026 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of antidiabetic and antioxidant properties of plant compounds, containing no pharmacokinetic data for glycerol. |
| PD | Messah_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for compounds from Pithecellobium dulce, not a pharmacodynamic or exposure-response relationship for glycerol. |
| popPK | Ming_2026 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Ming_2026 | not_relevant | 0 | 0 | The paper focuses on difelikefalin acetate, not glycerol, and does not report PD parameters for glycerol. |
| popPK | Mittendorfer_2003 | irrelevant | 0 | 0 | The study uses deuterated glycerol as a tracer to measure VLDL-triacylglycerol kinetics, not to determine the pharmacokinetic parameters of glycerol itself. |
| PGx | Modlin_2026 | not_relevant | 0 | 0 | The paper discusses bacterial genetics and glycerol utilization in M. tuberculosis, not human pharmacogenomics or drug PK/PD. |
| PD | Mohamed_2014 | not_relevant | 0 | 0 | The paper reports the isolation and structure elucidation of a new glycerol derivative (urgineaglyceride A) and provides IC50 values for other isolated compounds (flavonoids/sterols), but it does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| PGx | Monfort_1993 | not_relevant | 0 | 0 | The paper reports on assisted reproduction in Eld's deer and uses glycerol as a cryoprotectant, but does not investigate pharmacogenomic effects on the PK or PD of glycerol. |
| popPK | Monteleone_2013 | irrelevant | 0 | 0 | The study models the pharmacokinetics of glycerol phenylbutyrate (a prodrug for phenylbutyric acid), not glycerol itself, and glycerol is not the subject drug. |
| popPK | Munhall_2026 | irrelevant | 0 | 0 | The study investigates cilastatin sodium in a pig crush syndrome model and does not report pharmacokinetic parameters for glycerol. |
| PD | Munhall_2026 | not_relevant | 0 | 0 | The paper investigates the efficacy of cilastatin sodium, not glycerol, and reports no pharmacodynamic or exposure-response parameters for glycerol. |
| PGx | Muroya_2022 | not_relevant | 0 | 0 | The paper studies the effects of maternal nutrient restriction on fetal liver metabolism and gene expression, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Müller_1997 | irrelevant | 0 | 0 | The study investigates the insulin-mimetic activity of yeast-derived peptides in rat cells, where glycerol is only mentioned as a substrate for an enzyme (glycerol-3-phosphate acyltransferase), not as the subject drug for PK analysis. |
| PD | Müller_1997 | not_relevant | 0 | 0 | The paper reports PD parameters for a yeast-derived peptide (PIG-P), not for glycerol; glycerol is only mentioned as a substrate for an enzyme activity assay. |
| popPK | Nagata_1995 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Nagata_1995 | not_relevant | 0 | 0 | The paper discusses morphometry and image analysis in anatomy and radioautography, with no mention of glycerol or pharmacodynamic modeling. |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a beta-adrenoceptor agonist on brown adipose tissue, using glycerol release as a functional biomarker rather than studying glycerol's pharmacokinetics. |
| PD | Oruganti_2023 | not_relevant | 0 | 0 | The paper studies piperine and EGCG, not glycerol; glycerol is only mentioned as a released metabolite, and no exposure-response or dose-response PD model for glycerol is reported. |
| PGx | Orzechowski_2012 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of ivermectin, not glycerol, and glycerol is only mentioned as a vehicle component. |
| PD | Outlaw_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for GPAT inhibitors, not a pharmacodynamic exposure-response or dose-response relationship for the drug glycerol. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cefepime, not glycerol. |
| PGx | Pan_2022 | not_relevant | 0 | 0 | The paper reports the crystal structure of a multi-drug exporter protein and contains no pharmacogenomic data or PK/PD parameters for glycerol. |
| popPK | Panel_2026 | irrelevant | 0 | 0 | The paper focuses on the identification of small-molecule agonists for neurotensin receptors and does not involve glycerol or its pharmacokinetics. |
| PD | Panel_2026 | not_relevant | 0 | 0 | The paper focuses on neurotensin receptor agonists and does not report any pharmacodynamic or exposure-response data for glycerol. |
| PGx | Parson_2025 | not_relevant | 0 | 0 | The paper investigates muscle regeneration dynamics in a UCP-1 knockout mouse model and does not involve glycerol or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Patterson_2002 | irrelevant | 1 | 0 | Glycerol is used as a tracer to measure VLDL-triglyceride kinetics, not as the subject drug for which PK parameters are reported. |
| popPK | Perales_2017 | irrelevant | 0 | 0 | The study focuses on the ecotoxicity and QSAR modeling of glycerol ethers in Daphnia magna, not on the pharmacokinetic disposition parameters of glycerol itself. |
| PD | Perales_2017 | not_relevant | 0 | 0 | The provided text contains no abstract or content, making it impossible to verify any pharmacodynamic or exposure-response data for glycerol. |
| PD | Petersen_2020 | not_relevant | 0 | 0 | The paper investigates the inhibition of aquaglyceroporins by ionophores (CCCP, Gramicidin, Nigericin), not the pharmacodynamics of glycerol itself. |
| popPK | Pinho_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of a gold-based anticancer complex (ST004), using glycerol only as a probe molecule to assess aquaglyceroporin 3 (AQP3) inhibition in vitro, not as the subject drug for PK parameter estimation. |
| PGx | Prochazka_1989 | not_relevant | 0 | 0 | The paper describes a genetic mutation affecting an endogenous enzyme (glycerol-3-phosphate dehydrogenase) in mice, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Pyle_2016 | irrelevant | 2 | 1 | The study measures glycerol rate of appearance (Ra) as a marker of lipolysis during an insulin clamp, not pharmacokinetic disposition parameters (CL, V, ka) for glycerol as a subject drug. |
| PGx | Qadri_2020 | not_relevant | 0 | 0 | The paper investigates the effect of the PNPLA3 variant on adipose tissue lipid composition and lipolysis, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PGx | Qiu_2025 | not_relevant | 0 | 0 | The paper investigates metabolic regulators in Alzheimer's disease and mentions a PPARD-glycerol interaction in microglia, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PGx | Qiu_2025_2 | not_relevant | 0 | 0 | The paper investigates metabolic regulators in Alzheimer's disease and mentions a PPARD-glycerol interaction in microglia, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Raig_2025 | irrelevant | 0 | 0 | The paper describes the development of LRRK2 kinase inhibitors for Parkinson's disease and contains no pharmacokinetic data for glycerol. |
| PD | Raig_2025 | not_relevant | 0 | 0 | The paper describes the discovery of LRRK2 kinase inhibitors and their structural binding mode, but does not report any pharmacodynamic or exposure-response analysis for glycerol. |
| popPK | Rajakulendran_2025 | irrelevant | 0 | 0 | The paper describes the isolation and antiparasitic activity of natural products from Pseudomonas sp., with glycerol mentioned only as a component of the growth medium, not as a subject drug for pharmacokinetic analysis. |
| PD | Rajakulendran_2025 | not_relevant | 0 | 0 | The paper reports the isolation and structural elucidation of natural products and their in-vitro antiparasitic activity (EC50), but does not report a pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | Rhodes_1987 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for detecting betaines in plant tissues (Zea mays) and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of glycerol as a drug. |
| popPK | Richie-Jannetta_2010 | irrelevant | 0 | 0 | The study investigates the structural determinants of prostaglandin glyceryl esters for calcium mobilization in cell lines, not the pharmacokinetics of glycerol. |
| PGx | Rump_2024 | not_relevant | 0 | 0 | The paper is a review on aquaporins in sepsis and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Salari_1992 | irrelevant | 0 | 0 | The study investigates the mechanism of action of ether-linked lipids on protein kinase C in cell lines, not the pharmacokinetics of glycerol. |
| PD | Sauer_1991 | not_relevant | 3 | 2 | The paper describes the kinetics of hemolysis (rate constants and absorbance ratios) in response to glycerol exposure, but it does not report a dose-response or exposure-response relationship (e.g., effect vs. glycerol concentration) with standard PD parameters like Emax or EC50 for the drug effect. |
| popPK | Scheideler_1991 | irrelevant | 0 | 0 | The paper describes the enzymology of sn-glycerol-3-phosphate acyltransferase in E. coli, not the pharmacokinetics of glycerol. |
| PD | Scheideler_1991 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics (Hill coefficients) of a bacterial enzyme (sn-glycerol-3-phosphate acyltransferase), not the pharmacodynamic response of a drug (glycerol) in a biological system. |
| popPK | Schoemaker_2002 | relevant | 8 | 0 | The study uses a PK/PD model to estimate glycerol rate of appearance (Ra) and concentration profiles in humans, but no specific numeric parameter values (CL, V, etc.) are provided in the text. |
| popPK | Schulz_2026 | irrelevant | 0 | 0 | The paper describes structure-based drug design for tyrosine kinase inhibitors in GIST and does not involve glycerol pharmacokinetics. |
| PD | Schulz_2026 | not_relevant | 0 | 0 | The paper focuses on kinase inhibitor design and structural biology for GIST, reporting IC50/GR50 values for small molecules, but contains no data, analysis, or mention of glycerol. |
| PGx | Sekizkardes_2020 | not_relevant | 0 | 0 | The paper investigates metabolic pathways in insulin resistance and does not report pharmacokinetic or pharmacodynamic effects of gene variants on glycerol as a drug. |
| popPK | Sendra_2025 | irrelevant | 0 | 0 | The paper is a developmental biology study on mouse heart lineage tracing and contains no pharmacokinetic data for glycerol. |
| PD | Sendra_2025 | not_relevant | 0 | 0 | The paper describes developmental biology and lineage tracing in mouse embryos and contains no pharmacodynamic or exposure-response data for glycerol. |
| PGx | Sevrioukova_2017 | not_relevant | 0 | 0 | The paper describes structural engineering of CYP3A4 and mentions glycerol as an active site ligand, but does not report pharmacogenomic effects on the PK or PD of glycerol as a drug. |
| PGx | Shah_2024 | not_relevant | 0 | 0 | The paper reports on a genetic disorder (Glycerol Kinase Deficiency) affecting endogenous glycerol metabolism, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PGx | Shah_2025 | not_relevant | 0 | 0 | The paper investigates the effect of gene variants on the function of the GABA transporter (hGAT-1) and the rescue of this function by glycerol, rather than the pharmacokinetics or pharmacodynamics of glycerol itself. |
| PGx | Shi_2014 | not_relevant | 0 | 0 | The paper investigates the role of glycerol in cellular energy metabolism and anchorage independence in cancer cells, not the pharmacokinetics or pharmacodynamics of glycerol as a drug modulated by genetic variants. |
| PGx | Shortt_2009 | not_relevant | 0 | 0 | The paper investigates the effect of amniotic membrane preparation methods (including glycerol cryopreservation) on cell expansion, not the pharmacokinetics or pharmacodynamics of glycerol as a drug in relation to genetic variants. |
| PGx | Simic_2025 | not_relevant | 0 | 0 | The paper investigates the role of glycerol-3-phosphate in mineral metabolism and FGF23 production in CKD, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | The study investigates the mechanism of 2-arachidonoyl glycerol (2-AG) production in cells, where glycerol is mentioned only as a hydrolysis product that does not influence the sensor signal, not as a subject drug for PK analysis. |
| PGx | Srivastava_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of olanzapine, not glycerol. |
| PGx | Styles_1997 | not_relevant | 0 | 0 | The paper investigates the clastogenic and aneugenic effects of tamoxifen and analogues, not the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| PD | Sun_2021 | not_relevant | 0 | 0 | The paper evaluates the antialgal activity of natural products from a red alga, not the pharmacodynamics of glycerol. |
| PGx | Sun_2022 | not_relevant | 0 | 0 | The paper investigates the effect of castration on beef marbling and liver metabolites (including glycerol 3-phosphate) in cattle, not the pharmacokinetics or pharmacodynamics of glycerol as a drug in humans. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The study investigates the antifungal activity of iprodione against Bipolaris maydis and mentions glycerin content as a physiological marker, but does not report pharmacokinetic parameters for glycerol. |
| PD | Sun_2023 | not_relevant | 0 | 0 | The paper investigates the fungicide iprodione, not glycerol; glycerol is only mentioned as a metabolite whose content increased in fungal mycelia after treatment. |
| PGx | Sweeney_2023 | not_relevant | 0 | 0 | The paper investigates the binding mechanism of CYP3A4 inhibitors and does not report pharmacogenomic effects on the PK/PD of glycerol. |
| popPK | Tajima_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of panipenem in rats, using glycerol only as an agent to induce nephritis (renal failure), not as the subject drug. |
| PD | Talla_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for DPPH radical scavenging activity of propolis extracts and isolated compounds, which is a biochemical assay, not a pharmacodynamic (exposure-response) relationship for the drug glycerol in a biological system. |
| popPK | Tao_2021 | irrelevant | 0 | 0 | The paper studies the antifungal activity of quinofumelin against a plant pathogen, and glycerol is only mentioned as a metabolic product of the fungus, not as a subject drug for PK analysis. |
| PD | Tao_2021 | not_relevant | 0 | 0 | The paper reports the EC50 of the fungicide quinofumelin, not glycerol, and only mentions that quinofumelin did not affect glycerol production without providing a dose-response relationship or numeric PD parameters for glycerol. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro evaluation of a herbal suppository containing Peperomia pellucida, with no mention of glycerol pharmacokinetics. |
| PD | Thanishka_2026 | not_relevant | 0 | 0 | The paper studies Peperomia pellucida, not glycerol, and reports in vitro IC50 values for a plant extract rather than a pharmacodynamic model for glycerol. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of Candesartan cilexetil against MRSA and does not involve glycerol pharmacokinetics. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA and does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | Thomas_2013 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of CYP3A4 by PPARα and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| PGx | Tröndle_2018 | not_relevant | 0 | 0 | The paper describes industrial bioprocess engineering for L-tryptophan production using glycerol as a substrate, not human pharmacogenomics or drug PK/PD. |
| popPK | Tschierske_2012 | irrelevant | 0 | 0 | The paper discusses liquid crystal self-assembly and tiling patterns, not the pharmacokinetics of glycerol. |
| popPK | Tsutsumi_2018 | irrelevant | 0 | 0 | The study focuses on gold nanoparticles for lectin detection and imaging, where glycerol is used only as a mounting medium for microscopy, not as a subject drug for pharmacokinetic analysis. |
| PD | Tsutsumi_2018 | not_relevant | 0 | 0 | The paper reports binding affinity (EC50) for gold nanoparticle-lectin interactions, not a pharmacodynamic exposure-response relationship for the drug glycerol (which is used only as a mounting medium). |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The study evaluates the phytochemical and pharmacological properties of a plant extract, not the pharmacokinetics of glycerol. |
| PD | Ullah_2026 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Fingerhuthia africana), not the specific drug glycerol, and reports no exposure-response or dose-response data for glycerol. |
| PGx | Verkman_2012 | not_relevant | 0 | 0 | The paper is a general review of aquaporins and their physiological roles, not a pharmacogenomic study of glycerol PK/PD parameters. |
| popPK | Visconti_1999 | irrelevant | 0 | 0 | The paper is a study on elasmobranch color change and hormone regulation, not a pharmacokinetic study of glycerol. |
| PD | Visconti_1999 | not_relevant | 0 | 0 | The paper reports dose-response data for hormones (alpha-MSH, prolactin) and other agents, but does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| popPK | Walker_2026 | irrelevant | 0 | 0 | The study evaluates antibiotic efficacy in a hollow fiber infection model and does not involve glycerol pharmacokinetics. |
| PD | Walker_2026 | not_relevant | 0 | 0 | The paper investigates ceftazidime/avibactam and amikacin, not glycerol, and does not report PD parameters for glycerol. |
| popPK | Wang_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flunarizine, not glycerol, which is only listed as an excipient in the formulation. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study investigates the metabolic effects of fungicides on a fungus using Biolog plates, where glycerol is merely a carbon substrate, not a drug subject to pharmacokinetic analysis. |
| PD | Wang_2016 | not_relevant | 0 | 0 | The paper reports EC50 values for fungicides (azoxystrobin and kresoxim-methyl) against a fungus, not a pharmacodynamic relationship for glycerol; glycerol is only mentioned as a carbon substrate metabolized by the fungus. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on a drug delivery formulation (lipid gel) and does not report pharmacokinetic parameters for glycerol itself. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper describes metabolic engineering in microorganisms (C. glutamicum and B. subtilis) using CRISPR base editing, not human pharmacogenomics or drug PK/PD. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper investigates the antifungal mechanism of Euphorbia factor L3 against Phytophthora capsici, where glycerol is merely a biomarker for cell membrane damage, not a subject of pharmacokinetic study. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper studies the fungicidal activity of Euphorbia factor L3 on Phytophthora capsici; glycerol is only mentioned as a measured biomarker of cell membrane damage, not as a drug with a pharmacodynamic exposure-response relationship. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates the antifungal mechanism of antofine on Phytophthora capsici, where glycerol is merely a measured physiological marker, not the subject of a pharmacokinetic analysis. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the antifungal mechanism of antofine on Phytophthora capsici; glycerol is mentioned only as a physiological marker whose content increased, not as a drug subject to pharmacodynamic modeling. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper discusses fludioxonil resistance in Fusarium graminearum, not glycerol pharmacodynamics. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper studies fungicide resistance mechanisms in a fungus and mentions glycerol only as a metabolic byproduct, not as a subject drug for pharmacokinetic analysis. |
| PD | Wei_2024 | not_relevant | 0 | 0 | The paper reports fungicide resistance mechanisms and EC50 values for fludioxonil, not a pharmacodynamic or exposure-response relationship for glycerol. |
| popPK | Westra_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax and cobicistat in AML patients, with no mention of glycerol. |
| PD | Westra_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic boosting of venetoclax by cobicistat and in vitro synergy, but does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| PD | Wieczorek_2018 | not_relevant | 0 | 0 | The paper reports IC50 values for a porphyrazine photosensitizer, not for glycerol, and does not describe a pharmacodynamic exposure-response relationship for glycerol. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper investigates the causal relationship between lipid metabolites (including glycerol derivatives) and bone mineral density using Mendelian Randomization, but does not report pharmacokinetic or pharmacodynamic parameters of glycerol as a drug. |
| PD | Wu_2024 | not_relevant | 3 | 2 | The paper reports a qualitative change in IC50 values for contaminants in the presence of glycerol monostearate but does not provide specific numeric PD parameters or a concentration-effect curve for glycerol itself. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper investigates the chemical stability and pharmacodynamic effects of EGCG formulations containing glycerol, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of glycerol. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper discusses plant biosynthesis of cardenolides and is unrelated to glycerol pharmacokinetics. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the enzymatic mechanism and biosynthetic pathway of cardenolides in plants, not on the pharmacodynamics or exposure-response relationships of glycerol. |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The paper investigates the causal relationship between metabolites (including glycerol) and endometriosis risk using Mendelian randomization, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PD | Yang_2007 | not_relevant | 0 | 0 | The paper reports the isolation of plant compounds and their antioxidant activity (IC50), but does not report a pharmacodynamic or exposure-response relationship for the drug glycerol. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study analyzes hearing threshold changes (audiometric response) after glycerol administration, not pharmacokinetic parameters like clearance or volume. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper describes the structural basis of a coronavirus protease inhibitor (CCF0058981) and contains no pharmacokinetic data for glycerol. |
| PD | Zeng_2026 | not_relevant | 0 | 0 | The paper reports structural crystallography and molecular dynamics simulations of a coronavirus protease inhibitor, containing no pharmacodynamic or exposure-response data for glycerol. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper reports the isolation and structural elucidation of new metabolites, including a glycerol bisester, and provides a single IC50 value for cytotoxicity, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug glycerol itself. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on protein engineering of glycosyltransferases in E. coli for biosynthesis, not the pharmacokinetics of glycerol. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on protein engineering and enzyme kinetics (Michaelis-Menten) for glycosyltransferases, not pharmacodynamics or exposure-response relationships for the drug glycerol. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Panax notoginseng saponins (ginsenosides Rb1, Rg1, R1) in beagle dogs, where glycerol is used only as an excipient in the capsule formulation, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 15:42 UTC</sub>
