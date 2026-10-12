<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;doxofylline&quot;}]"></div>

# doxofylline

- **generic name:** doxofylline
- **ATC codes:** `R03DA11`
- **DrugBank:** [DB09273](https://go.drugbank.com/drugs/DB09273) · **PubChem:** [CID 50942](https://pubchem.ncbi.nlm.nih.gov/compound/50942)
- **molar mass:** 266.257 g/mol (C11H14N4O4) — DrugBank
- **groups:** investigational

## About

Doxofylline is a xanthine bronchodilator used to treat obstructive airway diseases such as asthma and chronic obstructive pulmonary disease. It is not authorised in the European Union and is considered investigational in major drug databases, though it is used in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425887](https://www.wikidata.org/wiki/Q425887) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:54 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 6,463/464 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=doxofylline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADORA2A (target), ADRB2 (target), PDE2A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_1997.pdf` | Guo H et al., [Preliminary study on the absorption, d…, Yao xue xue bao = Acta phar… (1997) | popPK | 10 | not captured | [11243204](https://pubmed.ncbi.nlm.nih.gov/11243204) | The study reports quantitative pharmacokinetic parameters (T1/2, CL/F trends, plasma protein binding) for doxophylline in rats with specific numeric values provided in the abstract. |
| `Li_2013.pdf` | Li XP et al., Effects of andrographolide on the pharm…, Drug research (2013) | pgx | 7 | [10.1055/s-0033-1341432](https://doi.org/10.1055/s-0033-1341432) | [23539425](https://www.ncbi.nlm.nih.gov/pubmed/23539425) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T21:54:39.031848+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Franzone_1988 | irrelevant | 0 | 0 | The study reports pharmacological and toxicological data (EC50, diuresis, convulsion threshold) in animals, but contains no quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life for doxofylline. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (andrographolide effect) in rats, not a pharmacogenomic effect (gene variant/genotype) on doxofylline pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
