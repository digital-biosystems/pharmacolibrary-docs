<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;ephedrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ephedrine_Tran2020_reference&quot;,&quot;label&quot;:&quot;Tran_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ephedrine_Csajka2005_reference&quot;,&quot;label&quot;:&quot;Csajka_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ephedrine/Ephedrine_Csajka2005_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-20 18:08 | 3:55 | 1/1/0 | 1/0/0 | 0/0/0 | 90,838/5,094 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Tran_2020_reference](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md) | Tran QT et al., Clinical Evaluation of Acetaminophen-Ga…, Pharmaceutics (2020) | [10.3390/pharmaceutics12121182](https://doi.org/10.3390/pharmaceutics12121182) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Csajka_2005_reference](drugs/drug_ephedrine/Ephedrine_Csajka2005_reference.md) | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloth_2017](drugs/drug_ephedrine/pd_Kloth_2017_arterial_tension.md) | Kloth B et al., Akrinor, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00272](https://doi.org/10.3389/fphar.2017.00272) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloth_2017](drugs/drug_ephedrine/pd_Kloth_2017_force_of_contraction.md) | Kloth B et al., Akrinor, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00272](https://doi.org/10.3389/fphar.2017.00272) |

## Coverage

- **PubMed hits:** 42 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Csajka_2005.pdf` | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) | [15752380](https://pubmed.ncbi.nlm.nih.gov/15752380) | The study reports quantitative PK parameters (clearance and volume) for ephedrine in the abstract, though specific values for absorption rate and intercompartmental clearance are not explicitly listed in the provided text. |
| `Yafune_2001.pdf` | Yafune A et al., Population pharmacokinetic analysis of…, International journal of cl… (2001) | popPK | 10 | not captured | [11824653](https://pubmed.ncbi.nlm.nih.gov/11824653) | The paper is a population PK study of ephedrine, but the provided evidence contains only the abstract and qualitative descriptions without specific numeric parameter values. |
| `Atsumi_2026.pdf` | Atsumi T et al., Effect of pre- and postprandial adminis…, Journal of natural medicines (2026) | popPK | 9 | [10.1007/s11418-025-01980-w](https://doi.org/10.1007/s11418-025-01980-w) | [41276775](https://pubmed.ncbi.nlm.nih.gov/41276775) | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine, but the specific numeric values are not present in the provided evidence text. |
| `Marvola_1978.pdf` | Marvola M et al., Pharmacokinetics and locomotor activity…, Acta pharmacologica et toxi… (1978) | popPK | 9 | [10.1111/j.1600-0773.1978.tb02282.x](https://doi.org/10.1111/j.1600-0773.1978.tb02282.x) | [726903](https://pubmed.ncbi.nlm.nih.gov/726903) | The paper describes a pharmacokinetic study of ephedrine in mice using compartmental models, but the specific numeric parameter values are not present in the provided evidence. |
| `Wan_2019.pdf` | Wan JY et al., [Pharmacokinetics of compatible effecti…, Zhongguo Zhong yao za zhi =… (2019) | popPK | 8 | [10.19540/j.cnki.cjcmm.20190125.002](https://doi.org/10.19540/j.cnki.cjcmm.20190125.002) | [31355574](https://pubmed.ncbi.nlm.nih.gov/31355574) | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Persky_2004.pdf` | Persky AM et al., Modelling the cardiovascular effects of…, British journal of clinical… (2004) | pd | 5 | [10.1111/j.1365-2125.2003.02062.x](https://doi.org/10.1111/j.1365-2125.2003.02062.x) | [15089807](https://www.ncbi.nlm.nih.gov/pubmed/15089807) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Song_2024.pdf` | Song D et al., Natural Binary Herbal Small Molecules S…, ACS biomaterials science &… (2024) | pd | 5 | [10.1021/acsbiomaterials.4c01227](https://doi.org/10.1021/acsbiomaterials.4c01227) | [39324477](https://www.ncbi.nlm.nih.gov/pubmed/39324477) | metadata signals extractable PD data (EC50) |
| `Xu_2024.pdf` | Xu HC et al., The EC50 of propofol with different dos…, Medicine (2024) | pd | 5 | [10.1097/MD.0000000000038421](https://doi.org/10.1097/MD.0000000000038421) | [38847682](https://www.ncbi.nlm.nih.gov/pubmed/38847682) | metadata signals extractable PD data (EC50) |
| `Alexander_2005.pdf` | Alexander M et al., Noradrenergic and dopaminergic effects…, Synapse (New York, N.Y.) (2005) | pd | 4 | [10.1002/syn.20126](https://doi.org/10.1002/syn.20126) | [15729739](https://www.ncbi.nlm.nih.gov/pubmed/15729739) | metadata signals extractable PD data (EC50) |
| `Jing_2010.pdf` | Jing H et al., Ephedrine controls heart rhythms by act…, Journal of cardiovascular p… (2010) | pd | 4 | [10.1097/FJC.0b013e3181ce965c](https://doi.org/10.1097/FJC.0b013e3181ce965c) | [20040889](https://www.ncbi.nlm.nih.gov/pubmed/20040889) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-20T18:05:12.773011+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Alexander_2005 | not_relevant | 0 | 0 | The paper focuses on amphetamine-like stimulants in baboons and does not report pharmacodynamic or exposure-response data for ephedrine. |
| popPK | Atsumi_2026 | relevant | 9 | 0 | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine, but the specific numeric values are not present in the provided evidence text. |
| popPK | Cardozo_2024 | irrelevant | 0 | 0 | The study is a clinical trial comparing anesthetic protocols in dogs where ephedrine is used only as a rescue agent for hypotension, with no pharmacokinetic parameters reported. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The study investigates the EC50 of propofol, and ephedrine is only mentioned as a rescue medication for hypotension, not as the subject of pharmacokinetic analysis. |
| PD | Guo_2020 | not_relevant | 0 | 0 | The paper reports an EC50 for propofol, not ephedrine; ephedrine is only mentioned as a rescue medication with no dose-response or PD analysis. |
| popPK | He_2005 | irrelevant | 0 | 0 | The study investigates pseudo-ephedrine, not ephedrine, and no numeric PK values are provided in the evidence. |
| popPK | Jing_2010 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Jing_2010 | not_relevant | 0 | 0 | The provided text is a title/abstract snippet describing a mechanism of action (activation of Iks currents) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of Akrinor (cafedrine/theodrenaline) on human tissue, not a pharmacokinetic study reporting disposition parameters for ephedrine. |
| PGx | Kocyigit_2026 | not_relevant | 0 | 0 | The paper is a review of herb-drug interactions and does not report pharmacogenomic effects (gene variants) on ephedrine PK/PD parameters. |
| popPK | Kubo_2023 | irrelevant | 0 | 0 | The study evaluates cerebral oxygenation changes using near-infrared spectroscopy and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for ephedrine. |
| PGx | Landau_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics in obstetric anesthesia and does not mention ephedrine or specific pharmacokinetic/pharmacodynamic parameters for it. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic study of ephedrine in rats but does not investigate any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Marvola_1978 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of ephedrine in mice using compartmental models, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Munhall_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ephedrine's mechanism of action on dopamine neurons, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Nayar_2022 | not_relevant | 0 | 0 | The paper is a review of nuclear imaging in Takotsubo cardiomyopathy and does not report pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Persky_2004 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics for natural products and does not report specific data or effects for ephedrine. |
| popPK | Song_2024 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Song_2024 | not_relevant | 0 | 0 | The paper focuses on a nanogel formulation for RSV inhibition and does not report any pharmacodynamic or exposure-response data for ephedrine. |
| PGx | Takei_2023 | not_relevant | 0 | 0 | The paper is a forensic case report on drug overdose and interaction, containing no data on gene variants or pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Tong_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity and does not report any pharmacokinetic parameters for ephedrine. |
| popPK | Tran_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of acetaminophen (AAP), with ephedrine serving only as a covariate to explain changes in AAP parameters, and no quantitative PK parameters for ephedrine itself are reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for theophylline and explicitly states that ephedrine was not found to influence its disposition kinetics, with no mention of pharmacogenomics. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and agonist activity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Villar-Quiles_2026 | not_relevant | 0 | 0 | The paper is a review of congenital myasthenic syndromes and mentions ephedrine only as a general therapeutic option, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Wan_2019 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Wei_2021 | not_relevant | 0 | 0 | The paper is a protocol for a study on differential sensitivity to sevoflurane and does not report pharmacogenomic effects on ephedrine PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the PD of propofol and dexmedetomidine, not ephedrine. |
| popPK | Yafune_2001 | relevant | 10 | 0 | The paper is a population PK study of ephedrine, but the provided evidence contains only the abstract and qualitative descriptions without specific numeric parameter values. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates the metabolomic effects of acteoside on cancer-related fatigue in mice; ephedrine is merely identified as a differentially regulated metabolite, and there is no study of pharmacogenomic effects on ephedrine PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ephedrine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
