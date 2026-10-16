<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;fluphenazine&quot;}]"></div>

# fluphenazine

- **generic name:** fluphenazine
- **ATC codes:** `N05AB02`
- **DrugBank:** [DB00623](https://go.drugbank.com/drugs/DB00623) · **PubChem:** [CID 3372](https://pubchem.ncbi.nlm.nih.gov/compound/3372)
- **molar mass:** 437.522 g/mol (C22H26F3N3OS) — DrugBank
- **groups:** approved

## About

Fluphenazine is an antipsychotic used to treat schizophrenia and schizophreniform disorder. It remains an approved medicine and is included on the WHO list of essential medicines, so it is used fairly widely.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58376](https://www.wikidata.org/wiki/Q58376) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:37 | 3:04 | 0/0/0 | 0/1/0 | 1/0/5 | 158,114/4,910 | einfracz / qwen3.8-27b | 15 | 3/12 | 15/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Javors_1982_ATP_stimulated_calcium_uptake](drugs/drug_fluphenazine/pd_Javors_1982_ATP_stimulated_calcium_uptake.md) | ATP-stimulated calcium uptake ← fluphenazine · inhibition effect | — | Javors MA et al., Kinetic characterization and substrate…, Biochimica et biophysica ac… (1982) | [10.1016/0005-2736(82)90410-2](https://doi.org/10.1016/0005-2736(82)90410-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Žunić_2026](drugs/drug_fluphenazine/pgx_uni_2026_CYP2C9_safety.md) | Žunić Išasegi I et al., Extrapyramidal and anticholinergic reac…, Biochemia medica (2026) | [10.11613/BM.2026.020902](https://doi.org/10.11613/BM.2026.020902) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCG2** | `Q27` · CL/F | transport | [Žunić_2026](drugs/drug_fluphenazine/pgx_uni_2026_ABCG2_Q27.md) | Žunić Išasegi I et al., Extrapyramidal and anticholinergic reac…, Biochemia medica (2026) | [10.11613/BM.2026.020902](https://doi.org/10.11613/BM.2026.020902) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **COMT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Žunić_2026](drugs/drug_fluphenazine/pgx_uni_2026_COMT_Q100.md) | Žunić Išasegi I et al., Extrapyramidal and anticholinergic reac…, Biochemia medica (2026) | [10.11613/BM.2026.020902](https://doi.org/10.11613/BM.2026.020902) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Žunić_2026](drugs/drug_fluphenazine/pgx_uni_2026_CYP2D6_Q27.md) | Žunić Išasegi I et al., Extrapyramidal and anticholinergic reac…, Biochemia medica (2026) | [10.11613/BM.2026.020902](https://doi.org/10.11613/BM.2026.020902) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DAT1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Žunić_2026](drugs/drug_fluphenazine/pgx_uni_2026_DAT1_Q100.md) | Žunić Išasegi I et al., Extrapyramidal and anticholinergic reac…, Biochemia medica (2026) | [10.11613/BM.2026.020902](https://doi.org/10.11613/BM.2026.020902) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DRD2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Žunić_2026](drugs/drug_fluphenazine/pgx_uni_2026_DRD2_Q100.md) | Žunić Išasegi I et al., Extrapyramidal and anticholinergic reac…, Biochemia medica (2026) | [10.11613/BM.2026.020902](https://doi.org/10.11613/BM.2026.020902) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fluphenazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| absorption | mammary gland | `ABCG2` transport | PGx paper |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` transport | DrugBank actor |
| metabolism | brain | `COMT` target, `CYP2D6` inhibitor/metabolism | DrugBank actor |
| metabolism | kidney | `COMT` target | PGx paper |
| metabolism | liver | `COMT` target, `CYP2C9` safety_allele, `CYP2D6` inhibitor/metabolism, `CYP2E1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), DAT1 (target), DRD1 (target), DRD2 (target), HTR1B (modulator), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 173 matched, 90 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_1979 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on dopamine-sensitive adenylate cyclase where fluphenazine is used only as a non-quantitative competitive antagonist probe. |
| popPK | Ananth_1987 | irrelevant | 0 | 0 | The paper is a cell biology study on phosphoinositide hydrolysis in C6 glioma cells, and fluphenazine is only used as a pharmacological antagonist, with no PK parameters reported. |
| PGx | Attia_2012 | not_relevant | 2 | 0 | The paper reports in vitro CYP enzyme kinetics (Km, Vmax, Clint) for fluphenazine to identify dominant isoforms, but it does not report how specific gene variants (genotypes) affect these parameters in vivo or in a pharmacogenomic context. |
| popPK | Cheng_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Ca2+ movement where fluphenazine is used only as a calmodulin antagonist control, with no pharmacokinetic parameters reported. |
| PGx | Duarte_2022 | not_relevant | 0 | 0 | The paper is a review of fluphenazine's anticancer potential and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Ereshefsky_1984 | irrelevant | 2 | 0 | The paper is a review discussing the future of depot therapy and general pharmacokinetic approaches, and the provided text does not contain any specific quantitative PK parameter values (e.g., CL, V, t1/2) for fluphenazine. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reaction reports (sedation/somnolence) from FAERS and does not report pharmacokinetic parameters. |
| popPK | Faraj_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and cardiotoxicity of citalopram and escitalopram, not fluphenazine. |
| PGx | Fardeau_2007 | not_relevant | 0 | 0 | The paper investigates yeast drug resistance mechanisms and does not report human pharmacogenomics or pharmacokinetic/pharmacodynamic parameters for fluphenazine. |
| popPK | Feng_2008 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of risperidone and its metabolite, not fluphenazine. |
| popPK | Frederiksen_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic data for vortioxetine, not fluphenazine. |
| popPK | Hamid_2004 | irrelevant | 0 | 0 | The study is an in-vitro cell viability assay comparing assay methods, not a pharmacokinetic study of fluphenazine. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | This is a pharmacological study characterizing D-1 dopamine receptors in rabbit retina, not a pharmacokinetic study of fluphenazine. |
| popPK | Hurley_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of ATPase activity in rat pancreatic acini, not a pharmacokinetic study of fluphenazine. |
| popPK | Hurley_1985 | irrelevant | 0 | 0 | This is an in-vitro enzymatic study on Ca2+-ATPase where fluphenazine is used only as an inhibitor, not as the subject of PK analysis. |
| popPK | Idda_2021 | irrelevant | 0 | 0 | The paper is a transcriptomic analysis of sex-biased gene expression and does not report any pharmacokinetic parameters for fluphenazine, which is only mentioned as a substrate of CYP2D6. |
| popPK | Kornhuber_2006 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of amantadine, not fluphenazine. |
| PGx | Korošec_2024 | not_relevant | 2 | 1 | The paper is a case report describing treatment decisions based on pharmacogenetic profiles for multiple antipsychotics (including fluphenazine), but it does not report fitted or quantitative effects of specific genotypes on pharmacokinetic or pharmacodynamic parameters for fluphenazine. |
| popPK | Magoski_1995 | irrelevant | 0 | 0 | Fluphenazine is used as a pharmacological tool to test receptor antagonism in a mollusk neuroscience study, not as a subject for pharmacokinetic analysis. |
| popPK | McGonigle_1988 | irrelevant | 0 | 0 | The study characterizes receptor binding sites in human retina and mentions fluphenazine only as a ligand in inhibition assays, providing no pharmacokinetic disposition parameters. |
| PGx | Monostory_2004 | not_relevant | 0 | 0 | The study investigates enzyme inhibition using fluphenazine as an inhibitor, not the effect of genetic variants on fluphenazine pharmacokinetics or pharmacodynamics. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for valbenazine and its metabolite, not fluphenazine. |
| PGx | Nikolac_2014 | not_relevant | 0 | 0 | The paper studies the association between BDNF Val66Met and response to olanzapine, not fluphenazine. |
| PGx | Niwa_2021 | not_relevant | 1 | 5 | The study examines the effect of CYP2D6 variants on fluphenazine's ability to inhibit dopamine formation (a biochemical assay), rather than fluphenazine's own pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Niwa_2022 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2D6 variants on progesterone hydroxylation, treating fluphenazine only as a potential inhibitor in a secondary analysis, rather than a drug subject to pharmacogenomic influence. |
| PGx | Nyberg_1998 | not_relevant | 1 | 5 | The paper mentions CYP2D6 genotype only to rule out ultra-rapid metabolism in a small case series and does not report a pharmacogenomic effect on PK or PD parameters. |
| popPK | Onaivi_1989 | irrelevant | 0 | 0 | The study is a behavioral validation of an anxiety test in mice and does not report pharmacokinetic parameters for fluphenazine. |
| popPK | Otreba_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of toxicity in melanocytes and does not report any pharmacokinetic parameters. |
| popPK | Otręba_2018 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on melanogenesis and cell viability, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Otręba_2021 | not_relevant | 0 | 0 | The paper is a review of in vitro anticancer activity and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ozdemir_2006 | not_relevant | 1 | 2 | The paper discusses pharmacogenetic associations for the side effect of tardive dyskinesia, not the impact of genotypes on fluphenazine's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Plesnicar_2006 | not_relevant | 1 | 0 | The study assesses clinical outcomes (psychopathological symptoms and EPS scales) rather than measuring pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| popPK | Ramos_1986 | irrelevant | 0 | 0 | This is an in vitro pharmacology study of smooth muscle contractility, not a pharmacokinetic study, and contains no disposition parameters for fluphenazine. |
| popPK | Rodolico_2022 | irrelevant | 0 | 0 | This is a Cochrane review of dose reduction strategies in schizophrenia, containing no pharmacokinetic data or quantitative PK parameters for fluphenazine. |
| popPK | Sah_1994 | irrelevant | 0 | 0 | The paper describes the pharmacological inhibition of calcium channels by fluphenazine (mechanistic/in-vitro) and does not report any pharmacokinetic disposition parameters. |
| popPK | Salahudeen_2015 | irrelevant | 0 | 0 | The study analyzes anticholinergic adverse events in older patients and does not report pharmacokinetic parameters for fluphenazine. |
| popPK | Shackcloth_2008 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of fluphenazine on vasoconstriction in human radial arteries and does not report any pharmacokinetic parameters. |
| PGx | Shin_1999 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition properties (Ki) of fluphenazine, which is a drug property, not a pharmacogenomic effect (genotype-dependent change in PK/PD). |
| PGx | Stöllberger_2005 | not_relevant | 2 | 0 | The paper is a general review on QT prolongation by antipsychotics and mentions genetic polymorphisms as general factors, but does not report specific pharmacogenomic data or quantitative effects for fluphenazine. |
| popPK | Vayssette_1986 | irrelevant | 0 | 0 | The paper is a study on dopamine receptors in pancreatic acinar cells using fluphenazine only as a pharmacological antagonist, not a pharmacokinetic study. |
| PGx | Wang_2001 | not_relevant | 0 | 0 | The paper describes the binding affinity and inhibitory properties of fluphenazine on P-glycoprotein and CYP3A4 in vitro, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in humans or animal models. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the development and pharmacokinetics of a novel EGFR inhibitor (ZW-49) in rats and mice, not fluphenazine. |
| popPK | Weatherford-Pratt_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and spectroscopic analysis of deuterated cyclohexenes and is completely unrelated to the pharmacokinetics of fluphenazine. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for postoperative nausea and vomiting and does not contain pharmacokinetic parameters for fluphenazine. |
| popPK | Wilk_2023 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for polycystic kidney disease using mouse transcriptomic data and does not report any pharmacokinetic parameters for fluphenazine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for haloperidol, not fluphenazine. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of muscarinic receptor binding, not a pharmacokinetic study, and reports no disposition parameters for fluphenazine. |
| PGx | Zhou_2006 | not_relevant | 0 | 0 | The study examines the electrophysiological effect of fluphenazine on voltage-gated sodium channels but does not investigate genetic variants or pharmacogenomics. |
| PGx | Zhou_2009 | not_relevant | 2 | 0 | Fluphenazine is only mentioned in a general list of drugs metabolized by CYP2D6 for which therapeutic drug monitoring is recommended, without any specific reporting of PK/PD parameters or genetic effects for this drug. |
| PGx | Zivković_2010 | not_relevant | 1 | 0 | The paper reports case studies of Malignant Neuroleptic Syndrome and genotypes, but it does not measure or report changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters (e.g., receptor binding, effect magnitude) for fluphenazine. |
| popPK | de_2015 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mitochondrial dysfunction investigation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Środa-Pomianek_2018 | not_relevant | 0 | 0 | The paper investigates the anticancer mechanisms of phenothiazine derivatives in cancer cell lines and does not report pharmacogenomic effects on PK/PD parameters for fluphenazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
