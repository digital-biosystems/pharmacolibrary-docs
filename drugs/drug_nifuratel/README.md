<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;nifuratel&quot;}]"></div>

# nifuratel

- **generic name:** nifuratel
- **ATC codes:** `G01AX05`
- **DrugBank:** [DB13724](https://go.drugbank.com/drugs/DB13724) · **PubChem:** not captured
- **molar mass:** 285.27 g/mol (C10H11N3O5S) — DrugBank
- **groups:** investigational

## About

Nifuratel is an antiinfective used against gynecological infections such as trichomoniasis and urinary tract infections. It is considered investigational in DrugBank and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3876717](https://www.wikidata.org/wiki/Q3876717) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:09 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 13,469/341 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2007.pdf` | Li XL et al., An improved HPLC method for determinati…, European journal of drug me… (2007) | popPK | 8 | [10.1007/BF03190994](https://doi.org/10.1007/BF03190994) | [17702193](https://pubmed.ncbi.nlm.nih.gov/17702193) | The study reports population PK parameters (t1/2, Cmax, AUC) for nifuratel in humans, but the specific numeric values for these parameters are not present in the provided evidence text. |

<sub>queue written 2026-10-07T08:09:50.258106+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2007 | relevant | 8 | 2 | The study reports population PK parameters (t1/2, Cmax, AUC) for nifuratel in humans, but the specific numeric values for these parameters are not present in the provided evidence text. |
| popPK | Wu_2005 | irrelevant | 2 | 1 | The paper reports a bioequivalence study with qualitative PK comparisons and no specific numeric values for clearance, volume, or absolute bioavailability. |
| popPK | Xie_2023 | irrelevant | 1 | 1 | The study is a mechanistic investigation of nifuratel's antibacterial and anti-inflammatory effects in macrophages and mice, not a pharmacokinetic study, and the single mentioned half-life value is a general literature citation rather than original data from this work. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
