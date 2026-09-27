<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ranolazine&quot;}]"></div>

# ranolazine

- **generic name:** ranolazine
- **ATC codes:** `C01EB18`
- **DrugBank:** [DB00243](https://go.drugbank.com/drugs/DB00243) · **PubChem:** [CID 56959](https://pubchem.ncbi.nlm.nih.gov/compound/56959)
- **molar mass:** 427.5365 g/mol (C24H33N3O4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Chronic angina is a common cardiovascular condition affecting millions worldwide and causes significant disability while interfering with daily activities.[A189234] Ranolazine is a well-tolerated piperazine derivative used for the management of this condition, offering relief from uncomfortable and debilitating symptoms.[L3580] With a mechanism of action different from drugs used to treat the same condition, ranolazine is a promising anti-anginal therapy. It was originally approved by the FDA in 2006.[L5440]

**Indication.** Ranolazine is indicated for the treatment of chronic angina. It can be used alone or in conjunction with nitrates, beta-blockers, angiotensin receptor blockers, anti-platelet drugs, calcium channel blockers, lipid-lowering drugs, and ACE inhibitors.[L3580]

Ranolazine has also been used off-label for the treatment of certain arrhythmias, including ventricular tachycardia, however, this use is not strongly  supported by scientific evidence.[A174940] Ranolazine has also been studied for the treatment of acute coronary syndrome, microvascular coronary dysfunction, arrhythmia, and glycemic control, which are not yet approved indications.[A174898,L3580]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 17:55 | 46:03 | 0/0/0 | 0/1/0 | 0/0/0 | 231,295/10,170 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 4/13 | 15/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> | [Cellière_2025](drugs/drug_ranolazine/pd_Celli_re_2025_QTc.md) | Cellière G et al., Beyond the linear model in concentratio…, Journal of pharmacokinetics… (2025) | [10.1007/s10928-025-09975-6](https://doi.org/10.1007/s10928-025-09975-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ranolazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>“…a and more than 100 metabolites have been identified in the urine.[A174946] Ranolazine and…”</sub> | prose |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…excreted renally, while 1/4 of the dose is excreted in the feces. An estimated 5% of an in…”</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), CACNA1C (inhibitor), Fatty acid (other/unknown), KCNJ12 (inhibitor), PLG (modulator), SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 90 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mashayekhi-Sardoo_2022.pdf` | Mashayekhi-Sardoo H et al., Comparison of pharmacokinetic parameter…, Iranian journal of basic me… (2022) | popPK | 9 | [10.22038/IJBMS.2022.64391.14156](https://doi.org/10.22038/IJBMS.2022.64391.14156) | [36033953](https://pubmed.ncbi.nlm.nih.gov/36033953) | The study reports quantitative PK parameters (CL, Vd) for ranolazine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Yoo_2021.pdf` | Yoo H et al., Pharmacokinetics and Safety of Extended…, Clinical therapeutics (2021) | popPK | 9 | [10.1016/j.clinthera.2021.01.005](https://doi.org/10.1016/j.clinthera.2021.01.005) | [33518355](https://pubmed.ncbi.nlm.nih.gov/33518355) | The paper describes a population PK study for ranolazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Scoville_2019.pdf` | Scoville BA et al., Single dose oral ranolazine pharmacokin…, Renal failure (2019) | popPK | 8 | [10.1080/0886022X.2019.1585371](https://doi.org/10.1080/0886022X.2019.1585371) | [30909832](https://pubmed.ncbi.nlm.nih.gov/30909832) | The study reports quantitative non-compartmental PK parameters (half-life, Cmax, Tmax) for ranolazine in hemodialysis patients, but lacks specific clearance (CL) or volume (V) values. |
| `Chang_2018.pdf` | Chang WT et al., Activation of voltage-gated sodium curr…, Clinical and experimental p… (2018) | pd | 5 | [10.1111/1440-1681.12943](https://doi.org/10.1111/1440-1681.12943) | [29617054](https://www.ncbi.nlm.nih.gov/pubmed/29617054) | metadata signals extractable PD data (EC50) |
| `Chuang_2021.pdf` | Chuang TH et al., Effective Accentuation of Voltage-Gated…, Biomedicines (2021) | pd | 5 | [10.3390/biomedicines9091146](https://doi.org/10.3390/biomedicines9091146) | [34572332](https://www.ncbi.nlm.nih.gov/pubmed/34572332) | metadata signals extractable PD data (EC50) |
| `Potet_2020.pdf` | Potet F et al., GS-967 and Eleclazine Block Sodium Chan…, Molecular pharmacology (2020) | pd | 4 | [10.1124/molpharm.120.000048](https://doi.org/10.1124/molpharm.120.000048) | [32938719](https://www.ncbi.nlm.nih.gov/pubmed/32938719) | metadata signals extractable PD data (IC50) |
| `Rajamani_2009.pdf` | Rajamani S et al., Use-dependent block of cardiac late Na(…, Heart rhythm (2009) | pd | 4 | [10.1016/j.hrthm.2009.07.042](https://doi.org/10.1016/j.hrthm.2009.07.042) | [19879541](https://www.ncbi.nlm.nih.gov/pubmed/19879541) | metadata signals extractable PD data (IC50) |
| `Babu_2013.pdf` | Babu PR et al., Influence of quercetin on the pharmacok…, Drug development and indust… (2013) | pgx | 7 | [10.3109/03639045.2012.707209](https://doi.org/10.3109/03639045.2012.707209) | [22817837](https://www.ncbi.nlm.nih.gov/pubmed/22817837) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jerling_2005.pdf` | Jerling M et al., Studies to investigate the pharmacokine…, Journal of clinical pharmac… (2005) | pgx | 7 | [10.1177/0091270004273992](https://doi.org/10.1177/0091270004273992) | [15778423](https://www.ncbi.nlm.nih.gov/pubmed/15778423) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Jerling_2006.pdf` | Jerling M, Clinical pharmacokinetics of ranolazine, Clinical pharmacokinetics (2006) | pgx | 7 | [10.2165/00003088-200645050-00003](https://doi.org/10.2165/00003088-200645050-00003) | [16640453](https://www.ncbi.nlm.nih.gov/pubmed/16640453) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Masters_2014.pdf` | Masters JC et al., Drug Interaction between Sirolimus and…, Case reports in transplanta… (2014) | pgx | 7 | [10.1155/2014/548243](https://doi.org/10.1155/2014/548243) | [24575309](https://www.ncbi.nlm.nih.gov/pubmed/24575309) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-27T17:44:33.656540+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adams_2024 | not_relevant | 0 | 0 | The paper investigates plant extracts and identifies ranolazine as a potential compound via in silico docking, but does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Atwereboannah_2025 | irrelevant | 0 | 0 | The paper is a machine learning study on CYP450 inhibitor prediction and does not report pharmacokinetic parameters for ranolazine. |
| PD | Atwereboannah_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting CYP450 inhibitors and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| PGx | Babu_2013 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (quercetin) on ranolazine pharmacokinetics, not a pharmacogenomic effect (gene variant/genotype). |
| PGx | Bactawar_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (Paxlovid inhibiting CYP enzymes) affecting ranolazine PK, not a pharmacogenomic effect (gene variant/genotype) on the drug. |
| popPK | Bai_2025 | irrelevant | 0 | 0 | The paper is a computational study on sex-specific classification of antiarrhythmic drugs using machine learning and does not report pharmacokinetic parameters for ranolazine. |
| PD | Bai_2025 | not_relevant | 2 | 1 | The paper uses a computational model to classify drugs based on electrophysiological changes, utilizing IC50 values as input parameters for channel block, but it does not report a derived pharmacodynamic model (e.g., Emax, EC50 for effect) or exposure-response relationship for ranolazine. |
| PGx | Barsheshet_2014 | not_relevant | 0 | 0 | The paper is a review of Long QT Syndrome management and mentions ranolazine as a treatment option for LQT3, but it does not report any pharmacogenomic effects on ranolazine's PK or PD parameters. |
| PD | Belardinelli_2013 | not_relevant | 0 | 0 | The paper focuses on a novel compound (GS967) and only mentions ranolazine qualitatively as a comparator without providing any specific pharmacodynamic parameters or exposure-response data for ranolazine. |
| popPK | Blanchette_2019 | irrelevant | 0 | 0 | The paper describes an in vitro model for QT/QTc prediction and does not report pharmacokinetic disposition parameters for ranolazine. |
| PD | Blanchette_2019 | not_relevant | 0 | 0 | The paper describes an in vitro model for 13 control drugs and does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Brockway_2018 | irrelevant | 0 | 0 | The study focuses on ECG signal processing and cardiac ion channel block detection, not pharmacokinetic disposition parameters for ranolazine. |
| popPK | Bruno_2025 | relevant | 8 | 2 | The paper develops a PBPK model for ranolazine as a victim drug, but specific numeric disposition parameters (CL, V, Q) are not explicitly listed in the provided text, appearing only as model inputs or in supplementary material/figures. |
| PD | Bruno_2025 | not_relevant | 0 | 0 | The paper describes a PBPK model for drug-drug interactions (PK only) and does not report any pharmacodynamic (PD) or exposure-response relationship for ranolazine. |
| PGx | Bruno_2025 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for drug-drug interactions (posaconazole) and the impact of obesity (BMI) on PK, not on pharmacogenomic effects (gene variants) on ranolazine. |
| popPK | Bystricky_2020 | irrelevant | 0 | 0 | The paper is a cardiac safety study analyzing ECG repolarization dynamics (T vector velocity) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for ranolazine. |
| popPK | Camargo-Ayala_2025 | irrelevant | 0 | 0 | The paper focuses on the design and evaluation of novel acetamide-based compounds for atrial fibrillation, not the pharmacokinetics of ranolazine. |
| PD | Camargo-Ayala_2025 | not_relevant | 0 | 0 | The paper studies a novel compound (6f) and does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Cellière_2025 | irrelevant | 0 | 0 | The paper describes a methodological framework for concentration-QTc modeling and does not report pharmacokinetic parameters for ranolazine. |
| popPK | Chang_2018 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of telmisartan, with ranolazine used only as a comparator agent to reverse effects, and no pharmacokinetic parameters are reported. |
| PD | Chang_2018 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of telmisartan, with ranolazine mentioned only as a control agent to reverse telmisartan's effects, and no PD parameters for ranolazine are reported. |
| popPK | Chen_2026 | irrelevant | 2 | 0 | The study reports only bioequivalence metrics (GMRs and CIs for Cmax/AUC) and lacks quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Chuang_2021 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Chuang_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of apocynin, not ranolazine, and does not report any exposure-response or dose-response data for ranolazine. |
| popPK | Coleman_2024 | irrelevant | 0 | 0 | The paper is a computational electrophysiology study investigating arrhythmic mechanisms, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for ranolazine. |
| PGx | Correa_2013 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ranolazine inhibiting CYP3A4 affecting statins) and a case of myopathy, but does not report a pharmacogenomic effect (gene variant) on ranolazine's PK or PD parameters. |
| PGx | Dein_2018 | not_relevant | 0 | 0 | The paper reports a case of ranolazine-induced myopathy (elevated CK) without statin use, but it does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| PD | Di_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical indications and emerging therapeutic potential without reporting specific numeric pharmacodynamic parameters or exposure-response data. |
| PD | Dobesh_2007 | not_relevant | 1 | 0 | The text is a general review of ranolazine's mechanism and clinical efficacy but does not provide specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Fanaroff_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial analyzing antianginal effects and glucose control (HbA1c), containing no pharmacokinetic parameters or disposition data for ranolazine. |
| PD | Fink_2010 | not_relevant | 1 | 0 | The text is a conceptual review discussing the utility of cardiac modeling for drug development (mentioning ranolazine) but does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PD | Galimberti_2011 | not_relevant | 0 | 0 | The paper reports that ranolazine had no significant effect on Ca2+ waves at the highest tested concentration (100 μM), providing no numeric PD parameters (such as IC50 or Emax) or extractable dose-response relationship for the drug. |
| PGx | Jerling_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (ketoconazole, diltiazem, simvastatin) rather than pharmacogenomic effects of gene variants on ranolazine PK/PD. |
| PGx | Jerling_2006 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and drug-drug interactions but does not report any pharmacogenomic effects (gene variants) on ranolazine PK/PD. |
| popPK | Kis_2024 | irrelevant | 0 | 0 | The paper describes a monoclonal antibody therapy for Long QT syndrome in a cellular model and does not involve ranolazine or report any pharmacokinetic parameters. |
| PD | Kis_2024 | not_relevant | 0 | 0 | The paper describes a monoclonal antibody therapy for Long QT syndrome and does not mention ranolazine or report any pharmacodynamic parameters for it. |
| PD | Koslover_2023 | not_relevant | 0 | 0 | The paper is a qualitative review of metformin prescribing principles and mentions ranolazine only as a drug interaction partner, providing no pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of sodium metabisulfite where ranolazine is used only as a comparator agent to block sodium channels, with no pharmacokinetic parameters reported. |
| PD | Lai_2018 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of sodium metabisulfite (SMB) and mentions ranolazine only as a control agent to attenuate SMB-induced sodium current changes, without reporting any exposure-response or dose-response relationship for ranolazine itself. |
| popPK | Luo_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel currents, not a pharmacokinetic study, and reports no disposition parameters for ranolazine. |
| PD | Mahmoudi_2006 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for ranolazine as part of a QSAR study, which is a static potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with derivable PD parameters like Emax or slope. |
| PGx | Maideen_2024 | not_relevant | 0 | 0 | The text is a prescribing information label for PAXLOVID (nirmatrelvir/ritonavir) and does not report pharmacogenomic effects on ranolazine. |
| popPK | Malavaki_2015 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxation in isolated rabbit aorta and does not report any pharmacokinetic parameters for ranolazine. |
| popPK | Mashayekhi-Sardoo_2022 | relevant | 9 | 2 | The study reports quantitative PK parameters (CL, Vd) for ranolazine in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Masters_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (sirolimus and ranolazine) in a single patient, not a pharmacogenomic effect of a gene variant on ranolazine's PK/PD. |
| popPK | Mikolajewska_2021 | irrelevant | 0 | 0 | The paper is a systematic review of colchicine for COVID-19 and does not involve ranolazine or report any pharmacokinetic parameters. |
| PD | Mikolajewska_2021 | not_relevant | 0 | 0 | The paper is a systematic review of colchicine for COVID-19 and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Moreno_2013 | irrelevant | 0 | 0 | The paper is an in silico pharmacological study focusing on ion channel kinetics and arrhythmia mechanisms, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Moreno_2013 | not_relevant | 0 | 0 | The paper is an in silico computational study simulating channel kinetics and does not report experimental or clinical pharmacodynamic data with numeric PD parameters. |
| popPK | Nicolò_2023 | irrelevant | 0 | 0 | The paper is a review of in silico trial platforms and uses ranolazine only as a test case for cardiotoxicity risk classification, without reporting any pharmacokinetic parameters. |
| PD | Nicolò_2023 | not_relevant | 0 | 0 | The paper describes a cloud-based platform for in silico trials and presents use cases for cardiotoxicity, heart valves, multiple sclerosis, and prostate cancer (leuprolide), but does not contain any pharmacodynamic or exposure-response analysis for ranolazine. |
| PGx | Panfili_2012 | not_relevant | 2 | 1 | The paper describes a case report of an adverse event and mentions CYP phenotyping qualitatively, but it does not report a quantitative pharmacokinetic or pharmacodynamic parameter change linked to a specific genotype. |
| PD | Potet_2020 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of GS-967 and Eleclazine, not ranolazine, and does not report pharmacodynamic or exposure-response relationships for ranolazine. |
| PD | Rashid_2022 | not_relevant | 0 | 0 | The text is a clinical case report describing the management of an overdose and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Reddy_2010 | not_relevant | 1 | 0 | The text is a general review of ranolazine's physiology, pharmacology, and clinical trials, containing no specific numeric PD parameters or exposure-response analysis. |
| popPK | Reis_2023 | irrelevant | 0 | 0 | The paper is a systematic review of nirmatrelvir/ritonavir for COVID-19 and does not involve ranolazine or report any pharmacokinetic parameters. |
| PD | Reis_2023 | not_relevant | 0 | 0 | The paper is a systematic review of nirmatrelvir/ritonavir for COVID-19 and contains no pharmacodynamic or exposure-response analysis for ranolazine. |
| popPK | Rjoob_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on knowledge graphs for drug repurposing and does not report any pharmacokinetic parameters for ranolazine. |
| PD | Rjoob_2025 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing but contains no pharmacodynamic or exposure-response analysis for ranolazine. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper is a machine learning study on cardiovascular knowledge graphs where ranolazine is only mentioned as a predicted drug candidate, with no pharmacokinetic data reported. |
| PD | Rjoob_2026 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| PD | Rosa_2014 | not_relevant | 0 | 0 | The paper is a review of dronedarone and only mentions ranolazine in the context of a combination trial (HARMONY) without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for ranolazine. |
| popPK | Scotcher_2020 | irrelevant | 0 | 0 | The paper focuses on a physiologically based model for creatinine renal disposition and does not report pharmacokinetic parameters for ranolazine. |
| PD | Scotcher_2020 | not_relevant | 0 | 0 | The paper focuses on a physiologically based pharmacokinetic (PBPK) model for creatinine renal disposition and transporter inhibition, not on the pharmacodynamics or exposure-response relationship of ranolazine. |
| popPK | Serrano_2023 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on proarrhythmia risk using deep learning and does not report pharmacokinetic parameters for ranolazine. |
| PD | Serrano_2023 | not_relevant | 0 | 0 | The paper describes a deep learning platform for predicting proarrhythmia risk using iPSC-CMs and does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a data mining study on OXPHOS inhibitors for ovarian cancer and does not report pharmacokinetic parameters for ranolazine. |
| PD | Sharma_2024 | not_relevant | 0 | 0 | The paper focuses on data mining for OXPHOS inhibitors and does not mention ranolazine or report any pharmacodynamic parameters for it. |
| popPK | Shiau_2022 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of picaridin on sodium channels in cell lines, with ranolazine used only as a secondary agent to attenuate effects, and contains no pharmacokinetic data. |
| PD | Shiau_2022 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of picaridin on sodium currents; ranolazine is only mentioned as a secondary agent used to attenuate picaridin's effects, with no PD or exposure-response analysis for ranolazine itself. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darolutamide, not ranolazine. |
| PD | Shore_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of darolutamide and drug-drug interactions, containing no pharmacodynamic or exposure-response analysis for ranolazine. |
| popPK | Stabenau_2020 | irrelevant | 0 | 0 | The study focuses on electrocardiographic effects (GEH) of ranolazine as an antiarrhythmic agent, not on pharmacokinetic disposition parameters. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is a mechanistic in-silico study of drug binding to the Nav1.5 channel and does not report any pharmacokinetic parameters for ranolazine. |
| PD | Tao_2025 | not_relevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on the binding modes of drugs in the Nav1.5 channel pore and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Trujillo_2006 | not_relevant | 0 | 0 | The paper is a general review of ranolazine's pharmacology and clinical use, mentioning CYP3A4 metabolism but not reporting specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PD | Wang_2008 | not_relevant | 2 | 1 | The study reports a single-dose effect (prevention of TdP) and qualitative comparison of dose-response curves for a different drug (prazosin), but does not provide numeric PD parameters or a concentration-effect relationship for ranolazine. |
| popPK | Wrishko_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, not ranolazine. |
| PD | Wrishko_2026 | not_relevant | 0 | 0 | The paper focuses on posaconazole pharmacokinetics and CYP3A4 inhibition thresholds, not ranolazine pharmacodynamics. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | The study investigates the mechanism of action of tefluthrin on ion currents, using ranolazine only as a pharmacological tool to block sodium channels, and reports no pharmacokinetic parameters for ranolazine. |
| PD | Wu_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of tefluthrin, not ranolazine; ranolazine is only mentioned as a tool compound to block tefluthrin-induced currents. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper identifies ranolazine as a potential anti-aging drug via computational screening but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of sodium channel blockers in Long QT Syndrome and does not report pharmacogenomic effects on the PK or PD parameters of ranolazine. |
| popPK | Yoo_2021 | relevant | 9 | 0 | The paper describes a population PK study for ranolazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yoo_2021_2 | irrelevant | 0 | 0 | The paper focuses on in silico proarrhythmicity modeling and does not report pharmacokinetic parameters for ranolazine. |
| PD | Yoo_2021_2 | not_relevant | 0 | 0 | The paper describes an in silico computational model for proarrhythmicity prediction using voltage clamp data and does not report any pharmacokinetic or pharmacodynamic exposure-response relationships for ranolazine. |
| popPK | Zablocki_2016 | irrelevant | 0 | 0 | The paper focuses on the discovery and SAR of a new compound (eleclazine) with ranolazine serving only as a comparator for potency, and no pharmacokinetic parameters are reported. |
| PD | Zaccara_2020 | not_relevant | 0 | 0 | The paper is a review of drug interactions and anticonvulsant properties of cardiovascular drugs; it mentions ranolazine only in the context of drug-drug interactions with enzyme-inducing antiseizure medications and provides no pharmacodynamic or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
