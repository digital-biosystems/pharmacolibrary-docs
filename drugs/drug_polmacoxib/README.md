<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;polmacoxib&quot;}]"></div>

# polmacoxib

- **generic name:** polmacoxib
- **ATC codes:** `M01AH07`
- **DrugBank:** [DB12399](https://go.drugbank.com/drugs/DB12399) · **PubChem:** [CID 9841854](https://pubchem.ncbi.nlm.nih.gov/compound/9841854)
- **molar mass:** 361.39 g/mol (C18H16FNO4S) — DrugBank
- **groups:** investigational

## About

Polmacoxib is a coxib, a non-steroidal anti-inflammatory drug that inhibits COX-2, developed as an investigational anti-inflammatory and antirheumatic medicine. It remains investigational and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19598695](https://www.wikidata.org/wiki/Q19598695) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Cho_2022_WOMAC](drugs/drug_polmacoxib/pd_Cho_2022_WOMAC.md) | Western Ontario and McMaster Universities Osteoarthritis Index ← polmacoxib · delayed effect through an effect compartment | — | Cho YS et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2022) | [10.1016/j.clinthera.2021.11.008](https://doi.org/10.1016/j.clinthera.2021.11.008) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=polmacoxib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:11 | 0:28 | 0/0/0 | 1/0/0 | 0/0/0 | 5,764/570 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cho_2022.pdf` | Cho YS et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2022) | popPK | 10 | [10.1016/j.clinthera.2021.11.008](https://doi.org/10.1016/j.clinthera.2021.11.008) | [34974943](https://pubmed.ncbi.nlm.nih.gov/34974943) | The study reports a population PK model for polmacoxib, but the specific quantitative parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-07 01:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2022 | relevant | 10 | 0 | The study reports a population PK model for polmacoxib, but the specific quantitative parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolmacoxib%5D&body=Drug%3A%20polmacoxib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polmacoxib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
