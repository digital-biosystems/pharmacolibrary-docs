<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;urofollitropin&quot;}]"></div>

# urofollitropin

- **generic name:** urofollitropin
- **ATC codes:** `G03GA04`
- **DrugBank:** [DB00094](https://go.drugbank.com/drugs/DB00094) · **PubChem:** not captured
- **groups:** approved, vet_approved, withdrawn

## About

Urofollitropin is a gonadotropin used to treat ovarian disease, including polyendocrine metabolic ovarian syndrome, by stimulating ovulation. It was approved for human and veterinary use but has been withdrawn and is no longer available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4006490](https://www.wikidata.org/wiki/Q4006490) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:02 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 43,863/934 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=urofollitropin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FSHR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Porchet_1993.pdf` | Porchet HC et al., Pharmacokinetics of recombinant human f…, Drug metabolism and disposi… (1993) | popPK | 10 | not captured | [8095209](https://pubmed.ncbi.nlm.nih.gov/8095209) | The study reports quantitative pharmacokinetic parameters (clearance, half-lives) for urofollitropin in monkeys, with numeric values provided in the abstract. |

<sub>queue written 2026-10-07T09:02:41.850435+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Simoni_1993 | irrelevant | 0 | 0 | This is an in-vitro molecular characterization study analyzing batch heterogeneity, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Ulloa-Aguirre_1995 | irrelevant | 2 | 0 | The study focuses on immunological and molecular composition (charge heterogeneity, bioactivity) rather than quantitative pharmacokinetic disposition parameters like CL, Vd, or ka. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
