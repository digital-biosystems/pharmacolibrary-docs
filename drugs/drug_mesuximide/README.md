<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;mesuximide&quot;}]"></div>

# mesuximide

- **generic name:** mesuximide
- **ATC codes:** `N03AD03`
- **DrugBank:** [DB05246](https://go.drugbank.com/drugs/DB05246) · **PubChem:** not captured
- **groups:** approved

## About

Mesuximide (methsuximide) is a succinimide anticonvulsant used to treat epilepsy, especially childhood absence epilepsy. It is an approved antiepileptic, though it is not widely used and no EU marketing authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q906414](https://www.wikidata.org/wiki/Q906414) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:11 | 0:53 | 0/0/0 | 0/0/0 | 0/0/0 | 89,897/3,263 | einfracz / qwen3.8-27b | 3 | 12/18 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mesuximide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1G (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 925 matched, 53 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dobrinska_1977.pdf` | Dobrinska MR et al., Pharmacokinetics of methsuximide and a…, Journal of pharmaceutical s… (1977) | popPK | 10 | [10.1002/jps.2600660520](https://doi.org/10.1002/jps.2600660520) | [577506](https://pubmed.ncbi.nlm.nih.gov/577506) | The paper reports a two-compartment pharmacokinetic model for methsuximide (which the prompt specifies as mesuximide) in dogs, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| `Browne_1983.pdf` | Browne TR et al., Methsuximide for complex partial seizur…, Neurology (1983) | popPK | 8 | [10.1212/wnl.33.4.414](https://doi.org/10.1212/wnl.33.4.414) | [6403891](https://pubmed.ncbi.nlm.nih.gov/6403891) | The study reports quantitative pharmacokinetic parameters (half-lives, time to steady state, therapeutic range) for methsuximide's principal metabolite, N-desmethylmethsuximide, in humans. |

<sub>queue written 2026-10-07T07:11:32.314505+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeagbo_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for amodiaquine, not mesuximide. |
| PD | Adeagbo_2025 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic (PK) study for amodiaquine (not mesuximide) and does not report any pharmacodynamic (PD) or exposure-response model parameters. |
| popPK | Amooei_2026 | irrelevant | 0 | 0 | The paper is a systematic review focused on tacrolimus dosing and contains no data regarding mesuximide. |
| PD | Amooei_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic (PK) and machine learning models for tacrolimus dosing; it does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide. |
| popPK | Bachmann_2024 | irrelevant | 0 | 0 | The paper describes a pharmacometric method for optimal dosing (OptiDose) and does not report any specific quantitative PK parameters for mesuximide. |
| PD | Bachmann_2024 | not_relevant | 0 | 0 | The paper describes a method for optimal dosing using NONMEM and applies it to generic or unrelated examples (biomarker, antibiotic), but does not report any pharmacodynamic data, model, or parameters for mesuximide. |
| popPK | Baehler_1980 | irrelevant | 1 | 0 | The paper discusses hemoperformance for methsuximide (a different drug, structurally related but distinct from mesuximide) overdose and reports no quantitative PK parameters. |
| popPK | Battino_1995 | irrelevant | 2 | 0 | This is a review article that provides no original quantitative PK parameter values (CL, V, etc.) for mesuximide, mentioning only a qualitative comparison of C/D ratio sensitivity. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for mosunetuzumab, not mesuximide. |
| PD | Bender_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and receptor occupancy (RO) modeling for mosunetuzumab, not mesuximide, and does not provide numeric PD parameters (e.g., Emax, EC50) for the queried drug. |
| PD | Bialer_2025 | not_relevant | 1 | 0 | The paper is a qualitative review of chirality in antiseizure medications and does not report specific numeric PD parameters or exposure-response data for mesuximide. |
| popPK | Biesdorf_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for the antibody-drug conjugate Cofetuzumab Pelidotin (ABBV-647), not mesuximide. |
| popPK | Carrascosa-Arteaga_2025 | irrelevant | 0 | 0 | The paper is a systematic review focused on the population pharmacokinetics of risperidone and paliperidone, not mesuximide. |
| PD | Carrascosa-Arteaga_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for risperidone and paliperidone, not mesuximide, and does not report specific numeric PD parameters. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics in antibody-drug conjugate development and does not mention mesuximide or provide any PK parameters for it. |
| PD | Cheng_2026 | not_relevant | 0 | 0 | The paper is a review of pharmacometric methods for antibody-drug conjugates and does not contain any data, analysis, or numeric parameters for mesuximide. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | This is a narrative review regarding pharmacometrics and real-world data in special populations, with no specific quantitative pharmacokinetic data or models for mesuximide. |
| PD | Choi_2026 | not_relevant | 0 | 0 | The paper is a narrative review of pharmacometrics in special populations and does not report any specific pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Dobrinska_1977 | relevant | 10 | 2 | The paper reports a two-compartment pharmacokinetic model for methsuximide (which the prompt specifies as mesuximide) in dogs, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| popPK | Elenjickal_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of canagliflozin, not mesuximide. |
| PD | Elenjickal_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of canagliflozin and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Elmowafy_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolate mofetil (MMF), not mesuximide. |
| PD | Elmowafy_2026 | not_relevant | 0 | 0 | The paper investigates mycophenolate mofetil (MMF), not mesuximide, and reports only a categorical association between MPA exposure (AUC) and clinical response without deriving numeric PD parameters (e.g., EC50, Emax) for mesuximide. |
| popPK | Eun_2026 | irrelevant | 0 | 0 | The paper describes a bioinformatics platform for kinase inhibitor screening and contains no pharmacokinetic data for mesuximide. |
| PD | Eun_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for kinase inhibitor screening and selectivity profiling using deep learning and docking; it does not report pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for mesuximide or any other drug. |
| popPK | Garamani_2026 | irrelevant | 0 | 0 | The study is a PBPK-PD framework for rifampicin in tuberculosis, not a pharmacokinetic study of mesuximide. |
| PD | Garamani_2026 | not_relevant | 0 | 0 | The paper focuses on rifampicin, not mesuximide, and does not report any PD parameters for the target drug. |
| popPK | Girelli_2026 | irrelevant | 0 | 0 | The paper focuses on fluid dynamics and waste clearance in the human cranial dura using a computational model, with no mention of mesuximide or its pharmacokinetic parameters. |
| PD | Girelli_2026 | not_relevant | 0 | 0 | The paper focuses on the hydrodynamics and solute transport (advection-diffusion) of tracers in the cranial dura and meningeal lymphatics, not on the pharmacodynamic (exposure-response) effects of mesuximide. |
| popPK | Hall_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mephenytoin metabolism where mesuximide (referred to as methsuximide/phensuximide) is only a comparator/inhibitor, not the subject of a PK study. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper investigates mephenytoin metabolism and lists mesuximide only as a potential inhibitor, without reporting pharmacogenomic effects on mesuximide's PK/PD. |
| popPK | Hallock_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of caffeine, not mesuximide. |
| PD | Hallock_2026 | not_relevant | 0 | 0 | The paper focuses on the external validation of a pharmacokinetic (PK) model for caffeine, not mesuximide, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Helfer_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of lansoprazole, not mesuximide. |
| PD | Helfer_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of lansoprazole and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | This is a methodological paper on an automated PK modeling pipeline and does not report population PK parameters for mesuximide. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a pipeline for generating initial estimates for population pharmacokinetic (PK) models and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide or any other drug. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study evaluating automated PopPK software on 22 datasets and does not report specific PK parameters for mesuximide. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide or any other drug. |
| popPK | Huang_2026_2 | irrelevant | 0 | 0 | The paper describes a general automated model selection framework for pharmacokinetics using simulated data and does not report specific parameters for mesuximide. |
| PD | Huang_2026_2 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) model selection algorithms using simulated data and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The paper focuses on pharmacokinetic dosing for carboplatin, not mesuximide. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on carboplatin pharmacokinetics and dosing formula optimization, not mesuximide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not mesuximide. |
| PD | Jeong_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for sirolimus, not mesuximide, and does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not mesuximide. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of rivaroxaban and does not report any pharmacodynamic (PD) or exposure-response model parameters (e.g., Emax, EC50) for the drug. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper describes a computational model for predicting drug-food interactions and does not report pharmacokinetic parameters for mesuximide. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper concerns warfarin, theophylline, and tobramycin, and does not involve mesuximide. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not mention mesuximide or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of moxifloxacin, not mesuximide. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for moxifloxacin to optimize limited sampling strategies; it does not report any pharmacodynamic (PD) or exposure-response relationships, nor does it provide numeric PD parameters. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper describes a general method for initializing pharmacometric models using generic two-compartment and Friberg models, not specific data for mesuximide. |
| PD | Lee_2026 | not_relevant | 0 | 0 | The paper is a methodological study on optimization algorithms using simulated data for generic PK/PD models (2CMT and Friberg myelosuppression) and does not report any pharmacodynamic relationship or parameters for mesuximide. |
| popPK | May_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of topiramate, not mesuximide. |
| popPK | May_2011 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of rufinamide, and only mentions methsuximide (and oxcarbazepine) as co-medications that lower rufinamide concentrations without providing mesuximide parameters. |
| popPK | May_2018 | irrelevant | 0 | 0 | The study focuses on lacosamide pharmacokinetics, and mesuximide is only mentioned as a comparator drug affecting lacosamide concentrations, not as the subject drug. |
| popPK | Navarrete_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ketamine, not mesuximide. |
| PD | Navarrete_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for ketamine, not mesuximide. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of methotrexate, not mesuximide. |
| PD | Olivo_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not mesuximide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Porter_1979 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for phensuximide and methsuximide, not mesuximide. |
| popPK | Rantanen_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methylprednisolone, not mesuximide. |
| PD | Rantanen_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of methylprednisolone, not mesuximide, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Shin_2024 | irrelevant | 0 | 0 | The paper evaluates LLMs for NONMEM coding using generic model examples, not specific pharmacokinetic data for mesuximide. |
| PD | Shin_2024 | not_relevant | 0 | 0 | The paper evaluates LLMs for generating NONMEM PK code and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Silvola_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of gabapentin, not mesuximide. |
| PD | Silvola_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of gabapentin and its transfer into breast milk; it does not report a pharmacodynamic model or exposure-response relationship for mesuximide (or any other drug). |
| popPK | Sim_2026 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Sim_2026 | not_relevant | 0 | 0 | The paper studies gaylussacin, not mesuximide, and does not report any pharmacodynamic parameters for mesuximide. |
| popPK | Steffens_2025 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of amikacin, not mesuximide. |
| PD | Steffens_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of amikacin, not mesuximide, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Tachet_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ruxolitinib, not mesuximide. |
| PD | Tachet_2026 | not_relevant | 3 | 2 | The paper is about ruxolitinib, not mesuximide, and only reports a qualitative exposure-toxicity association without numeric PD parameters. |
| popPK | Teixeira_2026 | irrelevant | 0 | 0 | The study investigates meloxicam in dogs, not mesuximide. |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for meloxicam but contains no pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CIS43LS, a monoclonal antibody against malaria, not the drug mesuximide. |
| popPK | Wagner_1994 | irrelevant | 0 | 0 | The paper is a review of felbamate, and while it mentions methsuximide (likely a typo for mesuximide) in the context of drug interactions, it does not provide quantitative pharmacokinetic parameters for mesuximide. |
| PGx | Wright_1995 | not_relevant | 0 | 0 | The paper studies the inhibition of proguanil metabolism by CYP2C19 substrates, but does not report how a gene variant changes the PK or PD of mesuximide (it mentions methsuximide as an inhibitor, not as the primary drug with a genetic effect). |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetics for amlodipine and telmisartan, not mesuximide. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of amlodipine and telmisartan and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | de_1979 | irrelevant | 0 | 0 | The study evaluates a hemoperfusion device using drugs such as phenobarbital and methsuximide, but does not report pharmacokinetic parameters for mesuximide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
