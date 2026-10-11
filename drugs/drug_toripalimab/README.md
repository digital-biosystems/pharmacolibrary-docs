<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;toripalimab&quot;}]"></div>

# toripalimab

- **generic name:** toripalimab
- **ATC codes:** `L01FF13`
- **DrugBank:** [DB15043](https://go.drugbank.com/drugs/DB15043) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Toripalimab is a PD-1 inhibitor monoclonal antibody used to treat cancers, including nasopharyngeal carcinoma and esophageal squamous cell carcinoma. It is approved and authorised in the European Union, with further uses still under investigation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:21 | 2:42 | 0/1/0 | 0/0/1 | 0/0/0 | 82,844/3,378 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2022_reference](drugs/drug_toripalimab/Toripalimab_Li2022_reference.md) | — | 2-compartment (no model) | 4 | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2022_AEs_leading_to_study_drug_discontinuation](drugs/drug_toripalimab/pd_Li_2022_AEs_leading_to_study_drug_discontinuation.md) | AEs leading to study drug discontinuation ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2022_ORR](drugs/drug_toripalimab/pd_Li_2022_ORR.md) | objective response rate ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2022_PFS](drugs/drug_toripalimab/pd_Li_2022_PFS.md) | progression-free survival ← toripalimab · time-to-event model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2022_grade_3_AEs](drugs/drug_toripalimab/pd_Li_2022_grade_3_AEs.md) | grade ≥ 3 adverse events (AEs) ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2022_treatment_related_grade_3_AEs](drugs/drug_toripalimab/pd_Li_2022_treatment_related_grade_3_AEs.md) | treatment-related grade ≥ 3 AEs ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=toripalimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study is an immuno-PET imaging evaluation of a radiolabeled toripalimab probe in mice, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:18 UTC</sub>
