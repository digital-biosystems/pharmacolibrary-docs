<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;pheneturide&quot;}]"></div>

# pheneturide

- **generic name:** pheneturide
- **ATC codes:** `N03AX13`
- **DrugBank:** [DB13362](https://go.drugbank.com/drugs/DB13362) · **PubChem:** not captured
- **molar mass:** 206.245 g/mol (C11H14N2O2) — DrugBank
- **groups:** experimental

## About

Pheneturide is an anticonvulsant drug that was used to treat epilepsy. It is now considered experimental and is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7181340](https://www.wikidata.org/wiki/Q7181340) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:18 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 5,128/113 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galeazzi_1979.pdf` | Galeazzi RL et al., Pharmacokinetics of phenylethylacetylur…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062387](https://doi.org/10.1007/BF01062387) | [529017](https://pubmed.ncbi.nlm.nih.gov/529017) | The abstract provides explicit quantitative values for half-life and total body clearance for pheneturide in humans. |

<sub>queue written 2026-10-07T07:18:15.677996+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Neels_2004 | irrelevant | 1 | 0 | The paper is a review of therapeutic drug monitoring for various anti-epileptic drugs, including pheneturide, but it does not report original quantitative pharmacokinetic parameter values for pheneturide. |
| PD | Neels_2004 | not_relevant | 1 | 0 | The paper is a general review of therapeutic drug monitoring for various anti-epileptic drugs and explicitly states that information on concentration-effect relationships is scarce, without providing specific numeric PD parameters for pheneturide. |
| popPK | Richens_1970 | irrelevant | 0 | 0 | The paper investigates calcium metabolism disturbances and vitamin D deficiency, not the pharmacokinetic disposition parameters of pheneturide. |
| PD | Richens_1970 | not_relevant | 1 | 0 | The paper reports a qualitative association between high dosage of pheneturide and hypocalcemia but provides no numeric dose-response parameters, concentration-effect curves, or PD model fits. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
