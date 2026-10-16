<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;mogamulizumab&quot;}]"></div>

# mogamulizumab

- **generic name:** mogamulizumab
- **ATC codes:** `L01FX09`, `L01XC25`
- **DrugBank:** [DB12498](https://go.drugbank.com/drugs/DB12498) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Mogamulizumab is a monoclonal antibody used as an anticancer treatment for cutaneous T-cell lymphomas, namely mycosis fungoides and Sézary syndrome. It is authorised in the European Union and is used mainly in specialist care for these rare blood cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6890447](https://www.wikidata.org/wiki/Q6890447) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:42 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 5,219/257 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mogamulizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CCR4 (target).</sub>

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

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mukai_2020.pdf` | Mukai M et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1564](https://doi.org/10.1002/jcph.1564) | [31840838](https://pubmed.ncbi.nlm.nih.gov/31840838) | The paper is a population pharmacokinetic study of mogamulizumab in humans, but the specific quantitative parameter estimates (clearance, volume, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-15T03:42:11.499164+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Iida_2015 | not_relevant | 1 | 0 | The paper discusses the development of mogamulizumab and the *initiative* to search for genomic biomarkers for efficacy and safety, but it does not report specific results or quantitative effects of gene variants on PK/PD parameters. |
| popPK | Mukai_2020 | relevant | 10 | 3 | The paper is a population pharmacokinetic study of mogamulizumab in humans, but the specific quantitative parameter estimates (clearance, volume, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Mukai_2020_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that references a population PK model but does not provide the actual quantitative disposition parameters (CL, V, etc.) for mogamulizumab in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
