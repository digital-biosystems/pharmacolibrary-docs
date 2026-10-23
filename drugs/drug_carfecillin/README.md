<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;carfecillin&quot;}]"></div>

# carfecillin

- **generic name:** carfecillin
- **ATC codes:** `G01AA08`
- **DrugBank:** [DB13506](https://go.drugbank.com/drugs/DB13506) · **PubChem:** not captured
- **molar mass:** 454.5 g/mol (C23H22N2O6S) — DrugBank
- **groups:** experimental

## About

Carfecillin is an antibiotic that was used as a urinary anti-infective to treat infections of the urinary tract. It is no longer in routine clinical use and is regarded as an experimental agent, with no current marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5039237](https://www.wikidata.org/wiki/Q5039237) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 07:47 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 6,784/285 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Graber_1978.pdf` | Graber H et al., Pharmacokinetic and clinical studies wi…, International journal of cl… (1978) | popPK | 5 | not captured | [631972](https://pubmed.ncbi.nlm.nih.gov/631972) | The study reports pharmacokinetic observations and concentration levels for carfecillin in humans, but lacks specific quantitative disposition parameters (CL, V, t1/2, ka) required for PK modeling. |
| `Williams_1989.pdf` | Williams PS et al., Novel inhibitors of enkephalin-degradin…, Journal of enzyme inhibition (1989) | pd | 4 | [10.3109/14756368909030368](https://doi.org/10.3109/14756368909030368) | [2489237](https://www.ncbi.nlm.nih.gov/pubmed/2489237) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:47:37.833060+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Graber_1978 | relevant | 5 | 1 | The study reports pharmacokinetic observations and concentration levels for carfecillin in humans, but lacks specific quantitative disposition parameters (CL, V, t1/2, ka) required for PK modeling. |
| popPK | Modr_1977 | irrelevant | 0 | 0 | no_text gate: only 349 chars of text extracted (&lt; 400) |
| popPK | Nouws_1984 | irrelevant | 1 | 0 | The study reports that kinetic parameters were calculated but does not provide the specific numeric values for clearance, volume, or half-life in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
