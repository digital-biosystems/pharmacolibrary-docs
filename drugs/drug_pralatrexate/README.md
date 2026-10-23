<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;pralatrexate&quot;}]"></div>

# pralatrexate

- **generic name:** pralatrexate
- **ATC codes:** `L01BA05`
- **DrugBank:** [DB06813](https://go.drugbank.com/drugs/DB06813) · **PubChem:** [CID 148121](https://pubchem.ncbi.nlm.nih.gov/compound/148121)
- **molar mass:** 477.4726 g/mol (C23H23N7O5) — DrugBank
- **groups:** approved, investigational

## About

Pralatrexate is an anticancer drug, a folate analogue antimetabolite, used to treat mature T-cell and NK-cell lymphoma. It is approved in the United States, but a marketing application for the European Union was refused, so it is not authorised in the EU.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q637059](https://www.wikidata.org/wiki/Q637059) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Zhang_2020_viral_copy_numbers](drugs/drug_pralatrexate/pd_Zhang_2020_viral_copy_numbers.md) | viral copy numbers biomarker turnover ← Pralatrexate | — | Zhang H et al., A novel virtual screening procedure ide…, PLoS computational biology (2020) | [10.1371/journal.pcbi.1008489](https://doi.org/10.1371/journal.pcbi.1008489) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mould_2009_mucositis](drugs/drug_pralatrexate/pd_Mould_2009_mucositis.md) | mucositis ← pralatrexate · categorical (graded) response model | — | Mould DR et al., A population pharmacokinetic and pharma…, Clinical pharmacology and t… (2009) | [10.1038/clpt.2009.80](https://doi.org/10.1038/clpt.2009.80) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pralatrexate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCC2` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | `ABCC3` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DHFR (inhibitor), DHFR (substrate), FPGS (substrate), PDF (inhibitor), SLC19A1 (substrate), SLC46A1 (substrate), TYMS (inhibitor), TYMS (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:17 | 0:27 | 0/0/0 | 2/0/0 | 0/0/0 | 83,948/1,489 | einfracz / qwen3.8-27b | 7 | 1/11 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mould_2009.pdf` | Mould DR et al., A population pharmacokinetic and pharma…, Clinical pharmacology and t… (2009) | popPK | 9 | [10.1038/clpt.2009.80](https://doi.org/10.1038/clpt.2009.80) | [19474785](https://pubmed.ncbi.nlm.nih.gov/19474785) | The paper describes a population PK study of pralatrexate identifying covariates, but the abstract does not provide specific numeric parameter estimates (CL, V, etc.), which likely reside in the full text or supplementary tables not provided. |
| `Visentin_2014.pdf` | Visentin M et al., The impact of 5-formyltetrahydrofolate…, Cancer chemotherapy and pha… (2014) | pd | 5 | [10.1007/s00280-014-2441-9](https://doi.org/10.1007/s00280-014-2441-9) | [24682532](https://www.ncbi.nlm.nih.gov/pubmed/24682532) | metadata signals extractable PD data (IC50) |
| `Malhotra_2020.pdf` | Malhotra U et al., Pralatrexate in Combination with Oxalip…, Molecular cancer therapeuti… (2020) | pgx | 5 | [10.1158/1535-7163.MCT-19-0240](https://doi.org/10.1158/1535-7163.MCT-19-0240) | [31575653](https://www.ncbi.nlm.nih.gov/pubmed/31575653) | metadata signals extractable PGX data (SLC19A1) |

<sub>queue written 2026-10-07 17:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper is an in silico/in vitro study on drug combination synergism algorithms and does not report any pharmacokinetic parameters for pralatrexate. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on machine learning for drug combination synergy prediction and does not report pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for pralatrexate. |
| PD | Garmabdari_2026 | not_relevant | 0 | 0 | The paper is an in silico computational study using machine learning and molecular dynamics to predict binding affinity and IC50, but it does not report any experimental pharmacodynamic (exposure-response or dose-response) data or numeric PD parameters for pralatrexate. |
| PGx | Grem_2015 | not_relevant | 0 | 0 | The study reports that MTHFR and TS polymorphisms did not correlate with toxicity, but it does not report pharmacokinetic or pharmacodynamic parameters, nor any effect size. |
| PD | Jain_2015 | not_relevant | 2 | 1 | The paper describes preclinical synergy and PK/PD analyses in a mouse model but does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for pralatrexate in the provided text. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper describes a machine learning model for drug-target affinity prediction and does not report pharmacokinetic parameters for pralatrexate. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-target binding affinity and does not contain any pharmacodynamic or exposure-response data for pralatrexate. |
| popPK | Kumar_2025_2 | irrelevant | 0 | 0 | The paper discusses dolutegravir for Alzheimer's disease and does not mention pralatrexate or its pharmacokinetics. |
| PD | Kumar_2025_2 | not_relevant | 0 | 0 | The paper is a computational study on drug repurposing for Alzheimer's disease targeting GSK-3β and does not mention pralatrexate or report any pharmacodynamic or exposure-response data. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy and mechanistic investigation, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for pralatrexate. |
| popPK | Maruyama_2024 | irrelevant | 0 | 0 | The study investigates valemetostat, a different drug, and contains no pharmacokinetic data for pralatrexate. |
| PD | Maruyama_2024 | not_relevant | 0 | 0 | The paper studies valemetostat, not pralatrexate, and reports only clinical efficacy (ORR) and safety without any pharmacodynamic modeling or exposure-response analysis. |
| popPK | Mould_2009 | relevant | 9 | 0 | The paper describes a population PK study of pralatrexate identifying covariates, but the abstract does not provide specific numeric parameter estimates (CL, V, etc.), which likely reside in the full text or supplementary tables not provided. |
| popPK | Patten_2022 | irrelevant | 0 | 0 | The paper focuses on SARS-CoV-2 inhibitors and does not report any pharmacokinetic parameters for pralatrexate. |
| PD | Patten_2022 | not_relevant | 0 | 0 | The paper does not mention pralatrexate or report any pharmacodynamic data for it. |
| PGx | Shah_2020 | not_relevant | 4 | 0 | The paper reports associations between SLC19A1/DHFR polymorphisms and clinical outcomes (PFS/OS), not specific pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study using computational docking and cell culture assays to identify SARS-CoV-2 inhibitors, reporting no pharmacokinetic parameters (CL, V, t1/2) for pralatrexate. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a computational screening study for SARS-CoV-2 inhibitors and mentions pralatrexate only as a comparator for binding residue analysis, providing no pharmacokinetic data. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on virtual screening for SARS-CoV-2 RdRp inhibitors; pralatrexate is only mentioned as a reference compound for binding residue analysis, with no PD or exposure-response data reported for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpralatrexate%5D&body=Drug%3A%20pralatrexate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pralatrexate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
