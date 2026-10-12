<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;acetyldigitoxin&quot;}]"></div>

# acetyldigitoxin

- **generic name:** acetyldigitoxin
- **ATC codes:** `C01AA01`
- **DrugBank:** [DB00511](https://go.drugbank.com/drugs/DB00511) · **PubChem:** [CID 5284512](https://pubchem.ncbi.nlm.nih.gov/compound/5284512)
- **molar mass:** 806.9757 g/mol (C43H66O14) — DrugBank
- **groups:** approved

## About

Acetyldigitoxin is a digitalis glycoside used as a cardiotonic and antiarrhythmic agent for heart conditions. It is an approved pharmaceutical drug, though it appears to be little used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4673299](https://www.wikidata.org/wiki/Q4673299) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:53 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 17,295/32 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `González-García_1987.pdf` | González-García C et al., Characterization of the alpha +-like Na…, Molecular pharmacology (1987) | pd | 4 | not captured | [2826993](https://www.ncbi.nlm.nih.gov/pubmed/2826993) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T01:52:59.071593+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bodem_1975 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | González-García_1987 | irrelevant | 0 | 0 | no_text gate: only 190 chars of text extracted (&lt; 400) |
| PD | González-García_1987 | not_relevant | 0 | 0 | The paper studies ouabain inhibition of N-acetyltransferase in pinealocytes and does not report pharmacodynamic or exposure-response data for acetyldigitoxin. |
| popPK | Ji_2026 | irrelevant | 0 | 0 | The paper is a computational and in-vitro mechanistic study of acetyldigitoxin as an EZH2 inhibitor, reporting no pharmacokinetic parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for acetyldigitoxin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
