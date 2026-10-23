<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;metreleptin&quot;}]"></div>

# metreleptin

- **generic name:** metreleptin
- **ATC codes:** `A16AA07`
- **DrugBank:** [DB09046](https://go.drugbank.com/drugs/DB09046) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Metreleptin is a protein drug used to treat lipodystrophy, including acquired and familial partial forms. It is authorised in the European Union, but carries a boxed warning, so its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17143468](https://www.wikidata.org/wiki/Q17143468) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Wong_2004_reference](drugs/drug_metreleptin/Metreleptin_Wong2004_reference.md) | — | 1-compartment (no model) | 3 | Wong SL et al., Leptin hormonal kinetics in the fed sta…, The Journal of clinical end… (2004) | [10.1210/jc.2003-031931](https://doi.org/10.1210/jc.2003-031931) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=metreleptin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: LEPR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:47 | 4:06 | 0/1/0 | 0/0/0 | 0/0/0 | 117,418/6,766 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 31 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chan_2007.pdf` | Chan JL et al., Pharmacokinetics of recombinant methion…, The Journal of clinical end… (2007) | popPK | 10 | [10.1210/jc.2006-2864](https://doi.org/10.1210/jc.2006-2864) | [17405837](https://pubmed.ncbi.nlm.nih.gov/17405837) | The study reports pharmacokinetic parameters for recombinant human leptin (metreleptin) in humans, but the specific numeric values for clearance and volume are not present in the provided abstract text, only qualitative descriptions and half-life. |
| `Wong_2004.pdf` | Wong SL et al., Leptin hormonal kinetics in the fed sta…, The Journal of clinical end… (2004) | popPK | 10 | [10.1210/jc.2003-031931](https://doi.org/10.1210/jc.2003-031931) | [15181040](https://pubmed.ncbi.nlm.nih.gov/15181040) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for metreleptin (r-metHuLeptin) in human subjects. |
| `Chan_2008.pdf` | Chan JL et al., Pharmacokinetics of subcutaneous recomb…, Clinical pharmacokinetics (2008) | popPK | 9 | [10.2165/00003088-200847110-00006](https://doi.org/10.2165/00003088-200847110-00006) | [18840030](https://pubmed.ncbi.nlm.nih.gov/18840030) | The study reports quantitative PK parameters (clearance, AUC, Cmax) for recombinant human leptin (the parent of metreleptin) in humans, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only trends and concentration ranges. |

<sub>queue written 2026-10-05T11:44:28.705054+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Araújo-Vilar_2018 | not_relevant | 2 | 1 | The paper is a single-patient case report describing clinical improvement and in vitro transcript reduction, but it does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for metreleptin. |
| PD | Aronis_2011 | not_relevant | 2 | 1 | The study reports a null result (no significant change in angiogenic factors) and uses ANOVA/regression rather than fitting a pharmacodynamic model; no numeric PD parameters (Emax, EC50, etc.) are reported or derivable. |
| popPK | Babalola_2022 | irrelevant | 0 | 0 | The paper is a case report on the treatment of hypertriglyceridemia with icosapent ethyl, and metreleptin is only mentioned as an unavailable first-line therapy without any pharmacokinetic data. |
| popPK | Baykal_2020 | irrelevant | 0 | 0 | The study investigates the metabolic effects of metreleptin on de novo lipogenesis and insulin sensitivity in lipodystrophy patients, but does not report pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| PD | Beghini_2021 | not_relevant | 3 | 2 | The study reports clinical changes in IGF1 and growth after a fixed dose of metreleptin but does not provide drug concentration data or fit a pharmacodynamic model, so no exposure-response or dose-response parameters (Emax, EC50, etc.) can be derived. |
| PGx | Besci_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes and genotype-phenotype correlations for leptin deficiency, but does not report pharmacokinetic or pharmacodynamic parameters of metreleptin influenced by specific gene variants. |
| popPK | Chan_2007 | relevant | 10 | 2 | The study reports pharmacokinetic parameters for recombinant human leptin (metreleptin) in humans, but the specific numeric values for clearance and volume are not present in the provided abstract text, only qualitative descriptions and half-life. |
| popPK | Chan_2008 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance, AUC, Cmax) for recombinant human leptin (the parent of metreleptin) in humans, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only trends and concentration ranges. |
| popPK | Chan_2016 | irrelevant | 0 | 0 | The study focuses on immunogenicity (antibody development) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Chan_2016 | not_relevant | 0 | 0 | The paper focuses on immunogenicity (antibody development and neutralizing activity) and does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters for metreleptin. |
| PD | Choi_2015 | not_relevant | 3 | 1 | The paper describes qualitative dose- and time-dependent activation of signaling pathways in vitro but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect curves. |
| popPK | Dos_2021 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on the use of empagliflozin, and metreleptin is only mentioned as a previously used adjunct therapy without any pharmacokinetic data. |
| PGx | Gyani_2026 | not_relevant | 0 | 0 | The paper is a clinical case series describing the diagnosis of congenital lipodystrophy and notes that metreleptin was unavailable, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Kinzer_2019 | irrelevant | 0 | 0 | The study focuses on lipoprotein profiles and lipid metabolism, not pharmacokinetic parameters (CL, V, t1/2) of metreleptin. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study reports clinical outcomes (proteinuria, eGFR) rather than pharmacokinetic parameters (CL, V, t1/2) for metreleptin. |
| popPK | Levenson_2016 | irrelevant | 0 | 0 | The study investigates the effect of metreleptin on PCSK9 and lipid levels (pharmacodynamics), not its pharmacokinetic disposition parameters. |
| PD | Li_2015 | not_relevant | 1 | 0 | The paper describes qualitative electrophysiological and behavioral effects of amylin and leptin in vitro and in vivo, but does not report any numeric concentration-effect or dose-response parameters for metreleptin. |
| PGx | Melzer_2021 | not_relevant | 2 | 5 | The paper reports a clinical response to metreleptin in a patient with a PPARG variant, but it does not analyze the pharmacokinetic or pharmacodynamic parameters of the drug itself as a function of the genotype (i.e., it is a case report of efficacy, not a pharmacogenomic study of drug handling). |
| PD | Moon_2011 | not_relevant | 3 | 2 | The paper reports a qualitative saturation point (~50 ng/mL) for signaling pathways but lacks a formal dose-response curve, Emax/EC50 parameters, or PK/PD modeling for the clinical efficacy endpoints. |
| popPK | Morath_2025 | irrelevant | 1 | 0 | The study focuses on a novel PASylated leptin candidate in mice, not the pharmacokinetics of the approved drug metreleptin. |
| PD | Morath_2025 | not_relevant | 1 | 0 | The paper reports PK parameters (half-life) and qualitative efficacy (phenotype reversal) but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve for metreleptin. |
| popPK | Muniyappa_2017 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects on angiopoietin-like protein 3 levels, not pharmacokinetic parameters for metreleptin. |
| PGx | Semple_2023 | not_relevant | 2 | 5 | The paper reports clinical efficacy (HbA1c, triglycerides) stratified by genotype, but does not report pharmacokinetic parameters or pharmacodynamic parameters of the drug itself (e.g., receptor binding, clearance). |
| PGx | Semple_2023_2 | not_relevant | 2 | 5 | The paper reports clinical efficacy (PD outcomes like A1c and triglycerides) stratified by disease genotype, but does not report pharmacokinetic parameters or pharmacogenomic effects on drug exposure. |
| popPK | Tchang_2015 | irrelevant | 1 | 0 | This is a review article discussing therapeutic perspectives and clinical trials without reporting original quantitative pharmacokinetic parameter values. |
| popPK | Van_2026 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on long-term metabolic outcomes, safety, and pregnancy management, and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for metreleptin. |
| PD | Wagner_2025 | not_relevant | 0 | 0 | The paper focuses on Neuregulin 4 (NRG4) in lipodystrophy and only qualitatively mentions metreleptin therapy without providing any exposure-response data, dose-response curves, or numeric PD parameters for metreleptin. |
| popPK | Younk_2011 | irrelevant | 0 | 0 | The paper is a review of pramlintide, and metreleptin is only mentioned as a co-administered agent in a brief discussion of weight loss studies, with no PK parameters reported. |
| PD | Younk_2011 | not_relevant | 1 | 0 | The paper is a review of pramlintide and only qualitatively mentions metreleptin in the context of weight loss studies without providing any numeric PD parameters or exposure-response data. |
| PD | von_2024 | not_relevant | 1 | 0 | The paper is a classification of congenital leptin deficiency variants and discusses qualitative treatment approaches (starting doses) for metreleptin, but it does not report any numeric pharmacodynamic parameters, exposure-response curves, or dose-effect data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 11:44 UTC</sub>
