<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;itacitinib&quot;}]"></div>

# itacitinib

- **generic name:** itacitinib
- **ATC codes:** `L04AF05`
- **DrugBank:** [DB12154](https://go.drugbank.com/drugs/DB12154) · **PubChem:** [CID 53380437](https://pubchem.ncbi.nlm.nih.gov/compound/53380437)
- **molar mass:** 553.526 g/mol (C26H23F4N9O) — DrugBank
- **groups:** investigational

## About

Itacitinib is a Janus kinase (JAK) inhibitor investigated as an immunosuppressive drug. It remains investigational and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27891174](https://www.wikidata.org/wiki/Q27891174) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:04 | 0:08 | 0/0/0 | 0/0/0 | 0/0/0 | 1,301/156 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=itacitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: JAK1 (inhibitor), JAK2 (inhibitor).</sub>

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

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2023.pdf` | Chen X et al., Itacitinib Population Pharmacokinetics…, Journal of clinical pharmac… (2023) | pd | 5 | [10.1002/jcph.2202](https://doi.org/10.1002/jcph.2202) | [36601737](https://www.ncbi.nlm.nih.gov/pubmed/36601737) | metadata signals extractable PD data (Exposure-Response) |
| `Barbour_2019.pdf` | Barbour AM et al., Effect of Itraconazole or Rifampin on I…, Journal of clinical pharmac… (2019) | pgx | 7 | [10.1002/jcph.1484](https://doi.org/10.1002/jcph.1484) | [31282592](https://www.ncbi.nlm.nih.gov/pubmed/31282592) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-15T04:04:11.715262+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barbour_2019 | not_relevant | 0 | 1 | The study evaluates drug-drug interactions (CYP3A4 inhibition/induction) rather than pharmacogenomic variants. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PGx | Rosenberg_2022 | not_relevant | 2 | 2 | The paper reports a case of therapeutic success where itacitinib improved clinical outcomes in a patient with a STAT1 gain-of-function variant, but it does not report a pharmacogenomic effect (i.e., a change in PK or PD parameters) of itacitinib driven by the specific genetic variant compared to others; rather, it describes the mechanism of disease and treatment response. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
