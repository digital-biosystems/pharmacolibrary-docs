<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;fibrinogen (125I)&quot;}]"></div>

# fibrinogen (125I)

- **generic name:** fibrinogen (125I)
- **ATC codes:** `V09GB01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Fibrinogen I-125 is a radiolabelled fibrinogen used as a diagnostic radiopharmaceutical for imaging the cardiovascular system. It is classified as an iodinated contrast agent and has been described as an approved drug, though its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106830016](https://www.wikidata.org/wiki/Q106830016) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:44 | 2:22 | 0/0/0 | 0/0/0 | 0/0/0 | 15,432/5,750 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_1977.pdf` | Lee J et al., Comparison of iodine monochloride and m…, The Journal of laboratory a… (1977) | popPK | 9 | not captured | [845483](https://pubmed.ncbi.nlm.nih.gov/845483) | Rabbit fibrinogen clearance is studied, but no numeric disposition parameter values appear in the provided evidence. |
| `Meyer_1978.pdf` | Meyer EC et al., Fibrinogen clearance from alveoli, Journal of applied physiolo… (1978) | popPK | 8 | [10.1152/jappl.1978.45.4.516](https://doi.org/10.1152/jappl.1978.45.4.516) | [711566](https://pubmed.ncbi.nlm.nih.gov/711566) | Dog study reports a numeric intra-alveolar degradation rate for 125I-fibrinogen. |

<sub>queue written 2026-10-07T19:43:37.379042+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1992 | irrelevant | 0 | 0 | 125I-fibrinogen is a tracer measuring thrombus accretion, not the subject of a pharmacokinetic analysis. |
| popPK | Baker_1985 | irrelevant | 0 | 0 | 125I-fibrinogen is only a comparator, with no quantitative disposition parameters reported for it. |
| popPK | Bent-Hansen_1991 | irrelevant | 1 | 0 | 125I-fibrinogen is only a plasma marker; reported transfer parameters are for albumin. |
| popPK | Bent-Hansen_1991_2 | irrelevant | 1 | 0 | 125I-fibrinogen is only a plasma reference; the reported quantitative disposition parameters are for albumin. |
| popPK | Dubovsky_1988 | irrelevant | 0 | 0 | This is a review of renal transplant imaging and provides no quantitative pharmacokinetic parameters for fibrinogen_125i. |
| popPK | Harwig_1975 | irrelevant | 1 | 0 | It mentions blood clearance in experimental animals but reports no numeric pharmacokinetic parameters. |
| popPK | Lee_1977 | relevant | 9 | 0 | Rabbit fibrinogen clearance is studied, but no numeric disposition parameter values appear in the provided evidence. |
| popPK | Owen_1976 | irrelevant | 0 | 0 | 125I-fibrinogen is used only to measure intravascular plasma volume; the reported disposition findings concern albumin. |
| popPK | Sherman_1982 | irrelevant | 1 | 0 | 125I-fibrinogen is administered, but no quantitative disposition parameters are reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
