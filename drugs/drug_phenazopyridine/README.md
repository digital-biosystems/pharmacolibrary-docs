<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;phenazopyridine&quot;}]"></div>

# phenazopyridine

- **generic name:** phenazopyridine
- **ATC codes:** `G04BX06`
- **DrugBank:** [DB01438](https://go.drugbank.com/drugs/DB01438) · **PubChem:** [CID 4756](https://pubchem.ncbi.nlm.nih.gov/compound/4756)
- **molar mass:** 213.2385 g/mol (C11H11N5) — DrugBank
- **groups:** approved, investigational

## About

Phenazopyridine is a urinary tract analgesic used to relieve pain and urological symptoms. It is an approved drug, used mainly for urinary tract discomfort; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3114549](https://www.wikidata.org/wiki/Q3114549) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:02 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 13,697/687 | einfracz / qwen3.8-27b | 7 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shang_2005_2.pdf` | Shang E et al., Determination of phenazopyridine in hum…, Analytical and bioanalytica… (2005) | popPK | 9 | [10.1007/s00216-005-3197-1](https://doi.org/10.1007/s00216-005-3197-1) | [15900475](https://pubmed.ncbi.nlm.nih.gov/15900475) | The paper describes a population PK model for phenazopyridine in humans, but no numeric parameter values are present in the provided evidence. |

<sub>queue written 2026-10-07T09:02:23.763290+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mirfazaelian_2006_2 | irrelevant | 2 | 0 | The paper describes a modeling subroutine for double-peak absorption and uses literature data for phenazopyridine only to validate the algorithm, without reporting original quantitative PK parameter values in the text. |
| popPK | Shang_2005_2 | relevant | 9 | 0 | The paper describes a population PK model for phenazopyridine in humans, but no numeric parameter values are present in the provided evidence. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of antiviral activity (IC50/EC50) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for phenazopyridine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
