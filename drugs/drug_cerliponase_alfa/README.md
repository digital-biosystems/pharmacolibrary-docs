<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;cerliponase alfa&quot;}]"></div>

# cerliponase alfa

- **generic name:** cerliponase alfa
- **ATC codes:** `A16AB17`
- **DrugBank:** [DB13173](https://go.drugbank.com/drugs/DB13173) · **PubChem:** none
- **groups:** approved, investigational

## About

Cerliponase alfa is an enzyme medication used to treat neuronal ceroid-lipofuscinosis, a rare metabolic disease. It is authorised in the European Union and is used only in specialised care for this very rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q33626059](https://www.wikidata.org/wiki/Q33626059) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cerliponase_alfa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IGF2R (target), TPP1 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:13 | 1:33 | 0/0/0 | 0/0/0 | 0/0/0 | 42,673/2,496 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hammon_2021.pdf` | Hammon K et al., Dose selection for intracerebroventricu…, Clinical and translational… (2021) | popPK | 9 | [10.1111/cts.13028](https://doi.org/10.1111/cts.13028) | [34076336](https://pubmed.ncbi.nlm.nih.gov/34076336) | The paper describes a population PK model and allometric scaling for cerliponase alfa, but the specific numeric parameter values are not present in the provided abstract text. |
| `Vuillemenot_2015.pdf` | Vuillemenot BR et al., Nonclinical evaluation of CNS-administe…, Molecular genetics and meta… (2015) | popPK | 9 | [10.1016/j.ymgme.2014.09.004](https://doi.org/10.1016/j.ymgme.2014.09.004) | [25257657](https://pubmed.ncbi.nlm.nih.gov/25257657) | The paper is a nonclinical PK study of cerliponase alfa (TPP1) in dogs, but specific quantitative parameters (CL, V) are not provided in the abstract. |

<sub>queue written 2026-10-05 11:12 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Corti_2025 | irrelevant | 0 | 0 | The paper describes an in vitro disease model and gene therapy efficacy for CLN2, containing no pharmacokinetic data for cerliponase alfa. |
| PD | Corti_2025 | not_relevant | 0 | 0 | The paper describes an in vitro gene therapy study for CLN2 disease and does not report any pharmacodynamic or exposure-response analysis for cerliponase alfa. |
| popPK | Grobman_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolate mofetil (MMF) in dogs, not cerliponase alfa. |
| popPK | Hammon_2021 | relevant | 9 | 2 | The paper describes a population PK model and allometric scaling for cerliponase alfa, but the specific numeric parameter values are not present in the provided abstract text. |
| PD | Hammon_2021 | not_relevant | 0 | 0 | The paper focuses on allometric PK scaling and dose selection for exposure prediction, reporting no pharmacodynamic or exposure-response relationship. |
| PD | Kim_2021 | not_relevant | 3 | 1 | The paper reports PK parameters and qualitative exposure-response observations (no correlation between exposure and efficacy/AEs) but does not provide numeric PD parameters (Emax, EC50, etc.) or a quantitative dose-response curve. |
| popPK | Kohlschütter_2016 | irrelevant | 0 | 0 | The paper is a review of CLN2 disease and treatment approaches (ERT and gene therapy) and does not report quantitative pharmacokinetic parameters for cerliponase alfa. |
| popPK | Meng_2017 | irrelevant | 0 | 0 | The study focuses on the delivery of TPP1 using a peptide mediator (K16ApoE) in mice and does not report pharmacokinetic parameters for cerliponase alfa. |
| popPK | Meng_2021 | irrelevant | 0 | 0 | The paper studies a peptide delivery system for cancer immunotherapy and does not involve cerliponase_alfa. |
| PGx | Nickel_2022 | not_relevant | 0 | 0 | The paper describes natural history data for CLN2 disease used as controls for cerliponase alfa trials, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Priglinger_2025 | not_relevant | 0 | 0 | The paper is a review of enzyme replacement therapy for CLN2 retinopathy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | So_2026 | irrelevant | 0 | 0 | The paper focuses on AI-based target discovery for Parkinson's disease and does not involve cerliponase_alfa or any pharmacokinetic analysis. |
| popPK | Soangra_2025 | irrelevant | 0 | 0 | The paper is a clinical study assessing gait and postural outcomes in CLN2 patients treated with cerliponase alfa, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Solé-Domènech_2018 | irrelevant | 0 | 0 | The paper investigates the proteolytic degradation of amyloid-beta by TPP1 and does not involve cerliponase_alfa or pharmacokinetic parameters. |
| popPK | Specchio_2024 | irrelevant | 0 | 0 | The paper is a clinical validity study comparing rating scales and does not report any pharmacokinetic parameters for cerliponase alfa. |
| popPK | Vuillemenot_2014 | irrelevant | 0 | 0 | The study investigates recombinant human tripeptidyl peptidase-1 (rhTPP1), not cerliponase alfa. |
| popPK | Vuillemenot_2015 | relevant | 9 | 0 | The paper is a nonclinical PK study of cerliponase alfa (TPP1) in dogs, but specific quantitative parameters (CL, V) are not provided in the abstract. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding cerliponase alfa or any pharmacodynamic relationship. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcerliponase_alfa%5D&body=Drug%3A%20cerliponase_alfa%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cerliponase_alfa/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
