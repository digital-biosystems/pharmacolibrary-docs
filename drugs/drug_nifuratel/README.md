<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;nifuratel&quot;}]"></div>

# nifuratel

- **generic name:** nifuratel
- **ATC codes:** `G01AX05`
- **DrugBank:** [DB13724](https://go.drugbank.com/drugs/DB13724) · **PubChem:** none
- **molar mass:** 285.27 g/mol (C10H11N3O5S) — DrugBank
- **groups:** investigational

## About

Nifuratel is an antiinfective used against gynecological infections such as trichomoniasis and urinary tract infections. It is considered investigational in DrugBank and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3876717](https://www.wikidata.org/wiki/Q3876717) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:09 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 13,469/341 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2007.pdf` | Li XL et al., An improved HPLC method for determinati…, European journal of drug me… (2007) | popPK | 8 | [10.1007/BF03190994](https://doi.org/10.1007/BF03190994) | [17702193](https://pubmed.ncbi.nlm.nih.gov/17702193) | The study reports population PK parameters (t1/2, Cmax, AUC) for nifuratel in humans, but the specific numeric values for these parameters are not present in the provided evidence text. |

<sub>queue written 2026-10-07 08:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2007 | relevant | 8 | 2 | The study reports population PK parameters (t1/2, Cmax, AUC) for nifuratel in humans, but the specific numeric values for these parameters are not present in the provided evidence text. |
| popPK | Wu_2005 | irrelevant | 2 | 1 | The paper reports a bioequivalence study with qualitative PK comparisons and no specific numeric values for clearance, volume, or absolute bioavailability. |
| popPK | Xie_2023 | irrelevant | 1 | 1 | The study is a mechanistic investigation of nifuratel's antibacterial and anti-inflammatory effects in macrophages and mice, not a pharmacokinetic study, and the single mentioned half-life value is a general literature citation rather than original data from this work. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnifuratel%5D&body=Drug%3A%20nifuratel%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nifuratel/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
