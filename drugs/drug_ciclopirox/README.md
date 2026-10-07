<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;ciclopirox&quot;}]"></div>

# ciclopirox

- **generic name:** ciclopirox
- **ATC codes:** `D01AE14`, `G01AX12`
- **DrugBank:** [DB01188](https://go.drugbank.com/drugs/DB01188) · **PubChem:** [CID 2749](https://pubchem.ncbi.nlm.nih.gov/compound/2749)
- **molar mass:** 207.2689 g/mol (C12H17NO2) — DrugBank
- **groups:** approved, investigational

## About

Ciclopirox is a topical antifungal used to treat fungal skin and nail infections such as tinea, seborrhoeic dermatitis, pityriasis versicolor, cutaneous candidiasis, and onychomycosis. It is an approved medicine, applied topically to the skin or nails, and is used fairly widely for these infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419468](https://www.wikidata.org/wiki/Q419468) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:38 | 0:43 | 0/0/0 | 1/0/0 | 0/0/0 | 28,800/692 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pant_2025_2_VACV](drugs/drug_ciclopirox/pd_Pant_2025_2_VACV.md) | VACV replication ← ciclopirox · direct sigmoid Emax (Hill) effect | — | Pant A et al., Ciclopirox suppresses poxvirus replicat…, bioRxiv : the preprint serv… (2025) | [10.1101/2025.07.24.666650](https://doi.org/10.1101/2025.07.24.666650) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ciclopirox) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pant_2025 | irrelevant | 0 | 0 | The study focuses on the antiviral mechanism of action (iron chelation) in vitro and ex vivo, not on pharmacokinetic disposition parameters. |
| popPK | Pant_2025_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ciclopirox's antiviral activity against poxviruses and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Parker_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurite outgrowth where ciclopirox is used only as a comparator cell cycle inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Zangi_2022 | irrelevant | 1 | 0 | The study focuses on the antiviral activity and structural derivatives of ciclopirox, mentioning only qualitative in vivo clearance without reporting quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
