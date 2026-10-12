<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;carfecillin&quot;}]"></div>

# carfecillin

- **generic name:** carfecillin
- **ATC codes:** `G01AA08`
- **DrugBank:** [DB13506](https://go.drugbank.com/drugs/DB13506) · **PubChem:** not captured
- **molar mass:** 454.5 g/mol (C23H22N2O6S) — DrugBank
- **groups:** experimental

## About

Carfecillin is an antibiotic that was used as a urinary anti-infective to treat infections of the urinary tract. It is no longer in routine clinical use and is regarded as an experimental agent, with no current marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5039237](https://www.wikidata.org/wiki/Q5039237) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:47 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 6,784/285 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Graber_1978.pdf` | Graber H et al., Pharmacokinetic and clinical studies wi…, International journal of cl… (1978) | popPK | 5 | not captured | [631972](https://pubmed.ncbi.nlm.nih.gov/631972) | The study reports pharmacokinetic observations and concentration levels for carfecillin in humans, but lacks specific quantitative disposition parameters (CL, V, t1/2, ka) required for PK modeling. |
| `Williams_1989.pdf` | Williams PS et al., Novel inhibitors of enkephalin-degradin…, Journal of enzyme inhibition (1989) | pd | 4 | [10.3109/14756368909030368](https://doi.org/10.3109/14756368909030368) | [2489237](https://www.ncbi.nlm.nih.gov/pubmed/2489237) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:47:37.833060+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Graber_1978 | relevant | 5 | 1 | The study reports pharmacokinetic observations and concentration levels for carfecillin in humans, but lacks specific quantitative disposition parameters (CL, V, t1/2, ka) required for PK modeling. |
| popPK | Modr_1977 | irrelevant | 0 | 0 | no_text gate: only 349 chars of text extracted (&lt; 400) |
| popPK | Nouws_1984 | irrelevant | 1 | 0 | The study reports that kinetic parameters were calculated but does not provide the specific numeric values for clearance, volume, or half-life in the text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
