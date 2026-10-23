<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;raxibacumab&quot;}]"></div>

# raxibacumab

- **generic name:** raxibacumab
- **ATC codes:** `J06BC02`
- **DrugBank:** [DB08902](https://go.drugbank.com/drugs/DB08902) · **PubChem:** none
- **groups:** approved, investigational

## About

Raxibacumab is an antibacterial monoclonal antibody used as a pharmaceutical drug. It is an approved medicine, but it is not authorised in the European Union and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7297093](https://www.wikidata.org/wiki/Q7297093) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=raxibacumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:53 | 0:12 | 0/0/0 | 0/0/0 | 0/0/0 | 11,561/279 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oosterholt_2021.pdf` | Oosterholt SP et al., Population pharmacokinetics of raxibacu…, British journal of clinical… (2021) | popPK | 10 | [10.1111/bcp.14894](https://doi.org/10.1111/bcp.14894) | [33973655](https://pubmed.ncbi.nlm.nih.gov/33973655) | The paper is a population pharmacokinetic study of raxibacumab in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the evidence, likely residing in the full text or tables not included. |
| `Oosterholt_2021_2.pdf` | Oosterholt SP et al., Extrapolation and dosing recommendation…, British journal of clinical… (2021) | popPK | 8 | [10.1111/bcp.14893](https://doi.org/10.1111/bcp.14893) | [33974281](https://pubmed.ncbi.nlm.nih.gov/33974281) | The paper describes a population pharmacokinetic model for raxibacumab in children, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-07 14:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Oosterholt_2021 | relevant | 10 | 2 | The paper is a population pharmacokinetic study of raxibacumab in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the evidence, likely residing in the full text or tables not included. |
| popPK | Oosterholt_2021_2 | relevant | 8 | 0 | The paper describes a population pharmacokinetic model for raxibacumab in children, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Braxibacumab%5D&body=Drug%3A%20raxibacumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_raxibacumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
