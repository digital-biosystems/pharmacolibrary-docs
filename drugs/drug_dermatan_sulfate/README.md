<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dermatan sulfate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;DermatanSulfate_Qiao2026_reference&quot;,&quot;label&quot;:&quot;Qiao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dermatan_sulfate/DermatanSulfate_Qiao2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-14 23:09 | 5:54 | 0/3/1 | 1/0/0 | 0/0/0 | 500,148/22,012 | einfracz / qwen3.8-27b | 35 | 25/25 | 19/16 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: unreported model parameter default(s): k21</sub><br><sub>route_to: `scholar`</sub> | [Qiao_2026_reference](drugs/drug_dermatan_sulfate/DermatanSulfate_Qiao2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Qiao Z et al., Population Pharmacokinetic and Pharmaco…, Drug design, development an… (2026) | [10.2147/dddt.s606942](https://doi.org/10.2147/dddt.s606942) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Augustin_2026_reference](drugs/drug_dermatan_sulfate/DermatanSulfate_Augustin2026_reference.md) | — | 2-compartment (no model) | 3 | Augustin A et al., Translational strategy to support the f…, Frontiers in immunology (2026) | [10.3389/fimmu.2026.1736584](https://doi.org/10.3389/fimmu.2026.1736584) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Harenberg_1996_reference](drugs/drug_dermatan_sulfate/DermatanSulfate_Harenberg1996_reference.md) | — | 1-compartment (no model) | 0 | Harenberg J et al., Effects of low-molecular-weight dermata…, Blood coagulation & fibrino… (1996) | [10.1097/00001721-199601000-00006](https://doi.org/10.1097/00001721-199601000-00006) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Imbimbo_1994_reference](drugs/drug_dermatan_sulfate/DermatanSulfate_Imbimbo1994_reference.md) | — | 1-compartment (no model) | 0 | Imbimbo BP et al., Intramuscular dermatan sulfate MF701 in…, Thrombosis and haemostasis (1994) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Saivin_2003_TCT](drugs/drug_dermatan_sulfate/pd_Saivin_2003_TCT.md) | Thrombin clotting time (TCT) ← dermatan sulfate · direct linear effect | — | Saivin S et al., Pharmacokinetics and pharmacodynamics o…, Clinical drug investigation (2003) | [10.2165/00044011-200323080-00006](https://doi.org/10.2165/00044011-200323080-00006) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Saivin_2003_aPTT](drugs/drug_dermatan_sulfate/pd_Saivin_2003_aPTT.md) | Activated partial thromboplastin time (aPTT) ← dermatan sulfate · direct linear effect | — | Saivin S et al., Pharmacokinetics and pharmacodynamics o…, Clinical drug investigation (2003) | [10.2165/00044011-200323080-00006](https://doi.org/10.2165/00044011-200323080-00006) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 295 matched, 78 returned
- **screened:** 26  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Imbimbo_1994.pdf` | Imbimbo BP et al., Intramuscular dermatan sulfate MF701 in…, Thrombosis and haemostasis (1994) | popPK | 9 | not captured | [8091379](https://pubmed.ncbi.nlm.nih.gov/8091379) | The study reports population PK parameters (half-life, accumulation) for dermatan sulfate in humans, but specific numeric values for clearance or volume are not explicitly listed in the provided abstract text, only half-life and concentration thresholds. |
| `Barrow_1994.pdf` | Barrow RT et al., Inhibition by heparin of the human bloo…, The Journal of biological c… (1994) | pd | 4 | not captured | [7929416](https://www.ncbi.nlm.nih.gov/pubmed/7929416) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T23:05:01.901018+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics and safety of the antibody MAGE-A4-TCB, not the drug dermatan sulfate. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics for enzyme replacement therapies (e.g., imiglucerase, arylsulfatase A) in lysosomal storage diseases, and does not report data for the drug dermatan sulfate. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The paper describes a deep learning method for detecting spiral ganglion neurons in cochleae and contains no pharmacokinetic data for dermatan sulfate. |
| PD | Cai_2025 | not_relevant | 0 | 0 | The paper describes a deep learning method for detecting spiral ganglion neurons in cochleae and contains no pharmacodynamic or exposure-response analysis for dermatan sulfate. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not dermatan sulfate. |
| PD | Camargo_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of linalool, not dermatan sulfate. |
| popPK | Cao_2020 | irrelevant | 0 | 0 | The paper is a case report on warfarin anticoagulation management in an infant and does not contain pharmacokinetic data for dermatan sulfate. |
| PD | Cao_2020 | not_relevant | 0 | 0 | The paper describes a case report of warfarin anticoagulation management using the Hamberg model and INR monitoring; it does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Chorążewska_2026 | irrelevant | 0 | 0 | The paper describes a protein-drug conjugate targeting heparan sulfate, explicitly demonstrating that it does not bind dermatan sulfate; there is no pharmacokinetic study of dermatan sulfate. |
| PGx | De_2021 | not_relevant | 0 | 0 | The paper describes a Drosophila disease model for Mucopolysaccharidosis Type I but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug dermatan sulfate. |
| PD | Dimitrellos_2003 | not_relevant | 3 | 1 | The paper reports qualitative binding affinity comparisons and a single IC50 for heparin, but explicitly states that dermatan sulfate showed "minute effects," providing no numeric dose-response parameters or concentration-effect curve for dermatan sulfate. |
| PD | Engbring_2002 | not_relevant | 3 | 2 | The paper reports IC50 values for GAGs (heparin, heparan sulfate, chondroitin sulfate B) inhibiting peptide binding, but does not provide specific numeric values for these parameters in the text, nor does it model the pharmacodynamics of dermatan sulfate itself. |
| PD | Han_1998 | not_relevant | 0 | 0 | The paper investigates the mechanism of complex dissociation induced by heparin/dermatan sulfate binding but does not report a pharmacodynamic exposure-response model or numeric PD parameters like Emax/EC50 for a drug effect. |
| PD | Harenberg_1996 | not_relevant | 3 | 1 | The paper reports dose-dependent changes in effect (e.g., 2.2-fold TFPI increase at 100 mg) but does not provide a quantitative concentration-effect model, Emax/EC50 parameters, or simultaneous PK/PD fit to derive a numeric PD relationship. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for various high-alert medications (e.g., insulin, vancomycin, enoxaparin) in pediatric patients and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and pharmacokinetics in obese pediatric patients and does not report any pharmacodynamic or exposure-response analysis for dermatan sulfate. |
| popPK | Homma_2005 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of glycosaminoglycans' effects on blood coagulation and does not report pharmacokinetic parameters for dermatan sulfate. |
| popPK | Ito_2026 | irrelevant | 0 | 0 | The paper studies the effects of antifibrotic drugs on epithelial sodium channels in lung fibrosis and does not mention dermatan sulfate or any pharmacokinetic parameters. |
| PD | Ito_2026 | not_relevant | 0 | 0 | The paper investigates the effect of antifibrotic drugs (nintedanib, pirfenidone) on ion channel expression, not the pharmacodynamics of dermatan sulfate. |
| PGx | Jiang_2011 | not_relevant | 0 | 0 | The paper investigates genetic associations with fatty acid composition in cattle, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of dermatan sulfate as a drug. |
| popPK | Jonckheere_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefepime, not dermatan sulfate. |
| PD | Jonckheere_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic performance of a Target Controlled Infusion (TCI) system for cefepime and does not report any pharmacodynamic (PD) or exposure-response relationship for dermatan sulfate. |
| popPK | Kagelmacher_2025 | irrelevant | 0 | 0 | The paper studies the anti-inflammatory mechanism of dendritic polyglycerol sulfate (dPGS) in macrophages, not the pharmacokinetics of dermatan sulfate. |
| popPK | Konig_2025 | irrelevant | 0 | 0 | The study focuses on the delivery of MAPT-ASOs across a blood-brain barrier model and does not involve dermatan sulfate as the subject drug. |
| PD | Konig_2025 | not_relevant | 0 | 0 | The paper focuses on the delivery of MAPT-ASO via liposomes across a BBB model and does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the brain delivery of doxorubicin-loaded nanoparticles, not the pharmacokinetics of dermatan sulfate. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and biodistribution of doxorubicin nanoparticles, reporting PK parameters (rate constants, half-lives) but containing no pharmacodynamic (PD) or exposure-response analysis for dermatan sulfate or any other drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper focuses on neurobiology and growth factor signaling in an Alzheimer's mouse model and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper focuses on multi-omics analysis of exercise effects in an Alzheimer's mouse model and does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Liao_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for lucitanib, not dermatan sulfate. |
| PD | Liao_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for lucitanib but contains no pharmacodynamic (PD) or exposure-response analysis. |
| PD | Masson_1995 | not_relevant | 2 | 0 | The paper describes qualitative dose-response observations and qualitative characterization of GAGs (dermatan sulfate) but does not provide numeric PD parameters or quantitative effect-vs-concentration curves for dermatan sulfate. |
| popPK | Matov_2025 | irrelevant | 0 | 0 | The paper discusses cytoskeleton modulation and cancer therapy mechanisms, containing no pharmacokinetic data or parameters for dermatan sulfate. |
| popPK | Melero_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of RO7300490 (a bispecific antibody), not dermatan sulfate. |
| PD | Melero_2026 | not_relevant | 4 | 3 | The paper reports qualitative PD changes (DC density, gene expression) and PK data, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model for dermatan sulfate. |
| PD | Najjam_1997 | not_relevant | 0 | 0 | The paper characterizes the binding affinity of Interleukin-2 to heparan sulfate and other glycosaminoglycans using ELISA and isothermal titration calorimetry, reporting binding constants (Kd) rather than pharmacodynamic parameters (e.g., Emax, EC50) for dermatan sulfate as a drug. |
| popPK | OHanlon_2024 | irrelevant | 0 | 0 | The study investigates cefazolin adsorption to cardiopulmonary bypass devices, not dermatan sulfate pharmacokinetics. |
| PD | OHanlon_2024 | not_relevant | 0 | 0 | The paper describes the pharmacokinetic adsorption of cefazolin to cardiopulmonary bypass devices, not the pharmacodynamic (exposure-response) relationship of dermatan sulfate. |
| PD | Ofosu_1998 | not_relevant | 1 | 0 | The text is a review summarizing qualitative properties and clinical outcomes (e.g., 32% reduction in death) of Sulodexide, a heparin/dermatan sulfate mixture, without reporting specific numeric pharmacodynamic parameters (EC50, Emax) or exposure-response curves for dermatan sulfate. |
| popPK | Padhi_2025 | irrelevant | 0 | 0 | The paper focuses on L-DOPA (levodopa) synthesis and delivery, not dermatan sulfate. |
| PD | Padhi_2025 | not_relevant | 0 | 0 | The paper focuses on L-DOPA and a bioengineered E. coli system, not dermatan sulfate, and does not report PD parameters for the target compound. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cefepime, not dermatan sulfate. |
| popPK | Preitner_2026 | irrelevant | 0 | 0 | The paper investigates the therapeutic mechanism of a tau aggregation inhibitor (ACI-16664) in Alzheimer's disease models and contains no pharmacokinetic data for dermatan sulfate. |
| PD | Preitner_2026 | not_relevant | 0 | 0 | The paper describes the pharmacological effects of ACI-16664 on tau aggregates but does not report any exposure-response or dose-response analysis, nor does it mention dermatan sulfate. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug vestronidase alfa, not for dermatan sulfate (which is only mentioned as a urinary biomarker/metabolite in MPS VII). |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for imipenem, not dermatan sulfate. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper studies a fluorescent probe (I-43) for Alzheimer's disease and does not report pharmacokinetic parameters for dermatan sulfate. |
| PD | Rath_1993 | not_relevant | 0 | 0 | The paper reports time-dependent biochemical changes (enzymatic activity and GAG concentrations) after PGE2 application, but it does not measure drug exposure (PGE2 concentration) nor model a concentration-effect or dose-response relationship for dermatan sulfate. |
| popPK | Sagie_2025 | irrelevant | 0 | 0 | The study focuses on T cell therapy and immunology, containing no pharmacokinetic data for dermatan sulfate. |
| PD | Sagie_2025 | not_relevant | 0 | 0 | The paper investigates the synergistic effects of chemotherapy on T-cell therapy efficacy and antigen presentation, but does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| popPK | Schmidt_2020 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for camptothecin (NLG207), not dermatan sulfate. |
| PD | Schmidt_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for NLG207/camptothecin but does not contain any pharmacodynamic (PD) or exposure-response analysis, nor does it mention dermatan sulfate. |
| PGx | Scott_1992 | not_relevant | 0 | 0 | The paper reports a genetic mutation in the IDUA gene associated with a disease phenotype (MPS-I) and enzyme activity, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Serrano-Rodríguez_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of cannabigerol in horses, which is a different drug from the subject dermatan sulfate. |
| PD | Serrano-Rodríguez_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) parameters for cannabigerol (CBG) and its metabolite, but contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sié_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Heparin Cofactor II, where dermatan sulfate is mentioned only as a reagent for electrophoresis, not as the subject drug. |
| popPK | Spanke_2026 | irrelevant | 0 | 0 | The paper is a structural and physicochemical study of antibody frameworks and does not involve the pharmacokinetics of dermatan sulfate. |
| PD | Spanke_2026 | not_relevant | 0 | 0 | The paper focuses on antibody developability, physicochemical properties, and structural analysis, containing no pharmacodynamic or exposure-response data for dermatan sulfate. |
| PGx | Srinivasan_1995 | not_relevant | 0 | 0 | The paper studies LDL metabolism in macrophages and mentions dermatan sulfate as a constituent of a complex, but does not report a pharmacogenomic effect on a PK or PD parameter of dermatan sulfate (which is an endogenous molecule, not a drug). |
| PGx | Takahashi_2026 | not_relevant | 0 | 0 | The study examines the skeletal phenotype in mice deficient in the enzyme Chst14, causing a disease (mcEDS), not the pharmacokinetics or pharmacodynamics of a therapeutic drug. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meropenem, not dermatan sulfate. |
| PD | Tan_2021 | not_relevant | 3 | 2 | The study focuses on PK modeling and Monte Carlo simulations to achieve a PK/PD target (fT&gt;MIC) for Meropenem, not on characterizing the pharmacodynamic response (e.g., Emax, EC50) of dermatan sulfate or any other drug. |
| popPK | Tonial_2025 | irrelevant | 0 | 0 | The study investigates drug-drug interactions involving angiotensin receptor blockers and antibiotics, with no mention of dermatan sulfate or any pharmacokinetic parameters. |
| PD | Tonial_2025 | not_relevant | 0 | 0 | The paper is a retrospective cohort study on drug-drug interactions and adverse events, reporting risk ratios rather than pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships for dermatan sulfate. |
| popPK | Tucker_2025 | irrelevant | 0 | 0 | The paper studies a chitosan/PLA delivery system for fosfomycin in a rat model of osteomyelitis and does not investigate the pharmacokinetics of dermatan sulfate. |
| PD | Tucker_2025 | not_relevant | 0 | 0 | The paper reports qualitative antimicrobial efficacy and biomaterial characterization for fosfomycin delivery, but does not provide numeric concentration-effect data, PK/PD parameters, or a dose-response curve for dermatan sulfate. |
| PD | Ueta_2018 | not_relevant | 0 | 0 | The paper investigates the effects of mechanical loading (training) on proteoglycan levels, not a pharmacological drug concentration-response or PK/PD relationship. |
| popPK | Vallée_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftazidime-avibactam, not dermatan sulfate. |
| PD | Vallée_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK modeling) of ceftazidime-avibactam in renal tissue and does not report any pharmacodynamic or exposure-response relationship for dermatan sulfate. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper discusses the role of dermatan sulfate in autoimmune disease pathogenesis and viral infection, but does not report a pharmacogenomic effect on a PK or PD parameter of dermatan sulfate as a drug. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper discusses dermatan sulfate as a glycosaminoglycan involved in autoantibody formation, not as a drug with pharmacokinetic/pharmacodynamic properties affected by gene variants. |
| popPK | Weidmann_2026 | irrelevant | 0 | 0 | The study investigates risk factors for delirium in hospitalized patients and contains no pharmacokinetic data or mention of dermatan sulfate. |
| PD | Weidmann_2026 | not_relevant | 0 | 0 | The paper is a retrospective cohort study analyzing statistical associations between medication use and delirium risk, not a pharmacodynamic or exposure-response analysis for dermatan sulfate. |
| popPK | Westmark_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Factor IX(a) in mice, not dermatan sulfate. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | The paper is a structural and biochemical analysis of glycosaminoglycans from fish swim bladders, containing no pharmacokinetic parameters (CL, V, t1/2) or population PK models for dermatan sulfate as a dosed drug. |
| popPK | Zahr_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefiderocol, not dermatan sulfate. |
| PD | Zahr_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for cefiderocol, not dermatan sulfate, and does not provide pharmacodynamic (PD) parameters such as Emax or EC50. |
| popPK | Zufferey_2025 | irrelevant | 0 | 0 | The study is a clinical trial protocol for tranexamic acid (TXA), not a pharmacokinetic study of dermatan sulfate. |
| PD | Zufferey_2025 | not_relevant | 3 | 2 | The paper is a study protocol for a future trial and only cites prior model parameters (Emax 40%, ED50 400 mg) for design purposes, rather than reporting new PD data or analysis results. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:05 UTC</sub>
