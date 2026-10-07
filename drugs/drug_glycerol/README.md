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
| 2026-10-07 19:45 | 4:37 | 0/0/1 | 1/0/0 | 0/0/0 | 679,216/14,268 | einfracz / qwen3.8-27b | 71 | 19/75 | 66/5 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Beylot_1987_healthy adults and insulin-dependent diabetic patients](drugs/drug_glycerol/Glycerol_Beylot1987_healthy_adults_and_insulin_dependent_dia.md) | — | — (no model) | 0 | Beylot M et al., Determination of steady state and nonst…, Journal of lipid research (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Huber_1990_haemodynamic_effects](drugs/drug_glycerol/pd_Huber_1990_haemodynamic_effects.md) | haemodynamic effects ← glycerol trinitrate · direct Emax (saturable) effect | — | Huber T et al., Bioaequivalence of sublingual glycerol…, Arzneimittel-Forschung (1990) | — |

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
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Monteleone_2013.pdf` | Monteleone JP et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.92](https://doi.org/10.1002/jcph.92) | [23775211](https://pubmed.ncbi.nlm.nih.gov/23775211) | The study presents a population PK model for glycerol phenylbutyrate (the subject drug prodrug) and its metabolite, but the specific numeric parameter values are not displayed in the provided abstract/evidence. |
| `Beylot_1987.pdf` | Beylot M et al., Determination of steady state and nonst…, Journal of lipid research (1987) | popPK | 8 | not captured | [3585175](https://pubmed.ncbi.nlm.nih.gov/3585175) | The study reports quantitative pharmacokinetic parameters for glycerol, specifically the volume of distribution (0.306-0.308 L/kg) and appearance rates, in human subjects. |
| `Hall_1976.pdf` | Hall SE et al., Effects of age and fasting on gluconeog…, The American journal of phy… (1976) | popPK | 8 | [10.1152/ajplegacy.1976.230.2.362](https://doi.org/10.1152/ajplegacy.1976.230.2.362) | [1259014](https://pubmed.ncbi.nlm.nih.gov/1259014) | The study uses a compartmental model to analyze glycerol kinetics in dogs, but the provided text reports metabolic percentages rather than explicit pharmacokinetic parameter values (e.g., CL, V, k). |
| `Schoemaker_2002.pdf` | Schoemaker RC et al., Modeling the influence of growth hormon…, Journal of pharmacokinetics… (2002) | popPK | 8 | [10.1023/a:1019803924485](https://doi.org/10.1023/a:1019803924485) | [12361241](https://pubmed.ncbi.nlm.nih.gov/12361241) | The study models glycerol PK/PD in humans, but the abstract does not provide specific numeric parameter values (CL, V, etc.). |
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
| `Sun_2021.pdf` | Sun YY et al., Several natural products isolated from…, Environmental science and p… (2021) | pd | 4 | [10.1007/s11356-020-11755-3](https://doi.org/10.1007/s11356-020-11755-3) | [33420683](https://www.ncbi.nlm.nih.gov/pubmed/33420683) | metadata signals extractable PD data (EC50) |
| `Tao_2021.pdf` | Tao X et al., Antifungal Activity and Biological Char…, Plant disease (2021) | pd | 4 | [10.1094/PDIS-08-20-1821-RE](https://doi.org/10.1094/PDIS-08-20-1821-RE) | [33404275](https://www.ncbi.nlm.nih.gov/pubmed/33404275) | metadata signals extractable PD data (EC50) |
| `Wang_2025.pdf` | Wang C et al., A Novel Field Resistance Mechanism: Two…, Journal of agricultural and… (2025) | pd | 4 | [10.1021/acs.jafc.5c04566](https://doi.org/10.1021/acs.jafc.5c04566) | [40667854](https://www.ncbi.nlm.nih.gov/pubmed/40667854) | metadata signals extractable PD data (EC50) |
| `Heikal_2009.pdf` | Heikal A et al., The stabilisation of purified, reconsti…, Cryobiology (2009) | pgx | 7 | [10.1016/j.cryobiol.2008.10.125](https://doi.org/10.1016/j.cryobiol.2008.10.125) | [18983838](https://www.ncbi.nlm.nih.gov/pubmed/18983838) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Li_2017.pdf` | Li Z et al., Analysis of the Variables Influencing V…, Therapeutic drug monitoring (2017) | pgx | 5 | [10.1097/FTD.0000000000000424](https://doi.org/10.1097/FTD.0000000000000424) | [28604475](https://www.ncbi.nlm.nih.gov/pubmed/28604475) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-07T19:42:20.531973+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelwahid_2023 | irrelevant | 0 | 0 | The study investigates the synthesis and receptor binding affinity (EC50) of lysophosphatidic acid analogues, where glycerol is only mentioned as a structural component, not as the subject of a pharmacokinetic study. |
| PD | Abdelwahid_2023 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/agonist EC50 values for LPA analogues, not a pharmacodynamic exposure-response or dose-response relationship for glycerol. |
| PGx | Adolfsen_1976 | not_relevant | 0 | 0 | The paper describes the biochemical activation of an enzyme using glycerol as a reagent, not the pharmacokinetics or pharmacodynamics of glycerol in a biological system or the effect of genetic variants on glycerol metabolism. |
| popPK | Anil_2014 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of the 11β-HSD1 inhibitor CNX-010-49, using glycerol only as a serum biomarker for lipolysis rather than as a pharmacokinetic subject. |
| PD | Anil_2014 | not_relevant | 3 | 2 | The paper reports an in vitro EC50 for the drug CNX-010-49 and qualitative changes in serum glycerol levels in mice, but it does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Antoniadou_2011 | irrelevant | 0 | 0 | The paper describes a photoactivated fuel cell using glycerol as a fuel source, which is an electrochemical/energy application study, not a pharmacokinetic study. |
| PGx | Apaya_2020 | not_relevant | 0 | 0 | The paper investigates the mechanisms of a phytogalactolipid (dLGG) in breast cancer metastasis and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Arad_1992 | irrelevant | 0 | 0 | Glycerol is used as a tracer to measure VLDL triglyceride kinetics, not as the subject drug for PK parameter estimation. |
| popPK | Arulrajah_2025 | irrelevant | 0 | 0 | The paper focuses on microbial bioprocess engineering and single-cell behavior in *E. coli* where glycerol is used as a carbon source, not as a drug for pharmacokinetic analysis. |
| popPK | Asher_2023 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Asher_2023 | not_relevant | 0 | 0 | The paper focuses on endocannabinoid signaling in neurons and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Baird_2010 | irrelevant | 0 | 0 | The study is a toxicology investigation of conazole fungicides in algae, where glycerol is only mentioned as a cellular osmolyte, and no pharmacokinetic parameters are reported. |
| PD | Baird_2010 | not_relevant | 0 | 0 | The paper reports toxicity (EC50) of conazole fungicides on algae and mentions glycerol only as an osmolyte that is not inhibited, providing no exposure-response or dose-response data for glycerol itself. |
| popPK | Bastiaens_1992 | irrelevant | 0 | 0 | The study is a biophysical fluorescence analysis of lipoamide dehydrogenase, where glycerol is merely a solvent, and no pharmacokinetic parameters for glycerol are reported. |
| PGx | Bellerose_2019 | not_relevant | 0 | 0 | The paper examines how bacterial gene variants affect antibiotic efficacy (bacterial PD), not how human genetic variants alter the PK or PD of glycerol. |
| popPK | Beltz_1985 | irrelevant | 2 | 0 | Glycerol is used only as a tracer precursor for VLDL-TG synthesis, and no standalone glycerol PK parameters (CL, V, ka) are reported for the drug itself. |
| PGx | Bidart_2023 | not_relevant | 0 | 0 | The paper characterizes bacterial carbohydrate transport and metabolism, not the pharmacogenomics of drug disposition. |
| popPK | Bird_1984 | irrelevant | 2 | 1 | The study uses radioactive glycerol as a tracer to model triacylglycerol secretion, not to determine the pharmacokinetic parameters (CL, V) of glycerol itself. |
| PGx | Boadi_2005 | not_relevant | 0 | 0 | The paper evaluates the antiviral efficacy of a microbicide in macaques and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| PGx | Bocca_2018 | not_relevant | 0 | 0 | The paper analyzes endogenous plasma metabolites (including glycerol esters) in patients with OPA1 mutations, not the pharmacokinetics or pharmacodynamics of the drug glycerol. |
| PGx | Bossie_1992 | not_relevant | 0 | 0 | The paper describes yeast mutants affecting nuclear protein localization, with no mention of glycerol or pharmacokinetics/pharmacodynamics. |
| PGx | Bournique_1999 | not_relevant | 0 | 0 | The paper discusses statistical experimental designs for enzymology and lists glycerol as a buffer factor for CYP1A2, but does not report a pharmacogenomic effect of a gene variant on a PK/PD parameter of glycerol. |
| PGx | Bowden_1985 | not_relevant | 0 | 0 | The paper investigates the lipolytic activity of different human growth hormone preparations on glycerol release, not the pharmacokinetics or pharmacodynamics of glycerol as a drug modulated by genetic variants. |
| PGx | Bozadjieva-Kramer_2024 | not_relevant | 0 | 0 | The paper studies the role of intestinal FGF15 in metabolic parameters and does not report pharmacokinetic or pharmacodynamic effects of glycerol related to gene variants. |
| PGx | Briquet-Laugier_1994 | not_relevant | 0 | 0 | The paper reports genetic differences in lipid metabolism enzymes in cultured cells, but does not investigate pharmacokinetic or pharmacodynamic parameters of glycerol as a drug. |
| popPK | Brulez_1999 | irrelevant | 0 | 0 | The paper uses glycerol solely as an osmotic stressor in in-vitro leucocyte function tests, not as a subject drug for pharmacokinetic analysis. |
| popPK | Burke_1995 | irrelevant | 0 | 0 | The paper studies cytosolic phospholipase A2 enzyme kinetics where glycerol acts only as a modulator, not as a subject drug for pharmacokinetic analysis. |
| PD | Burke_1995 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and cooperativity of cPLA2, not a pharmacodynamic exposure-response relationship for glycerol. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of bacterial antibiotic efflux pump inhibitors (AcrB) and contains no pharmacokinetic data for glycerol. |
| popPK | Cen_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and efficacy of hydroxypyridinones for treating acute kidney injury, using glycerol only as an agent to induce the disease model, not as the subject of pharmacokinetic analysis. |
| PD | Cen_2024 | not_relevant | 0 | 0 | The paper reports in vitro EC50 for a hydroxypyridinone compound (6k) and in vivo efficacy in a glycerol-induced model, but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Cheng_2024 | not_relevant | 0 | 0 | The paper focuses on toxicological hormesis and mixture effects of personal care product components, not on the pharmacokinetic or pharmacodynamic modeling of glycerol. |
| PD | Ciganović_2023 | not_relevant | 0 | 0 | The paper focuses on the optimization of extraction conditions for Echinacea purpurea using glycerol and reports in vitro antioxidant and enzyme inhibition assays (e.g., IC50 for hyaluronidase), but does not report a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response relationship for glycerol itself. |
| PGx | Cooper_2015 | not_relevant | 0 | 0 | The paper investigates the physiological role of the GPAT4 enzyme in brown adipose tissue metabolism, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Coppack_2005 | irrelevant | 2 | 0 | The study reports adipose tissue capillary diffusion capacity and interstitial concentrations rather than standard systemic population PK parameters (CL, V, ka, t1/2) for glycerol. |
| popPK | Cox_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of adenosine A1 receptor agonists on lipolysis, using glycerol release as a biomarker of metabolic activity rather than as the subject drug for pharmacokinetic analysis. |
| popPK | Coëffier_1986 | irrelevant | 0 | 0 | The study investigates the pharmacological activity of PAF-acether and analogues on platelets in guinea pigs; glycerol is merely part of the chemical structure of the drug, not the subject of a pharmacokinetic study. |
| PD | Crampes_1986 | not_relevant | 5 | 2 | The paper describes a dose-response relationship for epinephrine on glycerol release in isolated fat cells, but the provided text only contains qualitative descriptions and p-values without specific numeric concentration-effect data or derived PD parameters (like EC50 or Emax). |
| popPK | Crawford_1983 | irrelevant | 0 | 0 | The paper is an in-vitro metabolic flux study of rat hepatocytes where glycerol is used as a substrate to measure pathway fluxes, not a pharmacokinetic study of glycerol disposition. |
| PGx | Crivaro_2023 | not_relevant | 0 | 0 | The paper describes alterations in lipid droplet metabolism and free glycerol release in a Gaucher disease in vitro model, but it does not report a pharmacokinetic or pharmacodynamic effect of a specific pharmacogenomic variant on a drug. |
| popPK | Cuevas_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic effects of delphinidin-3-glucoside (an anthocyanin) on glioblastoma cells and xenografts, not the pharmacokinetics of glycerol. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Cui_2024 | not_relevant | 0 | 0 | The paper investigates the antifungal activity of citral against Phytophthora capsici, not the pharmacodynamics of glycerol. |
| popPK | Cui_2026 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Cui_2026 | not_relevant | 0 | 0 | The paper focuses on the identification and bactericide control of a plant disease (Peach Bacterial Shot Hole) and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Dabdoub_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic transcriptomics experiment on pre-osteoblast cells and does not report pharmacokinetic parameters for glycerol. |
| PD | Dabdoub_2024 | not_relevant | 2 | 1 | The study mentions an EC50 for cell cycle alteration but focuses on transcriptomic profiling and qualitative pathway analysis without providing numeric PD parameters or a quantitative dose-response curve for glycerol. |
| PGx | Dabrowski_2002 | not_relevant | 0 | 0 | The paper investigates structural and kinetic mechanisms of pyrene binding to CYP3A4 and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| PD | Damon_1930 | not_relevant | 0 | 0 | The paper describes the membrane potential (P.D.) of Valonia cells in response to sea water concentration, using glycerol only as an osmotic agent to maintain isotonicity, and does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| PGx | De_2021 | not_relevant | 0 | 0 | The paper studies physiological responses of Miscanthus grass to drought stress, not human pharmacokinetics or pharmacodynamics of the drug glycerol. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | The study focuses on fungicide resistance in a fungal pathogen and mentions glycerol only as a metabolite accumulating in the fungus, not as a subject drug for PK analysis. |
| PD | Deng_2023 | not_relevant | 0 | 0 | The paper reports EC50 values for fludioxonil (a fungicide) on a fungal pathogen, not a pharmacodynamic relationship for glycerol in a biological system. |
| PGx | Di_1993 | not_relevant | 0 | 0 | The paper investigates the physical crystallographic properties (polymorphism) of a diacylglycerol compound and contains no information regarding pharmacogenomics or pharmacokinetics/pharmacodynamics of glycerol. |
| popPK | Dooley_1980 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of cellular permeation in Chinese hamster ovary cells, not a pharmacokinetic study of disposition parameters (CL, V, etc.) in an organism. |
| popPK | Druml_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of intravenous lipid emulsions (triglycerides), where glycerol is measured as a secondary marker of hydrolysis, not as the subject drug. |
| PD | Du_2021 | not_relevant | 0 | 0 | The paper identifies active ingredients in Coix seed using chemometrics and grey relational analysis but does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for glycerol. |
| PGx | Duarte-Andrade_2019 | not_relevant | 0 | 0 | The paper examines endogenous glycerol levels as a metabolite marker of tumor metabolism in ameloblastoma, not the pharmacokinetics or pharmacodynamics of glycerol as an administered drug. |
| popPK | Dubey_2026 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of amoxicillin-clavulanic acid on E. coli, not the pharmacokinetics of glycerol. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for cancer chemoresistance and does not study glycerol pharmacokinetics. |
| PD | Eljack_2022 | not_relevant | 0 | 0 | The paper is a review on nanoparticle design for chemoresistance reversal and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Erbiai_2023 | irrelevant | 0 | 0 | The paper analyzes the chemical composition of mushrooms where glycerol is detected as a component, but it is not a pharmacokinetic study of glycerol as a drug. |
| PD | Erbiai_2023 | not_relevant | 0 | 0 | The paper reports the chemical composition of mushrooms (including glycerol content) and antioxidant EC50 values for whole extracts, but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | FARQUHAR_1965 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PGx | Fawdry_2022 | not_relevant | 1 | 1 | The paper describes a genetic defect in fructose-1,6-bisphosphatase affecting metabolic pathways (gluconeogenesis/glycogenolysis) but does not report pharmacokinetic or pharmacodynamic parameters of glycerol as a drug. |
| PD | Forestrania_2022 | not_relevant | 0 | 0 | The paper reports the isolation and structural characterization of natural products, including glycerol esters, and provides a single IC50 value for lupeol, but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| PGx | Freeman_2025 | not_relevant | 0 | 0 | The paper investigates bacterial metabolism and virulence of Listeria monocytogenes, not human pharmacogenomics or drug pharmacokinetics. |
| PD | Frezza_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for plant extracts and isolated compounds (e.g., salvigenin) against parasites, but does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | Gao_2015 | not_relevant | 0 | 0 | The paper studies chaperonin function in archaea and does not involve human pharmacogenomics or the drug glycerol. |
| popPK | Garcia_2026 | irrelevant | 0 | 0 | The paper investigates antibiotic and phage efficacy in a 3D human urothelial microtissue model and does not report pharmacokinetic parameters for glycerol. |
| PGx | Garrigós-Martínez_2021 | not_relevant | 0 | 0 | The paper reports on the recombinant production of a biocatalyst (Pichia pastoris expressing CYP2C9) for industrial synthesis, not a pharmacogenomic study of a drug's PK/PD parameters in humans. |
| popPK | Gaspar_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fexofenadine, not glycerol. |
| PD | Gaspar_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for fexofenadine, not glycerol, and focuses on exposure (AUC) rather than pharmacodynamic effects. |
| PGx | Gautherot_2012 | not_relevant | 0 | 0 | The paper investigates the rescue of a trafficking-defective mutant transporter by chaperones; it does not report a pharmacogenomic effect on the PK or PD parameters of glycerol. |
| popPK | Gavriil_2019 | irrelevant | 0 | 0 | The study investigates platelet-activating factor (PAF) metabolism and aggregation in response to a plant extract, with no data on glycerol pharmacokinetics. |
| PD | Gavriil_2019 | not_relevant | 0 | 0 | The study investigates the effect of a plant extract supplement on platelet aggregation and PAF metabolism, not glycerol, and does not report any exposure-response or dose-response relationship for glycerol. |
| popPK | Ginsberg_1986 | irrelevant | 0 | 0 | Glycerol is used as a tracer for triglyceride turnover in a lipoprotein metabolism study, not as a subject drug for which PK parameters (CL, V, etc.) are reported. |
| popPK | González-Sales_2024 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of imetelstat, not glycerol. |
| PD | González-Sales_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for imetelstat, not glycerol, and contains no pharmacodynamic or exposure-response analysis. |
| PD | González_1978 | not_relevant | 4 | 2 | The paper describes a dose-response relationship for epinephrine on glycerol release but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative curve in the text. |
| popPK | Goodrich_2020 | irrelevant | 0 | 0 | The paper is an epigenetic/metabolomic study examining DNA methylation and metabolite associations in children; it is not a pharmacokinetic study of glycerol, and "1-octadecanoyl-rac-glycerol" is a distinct lipid metabolite, not the drug glycerol itself. |
| popPK | Gross_1988 | irrelevant | 0 | 0 | Glycerol is used here as a radioactive tracer ([3H]glycerol) to label phospholipids (DSPC) for turnover kinetics, not as the subject drug for its own pharmacokinetic characterization. |
| popPK | Hall_1976 | relevant | 8 | 2 | The study uses a compartmental model to analyze glycerol kinetics in dogs, but the provided text reports metabolic percentages rather than explicit pharmacokinetic parameter values (e.g., CL, V, k). |
| PD | Hamann_2022 | not_relevant | 0 | 0 | The paper reports antimicrobial IC50 values for green tea extract, not pharmacodynamic parameters for glycerol, which is used only as a plasticizer in the film formulation. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The paper focuses on fungicide resistance in Bipolaris maydis and only mentions glycerol content in fungal mycelia as a physiological response, not pharmacokinetics. |
| PD | Han_2017 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for a pathogen and mentions glycerol content in resistant mutants, but does not report a pharmacodynamic exposure-response relationship for glycerol as a drug. |
| PGx | Hansel_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic assay for glycerol in the context of a metabolic disorder, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of glycerol as a therapeutic agent. |
| PGx | Heikal_2009 | not_relevant | 0 | 0 | The paper describes the stabilization of purified P-glycoprotein via freeze-drying using disaccharides, involving no human gene variants or clinical pharmacokinetic/pharmacodynamic analysis of glycerol. |
| popPK | Hoang_2023 | irrelevant | 0 | 0 | The paper investigates microbial production of L-phenylalanine using glycerol as a substrate, and does not report pharmacokinetic parameters for glycerol. |
| popPK | Hollande_1993 | irrelevant | 0 | 0 | The study focuses on histamine release from isolated rabbit mucosal cells and does not involve glycerol as a subject drug or report pharmacokinetic parameters. |
| PD | Hollande_1993 | not_relevant | 0 | 0 | The paper reports dose-response relationships for gastrin, CCK, and carbachol on histamine release, but does not report any pharmacodynamic data for glycerol. |
| popPK | Hou_2019 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Hou_2019 | not_relevant | 0 | 0 | The paper studies the effect of fluazinam on a fungus, not the pharmacodynamics of glycerol. |
| PD | Huamán-Castilla_2024 | not_relevant | 0 | 0 | The paper describes a chemical extraction process for polyphenols using glycerol as a solvent and reports extraction yields and antioxidant assay results (IC50 of the extract), but does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Hughes_2026 | irrelevant | 0 | 0 | The paper describes multimodal imaging probes and their physicochemical properties, with no mention of glycerol pharmacokinetics or disposition parameters. |
| PD | Hughes_2026 | not_relevant | 0 | 0 | The paper focuses on the development of imaging probes and multimodal imaging techniques (FLIM, PLIM, FluoRaman) and does not report any pharmacodynamic or exposure-response data for glycerol. |
| popPK | Jana_2026 | irrelevant | 0 | 0 | The paper describes an antifungal metabolite (SM06) and its mechanism of action; it does not study the pharmacokinetics of glycerol. |
| popPK | Janus_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of the peptide NX210c, not glycerol; glycerol is only mentioned as a stabilizer in plasma sample preservation. |
| popPK | Jeremy_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on prostanoid synthesis in rat urinary bladder, and does not report pharmacokinetic parameters for glycerol. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The paper concerns the formulation and stability of an enrofloxacin-colistin combination injection, not the pharmacokinetics of glycerol. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation, stability, and solubility of an enrofloxacin-colistin injection using 1,2-propanediol (not glycerol) and reports efficacy/toxicity data without any pharmacokinetic or pharmacodynamic modeling. |
| PGx | Jiménez_2025 | not_relevant | 0 | 0 | The paper discusses the role of glycerol esters in plant root oxygen barriers, not the pharmacokinetics or pharmacodynamics of glycerol as a drug in humans. |
| PGx | Jin_2025 | not_relevant | 0 | 0 | The paper investigates acrolein toxicity and TRPA1 effects, not the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Johannsen_2023 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of methylene blue in pigs, using cerebral glycerol only as a metabolic marker for neuroinjury, not as a drug subject to pharmacokinetic analysis. |
| PD | Johny_2019 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of a novel phenolic lipid (monoacylglycerol), not glycerol itself, and provides only static IC50 values for cytotoxicity without a dose-response curve or PK/PD modeling. |
| popPK | Kadouch_2024 | irrelevant | 2 | 0 | Glycerol is used here as a biomarker/probe for lipolysis during physical activity, not as a drug for which PK parameters (CL, V, etc.) are the primary disposition outcome. |
| PGx | Karamanou_2020 | not_relevant | 0 | 0 | The paper focuses on fungal resistance to flusilazole using glycerol as a metabolic biomarker, not the pharmacokinetics or pharmacodynamics of glycerol itself. |
| popPK | Khalaf_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of Metoprolol, not the pharmacokinetics of glycerol. |
| PD | Khalaf_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation development and in vitro release kinetics of a Metoprolol gastroretentive film; it does not report any pharmacodynamic or exposure-response data for glycerol or any other drug. |
| popPK | King_2025 | irrelevant | 0 | 0 | The paper models the PK of the antibiotic cefotaxime to study bacterial evolution, and glycerol is not the subject drug nor mentioned in the provided text. |
| PGx | Kodali_1990 | not_relevant | 0 | 0 | The paper analyzes the physical and structural properties (polymorphism) of synthetic diacylglycerol molecules and does not involve pharmacokinetics, pharmacodynamics, gene variants, or the drug glycerol. |
| popPK | Kokkaliari_1994 | irrelevant | 0 | 0 | This is an in vitro mechanistic study using glycerol as a marker for lipolysis, not a pharmacokinetic study of glycerol's disposition. |
| PD | Kokkaliari_1994 | not_relevant | 0 | 0 | The paper reports EC50 values for cyclic AMP (a signaling molecule) on glycerol release, not for glycerol itself, and does not describe a pharmacodynamic model for glycerol. |
| popPK | Kollau_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study on the bioactivation of nitroglycerin (a nitrate ester) and does not report pharmacokinetic parameters for glycerol. |
| popPK | Kozawa_1992 | irrelevant | 0 | 0 | The study is a mechanistic investigation of PGE2 signaling pathways in osteoblast-like cells and contains no pharmacokinetic data for glycerol. |
| PD | Kozawa_1992 | not_relevant | 0 | 0 | The paper reports dose-response data for prostaglandin E2 (PGE2), not glycerol. |
| PGx | Kumar_2018 | not_relevant | 0 | 0 | The paper discusses metabolic engineering in bacteria to produce interferon gamma, where glycerol is a substrate for growth, not a drug subject to pharmacogenomic modulation. |
| popPK | Kunz_2026 | irrelevant | 0 | 0 | The paper is an in vitro antibiotic susceptibility and pharmacodynamic study regarding aztreonam-avibactam and ceftazidime-avibactam against Stenotrophomonas maltophilia, and does not report pharmacokinetic parameters for glycerol. |
| PD | Kypson_1976 | not_relevant | 1 | 0 | The paper studies the effects of uridine and inosine on glycerol release, not the pharmacodynamics of glycerol itself, and provides no numeric PD parameters for glycerol. |
| PD | Lakshminarayana_2023 | not_relevant | 0 | 0 | The paper studies the effects of Abutilon indicum extract, not glycerol; glycerol is only mentioned as a marker for lipolysis, and no exposure-response or dose-response relationship for glycerol is reported. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for heptanoate, a metabolite of triheptanoin, not for glycerol. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for valproic acid, and mentions glycerol only as a covariate for valproic acid CSF distribution, not as the subject of a pharmacogenomic study. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the evolution of antibiotic resistance in Escherichia coli and does not contain pharmacokinetic data for glycerol. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on the evolution of antibiotic resistance in E. coli and does not report pharmacodynamic or exposure-response relationships for glycerol. |
| PGx | Lin_2026 | not_relevant | 0 | 0 | The paper investigates the effect of dietary mushroom supplementation on fish health and metabolism, not the pharmacogenomic effect of a gene variant on glycerol pharmacokinetics. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper focuses on microbial strain variation for steroid production and does not report human pharmacogenomics or PK/PD parameters of glycerol. |
| PD | Liu_2017 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for antiviral activity and inhibition percentages at a single concentration, but does not provide a dose-response curve, Emax, or any pharmacokinetic/pharmacodynamic modeling parameters. |
| PGx | Lv_2024 | not_relevant | 0 | 0 | The paper investigates the effects of SGLT1/2 inhibition on cerebral small vessel disease, not the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Macário_2018 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Macário_2018 | not_relevant | 0 | 0 | The paper focuses on cholinium-based deep eutectic solvents and does not report pharmacodynamic or exposure-response data for glycerol. |
| popPK | Madawala_2011 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antioxidant analysis of novel glycerol conjugates, not the pharmacokinetics of glycerol. |
| PD | Madawala_2011 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (DPPH assay) for synthetic glycerol conjugates, not a pharmacodynamic or exposure-response relationship for glycerol itself. |
| popPK | Mamo_2024 | irrelevant | 0 | 0 | The study investigates the cryopreservation of mesenchymal stem cells using a glycerol-based solution, rather than performing pharmacokinetic analysis of glycerol as a drug. |
| PGx | Manzke_2018 | not_relevant | 0 | 0 | The paper investigates the effect of dietary energy supplementation (including glycerin) on pig growth and immune response, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of glycerin. |
| PD | Martikainen_2012 | not_relevant | 3 | 2 | The paper reports a single IC50 value for glycerol as a CYP2E1 inhibitor, which is a static enzyme kinetics parameter, not a pharmacodynamic exposure-response or dose-response relationship for the drug's effect in a biological system. |
| PGx | Martini_2024 | not_relevant | 2 | 5 | The paper describes how mutations in glycerol catabolism genes affect the PD (drug resistance) of artemisinin, not the PK/PD of glycerol. |
| popPK | Masocha_2025 | irrelevant | 0 | 0 | The study investigates in silico docking and in vitro inhibition of MAGL by triterpenes, not the pharmacokinetics of glycerol. |
| PD | Masocha_2025 | not_relevant | 0 | 0 | The paper focuses on in silico docking and molecular dynamics simulations of triterpenes, not glycerol, and does not report pharmacodynamic exposure-response relationships or numeric PD parameters for glycerol. |
| PGx | Masud_2022 | not_relevant | 0 | 0 | The study focuses on the anti-helminthic drug pyrvinium and its interaction with C1orf115, not the pharmacokinetics or pharmacodynamics of glycerol. |
| PD | Matchide_2023 | not_relevant | 0 | 0 | The paper reports the isolation and structural characterization of a new glycerol derivative (dryoptkirbioside) and provides IC50/MIC values for crude fractions and other compounds, but it does not report a pharmacodynamic (exposure-response) model or dose-response curve for glycerol itself. |
| popPK | McCallin_2026 | irrelevant | 0 | 0 | The paper discusses phage therapy and fecal microbiota transplantation for urinary tract infections and does not involve glycerol pharmacokinetics. |
| PD | McCallin_2026 | not_relevant | 0 | 0 | The paper is a clinical case series on phage therapy and FMT for UTIs; it does not report a pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | McMurrough_1996 | not_relevant | 0 | 0 | The paper discusses a DPD polymorphism affecting fluoropyrimidine metabolism and uses glycerol as a stabilizing buffer, not as a drug, so no pharmacogenomic effect on a PK/PD parameter of glycerol is reported. |
| PGx | Mersmann_1989 | not_relevant | 0 | 0 | The paper studies pharmacological responses (lipid mobilization) in obese vs. lean pigs, which are phenotypic groups rather than specific genetic variants/genotypes required for pharmacogenomics. |
| popPK | Messah_2026 | irrelevant | 0 | 0 | The paper describes in vitro and in silico studies on antidiabetic compounds from plant bark and contains no pharmacokinetic data for glycerol. |
| PD | Messah_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for compounds from Pithecellobium dulce, not a pharmacodynamic or exposure-response relationship for glycerol. |
| popPK | Ming_2026 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Ming_2026 | not_relevant | 0 | 0 | The paper focuses on difelikefalin acetate, not glycerol, and does not report PD parameters for glycerol. |
| popPK | Mittendorfer_2003 | irrelevant | 0 | 0 | Glycerol is used as a tracer/probe to measure VLDL-triacylglycerol kinetics, not as the subject drug for which PK parameters are reported. |
| PGx | Modlin_2026 | not_relevant | 0 | 0 | The paper concerns Mycobacterium tuberculosis genome assembly and bacterial adaptation, not the pharmacokinetics or pharmacodynamics of glycerol. |
| PD | Mohamed_2014 | not_relevant | 0 | 0 | The paper reports the isolation and structure elucidation of a new glycerol derivative (urgineaglyceride A) and provides IC50 values for other isolated compounds (flavonoids/sterols), but it does not report a pharmacodynamic or exposure-response relationship for glycerol itself. |
| PGx | Monfort_1993 | not_relevant | 0 | 0 | The paper is about assisted reproduction in Eld's deer and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Monteleone_2013 | relevant | 10 | 2 | The study presents a population PK model for glycerol phenylbutyrate (the subject drug prodrug) and its metabolite, but the specific numeric parameter values are not displayed in the provided abstract/evidence. |
| popPK | Munhall_2026 | irrelevant | 0 | 0 | The study investigates cilastatin sodium for crush syndrome in pigs and does not report pharmacokinetic parameters for glycerol. |
| PD | Munhall_2026 | not_relevant | 0 | 0 | The paper investigates the efficacy of cilastatin sodium, not glycerol, and reports no pharmacodynamic or exposure-response parameters for glycerol. |
| PGx | Muroya_2022 | not_relevant | 0 | 0 | The paper investigates the effects of maternal nutrient restriction on fetal liver gene expression and metabolite levels (including glycerol as a native metabolite) and does not involve drug administration or pharmacogenomics. |
| popPK | Müller_1997 | irrelevant | 0 | 0 | The study investigates the insulin-mimetic activity of phosphoinositolglycan-peptides (PIG-P) in rat cells, with glycerol serving only as a metabolic substrate (via glycerol-3-phosphate acyltransferase), not as the subject drug for PK parameter estimation. |
| PD | Müller_1997 | not_relevant | 0 | 0 | The paper reports PD parameters for a yeast-derived peptide (PIG-P), not for glycerol; glycerol is only mentioned as a substrate for an enzyme activity assay. |
| popPK | Nagata_1995 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Nagata_1995 | not_relevant | 0 | 0 | The paper discusses morphometry and image analysis in anatomy and radioautography, with no mention of glycerol or pharmacodynamic modeling. |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The paper studies the mechanism of a beta-adrenergic agonist (SR 58611A) on brown fat cells, where glycerol is a metabolite/release product, not the subject of pharmacokinetic analysis. |
| PD | Oruganti_2023 | not_relevant | 0 | 0 | The paper studies piperine and EGCG, not glycerol; glycerol is only mentioned as a released metabolite, and no exposure-response or dose-response PD model for glycerol is reported. |
| PGx | Orzechowski_2012 | not_relevant | 1 | 0 | The paper describes a pharmacodynamic toxicity model for ivermectin, not a pharmacokinetic or pharmacodynamic effect on the molecule glycerol. |
| PD | Outlaw_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for GPAT inhibitors, not a pharmacodynamic exposure-response or dose-response relationship for the drug glycerol. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cefepime in rats, not glycerol. |
| PGx | Pan_2022 | not_relevant | 0 | 0 | The paper describes the crystal structure of the protein CmABCB1 and does not investigate pharmacogenomic effects on the PK/PD of glycerol. |
| popPK | Panel_2026 | irrelevant | 0 | 0 | The paper describes the identification of small-molecule agonists for neurotensin receptors and contains no pharmacokinetic data for glycerol. |
| PD | Panel_2026 | not_relevant | 0 | 0 | The paper focuses on neurotensin receptor agonists and does not report any pharmacodynamic or exposure-response data for glycerol. |
| PGx | Parson_2025 | not_relevant | 0 | 0 | The paper investigates the role of UCP-1+ cells in muscle regeneration dynamics and does not involve glycerol or any pharmacokinetic/pharmacodynamic analysis. |
| popPK | Patterson_2002 | irrelevant | 0 | 0 | Glycerol is used as a tracer to measure VLDL-triglyceride kinetics, not as the subject drug for its own pharmacokinetic profile. |
| popPK | Perales_2017 | irrelevant | 0 | 0 | The paper reports ecotoxicity (EC50) and QSAR data for glycerol ethers in Daphnia magna, not pharmacokinetic parameters for glycerol. |
| PD | Perales_2017 | not_relevant | 0 | 0 | The provided text contains no abstract or content, making it impossible to verify any pharmacodynamic or exposure-response data for glycerol. |
| PD | Petersen_2020 | not_relevant | 0 | 0 | The paper investigates the inhibition of aquaglyceroporins by ionophores (CCCP, Gramicidin, Nigericin), not the pharmacodynamics of glycerol itself. |
| popPK | Pinho_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics/pharmacodynamics of a gold-based anticancer complex (ST004), using glycerol only as a substrate to assess aquaporin-3 inhibition in vitro; it contains no PK parameters for glycerol. |
| PGx | Prochazka_1989 | not_relevant | 0 | 0 | The paper reports on a genetic mutation affecting enzyme activity and lipid metabolism in mice, not the pharmacokinetic or pharmacodynamic parameters of the drug glycerol. |
| popPK | Pyle_2016 | irrelevant | 0 | 0 | The study measures the rate of appearance (Ra) of glycerol as a marker of lipolysis, not its population pharmacokinetic parameters (CL, V, ka). |
| PGx | Qadri_2020 | not_relevant | 0 | 0 | The paper investigates lipid metabolism and NAFLD risks associated with the PNPLA3 variant; glycerol is used only as a tracer to measure lipolysis, not as a drug subject to pharmacogenomic analysis. |
| PGx | Qiu_2025 | not_relevant | 0 | 0 | The paper investigates the association between the PPARD gene and glycerol levels in microglia in the context of Alzheimer's disease, but does not report a pharmacogenomic effect on a specific pharmacokinetic or pharmacodynamic parameter of a drug. |
| PGx | Qiu_2025_2 | not_relevant | 0 | 0 | The paper reports a metabolite-sensor pair (PPARD-glycerol) in the context of Alzheimer's disease metabolic heterogeneity, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Raig_2025 | irrelevant | 0 | 0 | The paper describes LRRK2 kinase inhibitors for Parkinson's disease and contains no pharmacokinetic data for glycerol. |
| PD | Raig_2025 | not_relevant | 0 | 0 | The paper describes the discovery of LRRK2 kinase inhibitors and their structural binding mode, but does not report any pharmacodynamic or exposure-response analysis for glycerol. |
| popPK | Rajakulendran_2025 | irrelevant | 0 | 0 | The paper focuses on the isolation of natural products from a bacterium grown in a medium containing glycerol; it is not a pharmacokinetic study of glycerol. |
| PD | Rajakulendran_2025 | not_relevant | 0 | 0 | The paper reports the isolation and structural elucidation of natural products and their in-vitro antiparasitic activity (EC50), but does not report a pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | Rhodes_1987 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting betaines in plant tissues (maize/spinach), not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glycerol in humans. |
| popPK | Richie-Jannetta_2010 | irrelevant | 0 | 0 | The study investigates the structural determinants for calcium mobilization by prostaglandin glyceryl esters in cell lines, which is a pharmacodynamic/mechanistic study, not a pharmacokinetic study of glycerol disposition. |
| PGx | Rump_2024 | not_relevant | 0 | 0 | The paper discusses aquaporins transporting glycerol for metabolism in sepsis, not the pharmacokinetics of glycerol as a drug or the effect of genetic variants on its disposition. |
| popPK | Salari_1992 | irrelevant | 0 | 0 | The study investigates the mechanism of action of ether-linked lipid analogs (specifically ET-16 compounds) on protein kinase C in leukemic cell lines, not the pharmacokinetics of glycerol. |
| PD | Sauer_1991 | not_relevant | 3 | 2 | The paper describes the kinetics of hemolysis (rate constants and absorbance ratios) in response to glycerol exposure, but it does not report a dose-response or exposure-response relationship (e.g., effect vs. glycerol concentration) with standard PD parameters like Emax or EC50 for the drug effect. |
| popPK | Scheideler_1991 | irrelevant | 0 | 0 | The paper describes the kinetic characterization of an enzyme in Escherichia coli, not the pharmacokinetics of glycerol as a drug. |
| PD | Scheideler_1991 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics (Hill coefficients) of a bacterial enzyme (sn-glycerol-3-phosphate acyltransferase), not the pharmacodynamic response of a drug (glycerol) in a biological system. |
| popPK | Schoemaker_2002 | relevant | 8 | 2 | The study models glycerol PK/PD in humans, but the abstract does not provide specific numeric parameter values (CL, V, etc.). |
| popPK | Schulz_2026 | irrelevant | 0 | 0 | The paper is a structural biology and medicinal chemistry study on kinase inhibitors for GIST, with no pharmacokinetic data for glycerol. |
| PD | Schulz_2026 | not_relevant | 0 | 0 | The paper focuses on kinase inhibitor design and structural biology for GIST, reporting IC50/GR50 values for small molecules, but contains no data, analysis, or mention of glycerol. |
| PGx | Sekizkardes_2020 | not_relevant | 0 | 0 | The paper studies insulin resistance and glycerol turnover in human disease states, not the pharmacokinetics or pharmacodynamics of glycerol as a drug or its modulation by gene variants. |
| popPK | Sendra_2025 | irrelevant | 0 | 0 | The paper is a developmental biology study on mouse heart lineage specification and does not involve glycerol or pharmacokinetics. |
| PD | Sendra_2025 | not_relevant | 0 | 0 | The paper describes developmental biology and lineage tracing in mouse embryos and contains no pharmacodynamic or exposure-response data for glycerol. |
| PGx | Sevrioukova_2017 | not_relevant | 0 | 0 | The paper reports on the structural engineering of the CYP3A4 enzyme and its interaction with glycerol in vitro, not the pharmacokinetics or pharmacodynamics of glycerol as a drug in a genetic context. |
| PGx | Shah_2024 | not_relevant | 2 | 5 | The study investigates glycerol as an endogenous substrate in a metabolic disease (GKD), not as a pharmaceutical drug, and reports phenotypic metabolic consequences rather than pharmacokinetic parameters of a drug. |
| PGx | Shah_2025 | not_relevant | 0 | 0 | The paper investigates the molecular and cellular consequences of SLC6A1 mutations and the rescue of these mutations using chemical chaperones (glycerol, 4-PBA); it does not report the pharmacokinetic or pharmacodynamic effects of glycerol as a drug based on patient genotypes. |
| PGx | Shi_2014 | not_relevant | 0 | 0 | The paper studies cancer cell metabolism using glycerol as a metabolic substrate, not as a drug, and does not investigate pharmacogenomic effects. |
| PGx | Shortt_2009 | not_relevant | 0 | 0 | The paper investigates tissue culture substrates and glycerol use for cryopreservation, not pharmacogenomics or the pharmacokinetics/pharmacodynamics of glycerol as a drug. |
| PGx | Simic_2025 | not_relevant | 0 | 0 | The paper investigates the role of Gpd1 genotype in glycerol-3-phosphate production and FGF23 levels in CKD, not the pharmacokinetics or pharmacodynamics of glycerol itself. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacology and cellular mechanisms of endocannabinoid (2-AG) signaling in neuronal cells, not the pharmacokinetics of glycerol (which is only mentioned as a control metabolite). |
| PGx | Srivastava_2008 | not_relevant | 0 | 0 | The study investigates olanzapine-induced weight gain and does not concern glycerol. |
| PGx | Styles_1997 | not_relevant | 0 | 0 | The paper investigates the clastogenic effects of tamoxifen and analogues in hepatocytes and lymphoblastoid cells, and does not report pharmacokinetic or pharmacodynamic parameters for glycerol or its interaction with gene variants. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| PD | Sun_2021 | not_relevant | 0 | 0 | The paper evaluates the antialgal activity of natural products from a red alga, not the pharmacodynamics of glycerol. |
| PGx | Sun_2022 | not_relevant | 0 | 0 | The paper studies beef cattle marbling via transcriptomics and metabolomics, not human pharmacogenomics or glycerol pharmacokinetics. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The study investigates the antifungal activity of the fungicide iprodione and mentions glycerin content as a biochemical marker in fungal mycelia, but it is not a pharmacokinetic study of glycerol. |
| PD | Sun_2023 | not_relevant | 0 | 0 | The paper investigates the fungicide iprodione, not glycerol; glycerol is only mentioned as a metabolite whose content increased in fungal mycelia after treatment. |
| PGx | Sweeney_2023 | not_relevant | 0 | 0 | The paper investigates the binding mechanism of inhibitors to CYP3A4 and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Tajima_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of panipenem in rats, using glycerol solely as an inducer of experimental renal failure (nephritis) rather than as the subject drug. |
| PD | Talla_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for DPPH radical scavenging activity of propolis extracts and isolated compounds, which is a biochemical assay, not a pharmacodynamic (exposure-response) relationship for the drug glycerol in a biological system. |
| popPK | Tao_2021 | irrelevant | 0 | 0 | The paper studies the fungicide quinofumelin and mentions glycerol production in fungi, but does not report pharmacokinetic parameters for glycerol in humans or animals. |
| PD | Tao_2021 | not_relevant | 0 | 0 | The paper reports the EC50 of the fungicide quinofumelin, not glycerol, and only mentions that quinofumelin did not affect glycerol production without providing a dose-response relationship or numeric PD parameters for glycerol. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The paper is an in-vitro formulation study of a herbal extract and does not investigate glycerol pharmacokinetics. |
| PD | Thanishka_2026 | not_relevant | 0 | 0 | The paper studies Peperomia pellucida, not glycerol, and reports in vitro IC50 values for a plant extract rather than a pharmacodynamic model for glycerol. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antibacterial mechanism of Candesartan cilexetil in MRSA and does not contain pharmacokinetic data for glycerol. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA and does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| PGx | Thomas_2013 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of CYP3A4 by PPAR-alpha and does not report pharmacogenomic effects on the PK/PD of glycerol. |
| PGx | Tröndle_2018 | not_relevant | 0 | 0 | The paper describes industrial microbiological fermentation of L-tryptophan from glycerol and contains no human pharmacogenomic data or drug PK/PD parameters. |
| popPK | Tschierske_2012 | irrelevant | 0 | 0 | The paper discusses the physical chemistry of liquid crystals and self-assembly patterns, where glycerol is a structural component of synthetic molecules, not a drug subject to pharmacokinetic analysis. |
| popPK | Tsutsumi_2018 | irrelevant | 0 | 0 | This is a chemistry and cell imaging study using glycerol solely as a mounting medium for slides, not a pharmacokinetic study of glycerol. |
| PD | Tsutsumi_2018 | not_relevant | 0 | 0 | The paper reports binding affinity (EC50) for gold nanoparticle-lectin interactions, not a pharmacodynamic exposure-response relationship for the drug glycerol (which is used only as a mounting medium). |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The paper investigates the phytochemical and pharmacological properties of *Fingerhuthia africana* extract, not the pharmacokinetics of glycerol. |
| PD | Ullah_2026 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Fingerhuthia africana), not the specific drug glycerol, and reports no exposure-response or dose-response data for glycerol. |
| PGx | Verkman_2012 | not_relevant | 0 | 0 | The paper reviews aquaporin channels and their physiological roles but does not report pharmacokinetic or pharmacodynamic parameters of glycerol or link gene variants to such parameters for glycerol as a drug. |
| popPK | Visconti_1999 | irrelevant | 0 | 0 | The paper is a study on elasmobranch color change and hormone regulation, unrelated to glycerol pharmacokinetics. |
| PD | Visconti_1999 | not_relevant | 0 | 0 | The paper reports dose-response data for hormones (alpha-MSH, prolactin) and other agents, but does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| popPK | Walker_2026 | irrelevant | 0 | 0 | The paper studies the antibiotic efficacy of ceftazidime/avibactam and amikacin in an in vitro hollow fiber model, with no mention of glycerol pharmacokinetics. |
| PD | Walker_2026 | not_relevant | 0 | 0 | The paper investigates ceftazidime/avibactam and amikacin, not glycerol, and does not report PD parameters for glycerol. |
| popPK | Wang_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of flunarizine, with glycerin mentioned only as an excipient in the formulation. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study examines the metabolic substrate utilization of a fungus using Biolog plates, and glycerol is listed merely as a carbon source, not as a drug subject of pharmacokinetic analysis. |
| PD | Wang_2016 | not_relevant | 0 | 0 | The paper reports EC50 values for fungicides (azoxystrobin and kresoxim-methyl) against a fungus, not a pharmacodynamic relationship for glycerol; glycerol is only mentioned as a carbon substrate metabolized by the fungus. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on drug release kinetics from a lipid gel formulation using glycerol dioleate as a component, not the pharmacokinetics of glycerol itself. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper reports on metabolic reprogramming in microorganisms to improve glycerol catabolism via gene expression editing, not the pharmacogenomics of glycerol as a drug in humans. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper investigates the antifungal mechanism of Euphorbia factor L3 against Phytophthora capsici, where glycerol is mentioned only as a cellular constituent used to assess membrane damage, not as a subject for pharmacokinetic analysis. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper studies the fungicidal activity of Euphorbia factor L3 on Phytophthora capsici; glycerol is only mentioned as a measured biomarker of cell membrane damage, not as a drug with a pharmacodynamic exposure-response relationship. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study is a plant pathology investigation measuring glycerol content in the fungus P. capsici as a biomarker, not a pharmacokinetic study of glycerol in an animal or human host. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the antifungal mechanism of antofine on Phytophthora capsici; glycerol is mentioned only as a physiological marker whose content increased, not as a drug subject to pharmacodynamic modeling. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper discusses fludioxonil resistance in Fusarium graminearum, not glycerol pharmacodynamics. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper investigates the resistance mechanism of a fungus (Phomopsis longicolla) to fludioxonil, with glycerol mentioned only as a metabolic accumulation product in fungi, not as a subject drug for pharmacokinetic analysis. |
| PD | Wei_2024 | not_relevant | 0 | 0 | The paper reports fungicide resistance mechanisms and EC50 values for fludioxonil, not a pharmacodynamic or exposure-response relationship for glycerol. |
| popPK | Westra_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of venetoclax and cobicistat in AML patients; glycerol is not the subject drug and no PK parameters for glycerol are reported. |
| PD | Westra_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic boosting of venetoclax by cobicistat and in vitro synergy, but does not report any pharmacodynamic or exposure-response relationship for glycerol. |
| PD | Wieczorek_2018 | not_relevant | 0 | 0 | The paper reports IC50 values for a porphyrazine photosensitizer, not for glycerol, and does not describe a pharmacodynamic exposure-response relationship for glycerol. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper reports causal associations between lipid metabolites and bone mineral density using Mendelian randomization, not pharmacokinetic or pharmacodynamic parameters of the drug glycerol. |
| PD | Wu_2024 | not_relevant | 3 | 2 | The paper reports a qualitative change in IC50 values for contaminants in the presence of glycerol monostearate but does not provide specific numeric PD parameters or a concentration-effect curve for glycerol itself. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper investigates the stability and efficacy of EGCG formulations using glycerol as an excipient in mice, but does not report any pharmacogenomic analysis or effect of genetic variants on glycerol parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper discusses the biosynthesis of cardenolides in plants and is unrelated to the pharmacokinetics of glycerol. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the enzymatic mechanism and biosynthetic pathway of cardenolides in plants, not on the pharmacodynamics or exposure-response relationships of glycerol. |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The study analyzes the causal association between a metabolite ratio (glycerol-to-palmitoylcarnitine) and endometriosis subtypes, not the pharmacokinetics or pharmacodynamics of glycerol as a therapeutic drug. |
| PD | Yang_2007 | not_relevant | 0 | 0 | The paper reports the isolation of plant compounds and their antioxidant activity (IC50), but does not report a pharmacodynamic or exposure-response relationship for the drug glycerol. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | This is a diagnostic study on glycerol's therapeutic effect on hearing in Ménière's disease, reporting audiometric changes (dB) rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper describes structural biology and antiviral inhibition of SARS-CoV-2 main protease, unrelated to glycerol pharmacokinetics. |
| PD | Zeng_2026 | not_relevant | 0 | 0 | The paper reports structural crystallography and molecular dynamics simulations of a coronavirus protease inhibitor, containing no pharmacodynamic or exposure-response data for glycerol. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper reports the isolation and structural elucidation of new metabolites, including a glycerol bisester, and provides a single IC50 value for cytotoxicity, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug glycerol itself. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper concerns the sequence redesign of glycosyltransferases in E. coli for biosynthesis, not the pharmacokinetics of glycerol. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on protein engineering and enzyme kinetics (Michaelis-Menten) for glycosyltransferases, not pharmacodynamics or exposure-response relationships for the drug glycerol. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of Panax notoginseng saponins (ginsenosides Rb1, Rg1, R1) in beagle dogs; glycerol is only an excipient in the capsule formulation, not the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:42 UTC</sub>
