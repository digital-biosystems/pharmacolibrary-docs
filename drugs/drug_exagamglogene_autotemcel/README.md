<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;exagamglogene autotemcel&quot;}]"></div>

# exagamglogene autotemcel

- **generic name:** exagamglogene autotemcel
- **ATC codes:** `B06AX05`
- **DrugBank:** [DB15572](https://go.drugbank.com/drugs/DB15572) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Exagamglogene autotemcel is a gene therapy used for sickle-cell disease and transfusion-dependent beta thalassemia. It is authorised in the European Union and is a recently approved, still partly investigational therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q107400400](https://www.wikidata.org/wiki/Q107400400) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:46 | 1:01 | 0/0/0 | 0/0/0 | 0/0/0 | 51,286/233 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/9 | 5/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2023 | irrelevant | 0 | 0 | The paper studies biomimetic nanoparticles for glioblastoma treatment and does not involve the drug exagamglogene_autotemcel. |
| popPK | Cowan_2022 | irrelevant | 0 | 0 | The paper describes a clinical study for Artemis-deficient SCID using a different gene therapy (DCLRE1C) and does not involve exagamglogene_autotemcel or report any pharmacokinetic parameters. |
| popPK | Guan_2021 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on SIRT3 and NLRC4 inflammasome activation, unrelated to the pharmacokinetics of exagamglogene_autotemcel. |
| popPK | Gupta_2025 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Gupta_2025 | not_relevant | 0 | 0 | The paper studies AAV-mediated nephrotoxicity in kidney organoids and does not report any pharmacodynamic or exposure-response relationship for exagamglogene autotemcel. |
| popPK | Longhurst_2024 | irrelevant | 0 | 0 | The paper studies NTLA-2002 (a different gene-editing therapy), not exagamglogene_autotemcel. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper investigates the mechanism of macrophage efferocytosis in colorectal cancer and does not involve the drug exagamglogene_autotemcel or report any pharmacokinetic parameters. |
| popPK | Pandey_2025 | irrelevant | 0 | 0 | The paper is a general review of CRISPR technology and does not contain any pharmacokinetic data or quantitative disposition parameters for exagamglogene_autotemcel. |
| PD | Pandey_2025 | not_relevant | 0 | 0 | The paper is a general review of CRISPR-Cas technology and does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for exagamglogene autotemcel. |
| popPK | Park_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on microglial phagocytosis in Alzheimer's disease and does not involve the drug exagamglogene_autotemcel or report any pharmacokinetic parameters. |
| popPK | Pessoa_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on hematopoietic stem cell phagocytosis in zebrafish and does not involve the drug exagamglogene_autotemcel or report any pharmacokinetic parameters. |
| popPK | Pluvinage_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on CD22 and microglial phagocytosis in mice and does not involve the drug exagamglogene_autotemcel or report any pharmacokinetic parameters. |
| popPK | Ranzenigo_2024 | irrelevant | 0 | 0 | The paper is a review of HIV cure strategies and does not report any pharmacokinetic parameters for exagamglogene_autotemcel. |
| popPK | Upadhyay_2021 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on T-cell therapy and does not report pharmacokinetic parameters for exagamglogene_autotemcel. |
| popPK | Youssef_2026 | irrelevant | 0 | 0 | The paper is a review on pharmacovigilance and risk management for cell and gene therapies, containing no quantitative pharmacokinetic parameters for exagamglogene_autotemcel. |
| PD | Youssef_2026 | not_relevant | 0 | 0 | The paper is a review on pharmacovigilance and safety monitoring for cell and gene therapies; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for exagamglogene autotemcel. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 7 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference tag (EANM'17) and contains no information regarding exagamglogene autotemcel, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title/header for an abstract book and contains no data, analysis, or parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
