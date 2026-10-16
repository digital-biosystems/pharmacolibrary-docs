<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;mifamurtide&quot;}]"></div>

# mifamurtide

- **generic name:** mifamurtide
- **ATC codes:** `L03AX15`
- **DrugBank:** [DB13615](https://go.drugbank.com/drugs/DB13615) · **PubChem:** not captured
- **molar mass:** 1277.515 g/mol (C59H110N6NaO20P) — DrugBank
- **groups:** approved, investigational

## About

Mifamurtide is an immunostimulant medicine used to treat osteosarcoma. It is authorised in the European Union, but its use appears limited to this niche indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411175](https://www.wikidata.org/wiki/Q411175) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:45 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 16,552/354 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mifamurtide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: NOD2 (target), TLR4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Venkatakrishnan_2012.pdf` | Venkatakrishnan K et al., A pharmacokinetic, pharmacodynamic, and…, European journal of clinica… (2012) | popPK | 8 | [10.1007/s00228-012-1262-1](https://doi.org/10.1007/s00228-012-1262-1) | [22460239](https://pubmed.ncbi.nlm.nih.gov/22460239) | Reports mifamurtide PK in humans with a half-life, but lacks explicit CL, V, or Q values in the evidence. |
| `Anderson_2014.pdf` | Anderson PM et al., Mifamurtide in metastatic and recurrent…, Pediatric blood & cancer (2014) | popPK | 7 | [10.1002/pbc.24686](https://doi.org/10.1002/pbc.24686) | [23997016](https://pubmed.ncbi.nlm.nih.gov/23997016) | Reports quantitative PK parameters for mifamurtide in humans, including half-life, but specific values for clearance and volume of distribution are described as being BSA-normalized or consistent with prior studies without explicit numeric values provided in the text. |
| `Venkatakrishnan_2014.pdf` | Venkatakrishnan K et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2014) | popPK | 5 | [10.1111/bcp.12260](https://doi.org/10.1111/bcp.12260) | [24134181](https://pubmed.ncbi.nlm.nih.gov/24134181) | The study is a human PK trial for mifamurtide reporting AUC and stating clearance was not correlated, but it lacks explicit numeric values for CL, V, ka, or t1/2 required for model extraction. |

<sub>queue written 2026-10-06T22:45:41.566172+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2014 | relevant | 7 | 4 | Reports quantitative PK parameters for mifamurtide in humans, including half-life, but specific values for clearance and volume of distribution are described as being BSA-normalized or consistent with prior studies without explicit numeric values provided in the text. |
| popPK | Gilabert-Oriol_2018 | irrelevant | 0 | 0 | The paper is a review of liposomal formulations for cancer therapy and does not report quantitative pharmacokinetic parameters for mifamurtide. |
| popPK | Venkatakrishnan_2012 | relevant | 8 | 3 | Reports mifamurtide PK in humans with a half-life, but lacks explicit CL, V, or Q values in the evidence. |
| popPK | Venkatakrishnan_2014 | relevant | 5 | 3 | The study is a human PK trial for mifamurtide reporting AUC and stating clearance was not correlated, but it lacks explicit numeric values for CL, V, ka, or t1/2 required for model extraction. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
