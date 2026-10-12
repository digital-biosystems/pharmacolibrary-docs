<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;adrafinil&quot;}]"></div>

# adrafinil

- **generic name:** adrafinil
- **ATC codes:** `N06BX17`
- **DrugBank:** [DB08925](https://go.drugbank.com/drugs/DB08925) · **PubChem:** not captured
- **molar mass:** 289.35 g/mol (C15H15NO3S) — DrugBank
- **groups:** approved, withdrawn

## About

Adrafinil is a eugeroic (wakefulness-promoting) nootropic that was used to treat excessive daytime sleepiness and narcolepsy. It is no longer in medical use; it was withdrawn because long-term treatment can harm the liver.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q366482](https://www.wikidata.org/wiki/Q366482) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:07 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 5,743/334 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rao_2008.pdf` | Rao RN et al., LC-ESI-MS determination and pharmacokin…, Journal of chromatography.… (2008) | popPK | 6 | [10.1016/j.jchromb.2008.07.025](https://doi.org/10.1016/j.jchromb.2008.07.025) | [18723408](https://pubmed.ncbi.nlm.nih.gov/18723408) | PK study of adrafinil in rats, but the abstract only describes the assay; numeric PK parameter values are not shown in the evidence. |

<sub>queue written 2026-10-07T00:07:05.995582+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hascoët_1998 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for adrafinil reported. |
| popPK | Rao_2008 | relevant | 6 | 3 | PK study of adrafinil in rats, but the abstract only describes the assay; numeric PK parameter values are not shown in the evidence. |
| popPK | Sousa_2020 | irrelevant | 2 | 0 | This is a narrative review of modafinil (adrafinil only mentioned as prodrug) with no quantitative PK parameter values reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
