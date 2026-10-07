<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;Morpholine&quot;}]"></div>

# Morpholine

- **generic name:** Morpholine
- **ATC codes:** `N02BA08`
- **DrugBank:** [DB13669](https://go.drugbank.com/drugs/DB13669) · **PubChem:** not captured
- **groups:** experimental

## About

Morpholine salicylate is a salicylic acid derivative that has been classified as an analgesic and antipyretic. It is currently considered experimental, with no evidence of authorised or widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27278763](https://www.wikidata.org/wiki/Q27278763) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:32 | 4:52 | 0/0/0 | 1/0/0 | 0/0/0 | 508,371/8,841 | einfracz / qwen3.8-27b | 25 | 8/42 | 23/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cabantchik_1989_PRU](drugs/drug_morpholine/pd_Cabantchik_1989_PRU.md) | plasma PRU concentration biomarker turnover ← morpholine | — | Cabantchik ZI et al., Effects of lysosomotropic detergents on…, Biochemical pharmacology (1989) | [10.1016/0006-2952(89)90333-x](https://doi.org/10.1016/0006-2952(89)90333-x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 372 matched, 172 returned
- **screened:** 8  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Corio-Costet_1988.pdf` | Corio-Costet MF et al., Inhibition by the fungicide fenpropimor…, The Biochemical journal (1988) | pd | 5 | [10.1042/bj2560829](https://doi.org/10.1042/bj2560829) | [3223956](https://www.ncbi.nlm.nih.gov/pubmed/3223956) | metadata signals extractable PD data (IC50) |
| `Maliyakkal_2020.pdf` | Maliyakkal N et al., A New Potent and Selective Monoamine Ox…, ChemMedChem (2020) | pd | 5 | [10.1002/cmdc.202000305](https://doi.org/10.1002/cmdc.202000305) | [32583952](https://www.ncbi.nlm.nih.gov/pubmed/32583952) | metadata signals extractable PD data (IC50) |
| `Aguayo_1986.pdf` | Aguayo LG et al., Effects of phencyclidine and its analog…, The Journal of pharmacology… (1986) | pd | 4 | not captured | [3489835](https://www.ncbi.nlm.nih.gov/pubmed/3489835) | metadata signals extractable PD data (IC50) |
| `Robak_1993.pdf` | Robak J et al., Nitric oxide donors as generators and s…, Polish journal of pharmacol… (1993) | pd | 4 | not captured | [8401759](https://www.ncbi.nlm.nih.gov/pubmed/8401759) | metadata signals extractable PD data (IC50) |
| `Barsanti_2015.pdf` | Barsanti PA et al., Structure-Based Drug Design of Novel, P…, ACS medicinal chemistry let… (2015) | pgx | 7 | [10.1021/ml500352s](https://doi.org/10.1021/ml500352s) | [25589928](https://www.ncbi.nlm.nih.gov/pubmed/25589928) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ni_2024.pdf` | Ni S et al., In vitro and in vivo pharmacokinetics,…, European journal of pharmac… (2024) | pgx | 7 | [10.1016/j.ejps.2023.106658](https://doi.org/10.1016/j.ejps.2023.106658) | [38048851](https://www.ncbi.nlm.nih.gov/pubmed/38048851) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Noguchi_2000.pdf` | Noguchi K et al., Identification of cytochrome P450 isofo…, Xenobiotica; the fate of fo… (2000) | pgx | 7 | [10.1080/004982500237505](https://doi.org/10.1080/004982500237505) | [10875683](https://www.ncbi.nlm.nih.gov/pubmed/10875683) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Obach_2022.pdf` | Obach RS, Linezolid Metabolism Is Catalyzed by Cy…, Drug metabolism and disposi… (2022) | pgx | 7 | [10.1124/dmd.121.000776](https://doi.org/10.1124/dmd.121.000776) | [35042700](https://www.ncbi.nlm.nih.gov/pubmed/35042700) | metadata signals extractable PGX data (CYP2J2, PK/PD-context) |

<sub>queue written 2026-10-07T06:30:13.397893+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aaghaz_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and antimicrobial activity of morpholine-containing hybrid compounds, not the pharmacokinetics of the drug morpholine. |
| popPK | Abbott_1994 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of delmopinol (a morpholine derivative) as a mouthrinse and does not report pharmacokinetic parameters for morpholine. |
| popPK | Abdelsattar_2026 | irrelevant | 0 | 0 | The paper investigates metabolomic biomarkers for liver disease and does not report pharmacokinetic parameters for morpholine. |
| PD | Abdelsattar_2026 | not_relevant | 0 | 0 | The paper is a metabolomic study using machine learning for disease diagnosis and does not report any pharmacodynamic or exposure-response relationship for Morpholine. |
| popPK | Abdulwahab_2020 | irrelevant | 0 | 0 | The paper focuses on the synthesis and urease inhibitory activity of thiobarbiturate derivatives, with morpholine appearing only as a structural component of a test compound, not as the subject drug for PK analysis. |
| popPK | Aggarwal_1990 | irrelevant | 0 | 0 | The paper studies zidovudine prodrugs where morpholine is a chemical moiety, not the subject drug, and no PK parameters for morpholine are reported. |
| popPK | Aguayo_1986 | irrelevant | 0 | 0 | The paper is an electrophysiological study of PCP analogs on neuromuscular junctions and does not report pharmacokinetic parameters for morpholine. |
| PGx | Ahn_2016 | not_relevant | 0 | 0 | The paper describes the discovery of a new P2Y12 antagonist containing a morpholine moiety and does not investigate the pharmacokinetics or pharmacodynamics of the solvent morpholine nor does it report pharmacogenomic effects on morpholine. |
| popPK | Al-Qurain_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tramadol and its metabolite ODT, not morpholine. |
| PD | Al-Qurain_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tramadol and its metabolite, but it does not include any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Alves_2024 | irrelevant | 0 | 0 | The paper is a pharmacological study on morpholine-containing compounds acting on adrenoceptors, not a pharmacokinetic study of morpholine itself. |
| PD | Alves_2024 | not_relevant | 4 | 2 | The paper describes concentration-effect curves for alpha-adrenoceptor activity but does not provide numeric PD parameters (e.g., pIC50, Emax) or the raw data required to derive them in the provided text. |
| popPK | Arias_2013 | irrelevant | 0 | 0 | The paper studies the pharmacological interaction of reboxetine with nicotinic acetylcholine receptors and contains no data on morpholine pharmacokinetics. |
| popPK | Attwa_2022 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of pemigatinib, not morpholine. |
| PD | Attwa_2022 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying pemigatinib and its metabolic stability in liver microsomes, containing no pharmacodynamic or exposure-response data for morpholine or any other drug. |
| PGx | Attwa_2023 | not_relevant | 0 | 0 | The paper evaluates the in vitro metabolic stability of alectinib using human liver microsomes and computational tools; it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Barsanti_2015 | not_relevant | 0 | 0 | The paper discusses drug design and general DMPK mechanisms for ATR inhibitors; it does not report pharmacogenomic effects on the PK or PD of morpholine. |
| popPK | Bass_2017 | irrelevant | 0 | 0 | The paper reports in vitro antiproliferative activity (IC50) of morpholine-containing compounds in cancer cells, not pharmacokinetic parameters for morpholine itself. |
| popPK | Boschi_2026 | irrelevant | 0 | 0 | The paper reports on the chemical synthesis and property profiling of a library of morpholine-containing compounds for drug discovery, not the pharmacokinetic parameters of morpholine itself. |
| PD | Boschi_2026 | not_relevant | 0 | 0 | The paper describes the synthesis and physicochemical property profiling of a chemical library, explicitly stating that no bioactivity has been discovered, and contains no pharmacodynamic or exposure-response data. |
| popPK | Brady_1981 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment measuring discriminative stimulus properties and ED50 values, not a pharmacokinetic study reporting disposition parameters for morpholine. |
| popPK | Buron_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PI3K/mTOR inhibitors where morpholine is a structural substituent, not the subject drug, and no pharmacokinetic parameters are reported. |
| PD | Buron_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic IC50 values and cellular cytotoxicity data for novel PI3K/mTOR inhibitors, but does not report a pharmacodynamic (exposure-response) relationship for the drug Morpholine. |
| popPK | Cabantchik_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antimalarial activity and does not report pharmacokinetic parameters for morpholine. |
| popPK | Cao_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PI3K inhibitors where morpholine is only a structural moiety, not the subject drug, and no pharmacokinetic parameters are reported. |
| popPK | Cascieri_1997 | irrelevant | 0 | 0 | The paper characterizes a receptor antagonist compound (L-742,694) which contains a morpholine functional group, but it is not a pharmacokinetic study of the drug morpholine. |
| popPK | Chatterjee_2021 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of ruthenium complexes containing a morpholine motif, not a pharmacokinetic study of morpholine itself. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper studies a glioblastoma prodrug called gliocidin, not the drug morpholine, and does not report morpholine pharmacokinetics. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper investigates the drug Gliocidin (and its metabolites), not Morpholine; no pharmacodynamic data for Morpholine is reported. |
| popPK | Chrysselis_2000 | irrelevant | 0 | 0 | The paper studies the pharmacological activity (antioxidant/hypocholesterolemic) of morpholine derivatives, not the pharmacokinetics of morpholine itself. |
| popPK | Corio-Costet_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of action of the fungicide fenpropimorph (which contains a morpholine ring) on cholesterol biosynthesis, not the pharmacokinetics of morpholine itself. |
| popPK | Couffignal_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem, not morpholine. |
| PD | Couffignal_2014 | not_relevant | 3 | 2 | The paper reports a population PK model and Monte Carlo simulations for dosage regimen evaluation based on time above MIC, but it does not fit a pharmacodynamic model (e.g., Emax, IC50) or report numeric PD parameters describing the concentration-effect relationship. |
| popPK | DAmbra_1992 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (receptor binding/functional assays) of cannabinoid receptor agonists, not the pharmacokinetics of morpholine. |
| PD | DAmbra_1992 | not_relevant | 3 | 2 | The paper reports IC50 values for specific analogues of pravadoline (a cannabinoid receptor agonist), not for Morpholine itself, and does not provide a full concentration-effect curve or population PD model for the specified drug. |
| popPK | Das_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on copper complexes containing a morpholine ligand, not a pharmacokinetic study of morpholine as a drug. |
| popPK | Davies_1988 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study where morpholine is used as a chemical reagent for synthesis, not as a subject drug for pharmacokinetic analysis. |
| PD | Davies_1988 | not_relevant | 0 | 0 | The paper reports IC50 values for dinucleotide analogues, not for Morpholine, which is only mentioned as a reagent used in the synthesis. |
| popPK | Dayanand_2025 | irrelevant | 0 | 0 | The study is a computational pharmacoinformatics analysis of a traditional oil formulation for psoriasis and does not involve morpholine or report any pharmacokinetic parameters. |
| PD | Dayanand_2025 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) of phytochemicals in an oil formulation; it does not involve Morpholine and reports no pharmacodynamic or exposure-response data. |
| popPK | Dinh_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for imipenem, not morpholine. |
| PD | Dinh_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of imipenem and uses Monte Carlo simulations to assess the probability of target attainment (PTA) for PK/PD indices (T&gt;MIC); it does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for morpholine or any other drug. |
| popPK | Dwivedi_2022 | irrelevant | 0 | 0 | The paper studies morpholine-substituted quinazoline derivatives as anticancer agents and reports cytotoxicity (IC50) data, not pharmacokinetic parameters for morpholine itself. |
| popPK | El-Damasy_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on BCR-ABL inhibitors (AKE-72) and does not report pharmacokinetic parameters for morpholine. |
| PGx | Elipe_2003 | not_relevant | 0 | 0 | The paper identifies a volatile metabolite of MK-0869 using LC-NMR and confirms CYP enzyme involvement, but it does not report any pharmacogenomic associations or quantitative changes in PK/PD parameters based on genetic variants. |
| popPK | Farghaly_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on CDK2 inhibitors where morpholine is a structural moiety, not a subject drug for pharmacokinetic analysis. |
| popPK | Fujimoto_2017 | irrelevant | 0 | 0 | The paper focuses on the discovery of CDK8/19 inhibitors where morpholine is a structural component of the drug molecule, not the subject drug being studied for pharmacokinetics. |
| PGx | Fujimoto_2017 | not_relevant | 0 | 0 | The paper discusses the chemical modification of a drug candidate to eliminate CYP3A4 time-dependent inhibition, but it does not report on pharmacogenomic effects (gene variants) on morpholine's PK/PD parameters. |
| popPK | Gadekar_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on kinase inhibitors where morpholine is only mentioned as a structural moiety/bioisostere, not as the subject drug for PK analysis. |
| PD | Gadekar_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for kinase inhibition (EGFR/IGF1R) and mentions a "descent PK profile" for a lead compound, but it does not report an exposure-response or dose-response relationship for Morpholine (which is only mentioned as a structural moiety replaced by a bioisostere) nor does it provide numeric PD parameters linking drug concentration to a pharmacodynamic effect in vivo or in a PK/PD model. |
| popPK | Gankina_1982 | irrelevant | 0 | 0 | The study investigates the in-vitro enzymatic activity of antidepressants (including morpholine derivatives) on bovine brain MAO, not the pharmacokinetics of morpholine itself. |
| popPK | Gaur_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel indole-morpholine derivatives for anticancer activity, not a pharmacokinetic study of morpholine itself. |
| popPK | Ghafary_2019 | irrelevant | 0 | 0 | The paper studies morpholine-containing derivatives as tyrosinase inhibitors and does not report pharmacokinetic parameters for morpholine itself. |
| popPK | Gu_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the anticancer agent SN30000 (which contains a morpholine group), not the drug morpholine itself. |
| popPK | Guan_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of a traditional Chinese medicine compound in rheumatoid arthritis and does not involve morpholine pharmacokinetics. |
| PD | Guan_2025 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine compound (New Bitongling) and does not report any pharmacodynamic or exposure-response data for Morpholine. |
| popPK | Götz_2023 | irrelevant | 0 | 0 | The paper is about high-throughput organic synthesis and does not involve pharmacokinetic studies of morpholine. |
| PD | Götz_2023 | not_relevant | 0 | 0 | The paper focuses on high-throughput organic synthesis and machine learning for reaction prediction, containing no pharmacodynamic or exposure-response data for Morpholine. |
| popPK | Halimi_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological evaluation of morpholine-containing derivatives as anticancer agents, not the pharmacokinetics of the drug morpholine. |
| popPK | Haney_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of AEF0117, not morpholine. |
| PGx | Hartley_2004 | not_relevant | 0 | 0 | The paper studies the effect of a PXR agonist (L-742694) on gene expression and does not report pharmacogenomic effects of morpholine on its PK/PD. |
| popPK | Hawtin_2023 | irrelevant | 0 | 0 | The paper characterizes MHV370, a TLR7/8 antagonist, and does not study the pharmacokinetics of morpholine. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on morpholine-containing derivatives as enzyme inhibitors, not a pharmacokinetic study of morpholine. |
| PGx | Hoskins_2001 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and identification of metabolizing enzymes (FMOs/CYPs) but does not report a pharmacogenomic effect (association between a specific gene variant/genotype and a PK parameter). |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and neuroprotective effects of compound A36 (a calpain-2 stabilizer) in mice, not the drug morpholine. |
| popPK | Huneif_2022 | irrelevant | 0 | 0 | The paper focuses on the synthesis and bioevaluation of a new vanillin hybrid compound for diabetes treatment, where morpholine is merely a structural moiety, and no pharmacokinetic parameters for morpholine are reported. |
| PD | Huneif_2022 | not_relevant | 2 | 1 | The paper reports an in-vitro IC50 for a specific enzyme target (DPP-4) but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-effect curve for the drug in vivo. |
| popPK | Huynh_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on SARS-CoV-2 protease inhibitors where morpholine is only a structural component of the synthesized compounds, not the subject drug for PK analysis. |
| popPK | Hwu_2020 | irrelevant | 0 | 0 | The paper is an in vitro antiviral study where morpholine is a chemical component of synthesized compounds, not a drug subject of pharmacokinetic analysis. |
| PD | Hwu_2020 | not_relevant | 2 | 2 | The paper reports single-point EC50 values for antiviral activity in vitro, which is a potency metric, but does not provide a full dose-response curve, Emax, or any pharmacokinetic/pharmacodynamic modeling data. |
| popPK | Ibrahim_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PI3K inhibitors where morpholine is a structural moiety, not the subject drug, and no pharmacokinetic parameters are reported. |
| PD | Ibrahim_2015 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for kinase inhibition and cytotoxicity, which are pharmacological potency metrics, not pharmacodynamic (exposure-response) relationships or PK/PD models. |
| popPK | Jarrahpour_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antimicrobial activity of β-lactam derivatives containing a morpholine ring, not a pharmacokinetic study of the drug morpholine. |
| popPK | Jung_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-proliferative activity of combretastatin analogues, where morpholine is a chemical structural component, not the subject drug for pharmacokinetic analysis. |
| PGx | Kaczor_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacological activity of synthesized chemical compounds (imidazolones) as ABCB1 modulators, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of morpholine. |
| PGx | Kaczor_2021 | not_relevant | 0 | 0 | The paper investigates the antibiotic adjuvant properties of morpholine-containing compounds, not the pharmacokinetics or pharmacodynamics of the drug morpholine itself. |
| popPK | Kang_2024 | irrelevant | 0 | 0 | The paper is a chemistry study on BODIPY dyes where morpholine is a structural component, not a drug subject to pharmacokinetic analysis. |
| PD | Kang_2024 | not_relevant | 0 | 0 | The paper describes the synthesis and photophysical properties of BODIPY dyes; the mention of morpholine refers to a chemical substituent on the dye, not the drug Morpholine, and the reported IC50 is for the dye nanoparticles, not Morpholine. |
| popPK | Keglevich_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro cytotoxicity of vindoline derivatives, where morpholine is used only as a chemical building block, not as a subject drug for pharmacokinetic analysis. |
| popPK | Khalid_2026 | irrelevant | 0 | 0 | The paper describes morpholine as a chemical scaffold for synthesizing enzyme inhibitors, not as the subject drug for pharmacokinetic analysis. |
| popPK | Khan_2009 | irrelevant | 0 | 0 | The paper reports in-vitro leishmanicidal activity (IC50) of morpholine derivatives, not pharmacokinetic parameters. |
| popPK | Kourounakis_2008 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (lipid lowering, enzyme inhibition) of morpholine derivatives, not pharmacokinetic parameters for morpholine itself. |
| popPK | Kravchenko_2005 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of caspase-3 inhibitors where morpholine is a structural component, not a subject drug for pharmacokinetic analysis. |
| PD | Kravchenko_2005 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a series of novel pyrroloquinoline compounds, not for the drug Morpholine, and does not contain any pharmacokinetic or pharmacodynamic modeling. |
| popPK | Kuettel_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying the target of a morpholine-containing compound in Trypanosoma, and does not report pharmacokinetic parameters for morpholine. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The study evaluates *Pongamia pinnata* extract for antidiarrheal properties and does not involve morpholine or its pharmacokinetics. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Pongamia pinnata), not Morpholine, and does not report pharmacodynamic parameters for the specified drug. |
| popPK | Kumari_2023 | irrelevant | 0 | 0 | Morpholine is a chemical structural moiety in synthesized compounds, not the subject drug for pharmacokinetic evaluation. |
| popPK | Kułaga_2026 | irrelevant | 0 | 0 | The paper studies morpholine-based triazine derivatives as anticancer agents, not the drug morpholine itself, and reports no pharmacokinetic parameters for morpholine. |
| PGx | Kułaga_2026 | not_relevant | 0 | 0 | The paper reports the chemical synthesis and anticancer pharmacodynamics of morpholine-based compounds, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of the drug morpholine itself. |
| popPK | Köprülü_2021 | irrelevant | 0 | 0 | The paper is an in-vitro anticancer study where morpholine is a structural substituent on a quinoline compound, not the subject drug, and no pharmacokinetic parameters are reported. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on LH2 inhibitors where morpholine is only mentioned as a structural ring component, not as the subject drug for pharmacokinetic analysis. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antiproliferative activity of thiazolo[5,4-d]pyrimidine derivatives where morpholine is a structural substituent, not a drug subject of PK analysis. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug linezolid, not morpholine. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of Linezolid, not Morpholine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Liang_2017 | irrelevant | 0 | 0 | The paper focuses on the discovery of a BTK inhibitor where morpholine is a chemical substituent in the structure, not the subject drug for pharmacokinetic evaluation. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper studies morpholine-bearing derivatives as cholinesterase inhibitors (mechanistic/pharmacological) and does not report pharmacokinetic parameters for morpholine itself. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper characterizes the metabolism of tuxobertinib (an EGFR inhibitor), where morpholine is merely a structural moiety undergoing metabolic opening, not the subject drug for which pharmacogenomic effects are reported. |
| popPK | Liu_2025_2 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro biological evaluation of morpholine derivatives as antitumor agents, containing no pharmacokinetic data for morpholine. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of morpholine-coumarin derivatives as IDO1/TDO inhibitors, not on the pharmacokinetics of morpholine itself. |
| PD | Liu_2026 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and a single-dose in vivo efficacy study, but lacks a formal PK/PD model, exposure-response analysis, or dose-response curve with derivable PD parameters (e.g., Emax, EC50 in vivo). |
| popPK | Lone_2013 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxicity of morpholine-containing analogs of Ludartin, not the pharmacokinetics of morpholine itself. |
| popPK | Ma_2021 | irrelevant | 0 | 0 | The paper focuses on the design of HBV inhibitors where the morpholine ring is merely a structural feature of a lead compound, not a study of morpholine's pharmacokinetics. |
| popPK | Mabied_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antimicrobial activity of Mannich bases, where morpholine is used only as a reagent to form a derivative, not as a subject drug for pharmacokinetic analysis. |
| PD | Mabied_2023 | not_relevant | 0 | 0 | The paper reports the synthesis, crystallographic structure, and antimicrobial/cytotoxic activity (IC50) of new chemical compounds, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for Morpholine. |
| popPK | Makhija_2024 | irrelevant | 0 | 0 | The paper is a review of EGFR inhibitors for lung cancer where morpholine is mentioned only as a chemical structural moiety, not as a subject drug for pharmacokinetic analysis. |
| PD | Makhija_2024 | not_relevant | 1 | 0 | The paper is a review of structure-activity relationships (SAR) and in vitro IC50 values for EGFR inhibitors, not a pharmacodynamic or exposure-response study for Morpholine. |
| popPK | Maliyakkal_2020 | irrelevant | 0 | 0 | The paper studies a chalcone derivative containing a morpholine ring as a MAO-B inhibitor, not the drug morpholine itself, and reports no pharmacokinetic parameters. |
| popPK | Mascagna_1992 | irrelevant | 0 | 0 | The paper reports cytotoxicity (IC50) of morpholine-containing derivatives, not pharmacokinetic parameters for morpholine itself. |
| popPK | Menke_2024 | irrelevant | 0 | 0 | The paper investigates the proton affinity and conformational properties of a triazine macrocycle, not the pharmacokinetics of morpholine. |
| PD | Menke_2024 | not_relevant | 0 | 0 | The paper describes the proton affinity and conformational dynamics of a triazine macrocycle, not the pharmacodynamics of Morpholine. |
| popPK | Menteşe_2020 | irrelevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of morpholine derivatives, not pharmacokinetic parameters for morpholine. |
| popPK | Miller_1983 | irrelevant | 0 | 0 | The paper studies the mechanism of lysosomal membrane disruption by lysosomotropic detergents (specifically dodecyl-imidazole) in cell culture, and morpholine is only mentioned as a structural component or example of a lysosomotropic amine, not as a subject drug for pharmacokinetic analysis. |
| PD | Miller_1983 | not_relevant | 0 | 0 | The paper investigates the mechanism of cell killing by lysosomotropic detergents (specifically imidazole derivatives) and does not report a pharmacodynamic or exposure-response relationship for morpholine. |
| popPK | Miller_2004 | irrelevant | 0 | 0 | The paper studies fungicide sensitivity (resistance) in the fungal pathogen Uncinula necator, not the pharmacokinetics of the drug morpholine. |
| popPK | Mori_2020 | irrelevant | 0 | 0 | The paper focuses on the radiosynthesis and PET imaging of a morpholine-containing radiotracer (FIPM) for LRRK2, not on the pharmacokinetics of morpholine itself. |
| PD | Mori_2020 | not_relevant | 1 | 1 | The paper reports an in vitro binding affinity (IC50) for a radiotracer candidate, which is a pharmacological property but not a pharmacodynamic exposure-response or dose-response relationship for the drug Morpholine. |
| popPK | Morrison_1984 | irrelevant | 0 | 0 | The study focuses on the detection of N-nitrosomorpholine formation (a metabolite/carcinogen) rather than the pharmacokinetic disposition parameters of morpholine itself. |
| PD | Morrison_1984 | not_relevant | 2 | 1 | The paper describes a method for detecting N-nitrosomorpholine formation and notes a qualitative dose-dependence, but it does not report a pharmacodynamic model or extractable numeric PD parameters (e.g., Emax, EC50) for morpholine itself. |
| popPK | Muhammad_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on morpholine-based heterocycles for antitumor activity, not a pharmacokinetic study of morpholine. |
| popPK | Muhammad_2024 | irrelevant | 0 | 0 | The paper studies kinase inhibitors where morpholine is a structural moiety, not a pharmacokinetic study of morpholine as a drug. |
| popPK | Mundra_2017 | irrelevant | 0 | 0 | The paper discusses a pyrimidine compound containing a morpholine moiety as an antimalarial agent, not the pharmacokinetics of the drug morpholine itself. |
| PD | Mundra_2017 | not_relevant | 3 | 2 | The paper reports a single EC50 value for antiparasitic activity but does not provide a full concentration-effect curve, dose-response relationship, or PK/PD model parameters. |
| popPK | Munir_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on morpholine-thiophene hybrid thiosemicarbazones as urease inhibitors, not a pharmacokinetic study of morpholine itself, and contains no quantitative PK parameters (CL, V, etc.) for morpholine. |
| popPK | Nandanan_2000 | irrelevant | 0 | 0 | The paper studies P2Y1 receptor ligands (adenosine analogues) and mentions morpholine only as a ring structure in analogues, not as the subject drug for PK analysis. |
| popPK | Narva_2017 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro antiproliferative activity of morpholine-containing analogues, not the pharmacokinetics of morpholine itself. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anticancer evaluation of thiazole-derived inhibitors, with no mention of morpholine pharmacokinetics. |
| PD | Nasr_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for kinase inhibition (EGFR/CDK-2) and cellular activity, but does not report a pharmacodynamic (exposure-response) relationship for Morpholine, nor does it provide PK/PD modeling or concentration-effect curves for the drug in vivo or in a PD context. |
| PGx | Ni_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and metabolism of tinengotinib, not morpholine, and does not report pharmacogenomic effects on a PK parameter. |
| PGx | Noguchi_2000 | not_relevant | 0 | 0 | The paper reports the CYP enzyme responsible for the metabolism of YM992 (a morpholine derivative) but does not report pharmacogenomic associations between gene variants and PK parameters. |
| PGx | Obach_2022 | not_relevant | 0 | 1 | The study characterizes the enzymes metabolizing linezolid (a drug with a morpholine moiety), but does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Osmaniye_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on MAO-A inhibitors where morpholine is only a structural component of the synthesized compounds, not the subject drug for PK analysis. |
| popPK | Petrova_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of Mannich bases (chemical compounds) rather than the pharmacokinetics of morpholine as a drug. |
| popPK | Poddar_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of DI-87, not morpholine. |
| popPK | Purohit_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid in the context of rifampicin co-administration, and does not report parameters for morpholine. |
| PD | Purohit_2026 | not_relevant | 0 | 0 | The paper reports a population PK model for linezolid and the effect of rifampicin dose on linezolid clearance (PK-PK interaction), but it does not report a pharmacodynamic (exposure-response or dose-response) model for Morpholine or any other drug with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Qin_2025 | irrelevant | 0 | 0 | The paper describes a machine learning model for molecular property prediction and does not contain specific pharmacokinetic data for morpholine. |
| PD | Qin_2025 | not_relevant | 0 | 0 | The paper describes a machine learning architecture (MoleculeFormer) for molecular property prediction and does not contain any pharmacodynamic, exposure-response, or dose-response data for Morpholine or any other drug. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The paper is about transporter drug repurposing and does not report pharmacokinetic parameters for morpholine. |
| PD | Rafehi_2026 | not_relevant | 0 | 0 | The paper does not mention Morpholine or report any pharmacodynamic or exposure-response data for it; it focuses on transporter inhibition by other compounds. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper describes the development of NIR fluorescent probes for Alzheimer's disease and does not study the pharmacokinetics of morpholine. |
| popPK | Raig_2025 | irrelevant | 0 | 0 | The paper describes the development of LRRK2 kinase inhibitors for Parkinson's disease and does not report pharmacokinetic parameters for morpholine. |
| PGx | Ren_2018 | not_relevant | 0 | 0 | The paper describes the discovery of a drug containing a morpholine moiety, not the pharmacogenomics of morpholine itself. |
| popPK | Resendiz-Galvan_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for linezolid, not morpholine. |
| PD | Resendiz-Galvan_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for linezolid and uses simulations to calculate the probability of target attainment (PTA) based on PK targets (fAUC/MIC), but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) describing the relationship between drug exposure and biological effect. |
| PGx | Richter_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of a synthetic cannabinoid containing a morpholine group, not the pharmacokinetics or pharmacodynamics of the drug morpholine itself. |
| popPK | Robak_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of nitric oxide donors (including a morpholine derivative, SIN-1) and does not report pharmacokinetic parameters for morpholine. |
| popPK | Sala_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of deoxydidehydronucleosides (viral biomarkers) in rats and does not involve the drug morpholine. |
| PD | Sala_2026 | not_relevant | 0 | 0 | The paper describes the metabolism and excretion of deoxydidehydronucleosides in rats and does not contain any pharmacodynamic or exposure-response data for Morpholine. |
| popPK | Sameem_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel derivatives containing a morpholine moiety, not a pharmacokinetic study of morpholine itself. |
| popPK | Sangthong_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on rotenoid derivatives where morpholine is a structural moiety, not a drug subject of pharmacokinetic analysis. |
| popPK | Sasidharan_2021 | irrelevant | 0 | 0 | The paper studies morpholine-based chalcone derivatives as enzyme inhibitors, not the pharmacokinetics of the drug morpholine itself. |
| PD | Sasidharan_2021 | not_relevant | 3 | 5 | The paper reports in vitro biochemical IC50 and Ki values for morpholine-based chalcones, which are pharmacodynamic potency metrics, but it does not report an exposure-response or dose-response relationship for the specific drug "Morpholine" itself, nor does it provide a PK/PD model or concentration-effect curve for a clinical exposure context. |
| popPK | Schindler_2006 | irrelevant | 0 | 0 | The paper studies soluble guanylyl cyclase agonists (ataciguat) where morpholine is only a structural component of the chemical name, not the subject drug, and no pharmacokinetic parameters are reported. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and inhibition of galectin-1 by thiazole-linked coumarin hybrids, and does not involve the drug morpholine or its pharmacokinetics. |
| PD | Sethi_2024 | not_relevant | 0 | 0 | The paper reports in vitro binding constants (Ka) and single-point enzyme inhibition percentages for galectin-1 inhibitors, but does not report a pharmacodynamic (exposure-response) relationship for Morpholine or any other drug in a biological system. |
| PGx | Sevrioukova_2024 | not_relevant | 0 | 0 | The paper describes the structural and mechanistic interaction of cobicistat with CYP3A4, focusing on molecular binding and inhibition kinetics, not on how a genetic variant alters the PK or PD of morpholine. |
| PGx | Shackleford_2021 | not_relevant | 0 | 0 | The paper describes in vitro metabolism of OZ439 by CYP3A4, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Shank_1976 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Shank_1976 | not_relevant | 0 | 0 | The paper reports a carcinogenicity study (tumor incidence) rather than a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Sharina_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of soluble guanylyl cyclase coactivators, and morpholine appears only as a chemical moiety in the name of a comparator drug (ataciguat), not as the subject of pharmacokinetic analysis. |
| PD | Sharina_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of dicyanocobinamide (CN2-Cbi) on soluble guanylyl cyclase and does not report any pharmacokinetic or pharmacodynamic modeling for Morpholine. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological activity of 1,2,4-thiazolidinedione substituted 1,3,5-triazine derivatives against HIV and SARS-CoV-2, with morpholine appearing only as a structural moiety affecting solubility, not as a subject drug for pharmacokinetic study. |
| PD | Singh_2025 | not_relevant | 0 | 0 | The paper reports in vitro EC50 values for novel triazine derivatives, not for Morpholine, and does not contain any pharmacodynamic or exposure-response analysis for Morpholine. |
| popPK | Soraluce_2020 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of linezolid, not morpholine (morpholine is only mentioned as part of linezolid's structure). |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper describes the discovery of bacterial MetRS inhibitors using AI and does not involve the drug morpholine or any pharmacokinetic studies. |
| PGx | Tang_2022 | not_relevant | 0 | 0 | The paper discusses the mechanism-based inactivation of CYP3A by Pemigatinib and its bioactivation at the morpholine moiety, but does not report any pharmacogenomic effects or gene variants influencing PK/PD parameters. |
| popPK | Tasleem_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro enzymatic inhibition of morpholine-based derivatives, not the pharmacokinetics of morpholine itself. |
| popPK | Thimmaiah_1992 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on N-substituted phenoxazines where morpholine is used as a chemical reagent/structural component, not as a subject drug for pharmacokinetic analysis. |
| PD | Thimmaiah_1992 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of N-substituted phenoxazines (including morpholine derivatives) and their qualitative/semi-quantitative effects on drug accumulation and cytotoxicity (IC50), but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug Morpholine itself. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of linezolid, not morpholine. |
| PD | Tian_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and Monte Carlo simulations for probability of target attainment (PTA) based on MIC, but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) linking drug exposure to clinical effect. |
| PGx | Treiber_2025 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions and metabolism of nivasorexant, but contains no data regarding the pharmacokinetics or pharmacodynamics of morpholine itself, nor does it discuss genetic variants. |
| popPK | Tretyakova_2022 | irrelevant | 0 | 0 | The study is a synthetic chemistry and antiviral activity investigation where morpholine is used as a reagent to create chemical compounds, not as a drug subject of pharmacokinetic analysis. |
| PD | Tretyakova_2022 | not_relevant | 0 | 0 | The paper reports antiviral IC50/EC50 values for synthesized diterpenic Mannich bases, not a pharmacodynamic or exposure-response relationship for the drug Morpholine. |
| popPK | Tsuji_2017 | irrelevant | 0 | 0 | The paper focuses on the population pharmacokinetics of linezolid, not morpholine, which is only mentioned as part of linezolid's chemical structure/metabolism. |
| popPK | Ueno_1984 | irrelevant | 0 | 0 | The paper investigates the mutagenicity of rubber additives (including bis-morpholine disulfide) using a bacterial assay and does not report any pharmacokinetic parameters for morpholine. |
| PD | Ueno_1984 | not_relevant | 0 | 0 | The paper reports mutagenicity data (MIC) for rubber additives, not pharmacodynamic exposure-response or dose-response relationships for the drug Morpholine. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review of non-nucleoside reverse transcriptase inhibitors (NNRTIs) for HIV and does not mention morpholine or report any pharmacokinetic parameters for it. |
| PD | Vanangamudi_2023 | not_relevant | 0 | 0 | The paper is a medicinal chemistry review on NNRTI design strategies and does not report any pharmacodynamic or exposure-response data for Morpholine. |
| PGx | Velaparthi_2010 | not_relevant | 0 | 0 | The paper describes the SAR of IGF-1R kinase inhibitors and mentions morpholine only as a chemical substituent replaced in the drug structure, not as a drug being studied for pharmacogenomics. |
| PGx | Wacher_1998 | not_relevant | 0 | 0 | The paper discusses the general role of CYP3A4 and P-gp on peptide absorption and mentions a morpholine-containing inhibitor (K02) only as an example of substrate specificity, without reporting specific pharmacogenomic genotype effects on its PK or PD. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper discusses the metabolism of cobicistat and does not report on the pharmacokinetics or pharmacodynamics of morpholine. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper reports on the discovery of morpholine-substituted drugs for HIV and solubility improvements, not the pharmacokinetic parameters of morpholine itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for imipenem, not morpholine. |
| PD | Wang_2024 | not_relevant | 3 | 2 | The paper focuses on population pharmacokinetics (PPK) and uses Monte Carlo simulations to assess the probability of target attainment (PTA) for time-dependent PD indices (fT&gt;MIC), but it does not report a fitted pharmacodynamic model (e.g., Emax, IC50) or numeric concentration-effect parameters. |
| popPK | Wangngae_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on cyanine dyes where morpholine is a structural moiety, not a subject drug for pharmacokinetic analysis. |
| popPK | Witkowski_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and effects of erythritol, not morpholine. |
| PD | Witkowski_2023 | not_relevant | 0 | 0 | The paper studies erythritol, not morpholine, and reports epidemiological associations and qualitative physiological effects without numeric PD parameters for the target drug. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid, not morpholine, although linezolid contains a morpholine ring as part of its chemical structure. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper investigates the design and antibacterial activity of chemical compounds containing a morpholine moiety, not the pharmacokinetics of the drug morpholine. |
| PD | Yang_2026 | not_relevant | 3 | 2 | The paper reports a single EC50 value for a specific compound (H6) against a bacterial pathogen, which is a standard microbiological potency metric rather than a pharmacokinetic/pharmacodynamic (PK/PD) exposure-response relationship for the drug Morpholine in a biological system. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on HBV inhibitors where morpholine is a structural component of the compounds, not the subject drug for pharmacokinetic analysis. |
| PD | Yu_2020 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific compound (II-1) in an in vitro assay, which is a standard pharmacological potency metric, but it does not report a pharmacodynamic (PD) model, exposure-response relationship, or dose-response curve with derivable PD parameters (like Emax, EC50 in a PK/PD context, or slope) for the drug Morpholine itself or a specific exposure-response link. |
| popPK | Zaib_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro cholinesterase inhibition of pyrimidine-morpholine hybrids, not the pharmacokinetics of morpholine itself. |
| popPK | Zask_2009 | irrelevant | 0 | 0 | The paper focuses on the medicinal chemistry and molecular modeling of mTOR inhibitors containing morpholine derivatives, not on the pharmacokinetics of morpholine itself. |
| PD | Zask_2009 | not_relevant | 3 | 2 | The paper reports IC50 values for mTOR inhibition, which are pharmacodynamic potency parameters, but it is a medicinal chemistry study focused on structure-activity relationships (SAR) and selectivity, not a pharmacokinetic/pharmacodynamic (PK/PD) modeling study or an exposure-response analysis in a biological system. |
| popPK | Zeng_2024 | irrelevant | 0 | 0 | The study is a medicinal chemistry/bioactivity evaluation of chalcone derivatives containing a morpholine ring, not a pharmacokinetic study of the drug morpholine. |
| PGx | Zhang_1998 | not_relevant | 0 | 0 | The paper reports the characterization of a novel cysteine protease inhibitor (K02) as a substrate for CYP3A and P-gp, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Zhou_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition/induction) affecting PK, not the effect of a gene variant/genotype. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | The paper describes morpholine as a structural component (P2 ligand) of HIV-1 protease inhibitors, not as the subject drug for pharmacokinetic analysis. |
| PD | Zhu_2020 | not_relevant | 3 | 2 | The paper reports static in vitro potency metrics (Ki, IC50) for specific compounds but does not provide a dynamic exposure-response or dose-response curve analysis with derivable PD parameters like Emax or slope. |
| popPK | Zhu_2022 | irrelevant | 0 | 0 | The study evaluates HIV-1 protease inhibitors containing morpholine cores as a structural motif, not the pharmacokinetics of the drug morpholine itself. |
| PD | Zhu_2022 | not_relevant | 3 | 2 | The paper reports static in vitro IC50 and in vivo EC50 values for a new drug candidate, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response analysis, or dose-response curve fitting with derived PD parameters (e.g., Emax, EC50 from a fit, slope). |
| popPK | Řehulka_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on tubulin inhibitors where morpholine is used as a reagent for synthesis, not as the subject drug for pharmacokinetic analysis. |
| PD | Řehulka_2020 | not_relevant | 3 | 2 | The paper reports IC50 values for a series of synthesized quinolinone derivatives (some containing morpholine), but it does not report a pharmacodynamic model, exposure-response relationship, or dose-response curve for Morpholine itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
