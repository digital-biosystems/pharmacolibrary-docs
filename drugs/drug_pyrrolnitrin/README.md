<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;pyrrolnitrin&quot;}]"></div>

# pyrrolnitrin

- **generic name:** pyrrolnitrin
- **ATC codes:** `D01AA07`
- **DrugBank:** [DB13603](https://go.drugbank.com/drugs/DB13603) · **PubChem:** not captured
- **molar mass:** 257.07 g/mol (C10H6Cl2N2O2) — DrugBank
- **groups:** experimental

## About

Pyrrolnitrin is an antifungal antibiotic used for topical treatment of fungal skin infections. It is currently considered experimental and does not appear to be an approved medicine in major markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q371817](https://www.wikidata.org/wiki/Q371817) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:05 | 2:12 | 0/0/0 | 0/0/0 | 0/0/0 | 10,562/275 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hamza_2026.pdf` | Hamza MA et al., Fluoxastrobin Targets NAD[P]H:quinone o…, Phytopathology (2026) | pd | 4 | [10.1094/PHYTO-03-26-0096-R](https://doi.org/10.1094/PHYTO-03-26-0096-R) | [42308472](https://www.ncbi.nlm.nih.gov/pubmed/42308472) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:05:28.488480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hamza_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of fluoxastrobin in fungi, with pyrrolnitrin only mentioned as a co-agent in efficacy screening, and no pharmacokinetic parameters are reported. |
| PGx | Rieusset_2022 | not_relevant | 0 | 0 | The paper studies ecological interactions between wheat and Pseudomonas bacteria, not the pharmacokinetics or pharmacodynamics of pyrrolnitrin in a host organism. |
| popPK | Wesche_2025 | irrelevant | 0 | 0 | The study investigates fungicide resistance and gene expression in Botrytis cinerea, not the pharmacokinetics of pyrrolnitrin in an animal or human host. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
