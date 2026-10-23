<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;temafloxacin&quot;}]"></div>

# temafloxacin

- **generic name:** temafloxacin
- **ATC codes:** `J01MA05`
- **DrugBank:** [DB01405](https://go.drugbank.com/drugs/DB01405) · **PubChem:** [CID 60021](https://pubchem.ncbi.nlm.nih.gov/compound/60021)
- **molar mass:** 417.3811 g/mol (C21H18F3N3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Temafloxacin is a fluoroquinolone antibiotic that was used to treat bacterial infections. It was withdrawn from the market shortly after its introduction because of serious adverse reactions reported in patients taking the drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3983082](https://www.wikidata.org/wiki/Q3983082) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.10).">human + animal</span> | [Krasula_1991_ERG](drugs/drug_temafloxacin/pd_Krasula_1991_ERG.md) | electroretinographic (ERG) changes ← temafloxacin · inhibition effect | — | Krasula RW et al., Comparison of organ-specific toxicity o…, The American journal of med… (1991) | [10.1016/0002-9343(91)90309-l](https://doi.org/10.1016/0002-9343(91)90309-l) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">mouse</span> | [Pattyn_1991_activity](drugs/drug_temafloxacin/pd_Pattyn_1991_activity.md) | Anti-Mycobacterium leprae activity biomarker turnover ← temafloxacin | — | Pattyn SR, Anti-Mycobacterium leprae activity of s…, International journal of le… (1991) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=temafloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:25 | 2:24 | 0/0/0 | 2/0/0 | 0/0/0 | 62,570/1,266 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Granneman_1992_2.pdf` | Granneman GR et al., Pharmacokinetics of temafloxacin in hum…, Antimicrobial agents and ch… (1992) | popPK | 10 | [10.1128/aac.36.2.378](https://doi.org/10.1128/aac.36.2.378) | [1318680](https://pubmed.ncbi.nlm.nih.gov/1318680) | The text provides explicit quantitative values for total clearance (197 ml/min), renal clearance (119 ml/min), nonrenal clearance (78 ml/min), and half-life (8.4 h) for temafloxacin in humans. |

<sub>queue written 2026-10-07 12:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Klemens_1992 | irrelevant | 0 | 0 | The study focuses on the antimicrobial activity of clarithromycin in mice, and temafloxacin is only used as a comparator drug in combination therapy without any pharmacokinetic data being reported for it. |
| popPK | Kozawa_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for balofloxacin and grepafloxacin, not temafloxacin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btemafloxacin%5D&body=Drug%3A%20temafloxacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_temafloxacin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
