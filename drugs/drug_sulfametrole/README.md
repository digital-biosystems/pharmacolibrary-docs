<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;Sulfametrole&quot;}]"></div>

# Sulfametrole

- **generic name:** Sulfametrole
- **ATC codes:** `J01EE03`
- **DrugBank:** [DB15975](https://go.drugbank.com/drugs/DB15975) · **PubChem:** not captured
- **molar mass:** 286.32 g/mol (C9H10N4O3S2) — DrugBank
- **groups:** investigational

## About

Sulfametrole is a sulfonamide antibacterial, combined with trimethoprim, used to treat bacterial infections. It is considered investigational and does not appear to be an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7636179](https://www.wikidata.org/wiki/Q7636179) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 11:12 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 4,346/197 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Welte_2020.pdf` | Welte R et al., Pharmacokinetics of trimethoprim/sulfam…, The Journal of antimicrobia… (2020) | popPK | 9 | [10.1093/jac/dkz556](https://doi.org/10.1093/jac/dkz556) | [31990343](https://pubmed.ncbi.nlm.nih.gov/31990343) | The paper is a population PK study of sulfametrole in humans, but the provided evidence only contains qualitative trends (e.g., "significantly higher", "&lt;5%") and relative proportions (e.g., "one-half of CLtot") rather than specific numeric parameter values (mg/h, L, etc.). |

<sub>queue written 2026-10-07T11:12:52.183113+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Vouloumanou_2011 | irrelevant | 2 | 0 | This is a review paper summarizing clinical and PK/PD evidence without presenting original quantitative disposition parameter values (CL, V, etc.) for sulfametrole in the text. |
| popPK | Welte_2020 | relevant | 9 | 2 | The paper is a population PK study of sulfametrole in humans, but the provided evidence only contains qualitative trends (e.g., "significantly higher", "&lt;5%") and relative proportions (e.g., "one-half of CLtot") rather than specific numeric parameter values (mg/h, L, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
