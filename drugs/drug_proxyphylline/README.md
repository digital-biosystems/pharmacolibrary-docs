<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;proxyphylline&quot;}]"></div>

# proxyphylline

- **generic name:** proxyphylline
- **ATC codes:** `R03DA03`, `R03DB03`
- **DrugBank:** [DB13449](https://go.drugbank.com/drugs/DB13449) · **PubChem:** not captured
- **molar mass:** 238.247 g/mol (C10H14N4O3) — DrugBank
- **groups:** experimental

## About

Proxyphylline is a xanthine bronchodilator developed for obstructive airway diseases such as asthma. It is now considered an experimental drug and is not in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7252904](https://www.wikidata.org/wiki/Q7252904) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 6,646/469 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Selvig_1981.pdf` | Selvig K, Pharmacokinetics of proxyphylline in ad…, European journal of clinica… (1981) | popPK | 10 | [10.1007/BF00568402](https://doi.org/10.1007/BF00568402) | [7202475](https://pubmed.ncbi.nlm.nih.gov/7202475) | The paper reports quantitative PK parameters (Vd, half-life, clearance) for proxyphylline in adults directly in the abstract. |
| `Kalla_1985.pdf` | Kalla M et al., [Pharmacokinetics and pharmacodynamics…, Monatsschrift Kinderheilkun… (1985) | popPK | 5 | not captured | [4047067](https://pubmed.ncbi.nlm.nih.gov/4047067) | The paper describes a pharmacokinetic study of proxyphylline in humans using compartmental models, but no numeric parameter values are provided in the extracted evidence. |

<sub>queue written 2026-10-07T22:08:54.211893+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borowiecki_2018 | irrelevant | 0 | 0 | The study reports in vitro and in vivo antimicrobial/anticancer activity (IC50/EC50) but contains no pharmacokinetic or disposition parameters. |
| popPK | Kalla_1985 | relevant | 5 | 0 | The paper describes a pharmacokinetic study of proxyphylline in humans using compartmental models, but no numeric parameter values are provided in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
