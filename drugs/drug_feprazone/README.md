<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;feprazone&quot;}]"></div>

# feprazone

- **generic name:** feprazone
- **ATC codes:** `M01AX18`, `M02AA16`
- **DrugBank:** [DB13364](https://go.drugbank.com/drugs/DB13364) · **PubChem:** not captured
- **molar mass:** 320.392 g/mol (C20H20N2O2) — DrugBank
- **groups:** experimental

## About

Feprazone is a non-steroidal anti-inflammatory drug that was intended for inflammatory and rheumatic conditions, including topical use for joint and muscle pain. It is currently listed only as an experimental compound and does not appear to be an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q999936](https://www.wikidata.org/wiki/Q999936) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:49 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 11,071/645 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berry_1988.pdf` | Berry D et al., The disposition of feprazone and its hy…, Xenobiotica; the fate of fo… (1988) | popPK | 9 | [10.3109/00498258809041724](https://doi.org/10.3109/00498258809041724) | [3176523](https://pubmed.ncbi.nlm.nih.gov/3176523) | Reports quantitative PK parameters including half-life (30-33h) and clearance (5.2 ml/kg/h) for feprazone in humans. |

<sub>queue written 2026-10-07T00:49:37.038207+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bianchi_1981 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy trial reporting side effects and disease indices, containing no pharmacokinetic disposition parameters (CL, V, t1/2) for feprazone. |
| popPK | Laurent_1983 | irrelevant | 1 | 0 | The paper is a clinical efficacy trial that only mentions the elimination half-life qualitatively in the abstract without reporting any quantitative pharmacokinetic parameters or model values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
