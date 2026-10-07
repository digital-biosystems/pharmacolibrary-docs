<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;gemfibrozil&quot;}]"></div>

# gemfibrozil

- **generic name:** gemfibrozil
- **ATC codes:** `C10AB04`
- **DrugBank:** [DB01241](https://go.drugbank.com/drugs/DB01241) · **PubChem:** [CID 3463](https://pubchem.ncbi.nlm.nih.gov/compound/3463)
- **molar mass:** 250.3334 g/mol (C15H22O3) — DrugBank
- **groups:** approved, investigational

## About

Gemfibrozil is a fibrate lipid-lowering drug used to treat high triglycerides and other lipid disorders, and to help prevent arteriosclerosis and coronary artery disease. It remains an approved medicine, but carries a boxed warning, so its use requires caution.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q384295](https://www.wikidata.org/wiki/Q384295) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:22 | 10:40 | 0/0/0 | 0/0/0 | 0/0/0 | 188,138/5,544 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 3/6 | 11/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gemfibrozil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A3` inhibitor/substrate, `UGT1A9` substrate, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inhibitor/substrate, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: LPL (activator), PPARA (target), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 311 matched, 109 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_1996.pdf` | Liu XD et al., [Two-site absorption model fits to phar…, Yao xue xue bao = Acta phar… (1996) | popPK | 9 | not captured | [9863240](https://pubmed.ncbi.nlm.nih.gov/9863240) | The study reports a compartmental model (one-compartment with two absorption sites) and provides specific numeric parameters (Tmax, Cmax, and time constants T1-T3) for gemfibrozil in humans. |

<sub>queue written 2026-10-07T11:18:24.019791+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Backman_2016 | not_relevant | 0 | 0 | The paper is a review of CYP2C8 pharmacogenetics and drug interactions, but it does not report specific pharmacokinetic or pharmacodynamic parameters of gemfibrozil altered by genetic variants. |
| PGx | Becquemont_2003 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions and metabolic pathways for antilipemics but does not report any pharmacogenomic effects (gene variants) on gemfibrozil PK/PD. |
| PGx | Bigo_2014 | not_relevant | 0 | 0 | The study investigates the effect of gemfibrozil on bilirubin metabolism in cell lines but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Boltes_2012 | irrelevant | 0 | 0 | The study is an in vitro toxicology assessment of chemical mixtures on algae, not a pharmacokinetic study of gemfibrozil. |
| PGx | Cestari_2019 | not_relevant | 0 | 0 | The paper reports a standard pharmacokinetic study in healthy volunteers without any genetic stratification or analysis of gene variants. |
| PGx | Dinger_2016 | not_relevant | 0 | 0 | The paper investigates CYP inhibition by tryptamines (drugs of abuse) and does not report pharmacogenomic effects on gemfibrozil. |
| popPK | Farré_2001 | irrelevant | 0 | 0 | The study focuses on analytical methods for detecting gemfibrozil in water samples and toxicity testing, not on pharmacokinetic parameters. |
| PGx | Filppula_2011 | not_relevant | 0 | 0 | The paper investigates the metabolism of montelukast, not gemfibrozil, and does not report pharmacogenomic effects on gemfibrozil PK/PD. |
| popPK | Fu_2026 | irrelevant | 0 | 0 | This is a review article discussing metabolite-mediated drug-drug interactions and regulatory guidelines, with no original quantitative pharmacokinetic parameter values for gemfibrozil. |
| PGx | Gibbons_2015 | not_relevant | 0 | 0 | The paper reports drug-drug interactions involving gemfibrozil as an inhibitor of enzalutamide metabolism, not a pharmacogenomic effect on gemfibrozil's own PK/PD parameters. |
| PGx | Gill_2012 | not_relevant | 0 | 0 | The paper characterizes in vitro glucuronidation clearance in human microsomes and the impact of albumin, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Hagberg_2000 | not_relevant | 2 | 0 | The text is a narrative review discussing general associations between APOE genotypes and lipid levels in response to various therapies, including gemfibrozil, but it does not report specific quantitative pharmacokinetic or pharmacodynamic parameter changes for gemfibrozil in this study. |
| PGx | Hanke_2021 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for rosuvastatin and its drug-drug interactions with gemfibrozil, not on pharmacogenomic effects on gemfibrozil's PK/PD. |
| PGx | Ji_2018 | not_relevant | 0 | 0 | The paper investigates the metabolism of clopidogrel by UGT2B7 and mentions gemfibrozil only as a reference inhibitor/substrate, not as the primary drug of interest for pharmacogenomic analysis. |
| PGx | Kahma_2021 | not_relevant | 0 | 0 | The paper describes an in vitro method for CYP inhibition and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Karonen_2011 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (gemfibrozil affecting zafirlukast PK) rather than a pharmacogenomic effect of a gene variant on gemfibrozil's PK or PD. |
| PGx | Klotz_2003 | not_relevant | 0 | 0 | The paper discusses statins and mentions gemfibrozil only as a drug interaction risk factor for rhabdomyolysis, without reporting any pharmacogenomic effects on gemfibrozil's PK or PD parameters. |
| popPK | Kocarek_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme induction in rat hepatocytes and does not report pharmacokinetic parameters for gemfibrozil. |
| PGx | Krause_1985 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of gemfibrozil on lipoproteins in rats but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Law_2006 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (statins and gemfibrozil) and adverse event rates, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lemaire_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of the antibiotic CEM-101, and gemfibrozil is only mentioned as a P-glycoprotein inhibitor control in an in-vitro setting. |
| PGx | Lennernäs_2003 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of atorvastatin and its interaction with gemfibrozil, but does not report pharmacogenomic effects on gemfibrozil's PK/PD parameters. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general review of the clinical pharmacokinetics of fibrates and does not report any specific pharmacogenomic effects (gene variants) on gemfibrozil PK or PD parameters. |
| popPK | Mukherjee_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARalpha ligand binding and coactivator recruitment, not a pharmacokinetic study. |
| PGx | Neuvonen_2006 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving gemfibrozil but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Neuvonen_2008 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of statins and mentions gemfibrozil only as a drug interaction inhibitor, not as the primary drug of interest for a pharmacogenomic study. |
| PGx | Niemi_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (gemfibrozil affecting glimepiride) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Nordt_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PAI-1 expression in smooth muscle cells and does not report pharmacokinetic parameters for gemfibrozil. |
| PGx | Ooi_2001 | not_relevant | 2 | 5 | The paper reports that Apo E2/2 subjects had elevated RLP-C despite gemfibrozil therapy, but it does not quantify a pharmacokinetic or pharmacodynamic parameter change attributable to the genotype in a comparative pharmacogenomic study design. |
| PGx | Penzak_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between protease inhibitors and gemfibrozil, but does not report any pharmacogenomic effects (gene variants) on gemfibrozil PK or PD. |
| popPK | Pino_2016 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of pharmaceuticals on algae (L. sativa and C. reinhardtii) and does not report pharmacokinetic parameters for gemfibrozil. |
| PGx | Polepally_2020 | not_relevant | 0 | 0 | The paper reports drug-drug interactions of elagolix, not pharmacogenomic effects on gemfibrozil. |
| PGx | Prueksaritanont_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (fibrates inhibiting statin metabolism) in human hepatocytes, not the effect of a gene variant on gemfibrozil's PK or PD. |
| PGx | Prueksaritanont_2002_2 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between gemfibrozil and statins, not the effect of genetic variants on gemfibrozil pharmacokinetics or pharmacodynamics. |
| PGx | Prueksaritanont_2005 | not_relevant | 0 | 0 | The paper investigates the effects of gemfibrozil on drug-metabolizing enzymes in hepatocytes but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Quinn_2008 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation measuring LC50/EC50 in Hydra attenuata, not a pharmacokinetic study reporting disposition parameters for gemfibrozil. |
| popPK | Quinn_2009 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of pharmaceutical mixtures on Hydra attenuata, not a pharmacokinetic study of gemfibrozil. |
| popPK | Quinn_2011 | irrelevant | 0 | 0 | The study is an ecotoxicology/biomarker assessment in aquatic organisms, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for gemfibrozil. |
| PGx | Robinson_2007 | not_relevant | 0 | 0 | The paper discusses simvastatin and mentions gemfibrozil only as a drug interaction requiring dose adjustment, without reporting any pharmacogenomic effects on gemfibrozil's PK or PD parameters. |
| popPK | Rosal_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicity study reporting EC50 values for aquatic organisms, not a pharmacokinetic study with disposition parameters. |
| popPK | Salesa_2017 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of gemfibrozil in Daphnia magna, reporting toxicity endpoints (EC50, reproduction) rather than pharmacokinetic disposition parameters. |
| popPK | Santos_2001 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of a chylomicron-like emulsion (tracer) to assess lipid metabolism, not the pharmacokinetic parameters (CL, V, etc.) of the drug gemfibrozil itself. |
| PGx | Scheen_2007 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between gemfibrozil and thiazolidinediones, not the effect of a gene variant on gemfibrozil's PK/PD. |
| PGx | Scheen_2007_2 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (gemfibrozil inhibiting repaglinide metabolism) but does not report pharmacogenomic effects (gene variants) on gemfibrozil's PK/PD parameters. |
| popPK | Sergeeva_2022 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and molecular modeling paper investigating the mechanism of action of Nα-oleoylhistamine, using gemfibrozil only as a PPAR-alpha agonist control, with no pharmacokinetic parameters reported. |
| PGx | Suttle_2015 | not_relevant | 0 | 0 | The paper evaluates drug-drug interactions (gemfibrozil as an inhibitor) on dabrafenib PK, not the effect of a gene variant on gemfibrozil PK/PD. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of nateglinide metabolism by gemfibrozil) in vitro, not pharmacogenomic effects of gene variants on gemfibrozil PK/PD. |
| PGx | Tirkkonen_2008 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (statins with fibrates/CYP3A4 inhibitors) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Topletz-Erickson_2022 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (pharmacokinetic effects of gemfibrozil on tucatinib) in healthy volunteers, not pharmacogenomic effects (gene variants) on gemfibrozil's PK/PD. |
| PGx | Tugnait_2020 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (gemfibrozil inhibiting brigatinib metabolism) rather than the pharmacogenomic effect of a gene variant on gemfibrozil's PK/PD parameters. |
| PGx | VandenBrink_2011 | not_relevant | 0 | 0 | The paper evaluates CYP2C8 inhibition and probe substrates, mentioning gemfibrozil only as an inhibitor in a prediction context, but does not report pharmacogenomic effects (gene variants) on gemfibrozil's PK/PD. |
| PGx | Vartanova_1994 | not_relevant | 0 | 0 | The paper reports clinical efficacy of gemfibrozil in hyperlipidemic patients but does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Wang_2002 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (gemfibrozil inhibiting CYP2C8) in vitro, not a pharmacogenomic effect of a gene variant on gemfibrozil's PK/PD. |
| PGx | Wen_2001 | not_relevant | 0 | 0 | The paper describes the in vitro inhibitory potential of gemfibrozil on CYP enzymes but does not report how a specific gene variant or genotype alters the PK/PD of gemfibrozil. |
| popPK | Williams_2002 | irrelevant | 0 | 0 | The paper is a review of statin drug interactions where gemfibrozil is mentioned only as a co-administered agent causing pharmacodynamic interactions, with no PK parameters reported for gemfibrozil. |
| PGx | Williams_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving statins and gemfibrozil, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of gemfibrozil. |
| PGx | Wojtyniak_2021 | not_relevant | 0 | 0 | The paper focuses on simvastatin pharmacokinetics and drug-drug-gene interactions, not the pharmacokinetics or pharmacodynamics of gemfibrozil itself. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper describes a method for P450 phenotyping where gemfibrozil glucuronide is used as an inhibitor, not as the drug of interest for pharmacogenomic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
