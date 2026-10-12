<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;polmacoxib&quot;}]"></div>

# polmacoxib

- **generic name:** polmacoxib
- **ATC codes:** `M01AH07`
- **DrugBank:** [DB12399](https://go.drugbank.com/drugs/DB12399) · **PubChem:** [CID 9841854](https://pubchem.ncbi.nlm.nih.gov/compound/9841854)
- **molar mass:** 361.39 g/mol (C18H16FNO4S) — DrugBank
- **groups:** investigational

## About

Polmacoxib is a coxib, a non-steroidal anti-inflammatory drug that inhibits COX-2, developed as an investigational anti-inflammatory and antirheumatic medicine. It remains investigational and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19598695](https://www.wikidata.org/wiki/Q19598695) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:11 | 0:28 | 0/0/0 | 1/0/0 | 0/0/0 | 5,764/570 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cho_2022_WOMAC](drugs/drug_polmacoxib/pd_Cho_2022_WOMAC.md) | Western Ontario and McMaster Universities Osteoarthritis Index ← polmacoxib · delayed effect through an effect compartment | — | Cho YS et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2022) | [10.1016/j.clinthera.2021.11.008](https://doi.org/10.1016/j.clinthera.2021.11.008) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cho_2022.pdf` | Cho YS et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2022) | popPK | 10 | [10.1016/j.clinthera.2021.11.008](https://doi.org/10.1016/j.clinthera.2021.11.008) | [34974943](https://pubmed.ncbi.nlm.nih.gov/34974943) | The study reports a population PK model for polmacoxib, but the specific quantitative parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-07T01:11:28.911823+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2022 | relevant | 10 | 0 | The study reports a population PK model for polmacoxib, but the specific quantitative parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
