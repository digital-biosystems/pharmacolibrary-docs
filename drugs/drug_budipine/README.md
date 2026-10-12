<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;budipine&quot;}]"></div>

# budipine

- **generic name:** budipine
- **ATC codes:** `N04BX03`
- **DrugBank:** [DB13502](https://go.drugbank.com/drugs/DB13502) · **PubChem:** not captured
- **molar mass:** 293.454 g/mol (C21H27N) — DrugBank
- **groups:** experimental

## About

Budipine is a dopaminergic antiparkinson drug used to treat Parkinson's disease. It is not an approved medicine today and is considered experimental, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28128](https://www.wikidata.org/wiki/Q28128) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:55 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 6,039/602 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=budipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOB` modulator | DrugBank actor |
| metabolism | platelet | `MAOB` modulator | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jackisch_1994.pdf` | Jackisch R et al., The antiparkinsonian drugs budipine and…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)00528-1](https://doi.org/10.1016/0014-2999(94)00528-1) | [7851484](https://www.ncbi.nlm.nih.gov/pubmed/7851484) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T12:55:28.058816+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jackisch_1994 | irrelevant | 0 | 0 | In-vitro mechanistic receptor study with no pharmacokinetic disposition parameters for budipine. |
| PGx | Lelas_1999 | not_relevant | 2 | 3 | Budipine is used as a CYP2D6 inhibitor in monkeys, not as the drug of interest; no gene variant/genotype effect on budipine PK/PD is reported. |
| PGx | Ramamoorthy_2001 | not_relevant | 2 | 5 | Budipine appears only as an inhibitor (Ki ratio 1.3) of CYP2D6 metabolism of other substrates; no PK/PD parameter of budipine itself is reported. |
| PGx | Tomkins_1997 | not_relevant | 2 | 3 | Budipine is used as a CYP2D1 inhibitor; no gene variant/genotype effect on budipine's own PK or PD parameters is reported. |
| PGx | Tomkins_1997_2 | not_relevant | 2 | 3 | Budipine is used as a CYP2D1 inhibitor to alter hydrocodone metabolism; no pharmacogenomic effect on budipine's own PK/PD parameters is reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
