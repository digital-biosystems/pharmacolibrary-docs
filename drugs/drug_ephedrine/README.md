# ephedrine

- **generic name:** ephedrine
- **ATC codes:** `C01CA26`, `R01AA03`, `R01AB05`, `R03CA02`, `S01FB02`
- **DrugBank:** [DB01364](https://go.drugbank.com/drugs/DB01364)
- **groups:** approved, investigational

## About

**Description.** Ephedrine was first described in western literature in 1888, as a naturally occurring component of the ephedra plant, along with [pseudoephedrine].[A193698] Ephedrine acts as both a direct and indirect sympathomimetic. It is an alpha- and beta-adrenergic receptor agonist; however, it also causes the indirect release of norepinephrine from sympathetic neurons, inhibiting norepinephrine reuptake and displacing more norepinephrine from storage vesicles.[A193650,L12972] Ephedrine is used for its vasoconstrictive, positive chronotropic, and positive inotropic effects.[L12972] Ephedrine and [phenylephrine] are still used to treat hypotension, but their use in other indications has decreased due to the development of more selective adrenergic agonists.[A193701,A193704,L12975] Ephedrine was granted a type 7 FDA Approval on 29 April 2016.[L12975]

**Indication.** Ephedrine intravenous injections are indicated to treat hypotension under anesthesia,[L12972,L34645] ephedrine injections by multiple routes are indicated to treat allergic conditions such as bronchial asthma,[L12996] ephedrine nasal spray is and OTC medication used as a decongestant.[L12993]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 19:26 | 10:29 | 1/1/0 | 1/0/0 | 0/0/0 | 106,916/7,876 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tran_2020](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md) | Tran QT et al., Clinical Evaluation of Acetaminophen-Ga…, Pharmaceutics (2020) | [10.3390/pharmaceutics12121182](https://doi.org/10.3390/pharmaceutics12121182) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Csajka_2005](drugs/drug_ephedrine/Ephedrine_Csajka2005_reference.md) | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloth_2017](drugs/drug_ephedrine/pd_Kloth_2017_arterial_tension.md) | Kloth B et al., Akrinor, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00272](https://doi.org/10.3389/fphar.2017.00272) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloth_2017](drugs/drug_ephedrine/pd_Kloth_2017_force_of_contraction.md) | Kloth B et al., Akrinor, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00272](https://doi.org/10.3389/fphar.2017.00272) |

## Coverage

- **PubMed hits:** 42 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Csajka_2005.pdf` | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) | [15752380](https://pubmed.ncbi.nlm.nih.gov/15752380) | The study reports quantitative PK parameters for ephedrine (clearance 0.34 l/min, volume 181 l) in the main text, though specific absorption rate constants and intercompartmental clearances are not explicitly listed in the provided evidence. |
| `Yafune_2001.pdf` | Yafune A et al., Population pharmacokinetic analysis of…, International journal of cl… (2001) | popPK | 10 | not captured | [11824653](https://pubmed.ncbi.nlm.nih.gov/11824653) | The paper is a population PK study of ephedrine, but the provided evidence contains only the abstract and qualitative descriptions without specific numeric parameter values. |
| `Atsumi_2026.pdf` | Atsumi T et al., Effect of pre- and postprandial adminis…, Journal of natural medicines (2026) | popPK | 9 | [10.1007/s11418-025-01980-w](https://doi.org/10.1007/s11418-025-01980-w) | [41276775](https://pubmed.ncbi.nlm.nih.gov/41276775) | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine, but the specific numeric values are not present in the provided evidence text. |
| `Marvola_1978.pdf` | Marvola M et al., Pharmacokinetics and locomotor activity…, Acta pharmacologica et toxi… (1978) | popPK | 9 | [10.1111/j.1600-0773.1978.tb02282.x](https://doi.org/10.1111/j.1600-0773.1978.tb02282.x) | [726903](https://pubmed.ncbi.nlm.nih.gov/726903) | The study reports a compartmental PK model for ephedrine in mice, but the specific numeric parameter values are not present in the provided evidence. |
| `Wan_2019.pdf` | Wan JY et al., [Pharmacokinetics of compatible effecti…, Zhongguo Zhong yao za zhi =… (2019) | popPK | 8 | [10.19540/j.cnki.cjcmm.20190125.002](https://doi.org/10.19540/j.cnki.cjcmm.20190125.002) | [31355574](https://pubmed.ncbi.nlm.nih.gov/31355574) | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Persky_2004.pdf` | Persky AM et al., Modelling the cardiovascular effects of…, British journal of clinical… (2004) | pd | 5 | [10.1111/j.1365-2125.2003.02062.x](https://doi.org/10.1111/j.1365-2125.2003.02062.x) | [15089807](https://www.ncbi.nlm.nih.gov/pubmed/15089807) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Song_2024.pdf` | Song D et al., Natural Binary Herbal Small Molecules S…, ACS biomaterials science &… (2024) | pd | 5 | [10.1021/acsbiomaterials.4c01227](https://doi.org/10.1021/acsbiomaterials.4c01227) | [39324477](https://www.ncbi.nlm.nih.gov/pubmed/39324477) | metadata signals extractable PD data (EC50) |
| `Xu_2024.pdf` | Xu HC et al., The EC50 of propofol with different dos…, Medicine (2024) | pd | 5 | [10.1097/MD.0000000000038421](https://doi.org/10.1097/MD.0000000000038421) | [38847682](https://www.ncbi.nlm.nih.gov/pubmed/38847682) | metadata signals extractable PD data (EC50) |
| `Alexander_2005.pdf` | Alexander M et al., Noradrenergic and dopaminergic effects…, Synapse (New York, N.Y.) (2005) | pd | 4 | [10.1002/syn.20126](https://doi.org/10.1002/syn.20126) | [15729739](https://www.ncbi.nlm.nih.gov/pubmed/15729739) | metadata signals extractable PD data (EC50) |
| `Jing_2010.pdf` | Jing H et al., Ephedrine controls heart rhythms by act…, Journal of cardiovascular p… (2010) | pd | 4 | [10.1097/FJC.0b013e3181ce965c](https://doi.org/10.1097/FJC.0b013e3181ce965c) | [20040889](https://www.ncbi.nlm.nih.gov/pubmed/20040889) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-09T19:23:01.320980+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2005 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic effects of amphetamine-like stimulants in baboons and does not report pharmacokinetic parameters for ephedrine. |
| PD | Alexander_2005 | not_relevant | 0 | 0 | The paper focuses on amphetamine-like stimulants in baboons and does not report pharmacodynamic or exposure-response data for ephedrine. |
| popPK | Atsumi_2026 | relevant | 9 | 0 | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine, but the specific numeric values are not present in the provided evidence text. |
| popPK | Cardozo_2024 | irrelevant | 0 | 0 | The study is a clinical trial comparing anesthetic protocols in dogs where ephedrine is used only as a rescue agent for hypotension, with no pharmacokinetic parameters reported. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The study investigates the EC50 of propofol, and ephedrine is only mentioned as a rescue medication for hypotension, not as the subject of pharmacokinetic analysis. |
| PD | Guo_2020 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for propofol, not ephedrine; ephedrine is only mentioned as a rescue medication with no dose-response analysis. |
| popPK | He_2005 | irrelevant | 0 | 0 | The study investigates pseudo-ephedrine, not ephedrine, and no numeric PK values are provided in the evidence. |
| popPK | Jing_2010 | irrelevant | 0 | 0 | The paper focuses on the electrophysiological mechanism of ephedrine (activating I(ks) currents) rather than reporting pharmacokinetic disposition parameters. |
| PD | Jing_2010 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of ephedrine (activation of Iks currents) but does not report a pharmacokinetic-pharmacodynamic model, exposure-response analysis, or numeric PD parameters (e.g., EC50, Emax) for the drug in a physiological or clinical context. |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study of Akrinor (cafedrine/theodrenaline) and does not report pharmacokinetic parameters for ephedrine. |
| PGx | Kocyigit_2026 | not_relevant | 0 | 0 | The paper is a review of herb-drug interactions and does not report pharmacogenomic effects (gene variants) on ephedrine PK/PD parameters. |
| popPK | Kubo_2023 | irrelevant | 0 | 0 | The study evaluates cerebral oxygenation changes using near-infrared spectroscopy and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for ephedrine. |
| PGx | Landau_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics in obstetric anesthesia and does not mention ephedrine or specific pharmacokinetic/pharmacodynamic parameters for it. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic study in rats without any genetic variation or pharmacogenomic analysis. |
| popPK | Marvola_1978 | relevant | 9 | 0 | The study reports a compartmental PK model for ephedrine in mice, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Munhall_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ephedrine's mechanism of action on dopamine neurons, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Nayar_2022 | not_relevant | 0 | 0 | The paper is a review of nuclear imaging in Takotsubo cardiomyopathy and does not report pharmacogenomic effects on the PK or PD of ephedrine. |
| PGx | Odekon_2015 | not_relevant | 2 | 0 | The study investigates the effect of ADRB2 genotype on phenylephrine dose, not ephedrine, although it references previous ephedrine data. |
| popPK | Persky_2004 | irrelevant | 0 | 0 | The provided evidence contains only the title, which suggests a cardiovascular effects study rather than a pharmacokinetic parameter study, and no numeric PK values are present. |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics for natural products and does not report specific data or effects for ephedrine. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The paper title indicates a study on a nanogel for viral inhibition, with no evidence of ephedrine pharmacokinetics or disposition parameters. |
| PD | Song_2024 | not_relevant | 0 | 0 | The paper focuses on a nanogel for RSV inhibition and does not mention ephedrine or report any pharmacodynamic or exposure-response data for it. |
| PGx | Takei_2023 | not_relevant | 0 | 0 | The paper is a forensic case report on drug overdose and interaction, containing no data on gene variants or pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Tong_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity and does not report any pharmacokinetic parameters for ephedrine. |
| popPK | Tran_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of acetaminophen (AAP), with ephedrine serving only as a covariate to explain changes in AAP parameters, and no quantitative PK parameters for ephedrine itself are reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for theophylline and explicitly states that ephedrine was not found to influence its disposition kinetics, with no mention of pharmacogenomics. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and agonist activity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Villar-Quiles_2026 | not_relevant | 0 | 0 | The paper is a review of congenital myasthenic syndromes and mentions ephedrine only as a general therapeutic option, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Wan_2019 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Wei_2021 | not_relevant | 0 | 0 | The paper is a protocol for a study on sevoflurane sensitivity and does not report pharmacogenomic effects on ephedrine PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper concerns propofol and dexmedetomidine in endoscopy, not ephedrine pharmacokinetics. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the PD of propofol and dexmedetomidine, not ephedrine. |
| popPK | Yafune_2001 | relevant | 10 | 0 | The paper is a population PK study of ephedrine, but the provided evidence contains only the abstract and qualitative descriptions without specific numeric parameter values. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper is a metabolomics study on cancer-related fatigue in mice and does not report pharmacogenomic effects on the PK/PD of ephedrine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ephedrine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
