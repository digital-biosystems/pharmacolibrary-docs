<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;inosine&quot;}]"></div>

# inosine

- **generic name:** inosine
- **ATC codes:** `D06BB05`, `G01AX02`, `S01XA10`
- **DrugBank:** [DB04335](https://go.drugbank.com/drugs/DB04335) · **PubChem:** [CID 6021](https://pubchem.ncbi.nlm.nih.gov/compound/6021)
- **molar mass:** 268.2261 g/mol (C10H12N4O5) — DrugBank
- **groups:** approved, investigational

## About

Inosine is a naturally occurring metabolite that has been used as an antiviral agent, applied topically for skin, gynecological, and eye infections. It is approved and used in various topical formulations, though it is not widely employed and no EU-wide authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422564](https://www.wikidata.org/wiki/Q422564) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:41 | 24:56 | 0/0/0 | 0/1/0 | 0/0/0 | 1,094,761/14,299 | einfracz / qwen3.8-27b | 53 | 9/40 | 50/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Módis_2009_cytoprotective_effect](drugs/drug_inosine/pd_M_dis_2009_cytoprotective_effect.md) | cytoprotective effect ← inosine · stimulation effect | — | Módis K et al., Cytoprotective effects of adenosine and…, British journal of pharmaco… (2009) | [10.1111/j.1476-5381.2009.00432.x](https://doi.org/10.1111/j.1476-5381.2009.00432.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=inosine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `XDH` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `XDH` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PNP (unknown), SLC28A3 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 918 matched, 190 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bakker_2007 | not_relevant | 1 | 0 | The paper discusses pharmacogenetics of mercaptopurine metabolism, not the pharmacokinetics or pharmacodynamics of inosine itself. |
| PGx | Bierau_2007 | not_relevant | 1 | 0 | The paper discusses inosine triphosphatase and thiopurines, but does not report pharmacokinetic or pharmacodynamic effects of inosine itself. |
| popPK | Bordbar_2015 | irrelevant | 0 | 0 | The paper describes metabolic kinetics in erythrocytes and focuses on ribavirin and inosine triphosphatase, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug inosine. |
| PGx | Bordbar_2015 | not_relevant | 2 | 2 | The paper mentions inosine triphosphatase deficiency as a genetic variant protecting against ribavirin side effects, but it does not report how this genotype changes a PK or PD parameter of inosine itself, nor does it provide fitted quantitative effect sizes for inosine metabolism. |
| PGx | Broetto-Biazon_2009 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects; it compares metabolic responses to NAD+ between different species and rat strains without specifying any gene variants or genotypes. |
| PGx | Burrell_2022 | not_relevant | 0 | 0 | The paper discusses mutations in the endogenous enzyme IMPDH and their impact on its native metabolic function (GTP synthesis/feedback inhibition), not the pharmacokinetics or pharmacodynamics of a therapeutic drug named inosine. |
| PGx | Burrell_2022_2 | not_relevant | 0 | 0 | The paper analyzes IMPDH1 variants and their effect on enzyme inhibition (IC50) and structure, but does not report in vivo pharmacokinetic or pharmacodynamic parameters of the drug inosine. |
| popPK | Butlen_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacological binding assay on frog tissue using inosine-5'-triphosphate as a comparator ligand, not a pharmacokinetic study. |
| PGx | Cader_2020 | not_relevant | 0 | 0 | The paper describes the enzymatic function of FAMIN in purine metabolism and its role in disease pathogenesis, but does not report on pharmacokinetic or pharmacodynamic parameters of inosine as a drug. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper investigates a new compound named gliocidin and its effect on IMPDH2; inosine is only mentioned as a substrate/intermediate in the context of this new drug's mechanism, not as the subject of a PK study. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | This study is a multi-omics pharmacological analysis of Isodon lophanthoides in a mouse liver fibrosis model, where inosine is only identified as a differentially altered endogenous metabolite, and no pharmacokinetic parameters (CL, V, t1/2) are reported. |
| popPK | Choi_2005 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on mitochondrial protection using inosine as a reagent, not a pharmacokinetic study. |
| popPK | Chu_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of allopurinol, oxypurinol, and purine metabolites (hypoxanthine, xanthine, uric acid), not inosine; inosine is only mentioned as a precursor or in general background context without specific PK parameters for the drug itself. |
| popPK | Chu_2022_2 | irrelevant | 0 | 0 | The study reports population PK parameters for allopurinol and its metabolite oxypurinol, not inosine. |
| popPK | Chung_2009 | irrelevant | 0 | 0 | The study investigates the synthesis and antiviral activity of N(1)-3-fluorophenyl-inosine, a structural analog, rather than the pharmacokinetics of inosine itself. |
| PGx | Cleghorn_2022 | not_relevant | 0 | 0 | The paper investigates the physiological role of the IMPDH enzyme in zebrafish purine synthesis, not the pharmacokinetics or pharmacodynamics of inosine as a drug. |
| popPK | Crews_2023 | irrelevant | 0 | 0 | The paper investigates the small-molecule inhibitor Rebecsinib and ADAR1 splice switching, and does not report pharmacokinetic parameters for inosine. |
| popPK | Cronstein_1994 | irrelevant | 0 | 0 | The study is a mechanistic investigation of NSAIDs on neutrophil adhesion where inosine is only mentioned as a metabolite of adenosine, with no pharmacokinetic parameters reported. |
| popPK | DAmbrosi_2001 | irrelevant | 0 | 0 | The study is an in vitro cell biology investigation regarding ATP and NGF signaling, with no pharmacokinetic analysis or data for inosine. |
| popPK | Deniskin_2016 | irrelevant | 0 | 0 | The paper describes an in vitro mechanistic study of malaria parasite transporters where inosine is used as a substrate/competitor to determine IC50 values, not a pharmacokinetic study of inosine disposition. |
| PGx | Derijks_2006 | not_relevant | 0 | 0 | The paper reviews thiopurine pharmacogenetics, not inosine, and does not report any pharmacokinetic or pharmacodynamic parameters for inosine itself. |
| PGx | Derijks_2010 | not_relevant | 0 | 0 | The paper reviews pharmacogenetics of thiopurines (azathioprine/6-mercaptopurine) and does not report on inosine. |
| PGx | Dewit_2010 | not_relevant | 0 | 0 | The paper discusses thiopurine pharmacogenomics and mentions inosine triphosphate pyrophosphatase (ITPA) only as an enzyme involved in thiopurine metabolism, not as a study of the pharmacokinetics or pharmacodynamics of the drug inosine. |
| popPK | Dong_2014 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics for mycophenolic acid, where inosine monophosphate dehydrogenase is mentioned only as the drug's target enzyme, not as the subject of PK analysis. |
| popPK | Dong_2014_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid, using inosine monophosphate dehydrogenase as an enzyme biomarker, not the drug inosine. |
| PGx | Ehren_2021 | not_relevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for mycophenolate mofetil and does not report any pharmacogenomic effects of inosine variants on its PK or PD parameters. |
| popPK | Feng_2026 | irrelevant | 0 | 0 | The paper is an immunology study on the nonoxidative pentose phosphate pathway in CD8+ T cells; inosine is not the subject drug, and no pharmacokinetic parameters for inosine are reported. |
| popPK | Forni_2015 | irrelevant | 0 | 0 | The paper discusses the evolutionary history of ADAR genes and RNA editing, containing no pharmacokinetic data or parameters for inosine. |
| PGx | Franca_2019 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of thiopurines, not the drug inosine. |
| PGx | Fujii_2020 | not_relevant | 0 | 0 | The paper studies a metabolic gene defect in silkworms (Bombyx mori) affecting inosine production, which is a physiological/biological study, not a pharmacogenomic study of inosine as a drug in humans. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA) and mycophenolate sodium, not inosine. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and seizure effects of SSR504734 in mice, not inosine. |
| PGx | García-Caballero_2017 | not_relevant | 0 | 0 | The paper investigates the enzymatic activity of Endonuclease V on inosine-containing RNA substrates in Trypanosoma brucei, not the pharmacokinetics or pharmacodynamics of inosine as a drug modulated by genetic variants. |
| PGx | Gardner_1979 | not_relevant | 0 | 0 | The paper studies yeast guanine auxotrophs and purine biosynthesis, containing no data on human pharmacogenomics or pharmacokinetics of inosine. |
| PGx | Gerbek_2018 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for mercaptopurine, not inosine. |
| popPK | Gorla_2013 | irrelevant | 0 | 0 | The paper describes in vitro enzyme inhibition (IC50) and metabolic stability of drug candidates targeting inosine 5'-monophosphate dehydrogenase, rather than pharmacokinetic disposition parameters for the drug inosine itself. |
| popPK | Gualix_2003 | irrelevant | 0 | 0 | The study investigates the presence of receptors in rat brain synaptosomes and uses inosine pentaphosphate (Ip5I) only as a pharmacological antagonist, not to model inosine pharmacokinetics. |
| popPK | Guzmán-Gutiérrez_2010 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on nucleoside transporter expression in human endothelial cells, where inosine is used as a tool compound, not as the subject of a pharmacokinetic modeling study. |
| popPK | Gómez-Villafuertes_2000 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of P2X receptor agonists in isolated rat brain synaptosomes and does not report pharmacokinetic parameters for inosine. |
| popPK | Heida_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of mycophenolic acid (MPA), not inosine; inosine is only mentioned as part of the enzyme name "inosine monophosphate dehydrogenase" (IMPDH) which is the target of MPA. |
| popPK | Hulpia_2020 | irrelevant | 0 | 0 | The paper is an in vitro medicinal chemistry and pharmacological study of inosine analogues for anti-trypanosomal activity, reporting no pharmacokinetic disposition parameters for inosine. |
| popPK | Jashés_1996 | irrelevant | 0 | 0 | The paper describes in vitro antiviral activity (EC50/IC50) of ribavirin and other compounds against a virus, not the pharmacokinetic parameters of inosine. |
| PGx | Johnson_1994 | not_relevant | 0 | 0 | The paper studies yeast genetics and N-myristoylation, not human pharmacogenomics of inosine as a drug. |
| PGx | Johnstone_1985 | not_relevant | 0 | 0 | The paper describes genetic mutations causing auxotrophy for purine nucleosides in Drosophila melanogaster and does not report pharmacokinetic or pharmacodynamic parameters of inosine as a drug. |
| popPK | Kaczynski_2022 | irrelevant | 0 | 0 | The paper investigates the subcellular localization of lncRNAs in retinal pigment epithelium and mentions A-to-I RNA editing (inosine) only as a mechanism, providing no pharmacokinetic data for inosine as a drug. |
| PGx | Kamal_2016 | not_relevant | 2 | 5 | The paper discusses ITPA variants affecting ribavirin-induced hematotoxicity (a PD/adverse effect), not the pharmacokinetic or primary pharmacodynamic parameters of inosine itself. |
| PGx | Kevelam_2015 | not_relevant | 0 | 0 | The paper discusses a genetic disorder caused by ITPA mutations, not the effect of a genetic variant on the pharmacokinetics/pharmacodynamics of a specific drug. |
| PGx | Khalil_2006 | not_relevant | 0 | 0 | The paper develops an assay for IMPDH activity to investigate potential genetic variation in thiopurine synthesis pathways, but it does not report a specific gene variant effect on the pharmacokinetics or pharmacodynamics of inosine. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper studies the enzymatic activity of endonuclease V variants on inosine as a substrate, not the pharmacokinetics or pharmacodynamics of inosine as a drug. |
| popPK | Kloor_2002 | irrelevant | 0 | 0 | The study is an in-vitro biochemical binding assay where inosine is used only as a weak competitive ligand, not as a subject for PK analysis. |
| PGx | Kudo_2009 | not_relevant | 0 | 0 | The paper reports genetic variants in enzymes involved in thiopurine metabolism (specifically inosine metabolism), but it does not report a pharmacokinetic or pharmacodynamic effect of these variants on the drug inosine itself. |
| popPK | Kuramoto_2010 | irrelevant | 0 | 0 | The paper studies the in vitro antiviral activity of mizoribine and ganciclovir against CMV, mentioning inosine only as a substrate for the enzyme inosine monophosphate dehydrogenase, and does not report PK parameters for inosine. |
| PGx | Labesse_2015 | not_relevant | 0 | 0 | The paper describes structural studies of bacterial IMPDH variants and their relationship to a human disease-associated mutation, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of inosine. |
| popPK | Lambertucci_2015 | irrelevant | 0 | 0 | The paper is a review of medicinal chemistry and ligand structure-activity relationships for P2X receptors, reporting in vitro potency values (IC50/EC50) rather than in vivo pharmacokinetic parameters for inosine. |
| PGx | Laverdière_2015 | not_relevant | 1 | 0 | The study reports an association between gene variants and the clinical outcome (GvHD incidence), not pharmacokinetic or pharmacodynamic parameters of inosine. |
| popPK | Lee_2002 | irrelevant | 0 | 0 | The paper describes structure-activity relationships and anti-HIV activity (EC50) of nucleosides, not pharmacokinetic parameters. |
| popPK | Leung_2001 | irrelevant | 0 | 0 | This is an in vitro mechanistic study using inosine as a substrate to characterize transporters, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Li_2007 | not_relevant | 3 | 5 | The study characterizes transporter function in cell lines but does not report in vivo PK/PD parameter changes in humans for inosine. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate mofetil (MPA) and its biomarker IMPDH activity, not the drug inosine. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper describes population pharmacokinetic modeling for ceftazidime and avibactam, not inosine. |
| popPK | Linden_1991 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study on enzyme contamination and EDRF signaling, where inosine is only mentioned as a substrate product, and no pharmacokinetic parameters for inosine are reported. |
| popPK | Lioux_2016 | irrelevant | 0 | 0 | The paper describes in vitro/ex vivo biological evaluation of STING activators (cAIMP analogs) and does not report pharmacokinetic parameters for inosine. |
| popPK | Lobo-Rojas_2026 | irrelevant | 0 | 0 | The study is an in vitro biochemical and mechanistic investigation of T. cruzi IMPDH inhibition and does not report any pharmacokinetic parameters for inosine. |
| popPK | Lu_2025 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of mycophenolic acid (MPA), not inosine; inosine is mentioned only as part of the enzyme name (IMPDH) or as a substrate for measuring enzyme activity. |
| PGx | Macías_2011 | not_relevant | 1 | 1 | The text discusses inosine triphosphatase as a predictor of ribavirin-induced anemia, not the pharmacokinetics or pharmacodynamics of the drug inosine itself. |
| popPK | Marquet_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolate (MPA), not inosine, which is only mentioned as a substrate for the enzyme assay. |
| PGx | Marsh_2009 | not_relevant | 0 | 0 | The paper discusses the pharmacogenomics of mercaptopurine (not inosine), referencing ITPA only in the context of mercaptopurine toxicity. |
| popPK | Mazzucco_2015 | irrelevant | 0 | 0 | The paper studies the antiviral mechanism of an acridone derivative against dengue virus and only mentions inosine monophosphate dehydrogenase as a potential target, reporting no pharmacokinetic parameters for inosine. |
| PGx | McCune_2018 | not_relevant | 0 | 0 | The study evaluates IMPDH genotypes for clinical outcomes (GVHD), not pharmacokinetic or pharmacodynamic parameters of inosine. |
| PGx | McHutchison_2005 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy and tolerability of merimepodib but contains no pharmacogenomic analysis or reporting of genetic variants affecting PK or PD parameters. |
| popPK | Mori_2013 | irrelevant | 0 | 0 | The study investigates the mechanism of action of ribavirin in cell lines and does not report any pharmacokinetic parameters for inosine. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review on DPP-4 inhibitors in female cancers and does not mention inosine or report any pharmacokinetic parameters for it. |
| popPK | Mulder_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics and pharmacodynamics of ribavirin, not inosine; inosine is only mentioned as an enzyme (inosine triphosphatase) involved in ribavirin metabolism. |
| popPK | Módis_2009 | irrelevant | 0 | 0 | This is an in vitro mechanistic study assessing cytoprotective effects in cell cultures, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Novitzky-Basso_2026 | irrelevant | 0 | 0 | This is a metabolomic study using inosine diphosphate as a prognostic biomarker for survival in leukemia patients, not a pharmacokinetic study of inosine disposition. |
| popPK | Odunsi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of IDO1 inhibition and metabolic changes in ovarian cancer, not the pharmacokinetics of inosine. |
| PGx | Oliveira_2007 | not_relevant | 0 | 0 | The study reports allele frequencies of inosine triphosphatase in a population but does not report any change in PK/PD parameters of inosine. |
| popPK | Paintaud_2004 | irrelevant | 0 | 0 | The paper is a review of biomarkers for immunosuppressants (ciclosporin, tacrolimus, mycophenolate) and mentions inosine monophosphate dehydrogenase as a target, but does not report pharmacokinetic parameters for inosine itself. |
| popPK | Pandey_2025 | irrelevant | 0 | 0 | The paper is a review on CRISPR-Cas gene editing technology and contains no information regarding inosine or its pharmacokinetics. |
| popPK | Pandey_2025_2 | irrelevant | 0 | 0 | The paper is a review on shikonin, a different drug, and does not contain pharmacokinetic data for inosine. |
| PGx | Peltenburg_2016 | not_relevant | 2 | 5 | The paper examines ITPase expression in leukocytes and its lack of association with ITPA genotype, rather than reporting a pharmacogenomic effect on a specific pharmacokinetic or pharmacodynamic parameter of inosine. |
| PGx | Pineda-Tenor_2015 | not_relevant | 2 | 10 | The paper reports on pharmacogenomic effects on clinical adverse events (hemolytic anemia) and treatment discontinuation, rather than quantitative pharmacokinetic or pharmacodynamic parameters. |
| PGx | Plagemann_1983 | not_relevant | 0 | 0 | The paper studies adenosine metabolism and the effects of adenosine kinase deficiency on nucleotide synthesis, but does not report the pharmacokinetics or pharmacodynamics of inosine as a drug. |
| PGx | Pouché_2016 | not_relevant | 0 | 0 | The paper is a review on immunosuppressive drugs in transplantation and does not discuss inosine. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper investigates glycine metabolism in human hepatocytes, with inosine monophosphate (IMP) mentioned only as a metabolite in a comparison, and no pharmacokinetic parameters for inosine are reported. |
| popPK | Price_2000 | irrelevant | 0 | 0 | The paper investigates the functional consequences of RNA editing on the 5-HT(2C) receptor in vitro and does not report any pharmacokinetic parameters for inosine. |
| PGx | Qian_2019 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of anthocyanins on hyperuricemia in mice, but it does not report any pharmacogenomic effects (based on gene variants) on the PK or PD parameters of inosine. |
| popPK | Rabie_2022 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of didanosine (an inosine analogue) against SARS-CoV-2 in vitro and does not report pharmacokinetic parameters for inosine. |
| popPK | Ragazzi_1991 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and receptor binding investigation in guinea pig atrial myocytes, focusing on adenosine and adenine nucleotides, with no pharmacokinetic parameters reported for inosine. |
| PGx | Rembeck_2014 | not_relevant | 3 | 5 | The paper reports pharmacogenomic effects of ITPA variants on the PK/PD of ribavirin (drug in the study), not inosine, although ITPase metabolizes inosine. |
| popPK | Riglet_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mycophenolic acid (MPA), not inosine; inosine is only mentioned as part of the enzyme name (IMPDH) targeted by MPA. |
| PGx | Riglet_2020 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics of mycophenolic acid (MPA), not inosine. |
| popPK | Robeyns_2024 | irrelevant | 0 | 0 | The paper is a metabolomics study on Torin1 exposure in mouse cells where inosine is merely identified as an upregulated endogenous metabolite, not a subject drug with pharmacokinetic parameters. |
| popPK | Rong_2021 | irrelevant | 0 | 0 | The paper is a review of mycophenolic acid PK and mentions inosine-5'-monophosphate dehydrogenase only as a pharmacodynamic target, not as the subject drug for PK parameter extraction. |
| PGx | Sakamoto_2020 | not_relevant | 0 | 0 | The paper reports genetic variants associated with a metabolic disease and clinical symptoms, not pharmacokinetic or pharmacodynamic parameters of the drug inosine. |
| popPK | Sam_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid (MPA), not inosine, despite MPA's mechanism of action involving inosine monophosphate. |
| popPK | Sanches_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics study on papillary thyroid cancer biomarkers and does not involve inosine pharmacokinetics. |
| popPK | Sayler_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine (6-MP), not inosine. |
| PGx | Schaefer_2011 | not_relevant | 5 | 2 | The paper discusses ITPA polymorphisms affecting the pharmacodynamic toxicity (hemolytic anemia) of ribavirin, not the pharmacokinetics or pharmacodynamics of inosine itself. |
| PGx | Seewald_1993 | not_relevant | 0 | 0 | The paper investigates post-mortem ATP degradation in pork muscle, not the pharmacokinetics or pharmacodynamics of inosine as a drug in human subjects. |
| popPK | Sepúlveda_2012 | irrelevant | 0 | 0 | The paper is a virology study on Junin virus inhibition; inosine is only mentioned in the context of inosine monophosphate dehydrogenase inhibition by mycophenolic acid, not as a subject drug for PK characterization. |
| PGx | Shah_2012 | not_relevant | 1 | 2 | The paper investigates the effect of IMPDH polymorphisms on mycophenolate mofetil (MMF) rejection rates and dose tolerance, not on the pharmacokinetics or pharmacodynamics of inosine. |
| popPK | Shaw_2001 | irrelevant | 0 | 0 | The paper discusses mycophenolic acid pharmacokinetics and mentions inosine only as a substrate for an enzyme inhibition assay, not as the subject drug for PK parameter extraction. |
| popPK | Sheng_2020 | irrelevant | 0 | 0 | The study analyzes the population pharmacokinetics of mycophenolic acid (MPA) and mycophenolate mofetil (MMF), not inosine. |
| PGx | Shi_2025 | not_relevant | 0 | 0 | The paper is a review of epilepsy associated with nucleic acid metabolism disorders (ADSL, LNS, ATIC deficiency) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of inosine. |
| PGx | Shiio_1971 | not_relevant | 0 | 0 | The paper concerns bacterial metabolism and resistance, not human pharmacogenomics of inosine. |
| popPK | Smits_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of mycophenolic acid and its effect on inosine monophosphate dehydrogenase, not the pharmacokinetic parameters of inosine itself. |
| popPK | Staatz_2007 | irrelevant | 0 | 0 | The paper is a review of mycophenolate pharmacokinetics; inosine is only mentioned as a substrate for the enzyme IMPDH inhibited by the drug, not as the subject of PK study. |
| popPK | Starybrat_2022 | irrelevant | 0 | 0 | The study uses inosine as a diagnostic biomarker for acute kidney injury in dogs, not as a subject drug for pharmacokinetic modeling, and reports no PK parameters. |
| popPK | Stocco_2015 | irrelevant | 0 | 0 | The study focuses on thiopurine metabolites (TGN, MMPN) and inosine triphosphate pyrophosphatase (ITPA) genotyping, not the pharmacokinetics of the drug inosine itself. |
| PGx | Stocco_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on thiopurine metabolites, not inosine. |
| popPK | Tang_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA), not inosine. |
| popPK | Tashie_2025 | irrelevant | 0 | 0 | The paper is an in-vitro antimalarial drug discovery study focusing on guanine derivatives, and inosine is only used as a structural reference for molecular docking, not as a subject for pharmacokinetic analysis. |
| popPK | Tatham_1991 | irrelevant | 0 | 0 | The study is a mechanistic investigation of mast cell degranulation using inosine triphosphate as an experimental effector, not a pharmacokinetic study of inosine disposition. |
| popPK | Thi_2015 | irrelevant | 0 | 0 | The study investigates mycophenolic acid (MPA) and its effect on IMPDH (inosine monophosphate dehydrogenase), not the pharmacokinetics of the drug inosine. |
| popPK | Tong_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic virology paper focusing on the antiviral activity of an IMPDH inhibitor, not the pharmacokinetics of inosine. |
| PGx | Trinks_2014 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics related to Hepatitis C treatment (Interferon/Ribavirin) and the mention of inosine triphatase in keywords is unrelated to the PK/PD of inosine. |
| popPK | Tsyplakova_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA), an immunosuppressant, and does not report PK parameters for inosine, which is only mentioned as the target of MPA's mechanism of action. |
| PGx | Tziastoudi_2021 | not_relevant | 0 | 0 | The paper is a general commentary on pharmacogenetics in nephrology and does not report specific data or effects for inosine. |
| PGx | Vannozzi_2004 | not_relevant | 2 | 8 | The study measures IMPDH II gene expression (phenotype) in patients, not a genetic variant, and correlates it with toxicity (clinical outcome) rather than a specific pharmacokinetic or pharmacodynamic parameter of inosine. |
| PGx | Vikingsson_2014 | not_relevant | 2 | 5 | The paper focuses on thiopurines (azathioprine/mercaptopurine) and uses methylthioinosine as a metabolite marker, rather than studying the pharmacokinetics/pharmacodynamics of inosine itself. |
| PGx | Vispo_2013 | not_relevant | 0 | 0 | The paper investigates genetic risk for a clinical adverse event (NCPH) and does not report changes in PK or PD parameters for inosine. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates the therapeutic role of the ADA2 enzyme in cancer and mentions creating variants, but it does not report pharmacogenomic associations (germline gene variants affecting drug response) for inosine. |
| PGx | Williams_1978 | not_relevant | 0 | 0 | The paper investigates enzymatic resistance to 8-azaguanine and the metabolic generation of inosine in a cellular assay, rather than a pharmacogenomic effect on the PK/PD of inosine as a therapeutic drug. |
| PGx | Winnicki_2010 | not_relevant | 2 | 5 | The study investigates the pharmacogenomic effect of the IMPDH2 gene on the response to Mycophenolic Acid (MPA), not inosine; inosine is only mentioned as a substrate (IMP) for the enzyme IMPDH. |
| popPK | Wu_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ribavirin, not inosine. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for aztreonam and avibactam, not inosine. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The study focuses on one-carbon metabolism and purine synthesis in tumor-infiltrating T cells, not the pharmacokinetics of inosine. |
| PGx | Yan_2017 | not_relevant | 1 | 0 | The paper is a review of viral and host genetic factors in HCV treatment outcomes, not a pharmacogenomic study of inosine PK/PD parameters. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The study focuses on azathioprine and 6-mercaptopurine pharmacology and microbiome interactions, not the pharmacokinetics of inosine. |
| popPK | Yoshimura_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid (MPA), not inosine; inosine is only mentioned as part of the enzyme name (IMPDH) targeted by the drug. |
| popPK | Yoshimura_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA) and its metabolites, where inosine is mentioned only as part of the name of the enzyme (inosine-5'-monophosphate dehydrogenase) inhibited by MPA, not as the drug being administered or analyzed for PK parameters. |
| PGx | Zelinkova_2006 | not_relevant | 0 | 0 | The study examines the pharmacogenomic effect of ITPA and TPMT variants on azathioprine toxicity (leukopenia), not on the PK/PD of inosine itself. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study evaluates population pharmacokinetic models for mycophenolate mofetil, not inosine. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is a metabolomics and transcriptomics study of kidney injury focusing on uric acid and AICAR, not a pharmacokinetic study of the drug inosine. |
| popPK | Świerczek_2024 | irrelevant | 0 | 0 | The paper is a review on pharmacometrics in autoimmune diseases and does not report pharmacokinetic parameters for inosine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
