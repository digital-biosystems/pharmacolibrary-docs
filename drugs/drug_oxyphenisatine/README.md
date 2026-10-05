<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;oxyphenisatine&quot;}]"></div>

# oxyphenisatine

- **generic name:** oxyphenisatine
- **ATC codes:** `A06AB01`
- **DrugBank:** [DB04823](https://go.drugbank.com/drugs/DB04823) · **PubChem:** [CID 31315](https://pubchem.ncbi.nlm.nih.gov/compound/31315)
- **molar mass:** 317.338 g/mol (C20H15NO3) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** A laxative that undergoes enterohepatic circulation. It may cause jaundice.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:38 | 1:14 | 0/0/0 | 0/0/0 | 0/0/0 | 35,245/1,366 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper is an in silico study on dengue virus inhibitors and does not involve oxyphenisatine or report any pharmacokinetic parameters for it. |
| PD | Ahmadi_2025 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and MD simulations) for dengue virus inhibitors and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for oxyphenisatine. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hyzetimibe, not oxyphenisatine. |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for hyzetimibe, not oxyphenisatine, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Farack_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of action (fluid transport and permeability) of oxyphenisatin in rat colonic loops, not its pharmacokinetic disposition parameters. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carvedilol, not oxyphenisatine. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of drug tolerance in glioblastoma via PRDM9 and does not involve oxyphenisatine or its pharmacokinetics. |
| PD | Joun_2025 | not_relevant | 0 | 0 | The paper does not mention oxyphenisatine; it investigates the role of PRDM9 in drug-tolerant persister cells in glioblastoma using microtubule-targeting agents like CMPD1 and tivantinib. |
| popPK | Kaur_2025 | irrelevant | 0 | 0 | The paper studies novel NSAID analogues and their COX inhibition, not the pharmacokinetics of oxyphenisatine. |
| PD | Kaur_2025 | not_relevant | 0 | 0 | The paper focuses on novel NSAID analogues and does not contain any pharmacodynamic or exposure-response data for oxyphenisatine. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological activity of ferrocene derivatives for Alzheimer's disease and does not involve oxyphenisatine or pharmacokinetic modeling. |
| PD | Makhaeva_2025 | not_relevant | 0 | 0 | The paper studies 1-azinyl-1'-alkenylferrocenes for Alzheimer's disease and does not mention or analyze oxyphenisatine. |
| popPK | Ortiz-Morales_2023 | irrelevant | 0 | 0 | The study focuses on the stability and antiproliferative effects of a different compound (HO-AAVPA) in cell lines, not the pharmacokinetics of oxyphenisatine. |
| PD | Ortiz-Morales_2023 | not_relevant | 0 | 0 | The paper studies a different compound (HO-AAVPA) and does not contain any data or analysis for oxyphenisatine. |
| popPK | Shaik_2026 | irrelevant | 0 | 0 | The study focuses on the stability and in-silico safety evaluation of asciminib, not oxyphenisatine. |
| PD | Shaik_2026 | not_relevant | 0 | 0 | The paper focuses on the analytical characterization and in silico safety evaluation of asciminib degradation products, containing no pharmacodynamic or exposure-response data for oxyphenisatine. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not mention oxyphenisatine or report any pharmacokinetic parameters. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not contain any pharmacodynamic or exposure-response data for oxyphenisatine. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of a traditional Chinese medicine decoction in mice and does not involve oxyphenisatine or its pharmacokinetics. |
| PD | Wei_2025 | not_relevant | 0 | 0 | The paper studies Ganmai Dazao Decoction, not oxyphenisatine, and does not report any pharmacodynamic parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
