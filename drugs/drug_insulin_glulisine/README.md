<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glulisine&quot;}]"></div>

# insulin glulisine

- **generic name:** insulin glulisine
- **ATC codes:** `A10AB06`
- **DrugBank:** [DB01309](https://go.drugbank.com/drugs/DB01309) · **PubChem:** not captured
- **groups:** approved

## About

Insulin glulisine is a fast-acting insulin analogue used to treat diabetes, particularly type-1 diabetes. It is an approved anti-diabetic medicine authorised in the European Union for diabetes mellitus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6042242](https://www.wikidata.org/wiki/Q6042242) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=insulin_glulisine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IGF1R (activator), INSR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:13 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 58,280/1,268 | einfracz / qwen3.8-27b | 5 | 1/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 40 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arnolds_2010.pdf` | Arnolds S et al., Insulin glulisine has a faster onset of…, Experimental and clinical e… (2010) | popPK | 7 | [10.1055/s-0030-1252067](https://doi.org/10.1055/s-0030-1252067) | [20429049](https://pubmed.ncbi.nlm.nih.gov/20429049) | The study reports comparative PK/PD parameters (onset, absorption timing) for insulin glulisine in humans, but specific quantitative disposition parameters like clearance or volume are not explicitly listed in the provided text. |
| `Koksharova_2024.pdf` | Koksharova E et al., Clinical Pharmacology of GP40321 (Insul…, Clinical pharmacology in dr… (2024) | popPK | 7 | [10.1002/cpdd.1401](https://doi.org/10.1002/cpdd.1401) | [38515279](https://pubmed.ncbi.nlm.nih.gov/38515279) | The study reports a pharmacokinetic comparability study for insulin glulisine (biosimilar), but the evidence provided is limited to the abstract which summarizes the conclusion (90% CI within limits) without listing the specific numeric PK parameters (e.g., Cmax, AUC, clearance, half-life) or the ratio values themselves. |
| `Ciaraldi_2005.pdf` | Ciaraldi TP et al., Effects of the rapid-acting insulin ana…, The Journal of clinical end… (2005) | pd | 5 | [10.1210/jc.2005-1007](https://doi.org/10.1210/jc.2005-1007) | [16030168](https://www.ncbi.nlm.nih.gov/pubmed/16030168) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:13:15.924739+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnolds_2010 | relevant | 7 | 3 | The study reports comparative PK/PD parameters (onset, absorption timing) for insulin glulisine in humans, but specific quantitative disposition parameters like clearance or volume are not explicitly listed in the provided text. |
| popPK | Atkin_2015 | irrelevant | 1 | 0 | The paper is a review focused on insulin degludec and aspart, mentioning insulin glulisine only as a comparator with no quantitative PK parameters (CL, V, ka) reported for it. |
| PD | Atkin_2015 | not_relevant | 1 | 0 | The paper is a narrative review comparing insulin degludec and aspart; it provides qualitative PK/PD descriptions and clinical trial efficacy data but does not report numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for insulin glulisine. |
| popPK | Barnett_2006 | irrelevant | 1 | 0 | The paper is a review discussing the impact of obesity on rapid-acting insulins and does not report original quantitative pharmacokinetic parameter values for insulin glulisine. |
| PD | Barnett_2006 | not_relevant | 1 | 0 | The text is a review introduction that qualitatively discusses the impact of obesity on rapid-acting insulins but does not present any specific numeric PD parameters, concentration-effect curves, or model fits for insulin glulisine. |
| popPK | Becker_2005 | irrelevant | 2 | 0 | The study reports steady-state pharmacokinetics and pharmacodynamics (glucose utilization) but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for insulin glulisine. |
| popPK | Becker_2005_2 | irrelevant | 2 | 0 | The study reports pharmacokinetic descriptors (tmax, MRT) but lacks quantitative compartmental parameters (CL, V, ka) and specific numeric values are not present in the evidence. |
| popPK | Becker_2007 | irrelevant | 1 | 0 | The paper is a review of structure and activity without original quantitative pharmacokinetic parameter values for insulin glulisine. |
| PD | Becker_2007 | not_relevant | 1 | 0 | The text is a qualitative review summary describing the general pharmacokinetic and pharmacodynamic properties of insulin glulisine without providing specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Becker_2007_2 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Becker_2008 | irrelevant | 2 | 0 | The text is a qualitative review of insulin glulisine's pharmacokinetics without specific quantitative disposition parameters (CL, V, Q, ka) or compartmental model values. |
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
| popPK | Heise_2009 | irrelevant | 0 | 0 | The study focuses on biphasic insulin aspart 30/70 (BIAsp 30) as the subject drug, while insulin glulisine is only a comparator component in the basal-bolus therapy arm. |
| PD | Heise_2009 | not_relevant | 0 | 0 | The paper focuses on biphasic insulin aspart 30/70, not insulin glulisine, and does not report PD parameters for the target drug. |
| popPK | Helms_2009 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic properties and clinical efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Helms_2009 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical efficacy and safety, lacking specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or detailed exposure-response modeling data. |
| popPK | Home_2012 | irrelevant | 2 | 0 | The paper is a narrative review of clinical consequences and efficacy comparisons without reporting original quantitative population pharmacokinetic parameter values (CL, V, ka) for insulin glulisine. |
| PD | Home_2012 | not_relevant | 2 | 0 | The text is a qualitative review summarizing clinical outcomes and general PK/PD profiles without providing specific numeric PD parameters or extractable concentration-effect curves for insulin glulisine. |
| popPK | Kiss_2014 | irrelevant | 0 | 0 | The study investigates insulin degludec, not insulin glulisine, which is the target drug for this extraction. |
| PD | Kiss_2014 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, CL/F) for insulin degludec in renal impairment but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters. |
| popPK | Koksharova_2024 | relevant | 7 | 0 | The study reports a pharmacokinetic comparability study for insulin glulisine (biosimilar), but the evidence provided is limited to the abstract which summarizes the conclusion (90% CI within limits) without listing the specific numeric PK parameters (e.g., Cmax, AUC, clearance, half-life) or the ratio values themselves. |
| popPK | Lamos_2016 | relevant | 5 | 4 | The study reports non-compartmental PK parameters (AUC, Tmax, Cmax) for insulin glulisine in humans, but lacks compartmental parameters like CL, V, or ka. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical trials assessing efficacy and safety (HbA1c, hypoglycemia) in diabetes and CKD, containing no pharmacokinetic or pharmacodynamic parameter estimates (CL, V, etc.) for insulin glulisine. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, nor any numeric exposure-response or dose-response parameters for insulin glulisine. |
| popPK | McCarty_2017 | irrelevant | 0 | 0 | The paper is a review of lixisenatide, where insulin glulisine is mentioned only as a comparator agent without any reported pharmacokinetic parameters for it. |
| popPK | Presas_2018 | irrelevant | 2 | 0 | The study focuses on nanoparticle formulation and reports only relative bioavailability and pharmacodynamic effects, lacking quantitative compartmental PK parameters (CL, V, ka) for insulin glulisine. |
| PD | Presas_2018 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (blood glucose decrease) and relative bioavailability, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response model. |
| popPK | Roach_2008 | irrelevant | 0 | 0 | The paper is a review discussing clinical considerations and general profiles without reporting specific quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Roach_2008 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical characteristics and comparisons of insulin analogues without providing specific numeric PD parameters or exposure-response data for insulin glulisine. |
| popPK | Sokolov_2023 | relevant | 9 | 2 | The study develops a de novo one-compartment pharmacokinetic model for insulin glulisine in humans, but the specific numeric parameter values are reported in Table S1 (supplementary material) which is not provided in the evidence. |
| PD | Sokolov_2023 | not_relevant | 0 | 0 | The paper focuses on a mechanistic model for dapagliflozin in T1DM; insulin glulisine is only included as a PK component for simulation, with no reported PD or exposure-response analysis for glulisine. |
| popPK | Tibaldi_2012 | irrelevant | 0 | 0 | The paper is a narrative review of insulin development history and does not report original quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Tibaldi_2012 | not_relevant | 1 | 0 | The paper is a narrative review of the history of insulin development and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for insulin glulisine. |
| popPK | Tibaldi_2014 | irrelevant | 2 | 0 | The paper is a narrative review of insulin evolution that discusses insulin glulisine qualitatively as a comparator class but provides no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for insulin glulisine. |
| PD | Tibaldi_2014 | not_relevant | 1 | 0 | The text is a general review of insulin evolution and clinical outcomes, lacking specific numeric pharmacodynamic parameters or exposure-response models for insulin glulisine. |
| popPK | Tonneijck_2017 | irrelevant | 1 | 0 | The study is a renal hemodynamic trial where insulin glulisine is used as an active comparator, and no pharmacokinetic parameters (CL, V, t1/2) are reported. |
| popPK | Tonneijck_2018 | irrelevant | 0 | 0 | The study focuses on the effects of GLP-1 receptor agonists on uric acid kinetics, with insulin glulisine serving only as a comparator drug in one sub-study, and no PK parameters for insulin glulisine are reported. |
| popPK | Zarini-Gakiye_2020 | irrelevant | 0 | 0 | The paper is a narrative review of Alzheimer's disease clinical trials and does not report any pharmacokinetic parameters for insulin glulisine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
