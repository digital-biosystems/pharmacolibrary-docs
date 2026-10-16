<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;metreleptin&quot;}]"></div>

# metreleptin

- **generic name:** metreleptin
- **ATC codes:** `A16AA07`
- **DrugBank:** [DB09046](https://go.drugbank.com/drugs/DB09046) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Metreleptin is a protein drug used to treat lipodystrophy, including acquired and familial partial forms. It is authorised in the European Union, but carries a boxed warning, so its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17143468](https://www.wikidata.org/wiki/Q17143468) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:27 | 1:07 | 0/1/0 | 0/0/0 | 0/0/0 | 125,558/4,165 | einfracz / qwen3.8-27b | 11 | 2/6 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wong_2004_reference](drugs/drug_metreleptin/Metreleptin_Wong2004_reference.md) | — | 1-compartment (no model) | 3 | Wong SL et al., Leptin hormonal kinetics in the fed sta…, The Journal of clinical end… (2004) | [10.1210/jc.2003-031931](https://doi.org/10.1210/jc.2003-031931) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=metreleptin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: LEPR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 31 returned
- **screened:** 7  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chan_2007.pdf` | Chan JL et al., Pharmacokinetics of recombinant methion…, The Journal of clinical end… (2007) | popPK | 10 | [10.1210/jc.2006-2864](https://doi.org/10.1210/jc.2006-2864) | [17405837](https://pubmed.ncbi.nlm.nih.gov/17405837) | The study reports quantitative pharmacokinetic parameters (half-life, clearance) for human leptin (the subject drug, often referred to as metreleptin in this context or the specific analog studied) in humans, with key values like half-life (~3h) and qualitative significance of clearance present in the abstract. |
| `Wong_2004.pdf` | Wong SL et al., Leptin hormonal kinetics in the fed sta…, The Journal of clinical end… (2004) | popPK | 10 | [10.1210/jc.2003-031931](https://doi.org/10.1210/jc.2003-031931) | [15181040](https://pubmed.ncbi.nlm.nih.gov/15181040) | The abstract explicitly reports numeric values for clearance, volume of distribution, and half-life for metreleptin (r-metHuLeptin) in human subjects. |
| `Chan_2008.pdf` | Chan JL et al., Pharmacokinetics of subcutaneous recomb…, Clinical pharmacokinetics (2008) | popPK | 5 | [10.2165/00003088-200847110-00006](https://doi.org/10.2165/00003088-200847110-00006) | [18840030](https://pubmed.ncbi.nlm.nih.gov/18840030) | The study reports qualitative PK trends (increased clearance, decreased AUC) and concentration ranges, but lacks specific numeric values for CL, V, or ka in the provided text. |

<sub>queue written 2026-10-15T03:26:28.836568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Araújo-Vilar_2018 | not_relevant | 2 | 1 | The paper is a single-patient case report describing clinical improvement and in vitro transcript reduction, but it does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for metreleptin. |
| PD | Aronis_2011 | not_relevant | 2 | 1 | The study reports a null result (no significant change in angiogenic factors) and uses ANOVA/regression rather than fitting a pharmacodynamic model; no numeric PD parameters (Emax, EC50, etc.) are reported or derivable. |
| popPK | Babalola_2022 | irrelevant | 0 | 0 | This is a case report focusing on the treatment of hypertriglyceridemia with icosapent ethyl, and metreleptin is mentioned only as an unavailable first-line therapy with no pharmacokinetic data provided. |
| popPK | Baykal_2020 | irrelevant | 0 | 0 | The study measures de novo lipogenesis and metabolic effects, not pharmacokinetic disposition parameters (CL, V, etc.) for metreleptin. |
| PD | Beghini_2021 | not_relevant | 3 | 2 | The study reports clinical changes in IGF1 and growth after a fixed dose of metreleptin but does not provide drug concentration data or fit a pharmacodynamic model, so no exposure-response or dose-response parameters (Emax, EC50, etc.) can be derived. |
| PGx | Besci_2023 | not_relevant | 3 | 2 | The study reports clinical outcomes (BMI, loss of efficacy due to antibodies) in LEP/LEPR deficiency, but does not analyze how specific gene variants alter the pharmacokinetic or pharmacodynamic parameters of metreleptin. |
| popPK | Chan_2008 | irrelevant | 5 | 2 | The study reports qualitative PK trends (increased clearance, decreased AUC) and concentration ranges, but lacks specific numeric values for CL, V, or ka in the provided text. |
| popPK | Chan_2016 | irrelevant | 0 | 0 | The study focuses on immunogenicity (antibody development) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Chan_2016 | not_relevant | 0 | 0 | The paper focuses on immunogenicity (antibody development and neutralizing activity) and does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters for metreleptin. |
| PD | Choi_2015 | not_relevant | 3 | 1 | The paper describes qualitative dose- and time-dependent activation of signaling pathways in vitro but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect curves. |
| popPK | Dos_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the use of empagliflozin for diabetes management, where metreleptin is only mentioned as a previous adjunctive therapy without any pharmacokinetic data or models. |
| PGx | Gyani_2026 | not_relevant | 0 | 0 | The paper is a case series describing clinical features of congenital lipodystrophy and notes the unavailability of metreleptin, reporting no pharmacokinetic or pharmacodynamic data for the drug. |
| popPK | Kinzer_2019 | irrelevant | 0 | 0 | The study reports lipoprotein particle changes and lipid profiles, not quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for metreleptin. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study assesses clinical outcomes (proteinuria, eGFR) rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for metreleptin. |
| popPK | Levenson_2016 | irrelevant | 0 | 0 | The study investigates the effect of leptin replacement on PCSK9 and lipid profiles, reporting no pharmacokinetic parameters (clearance, volume, half-life) for metreleptin. |
| PD | Li_2015 | not_relevant | 1 | 0 | The paper describes qualitative electrophysiological and behavioral effects of amylin and leptin in vitro and in vivo, but does not report any numeric concentration-effect or dose-response parameters for metreleptin. |
| PGx | Melzer_2021 | not_relevant | 2 | 8 | The paper describes a specific patient's clinical response to metreleptin, but it does not quantify PK/PD parameters (like AUC, half-life, or specific receptor affinity) altered by the PPARG variant to establish a pharmacogenomic effect on the drug's pharmacokinetics or pharmacodynamics in a population sense. |
| PD | Moon_2011 | not_relevant | 3 | 2 | The paper reports a qualitative saturation point (~50 ng/mL) for signaling pathways but lacks a formal dose-response curve, Emax/EC50 parameters, or PK/PD modeling for the clinical efficacy endpoints. |
| popPK | Morath_2025 | irrelevant | 0 | 0 | The study evaluates a novel PASylated leptin candidate in mice, not the FDA-approved drug metreleptin, which is only mentioned as the current standard. |
| PD | Morath_2025 | not_relevant | 1 | 0 | The paper reports PK parameters (half-life) and qualitative efficacy (phenotype reversal) but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve for metreleptin. |
| popPK | Muniyappa_2017 | irrelevant | 0 | 0 | The study measures biomarker levels (ANGPTL3/4) rather than reporting quantitative pharmacokinetic disposition parameters (clearance, volume, etc.) for metreleptin. |
| popPK | Tchang_2015 | irrelevant | 1 | 0 | The paper is a review discussing efficacy and therapeutic perspectives without reporting original quantitative PK parameter values. |
| popPK | Van_2026 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on therapeutic outcomes and safety over 20 years, with no reporting of quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| PD | Wagner_2025 | not_relevant | 0 | 0 | The paper focuses on Neuregulin 4 (NRG4) in lipodystrophy and only qualitatively mentions metreleptin therapy without providing any exposure-response data, dose-response curves, or numeric PD parameters for metreleptin. |
| popPK | Younk_2011 | irrelevant | 0 | 0 | The paper is a review of pramlintide (amylin analog) and only briefly mentions metreleptin in the context of weight loss efficacy, without reporting any quantitative pharmacokinetic disposition parameters for metreleptin. |
| PD | Younk_2011 | not_relevant | 1 | 0 | The paper is a review of pramlintide and only qualitatively mentions metreleptin in the context of weight loss studies without providing any numeric PD parameters or exposure-response data. |
| PD | von_2024 | not_relevant | 1 | 0 | The paper is a classification of congenital leptin deficiency variants and discusses qualitative treatment approaches (starting doses) for metreleptin, but it does not report any numeric pharmacodynamic parameters, exposure-response curves, or dose-effect data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:26 UTC</sub>
