<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ranolazine&quot;}]"></div>

# ranolazine

- **generic name:** ranolazine
- **ATC codes:** `C01EB18`
- **DrugBank:** [DB00243](https://go.drugbank.com/drugs/DB00243) · **PubChem:** [CID 56959](https://pubchem.ncbi.nlm.nih.gov/compound/56959)
- **molar mass:** 427.5365 g/mol (C24H33N3O4) — DrugBank
- **groups:** approved, investigational

## About

Ranolazine is a heart medicine used to treat angina (chest pain). It is an approved drug and is authorised in the European Union for angina pectoris.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907104](https://www.wikidata.org/wiki/Q907104) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:43 | 5:56 | 0/0/0 | 2/0/1 | 0/0/0 | 228,161/6,411 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 5/19 | 14/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Cellière_2025_QTc](drugs/drug_ranolazine/pd_Celli_re_2025_QTc.md) | placebo-corrected change from baseline in QTc interval duration ← ranolazine · direct linear effect | — | Cellière G et al., Beyond the linear model in concentratio…, Journal of pharmacokinetics… (2025) | [10.1007/s10928-025-09975-6](https://doi.org/10.1007/s10928-025-09975-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2009_I_Na](drugs/drug_ranolazine/pd_Chen_2009_I_Na.md) | I Na ← ranolazine · direct sigmoid Emax (Hill) effect | — | Chen BS et al., Effects of ranolazine, a novel anti-ang…, Journal of pharmacological… (2009) | [10.1254/jphs.09018fp](https://doi.org/10.1254/jphs.09018fp) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2009_I_K_IR](drugs/drug_ranolazine/pd_Chen_2009_I_K_IR.md) | I K(IR) ← ranolazine · direct sigmoid Emax (Hill) effect | — | Chen BS et al., Effects of ranolazine, a novel anti-ang…, Journal of pharmacological… (2009) | [10.1254/jphs.09018fp](https://doi.org/10.1254/jphs.09018fp) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ratte_2019_TASK_1](drugs/drug_ranolazine/pd_Ratte_2019_TASK_1.md) | TASK-1 current ← ranolazine · direct Emax (saturable) effect | — | Ratte A et al., Antiarrhythmic Properties of Ranolazine…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.01367](https://doi.org/10.3389/fphar.2019.01367) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ranolazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), CACNA1C (inhibitor), Fatty acid (other/unknown), KCNJ12 (inhibitor), PLG (modulator), SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 115 returned
- **screened:** 11  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoo_2021.pdf` | Yoo H et al., Pharmacokinetics and Safety of Extended…, Clinical therapeutics (2021) | popPK | 10 | [10.1016/j.clinthera.2021.01.005](https://doi.org/10.1016/j.clinthera.2021.01.005) | [33518355](https://pubmed.ncbi.nlm.nih.gov/33518355) | The study reports a population PK analysis for ranolazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Chang_2018.pdf` | Chang WT et al., Activation of voltage-gated sodium curr…, Clinical and experimental p… (2018) | pd | 5 | [10.1111/1440-1681.12943](https://doi.org/10.1111/1440-1681.12943) | [29617054](https://www.ncbi.nlm.nih.gov/pubmed/29617054) | metadata signals extractable PD data (EC50) |
| `Chuang_2021.pdf` | Chuang TH et al., Effective Accentuation of Voltage-Gated…, Biomedicines (2021) | pd | 5 | [10.3390/biomedicines9091146](https://doi.org/10.3390/biomedicines9091146) | [34572332](https://www.ncbi.nlm.nih.gov/pubmed/34572332) | metadata signals extractable PD data (EC50) |
| `El_2025.pdf` | El Sobky SA et al., Drug repurposing of argatroban, glimepi…, Heliyon (2025) | pd | 4 | [10.1016/j.heliyon.2025.e41894](https://doi.org/10.1016/j.heliyon.2025.e41894) | [39968139](https://www.ncbi.nlm.nih.gov/pubmed/39968139) | metadata signals extractable PD data (IC50) |
| `Potet_2016.pdf` | Potet F et al., Use-Dependent Block of Human Cardiac So…, Molecular pharmacology (2016) | pd | 4 | [10.1124/mol.116.103358](https://doi.org/10.1124/mol.116.103358) | [27136942](https://www.ncbi.nlm.nih.gov/pubmed/27136942) | metadata signals extractable PD data (IC50) |
| `Potet_2020.pdf` | Potet F et al., GS-967 and Eleclazine Block Sodium Chan…, Molecular pharmacology (2020) | pd | 4 | [10.1124/molpharm.120.000048](https://doi.org/10.1124/molpharm.120.000048) | [32938719](https://www.ncbi.nlm.nih.gov/pubmed/32938719) | metadata signals extractable PD data (IC50) |
| `Rajamani_2008.pdf` | Rajamani S et al., Block of tetrodotoxin-sensitive, Na(V)1…, Channels (Austin, Tex.) (2008) | pd | 4 | [10.4161/chan.2.6.7362](https://doi.org/10.4161/chan.2.6.7362) | [19077543](https://www.ncbi.nlm.nih.gov/pubmed/19077543) | metadata signals extractable PD data (IC50) |
| `Rajamani_2009.pdf` | Rajamani S et al., Use-dependent block of cardiac late Na(…, Heart rhythm (2009) | pd | 4 | [10.1016/j.hrthm.2009.07.042](https://doi.org/10.1016/j.hrthm.2009.07.042) | [19879541](https://www.ncbi.nlm.nih.gov/pubmed/19879541) | metadata signals extractable PD data (IC50) |
| `Babu_2013.pdf` | Babu PR et al., Influence of quercetin on the pharmacok…, Drug development and indust… (2013) | pgx | 7 | [10.3109/03639045.2012.707209](https://doi.org/10.3109/03639045.2012.707209) | [22817837](https://www.ncbi.nlm.nih.gov/pubmed/22817837) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jerling_2005.pdf` | Jerling M et al., Studies to investigate the pharmacokine…, Journal of clinical pharmac… (2005) | pgx | 7 | [10.1177/0091270004273992](https://doi.org/10.1177/0091270004273992) | [15778423](https://www.ncbi.nlm.nih.gov/pubmed/15778423) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Jerling_2006.pdf` | Jerling M, Clinical pharmacokinetics of ranolazine, Clinical pharmacokinetics (2006) | pgx | 7 | [10.2165/00003088-200645050-00003](https://doi.org/10.2165/00003088-200645050-00003) | [16640453](https://www.ncbi.nlm.nih.gov/pubmed/16640453) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T11:39:26.975142+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2024 | irrelevant | 0 | 0 | The paper is an in vitro/in silico study on plant extracts where ranolazine is only identified as a bioactive compound via mass spectrometry, with no pharmacokinetic parameters reported. |
| PD | Adams_2024 | not_relevant | 0 | 0 | The paper investigates plant extracts and identifies ranolazine as a potential compound via in silico docking, but does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Antzelevitch_2004 | irrelevant | 0 | 0 | The paper is a review of electrophysiologic properties and antiarrhythmic actions, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Antzelevitch_2004_2 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel effects and does not report pharmacokinetic disposition parameters. |
| popPK | Atwereboannah_2025 | irrelevant | 0 | 0 | The paper describes a machine learning model for predicting CYP450 inhibitors and does not report pharmacokinetic parameters for ranolazine. |
| PD | Atwereboannah_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting CYP450 inhibitors and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| PGx | Babu_2013 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (quercetin) on ranolazine pharmacokinetics, not a pharmacogenomic effect (gene variant/genotype). |
| PGx | Bactawar_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (Paxlovid inhibiting CYP enzymes) affecting ranolazine PK, not a pharmacogenomic effect based on a patient's gene variant or genotype. |
| popPK | Bai_2025 | irrelevant | 0 | 0 | The study focuses on in vitro electrophysiological effects and machine learning classification of antiarrhythmic drugs, not pharmacokinetic parameters for ranolazine. |
| PD | Bai_2025 | not_relevant | 2 | 1 | The paper uses a computational model to classify drugs based on electrophysiological changes, utilizing IC50 values as input parameters for channel block, but it does not report a derived pharmacodynamic model (e.g., Emax, EC50 for effect) or exposure-response relationship for ranolazine. |
| PGx | Barsheshet_2014 | not_relevant | 0 | 0 | The paper is a review of Long QT Syndrome management and mentions ranolazine as a treatment option for LQT3, but it does not report any pharmacogenomic effects on ranolazine's PK or PD parameters. |
| popPK | Belardinelli_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and electrophysiology of GS967, with ranolazine serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Belardinelli_2013 | not_relevant | 0 | 0 | The paper focuses on a novel compound (GS967) and only mentions ranolazine qualitatively as a comparator without providing any specific pharmacodynamic parameters or exposure-response data for ranolazine. |
| popPK | Beyder_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ion channel modulation and does not report pharmacokinetic parameters for ranolazine. |
| popPK | Blanchette_2019 | irrelevant | 0 | 0 | The paper describes an in vitro model for QT/QTc prediction and does not report pharmacokinetic parameters for ranolazine. |
| PD | Blanchette_2019 | not_relevant | 0 | 0 | The paper describes an in vitro model for 13 control drugs and does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Borowicz-Reutt_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of anticonvulsant interactions in mice and does not report quantitative pharmacokinetic parameters for ranolazine. |
| popPK | Brockway_2018 | irrelevant | 0 | 0 | The study focuses on ECG signal processing and cardiac ion channel block detection, not pharmacokinetic disposition parameters. |
| PD | Brockway_2018 | not_relevant | 4 | 2 | The text mentions exposure-response relationships and modeled slopes for ranolazine but does not provide specific numeric PD parameters (e.g., Emax, EC50, slope values) in the provided excerpt. |
| PD | Bruno_2025 | not_relevant | 0 | 0 | The paper describes a PBPK model for drug-drug interactions (PK only) and does not report any pharmacodynamic (PD) or exposure-response relationship for ranolazine. |
| PGx | Bruno_2025 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for drug-drug interactions (posaconazole) and the impact of obesity (BMI) on PK, not on pharmacogenomic effects (gene variants) on ranolazine. |
| popPK | Bystricky_2020 | irrelevant | 0 | 0 | The study focuses on electrocardiographic (ECG) repolarization dynamics and proarrhythmic risk assessment, not on the pharmacokinetic disposition parameters (CL, V, etc.) of ranolazine. |
| popPK | Camargo-Ayala_2025 | irrelevant | 0 | 0 | The study focuses on the design and evaluation of novel acetamide-based compounds for atrial fibrillation, not the pharmacokinetics of ranolazine. |
| PD | Camargo-Ayala_2025 | not_relevant | 0 | 0 | The paper studies a novel compound (6f) and does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Cellière_2025 | irrelevant | 0 | 0 | The paper focuses on concentration-QTc (pharmacodynamic) modeling for QT liability assessment, not on pharmacokinetic disposition parameters (CL, V, ka) for ranolazine. |
| popPK | Chaitman_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (MARISA) reporting exercise duration and survival, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for ranolazine. |
| popPK | Chang_2018 | irrelevant | 0 | 0 | no_text gate: only 193 chars of text extracted (&lt; 400) |
| PD | Chang_2018 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of telmisartan, with ranolazine mentioned only as a control agent to reverse telmisartan's effects, and no PD parameters for ranolazine are reported. |
| popPK | Chang_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of Columbianadin, with ranolazine used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Chang_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of Columbianadin (CBN); ranolazine is only mentioned as a control agent in a qualitative interaction experiment without any reported concentration-effect data or PD parameters for ranolazine. |
| popPK | Chen_2009 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating ranolazine's effects on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Chen_2026 | irrelevant | 2 | 0 | The study reports bioequivalence ratios (GMRs) for Cmax and AUC rather than absolute quantitative disposition parameters (CL, V, t1/2) for ranolazine. |
| popPK | Chu_2020 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology/mechanistic study using ranolazine as a drug to inhibit sodium currents, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Chuang_2021 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Chuang_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of apocynin, not ranolazine, and does not report any exposure-response or dose-response data for ranolazine. |
| popPK | Coleman_2024 | irrelevant | 0 | 0 | The study is a computational electrophysiological modeling simulation of ranolazine's antiarrhythmic effects in HCM, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.). |
| PGx | Correa_2013 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ranolazine inhibiting CYP3A4 affecting statins) and a case of myopathy, but does not report a pharmacogenomic effect (gene variant) on ranolazine's PK or PD parameters. |
| PGx | Dein_2018 | not_relevant | 0 | 0 | The paper reports a case of ranolazine-induced myopathy (elevated CK) without statin use, but it does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper is a clinical review of therapeutic indications and pharmacodynamic effects, containing no quantitative pharmacokinetic parameters for ranolazine. |
| PD | Di_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical indications and emerging therapeutic potential without reporting specific numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Dobesh_2007 | irrelevant | 1 | 0 | The text is a clinical review discussing the mechanism and efficacy of ranolazine for angina, containing no quantitative pharmacokinetic parameter values. |
| PD | Dobesh_2007 | not_relevant | 1 | 0 | The text is a general review of ranolazine's mechanism and clinical efficacy but does not provide specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Du_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and docking simulation paper investigating hERG channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Eisfeld_2025 | irrelevant | 0 | 0 | The study is an in-vitro patch-clamp pharmacology experiment where ranolazine is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | El_2025 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Fanaroff_2017 | irrelevant | 0 | 0 | The study is a clinical trial analyzing antianginal and glucose control effects, reporting no pharmacokinetic parameters. |
| popPK | Fink_2010 | irrelevant | 0 | 0 | The paper is a review on pharmacodynamic modeling of the heart and mentions ranolazine only as an example of a drug developed using such models, without reporting any pharmacokinetic parameters. |
| PD | Fink_2010 | not_relevant | 1 | 0 | The text is a conceptual review discussing the utility of cardiac modeling for drug development (mentioning ranolazine) but does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Fredj_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on sodium channel block and does not report pharmacokinetic parameters for ranolazine. |
| popPK | Galimberti_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay on permeabilized myocytes and does not report pharmacokinetic parameters for ranolazine. |
| PD | Galimberti_2011 | not_relevant | 0 | 0 | The paper reports that ranolazine had no significant effect on Ca2+ waves at the highest tested concentration (100 μM), providing no numeric PD parameters (such as IC50 or Emax) or extractable dose-response relationship for the drug. |
| popPK | Han_2019 | irrelevant | 0 | 0 | The paper is a safety pharmacology study on proarrhythmic risk metrics (CiPA/TdP) and does not report pharmacokinetic disposition parameters for ranolazine. |
| PD | Han_2019 | not_relevant | 0 | 0 | The paper focuses on in vitro ion channel block metrics (CiPA/Bnet) for proarrhythmic risk prediction and does not report in vivo pharmacodynamic or exposure-response relationships for ranolazine. |
| popPK | Hiiro_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of negative inotropic effects in guinea pig tissue, not a pharmacokinetic study, and reports no disposition parameters for ranolazine. |
| popPK | Jain_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting exercise time and hemodynamic changes, with no pharmacokinetic parameters or disposition data for ranolazine. |
| PGx | Jerling_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (ketoconazole, diltiazem, simvastatin) rather than pharmacogenomic effects of gene variants on ranolazine PK/PD. |
| PGx | Jerling_2006 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and drug-drug interactions but does not report any pharmacogenomic effects (gene variants) on ranolazine PK/PD. |
| popPK | Kim_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ranolazine's effect on potassium channels using patch-clamp, reporting no pharmacokinetic parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study using ranolazine as a probe drug for cardiotoxicity screening, reporting no pharmacokinetic parameters. |
| popPK | Kis_2024 | irrelevant | 0 | 0 | The paper describes a monoclonal antibody therapy for Long QT syndrome in a cellular model and does not involve ranolazine or its pharmacokinetics. |
| PD | Kis_2024 | not_relevant | 0 | 0 | The paper describes a monoclonal antibody therapy for Long QT syndrome and does not mention ranolazine or report any pharmacodynamic parameters for it. |
| popPK | Koltun_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a new compound (GS-462808) with ranolazine serving only as a comparator for potency, and no pharmacokinetic parameters for ranolazine are reported. |
| PD | Koltun_2016 | not_relevant | 0 | 0 | The paper is a medicinal chemistry discovery report for a new compound (GS-462808) and only provides qualitative comparisons of potency and safety relative to ranolazine, without reporting any specific PD parameters or exposure-response data for ranolazine. |
| popPK | Koslover_2023 | irrelevant | 0 | 0 | The paper is a review of metformin prescribing principles, and ranolazine is only mentioned as a co-administered drug affecting metformin pharmacokinetics, not as the subject of PK analysis. |
| PD | Koslover_2023 | not_relevant | 0 | 0 | The paper is an educational review on metformin prescribing principles and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of sodium metabisulfite, using ranolazine only as a comparator agent to attenuate sodium currents, and reports no pharmacokinetic parameters for ranolazine. |
| PD | Lai_2018 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of sodium metabisulfite (SMB) and mentions ranolazine only as a control agent to attenuate SMB-induced sodium current changes, without reporting any exposure-response or dose-response relationship for ranolazine itself. |
| popPK | Luo_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel currents, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mahmoudi_2006 | irrelevant | 0 | 0 | The paper is an in-vitro antimalarial drug screening study where ranolazine is only a comparator compound, reporting no pharmacokinetic parameters. |
| PD | Mahmoudi_2006 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for ranolazine as part of a QSAR study, which is a static potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with derivable PD parameters like Emax or slope. |
| PGx | Maideen_2024 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of nirmatrelvir (Paxlovid), not ranolazine, and does not report pharmacogenomic effects. |
| popPK | Malavaki_2015 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxing effects on isolated rabbit aorta and does not report pharmacokinetic parameters. |
| PGx | Masters_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (sirolimus and ranolazine) affecting sirolimus PK, not a pharmacogenomic effect on ranolazine. |
| popPK | Mikolajewska_2021 | irrelevant | 0 | 0 | The paper is a systematic review of colchicine for COVID-19 and does not contain any pharmacokinetic data for ranolazine. |
| PD | Mikolajewska_2021 | not_relevant | 0 | 0 | The paper is a systematic review of colchicine for COVID-19 and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Moreno_2013 | irrelevant | 0 | 0 | The study is an in silico pharmacological screening modeling electrophysiological effects (channel kinetics) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Moreno_2013 | not_relevant | 0 | 0 | The paper is an in silico computational study simulating channel kinetics and does not report experimental or clinical pharmacodynamic data with numeric PD parameters. |
| popPK | Nicolò_2023 | irrelevant | 0 | 0 | The paper describes a cloud-based platform for in silico trials and discusses use cases in cardiotoxicity, heart valves, multiple sclerosis, and prostate cancer, with no mention of ranolazine or its pharmacokinetics. |
| PD | Nicolò_2023 | not_relevant | 0 | 0 | The paper describes a cloud-based platform for in silico trials and presents use cases for cardiotoxicity, heart valves, multiple sclerosis, and prostate cancer (leuprolide), but does not contain any pharmacodynamic or exposure-response analysis for ranolazine. |
| PGx | Panfili_2012 | not_relevant | 2 | 1 | The paper describes a case report of an adverse event and mentions CYP phenotyping qualitatively, but it does not report a quantitative pharmacokinetic or pharmacodynamic parameter change linked to a specific genotype. |
| popPK | Pelliccia_2015 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects on platelet reactivity and does not report any pharmacokinetic parameters for ranolazine. |
| PD | Pelliccia_2015 | not_relevant | 2 | 1 | The study reports mean platelet reactivity (PRU) changes for fixed doses of ranolazine and amlodipine but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like Emax or EC50. |
| popPK | Potet_2016 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study focusing on sodium channel block by GS967, with ranolazine serving only as a comparator for potency (IC50), and no pharmacokinetic parameters are reported. |
| popPK | Potet_2020 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Potet_2020 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of GS-967 and Eleclazine, not ranolazine, and does not report pharmacodynamic or exposure-response relationships for ranolazine. |
| popPK | Rajamani_2008 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Rajamani_2009 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | Rashid_2022 | irrelevant | 0 | 0 | The paper is a clinical case report on overdose management and does not contain any pharmacokinetic parameters or quantitative disposition data for ranolazine. |
| PD | Rashid_2022 | not_relevant | 0 | 0 | The text is a clinical case report describing the management of an overdose and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Ratte_2019 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology and molecular docking study investigating ranolazine's mechanism of action on TASK-1 channels, containing no pharmacokinetic disposition parameters. |
| popPK | Reddy_2010 | irrelevant | 0 | 0 | The paper is a review of the pharmacology and clinical trials of ranolazine, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Reddy_2010 | not_relevant | 1 | 0 | The text is a general review of ranolazine's physiology, pharmacology, and clinical trials, containing no specific numeric PD parameters or exposure-response analysis. |
| popPK | Reis_2023 | irrelevant | 0 | 0 | The paper is a systematic review of nirmatrelvir/ritonavir for COVID-19 and does not contain any pharmacokinetic data for ranolazine. |
| PD | Reis_2023 | not_relevant | 0 | 0 | The paper is a systematic review of nirmatrelvir/ritonavir for COVID-19 and contains no pharmacodynamic or exposure-response analysis for ranolazine. |
| popPK | Rjoob_2025 | irrelevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacokinetic data for ranolazine. |
| PD | Rjoob_2025 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing but contains no pharmacodynamic or exposure-response analysis for ranolazine. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacokinetic data for ranolazine. |
| PD | Rjoob_2026 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Rosa_2014 | irrelevant | 0 | 0 | The paper is a review of dronedarone, and ranolazine is only mentioned as a comparator in a trial, with no PK parameters reported. |
| PD | Rosa_2014 | not_relevant | 0 | 0 | The paper is a review of dronedarone and only mentions ranolazine in the context of a combination trial (HARMONY) without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for ranolazine. |
| popPK | Schram_2004 | irrelevant | 0 | 0 | The study focuses on electrophysiological mechanisms and ion-channel blocking actions, not pharmacokinetic disposition parameters. |
| popPK | Scotcher_2020 | irrelevant | 0 | 0 | The paper focuses on a physiologically based pharmacokinetic model for creatinine, not ranolazine. |
| PD | Scotcher_2020 | not_relevant | 0 | 0 | The paper focuses on a physiologically based pharmacokinetic (PBPK) model for creatinine renal disposition and transporter inhibition, not on the pharmacodynamics or exposure-response relationship of ranolazine. |
| popPK | Serrano_2023 | irrelevant | 0 | 0 | The paper describes an in vitro deep learning model for proarrhythmia risk and does not report pharmacokinetic parameters for ranolazine. |
| PD | Serrano_2023 | not_relevant | 0 | 0 | The paper describes a deep learning platform for predicting proarrhythmia risk using iPSC-CMs and does not report any pharmacodynamic or exposure-response data for ranolazine. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a data mining study on OXPHOS inhibitors for ovarian cancer and does not report pharmacokinetic parameters for ranolazine. |
| PD | Sharma_2024 | not_relevant | 0 | 0 | The paper focuses on data mining for OXPHOS inhibitors and does not mention ranolazine or report any pharmacodynamic parameters for it. |
| popPK | Shiau_2022 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of picaridin on sodium channels in GH3 cells, with ranolazine used only as a secondary agent to attenuate effects, and no pharmacokinetic parameters are reported. |
| PD | Shiau_2022 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of picaridin on sodium currents; ranolazine is only mentioned as a secondary agent used to attenuate picaridin's effects, with no PD or exposure-response analysis for ranolazine itself. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darolutamide, not ranolazine. |
| PD | Shore_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of darolutamide and drug-drug interactions, containing no pharmacodynamic or exposure-response analysis for ranolazine. |
| popPK | Soliman_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study focusing on electrophysiology and calcium handling, not pharmacokinetics, and contains no PK parameters for ranolazine. |
| popPK | Stabenau_2020 | irrelevant | 0 | 0 | The study focuses on electrocardiographic (ECG) and vectorcardiographic effects of ranolazine, not pharmacokinetic disposition parameters. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is a molecular dynamics simulation study of drug binding to the Nav1.5 channel and does not report any pharmacokinetic parameters for ranolazine. |
| PD | Tao_2025 | not_relevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on the binding modes of drugs in the Nav1.5 channel pore and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Trujillo_2006 | irrelevant | 1 | 0 | The paper is a review article describing the pharmacology and clinical use of ranolazine without reporting original quantitative pharmacokinetic parameter values. |
| PD | Trujillo_2006 | not_relevant | 1 | 0 | The text is a general review summary describing qualitative pharmacodynamic effects (e.g., increased exercise duration, QT prolongation) without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Trujillo_2006 | not_relevant | 0 | 0 | The paper is a general review of ranolazine's pharmacology and clinical use, mentioning CYP3A4 metabolism but not reporting specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Undrovinas_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and mechanistic investigation of ranolazine on isolated myocytes, reporting no pharmacokinetic disposition parameters. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antiarrhythmic effects in rabbits and does not report any pharmacokinetic parameters for ranolazine. |
| PD | Wang_2008 | not_relevant | 2 | 1 | The study reports a single-dose effect (prevention of TdP) and qualitative comparison of dose-response curves for a different drug (prazosin), but does not provide numeric PD parameters or a concentration-effect relationship for ranolazine. |
| popPK | Wang_2008_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ion channel block, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Wrishko_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, not ranolazine. |
| PD | Wrishko_2026 | not_relevant | 0 | 0 | The paper focuses on posaconazole pharmacokinetics and CYP3A4 inhibition thresholds, not ranolazine pharmacodynamics. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of tefluthrin on ion channels, using ranolazine only as a pharmacological tool to block sodium currents, and reports no pharmacokinetic parameters for ranolazine. |
| PD | Wu_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of tefluthrin, not ranolazine; ranolazine is only mentioned as a tool compound to block tefluthrin-induced currents. |
| popPK | Wu_2019 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ranolazine's potency on sodium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of KB-R7943 on sodium channels, where ranolazine is only used as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Wu_2023 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, Kd) for KB-R7943, not ranolazine; ranolazine is only mentioned as a secondary agent in a qualitative context without numeric PD data. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper identifies ranolazine as a potential anti-aging drug via computational screening but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of sodium channel blockers in Long QT Syndrome and does not report pharmacogenomic effects on the PK or PD parameters of ranolazine. |
| popPK | Yang_2024 | irrelevant | 1 | 0 | The study focuses on a new compound (7d) with ranolazine serving only as a comparator, and the provided evidence lacks specific quantitative PK parameters (CL, V, Q) for ranolazine. |
| PD | Yang_2024 | not_relevant | 1 | 0 | The paper focuses on the synthesis and evaluation of new compounds (7d) and only mentions ranolazine qualitatively as a reference for drawbacks, without providing any numeric PD parameters or exposure-response data for ranolazine. |
| popPK | Yoo_2021 | relevant | 10 | 0 | The study reports a population PK analysis for ranolazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yoo_2021_2 | irrelevant | 0 | 0 | The paper describes an in silico artificial neural network model for classifying drug proarrhythmicity (TdP risk) and does not report pharmacokinetic parameters for ranolazine. |
| PD | Yoo_2021_2 | not_relevant | 0 | 0 | The paper describes an in silico computational model for proarrhythmicity prediction using voltage clamp data and does not report any pharmacokinetic or pharmacodynamic exposure-response relationships for ranolazine. |
| popPK | Zablocki_2016 | irrelevant | 0 | 0 | The paper describes the discovery of a new drug (eleclazine) and compares its potency to ranolazine, but does not report pharmacokinetic parameters for ranolazine. |
| popPK | Zaccara_2020 | irrelevant | 0 | 0 | The paper is a review of drug interactions and antiseizure properties, mentioning ranolazine only in the context of drug-drug interactions without reporting any quantitative pharmacokinetic parameters. |
| PD | Zaccara_2020 | not_relevant | 0 | 0 | The paper is a review of drug interactions and anticonvulsant properties of cardiovascular drugs; it mentions ranolazine only in the context of drug-drug interactions with enzyme-inducing antiseizure medications and provides no pharmacodynamic or exposure-response data. |
| popPK | unknown_2009 | irrelevant | 0 | 0 | The text is a clinical review/opinion piece discussing efficacy and safety, containing no quantitative pharmacokinetic parameter values for ranolazine. |
| PD | unknown_2009 | not_relevant | 1 | 0 | The text is a qualitative review/commentary that mentions dose-dependent QT prolongation but provides no numeric PD parameters, concentration-effect curves, or quantitative dose-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
