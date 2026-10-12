<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;distigmine&quot;}]"></div>

# distigmine

- **generic name:** distigmine
- **ATC codes:** `N07AA03`
- **DrugBank:** [DB13694](https://go.drugbank.com/drugs/DB13694) · **PubChem:** [CID 3116](https://pubchem.ncbi.nlm.nih.gov/compound/3116)
- **molar mass:** 416.521 g/mol (C22H32N4O4) — DrugBank
- **groups:** investigational

## About

Distigmine is an acetylcholinesterase inhibitor that has been used to treat myasthenia gravis and neurogenic bladder. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27149809](https://www.wikidata.org/wiki/Q27149809) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:47 | 0:18 | 0/0/0 | 0/1/0 | 0/0/0 | 12,344/605 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ito_2010_AChE](drugs/drug_distigmine/pd_Ito_2010_AChE.md) | acetylcholinesterase (AChE) activity in whole blood ← distigmine · delayed effect through an effect compartment | — | Ito Y et al., Pharmacokinetic and pharmacodynamic ana…, Drug metabolism and pharmac… (2010) | [10.2133/dmpk.25.254](https://doi.org/10.2133/dmpk.25.254) |

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

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ito_2010.pdf` | Ito Y et al., Pharmacokinetic and pharmacodynamic ana…, Drug metabolism and pharmac… (2010) | popPK | 7 | [10.2133/dmpk.25.254](https://doi.org/10.2133/dmpk.25.254) | [20610884](https://pubmed.ncbi.nlm.nih.gov/20610884) | PK/PD modeling of distigmine in rats, but no numeric parameter values (CL, V, ka, ke0) appear in the abstract; values likely in figures/tables not provided. |

<sub>queue written 2026-10-07T01:47:53.283998+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ito_2010 | relevant | 7 | 2 | PK/PD modeling of distigmine in rats, but no numeric parameter values (CL, V, ka, ke0) appear in the abstract; values likely in figures/tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
