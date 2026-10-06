<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;clofenamide&quot;}]"></div>

# clofenamide

- **generic name:** clofenamide
- **ATC codes:** `C03BA07`, `C03BB07`
- **DrugBank:** [DB13663](https://go.drugbank.com/drugs/DB13663) · **PubChem:** not captured
- **molar mass:** 270.7 g/mol (C6H7ClN2O4S2) — DrugBank
- **groups:** experimental

## About

Clofenamide is a sulfonamide diuretic, a low-ceiling diuretic related to the thiazides, that was classified for use as a diuretic. It appears only as an experimental drug and is not an authorised medicine in the European Union, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5134876](https://www.wikidata.org/wiki/Q5134876) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:14 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 26,657/468 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

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
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dumond_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tenofovir and emtricitabine, not clofenamide. |
| PD | Dumond_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of tenofovir and emtricitabine, not clofenamide, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Else_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antiretroviral drugs (tenofovir, emtricitabine, lamivudine, dolutegravir) and does not mention clofenamide. |
| PD | Else_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of tenofovir, emtricitabine, lamivudine, and dolutegravir, and does not contain any data or analysis regarding clofenamide. |
| popPK | Tanaudommongkon_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tenofovir and emtricitabine, not clofenamide. |
| PD | Tanaudommongkon_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and exposure simulations for tenofovir and emtricitabine, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Toor_2021 | irrelevant | 0 | 0 | The paper is a computational docking study for SARS-CoV-2 and does not contain pharmacokinetic data for clofenamide. |
| PD | Toor_2021 | not_relevant | 0 | 0 | The paper is a computational docking study of SARS-CoV-2 spike protein inhibitors and does not mention clofenamide or report any pharmacodynamic or exposure-response data. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tenofovir (TDF/TAF) and its metabolites, not clofenamide. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of tenofovir and its metabolites; it does not report any pharmacodynamic (PD) or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
