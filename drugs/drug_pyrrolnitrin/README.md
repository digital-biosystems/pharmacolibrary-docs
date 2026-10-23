<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;pyrrolnitrin&quot;}]"></div>

# pyrrolnitrin

- **generic name:** pyrrolnitrin
- **ATC codes:** `D01AA07`
- **DrugBank:** [DB13603](https://go.drugbank.com/drugs/DB13603) · **PubChem:** not captured
- **molar mass:** 257.07 g/mol (C10H6Cl2N2O2) — DrugBank
- **groups:** experimental

## About

Pyrrolnitrin is an antifungal antibiotic used for topical treatment of fungal skin infections. It is currently considered experimental and does not appear to be an approved medicine in major markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q371817](https://www.wikidata.org/wiki/Q371817) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 13:05 | 2:12 | 0/0/0 | 0/0/0 | 0/0/0 | 10,562/275 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hamza_2026.pdf` | Hamza MA et al., Fluoxastrobin Targets NAD[P]H:quinone o…, Phytopathology (2026) | pd | 4 | [10.1094/PHYTO-03-26-0096-R](https://doi.org/10.1094/PHYTO-03-26-0096-R) | [42308472](https://www.ncbi.nlm.nih.gov/pubmed/42308472) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:05:28.488480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hamza_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of fluoxastrobin in fungi, with pyrrolnitrin only mentioned as a co-agent in efficacy screening, and no pharmacokinetic parameters are reported. |
| PGx | Rieusset_2022 | not_relevant | 0 | 0 | The paper studies ecological interactions between wheat and Pseudomonas bacteria, not the pharmacokinetics or pharmacodynamics of pyrrolnitrin in a host organism. |
| popPK | Wesche_2025 | irrelevant | 0 | 0 | The study investigates fungicide resistance and gene expression in Botrytis cinerea, not the pharmacokinetics of pyrrolnitrin in an animal or human host. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
