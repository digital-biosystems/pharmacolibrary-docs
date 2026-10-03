<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;pramlintide&quot;}]"></div>

# pramlintide

- **generic name:** pramlintide
- **ATC codes:** `A10BX05`
- **DrugBank:** [DB01278](https://go.drugbank.com/drugs/DB01278) · **PubChem:** not captured
- **molar mass:** 3949.44 g/mol (C171H267N51O53S2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Pramlintide is a relatively new adjunct treatment for diabetes (both type 1 and 2), developed by Amylin Pharmaceuticals. It is derived from amylin, a hormone that is released into the bloodstream, in a similar pattern as insulin, after a meal. Like insulin, amylin is deficient in individuals with diabetes.

**Indication.** For the treatment of type 1 and type 2 diabetes mellitus as an adjunct to preprandial insulin therapy in patients without adequate glycemic control of insulin therapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 18:50 | 5:12 | 0/0/0 | 3/2/0 | 0/0/0 | 168,206/5,148 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/3 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Al-Keilani_2018_cell_viability](drugs/drug_pramlintide/pd_Al_Keilani_2018_cell_viability.md) | cell viability ← pramlintide · direct Emax (saturable) effect | — | Al-Keilani MS et al., Pramlintide, an antidiabetic, is antine…, Clinical pharmacology : adv… (2018) | [10.2147/CPAA.S153780](https://doi.org/10.2147/CPAA.S153780) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Fang_2013_EGP](drugs/drug_pramlintide/pd_Fang_2013_EGP.md) | endogenous glucose production ← pramlintide · direct sigmoid Emax (Hill) effect | — | Fang J et al., Study reanalysis using a mechanism-base…, The AAPS journal (2013) | [10.1208/s12248-012-9409-7](https://doi.org/10.1208/s12248-012-9409-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ramkissoon_2014_glucose](drugs/drug_pramlintide/pd_Ramkissoon_2014_glucose.md) | glucose ← pramlintide · inhibition effect | — | Ramkissoon CM et al., A model of glucose-insulin-pramlintide…, Journal of diabetes science… (2014) | [10.1177/1932296813517323](https://doi.org/10.1177/1932296813517323) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Furió-Novejarque_2024_Ra](drugs/drug_pramlintide/pd_Furi_Novejarque_2024_Ra.md) | glucose rate of appearance ← pramlintide · direct sigmoid Emax (Hill) effect | — | Furió-Novejarque C et al., A model of subcutaneous pramlintide pha…, Computer methods and progra… (2024) | [10.1016/j.cmpb.2023.107968](https://doi.org/10.1016/j.cmpb.2023.107968) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Pons_2025_k_empt](drugs/drug_pramlintide/pd_Pons_2025_k_empt.md) | gastric emptying rate ← pramlintide · direct sigmoid Emax (Hill) effect | — | Pons Torres B et al., In silico evaluation of pramlintide dos…, Computers in biology and me… (2025) | [10.1016/j.compbiomed.2025.110447](https://doi.org/10.1016/j.compbiomed.2025.110447) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pramlintide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…Metabolized primarily by the kidneys.…”</sub> | prose |
| excretion | kidney | <sub>“…metabolized primarily by the kidneys…”</sub> | prose |

<sub>Actors without a tissue in the table: CALCR (target), GLP1R (target), RAMP1 (target), RAMP2 (target), RAMP3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 32 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fang_2013.pdf` | Fang J et al., Study reanalysis using a mechanism-base…, The AAPS journal (2013) | popPK | 10 | [10.1208/s12248-012-9409-7](https://doi.org/10.1208/s12248-012-9409-7) | [23054970](https://pubmed.ncbi.nlm.nih.gov/23054970) | The study describes a population PK model for pramlintide in humans, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only PD parameters (IC50, Imax). |
| `Ramkissoon_2014.pdf` | Ramkissoon CM et al., A model of glucose-insulin-pramlintide…, Journal of diabetes science… (2014) | popPK | 9 | [10.1177/1932296813517323](https://doi.org/10.1177/1932296813517323) | [24876617](https://pubmed.ncbi.nlm.nih.gov/24876617) | The paper describes a pharmacokinetic model for pramlintide in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not listed in the provided abstract, only RMSE values. |
| `Weyer_2005.pdf` | Weyer C et al., Properties of pramlintide and insulin u…, American journal of health-… (2005) | popPK | 8 | [10.1093/ajhp/62.8.816](https://doi.org/10.1093/ajhp/62.8.816) | [15821274](https://pubmed.ncbi.nlm.nih.gov/15821274) | The study reports pramlintide pharmacokinetics (AUC, Cmax) in humans, but specific numeric values are not provided in the text evidence. |

<sub>queue written 2026-10-03T18:48:30.301709+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Keilani_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pramlintide's antineoplastic effects and does not report pharmacokinetic disposition parameters. |
| popPK | Almeida_2025 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects (food intake, gastric emptying) and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for pramlintide. |
| popPK | Andersen_2021 | irrelevant | 2 | 0 | The study reports pharmacokinetic endpoints for pramlintide but the provided evidence contains only pharmacodynamic results (blood glucose) and no quantitative PK parameter values (CL, V, t1/2, etc.). |
| PD | Andersen_2021 | not_relevant | 2 | 1 | The paper reports comparative pharmacodynamic endpoints (blood glucose, gastric emptying) and pharmacokinetics, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for pramlintide. |
| popPK | Andersen_2023 | irrelevant | 2 | 0 | The study investigates a co-formulation (ADO09) and reports efficacy/safety outcomes, but the provided evidence contains no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for pramlintide. |
| PD | Andersen_2023 | not_relevant | 2 | 1 | The paper reports clinical efficacy and PK/PD profiles but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model in the provided text. |
| popPK | Arrigoni_2021 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics (body weight and food intake) of amylin receptor agonists NN1213 and salmon calcitonin in mice, and does not report any pharmacokinetic parameters for pramlintide. |
| PD | Arrigoni_2021 | not_relevant | 3 | 2 | The paper investigates the role of RAMPs in the efficacy of NN1213 (an amylin agonist) and salmon calcitonin, not pramlintide, and lacks numeric PD parameters or exposure-response modeling. |
| popPK | Chase_2009 | irrelevant | 4 | 2 | The study reports only basic non-compartmental PK parameters (Cmax, Tmax) and lacks the quantitative disposition parameters (CL, V, ka) or compartmental models required for population PK extraction. |
| popPK | Fang_2013 | relevant | 10 | 2 | The study describes a population PK model for pramlintide in humans, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only PD parameters (IC50, Imax). |
| popPK | Furió-Novejarque_2024 | relevant | 10 | 2 | The paper develops a compartmental PK model for pramlintide and reports a bioavailability value, but the specific clearance, volume, and rate constant values are likely in the appendix or figures not fully provided in the text. |
| popPK | George_2013 | irrelevant | 0 | 0 | This is a clinical review of non-insulin adjunct therapies for Type 1 diabetes that discusses pramlintide's efficacy but does not report any quantitative pharmacokinetic parameters. |
| PD | George_2013 | not_relevant | 1 | 0 | The text is a review article summarizing clinical trial outcomes (HbA1c, weight) without providing specific numeric pharmacodynamic parameters (Emax, EC50) or concentration-effect curves for pramlintide. |
| popPK | Kong_1998 | irrelevant | 2 | 1 | The study is a pharmacodynamic trial of gastric emptying that reports sparse plasma concentration time-points but does not derive or report quantitative PK parameters (CL, V, ka, t1/2) or a compartmental model. |
| PD | Kong_1998 | not_relevant | 0 | 0 | The provided text is a truncated introduction discussing the background of amylin and pramlintide, containing no methods, results, or numeric PD parameters. |
| PGx | Kowalczyk_2014 | not_relevant | 0 | 0 | The paper reports on the synthesis of chemical analogues and their receptor binding properties, not on the effect of human genetic variants on pramlintide pharmacokinetics or pharmacodynamics. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety for diabetes in CKD, not a pharmacokinetic study, and pramlintide is not mentioned. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, nor does it mention pramlintide. |
| popPK | Nyholm_2001 | irrelevant | 1 | 0 | This is a review article describing the physiological actions and clinical trial results of pramlintide, but it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| PD | Nyholm_2001 | not_relevant | 1 | 0 | The text is a review article describing the physiological background and clinical trial results of pramlintide, but it does not present specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves. |
| popPK | Parkinson_2019 | irrelevant | 0 | 0 | The study focuses on the exposure-response relationship of dapagliflozin, not pramlintide. |
| popPK | Pons_2025 | irrelevant | 2 | 0 | The paper is an in silico control study that implements a pramlintide PK/PD model from a previous reference [22] but does not report the numeric parameter values (CL, V, ka, etc.) in the provided text or tables. |
| popPK | Ramkissoon_2014 | relevant | 9 | 2 | The paper describes a pharmacokinetic model for pramlintide in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not listed in the provided abstract, only RMSE values. |
| popPK | Riddle_2018 | irrelevant | 0 | 0 | The study reports pharmacodynamic outcomes (glucose levels) rather than quantitative pharmacokinetic parameters (CL, V, ka) for pramlintide. |
| PD | Riddle_2018 | not_relevant | 2 | 1 | The study reports qualitative and mean differences in glucose levels between fixed-dose treatments but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Ryan_2005 | irrelevant | 2 | 0 | This is a clinical review focusing on efficacy and safety, and while it mentions pharmacokinetics, it does not provide quantitative disposition parameters (CL, V, t1/2) in the text. |
| PD | Ryan_2005 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical trial outcomes (dose ranges and mean effect reductions) but does not report a specific pharmacodynamic model, concentration-effect curve, or derived PD parameters like Emax or EC50. |
| popPK | Samsom_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of pramlintide on gastric emptying and does not report pharmacokinetic parameters such as clearance, volume, or half-life of the drug itself. |
| popPK | Schmitz_2004 | irrelevant | 1 | 0 | This is a review article that discusses pramlintide's clinical efficacy and general properties but does not report original quantitative pharmacokinetic parameter values (CL, V, etc.). |
| PD | Schmitz_2004 | not_relevant | 1 | 0 | The text is a review abstract describing the mechanism and clinical trial history of pramlintide but does not report specific numeric PD parameters or exposure-response data. |
| popPK | Sicat_2007 | irrelevant | 1 | 0 | This is a narrative review of new diabetes therapies that discusses pramlintide but does not report original quantitative pharmacokinetic parameter values. |
| PD | Sicat_2007 | not_relevant | 1 | 0 | The text is a narrative review of new diabetes therapies and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for pramlintide. |
| popPK | Singh-Franco_2007 | irrelevant | 2 | 2 | This is a clinical review article that reports only basic PK descriptors (Cmax time, t1/2) without quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| PD | Singh-Franco_2007 | not_relevant | 2 | 1 | The paper is a narrative review that summarizes clinical trial outcomes (HbA1c, weight) and qualitative pharmacodynamic effects (glucagon, gastric emptying) but does not report specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Stein_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of ZP5461 in rats, with pramlintide mentioned only as a comparator for half-life without providing quantitative PK parameters. |
| popPK | Vatsia_2025 | irrelevant | 0 | 0 | The study is a retrospective analysis of surgical outcomes (pseudarthrosis rates) and does not report any pharmacokinetic parameters for pramlintide. |
| PD | Vatsia_2025 | not_relevant | 0 | 0 | The paper is a retrospective clinical outcomes study comparing pseudarthrosis rates between patients on GLP-1 agonists (including pramlintide) and controls; it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for pramlintide. |
| popPK | Weyer_2005 | relevant | 8 | 2 | The study reports pramlintide pharmacokinetics (AUC, Cmax) in humans, but specific numeric values are not provided in the text evidence. |
| PD | Weyer_2005 | not_relevant | 1 | 0 | The paper is a bioequivalence study comparing mixed vs. separate injections, reporting only PK parameters (AUC, Cmax) and qualitative safety/PD outcomes without numeric PD parameters or concentration-effect modeling. |
| popPK | Young_2005 | irrelevant | 0 | 0 | The text describes the physiological mechanism of glucagon inhibition by amylin/pramlintide and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Young_2005 | not_relevant | 3 | 2 | The text is a physiological review that cites an EC50 value for amylin (not pramlintide) but does not report a PK/PD model, dose-response curve, or numeric PD parameters for pramlintide. |
| popPK | Younk_2011 | irrelevant | 2 | 0 | This is a narrative review of pramlintide's clinical and preclinical data, and the provided evidence contains no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Younk_2011 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical efficacy and general PK/PD properties without presenting original data, specific numeric PD parameters, or extractable concentration-effect curves. |
| PGx | Yule_2016 | not_relevant | 0 | 0 | The paper reports the synthesis and receptor activity of chemical analogues of pramlintide, not the effect of human gene variants on pramlintide pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
