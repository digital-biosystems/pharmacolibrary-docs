<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;carmofur&quot;}]"></div>

# carmofur

- **generic name:** carmofur
- **ATC codes:** `L01BC04`
- **DrugBank:** [DB09010](https://go.drugbank.com/drugs/DB09010) · **PubChem:** [CID 2577](https://pubchem.ncbi.nlm.nih.gov/compound/2577)
- **molar mass:** 257.2614 g/mol (C11H16FN3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Carmofur is a pyrimidine analogue antineoplastic agent that was used to treat cancer. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5043732](https://www.wikidata.org/wiki/Q5043732) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:36 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 58,158/670 | einfracz / qwen3.8-27b | 5 | 3/9 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 22 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sakakibara_1986.pdf` | Sakakibara K et al., [The determination of thymidylate synth…, Gan no rinsho. Japan journa… (1986) | popPK | 9 | not captured | [2948036](https://pubmed.ncbi.nlm.nih.gov/2948036) | The paper reports quantitative pharmacokinetic parameters (half-life and AUC) for carmofur and its metabolite 5-FU in human patients. |

<sub>queue written 2026-10-07T16:36:40.660639+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anton_2024 | irrelevant | 0 | 0 | The paper is a review of anti-inflammatory compounds targeting SARS-CoV-2 MPro and does not report pharmacokinetic parameters for carmofur. |
| PD | Anton_2024 | not_relevant | 2 | 2 | The paper is a review that lists a single IC50 value for carmofur against SARS-CoV-2 MPro but does not report a pharmacodynamic model, exposure-response relationship, or dose-effect curve for the drug in a biological system. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper describes a drug delivery system and in-vitro release/cytotoxicity studies, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for carmofur. |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper is an in-silico machine learning study for HIV-1 drug repurposing and does not contain any pharmacokinetic data for carmofur. |
| PD | Chirila_2026 | not_relevant | 0 | 0 | The paper is a computational study on machine learning for drug repurposing against HIV-1 enzymes and does not contain any pharmacodynamic or exposure-response data for carmofur. |
| popPK | Doan_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting IC50 values for carmofur as an acid ceramidase inhibitor, not a pharmacokinetic study with disposition parameters. |
| popPK | Doan_2017_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glioblastoma cell lines and does not report pharmacokinetic parameters for carmofur. |
| popPK | Gurung_2022 | irrelevant | 0 | 0 | The paper is a molecular docking and dynamics study of drug binding to human serum albumin, not a pharmacokinetic study reporting disposition parameters like clearance or volume for carmofur. |
| PD | Gurung_2022 | not_relevant | 0 | 0 | The paper is a molecular docking and dynamics study of drug binding to human serum albumin, reporting binding energies and geometric properties, but contains no pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for carmofur. |
| popPK | Jin_2020 | irrelevant | 0 | 0 | The paper is a structural biology and virology study describing carmofur's inhibition of SARS-CoV-2 protease in vitro, not a pharmacokinetic study of carmofur disposition. |
| popPK | Kang_2023 | irrelevant | 0 | 0 | The study focuses on the antiviral and enzymatic inhibition properties of carmofur derivatives against SARS-CoV-2, not on its pharmacokinetic disposition parameters. |
| PD | Kang_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and cell-based antiviral activity (EC50) for carmofur derivatives, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with numeric PD parameters (e.g., Emax, EC50 in a PK context) for the drug in vivo or in a PK/PD framework. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper investigates antibiotic resistance in Escherichia coli and does not contain pharmacokinetic data for carmofur. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on the evolution of antibiotic resistance in E. coli and does not report pharmacodynamic (PD) or exposure-response relationships for carmofur. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper describes a SERS-based detection method for 5-fluorouracil, and carmofur is only mentioned as a cross-reactivity control, with no pharmacokinetic parameters reported. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper describes an analytical method (SERS-LFIA) for detecting 5-Fluorouracil and reports cross-reactivity with carmofur, but it does not contain any pharmacodynamic or exposure-response data for carmofur. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on SARS-CoV-2 protease inhibition and does not report any pharmacokinetic parameters for carmofur. |
| popPK | Miyauchi_1996 | irrelevant | 1 | 0 | The study focuses on BOF-A2 and 5-FU, with carmofur (HCFU) serving only as a comparator drug for toxicity and 5-FU concentration elevation, without reporting specific PK parameters for carmofur. |
| PD | Miyauchi_1996 | not_relevant | 2 | 1 | The paper reports single-dose effects (percentage WBC decrease) for carmofur and an IC50 for a metabolite (CNDP) on enzyme inhibition, but does not provide a concentration-effect or dose-response curve or model parameters (Emax, EC50) for carmofur itself. |
| popPK | Pizzirani_2013 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study on acid ceramidase inhibitors and does not report pharmacokinetic parameters for carmofur. |
| PD | Pizzirani_2013 | not_relevant | 3 | 2 | The paper reports a single IC50 value for carmofur in a biochemical assay, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) or dose-response relationship analysis. |
| popPK | Tan_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on SARS-CoV-2 protease inhibition where carmofur is only a comparator compound, and no pharmacokinetic parameters are reported. |
| PD | Tan_2022 | not_relevant | 0 | 0 | The paper invalidates carmofur as a SARS-CoV-2 PLpro inhibitor using a cell-based assay and does not report any pharmacodynamic parameters, dose-response curves, or exposure-response relationships for carmofur. |
| popPK | Torres_2016 | irrelevant | 0 | 0 | This is an antimicrobial screening study testing carmofur's activity against Staphylococcus aureus biofilms, containing no pharmacokinetic data for the drug itself. |
| PD | Torres_2016 | not_relevant | 0 | 0 | The paper reports qualitative screening results and identifies carmofur as active against biofilms, but the provided text does not contain any numeric dose-response data, IC50 values, or PD parameters. |
| popPK | Toumpe_2025 | irrelevant | 0 | 0 | The paper focuses on metabolic modeling in ovarian cancer and does not investigate the pharmacokinetics of carmofur. |
| PD | Toumpe_2025 | not_relevant | 0 | 0 | The paper focuses on multi-omics-driven kinetic modeling of cancer metabolism and does not report any pharmacodynamic or exposure-response data for carmofur. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting 5-fluorouracil, and carmofur is only mentioned as a cross-reactivity control, not as the subject of a pharmacokinetic study. |
| PD | Zhou_2022 | not_relevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting 5-FU and reports cross-reactivity with carmofur, but does not report any pharmacodynamic or exposure-response relationship for carmofur. |
| popPK | Çömlekçi_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and apoptosis in cell lines, reporting no pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
