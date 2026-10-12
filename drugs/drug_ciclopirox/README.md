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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pant_2025_2_VACV](drugs/drug_ciclopirox/pd_Pant_2025_2_VACV.md) | VACV replication ← ciclopirox · direct sigmoid Emax (Hill) effect | — | Pant A et al., Ciclopirox suppresses poxvirus replicat…, bioRxiv : the preprint serv… (2025) | [10.1101/2025.07.24.666650](https://doi.org/10.1101/2025.07.24.666650) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
