<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) disofenin&quot;}]"></div>

# technetium (99mTc) disofenin

- **generic name:** technetium (99mTc) disofenin
- **ATC codes:** `V09DA01`
- **DrugBank:** [DB09164](https://go.drugbank.com/drugs/DB09164) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Technetium Tc-99m disofenin is a radiopharmaceutical used as a diagnostic imaging agent for the liver and related hepatobiliary system. It was once approved but has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075866](https://www.wikidata.org/wiki/Q22075866) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:22 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 6,854/580 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=technetium_99mtc_disofenin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Michael_2006.pdf` | Michael M et al., Relationship of hepatic functional imag…, Journal of clinical oncolog… (2006) | pgx | 8 | [10.1200/JCO.2005.04.8496](https://doi.org/10.1200/JCO.2005.04.8496) | [16896007](https://www.ncbi.nlm.nih.gov/pubmed/16896007) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-07T19:22:13.831420+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Michael_2006 | not_relevant | 0 | 0 | The reported ABCB1 genotype association is with MIBI excretion, not a pharmacokinetic or pharmacodynamic parameter of technetium-99m disofenin. |
| popPK | Métayer_2004 | irrelevant | 1 | 0 | Technetium-99m disofenin is only a tracer for measuring meal emptying, not the subject of a PK study, and no numeric PK parameter values are provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
