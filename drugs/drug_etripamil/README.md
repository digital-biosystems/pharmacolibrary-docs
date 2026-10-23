<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08D&quot;,&quot;href&quot;:&quot;atc/C08D.md&quot;},{&quot;label&quot;:&quot;etripamil&quot;}]"></div>

# etripamil

- **generic name:** etripamil
- **ATC codes:** `C08DA03`
- **DrugBank:** [DB12605](https://go.drugbank.com/drugs/DB12605) · **PubChem:** [CID 91824132](https://pubchem.ncbi.nlm.nih.gov/compound/91824132)
- **molar mass:** 452.595 g/mol (C27H36N2O4) — DrugBank
- **groups:** approved, investigational

## About

Etripamil is a phenylalkylamine calcium channel blocker, a drug class used for heart conditions. It is not yet an established treatment; it is listed as investigational and has no European Union authorisation recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27289030](https://www.wikidata.org/wiki/Q27289030) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 04:19 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 20,810/228 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ip_2024.pdf` | Ip JE et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology in dr… (2024) | popPK | 9 | [10.1002/cpdd.1383](https://doi.org/10.1002/cpdd.1383) | [38315144](https://pubmed.ncbi.nlm.nih.gov/38315144) | The paper reports non-compartmental PK parameters for etripamil in humans, including half-life and Tmax, but specific values for clearance (CL) and volume of distribution (V) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T04:18:49.344259+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ip_2024 | relevant | 9 | 4 | The paper reports non-compartmental PK parameters for etripamil in humans, including half-life and Tmax, but specific values for clearance (CL) and volume of distribution (V) are not explicitly listed in the provided abstract text. |
| popPK | Stambler_2022 | irrelevant | 2 | 0 | The paper is a clinical trial protocol/summary for etripamil efficacy in PSVT and lacks quantitative pharmacokinetic parameters (CL, V, Q, ka) or compartmental models. |
| PD | Stambler_2022 | not_relevant | 0 | 0 | The paper is a study design protocol for a Phase 3 clinical trial and does not report any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
