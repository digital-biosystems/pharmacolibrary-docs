<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03X&quot;,&quot;href&quot;:&quot;atc/G03X.md&quot;},{&quot;label&quot;:&quot;mifepristone&quot;}]"></div>

# mifepristone

- **generic name:** mifepristone
- **ATC codes:** `G03XB01`, `Not yet assigned`
- **DrugBank:** [DB00834](https://go.drugbank.com/drugs/DB00834) · **PubChem:** [CID 55245](https://pubchem.ncbi.nlm.nih.gov/compound/55245)
- **molar mass:** 429.5937 g/mol (C29H35NO2) — DrugBank
- **groups:** approved, investigational

## About

Mifepristone is an antiprogestogen used mainly to end an unwanted pregnancy, and has also been studied for conditions such as Cushing syndrome, meningioma and brain cancer. It is a WHO essential medicine used widely for medical abortion, though its availability is restricted in many places and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411240](https://www.wikidata.org/wiki/Q411240) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:24 | 18:23 | 0/0/0 | 0/1/0 | 0/0/0 | 612,455/8,607 | einfracz / qwen3.8-27b | 31 | 3/26 | 29/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Babij_2003_beta_gal](drugs/drug_mifepristone/pd_Babij_2003_beta_gal.md) | beta-galactosidase activity ← mifepristone · stimulation effect | — | Babij P et al., "Blue heart": characterization of a mif…, Biochimica et biophysica ac… (2003) | [10.1016/s0167-4781(03)00052-6](https://doi.org/10.1016/s0167-4781(03)00052-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mifepristone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR1I2 (target), NR3C1 (target), PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 211 matched, 124 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lähteenmäki_1987.pdf` | Lähteenmäki P et al., Pharmacokinetics and metabolism of RU 4…, Journal of steroid biochemi… (1987) | popPK | 10 | [10.1016/0022-4731(87)90160-9](https://doi.org/10.1016/0022-4731(87)90160-9) | [3695508](https://pubmed.ncbi.nlm.nih.gov/3695508) | The paper is a population PK study of mifepristone in humans reporting half-lives (27 h, 24 h) and compartmental model descriptions, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided evidence text. |
| `Földesi_1996.pdf` | Földesi I et al., Determination of RU486 (mifepristone) i…, Contraception (1996) | popPK | 8 | [10.1016/0010-7824(96)00116-3](https://doi.org/10.1016/0010-7824(96)00116-3) | [8804805](https://pubmed.ncbi.nlm.nih.gov/8804805) | The study reports a two-compartment model and half-life for mifepristone, but specific numeric values for clearance, volume, or the mean half-life are not present in the provided text (only ranges and qualitative descriptions). |

<sub>queue written 2026-10-07T09:19:59.061929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abruzzese_1999 | irrelevant | 0 | 0 | The study focuses on the gene regulatory function of mifepristone (GeneSwitch system) and reports an EC50 for biological effect, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Babij_2003 | relevant | 4 | 8 | The paper reports specific quantitative pharmacokinetic parameters (Tmax, bioavailability, half-life) for mifepristone in mice, although the primary focus is on a gene expression system. |
| popPK | Batra_1999 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of intracellular calcium signaling in rat aortic smooth muscle cells, where mifepristone is used solely as a receptor antagonist to confirm mechanism, not for pharmacokinetic parameter estimation. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline for glucocorticoid-induced adrenal insufficiency and does not report pharmacokinetic parameters for mifepristone. |
| popPK | Blanchette_2019 | irrelevant | 0 | 0 | The paper describes an in vitro cardiomyocyte model for QT/QTc prediction and does not report pharmacokinetic parameters for mifepristone. |
| PGx | Chen_2003 | not_relevant | 0 | 0 | The paper focuses on the transcriptional regulation of the CYP2C19 gene, and mifepristone is used only as a tool compound to confirm the presence of a glucocorticoid receptor binding site; it does not report pharmacogenomic effects on the PK/PD of mifepristone. |
| PGx | Chen_2017 | not_relevant | 0 | 0 | The study investigates sex-related (phenotypic) differences in the pharmacokinetics of metapristone (a metabolite), not the influence of specific genetic variants (genotypes) on mifepristone. |
| popPK | DeBono_2019 | irrelevant | 0 | 0 | This is a medicinal chemistry study focusing on the synthesis and in-vitro antiviral activity of mifepristone analogues, containing no pharmacokinetic data. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new LIFR inhibitors where mifepristone is used only as an in vitro comparator reference; no pharmacokinetic data for mifepristone are reported. |
| popPK | Flores-Pérez_2022 | irrelevant | 0 | 0 | The paper is a systematic review on the pharmacokinetics of midazolam, not mifepristone. |
| popPK | Földesi_1996 | relevant | 8 | 2 | The study reports a two-compartment model and half-life for mifepristone, but specific numeric values for clearance, volume, or the mean half-life are not present in the provided text (only ranges and qualitative descriptions). |
| popPK | Gazorpak_2023 | irrelevant | 0 | 0 | The paper is a study on GR-PROTACs (KH-103) and only mentions mifepristone as a comparator drug without providing any pharmacokinetic parameters for it. |
| PGx | Ghosh_2018 | not_relevant | 1 | 0 | Mifepristone is used as a pharmacological tool to inhibit the glucocorticoid receptor; the paper does not report how mifepristone's own PK/PD is altered by genetic variants. |
| PGx | Haehner_2004 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 inhibition by mifepristone, which is a drug-drug interaction mechanism, not a pharmacogenomic effect (gene variant changing PK/PD) of mifepristone. |
| popPK | Hao_2022 | irrelevant | 0 | 0 | The paper is a computational study on machine learning models for drug toxicity and does not contain pharmacokinetic data for mifepristone. |
| PGx | He_1999 | not_relevant | 0 | 0 | The paper describes the mechanism-based inactivation of CYP3A4 by mifepristone in an in vitro reconstituted system and does not report pharmacogenomic effects (genotype/variant dependent changes) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Heikinheimo_2003 | not_relevant | 0 | 0 | The paper describes the general pharmacokinetics of mifepristone, including metabolism by CYP3A4 and binding to AAG, but does not report any specific gene variant or genotype associated with changes in PK/PD parameters. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | The study focuses on machine learning models for digoxin dosage prediction and contains no pharmacokinetic data for mifepristone. |
| popPK | Huang_2006 | irrelevant | 0 | 0 | Mifepristone is used only as a pharmacological blocker in an in-vitro ion channel study, with no pharmacokinetic parameters reported. |
| PGx | Hukkanen_2003 | not_relevant | 0 | 0 | The study investigates CYP3A5 induction in lung cells and does not report PK/PD parameters for mifepristone, which is only used as a negative control/antagonist. |
| popPK | Hutson_2015 | irrelevant | 0 | 0 | The paper is a review/editorial focused on the pharmacokinetics of enzalutamide, and mifepristone is only mentioned as a drug under investigation in combination trials without providing any specific PK parameters for it. |
| popPK | Jakob_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for GRM-01 (a glucocorticoid receptor modulator), not for mifepristone (which is only mentioned as a mechanism probe in an in vitro assay). |
| PGx | Jang_1996 | not_relevant | 2 | 5 | The paper identifies CYP3A4 as the metabolic enzyme but does not report effects of specific gene variants, genotypes, or phenotypes on PK or PD parameters. |
| PGx | Jang_1997 | not_relevant | 1 | 5 | The paper is a general review of antiprogestin PK/PD and metabolism but does not report specific effects of gene variants or genotypes on mifepristone parameters. |
| PGx | Jang_1998 | not_relevant | 0 | 0 | The paper describes an in vitro mechanism of enzyme inactivation by mifepristone but does not report a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| popPK | Kenny_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of midazolam (the victim drug) in a rat liver model where mifepristone is used solely as a probe inhibitor, rather than reporting mifepristone's own disposition parameters. |
| PGx | Khan_2002 | not_relevant | 2 | 5 | The paper compares enzymatic properties (Vmax, Km, inactivation) of recombinant CYP3A4 and CYP3A5 in vitro, rather than reporting a pharmacogenomic effect (gene variant impact) on a human PK or PD parameter of mifepristone. |
| PGx | Kyle_2022 | not_relevant | 0 | 0 | The paper studies the effect of an ABCC1 inhibitor (probenecid) on HPA axis regulation using mifepristone as a tool, but does not report how a gene variant/genotype of mifepristone alters its PK or PD parameters. |
| popPK | Larrea_2022 | irrelevant | 0 | 0 | The paper is a sociological study on abortion service access and does not contain any pharmacokinetic data or parameters for mifepristone. |
| PGx | Lau_2013 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of Ginkgo biloba on the glucocorticoid receptor, using mifepristone only as an antagonist control without analyzing any gene variants affecting mifepristone's PK or PD. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The paper investigates mechanism-based CYP inhibition by mifepristone in an in vitro system, not the effect of genetic variants on mifepristone's PK/PD. |
| PGx | Lin_2009 | not_relevant | 0 | 0 | The paper reports biochemical mechanism-based inactivation of CYP2B6 by mifepristone, but does not report a pharmacogenomic association between a specific gene variant and a PK/PD parameter. |
| PGx | Ma_2007 | not_relevant | 0 | 0 | The study analyzes the in vitro metabolism of a different compound (TPA023) rather than mifepristone, and mifepristone is only used as a CYP3A4 inhibitor in the experiments. |
| PGx | Maier_2007 | not_relevant | 0 | 0 | The paper studies the effect of budesonide on P-gp expression in cell lines, not a pharmacogenomic effect (gene variant impact) on the PK/PD of mifepristone. |
| popPK | Manella_2021 | irrelevant | 0 | 0 | The paper describes a circadian clock resetting method (Circa-SCOPE) using dexamethasone and other agents; mifepristone is not the subject of the study and no PK parameters are reported. |
| popPK | Morris_2011 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for telapristone, not mifepristone (which was used only as an internal standard). |
| PGx | Naritomi_2004 | not_relevant | 0 | 0 | The paper describes an in vitro methodology for CYP inhibition and lists mifepristone as a typical irreversible inhibitor, but it does not investigate the impact of human genetic variants on the PK or PD of mifepristone. |
| PGx | Nguyen_2017 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (ketoconazole) on mifepristone pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Nittoh_1998 | irrelevant | 0 | 0 | Mifepristone is used only as a glucocorticoid receptor antagonist in an in-vitro mechanism study, with no pharmacokinetic parameters reported. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding for unrelated drugs (zopiclone, tamsulosin, etc.) and does not involve mifepristone or pharmacokinetic parameters. |
| PGx | Oda_2013 | not_relevant | 0 | 0 | The paper investigates the effect of mifepristone on ABCG2 expression as a control, but does not report how a gene variant alters the PK or PD of mifepristone. |
| popPK | Ozers_2007 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of androgen receptor binding and peptide recruitment, containing no pharmacokinetic parameters for mifepristone. |
| popPK | Pagán-Busigó_2022 | irrelevant | 0 | 0 | The paper is a systematic review of corticotropin-releasing hormone (CRH) antagonists and contains no data, models, or parameters for mifepristone. |
| popPK | Parra-Guillen_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of IL-12 and IFN-gamma cytokines induced by a mifepristone-inducible vector, not the disposition parameters of mifepristone itself. |
| popPK | Pondugula_2004 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study focusing on ion transport in semicircular canal epithelium, where mifepristone is used only as a pharmacological antagonist to confirm glucocorticoid receptor involvement, not for PK parameter estimation. |
| popPK | Pondugula_2013 | irrelevant | 0 | 0 | This is an in vitro ion transport study where mifepristone is used only as a glucocorticoid receptor antagonist to block steroid effects, not to determine its pharmacokinetic parameters. |
| PGx | Poutou_2015 | not_relevant | 0 | 0 | The paper uses mifepristone as a chemical inducer for a viral gene expression system, not to study its PK/PD properties or genetic interactions with the drug. |
| PGx | Raucy_2002 | not_relevant | 0 | 0 | The paper reports that mifepristone induces CYP3A4 in a cell-based assay, but it does not report a pharmacogenomic effect (gene variant) on mifepristone's pharmacokinetics or pharmacodynamics. |
| PGx | Reinen_2018 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic assays and metabolite characterization; it does not report pharmacogenomic effects on in vivo PK or PD parameters. |
| PGx | Rew_2018 | not_relevant | 0 | 0 | The paper describes the development of a new drug (ORIC-101) and compares its properties to mifepristone, but does not report pharmacogenomic effects on mifepristone's PK/PD. |
| popPK | Rolan_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug emestedastat (an 11β-HSD1 inhibitor), not mifepristone. |
| popPK | Rosati_2020 | irrelevant | 0 | 0 | The study investigates the association of progesterone receptor isoforms with breast cancer metastasis and uses mifepristone only as an in vitro pharmacological modulator, without reporting any pharmacokinetic parameters. |
| popPK | Sarkar_2002 | irrelevant | 2 | 4 | The paper is a narrative review summarizing existing data (e.g., half-lives, volumes) without being an original primary pharmacokinetic study. |
| PGx | Savarese_2022 | not_relevant | 0 | 0 | The paper studies corticosterone levels and gene expression in mice to understand alcohol response, not the pharmacokinetics or pharmacodynamics of mifepristone itself. |
| popPK | Seidel_2019 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/in-vivo investigation of cardiomyocyte structure where mifepristone is used solely as a glucocorticoid receptor antagonist to block dexamethasone effects, with no pharmacokinetic parameters reported. |
| PGx | Soars_2006 | not_relevant | 4 | 3 | The paper reports comparative in vitro intrinsic clearance (CLint) of mifepristone by CYP3A4 vs CYP3A5 but does not report a specific gene variant/genotype/phenotype altering a clinical PK/PD parameter of mifepristone. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, with no mention of mifepristone or its pharmacokinetics. |
| PGx | Sun_2010 | not_relevant | 0 | 0 | The study focuses on the stereoselective protein binding of tetrahydropalmatine, not mifepristone, and does not report pharmacogenomic effects on mifepristone PK/PD. |
| PGx | Takezawa_2012 | not_relevant | 1 | 1 | The paper studies PXR-mediated CYP3A4 induction in liver cell lines, using mifepristone only as an inducing ligand, and does not report the impact of any genetic variant on the PK/PD parameters of mifepristone itself. |
| popPK | Tanago_2014 | irrelevant | 0 | 0 | The study is an in-vitro reporter gene assay assessing ligand binding and transactivation properties (antagonism/synergism) for medaka VDRβ, and does not report any pharmacokinetic disposition parameters for mifepristone. |
| popPK | Tebbens_2018 | irrelevant | 0 | 0 | The paper is a review of mathematical models for PXR-mediated gene regulation and does not contain pharmacokinetic data for mifepristone. |
| popPK | Tessaro_2015 | irrelevant | 0 | 0 | The study is an in vitro toxicity assay using mifepristone as one of eight test chemicals to validate a bovine oocyte fertilization test, reporting no pharmacokinetic parameters. |
| popPK | Xia_1999 | irrelevant | 0 | 0 | The study focuses on CTLA-4 expression kinetics in T cells and uses mifepristone only as a mechanistic antagonist, reporting no pharmacokinetic parameters. |
| PGx | Xu_2020 | not_relevant | 0 | 0 | The paper reports on a chemical crystal polymorph (Form D) enhancing PK parameters, not a genetic variant or genotype. |
| PGx | Yao_2022 | not_relevant | 0 | 0 | The paper studies the mechanism of mifepristone-induced hepatomegaly using PXR-knockout mice but does not report pharmacokinetic or pharmacodynamic changes in humans due to specific genetic variants (pharmacogenomics). |
| PGx | Yueh_2005 | not_relevant | 0 | 0 | The paper uses mifepristone as an inducer to test a CYP3A4 bioassay system but does not report any gene variants affecting the PK or PD parameters of mifepristone itself. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of eosinophil apoptosis where mifepristone is used as a glucocorticoid receptor antagonist, not as a subject drug for PK analysis. |
| popPK | Zhang_2001 | irrelevant | 0 | 0 | The paper studies the effect of inhaled glucocorticoids on neutrophil apoptosis where mifepristone acts only as a mechanism-reversal agent, not the subject of a PK analysis. |
| popPK | Zhang_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of mometasone's effect on apoptosis where mifepristone is used only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glucocorticoid receptor agonist activity and does not report any pharmacokinetic parameters. |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | The paper discusses mifepristone only as a mechanism-based inhibitor of CYP3A4 in the context of drug-drug interactions, not as a substrate whose PK/PD is affected by a genetic variant. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The text is a general review of CYP3A4 drug interactions and lists mifepristone as an inhibitor, but it does not report a pharmacogenomic effect (gene variant) on mifepristone PK/PD. |
| popPK | el_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological examination of oxytocin receptor characteristics in rat myometrium, not a pharmacokinetic study of mifepristone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
