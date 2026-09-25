<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;carmofur&quot;}]"></div>

# carmofur

- **generic name:** carmofur
- **ATC codes:** `L01BC04`
- **DrugBank:** [DB09010](https://go.drugbank.com/drugs/DB09010)
- **groups:** approved, withdrawn

## About

**Description.** Carmofur is a derivative of fluorouracil, and is an antineoplastic agent that has been used in the treatment of breast and colorectal cancer. Carmofur has been known to induce leukoencephalopathy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 06:17 | 7:07 | 0/0/0 | 3/0/0 | 0/0/0 | 128,115/3,126 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 3/9 | 11/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Doan_2017](drugs/drug_carmofur/pd_Doan_2017_Annexin_V.md) | Doan (2017) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Doan_2017](drugs/drug_carmofur/pd_Doan_2017_MTT.md) | Doan (2017) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Doan_2017_2](drugs/drug_carmofur/pd_Doan_2017_2_Annexin_V.md) | Doan (2017) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Doan_2017_2](drugs/drug_carmofur/pd_Doan_2017_2_MTT.md) | Doan (2017) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jin_2020](drugs/drug_carmofur/pd_Jin_2020_cell_viability.md) | Jin Z et al., Structural basis for the inhibition of…, Nature structural & molecul… (2020) | [10.1038/s41594-020-0440-6](https://doi.org/10.1038/s41594-020-0440-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jin_2020](drugs/drug_carmofur/pd_Jin_2020_intracellular_nucleocapsid_NP_protein_level.md) | Jin Z et al., Structural basis for the inhibition of…, Nature structural & molecul… (2020) | [10.1038/s41594-020-0440-6](https://doi.org/10.1038/s41594-020-0440-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jin_2020](drugs/drug_carmofur/pd_Jin_2020_viral_RNA_copy_number_in_cellular_supernatant.md) | Jin Z et al., Structural basis for the inhibition of…, Nature structural & molecul… (2020) | [10.1038/s41594-020-0440-6](https://doi.org/10.1038/s41594-020-0440-6) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 22 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sakakibara_1986.pdf` | Sakakibara K et al., [The determination of thymidylate synth…, Gan no rinsho. Japan journa… (1986) | popPK | 8 | not captured | [2948036](https://pubmed.ncbi.nlm.nih.gov/2948036) | The study reports quantitative pharmacokinetic parameters (half-life and AUC) for carmofur and its metabolite in patients, with values explicitly stated in the text. |

<sub>queue written 2026-09-15T06:16:42.349091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anton_2024 | irrelevant | 0 | 0 | The paper is a review of anti-inflammatory compounds targeting SARS-CoV-2 MPro and does not report pharmacokinetic parameters for carmofur. |
| PD | Anton_2024 | not_relevant | 2 | 2 | The paper is a review that lists a single IC50 value for carmofur against SARS-CoV-2 MPro but does not report a pharmacodynamic model, exposure-response relationship, or dose-effect curve for the drug in a biological system. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper describes a drug delivery system and in-vitro release/cytotoxicity studies, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for carmofur. |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper is a machine learning study for HIV-1 drug repurposing and does not report pharmacokinetic parameters for carmofur. |
| PD | Chirila_2026 | not_relevant | 0 | 0 | The paper is a computational study on machine learning for drug repurposing against HIV-1 enzymes and does not contain any pharmacodynamic or exposure-response data for carmofur. |
| popPK | Doan_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting IC50 values for carmofur as an acid ceramidase inhibitor, not a pharmacokinetic study with disposition parameters. |
| popPK | Doan_2017_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glioblastoma cell lines and does not report pharmacokinetic parameters for carmofur. |
| popPK | Gurung_2022 | irrelevant | 0 | 0 | The paper is a molecular docking and dynamics study of drug binding to human serum albumin, not a pharmacokinetic study reporting disposition parameters like clearance or volume for carmofur. |
| PD | Gurung_2022 | not_relevant | 0 | 0 | The paper is a molecular docking and dynamics study of drug binding to human serum albumin, reporting binding energies and geometric properties, but contains no pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for carmofur. |
| popPK | Jin_2020 | irrelevant | 0 | 0 | The paper is a structural biology and antiviral efficacy study reporting IC50/EC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Kang_2023 | irrelevant | 0 | 0 | The paper focuses on the structure-guided optimization of carmofur as an antiviral inhibitor, reporting only IC50 and EC50 values without any pharmacokinetic parameters. |
| PD | Kang_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and cell-based antiviral activity (EC50) for carmofur derivatives, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with numeric PD parameters (e.g., Emax, EC50 in a PK context) for the drug in vivo or in a PK/PD framework. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on bacterial antibiotic resistance evolution and does not involve carmofur or pharmacokinetic parameters. |
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
| popPK | Torres_2016 | irrelevant | 0 | 0 | The paper is a microbiological screening study for antimicrobial activity against S. aureus biofilms and contains no pharmacokinetic data for carmofur. |
| PD | Torres_2016 | not_relevant | 0 | 0 | The paper reports qualitative screening results and identifies carmofur as active against biofilms, but the provided text does not contain any numeric dose-response data, IC50 values, or PD parameters. |
| popPK | Toumpe_2025 | irrelevant | 0 | 0 | The paper is a computational metabolic modeling study of ovarian cancer where carmofur is only mentioned as a withdrawn drug in a list of antimetabolites, with no pharmacokinetic parameters reported. |
| PD | Toumpe_2025 | not_relevant | 0 | 0 | The paper focuses on multi-omics-driven kinetic modeling of cancer metabolism and does not report any pharmacodynamic or exposure-response data for carmofur. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting 5-fluorouracil, and carmofur is only mentioned as a cross-reactivity control, not as the subject of a pharmacokinetic study. |
| PD | Zhou_2022 | not_relevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting 5-FU and reports cross-reactivity with carmofur, but does not report any pharmacodynamic or exposure-response relationship for carmofur. |
| popPK | Çömlekçi_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and apoptosis in cell lines, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
