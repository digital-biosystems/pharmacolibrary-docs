<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;dimemorfan&quot;}]"></div>

# dimemorfan

- **generic name:** dimemorfan
- **ATC codes:** `R05DA11`
- **DrugBank:** [DB13810](https://go.drugbank.com/drugs/DB13810) · **PubChem:** not captured
- **molar mass:** 255.405 g/mol (C18H25N) — DrugBank
- **groups:** experimental

## About

Dimemorfan is a morphinan-derived cough suppressant (antitussive). It is considered an experimental drug and is not an established, widely approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5277240](https://www.wikidata.org/wiki/Q5277240) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:13 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 4,897/270 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pei_2015.pdf` | Pei Q et al., Cytochrome P450 2D6*10 genotype affects…, European journal of drug me… (2015) | popPK | 9 | [10.1007/s13318-014-0221-x](https://doi.org/10.1007/s13318-014-0221-x) | [25159483](https://pubmed.ncbi.nlm.nih.gov/25159483) | Study reports pharmacokinetic parameters (CL, V) for dimemorfan in humans, but only qualitative comparisons and specific Cmax values are present in the text, lacking a full quantitative compartmental/population PK model or detailed parameter estimates for all endpoints. |

<sub>queue written 2026-10-07T22:13:30.108431+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chou_2010 | not_relevant | 3 | 5 | The paper identifies the P450 enzymes (CYP2D6, CYP3A4, etc.) responsible for dimemorfan metabolism but does not report the effect of specific genetic variants, genotypes, or phenotypes (e.g., poor metabolizers vs. extensive metabolizers) on pharmacokinetic parameters. |
| popPK | Pei_2015 | relevant | 9 | 3 | Study reports pharmacokinetic parameters (CL, V) for dimemorfan in humans, but only qualitative comparisons and specific Cmax values are present in the text, lacking a full quantitative compartmental/population PK model or detailed parameter estimates for all endpoints. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
