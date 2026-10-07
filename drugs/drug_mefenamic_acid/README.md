<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;mefenamic acid&quot;}]"></div>

# mefenamic acid

- **generic name:** mefenamic acid
- **ATC codes:** `M01AG01`
- **DrugBank:** [DB00784](https://go.drugbank.com/drugs/DB00784) · **PubChem:** [CID 4044](https://pubchem.ncbi.nlm.nih.gov/compound/4044)
- **molar mass:** 241.2851 g/mol (C15H15NO2) — DrugBank
- **groups:** approved

## About

Mefenamic acid is a non-steroidal anti-inflammatory drug used to treat pain, premenstrual syndrome, and hyperthermia. It is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q284321](https://www.wikidata.org/wiki/Q284321) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:12 | 16:04 | 0/0/0 | 1/1/0 | 0/0/0 | 353,421/6,469 | einfracz / qwen3.8-27b | 18 | 10/6 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Shahid_2021_15_LOX](drugs/drug_mefenamic_acid/pd_Shahid_2021_15_LOX.md) | 15-lipoxygenase (15-LOX) enzyme activity ← Mefenamic acid · inhibition effect | — | Shahid W et al., Identification of NSAIDs as lipoxygenas…, Bioorganic chemistry (2021) | [10.1016/j.bioorg.2021.104818](https://doi.org/10.1016/j.bioorg.2021.104818) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Gögelein_1990_single_nonselective_cation_channel_current](drugs/drug_mefenamic_acid/pd_G_gelein_1990_single_nonselective_cation_channel_current.md) | single nonselective cation channel current ← mefenamic acid · direct Emax (saturable) effect | — | Gögelein H et al., Flufenamic acid, mefenamic acid and nif…, FEBS letters (1990) | [10.1016/0014-5793(90)80977-q](https://doi.org/10.1016/0014-5793(90)80977-q) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mefenamic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `UGT1A9` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | small intestine | `UGT2B7` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 182 matched, 116 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Antonio_2019 | not_relevant | 0 | 0 | The paper focuses on the physicochemical influence of excipients on the polymorphic behavior of mefenamic acid, not on pharmacogenomic effects on PK or PD parameters. |
| popPK | Barker_1982 | irrelevant | 0 | 0 | This is a pharmacodynamic study on guinea-pig ileum where mefenamic acid is used solely as a tool compound to block receptor-mediated contraction, not as the subject of a pharmacokinetic analysis. |
| PGx | Belov_2022 | not_relevant | 0 | 0 | The paper investigates the conformational preferences of mefenamic acid in different solvents using NMR spectroscopy and does not report any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes a machine learning method for drug synergy prediction in cancer cells and does not contain pharmacokinetic data for mefenamic acid. |
| PGx | Boerma_2015 | not_relevant | 0 | 0 | The paper describes a method for preparing drug-protein adducts using mefenamic acid but does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Bofill_2020 | irrelevant | 0 | 0 | The paper is a clinical trial review comparing treatments for heavy menstrual bleeding, where mefenamic acid is only a comparator drug and no pharmacokinetic parameters are reported. |
| PGx | Bonnabry_1996 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of lornoxicam, not mefenamic acid; mefenamic acid is only mentioned as an inhibitor of CYP2C9. |
| popPK | Buckley_1989 | irrelevant | 0 | 0 | Mefenamic acid is used only as a cyclo-oxygenase inhibitor control agent in an in vitro secretory study, with no pharmacokinetic parameters reported. |
| popPK | Collard_2013 | irrelevant | 0 | 0 | The study is an ecotoxicology paper assessing endocrine disruption in zebrafish and invertebrates, reporting no pharmacokinetic parameters for mefenamic acid. |
| PGx | Cook_2019 | not_relevant | 1 | 1 | The paper describes a drug-drug interaction (mefenamic acid as an inhibitor of SULT1A1) in a single individual without investigating the impact of gene variants/genotypes on the pharmacokinetics or pharmacodynamics of mefenamic acid. |
| PGx | Cottrill_2021 | not_relevant | 2 | 2 | The paper catalogs genotypes and general metabolic phenotypes for a cohort but does not measure or report specific quantitative changes in pharmacokinetic or pharmacodynamic parameters for mefenamic acid. |
| PGx | Frechen_2024 | not_relevant | 0 | 0 | The paper models the pharmacokinetics of vericiguat and the effect of mefenamic acid on it, not the pharmacokinetics of mefenamic acid. |
| PGx | Gaganis_2007 | not_relevant | 0 | 0 | The paper describes in vitro metabolic kinetics and enzyme characterization without reporting any association between specific gene variants or genotypes and pharmacokinetic parameters. |
| PGx | Gagez_2012 | not_relevant | 2 | 5 | The paper uses mefenamic acid as a substrate to validate a UGT phenotyping assay and confirms its substrate specificity, but does not report the effect of a specific gene variant on the pharmacokinetic parameters of mefenamic acid itself. |
| popPK | Garg_2012 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study investigating the pharmacological activity of mefenamic acid on Slo2.1 channels in Xenopus oocytes, with no pharmacokinetic data reported. |
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on the metabolic enzymes for boceprevir, and mefenamic acid is only used as a tool inhibitor to characterize the reaction mechanism, not as the drug being studied for pharmacogenomic effects. |
| popPK | Halliwell_1999 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of GABAA receptor modulation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Han_2012 | not_relevant | 0 | 0 | The paper investigates the glucuronidation of salvianolic acid A by UGTs and mentions mefenamic acid only as a non-specific inhibitor, not as a substrate with pharmacogenomic PK/PD analysis. |
| PGx | Harada_2022 | not_relevant | 0 | 0 | The paper reports mefenamic acid as an inhibitor in the metabolism of a radiotracer, not a pharmacogenomic effect on the PK/PD of mefenamic acid itself. |
| PGx | Jarrar_2019 | not_relevant | 0 | 0 | The study measures the effect of the drug on gene expression (drug-induced toxicity/metabolism changes), not the effect of a genetic variant on drug PK/PD parameters. |
| PGx | Jarrar_2020 | not_relevant | 2 | 1 | The paper studies the inhibition of 20-HETE glucuronidation by mefenamic acid and the effect of UGT2B7 polymorphisms on diclofenac, but does not report pharmacogenomic effects on the PK/PD parameters of mefenamic acid itself. |
| PGx | Jia_2025 | not_relevant | 0 | 0 | The paper reports a PK drug-drug interaction (UGT inhibition) of mefenamic acid on soticlestat, not a pharmacogenomic effect (gene variant) on mefenamic acid. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The study reports in vitro enzyme inhibition of UGTs by mefenamic acid but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Kahma_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of clopidogrel metabolism; mefenamic acid is mentioned only as an inhibitor used in experiments, not as the drug under study. |
| PGx | Karjalainen_2008 | not_relevant | 0 | 0 | The paper reports in vitro CYP1A2 inhibition and in vivo PK interactions with tizanidine, but does not investigate pharmacogenomic effects of gene variants on mefenamic acid parameters. |
| PGx | Kawase_2022 | not_relevant | 0 | 0 | The paper focuses on covalent adduct formation with UGT enzymes, not pharmacogenomic variants affecting PK/PD. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for Parkinson's disease in zebrafish and does not investigate mefenamic acid or report its pharmacokinetic parameters. |
| PGx | Knights_2009 | not_relevant | 0 | 0 | The paper studies the inhibition of aldosterone glucuronidation by mefenamic acid but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of mefenamic acid itself. |
| popPK | Koivisto_1998 | irrelevant | 0 | 0 | The study is an in-vitro patch-clamp investigation of ion channel regulation where mefenamic acid is used as a channel blocker, not a PK subject. |
| PGx | Konishi_2018 | not_relevant | 0 | 0 | The paper studies the metabolism of mirabegron; mefenamic acid is used only as a reference inhibitor in the experimental setup and is not the drug of interest. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of montelukast in children; mefenamic acid is mentioned only as an internal standard for the HPLC method. |
| PGx | Mano_2007 | not_relevant | 0 | 0 | The study focuses on the enzyme kinetics of flurbiprofen metabolism and mentions mefenamic acid only as an inhibitor, without reporting any gene variants or genotypes. |
| PGx | Mano_2007_2 | not_relevant | 0 | 0 | The study reports the in vitro inhibition of UGT2B7 by mefenamic acid but does not investigate any pharmacogenomic effect (gene variant/genotype) on its PK/PD parameters. |
| PGx | Mano_2007_3 | not_relevant | 0 | 0 | The paper focuses on the glucuronidation of gemfibrozil, and mefenamic acid is only mentioned as an inhibitor of that process, not as the primary drug undergoing pharmacogenomic analysis for its own PK/PD parameters. |
| popPK | Marshall_2021 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of ertugliflozin, not mefenamic acid. |
| popPK | Meyer_2024 | irrelevant | 0 | 0 | The paper is an environmental analysis study detecting pharmaceuticals and metabolites in wastewater, not a pharmacokinetic study reporting disposition parameters for mefenamic acid. |
| PGx | Ogiso_2021 | not_relevant | 2 | 2 | The paper investigates the mechanistic role of the SOD1 enzyme in detoxifying MFA metabolites using recombinant proteins and cell lines, but does not report pharmacogenomic associations between genetic variants and PK/PD parameters in humans. |
| PGx | Omura_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of FYX-051 and uses mefenamic acid only as a tool compound (inhibitor) to identify the UGT isoform, not as the subject of a pharmacogenomic study. |
| PGx | Oselin_2007 | not_relevant | 0 | 0 | The paper describes in vitro inhibition of TPMT by mefenamic acid (a potential drug-drug interaction mechanism) but does not report a pharmacogenomic effect of a gene variant on mefenamic acid's PK or PD. |
| PGx | Prasher_2026 | not_relevant | 0 | 0 | The paper discusses mefenamic acid's solid-state engineering and co-crystallization to improve pharmacokinetics, not gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Revankar_2023 | irrelevant | 0 | 0 | The study focuses on the in-silico and in-vitro anti-inflammatory activity of Urolithin A against COX-2, and does not investigate mefenamic acid or its pharmacokinetic parameters. |
| PGx | Rong_2021 | not_relevant | 0 | 0 | The paper reports mefenamic acid as a potent inhibitor of SULT enzymes (specifically for p-cresol sulfonation) and characterizes SULT1A1 variants, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of mefenamic acid itself. |
| popPK | Rothan_2013 | irrelevant | 0 | 0 | The study focuses on the in vitro antiviral activity of mefenamic acid against dengue virus, containing no pharmacokinetic or disposition parameters. |
| popPK | Rothan_2016 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of mefenamic acid (EC50 and viral titers) in an infection model, not on its pharmacokinetic disposition parameters. |
| PGx | Sadeque_2012 | not_relevant | 0 | 0 | The paper discusses the metabolism of lorcaserin, not mefenamic acid, which is only mentioned as an inhibitor. |
| popPK | Saidi_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo activity of new anti-inflammatory compounds, not the pharmacokinetics of mefenamic acid. |
| popPK | Saito_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reaction reports for VEGF inhibitors and NSAIDs, and does not contain pharmacokinetic data or specifically mention mefenamic acid. |
| popPK | Singhai_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol comparing aescin and diclofenac for postoperative pain management, with no pharmacokinetic analysis of mefenamic acid (which is only mentioned in the introduction as part of a citation for a different study). |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study characterizing the allosteric modulation of GABA(A) receptors by various compounds, including mefenamic acid, and does not report pharmacokinetic parameters. |
| popPK | Smyth_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indometacin, not mefenamic acid. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA antagonist effects and does not report pharmacokinetic parameters for mefenamic acid. |
| PGx | Tachibana_2005 | not_relevant | 0 | 0 | The paper investigates the metabolism of fluoroquinolones, and mefenamic acid is mentioned only as an inhibitor, not as the drug of interest for a pharmacogenomic study. |
| PGx | Tan_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between sunitinib and mefenamic acid, not the pharmacogenomics of mefenamic acid itself. |
| popPK | Thompson_2004 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of a GABA(A) receptor inhibitor where mefenamic acid is only used as a negative control for binding competition. |
| PGx | Venkataraman_2014 | not_relevant | 0 | 0 | The paper describes metabolic pathways using recombinant enzymes and human liver microsomes but does not report genotype-specific changes in PK/PD parameters for mefenamic acid in a human population. |
| PGx | Venkataraman_2014_2 | not_relevant | 0 | 0 | The paper focuses on using engineered P450 mutants as biocatalysts for metabolic synthesis and does not report in vivo human pharmacogenomic effects on PK/PD parameters of mefenamic acid. |
| PGx | Walsky_2012 | not_relevant | 0 | 0 | The study evaluates mefenamic acid as a UGT inhibitor in an in vitro pharmacology assay, not a pharmacogenomic effect on its PK/PD. |
| PGx | Wang_2009 | not_relevant | 2 | 0 | The paper investigates structural docking and MD simulations of mefenamic acid binding to CYP2C9, but it does not report observed pharmacogenomic effects (gene variant -&gt; PK/PD change) in a biological context. |
| PGx | Wynalda_2003 | not_relevant | 0 | 0 | The paper studies the glucuronidation of bropirimine, not a pharmacogenomic effect on a PK/PD parameter of mefenamic acid. |
| popPK | Yin_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of soticlestat, using mefenamic acid only as a strong UGT1A9 inhibitor in a co-administration scenario, not as the subject drug for which PK parameters are reported. |
| PGx | Yogo_2022 | not_relevant | 0 | 0 | The paper studies engineered prokaryotic enzymes for metabolite production, not human pharmacogenomics or in vivo PK/PD effects of genetic variants. |
| popPK | Yokoyama_2013 | irrelevant | 0 | 0 | The study is an in-vitro investigation of antiplatelet interactions between NSAIDs and aspirin, not a pharmacokinetic study of mefenamic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
