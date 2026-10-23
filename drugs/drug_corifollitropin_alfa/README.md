<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;corifollitropin alfa&quot;}]"></div>

# corifollitropin alfa

- **generic name:** corifollitropin alfa
- **ATC codes:** `G03GA09`
- **DrugBank:** [DB09066](https://go.drugbank.com/drugs/DB09066) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Corifollitropin alfa is a gonadotropin used to stimulate ovulation in assisted reproduction techniques. It is authorised in the European Union and used in fertility treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28852241](https://www.wikidata.org/wiki/Q28852241) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-10-07 08:50 | 0:08 | 0/0/0 | 0/0/0 | 0/0/0 | 12,079/278 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zandvliet_2016.pdf` | Zandvliet AS et al., Impact of patient characteristics on th…, British journal of clinical… (2016) | popPK | 9 | [10.1111/bcp.12939](https://doi.org/10.1111/bcp.12939) | [26991902](https://pubmed.ncbi.nlm.nih.gov/26991902) | The paper describes a population PK analysis of corifollitropin alfa and reports specific quantitative effects of covariates (e.g., ~89% higher exposure at 50 kg vs 90 kg), but absolute parameter estimates (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T08:50:20.547956+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Weiss_2026 | irrelevant | 1 | 1 | This is a clinical study analyzing embryo morphokinetics and pregnancy outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for corifollitropin alfa. |
| popPK | Zandvliet_2016 | relevant | 9 | 3 | The paper describes a population PK analysis of corifollitropin alfa and reports specific quantitative effects of covariates (e.g., ~89% higher exposure at 50 kg vs 90 kg), but absolute parameter estimates (CL, V) are not explicitly listed in the provided text. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and bioactivity of a novel FSH agonist KN015, using corifollitropin alfa only as a comparator or context for half-life, not as the subject drug for PK parameter extraction. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
