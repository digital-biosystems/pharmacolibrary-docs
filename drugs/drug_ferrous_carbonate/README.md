<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous carbonate&quot;}]"></div>

# ferrous carbonate

- **generic name:** ferrous carbonate
- **ATC codes:** `B03AA04`
- **DrugBank:** [DB13698](https://go.drugbank.com/drugs/DB13698) · **PubChem:** not captured
- **molar mass:** 115.854 g/mol (CFeO3) — DrugBank
- **groups:** experimental

## About

Ferrous carbonate is an oral iron(II) preparation classified as an antianemic, used to treat iron deficiency anaemia. It is currently regarded as an experimental agent and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4214595](https://www.wikidata.org/wiki/Q4214595) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:03 | 2:29 | 0/0/0 | 0/1/0 | 0/0/0 | 122,777/1,003 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/6 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Liu_2025_UC](drugs/drug_ferrous_carbonate/pd_Liu_2025_UC.md) | ulcerative colitis biomarker turnover ← unknown | — | Liu S et al., Metabolomics and proteomics reveal bloc…, Nature communications (2025) | [10.1038/s41467-025-62217-8](https://doi.org/10.1038/s41467-025-62217-8) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ferric maltol, not ferrous carbonate, which is only mentioned as a comparator. |
| PD | Allen_2021 | not_relevant | 0 | 0 | The study investigates ferric maltol, not ferrous carbonate, and reports only PK and descriptive dose-response trends without numeric PD parameters. |
| popPK | DCunha_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of erythropoietin, not ferrous_carbonate. |
| PD | DCunha_2019 | not_relevant | 0 | 0 | The paper describes a population PK model for erythropoietin, not ferrous carbonate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Ekobena_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bictegravir, not ferrous_carbonate. |
| PD | Ekobena_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bictegravir, not ferrous carbonate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Lang_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of organometallic iron complexes (molecular gyroscopes) and contains no pharmacokinetic data for ferrous carbonate. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on colitis in mice and does not involve ferrous_carbonate or pharmacokinetic parameters. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper investigates the role of arginine and ASS1 in colitis using mechanistic and group-comparison studies, but does not report any pharmacodynamic or exposure-response relationship for ferrous carbonate. |
| popPK | Qasem_2022 | irrelevant | 0 | 0 | The paper investigates the biological properties of Matricaria chamomilla essential oils and honey, not the pharmacokinetics of ferrous carbonate. |
| PD | Qasem_2022 | not_relevant | 0 | 0 | The paper investigates the biological properties of Matricaria chamomilla essential oils and honey, not ferrous carbonate, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Rosencrans_2025 | irrelevant | 0 | 0 | The paper investigates mitophagy activators (FB231, MTK458) in the context of Parkinson's disease and does not involve ferrous_carbonate or its pharmacokinetics. |
| PD | Rosencrans_2025 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of FB231 and MTK458 (mitophagy activators), not ferrous carbonate. |
| popPK | Wulfmeier_2024 | irrelevant | 0 | 0 | The paper investigates the binding mechanism of thallium-201 in Prussian blue nanoparticles for nuclear medicine and does not involve ferrous carbonate pharmacokinetics. |
| PD | Wulfmeier_2024 | not_relevant | 0 | 0 | The paper discusses the binding mechanism of thallium-201 to Prussian blue nanoparticles for nuclear medicine, not the pharmacodynamics of ferrous carbonate. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper investigates vorapaxar's mechanism in cancer immunotherapy and ferroptosis, not the pharmacokinetics of ferrous carbonate. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper investigates vorapaxar, not ferrous carbonate, and does not report pharmacodynamic parameters for ferrous carbonate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
