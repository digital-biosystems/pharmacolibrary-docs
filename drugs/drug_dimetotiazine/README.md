<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;dimetotiazine&quot;}]"></div>

# dimetotiazine

- **generic name:** dimetotiazine
- **ATC codes:** `N02CX05`
- **DrugBank:** [DB08967](https://go.drugbank.com/drugs/DB08967) · **PubChem:** [CID 3089](https://pubchem.ncbi.nlm.nih.gov/compound/3089)
- **molar mass:** 391.55 g/mol (C19H25N3O2S2) — DrugBank
- **groups:** approved

## About

Dimetotiazine is an antihistamine (H1 antagonist) used as an antimigraine medicine to treat migraine. It is an approved drug but is not widely used; it is available only in a few countries and is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27097974](https://www.wikidata.org/wiki/Q27097974) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:30 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 1,810/123 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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
| `Watano_1997.pdf` | Watano T et al., Inhibitory effect of lomerizine, a diph…, Japanese journal of pharmac… (1997) | pd | 4 | [10.1254/jjp.75.209](https://doi.org/10.1254/jjp.75.209) | [9414039](https://www.ncbi.nlm.nih.gov/pubmed/9414039) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T06:30:12.675951+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Shimazawa_1995 | irrelevant | 0 | 0 | Dimetotiazine is used only as a control/comparator agent in a neurophysiology study on cerebral blood flow, with no pharmacokinetic parameters reported. |
| popPK | Watano_1997 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | Watano_1997 | not_relevant | 0 | 0 | The paper studies lomerizine, not dimetotiazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
