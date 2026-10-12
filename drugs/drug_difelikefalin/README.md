<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;difelikefalin&quot;}]"></div>

# difelikefalin

- **generic name:** difelikefalin
- **ATC codes:** `V03AX04`
- **DrugBank:** [DB11938](https://go.drugbank.com/drugs/DB11938) · **PubChem:** [CID 24794466](https://pubchem.ncbi.nlm.nih.gov/compound/24794466)
- **molar mass:** 679.863 g/mol (C36H53N7O6) — DrugBank
- **groups:** approved, investigational

## About

Difelikefalin is used to treat pruritus (itching). It is an approved medicine with one product authorised in the European Union, and it is also being studied in further investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098992](https://www.wikidata.org/wiki/Q21098992) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:02 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 23,449/293 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=difelikefalin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRK1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ming_2026.pdf` | Ming C et al., Development of a SMEDDS for oral delive…, Journal of pharmaceutical s… (2026) | popPK | 5 | [10.1016/j.xphs.2026.104356](https://doi.org/10.1016/j.xphs.2026.104356) | [42250802](https://pubmed.ncbi.nlm.nih.gov/42250802) | Rat PK study of difelikefalin with bioavailability values, but no CL/V/compartmental parameters and no detailed numeric PK values in the evidence. |

<sub>queue written 2026-10-07T19:02:00.054077+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ming_2026 | relevant | 5 | 3 | Rat PK study of difelikefalin with bioavailability values, but no CL/V/compartmental parameters and no detailed numeric PK values in the evidence. |
| popPK | Narita_2022 | irrelevant | 3 | 0 | Efficacy/safety trial mentioning pharmacokinetics as an objective but no numeric PK parameters (CL, V, t½) are reported in the evidence. |
| popPK | Shram_2022 | irrelevant | 3 | 2 | This is an abuse-potential study; PK was only derived descriptively by NCA, and no full set of numeric disposition parameters (CL, V, t½) for difelikefalin is present in the evidence (only a truncated AUC fragment). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
