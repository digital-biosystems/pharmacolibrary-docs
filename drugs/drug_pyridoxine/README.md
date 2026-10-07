<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;Pyridoxine&quot;}]"></div>

# Pyridoxine

- **generic name:** Pyridoxine
- **ATC codes:** `A11HA02`
- **DrugBank:** [DB00165](https://go.drugbank.com/drugs/DB00165) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Pyridoxine, a form of vitamin B6, is a vitamin preparation used as a supplement and has been used for conditions such as epilepsy. It is widely used, appears on the WHO list of essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423746](https://www.wikidata.org/wiki/Q423746) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:00 | 2:40 | 0/0/0 | 1/0/1 | 0/0/0 | 188,932/8,677 | einfracz / qwen3.8-27b | 21 | 5/29 | 19/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Berger_1992_serum_pyridoxal_phosphate](drugs/drug_pyridoxine/pd_Berger_1992_serum_pyridoxal_phosphate.md) | serum pyridoxal phosphate ← pyridoxine · stimulation effect | — | Berger AR et al., Dose response, coasting, and differenti…, Neurology (1992) | [10.1212/wnl.42.7.1367](https://doi.org/10.1212/wnl.42.7.1367) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Bello_2023_CPE](drugs/drug_pyridoxine/pd_Bello_2023_CPE.md) | SARS-CoV-2-induced cytopathic effect (CPE) biomarker turnover ← pyridoxine | — | Bello SO et al., Erythromycin, retapamulin, pyridoxine,…, Frontiers in cellular and i… (2023) | [10.3389/fcimb.2023.1273982](https://doi.org/10.3389/fcimb.2023.1273982) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Bello_2023_MPRO](drugs/drug_pyridoxine/pd_Bello_2023_MPRO.md) | SARS-CoV-2 main protease (MPRO) activity biomarker turnover ← pyridoxine | — | Bello SO et al., Erythromycin, retapamulin, pyridoxine,…, Frontiers in cellular and i… (2023) | [10.3389/fcimb.2023.1273982](https://doi.org/10.3389/fcimb.2023.1273982) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Bello_2023_PP](drugs/drug_pyridoxine/pd_Bello_2023_PP.md) | SARS-CoV-2 papain-like protease activity biomarker turnover ← pyridoxine | — | Bello SO et al., Erythromycin, retapamulin, pyridoxine,…, Frontiers in cellular and i… (2023) | [10.3389/fcimb.2023.1273982](https://doi.org/10.3389/fcimb.2023.1273982) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pyridoxine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALPL (substrate), DDC (cofactor), PDXK (substrate), PDXK (target), PDXP (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 243 matched, 144 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Coburn_1988.pdf` | Coburn SP et al., A multicompartment model of vitamin B6…, Progress in food & nutritio… (1988) | popPK | 5 | not captured | [3075306](https://pubmed.ncbi.nlm.nih.gov/3075306) | The paper describes a model of vitamin B6 metabolism and pyridoxic acid kinetics in rats, but it is explicitly a review of model development without reporting specific numeric PK parameter values for pyridoxine itself in the provided text. |
| `Davies_2007.pdf` | Davies SJ et al., PRN prescribing in psychiatric inpatien…, Journal of psychopharmacolo… (2007) | pgx | 7 | [10.1177/0269881107067242](https://doi.org/10.1177/0269881107067242) | [17329294](https://www.ncbi.nlm.nih.gov/pubmed/17329294) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T16:58:19.839072+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agafonova_2025 | irrelevant | 0 | 0 | The study investigates the in-vitro pharmacological activity (COX inhibition, permeability, antioxidant) of pyridoxine-ketorolac prodrugs, not the pharmacokinetic disposition parameters of pyridoxine itself. |
| PGx | Ahmed_2020 | not_relevant | 0 | 0 | The paper describes a genetic defect causing pyridoxine-responsive epilepsy (a therapeutic response) rather than a pharmacokinetic or pharmacodynamic effect of the drug itself. |
| PGx | Ahmed_2026 | not_relevant | 0 | 0 | The paper focuses on vincristine-induced neurotoxicity and lists pyridoxine only as a symptomatic treatment, without analyzing any pharmacogenomic effects on pyridoxine's PK or PD parameters. |
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The study evaluates IPL therapy for meibomian gland dysfunction and contains no pharmacokinetic data for pyridoxine. |
| PGx | Al-Tai_2025 | not_relevant | 0 | 0 | The paper reports genetic variants in MTHFR/other genes associated with homocysteine remethylation disorders (a disease phenotype), not a pharmacokinetic or pharmacodynamic effect of the drug pyridoxine. |
| popPK | Amoussa_2021 | irrelevant | 0 | 0 | This is a food processing/chemistry study analyzing the stability of pyridoxine in Ginkgo nuts during drying, not a pharmacokinetic study. |
| PD | Amoussa_2021 | not_relevant | 0 | 0 | The paper analyzes the effect of food processing methods (preheating/drying) on the chemical composition of Ginkgo nuts, not the pharmacodynamic response of a biological system to pyridoxine exposure. |
| popPK | Balakina_2021 | irrelevant | 0 | 0 | The paper studies the antioxidant and NO-donor properties of a pyridoxine derivative (B6NO) in vitro, not the pharmacokinetics of pyridoxine itself. |
| PD | Balakina_2021 | not_relevant | 3 | 2 | The paper reports a single IC50 value for cytotoxicity (&gt;4 mM) and qualitative comparisons of antioxidant activity, but lacks a formal dose-response curve, Emax/EC50 parameters for the primary PD effects (ROS/NO), or any PK/PD modeling. |
| popPK | Bassi_2020 | irrelevant | 0 | 0 | The paper describes a DNA-encoded chemical library for ligand discovery and contains no pharmacokinetic data or parameters for pyridoxine. |
| PD | Bassi_2020 | not_relevant | 0 | 0 | The paper describes a DNA-encoded library for ligand discovery and reports binding affinities (Kd) for glutamic acid derivatives, but contains no data, analysis, or mention of Pyridoxine. |
| popPK | Baswar_2021 | irrelevant | 0 | 0 | The study is an in silico screening of pyridoxine carbamates for anti-Alzheimer's activity and does not report quantitative pharmacokinetic disposition parameters for pyridoxine. |
| PD | Baswar_2021 | not_relevant | 0 | 0 | The paper is an in silico study using computational tools (PASS, docking) and does not report any experimental pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Başkan_2026 | irrelevant | 0 | 0 | The paper describes anti-VEGF treatment for diabetic macular edema and does not mention pyridoxine or any pharmacokinetic parameters. |
| popPK | Bello_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pyridoxine's antiviral activity (IC50 values) and does not report any pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Berger_1992 | irrelevant | 1 | 0 | The study focuses on neurotoxicity and clinical outcomes rather than pharmacokinetic disposition parameters, and no PK values are reported. |
| PGx | Bjørklund_2022 | not_relevant | 0 | 0 | The paper is a review of B vitamins and homocysteine in stroke prevention and does not report specific pharmacokinetic or pharmacodynamic effects of pyridoxine gene variants. |
| PGx | Bunik_2022 | not_relevant | 1 | 5 | The paper investigates thiamine-dependent regulation of pyridoxal kinase and the effect of genetic variants on the enzyme's affinity for thiamine (substrate/effector), rather than reporting a change in the pharmacokinetic or pharmacodynamic parameters of pyridoxine as a administered drug. |
| popPK | Calabrese_1980 | irrelevant | 0 | 0 | The paper is a theoretical proposal regarding toxicity mechanisms and does not report any quantitative pharmacokinetic parameters for pyridoxine. |
| PD | Calabrese_1980 | not_relevant | 0 | 0 | The text is a hypothesis regarding the interaction between oral contraceptives, carbon disulfide, and pyridoxine metabolism, containing no PK/PD data, models, or numeric parameters. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study regarding dexamethasone implants for diabetic macular edema and does not involve pyridoxine pharmacokinetics. |
| PGx | Ciapaite_2023 | not_relevant | 2 | 6 | The paper investigates the metabolic consequences of a genetic deficiency on cellular vitamin B6 handling and mitochondrial function, which is a pharmacokinetic/biochemical effect of the drug on the disease mechanism, but it does not report a pharmacodynamic therapeutic effect (e.g., change in seizure frequency, neurological function, or drug response) of pyridoxine that varies by genotype. |
| PGx | Ciapaite_2025 | not_relevant | 2 | 5 | The study reports metabolic changes and seizure response in a zebrafish disease model but does not quantify pharmacokinetic or pharmacodynamic parameters of pyridoxine itself. |
| PGx | Clark_1985 | not_relevant | 2 | 0 | Pyridoxine is only mentioned as a treatment for an isoniazid-induced adverse effect, not as the drug subject to pharmacogenomic analysis. |
| popPK | Coburn_1988 | irrelevant | 5 | 0 | The paper describes a model of vitamin B6 metabolism and pyridoxic acid kinetics in rats, but it is explicitly a review of model development without reporting specific numeric PK parameter values for pyridoxine itself in the provided text. |
| popPK | Conde_2016 | irrelevant | 0 | 0 | The study investigates tuberculosis treatment with rifapentine, moxifloxacin, isoniazid, and pyrazinamide; pyridoxine is not the subject drug and no PK parameters for it are reported. |
| PD | Conde_2016 | not_relevant | 0 | 0 | The paper reports population PK parameters (AUC, Cmax) for rifapentine and moxifloxacin and clinical efficacy outcomes, but it does not report any pharmacodynamic (PD) or exposure-response analysis for pyridoxine (or any other drug). |
| PGx | Cotter_1999 | not_relevant | 2 | 5 | The paper describes the association between ALAS2/HFE genotypes and clinical response (hemoglobin levels) to pyridoxine, but it does not report pharmacokinetic (PK) parameters or quantitative pharmacodynamic (PD) effect sizes (theta) for the drug itself. |
| popPK | Coughlin_2022 | irrelevant | 0 | 0 | This is a clinical outcomes study evaluating cognitive development in pyridoxine-dependent epilepsy, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life for pyridoxine. |
| PGx | Davies_2007 | not_relevant | 0 | 0 | The paper analyzes prescribing patterns of PRN medications in psychiatry and general CYP interactions, without reporting any specific pharmacogenomic effects on the PK/PD parameters of pyridoxine. |
| popPK | De_2024 | irrelevant | 0 | 0 | The paper is a structural biology and enzymology study on a bacterial kinase, not a pharmacokinetic study of pyridoxine. |
| PD | De_2024 | not_relevant | 0 | 0 | The paper reports an enzyme inhibition IC50 for Pyridoxal Phosphate (PLP) against a bacterial enzyme, which is a biochemical assay parameter, not a pharmacodynamic (exposure-response) relationship for the drug Pyridoxine in a biological system. |
| popPK | Desta_1992 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic interactions (seizures) and pyridoxine is only a co-administered agent, with no quantitative PK parameters reported for pyridoxine. |
| PD | Desta_1992 | not_relevant | 1 | 0 | The paper describes qualitative seizure thresholds and PK interactions but does not provide numeric PD parameters or a quantitative exposure-response model for pyridoxine. |
| popPK | Dickey_1975 | irrelevant | 0 | 0 | no_text gate: only 42 chars of text extracted (&lt; 400) |
| PD | Dickey_1975 | not_relevant | 0 | 0 | The text is a title of a review article regarding drugs affecting breast and lactation, containing no specific data, models, or numeric parameters for Pyridoxine. |
| PGx | Dilena_2016 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic response (efficacy) of levetiracetam in a patient with an STXBP1 mutation, but does not report on how a gene variant affects the PK/PD parameters of pyridoxine. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | Pyridoxine is listed only as a minor ingredient (0.48 mg) in a food supplement trial focused on cognitive function, with no pharmacokinetic parameters reported. |
| popPK | Ebadi_1982 | irrelevant | 0 | 0 | The paper is a review of drug interactions and biochemical mechanisms involving pyridoxine, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Ebadi_1982 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and biochemical mechanisms involving pyridoxine, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Edenharder_1999 | irrelevant | 0 | 0 | The paper is an in-vitro antimutagenicity study using Salmonella, not a pharmacokinetic study, and reports no disposition parameters for pyridoxine. |
| PD | Edenharder_1999 | not_relevant | 0 | 0 | The paper reports antimutagenic effects of vitamins (including pyridoxine) in a Salmonella assay, but pyridoxine did not show significant activity, and no pharmacodynamic parameters (Emax, EC50, etc.) are reported for it. |
| popPK | Eldon_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vardenafil, not pyridoxine. |
| PD | Eldon_2021 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters and safety data for vardenafil, with no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Ellis_2024 | irrelevant | 0 | 0 | The study focuses on tuberculosis preventive therapy (isoniazid/rifapentine) and PK of rifapentine/fluconazole/dolutegravir, with no mention of pyridoxine pharmacokinetics. |
| PD | Ellis_2024 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial evaluating TB preventative therapy strategies and does not report any pharmacodynamic or exposure-response data for Pyridoxine. |
| PGx | Engelke_2021 | not_relevant | 0 | 0 | The study focuses on identifying diagnostic biomarkers for ALDH7A1 deficiency, not on pharmacogenomic effects on the PK/PD of pyridoxine therapy. |
| popPK | Euteneuer_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of morphine, not pyridoxine. |
| PD | Euteneuer_2020 | not_relevant | 0 | 0 | The paper focuses on morphine pharmacokinetics and Bayesian estimation in neonates, not pyridoxine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Eymard_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methionine and an anti-cancer enzyme (methioninase) in mice, where pyridoxine is only a co-administered agent, and no quantitative PK parameters for pyridoxine are reported. |
| PD | Eymard_2023 | not_relevant | 2 | 0 | The paper describes a mathematical modeling framework for methionine depletion and tumor growth but does not report specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for Pyridoxine in the provided text. |
| PGx | Falsaperla_2025 | not_relevant | 0 | 0 | The paper describes the genetic etiology of a disease (pyridoxine-dependent epilepsy) caused by structural variants, but it does not report pharmacogenomic effects of these variants on specific pharmacokinetic or pharmacodynamic parameters (e.g., clearance, Vd, EC50) of pyridoxine. |
| popPK | Faramarzi_2015 | irrelevant | 0 | 0 | The study is a randomized clinical trial evaluating psychotherapy for nausea and vomiting of pregnancy, not a pharmacokinetic study of pyridoxine. |
| popPK | Felippe_2026 | irrelevant | 1 | 0 | The study investigates the pharmacodynamic effects of pyridoxine/PLP on P2X3 receptors and blood pressure, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Field_2026 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of pyridoxine on depression symptoms and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Field_2026 | not_relevant | 2 | 0 | The paper reports a clinical trial with a single fixed dose (100 mg) and no pharmacokinetic data or dose-response modeling; it explicitly states that quantifying the dose-response relationship is future work. |
| PGx | Fortin_2023 | not_relevant | 2 | 0 | The paper describes a clinical case of delayed therapeutic response (PD) in a specific genetic disorder but does not report a pharmacogenomic effect size or quantitative change in PK/PD parameters for a specific variant. |
| popPK | Franssen_2011 | irrelevant | 0 | 0 | The paper focuses on oxalate clearance during liver-kidney transplantation in patients with primary hyperoxaluria and does not report pharmacokinetic parameters for pyridoxine. |
| PD | Franssen_2011 | not_relevant | 0 | 0 | The paper describes a clinical case report of renal replacement therapy for oxalate clearance and does not report any pharmacodynamic or exposure-response analysis for Pyridoxine. |
| popPK | Gangwar_2021 | irrelevant | 0 | 0 | The study investigates the effect of pyridoxine as a cell culture media component on IgG productivity and charge heterogeneity, not the pharmacokinetics of pyridoxine itself. |
| PD | Gangwar_2021 | not_relevant | 0 | 0 | The paper investigates the effect of pyridoxine on CHO cell productivity and IgG charge heterogeneity (process/biopharmaceutical quality), not the pharmacodynamic response of pyridoxine as a drug in a biological system. |
| PGx | Gangwar_2021 | not_relevant | 0 | 0 | The paper investigates the effect of pyridoxine on IgG production in CHO cells, not the pharmacokinetics or pharmacodynamics of pyridoxine itself. |
| popPK | Gauda_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clonidine, not pyridoxine. |
| PD | Gauda_2022 | not_relevant | 0 | 0 | The paper studies Clonidine, not Pyridoxine, and does not report any exposure-response or dose-response relationship for Pyridoxine. |
| popPK | Gausi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isoniazid, not pyridoxine. |
| PD | Gausi_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of isoniazid and does not report any pharmacodynamic or exposure-response data for pyridoxine. |
| popPK | Geary_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of antimetabolites on Plasmodium falciparum, not a pharmacokinetic study of pyridoxine in humans or animals. |
| PGx | Giridharan_2026 | not_relevant | 0 | 0 | The study investigates a computational screening for a new drug (TUDCA) and compares its binding affinity to pyridoxine, but it does not report any pharmacogenomic effects of gene variants on the pharmacokinetic or pharmacodynamic parameters of pyridoxine. |
| popPK | Go_2026 | irrelevant | 0 | 0 | The study is an observational analysis of drug-drug interaction prevalence in nursing home residents and does not report any pharmacokinetic parameters for pyridoxine. |
| PD | Go_2026 | not_relevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for Pyridoxine. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is a review focused on emoxypine, only mentioning pyridoxine as a structural analog without providing any pharmacokinetic data for pyridoxine. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper is a review of emoxypine and its derivatives, mentioning pyridoxine only as a structural analog, and contains no pharmacodynamic or exposure-response data for pyridoxine. |
| PGx | Hagstrom_2013 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic associations with anti-VEGF therapy for AMD and does not report on pyridoxine pharmacokinetics or pharmacodynamics. |
| popPK | Hartvig_1995 | irrelevant | 0 | 0 | The study is a PET mechanistic study of serotonin synthesis in monkeys where pyridoxine is used as a cofactor to measure enzyme activity, not a pharmacokinetic study of pyridoxine disposition. |
| popPK | Helfer_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of pentobarbital, not pyridoxine. |
| PD | Helfer_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of pentobarbital, not pyridoxine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of vitamin B6 intake and lung function, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Ishiwata_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of cefazolin-induced seizures, with pyridoxine serving only as a co-administered agent to counteract isoniazid effects, and no PK parameters for pyridoxine are reported. |
| PD | Ishiwata_2005 | not_relevant | 3 | 2 | The paper reports qualitative changes in seizure thresholds and drug concentrations in the presence of pyridoxine but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for pyridoxine. |
| popPK | Jacobson_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of pyridoxine analogs as receptor modulators, not a pharmacokinetic study of pyridoxine disposition. |
| popPK | Jarrett_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for isoniazid, not pyridoxine. |
| PD | Jarrett_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for Isoniazid, not Pyridoxine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kabata_2026 | irrelevant | 0 | 0 | The study is an epidemiological analysis of intravitreal anti-VEGF injection usage trends in Japan and does not involve the pharmacokinetics of pyridoxine. |
| PD | Kabata_2026 | not_relevant | 0 | 0 | The paper is a nationwide epidemiological analysis of intravitreal injection utilization trends and regional variation, containing no pharmacokinetic or pharmacodynamic data, exposure-response relationships, or dose-effect parameters for Pyridoxine or any other drug. |
| PGx | Kaur_2021 | not_relevant | 0 | 0 | The paper discusses folic acid as a placebo in hydroxychloroquine trials and briefly mentions a pyridoxine combination study, but it does not report any gene variant effects on pyridoxine pharmacokinetics or pharmacodynamics. |
| popPK | Kim_2001 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of pyridoxal phosphate derivatives as P2X receptor antagonists, reporting IC50 values for receptor binding rather than pharmacokinetic disposition parameters for pyridoxine. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study focuses on the anti-hyperglycemic pharmacodynamic effects and enzyme inhibition of pyridoxine derivatives, not on pharmacokinetic disposition parameters. |
| popPK | Kohanfekr_2025 | irrelevant | 0 | 0 | The paper is an electrochemical and medicinal chemistry study using pyridoxine as an analyte for sensor development, not a pharmacokinetic study. |
| PD | Kohanfekr_2025 | not_relevant | 0 | 0 | The paper reports an electrochemical sensor for pyridoxine and the anticancer activity of a vanadium complex, but does not report a pharmacodynamic or exposure-response relationship for pyridoxine itself. |
| popPK | Koul_1991 | irrelevant | 0 | 0 | The study investigates oxalate binding kinetics to intestinal membranes in pyridoxine-deficient rats, not the pharmacokinetic disposition parameters of pyridoxine itself. |
| PD | Koul_1991 | not_relevant | 0 | 0 | The paper reports in vitro binding kinetics (Kd, Bmax) of oxalate to intestinal membranes in pyridoxine-deficient rats, which is a mechanistic/biochemical study, not a pharmacodynamic exposure-response or dose-response analysis of pyridoxine itself. |
| popPK | Lambrou_2012 | irrelevant | 0 | 0 | The study is an epidemiological investigation of arsenic exposure and DNA methylation; pyridoxine is only measured as a nutritional covariate, and no pharmacokinetic parameters are reported. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for ranibizumab, not pyridoxine. |
| PGx | Lee_2021 | not_relevant | 0 | 0 | The paper reports a case of molybdenum cofactor deficiency and pyridoxine supplementation, but does not report a pharmacogenomic effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of pyridoxine itself. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro pharmacological activity (MAO-B inhibition) of pyridoxine hybrids, not the pharmacokinetics of pyridoxine itself. |
| PD | Li_2020 | not_relevant | 3 | 3 | The paper reports in vitro IC50 values for MAO-B inhibition, which are pharmacodynamic potency metrics, but it does not report an exposure-response or dose-response relationship for the drug Pyridoxine itself, nor does it provide a PK/PD model or concentration-effect curve for the specific entity named in the query. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The study concerns the genetic loci and agronomic factors affecting Vitamin B6 levels in wheat, not pharmacogenomic effects of a drug's PK/PD parameters. |
| PGx | Lioudyno_2024 | not_relevant | 0 | 0 | The paper reports on vitamin B9 and folate cycle gene polymorphisms, not on the pharmacogenomics of pyridoxine (Vitamin B6). |
| PGx | Léonard_2006 | not_relevant | 0 | 0 | The study characterizes proteomic changes in rat liver induced by clofibrate and mentions pyridoxine 5'-phosphate oxidase as a regulated protein, but does not investigate gene variants or pharmacokinetic parameters of pyridoxine. |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper investigates the effect of the CFH Y402H polymorphism on the response to anti-VEGF therapy for AMD, which is unrelated to the pharmacokinetics or pharmacodynamics of pyridoxine. |
| popPK | Monico_2005 | irrelevant | 0 | 0 | The study focuses on the clinical response to pyridoxine in primary hyperoxaluria (urine oxalate excretion) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for pyridoxine. |
| PD | Monico_2005 | not_relevant | 3 | 2 | The paper reports a qualitative genotype-based response and a threshold dose (5 mg/kg/day) but lacks a formal dose-response curve or numeric PD parameters (e.g., Emax, EC50) for pyridoxine. |
| popPK | Mulyukov_2018 | irrelevant | 0 | 0 | The paper reports a pharmacokinetic/pharmacodynamic model for ranibizumab in age-related macular degeneration, not for pyridoxine. |
| PGx | Musayev_2009 | not_relevant | 0 | 0 | The paper describes an in vitro molecular basis for a disease-causing mutation, not a pharmacokinetic or pharmacodynamic parameter of pyridoxine therapy in humans. |
| popPK | Naidoo_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moxifloxacin, not pyridoxine. |
| PD | Naidoo_2017 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) parameters (clearance, AUC) for moxifloxacin, not pharmacodynamic (PD) or exposure-response relationships for pyridoxine. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional survey on medicine use during breastfeeding and does not report any pharmacokinetic parameters for pyridoxine. |
| PD | Nakijoba_2025 | not_relevant | 0 | 0 | The paper is a cross-sectional epidemiological study on medication use prevalence and safety categories during breastfeeding; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for Pyridoxine or any other drug. |
| popPK | Navid_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sorafenib, bevacizumab, and cyclophosphamide, not pyridoxine. |
| PD | Navid_2013 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for sorafenib (VEGFR2 inhibition), bevacizumab, and cyclophosphamide, but does not report any pharmacodynamic or exposure-response relationship for Pyridoxine. |
| PGx | Pande_2025 | not_relevant | 5 | 4 | The paper reports a clinical case of homocystinuria where pyridoxine failed to lower homocysteine levels (non-response), but it does not provide a pharmacogenomic analysis linking the MTHFR variant to specific PK/PD parameters of pyridoxine itself. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper studies the effect of MTHFR polymorphisms on the efficacy of verteporfin (PDT), not on the pharmacokinetic or pharmacodynamic parameters of pyridoxine. |
| PGx | Pearl_2007 | not_relevant | 0 | 0 | The text is a general overview of pediatric neurotransmitter disorders and mentions pyridoxine-dependent seizures as a clinical phenotype, but it does not report any gene variant effects on the pharmacokinetic or pharmacodynamic parameters of pyridoxine. |
| popPK | Peloquin_2001 | irrelevant | 0 | 0 | Pyridoxine is administered as a co-medicament, while the study focuses on the pharmacokinetics of para-aminosalicylic acid. |
| popPK | Podany_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dolutegravir in the context of rifapentine/isoniazid co-administration and does not report any data for pyridoxine. |
| PD | Podany_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetic data for dolutegravir and virologic outcomes, but contains no information regarding Pyridoxine or any pharmacodynamic/exposure-response analysis for it. |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for brivaracetam, not pyridoxine. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not pyridoxine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Pugachev_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic and synthesis study of pyridoxine analogs, reporting no pharmacokinetic parameters. |
| popPK | Riedl_2022 | irrelevant | 0 | 0 | The paper studies the volume of intraretinal and subretinal fluid in the eye, not the pharmacokinetics of pyridoxine. |
| popPK | Rockwood_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetics for antituberculosis drugs (rifampin, isoniazid, pyrazinamide), not pyridoxine. |
| PD | Rockwood_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rifampin, isoniazid, and pyrazinamide, not pyridoxine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not report pharmacokinetic parameters for pyridoxine. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a theoretical review of excipients in paediatric formulations and does not report any pharmacodynamic or exposure-response data for Pyridoxine. |
| popPK | Roudbari_2024 | irrelevant | 0 | 0 | The study is an in-vitro antiglycation assay where pyridoxine is used only as a reference inhibitor, not a subject of pharmacokinetic analysis. |
| PD | Roudbari_2024 | not_relevant | 2 | 0 | The paper reports a single-point antiglycation activity for pyridoxine (1.0 mM) as a reference standard but does not provide a dose-response curve, IC50, or any other numeric PD parameters for pyridoxine. |
| popPK | Rubio-Aurioles_2012 | irrelevant | 0 | 0 | The study investigates tadalafil and sildenafil for erectile dysfunction and does not involve pyridoxine. |
| PGx | Samsonov_1977 | not_relevant | 0 | 0 | The study investigates the effect of diet and pyridoxine administration on catecholamine excretion in IHD patients, but does not report any pharmacogenomic interaction or genetic variant effects on pyridoxine PK/PD. |
| PGx | Santilli_2016 | not_relevant | 0 | 0 | The paper discusses folic acid and homocysteine metabolism, not the pharmacokinetics or pharmacodynamics of pyridoxine. |
| popPK | Schaub_2021 | irrelevant | 0 | 0 | The paper is a database analysis of glycosidic residues in natural products and does not report any pharmacokinetic parameters for pyridoxine. |
| PD | Schaub_2021 | not_relevant | 0 | 0 | The paper is a structural analysis of glycosidic residues in a natural products database and does not report any pharmacodynamic or exposure-response data for Pyridoxine. |
| PGx | Schuurmans_2025 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of pyridoxine-dependent epilepsy (genetic variants in ALDH7A1) and the efficacy of pyridoxine as a treatment, but it does not report how a specific gene variant alters the pharmacokinetics or pharmacodynamics of pyridoxine administration itself (e.g., drug clearance, volume of distribution, or specific dose-response parameters). |
| PGx | Sedillo_2024 | not_relevant | 0 | 0 | The paper reports the prevalence of a genetic disease (SPLIS) and mentions pyridoxine as a supportive treatment, but does not report any pharmacokinetic or pharmacodynamic data for pyridoxine. |
| PGx | Sengul_2018 | not_relevant | 0 | 0 | The paper reports pharmacogenetics of ranibizumab, not pyridoxine. |
| PGx | Seshia_2011 | not_relevant | 1 | 0 | The text is a general review of neonatal seizure management that mentions pharmacogenetics only in the context of dosing anti-epileptic drugs generally, with no specific data on how genotypes affect the pharmacokinetics or pharmacodynamics of pyridoxine. |
| popPK | Skinner_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isoniazid (the subject drug) after overdose, while pyridoxine is only mentioned as a co-administered antidote. |
| PGx | Stevelink_2019 | not_relevant | 1 | 2 | The paper reports the effect of genetic variants on natural vitamin B6 metabolite levels in healthy individuals, not the pharmacokinetic or pharmacodynamic parameters of pyridoxine administered as a drug. |
| PGx | Striano_2009 | not_relevant | 0 | 0 | The paper describes the genetic etiology (ALDH7A1 mutations) of a disease (PDS) and the clinical response to treatment, but does not report quantitative pharmacokinetic or pharmacodynamic parameters of pyridoxine. |
| PGx | Szutowska_2021 | not_relevant | 0 | 0 | The paper reports on the fermentation of kale juice and pyridoxine content changes due to bacteria, not pharmacogenomics or human PK/PD parameters. |
| PGx | Takle_2025 | not_relevant | 0 | 0 | The paper reports a case of a genetic deficiency in a binding protein but does not quantify the effect of the variant on pyridoxine PK/PD parameters. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses the nutritional effects of pyridoxine deficiency on mineral balance, not the effect of genetic variants on pyridoxine pharmacokinetics or pharmacodynamics. |
| PGx | Thijs_2019 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction involving hydrocortisone and rifampicin, with no mention of pyridoxine or pharmacogenomic effects. |
| PGx | Tseng_2022 | not_relevant | 0 | 0 | The paper describes clinical outcomes (seizure control, developmental delay) in patients with a genetic disorder but does not report changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters of pyridoxine itself. |
| popPK | Tsuji_1967 | irrelevant | 0 | 0 | The paper describes a microbiological assay method for pyridoxine and does not report any pharmacokinetic parameters. |
| PD | Tsuji_1967 | not_relevant | 0 | 0 | The paper describes a microbiological bioassay for quantifying pyridoxine concentration in samples, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | Uckun_2020 | irrelevant | 0 | 0 | The study explicitly states that PK parameters were not calculated for pyridoxine hydrochloride, which is only a component of the multi-drug formulation RJX. |
| PD | Uckun_2020 | not_relevant | 2 | 1 | The paper reports a dose-response relationship for the multi-ingredient formulation Rejuveinix (RJX) in a mouse model, but it does not provide specific pharmacodynamic parameters (e.g., EC50, Emax) for Pyridoxine alone, nor does it link specific Pyridoxine concentrations to effects. |
| popPK | Underwood_1990 | irrelevant | 0 | 0 | The paper is a review discussing the utility of dose-response tests for nutritional status and does not report any quantitative pharmacokinetic parameters for pyridoxine. |
| PD | Underwood_1990 | not_relevant | 1 | 0 | The text is a qualitative review discussing the utility of dose-response tests for pyridoxine in field surveys but provides no numeric PD parameters, concentration-effect curves, or specific model fits. |
| PGx | Valverde-Megías_2017 | not_relevant | 2 | 5 | The drug is ranibizumab, not pyridoxine, and the study analyzes a pharmacodynamic/clinical outcome (number of injections) rather than a PK parameter. |
| popPK | Velásquez_2018 | irrelevant | 0 | 0 | The study focuses on rifampin pharmacokinetics and efficacy in tuberculosis, not pyridoxine. |
| PD | Velásquez_2018 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship for Rifampin, not Pyridoxine. |
| popPK | Vinks_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of morphine, not pyridoxine. |
| PD | Vinks_2020 | not_relevant | 0 | 0 | The paper focuses on morphine PK/PD in neonates and does not mention pyridoxine or report any PD parameters for it. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for delamanid, while pyridoxine is only listed as a co-administered drug that did not affect delamanid exposure. |
| PD | Wang_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) analysis of delamanid, not pyridoxine, and contains no pharmacodynamic or exposure-response modeling. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic analysis of delamanid and explicitly states that pyridoxine co-administration did not affect exposure, containing no pharmacogenomic data for pyridoxine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study evaluates the anatomical response to conbercept (an anti-VEGF agent) in ophthalmology patients and contains no pharmacokinetic data for pyridoxine. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper studies the anti-VEGF agent conbercept, not pyridoxine, and reports clinical response correlations rather than pharmacodynamic parameters. |
| PGx | Wasim_2022 | not_relevant | 0 | 0 | The paper identifies genetic mutations causing a metabolic disorder and reports clinical improvements after treatment, but it does not report specific pharmacokinetic or pharmacodynamic parameters (e.g., clearance, half-life, homocysteine reduction magnitude) linked to specific pyridoxine pharmacogenomic effects. |
| PGx | Watts_1992 | not_relevant | 6 | 2 | The paper investigates the genetic heterogeneity of AGT deficiency in primary hyperoxaluria and its qualitative association with pyridoxine responsiveness, but it does not report specific quantitative pharmacokinetic or pharmacodynamic parameters of pyridoxine. |
| popPK | Weld_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dolutegravir, not pyridoxine. |
| PD | Weld_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dolutegravir and safety of co-administration with rifapentine/isoniazid; it does not report any pharmacodynamic or exposure-response analysis for pyridoxine. |
| popPK | Whyte_2021 | irrelevant | 0 | 0 | The paper is a clinical case report on vitamin B6 deficiency and hypophosphatasia, reporting plasma concentrations of metabolites rather than pharmacokinetic disposition parameters (CL, V, ka) for pyridoxine. |
| PD | Whyte_2021 | not_relevant | 0 | 0 | The paper describes a case report of vitamin B6 deficiency in a patient with hypophosphatasia and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for pyridoxine. |
| popPK | Wiernik_1992 | irrelevant | 0 | 0 | This is a clinical oncology trial where pyridoxine is used as a co-administered agent to reduce neurotoxicity, and no pharmacokinetic parameters are reported. |
| PD | Wiernik_1992 | not_relevant | 1 | 0 | The paper reports clinical outcomes and qualitative effects of pyridoxine on neurotoxicity and response duration, but provides no numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for pyridoxine. |
| popPK | Xie_2014 | irrelevant | 0 | 0 | The study is a nutritional requirement trial in ducks measuring growth and biomarkers, not a pharmacokinetic study, and reports no PK parameters like clearance or volume. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The paper studies conbercept for diabetic macular edema and reports no pharmacokinetic parameters for pyridoxine. |
| popPK | Xu_2016 | irrelevant | 0 | 0 | The study reports in vitro antiviral potency (IC50/EC50) of a pyridoxine-derived inhibitor against Dengue virus, not the pharmacokinetic disposition parameters of pyridoxine itself. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on pyridoxine-resveratrol hybrids as enzyme inhibitors, reporting no pharmacokinetic parameters for pyridoxine. |
| PD | Yang_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel pyridoxine-resveratrol hybrids, not pharmacodynamic or exposure-response data for the drug Pyridoxine itself. |
| PGx | Yap_2017 | not_relevant | 2 | 5 | The paper reports genetic predictors for capecitabine-induced hand-foot syndrome (an adverse effect/PD of capecitabine), not pharmacogenomic effects on the PK or PD of pyridoxine. |
| PGx | Ying_2023 | not_relevant | 0 | 0 | The paper discusses 'pyridinoline' as a bone resorption biomarker, not the drug pyridoxine, and does not report any pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper investigates PNPO as a cancer biomarker and its association with drug sensitivity, but it does not report pharmacokinetic or pharmacodynamic parameters of pyridoxine itself. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The paper mentions pyridoxine supplementation for genetic epilepsies but does not report pharmacogenomic effects on specific PK/PD parameters. |
| PGx | unknown_2026 | not_relevant | 0 | 0 | The paper is a clinical guideline regarding off-label use of anti-tuberculosis drugs; while it mentions pyridoxine co-administration and NAT2 genotyping for isoniazid, it does not report any pharmacogenomic effect on a PK or PD parameter of pyridoxine itself. |
| PGx | van_2002 | not_relevant | 0 | 0 | The paper discusses homocysteine metabolism and MTHFR genotype effects on homocysteine, but does not report a pharmacogenomic effect on the PK or PD parameters of pyridoxine itself. |
| PGx | van_2004 | not_relevant | 2 | 0 | The paper reports a genotype-phenotype association regarding clinical responsiveness to pyridoxine, but it does not measure or report specific pharmacokinetic or pharmacodynamic parameters. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levofloxacin, not pyridoxine. |
| PD | van_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of levofloxacin and does not report any pharmacodynamic (PD) or exposure-response relationships for pyridoxine or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
