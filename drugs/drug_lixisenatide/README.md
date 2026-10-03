<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;lixisenatide&quot;}]"></div>

# lixisenatide

- **generic name:** lixisenatide
- **ATC codes:** `A10AE54`, `A10BJ03`
- **DrugBank:** [DB09265](https://go.drugbank.com/drugs/DB09265) · **PubChem:** [CID 131704317](https://pubchem.ncbi.nlm.nih.gov/compound/131704317)
- **groups:** approved, investigational

## About

**Description.** Lixisenatide is a glucagon-like peptide-1 (GLP-1) receptor agonist used in the treatment of type II diabetes mellitus (T2DM). It is sold by Sanofi-Aventis under the brand name Adlyxin in the US[L763] and Lyxumia in the EU.[L764] Adlyxin recieved FDA approval July 28, 2016.[L763]

**Indication.** Lixisenatide is indicated as an adjunct to diet and exercise to improve glycemic control in adult patients with type II diabetes mellitus.[L48400] It is also available in combination with [insulin glargine] for the same indication.[L48405]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 18:27 | 39:53 | 0/0/0 | 0/0/0 | 0/0/0 | 1,588,404/23,392 | ollama / qwen3.8:27b-mtp-q8_0 | 79 | 6/72 | 77/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lixisenatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…eliminated via glomerular filtration…”</sub> | prose |

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5783 matched, 124 returned
- **screened:** 20  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raccah_2015.pdf` | Raccah D et al., Efficacy and safety of lixisenatide in…, Diabetes/metabolism researc… (2015) | popPK | 8 | [10.1002/dmrr.2588](https://doi.org/10.1002/dmrr.2588) | [25115916](https://pubmed.ncbi.nlm.nih.gov/25115916) | The study reports qualitative PK changes (half-life, exposure) for lixisenatide in humans, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |

<sub>queue written 2026-10-03T18:23:50.548471+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bain_2014 | irrelevant | 1 | 0 | The paper is a clinical review of the GetGoal efficacy program and does not report quantitative pharmacokinetic parameters (CL, V, ka) or a PK model for lixisenatide. |
| popPK | Barrett_2025 | irrelevant | 0 | 0 | The study is a health economics and outcomes research analysis comparing weight loss and costs, containing no pharmacokinetic data for lixisenatide. |
| popPK | Barrientos-Pérez_2022 | relevant | 6 | 2 | The study reports PK parameters (Cmax, AUC, tmax) for lixisenatide in humans, but specific numeric values are largely in tables or supplementary figures not fully provided in the text, and no compartmental model parameters (CL, V) are reported. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not lixisenatide. |
| PD | Barry_2026 | not_relevant | 0 | 0 | The paper analyzes vancomycin nephrotoxicity, not lixisenatide. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, alglucosidase alfa) and does not mention lixisenatide. |
| PD | Barzel_2026 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic/pharmacodynamic models for therapeutic enzymes in lysosomal storage diseases and does not contain any data, analysis, or parameters for lixisenatide. |
| popPK | Becker_2014 | relevant | 4 | 8 | The study reports non-compartmental PK parameters (Cmax, tmax, t1/2z, AUC) for lixisenatide in humans, but lacks compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| popPK | Becker_2015 | relevant | 4 | 2 | The study reports descriptive pharmacokinetic parameters (AUC, Cmax, tmax) for lixisenatide, but the specific numeric values are not present in the provided text (referenced as "data not shown" or in figures/tables not included). |
| popPK | Bell_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for pirtobrutinib, not lixisenatide. |
| PD | Bell_2026 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic (PK) analysis of pirtobrutinib, not lixisenatide, and does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug in question. |
| popPK | Blackman_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not lixisenatide. |
| PD | Blackman_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of high-dose methotrexate and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Brown_2013 | irrelevant | 1 | 0 | This is a clinical review of efficacy and safety that mentions a half-life range but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) or a PK model. |
| PD | Brown_2013 | not_relevant | 2 | 1 | The text is a narrative review discussing clinical trial outcomes (HbA1c, PPG changes) and mechanisms, but it does not report a pharmacokinetic/pharmacodynamic model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Chai_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for metoprolol, not lixisenatide. |
| PD | Chai_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PopPK) of metoprolol, not lixisenatide, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Christensen_2009 | irrelevant | 2 | 0 | The paper is a review that mentions linear pharmacokinetics but does not report specific quantitative disposition parameters (CL, V, t1/2) for lixisenatide. |
| popPK | Chung_2019 | irrelevant | 0 | 0 | The study focuses on the renal mechanisms of empagliflozin in rats, using lixisenatide only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for belantamab mafodotin, not lixisenatide. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development for analgesics and does not report pharmacokinetic parameters for lixisenatide. |
| PD | Dahan_2026 | not_relevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development (MIDD) for analgesics and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for lixisenatide. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a systematic review of the population pharmacokinetics of tigecycline, not lixisenatide. |
| PD | Dai_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics (PK) for tigecycline, not lixisenatide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Dalsgaard_2018 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular risk factors in head-to-head trials and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lixisenatide. |
| popPK | Davidson_2015 | irrelevant | 0 | 0 | The paper is a review discussing clinical efficacy and cardiovascular outcomes of GLP-1 receptor agonists, containing no pharmacokinetic parameter values for lixisenatide. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | The paper is a review on drug secretion into human milk and does not report pharmacokinetic parameters for lixisenatide. |
| PD | Dodeja_2026 | not_relevant | 0 | 0 | The paper is a review on drug secretion into human milk and does not contain any pharmacodynamic or exposure-response data for lixisenatide. |
| popPK | Doggrell_2018 | irrelevant | 0 | 0 | The paper is a review of semaglutide, and lixisenatide is only mentioned as a comparator drug without any specific pharmacokinetic parameter values reported for it. |
| popPK | Esposito_2018 | irrelevant | 2 | 0 | The study is an in vitro mechanistic assay for injection site metabolism, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for lixisenatide. |
| popPK | Franken_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of guanabenz, not lixisenatide. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for vancomycin, not lixisenatide. |
| PD | Fresquet-Molina_2025 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for vancomycin and does not contain any pharmacodynamic or exposure-response data for lixisenatide. |
| popPK | Gallego-Hernández_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for linezolid, not lixisenatide. |
| PD | Gallego-Hernández_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for linezolid, not lixisenatide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Gandhi_2025 | irrelevant | 0 | 0 | The paper is a narrative review of GLP-1 receptor agonists in neurodegenerative diseases and does not report any quantitative pharmacokinetic parameters for lixisenatide. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate sodium (MPS) and mycophenolic acid (MPA), not lixisenatide. |
| PD | Gao_2025 | not_relevant | 0 | 0 | The paper focuses on the external validation of population pharmacokinetic (popPK) models for mycophenolate sodium and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | García-Orueta_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of teicoplanin, piperacillin, and meropenem, not lixisenatide. |
| PD | García-Orueta_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PK) design optimization for antibiotics (teicoplanin, piperacillin, meropenem) and does not involve lixisenatide or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Gautier_2022 | relevant | 8 | 2 | The paper develops a compartmental pharmacokinetic model for lixisenatide, but the specific numeric parameter values are located in Supplementary Figures S6-S9, which are not included in the provided evidence. |
| popPK | Gentilella_2019 | irrelevant | 0 | 0 | This is a review article discussing clinical properties and pharmacodynamics of GLP-1 RAs, not a pharmacokinetic study reporting quantitative disposition parameters for lixisenatide. |
| PD | Gentilella_2019 | not_relevant | 1 | 0 | The text is a qualitative review discussing general pharmacodynamic mechanisms and clinical differences between GLP-1 RAs, without reporting any specific numeric PD parameters or exposure-response data for lixisenatide. |
| popPK | Giorda_2014 | irrelevant | 1 | 0 | This is a systematic review discussing safety and efficacy in renal/hepatic impairment without reporting original quantitative pharmacokinetic parameter values for lixisenatide. |
| popPK | Goeyvaerts_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mosnodenvir (a dengue antiviral), not lixisenatide. |
| popPK | Hanefeld_2017 | irrelevant | 0 | 0 | The paper is a post hoc meta-analysis of efficacy and safety outcomes (HbA1c, glucose, adverse events) in patients with renal impairment, and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lixisenatide. |
| popPK | Hardiansyah_2025 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic modeling in radiopharmaceutical therapy (e.g., 177Lu-DOTATATE, 177Lu-PSMA) and does not mention lixisenatide or report any PK parameters for it. |
| PD | Hardiansyah_2025 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic modeling in radiopharmaceutical therapy and does not report any pharmacodynamic or exposure-response analysis for lixisenatide. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not mention lixisenatide or report any pharmacokinetic parameters for it. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies in obese pediatric patients and does not report specific pharmacodynamic or exposure-response data for lixisenatide. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for utreloxastat, not lixisenatide. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PopPK) modeling of utreloxastat, specifically time-varying clearance, and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Hurren_2012 | irrelevant | 1 | 0 | This is a review of drug-drug interactions focusing on the pharmacokinetics of co-administered oral medications, not a primary study reporting quantitative disposition parameters (CL, V, etc.) for lixisenatide itself. |
| PD | Hurren_2012 | not_relevant | 1 | 0 | The paper is a review of drug-drug interaction studies focusing on the pharmacokinetics (Cmax, Tmax, AUC) of co-administered drugs, not a pharmacodynamic exposure-response analysis of lixisenatide itself. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for vancomycin, not lixisenatide. |
| PD | Husheng_2026 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Hölscher_2025 | irrelevant | 0 | 0 | The paper is a review of neurodegenerative diseases and incretin mechanisms, mentioning lixisenatide only as a clinical trial agent for Parkinson's disease without reporting any pharmacokinetic parameters. |
| popPK | Hölscher_2026 | irrelevant | 1 | 0 | The paper is a review of neuroprotective properties and clinical trials for CNS diseases, mentioning lixisenatide only as a comparator for blood-brain barrier penetration without reporting original quantitative PK parameters. |
| popPK | Inoue_2019 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for lixisenatide (Cmax, AUC, t1/2, CL/F, Vss/F), but the specific numeric values are located in supplementary tables (S2-S4) and figures (S3) which are not included in the provided evidence. |
| popPK | Iqbal_2021 | irrelevant | 0 | 0 | This is a review of cardiovascular safety and efficacy trials, not a pharmacokinetic study reporting quantitative disposition parameters for lixisenatide. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not lixisenatide. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not lixisenatide, and does not include a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kalra_2016 | irrelevant | 1 | 0 | This is a narrative review of GLP-1 receptor agonists that discusses lixisenatide's clinical efficacy and general pharmacokinetic properties (e.g., half-life) but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) or compartmental model estimates. |
| PD | Kalra_2016 | not_relevant | 1 | 0 | The paper is a narrative review of GLP-1 receptor agonists that discusses general pharmacological profiles and clinical trial outcomes (HbA1c, weight) but does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response models for lixisenatide. |
| popPK | Kalra_2016_2 | irrelevant | 0 | 0 | The paper is a clinical review discussing the choice of injectable therapies for type 2 diabetes and does not report original quantitative pharmacokinetic parameters for lixisenatide. |
| PD | Kalra_2016_2 | not_relevant | 1 | 0 | The text is a clinical review discussing the choice of injectable therapies and mentions pharmacodynamic properties qualitatively, but it does not report specific numeric PD parameters or exposure-response data for lixisenatide. |
| popPK | Kapitza_2013 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (glucose, insulin, C-peptide AUCs) rather than pharmacokinetic parameters (CL, V, ka) for lixisenatide. |
| popPK | Khoei_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for dolutegravir, not lixisenatide. |
| PD | Khoei_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of dolutegravir and does not report any pharmacodynamic or exposure-response analysis for lixisenatide. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bevacizumab (CT-P16), not lixisenatide. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for a bevacizumab biosimilar (CT-P16), not lixisenatide, and does not model or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gentamicin, not lixisenatide. |
| PD | Lee_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of gentamicin in an obese hemodialysis patient and does not report any pharmacodynamic (PD) or exposure-response relationship for lixisenatide. |
| popPK | Li_2018 | irrelevant | 0 | 0 | This is a review of cardiovascular outcomes and does not report quantitative pharmacokinetic parameters for lixisenatide. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of PF-06804103, not lixisenatide. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports PK/PD models for PF-06804103, not lixisenatide. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tislelizumab, not lixisenatide. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of tislelizumab (a different drug) and does not contain any data or analysis regarding lixisenatide or any pharmacodynamic (PD) relationships. |
| popPK | Lorenz_2013 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects on gastric emptying and postprandial glucose, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lixisenatide. |
| PD | Lorenz_2013 | not_relevant | 3 | 2 | The paper reports a correlation between gastric emptying and glycemic response (r^2=0.51) and dose-response trends, but does not provide a formal PK/PD model or numeric PD parameters (e.g., EC50, Emax) for lixisenatide exposure. |
| popPK | Lund_2014 | irrelevant | 1 | 0 | This is a review article discussing clinical data and general pharmacokinetic differences of GLP-1 receptor agonists, but it does not report specific quantitative population PK parameter values (CL, V, etc.) for lixisenatide in the provided text. |
| popPK | Marques_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propranolol and omeprazole, not lixisenatide. |
| PD | Marques_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) and drug-drug interactions of propranolol and omeprazole, with no mention of lixisenatide or any pharmacodynamic (PD) modeling. |
| popPK | Maselli_2021 | irrelevant | 0 | 0 | The paper is a review of gastric physiology and emptying effects of GLP-1 agonists, not a pharmacokinetic study reporting quantitative disposition parameters for lixisenatide. |
| popPK | McCarty_2017 | irrelevant | 2 | 0 | This is a narrative review of lixisenatide that discusses pharmacokinetics qualitatively but does not report specific quantitative disposition parameters (CL, V, ka) in the provided text. |
| popPK | McCormack_2014 | irrelevant | 0 | 0 | The paper is a review of exenatide, and lixisenatide is only mentioned as a comparator agent without any pharmacokinetic data. |
| popPK | Meier_2012 | irrelevant | 2 | 0 | This is a review article that discusses lixisenatide's pharmacokinetics qualitatively and provides only a general half-life range (2-5 h) in a comparison table, without reporting specific quantitative disposition parameters (CL, V, ka) or a compartmental model. |
| PD | Meier_2012 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses the pharmacodynamic profiles of GLP-1 receptor agonists but does not report original data, numeric PD parameters, or extractable exposure-response curves for lixisenatide. |
| popPK | Meier_2015 | irrelevant | 0 | 0 | The study is a pharmacodynamic and safety trial comparing glycemic control and gastric emptying, with no report of quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lixisenatide. |
| PD | Meier_2015 | not_relevant | 2 | 0 | The paper reports comparative clinical efficacy and safety outcomes (AUC, HbA1c, heart rate) between fixed doses of lixisenatide and liraglutide, but does not provide a concentration-effect model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Mikhailova_2026 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of dapagliflozin, not lixisenatide. |
| PD | Mikhailova_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of dapagliflozin using a Bayesian minimal PBPK model and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide or any other drug. |
| popPK | Miñambres_2017 | irrelevant | 2 | 1 | This is a review article comparing clinical efficacy and general pharmacokinetic profiles (half-life) of GLP-1 agonists, lacking original quantitative population-PK parameters (CL, V, Q, ka) for lixisenatide. |
| PD | Miñambres_2017 | not_relevant | 2 | 1 | The paper is a qualitative review comparing clinical trial outcomes (HbA1c, glucose levels) and pharmacokinetic profiles of GLP-1 agonists, but it does not report or derive numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for lixisenatide. |
| popPK | Nauck_2019 | irrelevant | 1 | 0 | This is a clinical review comparing the efficacy and safety of GLP-1 agonists, not a primary pharmacokinetic study reporting quantitative disposition parameters for lixisenatide. |
| popPK | Nauck_2021 | irrelevant | 1 | 0 | This is a narrative review of GLP-1 receptor agonists that lists a half-life for lixisenatide in a summary table but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) or a compartmental model. |
| PGx | Nauck_2021 | not_relevant | 0 | 0 | The paper is a general review of GLP-1 receptor agonists and does not report specific pharmacogenomic effects on the PK or PD parameters of lixisenatide. |
| popPK | Orozco_2025 | irrelevant | 0 | 0 | The paper is a narrative review of GLP-1 receptor agonists in Parkinson's disease and does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lixisenatide. |
| PD | Orozco_2025 | not_relevant | 1 | 0 | The paper is a comprehensive review of GLP-1 signaling in Parkinson's disease and does not report any primary pharmacokinetic or pharmacodynamic data, nor does it provide numeric PD parameters for lixisenatide. |
| popPK | Owens_2013 | irrelevant | 1 | 0 | The paper is a review discussing the pharmacodynamic effects and clinical outcomes of GLP-1 receptor agonists, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for lixisenatide. |
| PD | Owens_2013 | not_relevant | 2 | 0 | The text is a qualitative review comparing the clinical effects of different GLP-1 RAs without providing any numeric PD parameters, concentration-effect curves, or PK/PD modeling data for lixisenatide. |
| popPK | Pan_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for adalimumab, not lixisenatide. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetics and does not mention lixisenatide or provide any PK parameters for it. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The paper is a review article on pharmacokinetic modeling for nanoparticles and does not contain any data, analysis, or parameters for lixisenatide. |
| popPK | Petersen_2013 | irrelevant | 2 | 0 | The paper is a clinical review that mentions a half-life range but does not report quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| popPK | Prasad-Reddy_2015 | irrelevant | 1 | 0 | This is a clinical review of GLP-1 receptor agonists that mentions lixisenatide's half-life (1.5-3 hours) in passing but does not report quantitative population PK parameters (CL, V, Q, ka) or a compartmental model for lixisenatide. |
| PD | Prasad-Reddy_2015 | not_relevant | 2 | 0 | The paper is a clinical review that qualitatively discusses the pharmacodynamics of GLP-1 agonists but does not provide specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for lixisenatide. |
| popPK | Raccah_2013 | irrelevant | 2 | 1 | This is a clinical efficacy review of lixisenatide in T2DM that mentions a half-life range (2-4 h) but does not report quantitative population PK parameters like clearance, volume, or compartmental model estimates. |
| PD | Raccah_2013 | not_relevant | 3 | 2 | The paper is a clinical review that reports dose-dependent efficacy trends (HbA1c, PPG) and PK properties (Cmax, AUC) but does not provide a formal PK/PD model, concentration-effect curve, or specific numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Raccah_2015 | relevant | 8 | 2 | The study reports qualitative PK changes (half-life, exposure) for lixisenatide in humans, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| popPK | Ratner_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting HbA1c and glucose changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Rendell_2016 | irrelevant | 0 | 0 | The paper is a review of albiglutide, a different drug, and does not report pharmacokinetic parameters for lixisenatide. |
| PD | Rendell_2016 | not_relevant | 0 | 0 | The paper is a review of albiglutide, not lixisenatide, and does not report specific numeric PD parameters or exposure-response models for the target drug. |
| popPK | Roskoski_2026 | irrelevant | 0 | 0 | The paper is a general review of GLP-1/GIP agonists and does not report specific quantitative pharmacokinetic parameters for lixisenatide. |
| popPK | Salameh_2020 | irrelevant | 2 | 0 | The study focuses on brain uptake (influx rate Ki) in mice for CNS therapeutics, not standard systemic disposition parameters (CL, V, t1/2) for lixisenatide, and no numeric values are provided in the evidence. |
| popPK | Saporta_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of meropenem in mice, not lixisenatide. |
| popPK | Scheen_2015 | irrelevant | 1 | 0 | This is a review article that explicitly states only limited pharmacokinetic data are available for lixisenatide and does not provide any quantitative disposition parameters. |
| popPK | Seino_2014 | irrelevant | 0 | 0 | The study reports pharmacodynamic and efficacy outcomes (glucose levels, HbA1c) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asparaginase (N-Asp and P-Asp), not lixisenatide. |
| PD | Sethuramalingam_2026 | not_relevant | 0 | 0 | The paper focuses on asparaginase (N-Asp and P-Asp) and does not contain any data, analysis, or mention of lixisenatide. |
| popPK | Sfairopoulos_2018 | irrelevant | 0 | 0 | The paper is a clinical pharmacology review of GLP-1 receptor agonists that discusses mechanisms and efficacy but does not report quantitative pharmacokinetic parameters (CL, V, ka) for lixisenatide. |
| popPK | Sharma_2018 | irrelevant | 2 | 0 | This is a review article that discusses pharmacokinetic properties generally but does not provide specific quantitative parameter values for lixisenatide in the provided text. |
| popPK | Sleem_2024 | irrelevant | 0 | 0 | The study investigates the nephroprotective and antioxidant effects of lixisenatide in diabetic rats, reporting biomarkers like BUN and creatinine clearance, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) for the drug itself. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper is an in vitro PKPD study of meropenem and colistin/polymyxin B against Acinetobacter baumannii and does not involve lixisenatide. |
| PD | Soeorg_2026 | not_relevant | 0 | 0 | The paper reports a PK/PD model for meropenem and colistin/polymyxin B, not lixisenatide. |
| popPK | Soria-Chacartegui_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tramadol, not lixisenatide. |
| PD | Soria-Chacartegui_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of tramadol and the influence of pharmacogenetics on PK parameters; it does not report any pharmacodynamic (PD) or exposure-response data for lixisenatide or any other drug. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not lixisenatide. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not contain any pharmacodynamic (PD) or exposure-response analysis for lixisenatide. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not lixisenatide. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin in CRRT patients and does not report any pharmacodynamic (PD) or exposure-response data for lixisenatide. |
| popPK | Takayanagi_2018 | irrelevant | 1 | 0 | The paper is a theoretical pharmacodynamic analysis comparing receptor occupancy and clinical efficacy, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for lixisenatide. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and sampling strategies, not lixisenatide. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and sampling strategies, not lixisenatide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Tan_2026_2 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for 5-fluorouracil, not lixisenatide. |
| PD | Tan_2026_2 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PK) modeling of 5-fluorouracil (5-FU) and does not contain any pharmacodynamic (PD) or exposure-response analysis for lixisenatide. |
| popPK | Tang_2020 | irrelevant | 1 | 0 | The study focuses on the synthesis and efficacy of lixisenatide analogues, using lixisenatide only as a comparator or starting material, and does not report quantitative pharmacokinetic parameters (CL, V, ka) for lixisenatide itself. |
| popPK | Tong_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of aminoglycosides (amikacin, gentamicin, tobramycin) and does not involve lixisenatide. |
| PD | Tong_2026 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (popPK) model for aminoglycosides (amikacin, gentamicin, tobramycin) and does not involve lixisenatide or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Tonneijck_2017 | irrelevant | 0 | 0 | The study measures renal hemodynamics (GFR, ERPF) and metabolic markers, not the pharmacokinetic disposition parameters (CL, V, ka) of lixisenatide. |
| popPK | Tonneijck_2018 | irrelevant | 0 | 0 | The study focuses on the renal handling of uric acid and does not report pharmacokinetic parameters (CL, V, ka) for lixisenatide. |
| popPK | Trujillo_2014 | irrelevant | 0 | 0 | This is a narrative review of GLP-1 receptor agonists that discusses lixisenatide qualitatively but does not report any quantitative pharmacokinetic parameters or original data. |
| popPK | Trujillo_2017 | irrelevant | 2 | 0 | This is a systematic review of clinical efficacy and safety that does not report original quantitative pharmacokinetic disposition parameters (CL, V, ka) for lixisenatide. |
| popPK | Tsai_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not lixisenatide. |
| PD | Tsai_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of vancomycin in hemodialysis patients and does not report any pharmacodynamic or exposure-response relationship for lixisenatide. |
| popPK | Vatsia_2025 | irrelevant | 0 | 0 | The study is a retrospective analysis of surgical outcomes (pseudarthrosis rates) and does not report any pharmacokinetic parameters for lixisenatide. |
| PD | Vatsia_2025 | not_relevant | 0 | 0 | The paper is a retrospective clinical outcomes study comparing pseudarthrosis rates between GLP-1 agonist users and non-users; it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not lixisenatide. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The study uses simulated data from a generic Monolix demo project (Oral1) to demonstrate a statistical method, not pharmacokinetic data for lixisenatide. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper focuses on uncertainty quantification methods for pharmacokinetic (PK) models using simulated data and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin, not lixisenatide. |
| PD | Wassef_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (popPK) of cefazolin in obese patients and does not report any pharmacodynamic (PD) or exposure-response relationship for lixisenatide. |
| popPK | Whyte_2019 | irrelevant | 1 | 0 | The study measures the pharmacokinetics of chylomicron triacylglycerol (a lipid substrate) to determine the mechanism of lixisenatide's effect on lipid clearance, rather than reporting the disposition parameters (CL, V, t1/2) of the lixisenatide drug itself. |
| popPK | Wilkins_2014 | irrelevant | 2 | 0 | The paper describes a semi-mechanistic disease/drug response model (PD/PD) for glucose and insulin, not a pharmacokinetic model with quantitative disposition parameters (CL, V, ka) for lixisenatide. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of growth hormone (rhGH and PEG-rhGH), not lixisenatide. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper focuses on growth hormone (rhGH/PEG-rhGH) and does not mention lixisenatide. |
| popPK | Yamada_2017 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (glucose, C-peptide, glucagon) rather than pharmacokinetic parameters (CL, V, ka) for lixisenatide. |
| PD | Yamada_2017 | not_relevant | 2 | 1 | The paper reports group-level mean changes in pharmacodynamic endpoints (PPG AUC, C-peptide) but does not provide individual concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Yan_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of escitalopram, not lixisenatide. |
| PD | Yan_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (PopPK) models for escitalopram and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexamethasone in horses, not lixisenatide. |
| popPK | Zayed_2026 | irrelevant | 1 | 0 | This is a literature review discussing the general design and characteristics of GLP-1 RAs without reporting original quantitative pharmacokinetic parameter values for lixisenatide. |
| PD | Zayed_2026 | not_relevant | 1 | 0 | The paper is a qualitative literature review of pharmaceutical design and PK characteristics of GLP-1 RAs and does not report specific numeric PD parameters or exposure-response models for lixisenatide. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not lixisenatide. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for linezolid, not lixisenatide. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) and machine learning for linezolid concentration prediction; it does not report any pharmacodynamic (PD) or exposure-response relationship for lixisenatide or any other drug. |
| popPK | Zhenyan_2026 | irrelevant | 0 | 0 | The paper is a systematic review of rituximab pharmacokinetics and does not contain data for lixisenatide. |
| PD | Zhenyan_2026 | not_relevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics (PK) of rituximab, not lixisenatide, and does not report any pharmacodynamic (PD) or exposure-response models. |
| popPK | van_2017 | irrelevant | 2 | 0 | The study focuses on a PKPD model for carcinogenicity in rodents and does not report standard quantitative disposition parameters (CL, V, t1/2) for lixisenatide in the provided evidence. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IVIg/SCIg), not lixisenatide. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not contain any data, analysis, or parameters for lixisenatide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
