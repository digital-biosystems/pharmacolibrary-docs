<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;carbasalate calcium&quot;}]"></div>

# carbasalate calcium

- **generic name:** carbasalate calcium
- **ATC codes:** `B01AC08`, `N02BA15`
- **DrugBank:** [DB13612](https://go.drugbank.com/drugs/DB13612) · **PubChem:** not captured
- **groups:** investigational

## About

Carbasalate calcium is a salicylate derivative related to aspirin, classified as a non-steroidal anti-inflammatory drug with antithrombotic (antiplatelet) and analgesic/antipyretic uses. It is considered investigational and does not appear to be an approved medicine in major databases such as the EMA.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2203957](https://www.wikidata.org/wiki/Q2203957) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-05 12:40 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 18,785/351 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2011.pdf` | Wang X et al., Analytical determination and pharmacoki…, Journal of veterinary pharm… (2011) | popPK | 9 | [10.1111/j.1365-2885.2010.01250.x](https://doi.org/10.1111/j.1365-2885.2010.01250.x) | [21091728](https://pubmed.ncbi.nlm.nih.gov/21091728) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, t1/2) for the major metabolites of carbasalate calcium in broilers, which constitutes the pharmacokinetic profile of the drug in this species. |

<sub>queue written 2026-10-05T12:39:46.151574+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crews_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Rebecsinib, not carbasalate_calcium. |
| PD | Crews_2023 | not_relevant | 0 | 0 | The paper discusses Rebecsinib, not carbasalate_calcium, and does not report specific numeric PD parameters for the queried drug. |
| popPK | Zian_2024 | irrelevant | 0 | 0 | The study is a clinical trial regarding aspirin use in neurosurgery and does not involve carbasalate_calcium or pharmacokinetic modeling. |
| PD | Zian_2024 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for aspirin (not carbasalate calcium) focusing on bleeding and thrombotic outcomes, with no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
