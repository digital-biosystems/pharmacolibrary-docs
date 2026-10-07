<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;bromocriptine&quot;}]"></div>

# bromocriptine

- **generic name:** bromocriptine
- **ATC codes:** `G02CB01`, `N04BC01`
- **DrugBank:** [DB01200](https://go.drugbank.com/drugs/DB01200) · **PubChem:** [CID 31101](https://pubchem.ncbi.nlm.nih.gov/compound/31101)
- **molar mass:** 654.595 g/mol (C32H40BrN5O5) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Bromocriptine is a dopamine agonist used for conditions involving high prolactin such as prolactinoma and hyperprolactinemia, as well as Parkinson's disease, acromegaly, infertility, and related hormonal disorders. It remains an approved medicine used in many countries, though some uses have been withdrawn; it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413581](https://www.wikidata.org/wiki/Q413581) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:14 | 3:15 | 0/0/0 | 0/1/2 | 0/0/0 | 78,215/3,994 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fici_1997_cAMP](drugs/drug_bromocriptine/pd_Fici_1997_cAMP.md) | cAMP formation ← bromocriptine · direct sigmoid Emax (Hill) effect | — | Fici GJ et al., D1 dopamine receptor activity of anti-p…, Life sciences (1997) | [10.1016/s0024-3205(97)00126-4](https://doi.org/10.1016/s0024-3205(97)00126-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Valente_1997_PRL](drugs/drug_bromocriptine/pd_Valente_1997_PRL.md) | prolactin biomarker turnover ← bromocriptine | — | Valente D et al., Metabolite involvement in bromocriptine…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Coronas_1999_adenylyl_cyclase_activity](drugs/drug_bromocriptine/pd_Coronas_1999_adenylyl_cyclase_activity.md) | adenylyl cyclase activity ← bromocriptine · direct sigmoid Emax (Hill) effect | — | Coronas V et al., Dopamine receptor coupling to adenylyl…, Neuroscience (1999) | [10.1016/s0306-4522(98)00460-6](https://doi.org/10.1016/s0306-4522(98)00460-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bromocriptine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Valente_1997.pdf` | Valente D et al., Metabolite involvement in bromocriptine…, The Journal of pharmacology… (1997) | popPK | 6 | not captured | [9316855](https://pubmed.ncbi.nlm.nih.gov/9316855) | Although the study involves bromocriptine in rats and mentions PK/PD modeling, the specific quantitative pharmacokinetic parameters (CL, V, ka) are not reported in the provided text; only pharmacodynamic EC50 values and qualitative AUC comparisons are present. |
| `Magoski_1995.pdf` | Magoski NS et al., Dopaminergic transmission between ident…, Journal of neurophysiology (1995) | pd | 4 | [10.1152/jn.1995.74.3.1287](https://doi.org/10.1152/jn.1995.74.3.1287) | [7500151](https://www.ncbi.nlm.nih.gov/pubmed/7500151) | metadata signals extractable PD data (IC50) |
| `Roberts_2004.pdf` | Roberts DJ et al., Investigation of the mechanism of agoni…, Biochemical pharmacology (2004) | pd | 4 | [10.1016/j.bcp.2003.12.030](https://doi.org/10.1016/j.bcp.2003.12.030) | [15081865](https://www.ncbi.nlm.nih.gov/pubmed/15081865) | metadata signals extractable PD data (Emax) |
| `Kvernmo_2008.pdf` | Kvernmo T et al., Receptor-binding and pharmacokinetic pr…, Current topics in medicinal… (2008) | pgx | 7 | [10.2174/156802608785161457](https://doi.org/10.2174/156802608785161457) | [18691132](https://www.ncbi.nlm.nih.gov/pubmed/18691132) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 | not captured | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Rasmussen_1998.pdf` | Rasmussen BB et al., Fluvoxamine is a potent inhibitor of th…, Pharmacology & toxicology (1998) | pgx | 7 | [10.1111/j.1600-0773.1998.tb01476.x](https://doi.org/10.1111/j.1600-0773.1998.tb01476.x) | [9868741](https://www.ncbi.nlm.nih.gov/pubmed/9868741) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:13:41.637168+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_2013 | not_relevant | 2 | 1 | The paper is a review that lists CYP3A4 as influencing bromocriptine response but does not report specific quantitative PK/PD parameter changes linked to specific variants for this drug. |
| PGx | Ball_1992 | not_relevant | 1 | 0 | The paper characterizes the enzyme (CYP3A4/5) responsible for the metabolism of CQA 206-291 and mentions bromocriptine only as a competitive inhibitor, without reporting pharmacogenomic effects on bromocriptine PK/PD parameters. |
| PGx | Cacabelos_2017 | not_relevant | 0 | 0 | The paper is a general review of Parkinson's disease pathogenesis and mentions bromocriptine only as a standard drug in a list; it does not report specific pharmacogenomic studies, genotypes, or PK/PD parameter changes for this drug. |
| popPK | Coronas_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor signaling in rat olfactory tissue, not a pharmacokinetic study, and reports no disposition parameters for bromocriptine. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of phorbol esters and dopamine receptors, using bromocriptine as a D2 agonist tool compound, and does not report pharmacokinetic parameters for bromocriptine. |
| PGx | Davydov_2003 | not_relevant | 0 | 0 | The paper is a biophysical study of CYP3A4 conformational heterogeneity using bromocriptine as a substrate and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Davydov_2005 | not_relevant | 0 | 0 | The paper focuses on the biophysical properties of the CYP3A4 enzyme in various membrane systems and does not report pharmacokinetic or pharmacodynamic data for patients or gene variants. |
| PGx | Denisov_2006 | not_relevant | 0 | 0 | The paper investigates basic biochemical kinetics of CYP3A4 enzyme intermediates using bromocriptine as a substrate, and does not report pharmacogenomic effects on drug PK/PD parameters in humans. |
| PGx | Fernando_2006 | not_relevant | 0 | 0 | The study explores enzyme-substrate binding stoichiometry using FRET and titration, but does not report a pharmacogenomic effect on a clinical pharmacokinetic or pharmacodynamic parameter. |
| PGx | Fernando_2008 | not_relevant | 0 | 0 | The paper investigates basic biochemical kinetics of CYP3A4 electron transfer and does not report pharmacogenomic effects (gene variants) on the PK or PD parameters of bromocriptine. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of D1 receptor activity and does not report pharmacokinetic parameters. |
| popPK | Hoffman_1988 | irrelevant | 0 | 0 | The study reports behavioral data (conditioned place preference) and not pharmacokinetic parameters for bromocriptine. |
| popPK | Jacobi_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 3H-testosterone, not bromocriptine, using bromocriptine only as a treatment to assess its effect on androgen metabolism. |
| popPK | Kato_2016 | irrelevant | 0 | 0 | The paper investigates the antiviral activity of bromocriptine against dengue virus in vitro, not its pharmacokinetic properties. |
| PGx | Kijac_2007 | not_relevant | 0 | 0 | The paper focuses on structural biology (NMR spectroscopy) of CYP3A4 and does not report pharmacogenomic studies or genotype-specific PK/PD parameters for bromocriptine. |
| PGx | Kondo_2021 | not_relevant | 0 | 0 | The study is a clinical trial protocol for bromocriptine in PSEN1-mutated Alzheimer's disease, focusing on safety and efficacy, but does not report pharmacokinetic or pharmacodynamic data modulated by gene variants (pharmacogenomics). |
| PGx | Kvernmo_2008 | not_relevant | 0 | 0 | The paper is a review of general pharmacokinetics and pharmacodynamics of dopamine agonists and does not report specific pharmacogenomic effects of gene variants on bromocriptine parameters. |
| PGx | Leal_2025 | not_relevant | 0 | 0 | The paper is a review on MPS IVA treatments and mentions bromocriptine only as a pharmacological chaperone for GALNS stability, with no data on pharmacogenomic effects on bromocriptine's PK or PD. |
| popPK | Magoski_1995 | irrelevant | 0 | 0 | The study investigates dopaminergic neurophysiology in a snail and does not report pharmacokinetic parameters for bromocriptine. |
| PGx | Mak_2011 | not_relevant | 0 | 0 | The paper investigates the structural response of CYP3A4 to bromocriptine binding using Raman spectroscopy, but does not report on gene variants or their impact on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Nath_2007 | not_relevant | 0 | 0 | The paper investigates biophysical ligand binding affinities to CYP3A4 in model membranes and does not report any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | The paper is a review of Parkinson's disease treatments where bromocriptine is only mentioned as a comparator drug in a drug-drug interaction context, with no specific PK parameters reported for it. |
| PGx | Nomoto_2005 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (erythromycin) and interindividual variability for various Parkinson's drugs but does not report any pharmacogenomic effects (gene variants/genotypes) on bromocriptine PK/PD. |
| popPK | Onali_1985 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology paper characterizing dopamine receptors, not a pharmacokinetic study of bromocriptine. |
| PGx | Rasmussen_1998 | not_relevant | 0 | 0 | The paper discusses the interaction between fluvoxamine and caffeine, not bromocriptine. |
| PGx | Rasmussen_1998_2 | not_relevant | 0 | 0 | The paper studies CYP2C19 inhibition of proguanil metabolism, and while bromocriptine is mentioned as a CYP3A4 inhibitor control, no pharmacogenomic effect on bromocriptine's PK or PD is reported. |
| popPK | Roberts_2004 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay investigation of D2 dopamine receptors, not a pharmacokinetic study, and reports no disposition parameters for bromocriptine. |
| popPK | Roelfsema_2012 | irrelevant | 0 | 0 | Bromocriptine is used only as an adjunctive agent to stimulate the HPA axis, not as the subject of a pharmacokinetic study, and no PK parameters for it are reported. |
| PGx | Seo_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of bromocriptine in cancer cell lines (cytotoxicity, NF-κB inhibition) and its interaction with drug resistance transporters, but it does not report a pharmacogenomic effect of a specific human gene variant or genotype on a PK or PD parameter in a patient population or defined genetic model. |
| PGx | Sineva_2013 | not_relevant | 0 | 0 | The paper studies the structural conformational changes of CYP3A4 using LRET and does not report any pharmacogenomic variants or their effects on PK/PD parameters of bromocriptine. |
| popPK | Tadori_2014 | irrelevant | 1 | 0 | This is a review paper focusing on the correlation between therapeutic plasma concentrations and in vitro receptor pharmacology, not a primary study reporting quantitative PK disposition parameters (CL, V, ka, etc.) for bromocriptine. |
| PGx | Tsalkova_2007 | not_relevant | 0 | 0 | The paper reports in vitro binding and fluorescence changes in an engineered CYP3A4 enzyme mutant, but does not assess the effect of a human genetic variant on the PK or PD parameters of bromocriptine. |
| popPK | Valente_1997 | irrelevant | 6 | 1 | Although the study involves bromocriptine in rats and mentions PK/PD modeling, the specific quantitative pharmacokinetic parameters (CL, V, ka) are not reported in the provided text; only pharmacodynamic EC50 values and qualitative AUC comparisons are present. |
| PGx | Vautier_2008 | not_relevant | 0 | 0 | The paper reports drug-drug interactions and ABCB1 substrate/inhibitor properties, but does not report the effect of a gene variant or genotype on PK/PD parameters. |
| PGx | Vautier_2009 | not_relevant | 0 | 0 | The paper reports the effect of a neurotoxin (MPTP) on drug transporters, not a pharmacogenomic effect. |
| PGx | Wilk_2023 | not_relevant | 0 | 0 | The paper reports computational drug repurposing candidates for ADPKD using transcriptomic data, but does not report any pharmacokinetic or pharmacodynamic parameters or pharmacogenomic effects for bromocriptine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of haloperidol, not bromocriptine, which is only mentioned as a co-administered antiparkinsonian drug. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper is a review of macrolide drug interactions and does not report any pharmacogenomic effects on bromocriptine PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
