<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glulisine&quot;}]"></div>

# insulin glulisine

- **generic name:** insulin glulisine
- **ATC codes:** `A10AB06`
- **DrugBank:** [DB01309](https://go.drugbank.com/drugs/DB01309) · **PubChem:** not captured
- **groups:** approved

## About

Insulin glulisine is a fast-acting insulin analogue used to treat diabetes, particularly type-1 diabetes. It is an approved anti-diabetic medicine authorised in the European Union for diabetes mellitus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6042242](https://www.wikidata.org/wiki/Q6042242) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:13 | 1:21 | 0/0/0 | 0/0/0 | 0/0/0 | 55,016/1,140 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/2 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_glulisine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IGF1R (activator), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 40 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koksharova_2024.pdf` | Koksharova E et al., Clinical Pharmacology of GP40321 (Insul…, Clinical pharmacology in dr… (2024) | popPK | 8 | [10.1002/cpdd.1401](https://doi.org/10.1002/cpdd.1401) | [38515279](https://pubmed.ncbi.nlm.nih.gov/38515279) | The study reports PK comparability for insulin glulisine, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Ciaraldi_2005.pdf` | Ciaraldi TP et al., Effects of the rapid-acting insulin ana…, The Journal of clinical end… (2005) | pd | 5 | [10.1210/jc.2005-1007](https://doi.org/10.1210/jc.2005-1007) | [16030168](https://www.ncbi.nlm.nih.gov/pubmed/16030168) | metadata signals extractable PD data (EC50) |
| `Heise_2009.pdf` | Heise T et al., Biphasic insulin aspart 30/70: pharmaco…, Diabetes care (2009) | pd | 5 | [10.2337/dc09-0097](https://doi.org/10.2337/dc09-0097) | [19487640](https://www.ncbi.nlm.nih.gov/pubmed/19487640) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-04T22:12:43.813791+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnolds_2010 | irrelevant | 2 | 0 | The study reports pharmacodynamic metrics (GIR, onset time) and qualitative absorption comparisons, but does not provide quantitative compartmental PK parameters (CL, V, ka) for insulin glulisine. |
| popPK | Atkin_2015 | irrelevant | 1 | 0 | The paper is a review focused on insulin degludec and aspart, mentioning insulin glulisine only as a comparator with no quantitative PK parameters (CL, V, ka) reported for it. |
| PD | Atkin_2015 | not_relevant | 1 | 0 | The paper is a narrative review comparing insulin degludec and aspart; it provides qualitative PK/PD descriptions and clinical trial efficacy data but does not report numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for insulin glulisine. |
| popPK | Barnett_2006 | irrelevant | 1 | 0 | The paper is a review discussing the impact of obesity on rapid-acting insulins and does not report original quantitative pharmacokinetic parameter values for insulin glulisine. |
| PD | Barnett_2006 | not_relevant | 1 | 0 | The text is a review introduction that qualitatively discusses the impact of obesity on rapid-acting insulins but does not present any specific numeric PD parameters, concentration-effect curves, or model fits for insulin glulisine. |
| popPK | Becker_2005 | irrelevant | 2 | 0 | The study reports steady-state pharmacokinetics and pharmacodynamics (glucose utilization) but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for insulin glulisine. |
| popPK | Becker_2005_2 | irrelevant | 2 | 0 | The study reports pharmacokinetic descriptors (tmax, MRT) but lacks quantitative compartmental parameters (CL, V, ka) and specific numeric values are not present in the evidence. |
| popPK | Becker_2007 | irrelevant | 1 | 0 | The paper is a review of structure and activity without original quantitative pharmacokinetic parameter values for insulin glulisine. |
| PD | Becker_2007 | not_relevant | 1 | 0 | The text is a qualitative review summary describing the general pharmacokinetic and pharmacodynamic properties of insulin glulisine without providing specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Becker_2007_2 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Becker_2008 | irrelevant | 2 | 0 | The text is a qualitative review describing the pharmacokinetic profile (e.g., "peak concentration approximately twice") without providing specific quantitative parameter values (CL, V, ka, t1/2) or compartmental model estimates. |
| PD | Becker_2008 | not_relevant | 3 | 1 | The text is a qualitative review summarizing PK/PD characteristics (dose proportionality, onset, duration) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or data points to derive a concentration-effect curve. |
| popPK | Bolli_2011 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, Tmax) for insulin glulisine, but lacks compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| popPK | Ciaraldi_2005 | irrelevant | 0 | 0 | no_text gate: only 151 chars of text extracted (&lt; 400) |
| popPK | Danne_2005 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Galli-Tsinopoulou_2012 | irrelevant | 0 | 0 | The paper is a review of insulin analogues in pediatric type 1 diabetes and does not report original quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Galli-Tsinopoulou_2012 | not_relevant | 1 | 0 | The text is a general review of insulin analogues in pediatric type 1 diabetes and does not report specific numeric pharmacodynamic parameters or exposure-response data for insulin glulisine. |
| popPK | Garg_2005 | irrelevant | 1 | 0 | The text is a qualitative review summarizing clinical efficacy and general pharmacokinetic profiles (onset, peak, duration) without reporting specific quantitative disposition parameters (CL, V, ka) or compartmental model values. |
| PD | Garg_2005 | not_relevant | 2 | 0 | The text is a qualitative review summarizing clinical outcomes and general PK/PD profiles without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Gillis_2021 | irrelevant | 0 | 0 | The paper is a structural and biophysical study (X-ray crystallography and analytical ultracentrifugation) that does not report in-vivo pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Gillis_2021 | not_relevant | 0 | 0 | The paper is a structural biology study (X-ray crystallography and biophysics) describing the molecular structure and self-association of insulin glulisine; it does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Heise_2007 | irrelevant | 2 | 0 | The study reports pharmacodynamic (GIR) and basic PK (AUC, time to 10% AUC) data but does not provide compartmental PK parameters (CL, V, ka) or population PK model estimates. |
| popPK | Heise_2009 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Heise_2009 | not_relevant | 0 | 0 | The paper focuses on biphasic insulin aspart 30/70, not insulin glulisine, and does not report PD parameters for the target drug. |
| popPK | Helms_2009 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic properties and clinical efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Helms_2009 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical efficacy and safety, lacking specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or detailed exposure-response modeling data. |
| popPK | Home_2012 | irrelevant | 1 | 0 | The paper is a narrative review of rapid-acting insulin analogues and does not report original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for insulin glulisine. |
| PD | Home_2012 | not_relevant | 2 | 0 | The text is a qualitative review summarizing clinical outcomes and general PK/PD profiles without providing specific numeric PD parameters or extractable concentration-effect curves for insulin glulisine. |
| popPK | Kiss_2014 | irrelevant | 0 | 0 | The study investigates insulin degludec, not insulin glulisine. |
| PD | Kiss_2014 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, CL/F) for insulin degludec in renal impairment but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters. |
| popPK | Koksharova_2024 | relevant | 8 | 0 | The study reports PK comparability for insulin glulisine, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Lamos_2016 | irrelevant | 2 | 1 | The study reports non-compartmental PK parameters (AUC, Tmax, Cmax) for a combination regimen of insulin glargine and insulin glulisine, but does not provide compartmental PK parameters (CL, V, Q, ka) or isolate the specific PK of insulin glulisine from the basal component. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes/CKD, not a pharmacokinetic study reporting disposition parameters for insulin glulisine. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, nor any numeric exposure-response or dose-response parameters for insulin glulisine. |
| popPK | McCarty_2017 | irrelevant | 0 | 0 | The paper is a review of lixisenatide, and insulin glulisine is only mentioned as a comparator agent without any PK parameters reported for it. |
| popPK | Presas_2018 | irrelevant | 2 | 0 | The study focuses on nanoparticle formulation and reports only relative bioavailability and pharmacodynamic effects, lacking quantitative compartmental PK parameters (CL, V, ka) for insulin glulisine. |
| PD | Presas_2018 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (blood glucose decrease) and relative bioavailability, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response model. |
| popPK | Roach_2008 | irrelevant | 0 | 0 | The paper is a review discussing clinical considerations and general profiles without reporting specific quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Roach_2008 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical characteristics and comparisons of insulin analogues without providing specific numeric PD parameters or exposure-response data for insulin glulisine. |
| popPK | Sokolov_2023 | relevant | 8 | 2 | The paper develops a one-compartment PK model for insulin glulisine, but the specific numeric parameter values are located in Table S1 (supplementary material) which is not provided in the evidence. |
| PD | Sokolov_2023 | not_relevant | 0 | 0 | The paper focuses on a mechanistic model for dapagliflozin in T1DM; insulin glulisine is only included as a PK component for simulation, with no reported PD or exposure-response analysis for glulisine. |
| popPK | Tibaldi_2012 | irrelevant | 0 | 0 | The paper is a narrative review of insulin development history and does not report original quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Tibaldi_2012 | not_relevant | 1 | 0 | The paper is a narrative review of the history of insulin development and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for insulin glulisine. |
| popPK | Tibaldi_2014 | irrelevant | 1 | 0 | The paper is a general review of insulin analogs that mentions insulin glulisine only qualitatively without providing specific quantitative pharmacokinetic parameters (CL, V, ka) for it. |
| PD | Tibaldi_2014 | not_relevant | 1 | 0 | The text is a general review of insulin evolution and clinical outcomes, lacking specific numeric pharmacodynamic parameters or exposure-response models for insulin glulisine. |
| popPK | Tonneijck_2017 | irrelevant | 0 | 0 | The study investigates renal hemodynamics and uses insulin glulisine only as an active comparator, without reporting any pharmacokinetic parameters for the drug. |
| popPK | Tonneijck_2018 | irrelevant | 0 | 0 | The study investigates the effects of GLP-1 receptor agonists on uric acid and kidney clearance, with insulin glulisine serving only as a comparator agent in one arm, and no pharmacokinetic parameters for insulin glulisine are reported. |
| popPK | Zarini-Gakiye_2020 | irrelevant | 0 | 0 | The paper is a narrative review of Alzheimer's disease clinical trials and does not report pharmacokinetic parameters for insulin glulisine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
