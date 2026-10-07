<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03C&quot;,&quot;href&quot;:&quot;atc/G03C.md&quot;},{&quot;label&quot;:&quot;estriol&quot;}]"></div>

# estriol

- **generic name:** estriol
- **ATC codes:** `G03CA04`, `G03CC06`
- **DrugBank:** [DB04573](https://go.drugbank.com/drugs/DB04573) · **PubChem:** [CID 5756](https://pubchem.ncbi.nlm.nih.gov/compound/5756)
- **molar mass:** 288.3814 g/mol (C18H24O3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Estriol is an estrogen hormone used, mainly as a topical vaginal treatment, for menopausal symptoms such as vaginal dryness and atrophy. It is approved and used in many countries, particularly in Europe, though it is not authorised centrally by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409721](https://www.wikidata.org/wiki/Q409721) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:18 | 16:26 | 0/0/0 | 1/1/1 | 0/0/0 | 792,078/9,899 | einfracz / qwen3.8-27b | 43 | 3/39 | 42/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gorodeski_1998_RTE](drugs/drug_estriol/pd_Gorodeski_1998_RTE.md) | transepithelial electrical resistance (RTE) ← estriol · direct Emax (saturable) effect | — | Gorodeski GI, Estrogen increases the permeability of…, The American journal of phy… (1998) | [10.1152/ajpcell.1998.275.3.C888](https://doi.org/10.1152/ajpcell.1998.275.3.C888) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Ao_2026_ERE_driven_reporter_gene](drugs/drug_estriol/pd_Ao_2026_ERE_driven_reporter_gene.md) | transcriptional activation ← estriol · direct Emax (saturable) effect | — | Ao Y et al., Transcriptional Activation of Estrogen…, Genes (2026) | [10.3390/genes17030327](https://doi.org/10.3390/genes17030327) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Coelingh_2004_estrogen_receptor_effects](drugs/drug_estriol/pd_Coelingh_2004_estrogen_receptor_effects.md) | estrogen receptor effects ← estriol · stimulation effect | — | Coelingh Bennink HJ, Are all estrogens the same?, Maturitas (2004) | [10.1016/j.maturitas.2003.11.009](https://doi.org/10.1016/j.maturitas.2003.11.009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=estriol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), ESR2 (target), SHBG (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11270 matched, 119 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alshabi_2023 | not_relevant | 0 | 0 | The paper investigates the impact of estrogen hormones (including estriol) on CYP enzyme expression in pregnancy, not the pharmacogenomics of estriol itself. |
| popPK | Amara_1987 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on estrogen receptor signaling and mRNA accumulation, not a pharmacokinetic study, and reports no disposition parameters for estriol. |
| popPK | Ao_2026 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of estrogen receptor binding and transcriptional activation in elephant shark, reporting EC50 values but no pharmacokinetic disposition parameters (CL, V, ka, etc.) for estriol. |
| popPK | Ao_2026_2 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of estrogen receptor transcriptional activation (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume for estriol. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study estriol. |
| popPK | Bermudez_2012 | irrelevant | 0 | 0 | The study reports in vitro transcriptional activation (EC50) data, not pharmacokinetic parameters. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a method for automated PK/PD modeling using neural ODEs and LASSO, demonstrated on simulated data and warfarin, with no data for estriol. |
| popPK | Cathey_2020 | irrelevant | 0 | 0 | The study investigates the association between PAH exposure and hormone concentrations (including estriol) in pregnant women, but does not report pharmacokinetic parameters (CL, V, etc.) for estriol. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of rivaroxaban, not estriol. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for belantamab mafodotin, not estriol. |
| popPK | Czarny_2019 | irrelevant | 0 | 0 | This is a toxicology study on the effects of estriol and other hormones on microalgae growth, containing no pharmacokinetic parameters. |
| PGx | Czernik_2000 | not_relevant | 0 | 0 | The paper describes basal glucuronidation activity of estriol in intestinal microsomes but does not report any pharmacogenomic effect (gene variant/genotype) on its PK or PD parameters. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of MIDD methodologies for analgesics and does not contain any pharmacokinetic data or parameters for the drug estriol. |
| popPK | Dorai_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study of lipolysis in rat adipocytes, and estriol is only mentioned as an inactive comparator, with no pharmacokinetic parameters reported. |
| PGx | Fashe_2022 | not_relevant | 0 | 0 | The paper uses estriol as an inducer to study enzyme expression but does not report pharmacogenomic effects of estriol itself as a drug. |
| PGx | Flück_2008 | not_relevant | 5 | 0 | Mentions low urinary estriol levels as a clinical sign of the disease, but does not report a pharmacogenomic effect on the PK/PD of estriol as a drug. |
| PGx | Flück_2011 | not_relevant | 3 | 5 | The paper describes POR deficiency affecting endogenous steroid synthesis (leading to low urinary estriol) and mentions potential drug metabolism, but does not report the pharmacokinetics or pharmacodynamics of estriol as a drug. |
| PGx | Gall_1999 | not_relevant | 3 | 5 | The study characterizes the metabolic activity of UGT enzymes on estriol in vitro but does not report a correlation between patient genotypes and PK/PD parameters in a clinical or pharmacokinetic population. |
| popPK | Gerk_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic transport study of estradiol glucuronides in Sf9 cells, not a pharmacokinetic study of estriol disposition. |
| popPK | González_2020 | irrelevant | 0 | 0 | The study measures environmental concentrations of estriol in wastewater and water bodies, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Gorodeski_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of estrogen effects on cell permeability and does not report pharmacokinetic parameters for estriol. |
| PGx | Guo_2022 | not_relevant | 0 | 0 | The paper discusses the toxicity of Rhododendri Mollis Flos and its effect on estriol metabolism pathways, but does not report any pharmacogenomic effects (gene variants) on the PK/PD of estriol as a drug. |
| popPK | Halawa_2021 | irrelevant | 0 | 0 | The study analyzes pesticide residues and measures hormone concentrations (including estriol) to assess endocrine disruption, but does not report pharmacokinetic parameters (e.g., clearance, volume) for estriol. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of iclepertin, not estriol. |
| PGx | He_2022 | not_relevant | 0 | 0 | The paper investigates natural compound inhibition of UGT enzymes on estrogen metabolism; it does not report a gene variant or genotype effect. |
| PGx | He_2025 | not_relevant | 0 | 0 | The paper studies the toxicological effects of fullerenols on estriol synthesis in mice and lacks any pharmacogenomic analysis or study of estriol as a drug. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics and pharmacodynamics of calaspargase pegol (CalPEG) in mice and humans, not estriol. |
| PGx | Hoffmann_2026 | not_relevant | 0 | 0 | The paper investigates the metabolism of steroid hormones (testosterone and estradiol) and the endogenous production of estriol, rather than the pharmacokinetics or pharmacodynamics of estriol as a drug. |
| popPK | Honda_2025 | irrelevant | 0 | 0 | This is an epidemiological study investigating the association between air pollution (PM2.5) and hormone levels; it does not report pharmacokinetic parameters (clearance, volume, half-life) for estriol. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study evaluating an automated PopPK modeling framework using 22 datasets (including bedaquiline, cefaclor, etc.), but estriol is not mentioned or studied in the provided evidence. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for rivaroxaban, not estriol. |
| PGx | Jin_1993 | not_relevant | 1 | 0 | The paper describes the cloning and expression of the UGT2B7 enzyme and its activity towards substrates including estriol, but it does not report a human gene variant or genotype that alters a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on population pharmacokinetics for multiple myeloma drugs (carfilzomib, daratumumab, lenalidomide, melphalan, panobinostat) and does not involve estriol. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulation framework for benchmarking covariate model building methods using simulated PK data, and does not report pharmacokinetic parameters for estriol. |
| PGx | Khatri_2021 | not_relevant | 0 | 0 | The study examines the physiological effect of pregnancy hormones on labetalol metabolism, not the effect of a genetic variant on a PK/PD parameter of estriol. |
| PGx | Khatri_2021_2 | not_relevant | 0 | 0 | The paper investigates how estriol affects nifedipine metabolism via CYP induction, rather than how a genetic variant affects estriol's PK/PD. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bevacizumab (a monoclonal antibody), not estriol. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study concerns automated PK modeling of warfarin, theophylline, and tobramycin; estriol is not mentioned or studied. |
| PGx | Leeder_2005 | not_relevant | 0 | 0 | The paper reports natural variability in CYP3A7 expression and activity in fetal livers, not a specific gene variant effect on a PK/PD parameter of estriol as a drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper describes pharmacokinetic modeling for the antibody-drug conjugate PF-06804103, not estriol. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gotistobart, a monoclonal antibody, and does not report data for estriol. |
| popPK | Mize_2001 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of estrogen receptor effects on serotonin receptor binding, not a pharmacokinetic study of estriol. |
| popPK | Nayak_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of marstacimab, a monoclonal antibody, not estriol. |
| popPK | Ohno_2002 | irrelevant | 0 | 0 | The paper describes an in vitro estrogen receptor binding assay to measure affinity (Kd, Ki) and Hill coefficients for estriol and other compounds, which is pharmacodynamic/mechanistic, not pharmacokinetic. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor and its metabolite GFT1007, not estriol. |
| popPK | Ozers_2005 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study using estriol as a ligand to assess receptor-coactivator interaction, not a pharmacokinetic study of drug disposition. |
| PGx | Patel_1995 | not_relevant | 0 | 0 | The paper focuses on the glucuronidation of oxazepam by UGT2B7 and does not report pharmacokinetic or pharmacodynamic parameters for estriol. |
| PGx | Peng_2015 | not_relevant | 2 | 8 | The study investigates ABCB1 polymorphism effects on P-gp expression and transport of estriol in vitro, but does not report pharmacokinetic or pharmacodynamic parameters of estriol in humans. |
| popPK | Rao_1976 | irrelevant | 0 | 0 | The paper describes in vitro enzyme kinetics of estrone glucuronyltransferase in pig kidney, where estriol is only mentioned as an inhibitor, not as a subject drug for PK modeling. |
| popPK | Roepke_2005 | irrelevant | 0 | 0 | This is an ecotoxicology study on sea urchin embryos examining developmental toxicity and concentration-response curves, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for estriol. |
| PGx | Sarkar_2003 | not_relevant | 2 | 10 | The study investigates menstrual cycle-dependent changes in CYP3A4 and CYP3A7 expression, not the impact of a gene variant/genotype on a PK/PD parameter. |
| popPK | Sasson_1983 | irrelevant | 0 | 0 | This is an in vitro receptor binding study, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sasson_1983_2 | irrelevant | 0 | 0 | The paper reports in vitro receptor binding affinity (Hill coefficients, Kd) for estriol, which is mechanistic/pharmacodynamic data, not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Sasson_1984 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study investigating estriol's effect on estrogen receptor cooperativity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sasson_1984_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of estrogen receptor binding cooperativity, not a pharmacokinetic study of estriol disposition. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of ocrelizumab, not estriol. |
| PGx | Sevrioukova_2021 | not_relevant | 0 | 0 | The paper presents a structural analysis of the CYP3A7 enzyme, not a study on pharmacogenomic effects of human gene variants on the pharmacokinetics or pharmacodynamics of estriol. |
| popPK | Simard_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of estrogen effects on growth hormone release, containing no pharmacokinetic parameters for estriol. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of antibiotics (meropenem, colistin, polymyxin B) against bacteria, not the drug estriol. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for 5-fluorouracil, a completely different drug from estriol. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not estriol. |
| popPK | Valentín-Cortés_2026 | irrelevant | 0 | 0 | The study is an epidemiological investigation of the association between glyphosate exposure and hormone levels, not a pharmacokinetic study reporting disposition parameters (CL, V, Ka) for estriol. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for infliximab, not estriol. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for Polymyxin B, not estriol. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper uses a generic simulated dataset from the Monolix demo to demonstrate a statistical uncertainty quantification method, with no mention of estriol or any specific drug. |
| popPK | Williams_2002 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of enzyme modulation using estriol as an inhibitor/substrate, not a pharmacokinetic study reporting disposition parameters for estriol. |
| PGx | Williams_2002 | not_relevant | 0 | 0 | The paper investigates the modulation of estradiol glucuronidation by estriol and other compounds, not the pharmacokinetics or pharmacodynamics of estriol itself. |
| popPK | Witta_2026 | irrelevant | 0 | 0 | This is a simulation study for a hypothetical drug using a model averaging algorithm, and does not involve the pharmacokinetics of estriol. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not estriol. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of daptomycin, not estriol. |
| PGx | Xing_2013 | not_relevant | 0 | 0 | The paper is a review of genetic associations with Alzheimer's disease susceptibility and does not report pharmacokinetic or pharmacodynamic parameters for estriol. |
| PGx | Yang_2017 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of morphine metabolism by UGT2B7; estriol is only mentioned as a background example in the introduction. |
| PGx | Yasuda_2006 | not_relevant | 0 | 0 | The study investigates the regulation of ABCG2 expression by estrogens and progesterone, but it is not a pharmacogenomic study linking genetic variants to PK/PD changes of estriol. |
| PGx | Yuan_2015 | not_relevant | 0 | 0 | The study focuses on zidovudine glucuronidation and mentions estriol only as a general substrate of UGT2B7 in the introduction, providing no data or pharmacokinetic parameters for estriol. |
| popPK | Yue_1997 | irrelevant | 0 | 0 | The paper investigates the mechanism of action (apoptosis) of 2-methoxyestradiol on endothelial cells, with estriol serving only as a negative comparator agent in an in-vitro setting, containing no pharmacokinetic data. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for imipenem, not estriol. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper describes population pharmacokinetic models for immunoglobulins (IVIg/SCIg), not the drug estriol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
