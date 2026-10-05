<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dermatan sulfate&quot;}]"></div>

# dermatan sulfate

- **generic name:** dermatan sulfate
- **ATC codes:** `B01AX04`
- **DrugBank:** [DB15880](https://go.drugbank.com/drugs/DB15880) · **PubChem:** not captured
- **molar mass:** 475.38 g/mol (C14H21NO15S) — DrugBank
- **groups:** investigational

## About

Dermatan sulfate, a glycosaminoglycan also known as chondroitin sulfate B, has been investigated as an antithrombotic agent for preventing blood clots. It remains an investigational compound and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2335618](https://www.wikidata.org/wiki/Q2335618) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:38 | 6:01 | 0/0/0 | 1/1/0 | 0/0/0 | 243,501/6,939 | ollama / qwen3.8:27b-mtp-q8_0 | 31 | 18/16 | 15/16 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Saivin_2003_TCT](drugs/drug_dermatan_sulfate/pd_Saivin_2003_TCT.md) | thrombin clotting time ← dermatan sulfate · direct linear effect | — | Saivin S et al., Pharmacokinetics and pharmacodynamics o…, Clinical drug investigation (2003) | [10.2165/00044011-200323080-00006](https://doi.org/10.2165/00044011-200323080-00006) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Saivin_2003_aPTT](drugs/drug_dermatan_sulfate/pd_Saivin_2003_aPTT.md) | activated partial thromboplastin time ← dermatan sulfate · direct linear effect | — | Saivin S et al., Pharmacokinetics and pharmacodynamics o…, Clinical drug investigation (2003) | [10.2165/00044011-200323080-00006](https://doi.org/10.2165/00044011-200323080-00006) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Takeuchi_2001_arginine_amidase_activity_released_from_the_isolated_rabbit_ear_artery](drugs/drug_dermatan_sulfate/pd_Takeuchi_2001_arginine_amidase_activity_released_from_the_is.md) | arginine amidase activity released from the isolated rabbit ear artery ← dermatan sulfate · direct linear effect | — | Takeuchi K et al., Effects of dermatan and dextran sulfate…, Biological & pharmaceutical… (2001) | [10.1248/bpb.24.465](https://doi.org/10.1248/bpb.24.465) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Takeuchi_2001_arginine_amidase_activity_released_from_the_isolated_rabbit_aorta](drugs/drug_dermatan_sulfate/pd_Takeuchi_2001_arginine_amidase_activity_released_from_the_is.md) | arginine amidase activity released from the isolated rabbit aorta ← dermatan sulfate · direct linear effect | — | Takeuchi K et al., Effects of dermatan and dextran sulfate…, Biological & pharmaceutical… (2001) | [10.1248/bpb.24.465](https://doi.org/10.1248/bpb.24.465) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 288 matched, 71 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Imbimbo_1994.pdf` | Imbimbo BP et al., Intramuscular dermatan sulfate MF701 in…, Thrombosis and haemostasis (1994) | popPK | 9 | not captured | [8091379](https://pubmed.ncbi.nlm.nih.gov/8091379) | The study reports a one-compartment PK model for dermatan sulfate in humans with specific half-life values (68 h and 43 h) and plasma concentration thresholds, but lacks explicit clearance or volume of distribution values. |
| `Barrow_1994.pdf` | Barrow RT et al., Inhibition by heparin of the human bloo…, The Journal of biological c… (1994) | pd | 4 | not captured | [7929416](https://www.ncbi.nlm.nih.gov/pubmed/7929416) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T14:34:51.177150+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics and safety of a TCR-like antibody (MAGE-A4-TCB), not the drug dermatan sulfate. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for therapeutic enzymes (e.g., imiglucerase, avalglucosidase alfa) in lysosomal storage diseases, and does not report PK parameters for dermatan sulfate. |
| PD | Boneu_1989 | not_relevant | 3 | 1 | The paper describes qualitative changes in biological activity (half-life, curve shape) and PK parameters (clearance, half-life) versus dose, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for dermatan sulfate. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The paper describes a deep learning method for detecting spiral ganglion neurons in cochleae and contains no pharmacokinetic data for dermatan sulfate. |
| PD | Cai_2025 | not_relevant | 0 | 0 | The paper describes a deep learning method for detecting spiral ganglion neurons in cochleae and contains no pharmacodynamic or exposure-response analysis for dermatan sulfate. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not dermatan sulfate. |
| PD | Camargo_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of linalool, not dermatan sulfate. |
| popPK | Cao_2020 | irrelevant | 0 | 0 | The paper is a case report on warfarin anticoagulation management and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Cao_2020 | not_relevant | 0 | 0 | The paper describes a case report of warfarin anticoagulation management using the Hamberg model and INR monitoring; it does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| PGx | De_2021 | not_relevant | 0 | 0 | The paper describes a disease model (MPS I) involving the accumulation of dermatan sulfate due to IDUA deficiency, but it does not report a pharmacogenomic effect on the PK or PD of a specific drug. |
| PD | Dimitrellos_2003 | not_relevant | 1 | 0 | The paper reports an IC50 for heparin binding to bFGF, but explicitly states that dermatan sulfate showed only "minute effects" without providing specific numeric parameters or a dose-response curve for it. |
| PD | Engbring_2002 | not_relevant | 3 | 2 | The paper reports IC50 values for GAGs (heparin, heparan sulfate, chondroitin sulfate B) inhibiting peptide binding, but does not provide specific numeric values for these parameters in the text, nor does it model the pharmacodynamics of dermatan sulfate itself. |
| PD | Han_1998 | not_relevant | 1 | 0 | The paper describes a qualitative mechanism of action (ligand binding inducing dissociation) and mentions a dose response, but it does not report numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve for dermatan sulfate. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and pharmacokinetics in obese pediatric patients and does not report any pharmacodynamic or exposure-response analysis for dermatan sulfate. |
| popPK | Homma_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of coagulation and fibrinolysis modulation by glycosaminoglycans, not a pharmacokinetic study of dermatan sulfate. |
| popPK | Imbimbo_1994 | relevant | 9 | 4 | The study reports a one-compartment PK model for dermatan sulfate in humans with specific half-life values (68 h and 43 h) and plasma concentration thresholds, but lacks explicit clearance or volume of distribution values. |
| popPK | Ito_2026 | irrelevant | 0 | 0 | The paper investigates the expression of epithelial sodium channels in lung fibrosis models and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Ito_2026 | not_relevant | 0 | 0 | The paper investigates the effect of antifibrotic drugs (nintedanib, pirfenidone) on ion channel expression, not the pharmacodynamics of dermatan sulfate. |
| PGx | Jiang_2011 | not_relevant | 0 | 0 | The paper investigates the association between gene variants and fatty acid composition in cattle, not the pharmacokinetic or pharmacodynamic effects of a drug on dermatan sulfate. |
| popPK | Jonckheere_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefepime, not dermatan sulfate. |
| PD | Jonckheere_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic performance of a Target Controlled Infusion (TCI) system for cefepime and does not report any pharmacodynamic (PD) or exposure-response relationship for dermatan sulfate. |
| popPK | Kagelmacher_2025 | irrelevant | 0 | 0 | The paper studies the anti-inflammatory mechanism of dendritic polyglycerol sulfate (dPGS) in macrophages, not the pharmacokinetics of dermatan sulfate. |
| popPK | Konig_2025 | irrelevant | 0 | 0 | The study focuses on the delivery of MAPT-ASO across a blood-brain barrier model and does not involve dermatan sulfate or its pharmacokinetics. |
| PD | Konig_2025 | not_relevant | 0 | 0 | The paper focuses on the delivery of MAPT-ASO via liposomes across a BBB model and does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the brain delivery of doxorubicin-loaded nanoparticles and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and biodistribution of doxorubicin nanoparticles, reporting PK parameters (rate constants, half-lives) but containing no pharmacodynamic (PD) or exposure-response analysis for dermatan sulfate or any other drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a transcriptomic study on Alzheimer's disease in mice and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper focuses on multi-omics analysis of exercise effects in an Alzheimer's mouse model and does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Liao_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lucitanib, not dermatan sulfate. |
| PD | Liao_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for lucitanib but contains no pharmacodynamic (PD) or exposure-response analysis. |
| PD | Masson_1995 | not_relevant | 3 | 1 | The paper describes a qualitative dose-response and identifies a dermatan sulfate-like compound, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for dermatan sulfate. |
| popPK | Melero_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of RO7300490, not dermatan sulfate. |
| PD | Melero_2026 | not_relevant | 4 | 3 | The paper reports qualitative PD changes (DC density, gene expression) and PK data, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model for dermatan sulfate. |
| PD | Najjam_1997 | not_relevant | 0 | 0 | The paper reports that dermatan sulfate is inactive in competing for IL-2 binding, providing no numeric PD parameters or exposure-response relationship for dermatan sulfate. |
| popPK | OHanlon_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin, not dermatan sulfate. |
| PD | OHanlon_2024 | not_relevant | 0 | 0 | The paper describes the pharmacokinetic adsorption of cefazolin to cardiopulmonary bypass devices, not the pharmacodynamic (exposure-response) relationship of dermatan sulfate. |
| PD | Ofosu_1998 | not_relevant | 1 | 0 | The text is a qualitative summary/review of Sulodexide properties and does not provide specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves for dermatan sulfate. |
| popPK | Padhi_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa (L-DOPA) produced by engineered bacteria, not dermatan sulfate. |
| PD | Padhi_2025 | not_relevant | 0 | 0 | The paper focuses on L-DOPA and a bioengineered E. coli system, not dermatan sulfate, and does not report PD parameters for the target compound. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefepime, not dermatan sulfate. |
| popPK | Preitner_2026 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of a tau aggregation inhibitor (ACI-16664) in mice and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Preitner_2026 | not_relevant | 0 | 0 | The paper describes the pharmacological effects of ACI-16664 on tau aggregates but does not report any exposure-response or dose-response analysis, nor does it mention dermatan sulfate. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug vestronidase alfa, not for dermatan sulfate (which is a substrate/metabolite measured for pharmacodynamics). |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper studies a fluorescent probe (I-43) for Alzheimer's disease and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Rath_1993 | not_relevant | 1 | 0 | The paper reports qualitative changes in dermatan sulfate concentrations (approx 10% increase) following PGE2 application, but does not provide a concentration-effect or dose-response relationship for dermatan sulfate itself, nor does it report numeric PD parameters (like Emax or EC50) for it. |
| popPK | Sagie_2025 | irrelevant | 0 | 0 | The paper focuses on immunology and T cell therapy mechanisms, containing no pharmacokinetic data for dermatan sulfate. |
| PD | Sagie_2025 | not_relevant | 0 | 0 | The paper investigates the synergistic effects of chemotherapy on T-cell therapy efficacy and antigen presentation, but does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Schmidt_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for camptothecin (NLG207), not dermatan sulfate. |
| PD | Schmidt_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for NLG207/camptothecin but does not contain any pharmacodynamic (PD) or exposure-response analysis, nor does it mention dermatan sulfate. |
| PGx | Scott_1992 | not_relevant | 0 | 0 | The paper describes a genetic mutation causing a lysosomal storage disease (MPS-I) and its clinical/biochemical consequences, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Serrano-Rodríguez_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabigerol (CBG) in horses, not dermatan sulfate. |
| PD | Serrano-Rodríguez_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) parameters for cannabigerol (CBG) and its metabolite, but contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sié_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Heparin Cofactor II, not dermatan sulfate, which is only mentioned as a reagent for electrophoresis. |
| popPK | Spanke_2026 | irrelevant | 0 | 0 | The paper focuses on antibody developability and physicochemical properties, not the pharmacokinetics of dermatan sulfate. |
| PD | Spanke_2026 | not_relevant | 0 | 0 | The paper focuses on antibody developability, physicochemical properties, and structural analysis, containing no pharmacodynamic or exposure-response data for dermatan sulfate. |
| PGx | Srinivasan_1995 | not_relevant | 0 | 0 | The paper studies the role of proteoglycans in atherosclerosis and does not report pharmacogenomic effects on the PK/PD of dermatan sulfate. |
| PGx | Takahashi_2026 | not_relevant | 0 | 0 | The paper studies the skeletal phenotype of a gene knockout (Chst14) affecting endogenous dermatan sulfate, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem, not dermatan sulfate. |
| PD | Tan_2021 | not_relevant | 3 | 2 | The study focuses on PK modeling and Monte Carlo simulations to achieve a PK/PD target (fT&gt;MIC) for Meropenem, not on characterizing the pharmacodynamic response (e.g., Emax, EC50) of dermatan sulfate or any other drug. |
| popPK | Tonial_2025 | irrelevant | 0 | 0 | The study investigates drug-drug interactions between angiotensin receptor blockers and antibiotics, and does not involve dermatan sulfate or its pharmacokinetics. |
| PD | Tonial_2025 | not_relevant | 0 | 0 | The paper is a retrospective cohort study on drug-drug interactions and adverse events, reporting risk ratios rather than pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships for dermatan sulfate. |
| popPK | Tucker_2025 | irrelevant | 0 | 0 | The paper studies a drug delivery system for fosfomycin in a rat model of osteomyelitis and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Tucker_2025 | not_relevant | 0 | 0 | The paper reports qualitative antimicrobial efficacy and biomaterial characterization for fosfomycin delivery, but does not provide numeric concentration-effect data, PK/PD parameters, or a dose-response curve for dermatan sulfate. |
| PD | Ueta_2018 | not_relevant | 1 | 0 | The study reports qualitative changes in dermatan sulfate concentration across training groups but does not provide numeric concentration values or a quantitative dose-response curve. |
| popPK | Vallée_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftazidime-avibactam, not dermatan sulfate. |
| PD | Vallée_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK modeling) of ceftazidime-avibactam in renal tissue and does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper discusses dermatan sulfate as a glycosaminoglycan involved in autoimmune mechanisms and autoantigen binding, not as a drug subject to pharmacokinetic or pharmacodynamic analysis influenced by genetic variants. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper discusses dermatan sulfate in the context of autoimmune disease mechanisms and autoantigens, not as a drug subject to pharmacokinetic or pharmacodynamic analysis influenced by genetic variants. |
| popPK | Weidmann_2026 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of delirium risk factors in hospitalized patients and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Weidmann_2026 | not_relevant | 0 | 0 | The paper is a retrospective cohort study analyzing statistical associations between medication use and delirium risk, not a pharmacodynamic or exposure-response analysis for dermatan sulfate. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | The paper is a structural and pharmacological study of glycosaminoglycans (CS/DS hybrids) from fish swim bladders, reporting no pharmacokinetic parameters (CL, V, t1/2) for dermatan sulfate. |
| popPK | Zahr_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefiderocol, not dermatan sulfate. |
| PD | Zahr_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for cefiderocol, not dermatan sulfate, and does not provide pharmacodynamic (PD) parameters such as Emax or EC50. |
| popPK | Zufferey_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and dose-response of tranexamic acid, not dermatan sulfate. |
| PD | Zufferey_2025 | not_relevant | 3 | 2 | The paper is a study protocol for a future trial and only cites prior model parameters (Emax 40%, ED50 400 mg) for design purposes, rather than reporting new PD data or analysis results. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
