<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;zolbetuximab&quot;}]"></div>

# zolbetuximab

- **generic name:** zolbetuximab
- **ATC codes:** `L01FX31`
- **DrugBank:** [DB15118](https://go.drugbank.com/drugs/DB15118) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Zolbetuximab is a monoclonal antibody used to treat stomach and esophageal cancers. It is an authorised medicine in the European Union and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17107865](https://www.wikidata.org/wiki/Q17107865) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:22 | 3:10 | 0/0/3 | 0/0/1 | 0/0/0 | 75,691/4,426 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Yamada_2025_2_reference](drugs/drug_zolbetuximab/Zolbetuximab_Yamada2025v2_reference.md) | — | 1-compartment (no model) | 1 | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_first_dose_800_mg_m2](drugs/drug_zolbetuximab/Zolbetuximab_Yang2025_first_dose_800_mg_m2.md) | — | 1-compartment (no model) | 6 | Yang J et al., Clinical Pharmacology Profile of the Cl…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01552-x](https://doi.org/10.1007/s40262-025-01552-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_steady_state_600_mg_m2_q3w](drugs/drug_zolbetuximab/Zolbetuximab_Yang2025_steady_state_600_mg_m2_q3w.md) | — | 1-compartment (no model) | 6 | Yang J et al., Clinical Pharmacology Profile of the Cl…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01552-x](https://doi.org/10.1007/s40262-025-01552-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yamada_2025_2_GITX](drugs/drug_zolbetuximab/pd_Yamada_2025_2_GITX.md) | combined gastrointestinal toxicity (nausea, vomiting, and abdominal pain) grade ≥ 3 ← zolbetuximab · categorical (graded) response model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yamada_2025_2_IRR](drugs/drug_zolbetuximab/pd_Yamada_2025_2_IRR.md) | infusion-related reactions ← zolbetuximab · categorical (graded) response model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yamada_2025_2_OS](drugs/drug_zolbetuximab/pd_Yamada_2025_2_OS.md) | overall survival ← zolbetuximab · time-to-event model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yamada_2025_2_PFS](drugs/drug_zolbetuximab/pd_Yamada_2025_2_PFS.md) | progression-free survival ← zolbetuximab · time-to-event model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yamada_2025_2_nausea_and_vomiting_grade_3](drugs/drug_zolbetuximab/pd_Yamada_2025_2_nausea_and_vomiting_grade_3.md) | nausea and vomiting grade ≥ 3 ← zolbetuximab · categorical (graded) response model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zolbetuximab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CLDN18 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lordick_2021 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) from the FAST trial and does not contain any pharmacokinetic parameters or models for zolbetuximab. |
| popPK | Yamada_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of 5-FU and oxaliplatin to assess drug-drug interactions, not the pharmacokinetic parameters of zolbetuximab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:20 UTC</sub>
