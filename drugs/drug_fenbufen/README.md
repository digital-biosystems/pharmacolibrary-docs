<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;fenbufen&quot;}]"></div>

# fenbufen

- **generic name:** fenbufen
- **ATC codes:** `M01AE05`
- **DrugBank:** [DB08981](https://go.drugbank.com/drugs/DB08981) · **PubChem:** [CID 3335](https://pubchem.ncbi.nlm.nih.gov/compound/3335)
- **molar mass:** 254.2806 g/mol (C16H14O3) — DrugBank
- **groups:** approved

## About

It is an approved medicine, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2304195](https://www.wikidata.org/wiki/Q2304195) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:48 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 6,533/275 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fenbufen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

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

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cuisinaud_1979.pdf` | Cuisinaud G et al., Pharmacokinetics of fenbufen in man, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00644968](https://doi.org/10.1007/BF00644968) | [315314](https://pubmed.ncbi.nlm.nih.gov/315314) | Reports specific pharmacokinetic parameters including Cmax, tmax, and half-life for fenbufen in humans, though clearance and volume values are not explicitly listed in the text. |
| `Marchand_2000.pdf` | Marchand S et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2000) | pd | 5 | [10.1038/sj.bjp.0703260](https://doi.org/10.1038/sj.bjp.0703260) | [10780965](https://www.ncbi.nlm.nih.gov/pubmed/10780965) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T00:48:54.044249+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Marchand_2000 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Squires_1993 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on GABA receptor binding, not a pharmacokinetic study for fenbufen. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
