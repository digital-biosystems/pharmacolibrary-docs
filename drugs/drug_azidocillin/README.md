<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;azidocillin&quot;}]"></div>

# azidocillin

- **generic name:** azidocillin
- **ATC codes:** `J01CE04`
- **DrugBank:** [DB08795](https://go.drugbank.com/drugs/DB08795) · **PubChem:** [CID 15574941](https://pubchem.ncbi.nlm.nih.gov/compound/15574941)
- **molar mass:** 375.402 g/mol (C16H17N5O4S) — DrugBank
- **groups:** experimental

## About

Azidocillin is a penicillin antibiotic belonging to the beta-lactamase sensitive penicillins, used to treat bacterial infections. It is not an established marketed medicine today; it appears only as an experimental compound and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4832566](https://www.wikidata.org/wiki/Q4832566) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 10:49 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 9,486/858 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bergan_1980.pdf` | Bergan T et al., Pharmacokinetics of azidocillin in heal…, Arzneimittel-Forschung (1980) | popPK | 10 | not captured | [6894241](https://pubmed.ncbi.nlm.nih.gov/6894241) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution, bioavailability) for azidocillin in healthy adults directly in the text. |
| `Simon_1976.pdf` | Simon C et al., [Azidocillin: activity in vitro, pharma…, Arzneimittel-Forschung (1976) | popPK | 5 | not captured | [183785](https://pubmed.ncbi.nlm.nih.gov/183785) | The paper reports raw time-concentration points (peak, 4h, 6h) and urine recovery for azidocillin in humans, but lacks calculated compartmental parameters (CL, V, ka) and is primarily a clinical/therapeutic study rather than a dedicated PK modeling study. |

<sub>queue written 2026-10-07T10:49:22.823036+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mignone_1983 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Nau_1987 | irrelevant | 0 | 0 | The paper is a review focusing on ampicillin and general penicillins; azidocillin is only mentioned qualitatively as having effective oral levels, with no quantitative PK parameters or compartmental models provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
