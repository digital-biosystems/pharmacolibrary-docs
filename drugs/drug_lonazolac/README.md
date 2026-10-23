<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;lonazolac&quot;}]"></div>

# lonazolac

- **generic name:** lonazolac
- **ATC codes:** `M01AB09`
- **DrugBank:** [DB13432](https://go.drugbank.com/drugs/DB13432) · **PubChem:** none
- **molar mass:** 312.75 g/mol (C17H13ClN2O2) — DrugBank
- **groups:** experimental

## About

Lonazolac is a non-steroidal anti-inflammatory drug (NSAID) of the acetic acid derivative class, used for inflammatory and rheumatic conditions. It appears to be only experimental and is not an established marketed medicine; its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6669652](https://www.wikidata.org/wiki/Q6669652) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Elkady_2012_mPGES_1](drugs/drug_lonazolac/pd_Elkady_2012_mPGES_1.md) | mPGES-1 ← lonazolac derivative 22 · inhibition effect | — | Elkady M et al., Modified acidic nonsteroidal anti-infla…, Journal of medicinal chemis… (2012) | [10.1021/jm3010543](https://doi.org/10.1021/jm3010543) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:52 | 1:17 | 0/0/0 | 0/1/0 | 0/0/0 | 19,879/621 | einfracz / qwen3.8-27b | 2 | 0/0 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vinge_1986.pdf` | Vinge E et al., Compared effects of the two antiinflamm…, Acta pharmacologica et toxi… (1986) | pd | 5 | [10.1111/j.1600-0773.1986.tb00150.x](https://doi.org/10.1111/j.1600-0773.1986.tb00150.x) | [3799197](https://www.ncbi.nlm.nih.gov/pubmed/3799197) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 01:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huber_1990 | relevant | 4 | 1 | The study reports qualitative PK findings and half-life estimates for lonazolac in humans, but specific numeric values for clearance, volume of distribution, or precise half-lives are not present in the provided text, appearing to be omitted or in tables not included. |
| popPK | Naeff_1990 | irrelevant | 2 | 0 | The study reports qualitative PK behavior and half-life of the liposome vehicle but lacks quantitative clearance, volume, or compartmental model parameters for lonazolac. |
| popPK | Stehlík_1991 | irrelevant | 2 | 0 | The paper describes an analytical method and mentions PK parameters derived from a one-compartment model, but no specific quantitative values for clearance, volume, or half-life are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blonazolac%5D&body=Drug%3A%20lonazolac%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lonazolac/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
