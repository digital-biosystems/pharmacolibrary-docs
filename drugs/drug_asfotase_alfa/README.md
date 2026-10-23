<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;asfotase alfa&quot;}]"></div>

# asfotase alfa

- **generic name:** asfotase alfa
- **ATC codes:** `A16AB13`
- **DrugBank:** [DB09105](https://go.drugbank.com/drugs/DB09105) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Asfotase alfa is an enzyme replacement therapy used to treat hypophosphatasia. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075839](https://www.wikidata.org/wiki/Q22075839) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=asfotase_alfa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Pyrophosphate (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:57 | 0:51 | 0/0/0 | 0/0/0 | 0/0/0 | 16,983/1,278 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/2 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pan_2021.pdf` | Pan WJ et al., Pharmacokinetics of Asfotase Alfa in Ad…, Journal of clinical pharmac… (2021) | popPK | 8 | [10.1002/jcph.1870](https://doi.org/10.1002/jcph.1870) | [33822385](https://pubmed.ncbi.nlm.nih.gov/33822385) | The study reports PK parameters for asfotase alfa, but only median half-life (~5 days) is explicitly provided in the text, while specific clearance and volume values are not listed. |

<sub>queue written 2026-10-05T10:56:43.273516+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2025 | irrelevant | 0 | 0 | The paper is a general tutorial on rare disease drug development and does not contain specific pharmacokinetic data for asfotase_alfa. |
| PD | Ahmed_2025 | not_relevant | 0 | 0 | The text is a general tutorial on rare disease drug development and does not contain specific data, models, or numeric parameters for asfotase alfa. |
| PGx | Conti_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes of asfotase alfa therapy in patients with specific ALPL mutations but does not analyze how these genotypes alter the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dahir_2024 | irrelevant | 0 | 0 | The study evaluates efzimfotase alfa, not asfotase alfa. |
| PD | Dahir_2024 | not_relevant | 3 | 1 | The abstract describes qualitative dose-dependent reductions in biomarkers (PPi, PLP) but does not provide numeric PD parameters (e.g., Emax, EC50) or specific concentration-effect data points. |
| popPK | Freitas_2018 | irrelevant | 0 | 0 | This is a clinical case report focusing on bone microarchitecture outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Gill_2025 | not_relevant | 0 | 0 | The paper is a case report of a patient with hypophosphatasia who is planned to start asfotase alfa, but it does not report any pharmacokinetic or pharmacodynamic data or the effect of the ALPL variant on the drug's response. |
| popPK | Hidaka_2023 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on therapeutic efficacy and biomarker changes (pyrophosphate levels) rather than pharmacokinetic disposition parameters. |
| PD | Hidaka_2023 | not_relevant | 2 | 1 | The paper is a single-patient case report describing clinical improvement and biomarker reduction (PPi) over time, but it does not provide drug concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PGx | Hidaka_2023 | not_relevant | 0 | 0 | The paper reports a clinical case of treatment response and a novel pathogenic variant, but does not analyze how the genotype affects the pharmacokinetics or pharmacodynamics of asfotase alfa. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is a review of single enzyme nanoparticles and does not report quantitative pharmacokinetic parameters for asfotase_alfa. |
| popPK | Kishnani_2021 | irrelevant | 0 | 0 | The paper is a clinical outcome analysis focusing on ALPL variant states and efficacy/safety, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for asfotase alfa. |
| PD | Kishnani_2021 | not_relevant | 1 | 0 | The paper analyzes clinical outcomes based on genetic variant status (biallelic vs monoallelic) rather than drug exposure or dose, and does not report any concentration-effect or dose-response PD parameters. |
| PGx | Kishnani_2021 | not_relevant | 2 | 8 | The paper compares baseline disease severity and clinical outcomes between ALPL genotype groups but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of asfotase alfa itself. |
| PGx | Lawrence_2017 | not_relevant | 0 | 0 | The paper is a case report describing the diagnosis of hypophosphatasia and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of asfotase alfa. |
| PGx | Lipiński_2026 | not_relevant | 0 | 0 | The paper is a narrative review of hypophosphatasia diagnosis and treatment, describing the disease mechanism and general use of asfotase alfa, but it does not report specific pharmacogenomic effects of gene variants on the PK or PD parameters of asfotase alfa. |
| popPK | Nakano_2019 | irrelevant | 0 | 0 | The paper is an in-vitro gene therapy study focusing on ALP activity and calcification, not a pharmacokinetic study reporting disposition parameters for asfotase_alfa. |
| PD | Nakano_2019 | not_relevant | 0 | 0 | The paper describes a gene therapy study using iPSCs and TALENs; it mentions asfotase alfa only as background context and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for the drug. |
| PGx | Orimo_2016 | not_relevant | 0 | 0 | The paper is a review of the pathophysiology of hypophosphatasia and the history of asfotase alfa approval, containing no data on pharmacogenomic effects on PK or PD parameters. |
| popPK | Pan_2021 | relevant | 8 | 2 | The study reports PK parameters for asfotase alfa, but only median half-life (~5 days) is explicitly provided in the text, while specific clearance and volume values are not listed. |
| PD | Pan_2021 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic (PK) parameters (exposure, half-life, dose proportionality) and explicitly refers to previously published pharmacodynamic results, providing no numeric PD parameters or concentration-effect data in this text. |
| PGx | Pan_2021 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics of asfotase alfa in a general patient population and does not investigate the impact of specific gene variants or genotypes on PK/PD parameters. |
| PGx | Prakash_2025 | not_relevant | 0 | 0 | The paper describes a clinical case of hypophosphatasia and the response to asfotase alfa therapy, but it does not report a pharmacogenomic study linking specific gene variants to changes in the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Seefried_2021 | irrelevant | 1 | 0 | The study reports pharmacodynamic outcomes (PPi and PLP concentrations) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for asfotase alfa. |
| PGx | Stürznickel_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy and biochemical changes in patients with ALPL mutations but does not analyze how specific genetic variants affect the pharmacokinetics or pharmacodynamics of asfotase alfa. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The paper is a study on exosomal miRNAs in rheumatoid arthritis and contains no pharmacokinetic data for asfotase_alfa. |
| PD | Tang_2026 | not_relevant | 0 | 0 | The paper focuses on miRNA biomarkers for sarcopenia in rheumatoid arthritis and does not report any pharmacodynamic or exposure-response data for asfotase alfa. |
| popPK | Whyte_2021 | irrelevant | 0 | 0 | The paper discusses vitamin B6 deficiency and PLP levels in a patient with hypophosphatasia, not the pharmacokinetic parameters of asfotase alfa. |
| PD | Whyte_2021 | not_relevant | 0 | 0 | The paper describes a case of vitamin B6 deficiency in a patient with hypophosphatasia and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for asfotase alfa. |
| PGx | Zervou_2025 | not_relevant | 0 | 0 | The paper describes a clinical case series of neuropathic pain in HPP patients and mentions asfotase alfa treatment, but it does not report any pharmacogenomic analysis or data on how genetic variants affect the pharmacokinetics or pharmacodynamics of asfotase alfa. |
| PGx | dAngelo_2025 | not_relevant | 0 | 0 | The paper is a case report describing the clinical efficacy and safety of asfotase alfa in a patient with hypophosphatasia, but it does not report a pharmacogenomic effect (i.e., how a gene variant alters the PK or PD parameters of the drug itself). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
