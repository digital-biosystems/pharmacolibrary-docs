<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;phenacetin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenacetin_Shi2021_reference&quot;,&quot;label&quot;:&quot;Shi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenacetin/Phenacetin_Shi2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# phenacetin

- **generic name:** phenacetin
- **ATC codes:** `N02BE03`
- **DrugBank:** [DB03783](https://go.drugbank.com/drugs/DB03783) · **PubChem:** [CID 4754](https://pubchem.ncbi.nlm.nih.gov/compound/4754)
- **molar mass:** 179.2157 g/mol (C10H13NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Phenacetin is a non-opioid painkiller and fever reducer that was once used to treat pain and high temperature. It has been withdrawn from the market because it was found to be carcinogenic and harmful to the kidneys.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419175](https://www.wikidata.org/wiki/Q419175) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:52 | 1:30 | 1/1/0 | 0/0/0 | 0/0/0 | 150,205/10,317 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shi_2021_reference](drugs/drug_phenacetin/Phenacetin_Shi2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shi Y et al., Effects of Avitinib on CYP450 Enzyme Ac…, Drug design, development an… (2021) | [10.2147/DDDT.S323186](https://doi.org/10.2147/DDDT.S323186) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Raaflaub_1975_reference](drugs/drug_phenacetin/Phenacetin_Raaflaub1975_reference.md) | — | 1-compartment (no model) | 0 | Raaflaub J et al., On the pharmacokinetics of phenacetin i…, European journal of clinica… (1975) | [10.1007/BF00567125](https://doi.org/10.1007/BF00567125) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenacetin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2A13 (substrate), IMPDH1 (inhibitor), PTGS1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 689 matched, 77 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raaflaub_1975.pdf` | Raaflaub J et al., On the pharmacokinetics of phenacetin i…, European journal of clinica… (1975) | popPK | 9 | [10.1007/BF00567125](https://doi.org/10.1007/BF00567125) | [1233222](https://pubmed.ncbi.nlm.nih.gov/1233222) | The paper reports specific quantitative pharmacokinetic parameters for phenacetin in humans, including elimination half-life (37-74 min) and volume of distribution (1.0-2.1 L/kg). |
| `Gerin_2013.pdf` | Gerin B et al., Assessment of cytochrome P450 (1A2, 2B6…, Xenobiotica; the fate of fo… (2013) | pd | 4 | [10.3109/00498254.2012.719088](https://doi.org/10.3109/00498254.2012.719088) | [23153057](https://www.ncbi.nlm.nih.gov/pubmed/23153057) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Nagaya_2025.pdf` | Nagaya Y et al., In vitro-in vivo scaling of cytochrome…, Drug metabolism and disposi… (2025) | pgx | 8 | [10.1016/j.dmd.2025.100065](https://doi.org/10.1016/j.dmd.2025.100065) | [40199158](https://www.ncbi.nlm.nih.gov/pubmed/40199158) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Whiterock_2012.pdf` | Whiterock VJ et al., Phenacetin pharmacokinetics in CYP1A2-d…, Drug metabolism and disposi… (2012) | pgx | 8 | [10.1124/dmd.111.041848](https://doi.org/10.1124/dmd.111.041848) | [22074769](https://www.ncbi.nlm.nih.gov/pubmed/22074769) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Xiaodong_1994.pdf` | Xiaodong S et al., Omeprazole does not enhance the metabol…, Therapeutic drug monitoring (1994) | pgx | 8 | [10.1097/00007691-199406000-00004](https://doi.org/10.1097/00007691-199406000-00004) | [8085279](https://www.ncbi.nlm.nih.gov/pubmed/8085279) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Belle_2000.pdf` | Belle DJ et al., A population approach to enzyme charact…, Pharmaceutical research (2000) | pgx | 7 | [10.1023/a:1007665310830](https://doi.org/10.1023/a:1007665310830) | [11303964](https://www.ncbi.nlm.nih.gov/pubmed/11303964) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ge_2024.pdf` | Ge M et al., Investigation of the drug-drug interact…, Journal of ethnopharmacology (2024) | pgx | 7 | [10.1016/j.jep.2024.118212](https://doi.org/10.1016/j.jep.2024.118212) | [38636577](https://www.ncbi.nlm.nih.gov/pubmed/38636577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `He_2022.pdf` | He Y et al., Circadian oscillator NPAS2 regulates di…, Biochemical pharmacology (2022) | pgx | 7 | [10.1016/j.bcp.2022.115345](https://doi.org/10.1016/j.bcp.2022.115345) | [36379250](https://www.ncbi.nlm.nih.gov/pubmed/36379250) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Iwatsubo_1997.pdf` | Iwatsubo T et al., Prediction of in vivo drug metabolism i…, Pharmacology & therapeutics (1997) | pgx | 7 | [10.1016/s0163-7258(96)00184-2](https://doi.org/10.1016/s0163-7258(96)00184-2) | [9131722](https://www.ncbi.nlm.nih.gov/pubmed/9131722) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jiang_2020.pdf` | Jiang Z et al., The Effect of Selenium on CYP450 Isofor…, Biological trace element re… (2020) | pgx | 7 | [10.1007/s12011-019-01945-7](https://doi.org/10.1007/s12011-019-01945-7) | [31721080](https://www.ncbi.nlm.nih.gov/pubmed/31721080) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Burnham_2022.pdf` | Burnham EA et al., Interindividual Variability in Cytochro…, Chemical research in toxico… (2022) | pgx | 5 | [10.1021/acs.chemrestox.1c00426](https://doi.org/10.1021/acs.chemrestox.1c00426) | [35484684](https://www.ncbi.nlm.nih.gov/pubmed/35484684) | metadata signals extractable PGX data (CYP3A5) |
| `Ito_2015.pdf` | Ito M et al., Functional characterization of 20 allel…, Drug metabolism and pharmac… (2015) | pgx | 5 | [10.1016/j.dmpk.2015.03.001](https://doi.org/10.1016/j.dmpk.2015.03.001) | [26022657](https://www.ncbi.nlm.nih.gov/pubmed/26022657) | metadata signals extractable PGX data (CYP1A2) |
| `Kim_2012.pdf` | Kim SY et al., Metabolism of R- and S-warfarin by CYP2…, Drug metabolism letters (2012) | pgx | 5 | [10.2174/1872312811206030002](https://doi.org/10.2174/1872312811206030002) | [23331088](https://www.ncbi.nlm.nih.gov/pubmed/23331088) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T06:51:07.260657+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Albassam_2021 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition by pterostilbene using phenacetin as a substrate, but does not investigate gene variants or genetic phenotypes affecting the pharmacokinetics or pharmacodynamics of phenacetin. |
| PGx | Behera_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro effect of saccharolactone on CYP-mediated metabolism of phenacetin, which is an environmental/chemical interference study, not a pharmacogenomic study of genetic variants. |
| popPK | Belle_2000 | irrelevant | 0 | 0 | The study reports in-vitro enzyme kinetics (Vmax, KM) for phenacetin metabolism in liver microsomes, not in-vivo pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Belle_2000 | not_relevant | 0 | 0 | The study characterizes enzyme kinetics using human liver microsomes and correlates with probe activities, but does not report the effect of any specific genetic variant or genotype on phenacetin PK/PD parameters. |
| PGx | Burnham_2022 | not_relevant | 0 | 0 | The study investigates sunitinib pharmacokinetics, and while phenacetin is used as a P450 1A2 activity probe, no pharmacogenomic effect of phenacetin is reported. |
| PGx | Ching_2001 | not_relevant | 0 | 0 | The paper reports enzyme inhibition of CYP1A1/1A2 by quinidine and quinine, but it does not link any gene variant or genotype to changes in phenacetin PK/PD. |
| PGx | Chitrangi_2017 | not_relevant | 0 | 0 | The paper describes an in vitro model for drug metabolism but does not report any genetic variants, genotypes, or phenotypes affecting phenacetin PK/PD parameters. |
| PGx | Cohen_2000 | not_relevant | 0 | 0 | The paper is a review of bladder cancer epidemiology and does not report pharmacokinetic or pharmacodynamic parameters of phenacetin. |
| PGx | Dong_2021 | not_relevant | 0 | 0 | The study investigates the CYP1A2 inhibition of binimetinib on phenacetin metabolism in human liver microsomes and does not report any gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Edwards_1994 | not_relevant | 0 | 0 | The paper investigates the metabolic activation of heterocyclic amines (MeIQx, IQ, PhIP) in monkeys and humans, not the pharmacokinetics or pharmacodynamics of phenacetin. |
| PGx | Eugster_1993 | not_relevant | 0 | 0 | The paper studies enzyme kinetics and inhibition in a heterologous yeast expression system; it does not report pharmacogenomic effects (gene variant associations) on phenacetin PK or PD in humans. |
| PGx | Ge_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between herbal extracts using phenacetin only as a probe substrate for CYP1A2, with no mention of genetic variants or pharmacogenomics. |
| popPK | Gerin_2013 | irrelevant | 0 | 0 | Phenacetin is used only as a CYP1A2 probe substrate in an in vitro hepatocyte induction study, not as the subject drug for PK parameter estimation. |
| PD | Gerin_2013 | not_relevant | 0 | 0 | The paper describes a method validation for CYP induction assays using phenacetin as a probe substrate, not a pharmacodynamic or exposure-response analysis of phenacetin itself. |
| PGx | Guo_2021 | not_relevant | 0 | 0 | The text is a general review of CYP1A2 regulation and metabolism, mentioning phenacetin only as a substrate, but contains no specific data on gene variants affecting phenacetin pharmacokinetics. |
| PGx | He_2022 | not_relevant | 2 | 0 | The study investigates the effect of a knockout mouse model (NPAS2 ablation) on CYP1A2 activity using phenacetin as a probe, not a human pharmacogenomic effect of a specific genetic variant on phenacetin PK/PD parameters. |
| PGx | Iwatsubo_1997 | not_relevant | 0 | 0 | The paper is a review on predicting in vivo metabolism from in vitro data and does not report pharmacogenomic effects of specific gene variants on phenacetin PK/PD parameters. |
| PGx | Jiang_2020 | not_relevant | 0 | 0 | The paper investigates the effect of dietary selenium (a nutrient/environmental factor) on CYP450 activity, not the effect of a human gene variant or genotype on phenacetin pharmacokinetics. |
| popPK | Kanebratt_2008 | irrelevant | 0 | 0 | The study is an in vitro mechanistic evaluation of cytochrome P450 induction where phenacetin is used only as a probe substrate for enzyme activity, not for pharmacokinetic parameter estimation. |
| PD | Kanebratt_2008 | not_relevant | 0 | 0 | The paper focuses on CYP450 enzyme induction in HepaRG cells and does not report a pharmacodynamic exposure-response or dose-response relationship for phenacetin itself. |
| PGx | Kim_2012 | not_relevant | 0 | 0 | The paper focuses on warfarin metabolism, and the mention of phenacetin is solely to define the activity marker for CYP1A2, not to report pharmacogenomic effects on phenacetin. |
| popPK | Krenc_2022 | irrelevant | 0 | 0 | The study focuses on the binding of β-eudesmol to cytochrome P450 isoforms, using phenacetin only as a reference ligand for CYP1A2, not as the subject of a pharmacokinetic study. |
| PD | Krenc_2022 | not_relevant | 0 | 0 | The paper reports in vitro ligand-binding affinities (Ks) for beta-eudesmol and phenacetin to CYP enzymes, which is a pharmacokinetic/metabolic interaction study, not a pharmacodynamic (exposure-response or dose-response) analysis of drug effect. |
| popPK | Kwon_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenytoin, with phenacetin used only as an internal standard for HPLC analysis. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper reports a method for evaluating CYP enzyme inhibition (drug-drug interactions) and does not investigate gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Li_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP1A2 regulation, using phenacetin only as a diagnostic probe substrate to measure enzyme activity, not to determine population pharmacokinetic parameters. |
| PD | Li_1998 | not_relevant | 0 | 0 | The paper studies the induction of CYP1A2 by TCDD and MC, using phenacetin-O-deethylase activity only as a diagnostic marker for enzyme expression, not as a pharmacodynamic response to phenacetin exposure. |
| PGx | Masubuchi_1994 | not_relevant | 0 | 0 | The paper focuses on the metabolism of propranolol, not phenacetin. |
| PGx | Nagaya_2025 | not_relevant | 0 | 0 | The paper uses phenacetin as a CYP1A2 probe substrate to validate a relative activity factor method for predicting clearance, rather than investigating how specific genetic variants alter its PK/PD. |
| PGx | Nerurkar_1993 | not_relevant | 0 | 0 | The paper investigates CYP450 isozyme specificity for methoxyresorufin and benzyloxyresorufin in animals, using phenacetin only as a chemical inhibitor to probe enzyme identity, rather than reporting pharmacogenomic effects of gene variants on phenacetin PK/PD. |
| popPK | Nielsen-Kudsk_1980 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for naproxen, while phenacetin is only listed as one of several drugs included in the HPLC analytical method validation. |
| PGx | Park_2022 | not_relevant | 0 | 0 | The study investigates CYP1A2 inhibition by obtusifolin using phenacetin as a probe substrate, but it does not report pharmacogenomic effects of genetic variants on phenacetin's PK or PD parameters. |
| PGx | Paudel_2023 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP1A2 by the phytoconstituent suberosin, not the effect of a human gene variant or genotype on phenacetin pharmacokinetics or pharmacodynamics. |
| popPK | Qiu_2003 | irrelevant | 0 | 0 | Phenacetin is used only as an internal standard for oxymatrine analysis, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Sharma_2012 | irrelevant | 0 | 0 | Phenacetin is used solely as an internal standard in an assay for adenosine, with no pharmacokinetic data reported for phenacetin itself. |
| PD | Sharma_2012 | not_relevant | 0 | 0 | The paper describes a method validation for adenosine and uses phenacetin only as an internal standard; it does not report any pharmacodynamic or exposure-response data for phenacetin. |
| popPK | Shi_2021 | irrelevant | 1 | 1 | Phenacetin is used only as a probe substrate to assess the CYP450 inhibitory effects of avitinib, not as the subject of the pharmacokinetic study. |
| PGx | Shi_2021 | not_relevant | 0 | 0 | The paper investigates the effect of the drug avitinib on CYP450-mediated phenacetin metabolism (drug-drug interaction), not the effect of a genetic variant. |
| PGx | Sim_2015 | not_relevant | 0 | 0 | The paper studies in vitro enzyme inhibition by a compound (CTXA) and does not report any gene variant or genotype effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA receptor binding where phenacetin is used merely as a negative control agent. |
| PD | Squires_1993 | not_relevant | 0 | 0 | The paper reports that phenacetin failed to potentiate the GABA-antagonistic effect of norfloxacin, providing no numeric PD parameters or exposure-response relationship for phenacetin. |
| popPK | Steinbrecht_2020 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation establishing CYP1A2-expressing cell lines, using phenacetin only as a substrate to measure enzyme activity rather than reporting pharmacokinetic disposition parameters for the drug. |
| PD | Steinbrecht_2020 | not_relevant | 0 | 0 | The paper reports CYP1A2 enzyme activity and aflatoxin B1 toxicity in cell lines, but does not report a pharmacodynamic exposure-response or dose-response relationship for phenacetin itself. |
| PGx | Tassaneeyakul_1992 | not_relevant | 1 | 0 | The paper focuses on the enzymatic kinetics of caffeine metabolism and its interaction with phenacetin in vitro, reporting no pharmacogenomic associations or human clinical PK/PD data for phenacetin. |
| PGx | Tassaneeyakul_1993 | not_relevant | 0 | 0 | The paper characterizes enzyme kinetics and inhibitor specificity of CYP1A1/1A2 using phenacetin, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of phenacetin in subjects. |
| PGx | Tassaneeyakul_1994 | not_relevant | 0 | 0 | The paper investigates caffeine metabolism and only correlates phenacetin O-deethylase activity with CYP1A2 markers without reporting specific pharmacogenomic effect sizes or PK/PD parameters for phenacetin. |
| popPK | Tsamandouras_2017 | irrelevant | 3 | 2 | This is an in-vitro mechanistic study using hepatocytes (LiverChip) to measure intrinsic metabolic clearance variability, not a pharmacokinetic study in vivo or in humans reporting standard disposition parameters (CL, V, t1/2) for phenacetin as the subject drug in a living organism. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (chemical inhibition) rather than the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The study investigates the effect of a metabolic disease (diabetes) on drug PK, not a specific gene variant/genotype. |
| PGx | Wu_2020 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (calycosin affecting phenacetin metabolism), not the effect of a gene variant or genotype on pharmacokinetics. |
| PGx | Xiaodong_1994 | not_relevant | 0 | 0 | The study investigates the effect of omeprazole (a drug-drug interaction) on phenacetin PK in healthy volunteers, not the effect of a gene variant or genotype on the parameter. |
| PGx | Yun_1992 | not_relevant | 0 | 0 | The paper focuses on alfentanil pharmacokinetics and CYP3A4, mentioning phenacetin only as a marker for CYP1A2 activity, not reporting phenacetin pharmacogenomics. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay and does not report pharmacokinetic disposition parameters for phenacetin. |
| PGx | Zhao_1994 | not_relevant | 0 | 0 | The paper investigates the metabolism of the food-derived carcinogen PhIP, not the pharmacokinetics or pharmacodynamics of phenacetin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:51 UTC</sub>
