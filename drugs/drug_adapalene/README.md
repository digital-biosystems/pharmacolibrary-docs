<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;adapalene&quot;}]"></div>

# adapalene

- **generic name:** adapalene
- **ATC codes:** `D10AD03`
- **DrugBank:** [DB00210](https://go.drugbank.com/drugs/DB00210) · **PubChem:** [CID 60164](https://pubchem.ncbi.nlm.nih.gov/compound/60164)
- **molar mass:** 412.5201 g/mol (C28H28O3) — DrugBank
- **groups:** approved, investigational

## About

Adapalene is a topical retinoid used to treat acne. It is an approved medicine, widely used as a topical anti-acne preparation applied to the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q352348](https://www.wikidata.org/wiki/Q352348) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:24 | 0:16 | 0/0/0 | 0/1/0 | 0/0/0 | 30,718/565 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Matharoo_2025_SC_thickness](drugs/drug_adapalene/pd_Matharoo_2025_SC_thickness.md) | stratum corneum thickness ← adapalene · direct Emax (saturable) effect | — | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Matharoo_2025_infundibular_area](drugs/drug_adapalene/pd_Matharoo_2025_infundibular_area.md) | infundibular area ← adapalene · direct sigmoid Emax (Hill) effect | — | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=adapalene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GOT1 (inhibitor), JUN (target), RARA (target), RARB (target), RARG (target), RXRA (target), RXRB (target), RXRG (target), TLR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Matharoo_2025 | irrelevant | 2 | 2 | The study focuses on in-vitro permeation and a dermal PBPK model calibrated to in-vitro data, with systemic PK parameters (Cmax, AUC, t1/2) cited from external literature rather than derived from original human or animal population PK modeling in this paper. |
| popPK | Stein_2017 | irrelevant | 0 | 0 | The paper is a clinical review of topical efficacy for acne vulgaris and contains no pharmacokinetic data or models. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
