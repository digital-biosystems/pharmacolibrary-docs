<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;benorilate&quot;}]"></div>

# benorilate

- **generic name:** benorilate
- **ATC codes:** `N02BA10`
- **DrugBank:** [DB13657](https://go.drugbank.com/drugs/DB13657) · **PubChem:** not captured
- **molar mass:** 313.309 g/mol (C17H15NO5) — DrugBank
- **groups:** approved

## About

Benorilate is an analgesic and anti-inflammatory drug of the salicylic acid group, used to relieve pain and fever. It is an approved medicine, but it is not widely used and has no authorisation recorded with the European medicines regulator.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q373243](https://www.wikidata.org/wiki/Q373243) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:48 | 0:01 | 0/0/0 | 0/0/0 | 0/0/0 | 1,638/154 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_1994.pdf` | Chen J et al., [Studies on formulation and bioavailabi…, Yao xue xue bao = Acta phar… (1994) | popPK | 5 | not captured | [7900541](https://pubmed.ncbi.nlm.nih.gov/7900541) | The study reports bioavailability parameters for benorilate metabolites (salicylic acid/paracetamol) rather than benorilate itself, and lacks explicit compartmental PK parameters (CL, V, ka) for the parent drug or a full PK model fit. |

<sub>queue written 2026-10-07T05:48:42.935530+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1994 | irrelevant | 5 | 0 | The study reports bioavailability parameters for benorilate metabolites (salicylic acid/paracetamol) rather than benorilate itself, and lacks explicit compartmental PK parameters (CL, V, ka) for the parent drug or a full PK model fit. |
| popPK | Ferreira_2026 | irrelevant | 0 | 0 | The paper is a DFT study of the structural and optical properties of salicylic acid, aspirin, acetaminophen, and ibuprofen crystals, and does not involve benorilate or pharmacokinetic parameters. |
| popPK | Gao_2012 | irrelevant | 0 | 0 | Benorilate is used only as an internal standard for the quantitation of deacetyl mycoepoxydiene, not as the subject drug for PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
