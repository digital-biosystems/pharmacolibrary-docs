<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;ambenonium&quot;}]"></div>

# ambenonium

- **generic name:** ambenonium
- **ATC codes:** `N07AA30`
- **DrugBank:** [DB01122](https://go.drugbank.com/drugs/DB01122) · **PubChem:** [CID 2131](https://pubchem.ncbi.nlm.nih.gov/compound/2131)
- **molar mass:** 537.565 g/mol (C28H42Cl2N4O2) — DrugBank
- **groups:** approved, withdrawn

## About

Ambenonium is an acetylcholinesterase inhibitor that was used to treat myasthenia gravis. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4064027](https://www.wikidata.org/wiki/Q4064027) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:19 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 610/53 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ambenonium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

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

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tharasse-Bloch_1989.pdf` | Tharasse-Bloch C et al., Pharmacokinetics of ambenonium chloride…, Arzneimittel-Forschung (1989) | popPK | 8 | not captured | [2730696](https://pubmed.ncbi.nlm.nih.gov/2730696) | PK study of ambenonium in dogs, but no numeric parameter values are present in the evidence. |
| `Yamamoto_1996.pdf` | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | pd | 4 | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) | [8910857](https://www.ncbi.nlm.nih.gov/pubmed/8910857) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:19:38.670758+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Tharasse-Bloch_1989 | relevant | 8 | 2 | PK study of ambenonium in dogs, but no numeric parameter values are present in the evidence. |
| popPK | Yamamoto_1996_2 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
